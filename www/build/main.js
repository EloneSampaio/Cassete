webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolicitacaoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(157);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SolicitacaoService = (function () {
    function SolicitacaoService(afs) {
        this.afs = afs;
        this.letraCollection = afs.collection('solicitacoes');
    }
    SolicitacaoService.prototype.getAll = function () {
        this.letras = this.letraCollection.snapshotChanges().map(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var id = action.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
        return this.letras;
    };
    SolicitacaoService.prototype.add = function (data) {
        this.afs.collection('solicitacoes').add(data)
            .then(function (item) {
            console.log("adicionado:" + item.id);
        }).catch(function (error) {
            console.error(error);
        });
    };
    SolicitacaoService.prototype.remove = function (id) {
        this.afs.doc('solicitacoes/' + id).delete().then(function (result) {
            console.log("removido");
        }).catch(function (error) {
            console.error(error);
        });
    };
    SolicitacaoService.prototype.getBy = function (id) {
        return this.afs.collection('solicitacoes/' + id).valueChanges();
    };
    return SolicitacaoService;
}());
SolicitacaoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
], SolicitacaoService);

//# sourceMappingURL=solicitacao-service.js.map

/***/ }),

/***/ 190:
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
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 233:
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
webpackEmptyAsyncContext.id = 233;

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_froala_editor_js_froala_editor_pkgd_min_js__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_froala_editor_js_froala_editor_pkgd_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_froala_editor_js_froala_editor_pkgd_min_js__);



