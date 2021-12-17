# Import Libraries
# ================================================================================================
from flask import Flask, redirect, request,  url_for, render_template,Response
import numpy as np
from matplotlib import pyplot as plt
import cv2 as cv
import statistics
import pandas as pd

from sklearn import svm
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
from sklearn.metrics import classification_report, confusion_matrix

import warnings
warnings.filterwarnings('ignore')
import pickle
import os
from werkzeug.utils import secure_filename

# Section 1
# ML Codes
# ====================================================================================================
# Enhancement Process
# ----------------------------------------------------------------------------------------------------
def enhancement(inp_img):

    # Input Image Channel
    r_chnl_img = inp_img[:,:,0]
    g_chnl_img = inp_img[:,:,1]
    b_chnl_img = inp_img[:,:,2]

    # ------------------------------------------------------------------------------------------------
    # Method: Applying CLAHE (Contrast Limited Adaptive Histogram Equalization)
    # Image is divided into small blocks (8x8) applied for histogram equalization. Contrast limiting is applied 
    # to avoid noise based on comparing histogram bin with specified contrast limit (default is 40) 
    # ------------------------------------------------------------------------------------------------
    clahe = cv.createCLAHE(clipLimit=2.0, tileGridSize=(8,8))
    r_enh_img = clahe.apply(r_chnl_img)
    g_enh_img = clahe.apply(g_chnl_img)
    b_enh_img = clahe.apply(b_chnl_img)

    # ------------------------------------------------------------------------------------------------
    # Combining enhanced channels
    enh_img = cv.merge((r_enh_img, g_enh_img, b_enh_img))

    #plt.imshow(enh_img)
  
    return enh_img

# ====================================================================================================
# Segmentation Process 
# ----------------------------------------------------------------------------------------------------
def segmentation_process(inp_img):
    
    # Criteria Setting for K-Means Clustering
    # ------------------------------------------------------------------------------------------------
    # Iterations : 100 
    # epsilon- Converge criteria: 0.85
    # ------------------------------------------------------------------------------------------------
    criteria = (cv.TERM_CRITERIA_EPS + cv.TERM_CRITERIA_MAX_ITER, 100, 0.85)

    # Reshaping the input image into a 2D array of pixels and 3 chanels
    reshaped_img = inp_img.reshape((-1,3))
    reshaped_inp_img = np.float32(reshaped_img)

    # Parameters
    no_of_cluster = [5]
    iteration = [15]

    # Experiment 1:
    # --------------------------------------------------------------------
    retval, labels_1, centers = cv.kmeans(reshaped_inp_img, no_of_cluster[0], None, criteria, iteration[0], cv.KMEANS_RANDOM_CENTERS)
    # convert data into 8-bit values
    centers = np.uint8(centers)
    segmented_dt_1 = centers[labels_1.flatten()]
    # reshape data into the original image dimensions
    segmented_img_1 = segmented_dt_1.reshape((inp_img.shape))

    return segmented_img_1, labels_1

# ====================================================================================================
# Function can perform pre-processing, segmentation to detect ROI
# ----------------------------------------------------------------------------------------------------
def process(inp_img_path):
    # Read the Image
    inp_img = cv.imread(inp_img_path)
    # Change color to RGB (from BGR)
    inp_img_cmap = cv.cvtColor(inp_img, cv.COLOR_BGR2RGB)
    # Enhanced Image
    enh_img = enhancement(inp_img_cmap)
    # Convert RGB Color to HSV Color Model
    hsv_cmap = cv.cvtColor(inp_img_cmap, cv.COLOR_BGR2HSV)
    # Segmented Image
    seg_hsv_clas, seg_hsv_lbl = segmentation_process(hsv_cmap)

    return enh_img, seg_hsv_clas, seg_hsv_lbl

# ====================================================================================================
# Create Train Model : HSI Disease/Non-Disease Segmented Color Features Set 
# Features Set : feature_1, feature_2, feature_3, label (1 = Disease, 0 = Non-Disease)
# ----------------------------------------------------------------------------------------------------
FEATURE_SET_BEGIN = [
[75, 160, 84, 1],
[51, 250, 2, 0],
[0, 0, 0, 0],

[78, 154, 82, 1], 
[78, 184, 89, 1],
[74, 160, 72, 1],
[79, 189, 77, 1],

[52, 250, 2, 0],
[53, 249, 2, 0],
[51, 251, 2, 0],
[93, 185, 127, 1],

[45, 250, 2, 0],
[46, 251, 2, 0],    
]

