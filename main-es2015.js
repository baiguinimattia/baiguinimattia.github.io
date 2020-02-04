(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-header></app-header>\n    <div class=\"content-container\">\n        <div class=\"content-area\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n    <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home-container\">\n    <div id=\"image-container\">\n\n    </div>\n    <div id=\"details-container\">\n        <div class=\"personal-img\">\n            <img src=\"../../assets/personal-img.jpg\" alt=\"\">\n            <a [href]=\"resume\" appExternalUrl class=\"btn resume\">SEE RESUME</a>\n            <h5 class=\"owner\">BAIGUINI MATTIA - FULLSTACK WEB DEVELOPER</h5>\n        </div>\n    </div>\n\n    <div id=\"project-container\">\n        <h3 class=\"project-title\">MATMAL - TV SHOW LIBRARY</h3>\n\n        <div id=\"swiper-container\">\n\n            <app-swiper></app-swiper>\n        </div>\n        <div id=\"extra-container\">\n            <h3>Technologies used</h3>\n            <clr-accordion>\n                <clr-accordion-panel>\n                    <clr-accordion-title>FRONTEND</clr-accordion-title>\n                    <clr-accordion-content *clrIfExpanded>ANGULAR 8+ | NGXS | CLARITY DESIGN</clr-accordion-content>\n                </clr-accordion-panel>\n\n                <clr-accordion-panel>\n                    <clr-accordion-title>BACKEND</clr-accordion-title>\n                    <clr-accordion-content *clrIfExpanded>NEST.JS</clr-accordion-content>\n                </clr-accordion-panel>\n\n                <clr-accordion-panel>\n                    <clr-accordion-title>DATABASE & API'S</clr-accordion-title>\n                    <clr-accordion-content *clrIfExpanded>POSTGRES | TYPEORM | TMDB API</clr-accordion-content>\n                </clr-accordion-panel>\n            </clr-accordion>\n\n            <a class=\"btn git\" [href]=\"gitCode\" appExternalUrl><img src=\"../../assets/010-github.svg\"> GIT PAGE</a>\n            <a class=\"btn live\" [href]=\"liveLink\" appExternalUrl>LIVE CODE</a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"footer-container\">\n    <a [href]=\"linkedIn\" appExternalUrl class=\"btn linkedIn\"><img src=\"../../../assets/linkedin-logo.svg\" alt=\"\"></a>\n    <a [href]=\"github\" appExternalUrl class=\"btn github\"><img src=\"../../../assets/010-github.svg\" alt=\"\"></a>\n    <br>\n    <span>&copy; Baiguini Mattia</span>\n    <div>Icons made by <a href=\"https://www.flaticon.com/authors/freepik\" title=\"Freepik\">Freepik</a> from <a href=\"https://www.flaticon.com/\" title=\"Flaticon\">www.flaticon.com</a></div>\n    <br>\n    <div>Icons made by <a href=\"https://www.flaticon.com/authors/google\" title=\"Google\">Google</a> from <a href=\"https://www.flaticon.com/\" title=\"Flaticon\">www.flaticon.com</a></div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/header/header.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/header/header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"header-container\">\n    <h5 class=\"heading-name\">BAIGUINI MATTIA</h5>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/swiper/swiper.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/swiper/swiper.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<swiper class=\"swiper\" fxFlex=\"auto\" [config]=\"config\">\n    <div class=\"swiper-slide\">\n        <div id=\"element-container\">\n            <div id=\"details-container\">\n                <img src=\"../../../assets/matmal-1.JPG\" alt=\"\">\n\n            </div>\n\n        </div>\n    </div>\n    <div class=\"swiper-slide\">\n        <div id=\"element-container\">\n            <div id=\"details-container\">\n                <img src=\"../../../assets/matmal-2.JPG\" alt=\"\">\n\n            </div>\n\n        </div>\n    </div>\n    <div class=\"swiper-slide\">\n        <div id=\"element-container\">\n            <div id=\"details-container\">\n                <img src=\"../../../assets/matmal-3.JPG\" alt=\"\">\n\n            </div>\n\n        </div>\n    </div>\n</swiper>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");