window["$"] = __WEBPACK_IMPORTED_MODULE_2_jquery__;
window["jQuery"] = __WEBPACK_IMPORTED_MODULE_2_jquery__;

Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_deeplinks__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_froala_editor_js_froala_editor_pkgd_min_js__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_froala_editor_js_froala_editor_pkgd_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_froala_editor_js_froala_editor_pkgd_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_froala_wysiwyg__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_firestore__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_components_module__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_dados_service_letra_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_dados_service_solicitacao_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_pipes_module__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_letra_letra__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_letra_new_letra_new__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_solicitacao_solicitacao__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_solicitacao_edit_solicitacao_edit__ = __webpack_require__(709);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var firebaseConfig = {
    apiKey: "AIzaSyByNio_2PUb4FuoZpmnkh88zj7w_cKyoQc",
    authDomain: "grandacassete-4ffe1.firebaseapp.com",
    databaseURL: "https://grandacassete-4ffe1.firebaseio.com",
    projectId: "grandacassete-4ffe1",
    storageBucket: "grandacassete-4ffe1.appspot.com",
    messagingSenderId: "62746686195"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_letra_letra__["a" /* LetraPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_letra_new_letra_new__["a" /* LetraNewPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_solicitacao_solicitacao__["a" /* SolicitacaoPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_solicitacao_edit_solicitacao_edit__["a" /* SolicitacaoEditPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {
                mode: 'md' // 'md' | 'ios' | 'wp' //md em todas plataformas
                //preloadModules: true,
                //locationStrategy: 'path'
            }, {
                links: [
                    { component: __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */], name: 'HomePage', segment: '' },
                    { component: __WEBPACK_IMPORTED_MODULE_16__pages_letra_letra__["a" /* LetraPage */], name: 'LetraPage', segment: ':cantor/:titulo' },
                    { component: __WEBPACK_IMPORTED_MODULE_17__pages_letra_new_letra_new__["a" /* LetraNewPage */], name: 'LetraNewPage', segment: 'enviar-letra' },
                    { component: __WEBPACK_IMPORTED_MODULE_19__pages_solicitacao_edit_solicitacao_edit__["a" /* SolicitacaoEditPage */], name: 'SolicitacaoEditPage', segment: 'editar-letra' },
                    { component: __WEBPACK_IMPORTED_MODULE_18__pages_solicitacao_solicitacao__["a" /* SolicitacaoPage */], name: 'SolicitacaoPage', segment: 'solicitacao' },
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_10_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_firestore__["b" /* AngularFirestoreModule */],
            __WEBPACK_IMPORTED_MODULE_14__pipes_pipes_module__["a" /* PipesModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_letra_letra__["a" /* LetraPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_letra_new_letra_new__["a" /* LetraNewPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_solicitacao_solicitacao__["a" /* SolicitacaoPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_solicitacao_edit_solicitacao_edit__["a" /* SolicitacaoEditPage */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_12__providers_dados_service_letra_service__["a" /* LetraService */],
            __WEBPACK_IMPORTED_MODULE_13__providers_dados_service_solicitacao_service__["a" /* SolicitacaoService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_deeplinks__["a" /* Deeplinks */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyApp = (function () {
    function MyApp(platform) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */];
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/rosario/Desktop/Ionic 3/grandaCassete/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/rosario/Desktop/Ionic 3/grandaCassete/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer_footer__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__header_header__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_2__footer_footer__["a" /* FooterComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__header_header__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_2__footer_footer__["a" /* FooterComponent */]]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dados_service_letra_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = (function () {
    function HeaderComponent(_navCtrl, letraService) {
        var _this = this;
        this._navCtrl = _navCtrl;
        this.letraService = letraService;
        this.showSearchbar = false;
        this.mostarLogo = true;
        this.itensFiltrados = [];
        this.searchTerm = '';
        this.dados = [];
        this.startAt = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.endAt = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.startobs = this.startAt.asObservable();
        this.endobs = this.endAt.asObservable();
        letraService.getAll().subscribe(function (data) {
            _this.dados = data;
        });
        __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].combineLatest(this.startobs, this.endobs).subscribe(function (value) {
            letraService.search(value[0], value[1]).subscribe(function (letras) {
                console.log(letras);
                _this.itensFiltrados = letras;
            });
        });
    }
    HeaderComponent.prototype.toggleSearchbar = function () {
        this.showSearchbar = !this.showSearchbar;
        this.mostarLogo = !this.mostarLogo;
        console.log(this.itensFiltrados);
    };
    HeaderComponent.prototype.filterItems = function (searchbar) {
        var _this = this;
        console.log("item filtrado: " + this.searchTerm);
        var q = this.searchTerm;
        //const q = searchbar.target.value;
        //Nao filtrar a array caso o valor for vazio
        if (q.trim() == '') {
            return this.itensFiltrados = null;
        }
        // else {
        //   this.startAt.next(q);
        //   this.endAt.next(q + "\uf8ff");
        // }
        this.itensFiltrados = this.dados.filter(function (item) {
            if (item.titulo.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1) {
                return true;
            }
            else if (item.cantor.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1) {
                return true;
            }
            return false;
        });
    };
    HeaderComponent.prototype.levaNaHome = function () {
        this._navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
    };
    HeaderComponent.prototype.verItem = function (dado) {
        this._navCtrl.setRoot("LetraPage", {
            cantor: dado.cantor,
            titulo: dado.titulo,
            imagem: dado,
            letra: dado
        });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'header',template:/*ion-inline-start:"/home/rosario/Desktop/Ionic 3/grandaCassete/src/components/header/header.html"*/'<ion-navbar color="padrao">\n    \n    <div class="logo" *ngIf="mostarLogo">\n        <img src="../../assets/imgs/logoPage.png" (click)="levaNaHome()" width="60" height="40">\n    </div>  \n\n    <ion-list *ngIf="showSearchbar">\n\n      <ion-searchbar [(ngModel)]="searchTerm"\n          placeholder="Procurar cantor ou titulo"\n          (ionInput)="filterItems($event)">\n      </ion-searchbar>\n\n    </ion-list>\n    \n    <ion-buttons end>\n        <button ion-button icon-only (click)="toggleSearchbar()" color="branco">\n            <ion-icon ios="ios-search" md="md-search"> </ion-icon>\n        </button>\n    </ion-buttons>\n\n</ion-navbar>\n\n<ion-list class="lista">\n  <ion-item class="items" no-lines *ngFor=" let item of itensFiltrados" (click)="verItem(item)">\n    <h2>{{item.cantor}}</h2>\n    <p>{{item.titulo}}</p>\n  </ion-item>\n</ion-list>  \n  '/*ion-inline-end:"/home/rosario/Desktop/Ionic 3/grandaCassete/src/components/header/header.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_dados_service_letra_service__["a" /* LetraService */]])
], HeaderComponent);

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetraService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dados_service_solicitacao_service__ = __webpack_require__(105);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LetraService = (function () {
    function LetraService(afs, solicitacaoService) {
        this.afs = afs;
        this.solicitacaoService = solicitacaoService;
        this.letraCollection = afs.collection('letras', function (ref) { return ref.orderBy('data'); });
    }
    LetraService.prototype.getAll = function () {
        this.letras = this.letraCollection.snapshotChanges().map(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var id = action.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
        return this.letras;
    };
    LetraService.prototype.add = function (data) {
        var _this = this;
        this.afs.collection('letras').add(data)
            .then(function (item) {
            _this.solicitacaoService.remove(data.id);
            //this.solicitacaoService.remove(item.id);
            console.log("removido:" + data.id);
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    LetraService.prototype.remove = function (id) {
        this.afs.doc('letras/' + id).delete().then(function (result) {
            console.log("removido");
        }).catch(function (error) {
            console.error(error);
        });
    };
    LetraService.prototype.getBy = function (id) {
        return this.afs.collection('letras/' + id).valueChanges();
    };
    LetraService.prototype.getByTituloAndCantor = function (titulo, cantor) {
        return this.afs.collection('letras', function (ref) {
            return ref.where('titulo', '==', titulo)
                .where('cantor', '==', cantor);
        }).snapshotChanges().map(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var id = action.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
    };
    LetraService.prototype.search = function (start, end) {
        return this.afs.collection('letras', function (ref) { return ref.limit(4).orderBy('titulo')
            .startAt(start)
            .endAt(end); })
            .valueChanges();
    };
    return LetraService;
}());
LetraService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */],
        __WEBPACK_IMPORTED_MODULE_2__dados_service_solicitacao_service__["a" /* SolicitacaoService */]])
], LetraService);

