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

module.exports = "<div class=\"container app-container d-flex flex-column justify-content-center\">\n  <div class=\"row-centered\">\n    <div class=\"form-container\">\n      <form [formGroup]=\"requestForm\" (submit)=\"submitForm($event);\" class=\"d-flex justify-content-between align-items-center\">\n        <label class=\"search-title\">i'm looking for</label>\n        <div class=\"input-container d-flex flex-column\">\n          <input class=\"search-input\" type=\"text\" formControlName=\"request\" placeholder=\"Text of my search request\">\n          <validator-messages [field]=\"requestForm.controls['request']\"></validator-messages>\n        </div>\n        <button class=\"btn st-btn\" type=\"submit\"><img class=\"image-btn\" src=\"assets/images/search.png\">Find</button>\n      </form>\n    </div>\n    <div class=\"search-history\">\n      <h1 class=\"history-title\"> Search history {{ index }}</h1>\n    </div>\n    <div class=\"requests-container\">\n      <div *ngFor=\"let request of requestsArray\" class=\"request-container d-flex flex-row align-items-center justify-content-between\">\n        <article class=\"right-data d-flex flex-column justify-content-around\">\n          <div class=\"request-date d-flex flex-row\">\n            <p class=\"date-data\">{{ request.date | date: 'dd/MM/yyyy'}}</p>\n            <p class=\"time-data\">{{ request.date | date: 'HH:mm'}}</p>\n          </div>\n          <div class=\"request-title\">\n            <p class=\"request-data\">{{ request.request }}</p>\n          </div>\n        </article>\n        <div class=\"delete-button\">\n          <button class=\"btn st-btn\" type=\"button\" (click)=\"deleteRequest(request)\"><img class=\"image-btn\" src=\"assets/images/delete.png\">Delete</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\n  color: #000;\n  padding: 0;\n  margin: 0; }\n\n.form-container {\n  padding: 0;\n  margin: 0; }\n\n.search-title {\n  margin: 0; }\n  @media (max-width: 768px) {\n    .search-title {\n      display: none;\n      padding: 0; } }\n\n.search-input {\n  height: 30px;\n  width: 400px;\n  font-size: 15px;\n  padding-left: 3px;\n  border: solid 4px; }\n  @media (max-width: 768px) {\n    .search-input {\n      width: 280px;\n      word-wrap: break-word;\n      height: 50px; } }\n\n.app-container {\n  border: solid 5px;\n  width: 700px;\n  padding: 20px; }\n  @media (max-width: 768px) {\n    .app-container {\n      width: 100%;\n      padding: 0;\n      border: none; } }\n\n.st-btn {\n  box-shadow: 4px 4px 0 0 black;\n  background-color: #fff;\n  border: solid 4px #000;\n  border-radius: 0; }\n  @media (max-width: 768px) {\n    .st-btn {\n      margin: 0; } }\n\n.requests-container {\n  margin-left: 20px; }\n  @media (max-width: 768px) {\n    .requests-container {\n      margin-left: 0; } }\n\n.request-container {\n  border-bottom: solid 4px; }\n\n.right-data {\n  height: 100%; }\n\n.st-btn {\n  background-color: #fff;\n  border: solid 4px;\n  height: 40px;\n  padding: 0;\n  padding-right: 10px;\n  padding-left: 10px; }\n  @media (max-width: 768px) {\n    .st-btn {\n      border: solid 2px;\n      padding-right: 5px;\n      padding-left: 5px; } }\n\n.image-btn {\n  padding-right: 6px; }\n  @media (max-width: 768px) {\n    .image-btn {\n      display: none; } }\n\n.time-data {\n  margin-left: 10px; }\n\n.request-data {\n  font-size: 20px;\n  width: 400px;\n  word-wrap: break-word; }\n  @media (max-width: 768px) {\n    .request-data {\n      width: 280px;\n      word-wrap: break-word; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(firebaseService) {
        this.firebaseService = firebaseService;
        this.requestData = null;
        this.title = 'SoftTeco';
        this.index = 0;
        this.requestForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            request: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(1),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(100),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required
            ])
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebaseService.getRequests().subscribe(function (array) {
            _this.requestsArray = array;
            _this.index = array.length;
            _this.requestsArray.sort(function (a, b) {
                var key1 = new Date(a.date), key2 = new Date(b.date);
                if (key1 > key2) {
                    return -1;
                }
                else if (key1 == key2) {
                    return 0;
                }
                else {
                    return 1;
                }
            });
        });
        this.requestForm.statusChanges.subscribe(function (status) {
            if (status === 'INVALID' && !!_this.requestData) {
                _this.requestData = null;
            }
        });
    };
    AppComponent.prototype.submitForm = function (e) {
        e.preventDefault();
        if (this.requestForm.invalid) {
            this.markControlsAsTouched(this.requestForm);
            return false;
        }
        var requestTitle = this.requestForm.value.request, requestDate = new Date();
        this.requestData = {
            request: requestTitle,
            date: requestDate.toString()
        };
        this.firebaseService.requests.push(this.requestData); //   Отправляю данные на сервер
        this.firebaseService.playSound('assets/sounds/coins.mp3');
        this.requestForm.reset(); //   Перезагружаю форму
    };
    AppComponent.prototype.deleteRequest = function (request) {
        this.firebaseService.playSound('assets/sounds/delete.mp3');
        this.firebaseService.requests.remove(request);
    };
    AppComponent.prototype.markControlsAsTouched = function (form) {
        for (var control in form.controls) {
            form.controls[control].markAsTouched();
            if (form.controls[control].controls) {
                this.markControlsAsTouched(form.controls[control]);
            }
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["a" /* FirebaseService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__validator_messages_validator_messages_component__ = __webpack_require__("../../../../../src/app/validator-messages/validator-messages.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__validator_messages_validator_messages_component__["a" /* ValidatorMessagesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].firebase)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_firebase_service__["a" /* FirebaseService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirebaseService = (function () {
    function FirebaseService(db) {
        this.db = db;
    }
    FirebaseService.prototype.getRequests = function () {
        this.requests = this.db.list('/data');
        return this.requests;
    };
    FirebaseService.prototype.playSound = function (sound) {
        var notificationSound = new Audio(sound);
        notificationSound.play();
    };
    return FirebaseService;
}());
FirebaseService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], FirebaseService);

var _a;
//# sourceMappingURL=firebase.service.js.map

/***/ }),

/***/ "../../../../../src/app/validator-messages/validator-messages.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"alert alert-danger\" *ngIf=\"field.invalid && field.touched && validatorMessages?.length\">\n  <li class=\"alert-message\" *ngFor=\"let errMsg of validatorMessages\"> {{errMsg}}</li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/validator-messages/validator-messages.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alert {\n  padding: 0;\n  height: 30px;\n  margin: 0; }\n\n.alert-message {\n  list-style: none;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/validator-messages/validator-messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidatorMessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValidatorMessagesComponent = (function () {
    function ValidatorMessagesComponent() {
    }
    Object.defineProperty(ValidatorMessagesComponent.prototype, "validatorMessages", {
        get: function () {
            var field = this.field;
            if (!field || !field.errors) {
                return false;
            }
            var errors = [];
            var config = {
                required: 'Обязательное поле!'
            };
            if (field.errors.hasOwnProperty('maxlength')) {
                config['maxlength'] = "\u0412\u044B \u0432\u0432\u0435\u043B\u0438 \u0431\u043E\u043B\u044C\u0448\u0435 " + field.errors.maxlength.requiredLength + " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432!";
            }
            Object.keys(field.errors).forEach(function (error) {
                errors.push(config[error]);
            });
            return errors;
        },
        enumerable: true,
        configurable: true
    });
    return ValidatorMessagesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]) === "function" && _a || Object)
], ValidatorMessagesComponent.prototype, "field", void 0);
ValidatorMessagesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'validator-messages',
        template: __webpack_require__("../../../../../src/app/validator-messages/validator-messages.component.html"),
        styles: [__webpack_require__("../../../../../src/app/validator-messages/validator-messages.component.scss")]
    })
], ValidatorMessagesComponent);

var _a;
//# sourceMappingURL=validator-messages.component.js.map

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
    production: false,
    firebase: {
        apiKey: "AIzaSyDbgXUFVN7qc1K7WbdAIuesd7n5l7Bfw6E",
        authDomain: "requests-1ed0a.firebaseapp.com",
        databaseURL: "https://requests-1ed0a.firebaseio.com",
        projectId: "requests-1ed0a",
        storageBucket: "requests-1ed0a.appspot.com",
        messagingSenderId: "140490213793"
    }
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
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