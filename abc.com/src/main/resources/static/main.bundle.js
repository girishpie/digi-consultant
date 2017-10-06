webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<home class=\"app-root\"></home>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-root {\n  background: #ef00ef; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__home_home_module__["a" /* HomeModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" href=\"#\">test</a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav\">\r\n       <li class=\"dropdown\">\r\n        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Admin\r\n          <span class=\"caret\"></span></a>\r\n        <ul class=\"dropdown-menu\">\r\n          <li><a href=\"#/user\">User</a></li>\r\n          <li><a href=\"#\">Role</a></li>\r\n          <li><a href=\"#\">Category</a></li>\r\n          <li><a href=\"#\">Department</a></li>\r\n        </ul>\r\n      </li>\r\n      <li><a href=\"#\">Project</a></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-menu {\n  background-color: white;\n  color: black;\n  font-family: 'Open Sans Reg';\n  font-size: 14px;\n  font-weight: bold; }\n\n.digi-menu {\n  box-shadow: 0 0 1px #aaa; }\n\n.digi-menu-text {\n  font-family: 'Open Sans Reg';\n  font-size: 14px;\n  font-weight: bold; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'header',
        template: __webpack_require__("../../../../../src/app/home/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/header/header.component.scss")]
    })
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/header/header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_component__ = __webpack_require__("../../../../../src/app/home/header/header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HeaderModule = (function () {
    function HeaderModule() {
    }
    return HeaderModule;
}());
HeaderModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__header_component__["a" /* HeaderComponent */]
        ],
        imports: [],
        exports: [__WEBPACK_IMPORTED_MODULE_1__header_component__["a" /* HeaderComponent */]],
        providers: [],
        bootstrap: []
    })
], HeaderModule);

//# sourceMappingURL=header.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body1 {\r\n  font-family: OpenSans-Regular;\r\n  font-size: 14px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"body1\"></header>\r\n<div class=\"row\">\r\n<search></search>\r\n  <div>\r\n<div class=\"row\">\r\n<ui-view></ui-view>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_header_module__ = __webpack_require__("../../../../../src/app/home/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_user_component__ = __webpack_require__("../../../../../src/app/users/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_user_module__ = __webpack_require__("../../../../../src/app/users/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search_module__ = __webpack_require__("../../../../../src/app/search/search.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pagination_pagination_module__ = __webpack_require__("../../../../../src/app/pagination/pagination.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__query_obeservables_query_params_service__ = __webpack_require__("../../../../../src/app/home/query-obeservables/query-params.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var userState = { name: 'user', url: '/user', component: __WEBPACK_IMPORTED_MODULE_3__users_user_component__["a" /* UserComponent */] };
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_9_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_2__header_header_module__["a" /* HeaderModule */],
            __WEBPACK_IMPORTED_MODULE_5__users_user_module__["a" /* UserModule */],
            __WEBPACK_IMPORTED_MODULE_6__search_search_module__["a" /* SearchModule */],
            __WEBPACK_IMPORTED_MODULE_7__pagination_pagination_module__["a" /* PaginationModule */],
            __WEBPACK_IMPORTED_MODULE_4__uirouter_angular__["UIRouterModule"].forRoot({ states: [userState], useHash: true })
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_8__query_obeservables_query_params_service__["a" /* QueryParamsService */]],
        bootstrap: []
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/query-obeservables/query-params.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryParamsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__query_params__ = __webpack_require__("../../../../../src/app/home/query-obeservables/query-params.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by gipai on 10/4/2017.
 */



var QueryParamsService = (function () {
    function QueryParamsService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.queryParams = new __WEBPACK_IMPORTED_MODULE_1__query_params__["a" /* QueryParams */]();
    }
    QueryParamsService.prototype.setSearchString = function (searchString) {
        this.queryParams.searchString = searchString;
        this.subject.next(this.queryParams);
    };
    QueryParamsService.prototype.setPageNumber = function (page) {
        this.queryParams.pageNumber = page;
        this.subject.next(this.queryParams);
    };
    QueryParamsService.prototype.getQueryParams = function () {
        return this.subject.asObservable();
    };
    return QueryParamsService;
}());
QueryParamsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], QueryParamsService);

//# sourceMappingURL=query-params.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/query-obeservables/query-params.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryParams; });
/**
 * Created by gipai on 10/4/2017.
 */
