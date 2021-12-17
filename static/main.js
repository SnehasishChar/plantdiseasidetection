(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angulr tutorial\plantDisease\src\main.ts */"zUnb");


/***/ }),

/***/ "AQjp":
/*!****************************************************************!*\
  !*** ./src/app/enter-url-dialog/enter-url-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: EnterUrlDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterUrlDialogComponent", function() { return EnterUrlDialogComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");







class EnterUrlDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.url = '';
    }
    onSave() {
        if (this.url === '' || this.url === null) {
            return;
        }
        this.dialogRef.close({ success: true, url: this.url });
    }
    ngOnInit() { }
    onCancel() {
        this.dialogRef.close();
    }
}
EnterUrlDialogComponent.ɵfac = function EnterUrlDialogComponent_Factory(t) { return new (t || EnterUrlDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
EnterUrlDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EnterUrlDialogComponent, selectors: [["app-enter-url-dialog"]], decls: 12, vars: 1, consts: [[1, "inputDialog"], ["appearance", "outline"], ["matInput", "", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], [1, "btns"], ["mat-raised-button", "", 1, "saveBtn", 3, "click"], ["mat-raised-button", "", 1, "saveBtn", "cancelBtn", 3, "click"]], template: function EnterUrlDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Enter URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EnterUrlDialogComponent_Template_input_ngModelChange_4_listener($event) { return ctx.url = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Url is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EnterUrlDialogComponent_Template_button_click_8_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EnterUrlDialogComponent_Template_button_click_10_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.url);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: [".btns[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 1rem;\n}\n.btns[_ngcontent-%COMP%]   .saveBtn[_ngcontent-%COMP%] {\n  background-color: #6db33f;\n  color: white;\n  margin-right: 1rem;\n}\n.btns[_ngcontent-%COMP%]   .cancelBtn[_ngcontent-%COMP%] {\n  background: white;\n  color: black;\n}\n.inputDialog[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVudGVyLXVybC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUFFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUFFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBRUo7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUVGIiwiZmlsZSI6ImVudGVyLXVybC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRucyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIC5zYXZlQnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZGIzM2Y7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgfVxyXG4gIC5jYW5jZWxCdG4ge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG59XHJcbi5pbnB1dERpYWxvZ3tcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _plant_disease_upload_plant_disease_upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plant-disease-upload/plant-disease-upload.component */ "ciAg");


class AppComponent {
    constructor() {
        this.title = 'plantDisease';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-plant-disease-upload");
    } }, directives: [_plant_disease_upload_plant_disease_upload_component__WEBPACK_IMPORTED_MODULE_1__["PlantDiseaseUploadComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _plant_disease_upload_plant_disease_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plant-disease-upload/plant-disease-upload.component */ "ciAg");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _enter_url_dialog_enter_url_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enter-url-dialog/enter-url-dialog.component */ "AQjp");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _plant_disease_upload_plant_disease_upload_component__WEBPACK_IMPORTED_MODULE_2__["PlantDiseaseUploadComponent"],
        _enter_url_dialog_enter_url_dialog_component__WEBPACK_IMPORTED_MODULE_6__["EnterUrlDialogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"]] }); })();


/***/ }),

/***/ "ciAg":
/*!************************************************************************!*\
  !*** ./src/app/plant-disease-upload/plant-disease-upload.component.ts ***!
  \************************************************************************/