//# sourceMappingURL=letra-service.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__ = __webpack_require__(273);
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
 * Generated class for the FooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FooterComponent = (function () {
    function FooterComponent(inAppBrowser) {
        this.inAppBrowser = inAppBrowser;
        console.log('FooterComponent foi excutado ');
    }
    FooterComponent.prototype.paginaFacebook = function () {
        this.inAppBrowser.create("https://facebook.com", '_blank');
    };
    FooterComponent.prototype.paginaInsta = function () {
        this.inAppBrowser.create("https://instagram.com/mr_dorosario", '_blank');
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'footer',template:/*ion-inline-start:"/home/rosario/Desktop/Ionic 3/grandaCassete/src/components/footer/footer.html"*/'<div class=\'rodape\'>\n  <span>Siga-nos</span>\n  <div class="btn-wrapper">\n    <button color="facebook" ion-button (click)="paginaFacebook()">\n      <ion-icon name="logo-facebook"></ion-icon>\n    </button>\n\n    <button color="instagram" ion-button (click)="paginaInsta()">\n      <ion-icon name="logo-instagram"></ion-icon>\n    </button>    \n\n    <!-- <button color="twitter" ion-button (click)="paginaTwitter()">\n      <ion-icon name="logo-twitter"></ion-icon>\n    </button> -->\n  </div>\n\n  <p class="aviso">Todas as letras são propriedade dos seus autores. \n    As letras são fornecidas apenas para fins educacionais e uso pessoal.\n  </p>\n  <p class="assinatura">grandacassete.com &#169; 2017 - 2018</p>\n</div>'/*ion-inline-end:"/home/rosario/Desktop/Ionic 3/grandaCassete/src/components/footer/footer.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], FooterComponent);

//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__capitalize_html__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keep_html__ = __webpack_require__(705);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = (function () {
    function PipesModule() {
    }
    return PipesModule;
}());
PipesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__keep_html__["a" /* KeepHtmlPipe */],
            __WEBPACK_IMPORTED_MODULE_0__capitalize_html__["a" /* CapitalizeHtmlPipe */]],
        imports: [],
        exports: [__WEBPACK_IMPORTED_MODULE_2__keep_html__["a" /* KeepHtmlPipe */],
            __WEBPACK_IMPORTED_MODULE_0__capitalize_html__["a" /* CapitalizeHtmlPipe */]]
    })
], PipesModule);

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the CapitalizePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var CapitalizeHtmlPipe = (function () {
    function CapitalizeHtmlPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    CapitalizeHtmlPipe.prototype.transform = function (value) {
        if (value) {
            //  return value.charAt(0).toUpperCase() + value.slice(1);
            return value.replace(/\b\w/g, function (symbol) { return symbol.toLocaleUpperCase(); });
        }
        return value;
    };
    return CapitalizeHtmlPipe;
}());
CapitalizeHtmlPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'capitalizeHtml',
    })
], CapitalizeHtmlPipe);