FEATURE_SET_MID_EXPL = [
[75, 160, 84, 1],
[51, 250, 2, 0],
[77, 112, 97, 0],
[76, 135, 88, 0],
[0, 0, 0, 0],
    
[46, 251, 2, 0],
[74, 160, 72, 1],
[72, 115, 74, 0],
[79, 98, 99, 0],
    
[90, 179, 120, 1],
[52, 250, 2, 0],
[74, 150, 76, 0],
[77, 128, 90, 0],

[53, 249, 2, 0],
[90, 173, 120, 1],
[77, 124, 91, 0],
[74, 143, 81, 0],

[74, 151, 70, 0],
[51, 251, 2, 0],
[73, 125, 80, 0],
[79, 189, 77, 1],

[78, 137, 94, 0],
[75, 175, 78, 0],
[45, 250, 2, 0],
[93, 185, 127, 1],

[83, 202, 88, 1],
[77, 219, 75, 1],

[79, 158, 115, 1], 
[66, 225, 68, 1],
]


FEATURE_SET_EXPLORED = [
[76, 192, 84, 0],
#[77, 219, 75, 1],
[40, 250, 2, 0],
[0, 0, 0, 0],
[76, 160, 94, 0],

#[75, 160, 84, 1],
[51, 250, 2, 0],
[77, 112, 97, 0],
[76, 135, 88, 0],

[46, 251, 2, 0],
#[74, 160, 72, 1],
[72, 115, 74, 0],
[79, 98, 99, 0],

[46, 250, 4, 0],
[100, 217, 156, 1],
[80, 174, 86, 0],
[78, 131, 90, 0],

[100, 226, 121, 1],
[100, 212, 130, 1],
[101, 231, 138, 1],

[74, 146, 67, 0],
[80, 189, 69, 0],
[50, 251, 2, 0],

[45, 250, 3, 0],
[100, 216, 155, 1],
[78, 131, 89, 0],
[81, 173, 88, 0],

[45, 251, 2, 0],
[100, 228, 121, 1],
[74, 149, 67, 0],
[81, 191, 70, 0],

[80, 126, 92, 0],
[52, 250, 12, 0],
[100, 216, 144, 1],
[79, 168, 79, 0],

[52, 254, 5, 0],
[80, 193, 66, 0],
[100, 227, 121, 1],
[74, 148, 65, 0],

[100, 215, 149, 1],
[48, 250, 4, 0],
[79, 128, 87, 0],
[81, 171, 84, 0],
    
[78, 158, 82, 0],
[79, 124, 95, 0],
[54, 250, 4, 0],
[94, 193, 130, 1],

[73, 150, 71, 0],
[75, 183, 67, 0],
[95, 208, 127, 1],
[48, 251, 2, 0],

[98, 214, 128, 1],
[78, 126, 91, 0],
[50, 250, 10, 0],
[76, 168, 76, 0],

[74, 162, 77, 0],
[98, 229, 117, 1],
[52, 251, 4, 0],
[76, 197, 69, 0],

[77, 163, 82, 0],
[94, 210, 132, 1],
[48, 250, 4, 0],
[78, 131, 93, 0],

[75, 158, 80, 0],
[51, 251, 3, 0],
[77, 191, 72, 0],
[100, 234, 125, 1],

[90, 179, 120, 1],
[52, 250, 2, 0],
[74, 150, 76, 0],
[77, 128, 90, 0],

[53, 249, 2, 0],
[90, 173, 120, 1],
[77, 124, 91, 0],
[74, 143, 81, 0],

[74, 151, 70, 0],
[51, 251, 2, 0],
[73, 125, 80, 0],
#[79, 189, 77, 1],

[78, 137, 94, 0],
[75, 175, 78, 0],
[45, 250, 2, 0],
[93, 185, 127, 1],

[92, 210, 116, 1],
[46, 251, 2, 0],
[73, 169, 70, 0],
[74, 197, 66, 0],

[97, 208, 122, 1],
[76, 178, 69, 0],
[73, 142, 66, 0],
[82, 221, 67, 0],

[82, 195, 62, 0],
[77, 155, 69, 0],
[66, 254, 2, 0],
[101, 210, 129, 1],

[82, 196, 67, 0],
[95, 181, 127, 0],
[80, 160, 70, 0],
[102, 235, 140, 1],

[99, 208, 130, 1],
[81, 185, 68, 0],
[59, 251, 2, 0],
[91, 220, 81, 0],

[82, 192, 64, 0],
[95, 185, 133, 0],
[103, 237, 135, 1],
[78, 151, 71, 0],

[96, 179, 143, 0],
[83, 187, 74, 0],
[99, 225, 119, 1],
[76, 144, 66, 0],
    
[100, 232, 147, 1],
[96, 157, 195, 1], 
[101, 183, 224, 1], 
[100, 191, 199, 1],
[101, 184, 226, 1],
[100, 209, 190, 1], 
[99, 241, 186, 1]

]