var QueryParams = (function () {
    function QueryParams() {
        this._pageNumber = 0;
        this._pageSize = 3;
    }
    Object.defineProperty(QueryParams.prototype, "searchString", {
        get: function () {
            return this._searchString;
        },
        set: function (value) {
            this._searchString = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryParams.prototype, "pageNumber", {
        get: function () {
            return this._pageNumber;
        },
        set: function (value) {
            this._pageNumber = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryParams.prototype, "pageSize", {
        get: function () {
            return this._pageSize;
        },
        set: function (value) {
            this._pageSize = value;
        },
        enumerable: true,
        configurable: true
    });
    return QueryParams;
}());

//# sourceMappingURL=query-params.js.map

/***/ }),

/***/ "../../../../../src/app/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <pagination-controls (pageChange)=\"getPage($event)\" id=\"server\"></pagination-controls>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pagination/pagination.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pagination/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_query_obeservables_query_params_service__ = __webpack_require__("../../../../../src/app/home/query-obeservables/query-params.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by gipai on 10/3/2017.
 */


var PaginationComponent = (function () {
    function PaginationComponent(queryParamsService) {
        this.queryParamsService = queryParamsService;
    }
    PaginationComponent.prototype.getPage = function (page) {
        this.queryParamsService.setPageNumber(page - 1);
    };
    return PaginationComponent;
}());
PaginationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'pagination',
        template: __webpack_require__("../../../../../src/app/pagination/pagination.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pagination/pagination.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__home_query_obeservables_query_params_service__["a" /* QueryParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__home_query_obeservables_query_params_service__["a" /* QueryParamsService */]) === "function" && _a || Object])
], PaginationComponent);

var _a;
//# sourceMappingURL=pagination.component.js.map

/***/ }),

/***/ "../../../../../src/app/pagination/pagination.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pagination_component__ = __webpack_require__("../../../../../src/app/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by gipai on 10/3/2017.
 */



var PaginationModule = (function () {
    function PaginationModule() {
    }
    return PaginationModule;
}());
PaginationModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__pagination_component__["a" /* PaginationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ngx_pagination__["a" /* NgxPaginationModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__pagination_component__["a" /* PaginationComponent */]],
        providers: [],
        bootstrap: []
    })
], PaginationModule);

//# sourceMappingURL=pagination.module.js.map

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<input type=\"text\"  name=\"search\" placeholder=\"Search..\" [(ngModel)]=\"searchString\">\r\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"OnSearch()\" >Go</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/search/search.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_query_obeservables_query_params_service__ = __webpack_require__("../../../../../src/app/home/query-obeservables/query-params.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = (function () {
    function SearchComponent(queryParamsService) {
        this.queryParamsService = queryParamsService;
    }
    SearchComponent.prototype.OnSearch = function () {
        this.queryParamsService.setSearchString(this.searchString);
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'search',
        template: __webpack_require__("../../../../../src/app/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search/search.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__home_query_obeservables_query_params_service__["a" /* QueryParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__home_query_obeservables_query_params_service__["a" /* QueryParamsService */]) === "function" && _a || Object])
], SearchComponent);

var _a;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/search/search.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SearchModule = (function () {
    function SearchModule() {
    }
    return SearchModule;
}());
SearchModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__search_component__["a" /* SearchComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__search_component__["a" /* SearchComponent */]],
        providers: [],
        bootstrap: []
    })
], SearchModule);

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ "../../../../../src/app/users/new/new-user.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Trigger the modal with a button -->\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"newUser\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\" [ngStyle]=\"{'display': visible ? 'block' : 'none'}\">\r\n  <div class=\"modal-dialog \" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add New User</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <label for=\"user-name\" class=\"form-control-label\">Email:</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"user-name\" [(ngModel)]=\"userName\" name=\"first\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password-text\" class=\"form-control-label\">Password:</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"password-text\" [(ngModel)]=\"password\" name=\"first\">\r\n          </div>\r\n          <div class=\"form-group\" >\r\n            <label for=\"role-option\" class=\"form-control-label\">Roles:</label>\r\n            <select id=\"role-option\" class=\"form-control\"   [(ngModel)]=\"userRole\" name=\"roles\">\r\n              <option *ngFor=\"let role of availableRoles\" [value]=\"role.id\">\r\n                {{ role.name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addNewUser()\" >Add</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/users/new/new-user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/new/new-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/users/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__role_service__ = __webpack_require__("../../../../../src/app/users/role.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__("../../../../../src/app/users/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users__ = __webpack_require__("../../../../../src/app/users/users.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by gipai on 10/3/2017.
 */





var NewUserComponent = (function () {
    function NewUserComponent(userService, roleService, users) {
        this.userService = userService;
        this.roleService = roleService;
        this.users = users;
    }
    NewUserComponent.prototype.ngOnInit = function () {
        this.getRoles();
    };
    NewUserComponent.prototype.addNewUser = function () {
        var _this = this;
        this.roles = new Array();
        this.roles.push(this.userRole);
        console.log(this.userName + this.password + this.userRole);
        var user = new __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */]();
        user.setUserName(this.userName);
        user.setPassword(this.password);
        user.setRoleIds(this.roles);
        this.userService.save(user).subscribe(function (data) {
            console.log(data);
            user.setId(data);
            _this.users.addUser(user);
            jQuery('.modal').modal('toggle');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewUserComponent.prototype.getRoles = function () {
        var _this = this;
        this.roleService.getRoles().subscribe(function (data) {
            _this.availableRoles = data;
        }, function (error) {
            window.alert(error._body);
        });
    };
    return NewUserComponent;
}());
NewUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'new-user',
        template: __webpack_require__("../../../../../src/app/users/new/new-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/new/new-user.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__role_service__["a" /* RoleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__role_service__["a" /* RoleService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__users__["a" /* Users */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__users__["a" /* Users */]) === "function" && _c || Object])
], NewUserComponent);

var _a, _b, _c;
//# sourceMappingURL=new-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/new/new-user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_user_component__ = __webpack_require__("../../../../../src/app/users/new/new-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewUserModule = (function () {
    function NewUserModule() {
    }
    return NewUserModule;
}());
NewUserModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__new_user_component__["a" /* NewUserComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__new_user_component__["a" /* NewUserComponent */]],
        providers: [],
        bootstrap: []
    })
], NewUserModule);