/*! exports provided: PlantDiseaseUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlantDiseaseUploadComponent", function() { return PlantDiseaseUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _enter_url_dialog_enter_url_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enter-url-dialog/enter-url-dialog.component */ "AQjp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function PlantDiseaseUploadComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlantDiseaseUploadComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.uploadImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Upload Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class PlantDiseaseUploadComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    onFileSelect(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(e);
            const file = e.target.files[0];
            this.file = file;
            var reader = new FileReader();
            reader.onload = (event) => {
                this.fileUrl = event.target.result;
            };
            reader.readAsDataURL(file);
            if (file.size <= 0) {
                return;
            }
            console.log(file);
        });
    }
    ngOnInit() { }
    enterUrlFunc() {
        console.log('here');
        const dialogRef = this.dialog.open(_enter_url_dialog_enter_url_dialog_component__WEBPACK_IMPORTED_MODULE_1__["EnterUrlDialogComponent"], {
            width: '20rem',
            data: {},
            panelClass: 'dialog',
            autoFocus: false,
        });
        dialogRef.afterOpened().subscribe((res) => { });
    }
    uploadImage() {
        // window.location.href = "submit"
        console.log(this.file);
        let form_data = new FormData();
        form_data.append('image', this.file);

        let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    let response = this.responseText.split("::");
                    // if (response[0] === "Success" || response[0] === "Warning") {
                    //     console.log('Success');
                    // } else alert(this.responseText);
                    window.location.href = response;
                }
            };
            xhttp.open("POST", "submit", true);
            xhttp.send(form_data);
    }
}
PlantDiseaseUploadComponent.ɵfac = function PlantDiseaseUploadComponent_Factory(t) { return new (t || PlantDiseaseUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
PlantDiseaseUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PlantDiseaseUploadComponent, selectors: [["app-plant-disease-upload"]], decls: 14, vars: 2, consts: [[1, "outerBox"], [1, "topNav"], [1, "heading", "centerItems"], [1, "midCard"], [1, "topBtnsCard"], ["mat-raised-button", "", "type", "button", 1, "browseBtn", 3, "click"], ["hidden", "", "type", "file", "accept", "image/*", 3, "change"], ["fileInput1", ""], ["alt", "", 1, "imgFile", 3, "src"], ["mat-raised-button", "", "type", "button", "class", "browseBtn uploadBtn", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "type", "button", 1, "browseBtn", "uploadBtn", 3, "click"]], template: function PlantDiseaseUploadComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Plant Disease Detection");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlantDiseaseUploadComponent_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9); return _r0.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Browse Image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function PlantDiseaseUploadComponent_Template_input_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9); ctx.onFileSelect($event); return _r0.value = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, PlantDiseaseUploadComponent_button_13_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.fileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.file);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".outerBox[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  background: #6db33f;\n  align-items: center;\n}\n.outerBox[_ngcontent-%COMP%]   .midCard[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100%;\n  background: rgba(255, 255, 255, 0.459);\n}\n.outerBox[_ngcontent-%COMP%]   .midCard[_ngcontent-%COMP%]   .topBtnsCard[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.outerBox[_ngcontent-%COMP%]   .topNav[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem;\n  text-align: center;\n  border: 0.2rem solid white;\n}\n.outerBox[_ngcontent-%COMP%]   .topNav[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: white;\n  font-weight: 500;\n  margin-right: 1rem;\n}\n.browseBtn[_ngcontent-%COMP%] {\n  background: #6db33f;\n  color: white;\n}\n.cancelBtn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.26);\n  color: black;\n}\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.centerItems[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.imgFile[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin-top: 1rem;\n}\n.uploadBtn[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n@media only screen and (min-width: 780px) {\n  .midCard[_ngcontent-%COMP%] {\n    width: 70% !important;\n    min-height: 60% !important;\n  }\n\n  .topNav[_ngcontent-%COMP%] {\n    justify-content: space-around !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBsYW50LWRpc2Vhc2UtdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFBRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHNDQUFBO0FBRUo7QUFESTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUdOO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFDSjtBQUFJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUVOO0FBRUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFDRjtBQUNBO0VBQ0UscUNBQUE7RUFDQSxZQUFBO0FBRUY7QUFBQTtFQUNFLGVBQUE7QUFHRjtBQURBO0VBQ0UsWUFBQTtBQUlGO0FBRkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUtGO0FBSEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFNRjtBQUpBO0VBQ0UsZ0JBQUE7QUFPRjtBQUxBO0VBQ0U7SUFDRSxxQkFBQTtJQUNBLDBCQUFBO0VBUUY7O0VBTkE7SUFDRSx3Q0FBQTtFQVNGO0FBQ0YiLCJmaWxlIjoicGxhbnQtZGlzZWFzZS11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXJCb3gge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZDogIzZkYjMzZjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC5taWRDYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NTkpO1xyXG4gICAgLnRvcEJ0bnNDYXJke1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudG9wTmF2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDAuMnJlbSBzb2xpZCB3aGl0ZTtcclxuICAgIC5oZWFkaW5nIHtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uYnJvd3NlQnRuIHtcclxuICBiYWNrZ3JvdW5kOiAjNmRiMzNmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2FuY2VsQnRuIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjYpO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4ucG9pbnRlcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmljb257XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jZW50ZXJJdGVtc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmltZ0ZpbGV7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuLnVwbG9hZEJ0bntcclxuICBtYXJnaW4tdG9wOjFyZW07XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3ODBweCkge1xyXG4gIC5taWRDYXJkIHtcclxuICAgIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IDYwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAudG9wTmF2e1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map