# feature_df 
FEATURE_EXPL_DF = pd.DataFrame(FEATURE_SET_EXPLORED, columns=['feature_1', 'feature_2', 'feature_3', 'label'])

# feature_mid_expl_df
FEATURE_MID_EXPL_DF = pd.DataFrame(FEATURE_SET_MID_EXPL, columns=['feature_1', 'feature_2', 'feature_3', 'label'])

# feature_begin_df
FEATURE_BEGN_DF = pd.DataFrame(FEATURE_SET_BEGIN, columns=['feature_1', 'feature_2', 'feature_3', 'label'])


# ====================================================================================================
# Extraction of Disease/Non-Disease Segmented Color Features based on selected label
# ----------------------------------------------------------------------------------------------------
def get_segmented_features_set(seg_img, seg_lbl):
    seg_label = seg_lbl.reshape(seg_img.shape[0],seg_img.shape[1])
    clstr = np.arange(0,5)
    f_set = []
    #print('HSI Disease/Non-Disease Segmented Color Features')
    for idz in range(len(clstr)):
        count = 1
        for idx in range(seg_label.shape[0]):
            for idy in range(seg_label.shape[1]):
                if (int(seg_label[idx][idy]) == int(clstr[idz])) and (count == 1):
                    f_set.append([int(seg_img[idx,idy,0]), int(seg_img[idx,idy,1]), int(seg_img[idx,idy,2])])
                    print('Cluster: ' + str(clstr[idz]) + ' - Features: ' + str(int(seg_img[idx,idy,0])) + ' ' + str(int(seg_img[idx,idy,1])) + ' ' + str(int(seg_img[idx,idy,2])))
                    #print(str(int(seg_img[idx,idy,0])) + ' ' + str(int(seg_img[idx,idy,1])) + ' ' + str(int(seg_img[idx,idy,2])))
                    count = count + 1
                    continue
                    
    return f_set

# ====================================================================================================
# Feature Extraction: [Test Images]
# Extraction of Disease/Non-Disease Segmented HSI Color Features of Test Images
# ----------------------------------------------------------------------------------------------------
def get_features(seg, seg_lbl):
    feature_set = []
    for idx in range(len(seg)):
        print('========================================')
        print('Features Set of Image ' + str(idx + 1))
        feature_set.append(get_segmented_features_set(seg[idx], seg_lbl[idx]))
    
    t_feature_set = []
    for idx in range(len(feature_set)):
        for idy in range(len(feature_set[idx])):
            t_feature_set.append(feature_set[idx][idy])

    feature_df = pd.DataFrame(t_feature_set, columns=['feature_1', 'feature_2', 'feature_3'])

    return feature_set, feature_df 

# ====================================================================================================
# Classify Test Images using Support Vector Classifier Approach basd Train Model
# ----------------------------------------------------------------------------------------------------
def classify(f_train_df, f_test_df):
    X_test = f_test_df
    '''
    X_train = f_train_df[['feature_1', 'feature_2', 'feature_3']]
    Y_train = f_train_df[['label']]
    X_test = f_test_df
    
    # Training the Algorithm Support Vector Classifier
    # Radial Basis Function (RBF Kernel)
    svclassifier = SVC(kernel='rbf') # 'linear'
    svclassifier.fit(X_train, Y_train)
    filename = 'finalized_model.sav'
    pickle.dump(svclassifier, open(filename, 'wb'))
    '''
    # Calculate Prediction
    filename='finalized_model.sav'
    svclassifier=pickle.load(open(filename, 'rb'))
    Y_pred = svclassifier.predict(X_test)
    
    f_test_df['pred_lbl'] = Y_pred
    
    return f_test_df

# ====================================================================================================
# Get Significant feature from feasible feature set based on identifying Maximum value on the 2st column 
# i/p: [[100, 179, 197], [100, 232, 150], [97, 164, 126]], o/p: [100, 232, 150]
# ----------------------------------------------------------------------------------------------------
def get_significant_feature(f_set):
    value = []
    for idx in range(len(f_set)):
        value.append(f_set[idx][1])

    pos = np.where(np.array(value) == np.array(value).max())[0][0]
    if (int(f_set[pos][1]) > 150) and (int(f_set[pos][0]) > 70): #if int(f_set[pos][0]) > 70:
        return f_set[pos]
    else:
        return []