//# sourceMappingURL=new-user.module.js.map

/***/ }),

/***/ "../../../../../src/app/users/role.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__role__ = __webpack_require__("../../../../../src/app/users/role.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by gipai on 10/3/2017.
 */
/**
 * Created by gipai on 10/2/2017.
 */




var RoleService = (function () {
    function RoleService(http) {
        this.http = http;
        this.userUrl = 'http://localhost:8080/api/role/';
    }
    RoleService.prototype.getRoles = function () {
        var endPoint = this.userUrl;
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var roles = new Array();
            for (i = 0; i < response.length; i++) {
                var role = new __WEBPACK_IMPORTED_MODULE_3__role__["a" /* Role */]();
                role.setId(response[i].id);
                role.setName(response[i].name);
                role.setPermissions(response[i].permissions);
                roles.push(role);
            }
            return roles;
        });
    };
    return RoleService;
}());
RoleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], RoleService);

var _a;
//# sourceMappingURL=role.service.js.map

/***/ }),

/***/ "../../../../../src/app/users/role.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Role; });
var Role = (function () {
    function Role() {
    }
    Role.prototype.setName = function (name) {
        this.name = name;
    };
    Role.prototype.getName = function () {
        return this.name;
    };
    Role.prototype.setId = function (id) {
        this.id = id;
    };
    Role.prototype.getId = function () {
        return this.id;
    };
    Role.prototype.setPermissions = function (permissions) {
        this.permissions = permissions;
    };
    Role.prototype.getPermissions = function () {
        return this.permissions;
    };
    return Role;
}());

//# sourceMappingURL=role.js.map

/***/ }),