const externalUrlProvider = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('externalUrlRedirectResolver');
const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    {
        path: 'externalRedirect', resolve: {
            url: externalUrlProvider,
        },
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: '*', redirectTo: '', pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [
            {
                provide: externalUrlProvider,
                useValue: (route) => {
                    const externalUrl = route.paramMap.get('externalUrl');
                    window.open(externalUrl, '_self');
                },
            },
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'personal-website';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm2015/clr-angular.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_8__["HomeModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home-container {\r\n    width: 100%;\r\n    height: auto;\r\n    background-color: #DCC4A3;\r\n    overflow: hidden;\r\n}\r\n\r\n#image-container {\r\n    margin: 0 auto;\r\n    height: 250px;\r\n    background: url('developer-4523094.jpg') center center/cover no-repeat;\r\n}\r\n\r\n@media(min-width: 320px) and (max-width: 600px) {\r\n    #image-container {\r\n        height: 350px;\r\n    }\r\n}\r\n\r\n@media(min-width: 600px) and (max-width: 768px) {\r\n    #image-container {\r\n        height: 400px;\r\n    }\r\n}\r\n\r\n@media(min-width: 768px) {\r\n    #image-container {\r\n        height: 450px;\r\n    }\r\n}\r\n\r\n#details-container {\r\n    height: 450px;\r\n    margin: 0 auto;\r\n    background-color: #F3E4CF;\r\n    position: relative;\r\n    text-align: center;\r\n}\r\n\r\n.personal-img {\r\n    width: 250px;\r\n    height: 250px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.personal-img img {\r\n    width: 100%;\r\n    height: 100%;\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n    border-radius: 50%;\r\n    border: 5px solid #000000;\r\n    margin-top: 2rem;\r\n}\r\n\r\n.owner {\r\n    font-weight: 800;\r\n    text-align: center;\r\n}\r\n\r\n#project-container {\r\n    text-align: center;\r\n}\r\n\r\n#swiper-container {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.project-title {\r\n    font-weight: 800;\r\n    font-size: 0.85rem;\r\n}\r\n\r\n#extra-container {\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n    height: auto;\r\n    padding: 1rem 0;\r\n}\r\n\r\n#extra-container h3 {\r\n    margin: 0;\r\n    margin-bottom: 0.5rem;\r\n    font-weight: 500;\r\n}\r\n\r\n.btn {\r\n    border: none;\r\n    height: 50px;\r\n    background-color: #000000;\r\n    color: #fff;\r\n    font-size: 1rem;\r\n}\r\n\r\n.btn:hover {\r\n    cursor: pointer;\r\n    background-color: darkgrey;\r\n}\r\n\r\n.btn.git {\r\n    height: 50px;\r\n}\r\n\r\n.btn.git img {\r\n    width: 50px;\r\n}\r\n\r\n.btn.live {\r\n    padding-top: 0.2rem;\r\n}\r\n\r\n.btn.resume {\r\n    padding-top: 0.25rem;\r\n    margin-top: 0.4rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHNFQUFpRjtBQUNyRjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFtQjtPQUFuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNob21lLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQ0M0QTM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4jaW1hZ2UtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvZGV2ZWxvcGVyLTQ1MjMwOTQuanBnKSBjZW50ZXIgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgI2ltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgI2ltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICNpbWFnZS1jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNkZXRhaWxzLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNFNENGO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGVyc29uYWwtaW1nIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnBlcnNvbmFsLWltZyBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgIzAwMDAwMDtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcbi5vd25lciB7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jcHJvamVjdC1jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jc3dpcGVyLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ucHJvamVjdC10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG59XHJcblxyXG4jZXh0cmEtY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDFyZW0gMDtcclxufVxyXG5cclxuI2V4dHJhLWNvbnRhaW5lciBoMyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcclxufVxyXG5cclxuLmJ0bi5naXQge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uYnRuLmdpdCBpbWcge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi5idG4ubGl2ZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMC4ycmVtO1xyXG59XHJcblxyXG4uYnRuLnJlc3VtZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDAuNHJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.liveLink = "https://matmal-tv.herokuapp.com/";
        this.gitCode = "https://github.com/baiguinimattia/TVSeriesWebApp";
        this.resume = "https://drive.google.com/open?id=1ALlgSlSsYB9CDdBtnmEq_TBuTtbBRzY9";
    }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm2015/clr-angular.js");






let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"]
        ],
        exports: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/shared/external-url.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/external-url.directive.ts ***!
  \**************************************************/
/*! exports provided: ExternalUrlDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalUrlDirective", function() { return ExternalUrlDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ExternalUrlDirective = class ExternalUrlDirective {
    constructor(el, router) {
        this.el = el;
        this.router = router;
    }
    clicked(event) {
        const url = this.el.nativeElement.href;
        if (!url) {
            return;
        }
        this.router.navigate(['/externalRedirect', { externalUrl: url }], {
            skipLocationChange: true,
        });
        event.preventDefault();
    }
};
ExternalUrlDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event'])
], ExternalUrlDirective.prototype, "clicked", null);
ExternalUrlDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appExternalUrl]'
    })
], ExternalUrlDirective);



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer-container {\r\n    width: 100vw;\r\n    height: auto;\r\n    background-color: #F3E4CF;\r\n    text-align: center;\r\n    padding: 1rem 1rem;\r\n    font-size: 0.85rem;\r\n}\r\n\r\n.btn {\r\n    border: none;\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n.btn:hover {\r\n    background-color: darkgray;\r\n}\r\n\r\n.btn.linkedIn img {\r\n    width: 50px;\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n}\r\n\r\n.btn.github img {\r\n    width: 50px;\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFtQjtPQUFuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQW1CO09BQW5CLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZm9vdGVyLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNFNENGO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMXJlbSAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xyXG59XHJcblxyXG4uYnRuLmxpbmtlZEluIGltZyB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuXHJcbi5idG4uZ2l0aHViIGltZyB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() {
        this.linkedIn = "https://www.linkedin.com/in/mattia-baiguini-788002140/";
        this.github = "https://github.com/baiguinimattia";
    }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header-container {\r\n    height: 60px;\r\n    width: 100vw;\r\n    background-color: #EBDCC3;\r\n    position: fixed;\r\n    top: 0;\r\n    text-align: center;\r\n    z-index: 10;\r\n}\r\n\r\n.heading-name {\r\n    font-weight: 800;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n@media(max-width: 320px) {\r\n    .heading-name {\r\n        font-size: 1.2rem;\r\n    }\r\n}\r\n\r\n@media(min-width: 320px) {\r\n    .heading-name {\r\n        font-size: 1.25rem;\r\n    }\r\n}\r\n\r\n.clr-row {\r\n    height: 100%;\r\n}\r\n\r\n.nav-btn {\r\n    border: none;\r\n    color: #fff;\r\n    padding: 0.5rem;\r\n    font-size: 0.75rem;\r\n    height: 100%;\r\n}\r\n\r\n.left {\r\n    background-color: #0588D9;\r\n}\r\n\r\n.middle {\r\n    background-color: #C1B5B4;\r\n}\r\n\r\n.right {\r\n    background-color: #E23815;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixNQUFNO0lBQ04sa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJEQ0MzO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5oZWFkaW5nLW5hbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gICAgLmhlYWRpbmctbmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6IDMyMHB4KSB7XHJcbiAgICAuaGVhZGluZy1uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jbHItcm93IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm5hdi1idG4ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5sZWZ0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTg4RDk7XHJcbn1cclxuXHJcbi5taWRkbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0MxQjVCNDtcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMjM4MTU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm2015/clr-angular.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _swiper_swiper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./swiper/swiper.component */ "./src/app/shared/swiper/swiper.component.ts");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _external_url_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./external-url.directive */ "./src/app/shared/external-url.directive.ts");