//# sourceMappingURL=capitalize-html.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeepHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KeepHtmlPipe = (function () {
    function KeepHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    KeepHtmlPipe.prototype.transform = function (content) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    };
    return KeepHtmlPipe;
}());
KeepHtmlPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'keepHtml', pure: false }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
], KeepHtmlPipe);

//# sourceMappingURL=keep-html.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dados_service_letra_service__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Observable } from "rxjs/Rx";
//import { Subject } from "rxjs/Subject";
var LetraPage = (function () {
    function LetraPage(navCtrl, navParams, letraService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.letraService = letraService;
        // items: any;
        // itensFiltrados: any;
        // searchTerm: string = '';
        this.dados = [];
    }
    LetraPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var cantor = this.navParams.get('cantor');
        var titulo = this.navParams.get('titulo');
        //this.imagem = this.navParams.get('imagem').img;
        //this.letra = this.navParams.get('letra').letra;
        this.letraService.getByTituloAndCantor(titulo, cantor).subscribe(function (data) {
            _this.dados = data;
            console.log(data);
        });
        this.cantor = this.dados.cantor;
        this.titulo = this.dados.titulo;
        this.letra = this.dados.letra;
    };
    LetraPage.prototype.verItem = function (dado) {
        this.navCtrl.setRoot("LetraPage", {
            cantor: dado.cantor,
            titulo: dado.titulo,
            letra: dado.letra
        });
    };
    return LetraPage;
}());
LetraPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-letra',template:/*ion-inline-start:"/home/rosario/Desktop/Ionic 3/grandaCassete/src/pages/letra/letra.html"*/'<ion-header>\n  <header> </header>\n</ion-header>\n  \n<ion-content>\n  <div class="wrapper" *ngFor="let dado of dados">\n    <ion-item>\n      <h1 class="nomeArtista">{{dado.cantor |capitalizeHtml}}</h1>\n      <p>{{dado.titulo |capitalizeHtml}}</p>\n    </ion-item>\n  \n  <!-- Opcao de traducao caso for necessario\n    <ion-grid>\n      <ion-row class="opcoesLetra">\n        <p class="OpAtual">Letra</p>\n        <p class="OpAtual">Tradução</p>\n      </ion-row>\n    </ion-grid>\n  -->\n    <div [innerHTML]="dado.letra | keepHtml" class="letra">\n    \n    </div>\n  </div>\n\n  <!-- <div class="btn-wrapper" style="text-align: center; margin-top: 20px">   \n    <button color="padrao" outline icon-left ion-button>\n      <ion-icon name="md-create"></ion-icon>\n      Corrigir\n    </button>\n  </div> -->\n  <footer> </footer>\n</ion-content>\n'/*ion-inline-end:"/home/rosario/Desktop/Ionic 3/grandaCassete/src/pages/letra/letra.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_dados_service_letra_service__["a" /* LetraService */]])
], LetraPage);