# ====================================================================================================
# Predict the Disease Level [ Test Images ]
# ----------------------------------------------------------------------------------------------------
def prediction(t_features, t_feature_df):
    classified_f = []
    classified_f_label = []
    #grw_period = []  # growth_period
    
    for idx in range(len(t_features)):
        t_feature_set = []
        valid_features = []
        lbl_feature_test = pd.DataFrame()
        lbl_feature_begin_test = pd.DataFrame()
        trigger = 0
        for idy in range(len(t_features[idx])):
            t_feature_set.append(t_features[idx][idy])

        print('t_feature_set')
        print(t_feature_set)
        
        feature_df_test = pd.DataFrame(t_feature_set, columns=['feature_1', 'feature_2', 'feature_3'])
        lbl_feature_test = classify(FEATURE_EXPL_DF, feature_df_test[['feature_1', 'feature_2', 'feature_3']]) #t_feature_df
        print('================== lbl_feature_test =======================')
        print(lbl_feature_test)

        for idz in range(len(lbl_feature_test)):
            if lbl_feature_test['pred_lbl'][idz] == 1: # and trigger == 0
                valid_features.append([lbl_feature_test['feature_1'][idz], lbl_feature_test['feature_2'][idz], lbl_feature_test['feature_3'][idz]])
                trigger = 1
        
        if trigger == 1:
            if len(get_significant_feature(valid_features)) > 0:
                classified_f.append(get_significant_feature(valid_features))
                classified_f_label.append('Classified Label: Explored Yellow-Rust Disease') #\nPlant Growth: Greater than 4 weeks')
            else:
                classified_f.append([])
                classified_f_label.append('Classified Label: Healthy Image')
            
            #grw_period.append('Plant Growth: Greater than 4 weeks')                

        if trigger == 0:
            lbl_feature_mid_expl_test = classify(FEATURE_MID_EXPL_DF, feature_df_test[['feature_1', 'feature_2', 'feature_3']]) # t_feature_df
            print('================== lbl_feature_mid_expl_test =======================')
            print(lbl_feature_mid_expl_test)

            for idv in range(len(lbl_feature_mid_expl_test)):
                if lbl_feature_mid_expl_test['pred_lbl'][idv] == 1:
                    if int(lbl_feature_mid_expl_test['feature_3'][idv]) > 65:
                        classified_f.append([lbl_feature_mid_expl_test['feature_1'][idv], lbl_feature_mid_expl_test['feature_2'][idv], lbl_feature_mid_expl_test['feature_3'][idv]])
                        classified_f_label.append('Classified Label: Mid-Explored Yellow-Rust Disease') #\nPlant Growth: 2 - 4 weeks')
                        #grw_period.append('Plant Growth: 2 - 4 weeks')
                    else:
                        classified_f.append([])
                        classified_f_label.append('Classified Label: Healthy Image')                        
                    trigger = 1
                    break

        if trigger == 0:
            lbl_feature_begin_test = classify(FEATURE_BEGN_DF, feature_df_test[['feature_1', 'feature_2', 'feature_3']])  # t_feature_df
            print('================== lbl_feature_begin_test =======================')
            print(lbl_feature_begin_test)

            for idv in range(len(lbl_feature_begin_test)):
                if lbl_feature_begin_test['pred_lbl'][idv] == 1 and lbl_feature_begin_test['feature_1'][idv] > 70:
                    classified_f.append([lbl_feature_begin_test['feature_1'][idv], lbl_feature_begin_test['feature_2'][idv], lbl_feature_begin_test['feature_3'][idv]])
                    classified_f_label.append('Classified Label: Begin Yellow-Rust Disease') #\nPlant Growth: Less than 2 weeks')
                    #grw_period.append('Plant Growth: Less than 2 weeks')
                    trigger = 1
                    break

        if trigger == 0:
            classified_f.append([])
            classified_f_label.append('Classified Label: No Disease')

    return classified_f, classified_f_label