const DEFAULT_SWIPER_CONFIG = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};
let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _swiper_swiper_component__WEBPACK_IMPORTED_MODULE_5__["SwiperComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _external_url_directive__WEBPACK_IMPORTED_MODULE_8__["ExternalUrlDirective"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_6__["SwiperModule"]
        ],
        providers: [
            {
                provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_6__["SWIPER_CONFIG"],
                useValue: DEFAULT_SWIPER_CONFIG
            }
        ],
        exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _swiper_swiper_component__WEBPACK_IMPORTED_MODULE_5__["SwiperComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _external_url_directive__WEBPACK_IMPORTED_MODULE_8__["ExternalUrlDirective"]]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/swiper/swiper.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/swiper/swiper.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#element-container {\r\n    height: auto;\r\n    background-color: #DCC4A3;\r\n    text-align: center;\r\n}\r\n\r\n#details-container {\r\n    margin: 1rem 0;\r\n    height: 80%;\r\n    border-radius: 2.5%;\r\n    position: relative;\r\n}\r\n\r\n#details-container img {\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#data-container {\r\n    background-color: black;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 50%;\r\n    opacity: 0.7;\r\n    bottom: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N3aXBlci9zd2lwZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3N3aXBlci9zd2lwZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNlbGVtZW50LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRENDNEEzO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jZGV0YWlscy1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIuNSU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNkZXRhaWxzLWNvbnRhaW5lciBpbWcge1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI2RhdGEtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIGJvdHRvbTogMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/swiper/swiper.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/swiper/swiper.component.ts ***!
  \***************************************************/
/*! exports provided: SwiperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperComponent", function() { return SwiperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SwiperComponent = class SwiperComponent {
    constructor() {
        this.config = {
            initialSlide: 0,
            a11y: true,
            direction: 'horizontal',
            slidesPerView: 1,
            slideToClickedSlide: true,
            mousewheel: false,
            scrollbar: false,
            watchSlidesProgress: true,
            navigation: true,
            keyboard: true,
            pagination: false,
            centeredSlides: true,
            loop: false,
            roundLengths: true,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            spaceBetween: 50,
            breakpoints: {
                // when window width is >= 320px
                1200: {
                    slidesPerView: 1
                },
                1000: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 1
                },
                500: {
                    slidesPerView: 1
                },
                320: {
                    slidesPerView: 1
                }
            }
        };
    }
    ngOnInit() {
    }
};
SwiperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-swiper',
        template: __webpack_require__(/*! raw-loader!./swiper.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/swiper/swiper.component.html"),
        styles: [__webpack_require__(/*! ./swiper.component.css */ "./src/app/shared/swiper/swiper.component.css")]
    })
], SwiperComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\PROJECTS\personal-website\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map