//# sourceMappingURL=letra.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetraNewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dados_service_solicitacao_service__ = __webpack_require__(105);
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
 * Generated class for the LetraNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LetraNewPage = (function () {
    function LetraNewPage(navCtrl, navParams, solicitacaoService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.solicitacaoService = solicitacaoService;
        this.alertCtrl = alertCtrl;
        this.data = {
            nome: "",
            email: "",
            cantor: "",
            titulo: "",
            album: "",
            letra: "",
            data: Date.now(),
            video: ""
        };
        this.monstrarMensagem = false;
    }
    LetraNewPage.prototype.ionViewDidLoad = function () {
    };
    LetraNewPage.prototype.save = function () {
        var _this = this;
        if (this.data.nome == '' || this.data.cantor == '' || this.data.titulo == '' || this.data.letra == '') {
            this.monstrarMensagem = true;
            console.log('letra nao enviada');
        }
        else {
            this.data.letra.replace(" ", "<br/>");
            this.solicitacaoService.add(this.data);
            console.log('letra enviada com sucesso');
            this.alertCtrl.create({
                title: 'Alerta',
                message: 'Letra enviada com sucesso! estará disponivel em breve.',
                buttons: [
                    {
                        text: 'OK',
                        handler: function () {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                        }
                    },
                ]
            }).present();
        }
    };
    return LetraNewPage;
}());
LetraNewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-letra-new',template:/*ion-inline-start:"/home/rosario/Desktop/Ionic 3/grandaCassete/src/pages/letra-new/letra-new.html"*/'<ion-header>\n  <header> </header>\n</ion-header>\n  \n<ion-content>\n\n  <ion-grid class="teste">\n    <ion-row>\n      <ion-col>\n        <form (ngSubmit)=\'save()\'>\n\n          <ion-item>\n            <ion-label stacked>Seu nome*:</ion-label>\n            <ion-input name="nome" type="text" value="" [(ngModel)]="data.nome" required></ion-input>\n          </ion-item>\n\n          <div *ngIf="monstrarMensagem" class="mensagem">\n            <span>Campo obrigatório</span>\n          </div>\n\n          <ion-item>\n            <ion-label stacked>Seu Email:</ion-label>\n            <ion-input name="email" type="text" value="" [(ngModel)]="data.email"></ion-input>\n          </ion-item>\n\n          <div style="text-align:center">\n            <span>(Nunca publicaremos seu email)</span>\n          </div>\n\n          <ion-item>\n            <ion-label stacked>Cantor/Grupo*:</ion-label>\n            <ion-input name="cantor" type="text" value="" [(ngModel)]="data.cantor" (ngModelChange)="data.cantor = $event.toLocaleLowerCase()" required></ion-input>\n          </ion-item>\n          \n          <div *ngIf="monstrarMensagem" class="mensagem">\n            <span>Campo obrigatório</span>\n          </div>\n\n          <ion-item>\n            <ion-label stacked>Título da musica*:</ion-label>\n            <ion-input name="titulo" type="text" value="" [(ngModel)]="data.titulo" (ngModelChange)="data.titulo = $event.toLocaleLowerCase()" required></ion-input>\n          </ion-item>\n          \n          <div *ngIf="monstrarMensagem" class="mensagem">\n            <span>Campo obrigatório</span>\n          </div>\n\n          <ion-item>\n            <ion-label stacked>Album:</ion-label>\n            <ion-input name="album" type="text" value="" [(ngModel)]="data.album"></ion-input>\n          </ion-item>\n          \n          <ion-item>\n            <ion-label stacked>Link video clipe:</ion-label>\n            <ion-input name="video" type="text" value="" [(ngModel)]="data.video" ></ion-input>\n          </ion-item>\n          \n          <ion-item>\n                <ion-label stacked>Letra*:</ion-label>\n                <ion-textarea placeholder="Escreva a letra aqui..."\n                style="width:100%; padding: 10px; margin-top: 3px;"\n                cols="30" rows="20" name="letra" [froalaEditor]\n                              [(froalaModel)]="data.letra" required></ion-textarea>\n          </ion-item>\n          \n          <div *ngIf="monstrarMensagem" class="mensagem">\n              <span>Campo obrigatório</span>\n          </div>\n          \n          <div class="mensagem">\n            <button ion-button type="submit" color="padrao" outline>\n              Enviar\n            </button>\n          </div>\n\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <footer> </footer>\n</ion-content>\n'/*ion-inline-end:"/home/rosario/Desktop/Ionic 3/grandaCassete/src/pages/letra-new/letra-new.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_dados_service_solicitacao_service__["a" /* SolicitacaoService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], LetraNewPage);

//# sourceMappingURL=letra-new.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolicitacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dados_service_solicitacao_service__ = __webpack_require__(105);
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
 * Generated class for the SolicitacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SolicitacaoPage = (function () {
    function SolicitacaoPage(navCtrl, solicitacaoService) {
        // this.ddProvider.obterDados().subscribe((data) => {
        var _this = this;
        this.navCtrl = navCtrl;
        this.solicitacaoService = solicitacaoService;
        this.dados = [];
        //   this.dados = data.musicas;
        // });
        solicitacaoService.getAll().subscribe(function (data) {
            _this.dados = data;
        });
    }
    SolicitacaoPage.prototype.verItem = function (dado) {
        this.navCtrl.setRoot("SolicitacaoEditPage", {
            cantor: dado.cantor,
            titulo: dado.titulo,
            letra: dado.letra,
            id: dado.id
        });
    };
    SolicitacaoPage.prototype.abrirSolicitacao = function () {
        this.navCtrl.setRoot("SolicitacaoEditPage");
    };
    return SolicitacaoPage;
}());
SolicitacaoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-solicitacao',template:/*ion-inline-start:"/home/rosario/Desktop/Ionic 3/grandaCassete/src/pages/solicitacao/solicitacao.html"*/'<ion-content> \n  <ion-row>\n    <ion-col col-sm-6 col-md-3 *ngFor="let dado of dados">\n\n        <ion-card>\n          <ion-card-header>\n            <ion-item>\n              <h2 class="cabecalho">{{dado.cantor}}</h2>\n              <p>{{dado.titulo}}</p>\n              <p>{{dado.data | date}}</p>\n            </ion-item>\n          </ion-card-header>\n          \n          <ion-card-content>\n            <p class="texto">{{dado.letra}}</p>\n            <button ion-button icon-left clear small (click)="verItem(dado)">\n              <ion-icon name="create"></ion-icon>\n              Editar\n            </button>\n          </ion-card-content>\n        </ion-card>\n    </ion-col>\n  </ion-row>\n\n</ion-content> '/*ion-inline-end:"/home/rosario/Desktop/Ionic 3/grandaCassete/src/pages/solicitacao/solicitacao.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_dados_service_solicitacao_service__["a" /* SolicitacaoService */]])
], SolicitacaoPage);