# ====================================================================================================
# Extraction of Disease Segmented Region of Interest based on Classification
# ----------------------------------------------------------------------------------------------------
def get_classified_region(seg_img, det_featr, enh_img, f_label):
    seg_det_img = np.zeros((seg_img.shape[0],seg_img.shape[1],3), dtype = int)
    roi_img = np.zeros((seg_img.shape[0],seg_img.shape[1],3), dtype = int)
    for idx in range(seg_img.shape[0]):
        for idy in range(seg_img.shape[1]):
            if int(seg_img[idx][idy][0]) == int(det_featr[0]) and int(seg_img[idx][idy][1]) == int(det_featr[1]) and int(seg_img[idx][idy][2]) == int(det_featr[2]):
                seg_det_img[idx,idy,0] = int(seg_img[idx,idy,0])
                seg_det_img[idx,idy,1] = int(seg_img[idx,idy,1])
                seg_det_img[idx,idy,2] = int(seg_img[idx,idy,2])
                
                roi_img[idx,idy,0] = enh_img[idx,idy,0]
                roi_img[idx,idy,1] = enh_img[idx,idy,1]
                roi_img[idx,idy,2] = enh_img[idx,idy,2]    

    seg_grp_img = np.uint8(seg_det_img)
    roi_grp_img = np.uint8(roi_img)

    #result_img = [ enh_img, seg_grp_img, roi_grp_img ]
    #res_img_title = ['Input Image', 'Segmented ROI Features', f_label]

    result_img = [ enh_img, roi_grp_img ]
    res_img_title = ['Input Image', f_label]
    
    ##show_feature_diagram(result_img, res_img_title)
    
    return seg_grp_img, roi_grp_img

# ====================================================================================================
# Save the prediction
# ----------------------------------------------------------------------------------------------------
def save_prediction(inp_img, input_img_title, img_path):
    fig = plt.figure(figsize=(20, 20))
    rows = 1
    columns = len(inp_img)

    for idx in range(len(inp_img)):
        fig.add_subplot(rows, columns, idx+1)
        plt.imshow(inp_img[idx])
        plt.title(input_img_title[idx])
        plt.axis('off')
    fig.savefig(img_path, facecolor ="w")

# Section 2
# FLASK Codes
# ================================================================================================
app=Flask(__name__)


@app.route("/")
def index():
    return render_template('index.html')

@app.route("/result/<path>")
def result(path):
    print(path)
    image_folder=os.path.join('static','PRED_FOLDER')
    app.config['PRED_FOLDER']=image_folder
    pic=os.path.join(app.config['PRED_FOLDER'],path+'.png')

    return render_template('results.html',output_image='/'+pic)

@app.route("/submit",methods=["POST","GET"])
def submit():
    if request.method=="POST":
        image=request.files["image"]
        UPLOAD_FOLDER = './UPLOAD_FOLDER/'
        app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

        filename = secure_filename(image.filename)
        image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        print('\n\n',image,'\n\n',UPLOAD_FOLDER+filename)

        
        segment_hsv_test_good = []
        segment_hsv_test_good_label = []
        enh_image_good_test = []

        enh_img, seg_hsv_cls, seg_hsv_lbl = process(UPLOAD_FOLDER+filename)
        enh_image_good_test.append(enh_img)
        segment_hsv_test_good.append(seg_hsv_cls)
        segment_hsv_test_good_label.append(seg_hsv_lbl)

        classified_good_features = []
        classified_good_feature_label = []
        classified_good_seg_hsi = []
        classified_good_seg_img = []

        # Extract Feature Set of Segmented Test Images 
        test_good_feature_set, test_good_feature_df = get_features(segment_hsv_test_good, segment_hsv_test_good_label)

        # Classify Test Images
        classified_good_features, classified_good_feature_label = prediction(test_good_feature_set, test_good_feature_df)

        for idz in range(len(classified_good_features)):
            if len(classified_good_features[idz]) > 0:
                seg_grp_img, roi_grp_img = get_classified_region(segment_hsv_test_good[idz], classified_good_features[idz], enh_image_good_test[idz], classified_good_feature_label[idz])
                classified_good_seg_hsi.append(seg_grp_img)
                classified_good_seg_img.append(roi_grp_img)
            if (len(classified_good_features[idz]) == 0) and ('Healthy Image' in classified_good_feature_label[idz]):
                classified_good_seg_hsi.append([])
                classified_good_seg_img.append(enh_image_good_test[idz])

            
        for idx in range(len(classified_good_seg_img)):
            result_img = []
            result_img_title = []
            result_img.append(enh_image_good_test[idx])
            result_img.append(classified_good_seg_img[idx])
            result_img_title.append('Input Image')
            result_img_title.append(classified_good_feature_label[idx])
            
            image_path = './static/PRED_FOLDER/pred_outcome_' + filename[:len(filename)-4] + '.png'

            filename = secure_filename(image.filename)

            save_prediction(result_img, result_img_title, image_path)

        print('\n\n Done\n\n', 'FILENAME=',filename)

        print(url_for('result', path='pred_outcome_'+filename[:len(filename)-4]))

    return url_for('result',path='pred_outcome_'+filename[:len(filename)-4])

# Section 3
# Main Function
# ================================================================================================
if __name__=='__main__':
    #app.run(host='192.168.1.29', port=5001, debug=True)
    app.run(debug=True)