/***/ "../../../../../src/app/users/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container digi-user\" >\r\n<table class=\"table table-bordered\">\r\n  <thead>\r\n  <tr>\r\n    <th>User</th>\r\n    <th>Password</th>\r\n    <th>Actions</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n      <tr *ngFor=\"let user of users.users | paginate: { itemsPerPage: 3, currentPage: currentPage, totalItems: users.totalItems, id:'server'} \">\r\n        <td class = \"table-cell\">{{ user.username }}</td>\r\n        <td class = \"table-cell\">{{ user.password }}</td>\r\n        <td class = \"table-cell\">\r\n          <button type=\"button\" class=\"btn btn-primary\" (click) = \"deleteUser(user)\">\r\n            <span class=\"glyphicon glyphicon-remove\" ></span>\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-primary\">\r\n            <span class=\"glyphicon glyphicon-pencil\"></span></button>\r\n          <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#newUser\">\r\n             <span class=\"glyphicon glyphicon-plus\" ></span></button>\r\n        </td>\r\n     </tr>\r\n  </tbody>\r\n </table>\r\n  <pagination-controls (pageChange)=\"getPage($event)\" id=\"server\"></pagination-controls>\r\n  <new-user></new-user>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/users/user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".digi-user th {\n  background-color: #efefef;\n  color: black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/users/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users__ = __webpack_require__("../../../../../src/app/users/users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__ = __webpack_require__("../../../../../src/app/home/query-obeservables/query-params.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = (function () {
    function UserComponent(userService, users, queryParamsService) {
        this.userService = userService;
        this.users = users;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.getUsers(null);
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getUsers(queryParam);
        });
    };
    UserComponent.prototype.getUsers = function (queryParams) {
        this.userService.getUsers(queryParams).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body.errorMessage);
        });
    };
    UserComponent.prototype.deleteUser = function (user) {
        this.userService.delete(user.getId()).subscribe(function (data) {
        });
    };
    UserComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    UserComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'user',
        template: __webpack_require__("../../../../../src/app/users/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/user.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__users__["a" /* Users */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__users__["a" /* Users */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__home_query_obeservables_query_params_service__["a" /* QueryParamsService */]) === "function" && _c || Object])
], UserComponent);

var _a, _b, _c;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_component__ = __webpack_require__("../../../../../src/app/users/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/users/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_new_user_module__ = __webpack_require__("../../../../../src/app/users/new/new-user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__role_service__ = __webpack_require__("../../../../../src/app/users/role.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users__ = __webpack_require__("../../../../../src/app/users/users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__user_component__["a" /* UserComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_5__new_new_user_module__["a" /* NewUserModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__user_component__["a" /* UserComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_7__users__["a" /* Users */],
            __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_6__role_service__["a" /* RoleService */]
        ],
        bootstrap: []
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ "../../../../../src/app/users/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__("../../../../../src/app/users/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users__ = __webpack_require__("../../../../../src/app/users/users.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by gipai on 10/2/2017.
 */





var UserService = (function () {
    function UserService(http, users) {
        this.http = http;
        this.users = users;
        this.userUrl = 'http://localhost:8080/api/user/';
    }
    UserService.prototype.getUsers = function (queryParams) {
        var _this = this;
        var pageNumber = 0;
        var pageSize = 3;
        var searchString = null;
        if (queryParams !== null) {
            pageNumber = queryParams.pageNumber;
            if (queryParams.searchString) {
                searchString = queryParams.searchString;
            }
        }
        var endPoint = this.userUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var users = new Array();
            for (i = 0; i < response.length; i++) {
                var user = new __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */]();
                user.setUserName(response[i].username);
                user.setPassword(response[i].password);
                user.setId(response[i].id);
                user.setRoleIds(response[i].roleIds);
                users.push(user);
            }
            _this.users.setUsers(users);
            _this.users.setTotalItems(res1.totalElements);
            return true;
        });
    };
    UserService.prototype.save = function (user) {
        var _this = this;
        var endPoint = this.userUrl;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // Returns response
        return this.http.post(endPoint, user)
            .map(function (res) {
            var res1 = res.json();
            user.setId(res1.id);
            _this.users.addUser(user);
            return res1.id;
        });
    };
    UserService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.userUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.users.deleteUser(res1.id);
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__users__["a" /* Users */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__users__["a" /* Users */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/users/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    User.prototype.setUserName = function (username) {
        this.username = username;
    };
    User.prototype.getUsername = function () {
        return this.username;
    };
    User.prototype.setId = function (id) {
        this.id = id;
    };
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.setPassword = function (password) {
        this.password = password;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    User.prototype.setRoleIds = function (roleIds) {
        this.roleIds = roleIds;
    };
    User.prototype.getRoleIds = function () {
        return this.roleIds;
    };
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Users; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by gipai on 10/4/2017.
 */

var Users = (function () {
    function Users() {
        this.users = new Array();
    }
    Users.prototype.setUsers = function (users) {
        this.users = users;
    };
    Users.prototype.getUsers = function () {
        return this.getUsers();
    };
    Users.prototype.addUser = function (user) {
        this.users.push(user);
        this.totalItems++;
    };
    Users.prototype.deleteUser = function (userId) {
        var userFound = this.users.find(function (user) { return userId === user.getId(); });
        var index = this.users.indexOf(userFound);
        if (index !== -1) {
            this.users.splice(index, 1);
            this.totalItems--;
        }
    };
    Users.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Users.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Users;
}());
Users = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], Users);

//# sourceMappingURL=users.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map