//# sourceMappingURL=solicitacao.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolicitacaoEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dados_service_letra_service__ = __webpack_require__(69);
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
* Generated class for the SolicitacaoEditPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var SolicitacaoEditPage = (function () {
    function SolicitacaoEditPage(navCtrl, navParams, letraService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.letraService = letraService;
        this.data = {
            id: "",
            nome: "",
            email: "",
            cantor: "",
            titulo: "",
            album: "",
            letra: "",
            data: Date.now(),
            video: "",
            img: 'assets/imgs/padrao.png'
        };
        this.options = {
            placeholderText: 'Edit Your Content Here!',
            charCounterCount: false
        };
    }
    SolicitacaoEditPage.prototype.ionViewDidLoad = function () {
        this.data.id = this.navParams.get('id');
        this.data.cantor = this.navParams.get('cantor');
        this.data.titulo = this.navParams.get('titulo');
        //this.imagem = this.navParams.get('imagem');
        var linhas = this.navParams.get('letra');
        this.data.letra = linhas;
    };
    SolicitacaoEditPage.prototype.save = function () {
        this.data.letra.replace(" ", "<br/>");
        this.letraService.add(this.data);
    };
    return SolicitacaoEditPage;
}());
SolicitacaoEditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-solicitacao-edit',template:/*ion-inline-start:"/home/rosario/Desktop/Ionic 3/grandaCassete/src/pages/solicitacao-edit/solicitacao-edit.html"*/'<ion-header>\n <header> </header>\n</ion-header>\n\n<ion-content>\n   <ion-card>\n\n       <ion-card-content padding>\n         <form (ngSubmit)=\'save()\'>\n\n           <ion-item>\n               <ion-label stacked>Letra</ion-label>\n               <ion-textarea    [froalaEditor]=\'options\'\n               [(froalaModel)]="data.letra"></ion-textarea>\n           </ion-item>\n{{data.id}}\n           <button ion-button type="submit" color="padrao" outline block>\n             Enviar\n           </button>\n\n         </form>\n\n       </ion-card-content>\n   </ion-card>\n <footer> </footer>\n</ion-content>\n'/*ion-inline-end:"/home/rosario/Desktop/Ionic 3/grandaCassete/src/pages/solicitacao-edit/solicitacao-edit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_dados_service_letra_service__["a" /* LetraService */]])
], SolicitacaoEditPage);

//# sourceMappingURL=solicitacao-edit.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dados_service_letra_service__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { LetraPage } from '../letra/letra';
//import { Observable } from 'rxjs/Rx';
var HomePage = (function () {
    function HomePage(navCtrl, letraService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.letraService = letraService;
        this.dados = [];
        letraService.getAll().subscribe(function (data) {
            _this.dados = data;
        });
    }
    HomePage.prototype.abrirPagina = function () {
        this.navCtrl.setRoot("LetraNewPage");
    };
    HomePage.prototype.abrirSolicitacao = function () {
        this.navCtrl.setRoot("SolicitacaoPage");
    };
    HomePage.prototype.verItem = function (dado) {
        this.navCtrl.setRoot("LetraPage", {
            cantor: dado.cantor,
            titulo: dado.titulo,
            letra: dado.letra
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/rosario/Desktop/Ionic 3/grandaCassete/src/pages/home/home.html"*/'<ion-header>\n <header> </header>\n</ion-header>\n\n<!-- <resultado-search> \n</resultado-search> -->\n\n<ion-content>\n <ion-grid>\n   <ion-row>\n     <ion-col  text-center>\n       <h3>Bem-vindo ao Granda Cassete!</h3>\n         <p class="card-subtitle">O lugar onde a sua procura por\n             letras de musicas Africanas terminam!\n          </p>\n         <div class="hr"> </div>\n     </ion-col>\n   </ion-row>\n\n <h4>Recomendado para si!</h4>\n\n   <ion-row wrap>\n     <ion-col col-6 col-sm-6 col-md-3 text-center *ngFor="let dado of dados">\n       <div (click)="verItem(dado)">\n         <img width="130px" height="130px" src="{{ dado.img}}">\n         <h6>{{ dado.cantor |capitalizeHtml}}</h6>\n         <p>{{ dado.titulo | capitalizeHtml}}</p>\n       </div>\n     </ion-col>\n   </ion-row>\n\n   <div class="hr"> </div>\n\n   <ion-row class="opcoes">\n     <div ion-col text-center (click)="abrirPagina()">Enviar letra</div>\n     <!-- <div ion-col text-center (click)="abrirSolicitacao()">Ver Solicitacao</div> -->\n     <!-- <div ion-col text-center>Solicitar letra </div> -->\n   </ion-row>\n </ion-grid>\n\n <footer> </footer>\n</ion-content>\n'/*ion-inline-end:"/home/rosario/Desktop/Ionic 3/grandaCassete/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_dados_service_letra_service__["a" /* LetraService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[322]);
//# sourceMappingURL=main.js.map