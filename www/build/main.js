webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolicitacaoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(159);
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

/***/ 192:
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
webpackEmptyAsyncContext.id = 192;

/***/ }),

/***/ 234:
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
webpackEmptyAsyncContext.id = 234;

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);



window["$"] = __WEBPACK_IMPORTED_MODULE_2_jquery__;
window["jQuery"] = __WEBPACK_IMPORTED_MODULE_2_jquery__;


//enableProdMode();
// Ativar o modo de produção a menos que seja executado localmente
if (!/localhost/.test(document.location.host)) {
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_deeplinks__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_froala_editor_js_froala_editor_pkgd_min_js__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_froala_editor_js_froala_editor_pkgd_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_froala_editor_js_froala_editor_pkgd_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_froala_wysiwyg__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_components_module__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_dados_service_letra_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_dados_service_solicitacao_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_pipes_module__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_letra_letra__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_letra_new_letra_new__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_solicitacao_solicitacao__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_solicitacao_edit_solicitacao_edit__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common__ = __webpack_require__(85);
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
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_letra_letra__["a" /* LetraPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_letra_new_letra_new__["a" /* LetraNewPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_solicitacao_solicitacao__["a" /* SolicitacaoPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_solicitacao_edit_solicitacao_edit__["a" /* SolicitacaoEditPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_12__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {
                mode: 'md',
                //preloadModules: true,
                locationStrategy: 'path'
            }, {
                links: [
                    { component: __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */], name: 'HomePage', segment: '' },
                    { component: __WEBPACK_IMPORTED_MODULE_17__pages_letra_letra__["a" /* LetraPage */], name: 'LetraPage', segment: ':cantor/:titulo' },
                    { component: __WEBPACK_IMPORTED_MODULE_18__pages_letra_new_letra_new__["a" /* LetraNewPage */], name: 'LetraNewPage', segment: 'enviar-letra' },
                    { component: __WEBPACK_IMPORTED_MODULE_20__pages_solicitacao_edit_solicitacao_edit__["a" /* SolicitacaoEditPage */], name: 'SolicitacaoEditPage', segment: 'editar-letra' },
                    { component: __WEBPACK_IMPORTED_MODULE_19__pages_solicitacao_solicitacao__["a" /* SolicitacaoPage */], name: 'SolicitacaoPage', segment: 'solicitacao' },
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__["b" /* AngularFirestoreModule */],
            __WEBPACK_IMPORTED_MODULE_15__pipes_pipes_module__["a" /* PipesModule */],
            __WEBPACK_IMPORTED_MODULE_8_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_letra_letra__["a" /* LetraPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_letra_new_letra_new__["a" /* LetraNewPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_solicitacao_solicitacao__["a" /* SolicitacaoPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_solicitacao_edit_solicitacao_edit__["a" /* SolicitacaoEditPage */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            { provide: __WEBPACK_IMPORTED_MODULE_21__angular_common__["a" /* APP_BASE_HREF */], useValue: '/' },
            __WEBPACK_IMPORTED_MODULE_13__providers_dados_service_letra_service__["a" /* LetraService */],
            __WEBPACK_IMPORTED_MODULE_14__providers_dados_service_solicitacao_service__["a" /* SolicitacaoService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_deeplinks__["a" /* Deeplinks */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["f" /* Title */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(69);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/sam/angular/Cassete/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/sam/angular/Cassete/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer_footer__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(41);
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

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dados_service_letra_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(69);
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
        letraService.searchAll().subscribe(function (data) {
            _this.dados = data;
        });
        __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].combineLatest(this.startobs, this.endobs).subscribe(function (value) {
            letraService.search(value[0], value[1]).subscribe(function (letras) {
                console.log(letras);
                _this.itensFiltrados = letras;
            });
        });
    }
    HeaderComponent.prototype.levaNaHome = function () {
        this._navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
    };
    HeaderComponent.prototype.ngOnInit = function () {
        if (window.matchMedia("(min-width: 768px)").matches) {
            this.showSearchbar = true;
        }
        // else{
        //   this.showSearchbar = false;
        // }
    };
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
            this.itensFiltrados = null;
            this.mostrarLista = false;
        }
        else {
            this.mostrarLista = true;
        }
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
    HeaderComponent.prototype.verItem = function (dado) {
        this._navCtrl.setRoot("LetraPage", {
            cantor: dado.cantor,
            titulo: dado.titulo,
            letra: dado.letra
        });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'header',template:/*ion-inline-start:"/home/sam/angular/Cassete/src/components/header/header.html"*/'<ion-navbar color="padrao">\n    \n    <div class="logo" *ngIf="mostarLogo" (click)="levaNaHome()">\n        <img src="../../assets/imgs/logoPage.png" width="60" height="40">\n    </div>  \n\n    <ion-searchbar *ngIf="showSearchbar" [(ngModel)]="searchTerm"\n        placeholder="Procurar por titulo ou cantor"\n        (ionInput)="filterItems($event)">\n    </ion-searchbar>\n\n    <ion-buttons class="btnSearch" end>\n        <button ion-button icon-only (click)="toggleSearchbar()" color="branco">\n            <ion-icon name="search"> </ion-icon>\n        </button>\n    </ion-buttons>\n\n</ion-navbar>\n\n<ion-list class="lista" *ngIf="mostrarLista">\n  <ion-item class="items" no-lines *ngFor=" let item of itensFiltrados" color="WhiteGhost" (click)="verItem(item)">\n    <h2>{{item.titulo}}</h2>\n    <p>{{item.cantor}}</p>\n  </ion-item>\n</ion-list>  \n  '/*ion-inline-end:"/home/sam/angular/Cassete/src/components/header/header.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_dados_service_letra_service__["a" /* LetraService */]])
], HeaderComponent);

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dados_service_letra_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, letraService, titleService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.letraService = letraService;
        this.titleService = titleService;
        this.dados = [];
        letraService.getAll().subscribe(function (data) {
            _this.dados = data;
        });
        this.titleService.setTitle("Granda Cassete - A maior plataforma de letras de musicas Africanas");
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
            letra: dado.letra,
            id: dado.id,
            visita: dado.visita
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/sam/angular/Cassete/src/pages/home/home.html"*/'<ion-header>\n <header> </header>\n</ion-header>\n\n<!-- <resultado-search> \n</resultado-search> -->\n\n<ion-content class="selectable">\n <ion-grid>\n   <ion-row>\n     <ion-col  text-center>\n       <h3>Bem-vindo ao Granda Cassete!</h3>\n         <p class="card-subtitle">O lugar onde a sua procura por\n             letras de musicas Africanas terminam!\n          </p>\n         <div class="hr"> </div>\n     </ion-col>\n   </ion-row>\n\n <h4>Recomendado para si!</h4>\n\n   <ion-row class="centro"wrap>\n     <ion-col col-6 col-sm-6 col-md-3 text-center *ngFor="let dado of dados">\n       <div (click)="verItem(dado)">\n         <img width="130px" height="130px" src="{{dado.img}}">\n         <h6>{{ dado.cantor |capitalizeHtml| textEdit}}</h6>\n         <p>{{ dado.titulo |capitalizeHtml| textEdit}}</p>\n       </div>\n     </ion-col>\n   </ion-row>\n\n   <div class="hr"> </div>\n\n   <ion-row class="opcoes">\n     <div ion-col text-center style="cursor:pointer" (click)="abrirPagina()">Enviar letra</div>\n     <!-- <div ion-col text-center>Contactar-nos</div> -->\n     <!-- <div ion-col text-center (click)="abrirSolicitacao()">Ver Solicitacao</div> -->\n     <!-- <div ion-col text-center>Solicitar letra </div> -->\n   </ion-row>\n </ion-grid>\n\n <footer> </footer>\n</ion-content>\n'/*ion-inline-end:"/home/sam/angular/Cassete/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_dados_service_letra_service__["a" /* LetraService */],
        __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["f" /* Title */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetraService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(159);
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
        this.letraCollection = afs.collection('letras', function (ref) { return ref.limit(12).orderBy('visita', 'desc'); });
        this.letraCollectionSearch = afs.collection('letras', function (ref) { return ref.limit(5000); });
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
    LetraService.prototype.searchAll = function () {
        this.letras = this.letraCollectionSearch.snapshotChanges().map(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var id = action.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
        return this.letras;
    };
    LetraService.prototype.updateContador = function (id, data) {
        console.log(id);
        this.afs.doc('letras/' + id).update(data).then(function (result) {
            console.log("update" + result);
        }).catch(function (error) {
            console.error(error);
        });
    };
    return LetraService;
}());
LetraService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__dados_service_solicitacao_service__["a" /* SolicitacaoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dados_service_solicitacao_service__["a" /* SolicitacaoService */]) === "function" && _b || Object])
], LetraService);

var _a, _b;
//# sourceMappingURL=letra-service.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__ = __webpack_require__(274);
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
        selector: 'footer',template:/*ion-inline-start:"/home/sam/angular/Cassete/src/components/footer/footer.html"*/'<div class=\'rodape\'>\n  <span>Siga-nos</span>\n  <div class="btn-wrapper">\n    <button color="facebook" ion-button (click)="paginaFacebook()">\n      <ion-icon name="logo-facebook"></ion-icon>\n    </button>\n\n    <button color="instagram" ion-button (click)="paginaInsta()">\n      <ion-icon name="logo-instagram"></ion-icon>\n    </button>    \n\n    <!-- <button color="twitter" ion-button (click)="paginaTwitter()">\n      <ion-icon name="logo-twitter"></ion-icon>\n    </button> -->\n  </div>\n\n  <p class="aviso">Todas as letras são propriedade dos seus autores. \n    As letras são fornecidas apenas para fins educacionais e uso pessoal.\n  </p>\n  <p class="assinatura">grandacassete &#169; 2017 - 2018</p>\n</div>'/*ion-inline-end:"/home/sam/angular/Cassete/src/components/footer/footer.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], FooterComponent);

//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__capitalize_html__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keep_html__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__text_edit_text_edit__ = __webpack_require__(707);
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
            __WEBPACK_IMPORTED_MODULE_0__capitalize_html__["a" /* CapitalizeHtmlPipe */],
            __WEBPACK_IMPORTED_MODULE_3__text_edit_text_edit__["a" /* TextEditPipe */]],
        imports: [],
        exports: [__WEBPACK_IMPORTED_MODULE_2__keep_html__["a" /* KeepHtmlPipe */],
            __WEBPACK_IMPORTED_MODULE_0__capitalize_html__["a" /* CapitalizeHtmlPipe */],
            __WEBPACK_IMPORTED_MODULE_3__text_edit_text_edit__["a" /* TextEditPipe */]]
    })
], PipesModule);

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 705:
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

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeepHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
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

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextEditPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the TextEditPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var TextEditPipe = (function () {
    function TextEditPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    TextEditPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.replace(new RegExp('-', 'g'), ' ');
    };
    return TextEditPipe;
}());
TextEditPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'textEdit',
    })
], TextEditPipe);

//# sourceMappingURL=text-edit.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dados_service_letra_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LetraPage = (function () {
    function LetraPage(navCtrl, navParams, letraService, titleService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.letraService = letraService;
        this.titleService = titleService;
        this.letraTab = true;
        this.traducaoTab = false;
        this.url = document.location.href;
        this.dados = [];
    }
    LetraPage.prototype.partilhar = function () {
        var cantor = this.navParams.get('cantor');
        var titulo = this.navParams.get('titulo');
        var navegador = window.navigator;
        //WEB SHARE API FUNCIONA APENAS APARTIR DA VERSAO 61 DO CHROME PARA ANDROID
        if (navegador.share) {
            navegador.share({
                'title': '#GrandaCassete',
                'text': cantor + " - " + titulo,
                'url': location.href
            }).then(function () {
                console.log('Partilhado com sucesso');
            }).catch(function (error) {
                console.log('erro ao partilhar:', error);
            });
        }
    };
    LetraPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //Mostar Tab de traducao a menos que for mobile
        if (navigator.userAgent.match(/iPhone|Android/i)) {
            this.opcaoTraducao = true;
        }
        else {
            this.opcaoTraducao = false;
        }
        var navegador = window.navigator;
        if (navegador.share) {
            this.btnPartilhar = true;
        }
        else {
            this.btnPartilhar = false;
            //mostrar botao partilhar com whatsapp apenas nos dispositivos android ou Iphone
            if (navigator.userAgent.match(/iPhone|Android/i)) {
                this.btnWhatsapp = true;
            }
            this.btnFacebook = true;
            this.btnTwitter = true;
        }
        var cantor = this.navParams.get('cantor');
        var titulo = this.navParams.get('titulo');
        //this.imagem = this.navParams.get('imagem').img;
        //this.letra = this.navParams.get('letra').letra;
        this.letraService.getByTituloAndCantor(titulo, cantor).subscribe(function (data) {
            _this.dados = data;
            if (_this.dados[0].traducao) {
                _this.titleService.setTitle(titulo + " (tradu\u00E7\u00E3o) - " + cantor + " - grandacassete.com");
            }
            else {
                _this.titleService.setTitle(titulo + " - " + cantor + " - grandacassete.com");
            }
        });
    };
    LetraPage.prototype.mudarOriginal = function () {
        this.letraTab = true;
        this.traducaoTab = false;
        document.getElementById("tab1").classList.add("OpAtual");
        document.getElementById("tab2").classList.remove("OpAtual");
    };
    LetraPage.prototype.mudartraducao = function () {
        this.letraTab = false;
        this.traducaoTab = true;
        document.getElementById("tab2").classList.add("OpAtual");
        document.getElementById("tab1").classList.remove("OpAtual");
    };
    LetraPage.prototype.Partilharwhatsapp = function () {
        //const url = document.location.href;
        var cantor = this.navParams.get('cantor');
        var titulo = this.navParams.get('titulo');
        document.location.href = 'whatsapp://send?text=' + cantor + ' - ' + titulo + encodeURIComponent(location.href);
    };
    LetraPage.prototype.PartilharFacebook = function () {
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(location.href), 'facebook-share-dialog', 'width=626,height=436');
        return false;
    };
    LetraPage.prototype.PartilharTwitter = function () {
        window.open('http://www.twitter.com/share?url=' + encodeURIComponent(location.href));
    };
    LetraPage.prototype.verItem = function (dado) {
        this.navCtrl.setRoot("LetraPage", {
            cantor: dado.cantor,
            titulo: dado.titulo,
            letra: dado.letra
        });
    };
    LetraPage.prototype.ionViewWillLeave = function () {
        var data = {
            visita: 0
        };
        var id = this.navParams.get('id');
        var visita = this.navParams.get('visita');
        data.visita = visita + 1;
        console.log(id);
        this.letraService.updateContador(id, data);
    };
    return LetraPage;
}());
LetraPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-letra',template:/*ion-inline-start:"/home/sam/angular/Cassete/src/pages/letra/letra.html"*/'<ion-header>\n  <header> </header>\n</ion-header>\n  \n<ion-content>\n  <div class="wrapper selectable" *ngFor="let dado of dados">\n\n    <ion-item >\n\n      <h4 class="titulo">{{dado.titulo | capitalizeHtml | textEdit}}</h4>\n      <p class="cantor">{{dado.cantor | capitalizeHtml | textEdit}}</p>\n\n      <button *ngIf="btnPartilhar" item-end (click)="partilhar()"color="padrao" outline icon-left ion-button>\n        <ion-icon name="share"></ion-icon>\n        Partilhar\n      </button>\n      \n      <div item-end class="btn-wrapper">\n\n        <button *ngIf="btnWhatsapp" color="whatsapp" ion-button (click)="Partilharwhatsapp()">\n          <ion-icon name="logo-whatsapp"></ion-icon>\n        </button> \n\n        <button *ngIf="btnFacebook" color="facebook" ion-button (click)="PartilharFacebook()">\n          <ion-icon name="logo-facebook"></ion-icon>\n        </button>    \n    \n        <button *ngIf="btnTwitter" color="twitter" ion-button (click)="PartilharTwitter()">\n          <ion-icon name="logo-twitter"></ion-icon>\n        </button>\n\n      </div>\n\n    </ion-item>\n  \n    <ion-grid *ngIf="opcaoTraducao && dado.traducao">\n      <ion-row class="opcoesLetra">\n        <p id="tab1" class="OpAtual" (click)="mudarOriginal()">Letra</p>\n        <p id="tab2" (click)="mudartraducao()">Tradução</p>\n      </ion-row>\n    </ion-grid>\n\n    <div *ngIf="letraTab" class="letra" [innerHTML]="dado.letra | keepHtml"> \n\n    </div>\n    \n    <div *ngIf="traducaoTab" class="letra" [innerHTML]="dado.traducao | keepHtml"> </div>\n  </div>\n\n  <!-- <div class="btn-wrapper" style="text-align: center; margin-top: 20px">   \n    <button color="padrao" outline icon-left ion-button>\n      <ion-icon name="md-create"></ion-icon>\n      Corrigir\n    </button>\n  </div> -->\n  <footer> </footer>\n</ion-content>'/*ion-inline-end:"/home/sam/angular/Cassete/src/pages/letra/letra.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["f" /* Title */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_dados_service_letra_service__["a" /* LetraService */],
        __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["f" /* Title */]])
], LetraPage);

//# sourceMappingURL=letra.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetraNewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(69);
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
            cantor: "",
            titulo: "",
            letra: "",
            traducao: "",
            data: Date.now(),
            visita: 1,
            video: ""
        };
        this.monstrarMensagem = false;
        this.caixaTraduzir = false;
    }
    //expressao regurlar para adicionar quebra de linha
    LetraNewPage.prototype.insert_br = function (text) {
        var normalized_Enters = text.replace(/\r|\n/g, "\r\n");
        var text_with_br = normalized_Enters.replace(/\r\n/g, "<br />");
        return text_with_br;
    };
    // TypeScript function replace nome e titulo
    LetraNewPage.prototype.replaceAll = function (input, find, replace) {
        return input.replace(new RegExp(find, 'g'), replace);
    };
    LetraNewPage.prototype.selecionarOpcao = function (texto) {
        if (texto == 'nao') {
            this.caixaTraduzir = false;
        }
        else if (texto == 'sim') {
            this.caixaTraduzir = true;
        }
    };
    LetraNewPage.prototype.save = function () {
        var _this = this;
        if (this.data.nome == '' || this.data.cantor == '' || this.data.titulo == '' || this.data.letra == '') {
            this.monstrarMensagem = true;
            console.log('letra nao enviada');
        }
        else {
            //var lines =  this.nl2br(this.data.letra);
            var linha = this.insert_br(this.data.letra);
            var linhatraducao = this.insert_br(this.data.traducao);
            this.data.letra = "";
            this.data.traducao = "";
            this.data.letra = linha;
            this.data.traducao = linhatraducao;
            this.data.cantor = this.replaceAll(this.data.cantor, ' ', '-');
            this.data.titulo = this.replaceAll(this.data.titulo, ' ', '-');
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
        selector: 'page-letra-new',template:/*ion-inline-start:"/home/sam/angular/Cassete/src/pages/letra-new/letra-new.html"*/'<ion-header>\n  <header> </header>\n</ion-header>\n  \n<ion-content>\n  <ion-grid class="teste">\n      <h1>Envio de letra</h1>\n      <div class="hr"> </div>\n    <ion-row>\n      <ion-col>\n        <form (ngSubmit)=\'save()\'>\n\n          <ion-item>\n            <ion-label stacked>Seu nome*:</ion-label>\n            <ion-input name="nome" type="text" value="" [(ngModel)]="data.nome" required></ion-input>\n          </ion-item>\n\n          <div *ngIf="monstrarMensagem" class="mensagem">\n            <span>Campo obrigatório</span>\n          </div>\n\n          <ion-item>\n            <ion-label stacked>Cantor/Grupo*:</ion-label>\n            <ion-input name="cantor" type="text" value="" [(ngModel)]="data.cantor" required></ion-input>\n          </ion-item>\n          \n          <div *ngIf="monstrarMensagem" class="mensagem">\n            <span>Campo obrigatório</span>\n          </div>\n\n          <ion-item>\n            <ion-label stacked>Título da musica*:</ion-label>\n            <ion-input name="titulo" type="text" value="" [(ngModel)]="data.titulo" required></ion-input>\n          </ion-item>\n          \n          <div *ngIf="monstrarMensagem" class="mensagem">\n            <span>Campo obrigatório</span>\n          </div>\n          \n          <ion-item>\n            <ion-label stacked>Link video clipe:</ion-label>\n            <ion-input name="video" type="text" value="" [(ngModel)]="data.video" ></ion-input>\n          </ion-item>\n          \n          <ion-item>\n            <ion-label stacked>Letra*:</ion-label>\n            <ion-textarea placeholder="Escreva a letra aqui..."\n            style="width:100%; padding: 10px; margin-top: 3px;"\n            cols="30" rows="20" name="letra" \n            [(ngModel)] ="data.letra" required></ion-textarea>\n          </ion-item>\n          \n          <div *ngIf="monstrarMensagem" class="mensagem">\n            <span>Campo obrigatório</span>\n          </div>\n\n          <ion-item class="caixaOpcional">\n            <label>Traduzir para Português:</label><br>\n            <input type="radio" (click)="selecionarOpcao(\'nao\')" class="radio" checked name="opcao"> Não\n            <input type="radio" (click)="selecionarOpcao(\'sim\')" class="radio" name="opcao"> Sim<br>\n          </ion-item> \n\n          <ion-item *ngIf="caixaTraduzir">\n            <ion-label stacked>Tradução:</ion-label>\n            <ion-textarea placeholder="Escreva a tradução da letra aqui..."\n            style="width:100%; padding: 10px; margin-top: 3px;"\n            cols="30" rows="20" name="traducao" \n            [(ngModel)] ="data.traducao"></ion-textarea>\n          </ion-item>\n\n          <div class="mensagem">\n            <button ion-button type="submit" color="padrao" outline>\n              Enviar\n            </button>\n          </div>\n\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <footer> </footer>\n</ion-content>\n'/*ion-inline-end:"/home/sam/angular/Cassete/src/pages/letra-new/letra-new.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_dados_service_solicitacao_service__["a" /* SolicitacaoService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], LetraNewPage);

//# sourceMappingURL=letra-new.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolicitacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
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



var SolicitacaoPage = (function () {
    function SolicitacaoPage(navCtrl, solicitacaoService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.solicitacaoService = solicitacaoService;
        this.dados = [];
        solicitacaoService.getAll().subscribe(function (data) {
            console.log(data);
            _this.dados = data;
        });
    }
    SolicitacaoPage.prototype.verItem = function (dado) {
        this.navCtrl.setRoot("SolicitacaoEditPage", {
            cantor: dado.cantor,
            titulo: dado.titulo,
            letra: dado.letra,
            traducao: dado.traducao,
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
        selector: 'page-solicitacao',template:/*ion-inline-start:"/home/sam/angular/Cassete/src/pages/solicitacao/solicitacao.html"*/'<ion-content> \n  <ion-row>\n    <ion-col col-sm-6 col-md-3 *ngFor="let dado of dados">\n\n        <ion-card>\n          <ion-card-header>\n            <ion-item>\n              <h2 class="cabecalho">{{dado.cantor}}</h2>\n              <p>{{dado.titulo}}</p>\n              <p>{{dado.data | date}}</p>\n            </ion-item>\n          </ion-card-header>\n          \n          <ion-card-content>\n            <p class="texto">{{dado.letra}}</p>\n            <button ion-button icon-left clear small (click)="verItem(dado)">\n              <ion-icon name="create"></ion-icon>\n              Editar\n            </button>\n          </ion-card-content>\n        </ion-card>\n    </ion-col>\n  </ion-row>\n\n</ion-content> '/*ion-inline-end:"/home/sam/angular/Cassete/src/pages/solicitacao/solicitacao.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_dados_service_solicitacao_service__["a" /* SolicitacaoService */]])
], SolicitacaoPage);

//# sourceMappingURL=solicitacao.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolicitacaoEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dados_service_letra_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_alert_alert_controller__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(69);
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
    function SolicitacaoEditPage(navCtrl, navParams, letraService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.letraService = letraService;
        this.alertCtrl = alertCtrl;
        this.data = {
            nome: "",
            email: "",
            cantor: "",
            titulo: "",
            album: "",
            letra: "",
            traducao: "",
            data: Date.now(),
            video: "",
            visita: 1,
            img: 'https://yt3.ggpht.com/a-/AJLlDp2393vbcSTCRbdr4dbiEgIOfEeayC6tDoQKGw=s900-mo-c-c0xffffffff-rj-k-no'
        };
        this.options = {
            placeholderText: 'Edit Your Content Here!',
            charCounterCount: false
        };
    }
    SolicitacaoEditPage.prototype.ionViewDidLoad = function () {
        this.data.cantor = this.navParams.get('cantor');
        this.data.titulo = this.navParams.get('titulo');
        this.data.traducao = this.navParams.get('traducao');
        var linhas = this.navParams.get('letra');
        this.data.letra = linhas;
    };
    SolicitacaoEditPage.prototype.save = function () {
        var _this = this;
        this.data.letra.replace(" ", "<br/>");
        this.data.traducao.replace(" ", "<br/>");
        this.letraService.add(this.data);
        this.alertCtrl.create({
            title: 'Alerta',
            message: 'Letra publicada com sucesso! estará disponivel em breve.',
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                    }
                },
            ]
        }).present();
    };
    return SolicitacaoEditPage;
}());
SolicitacaoEditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-solicitacao-edit',template:/*ion-inline-start:"/home/sam/angular/Cassete/src/pages/solicitacao-edit/solicitacao-edit.html"*/'<ion-header>\n <header> </header>\n</ion-header>\n\n<ion-content>\n   <ion-card>\n\n       <ion-card-content padding>\n         <form (ngSubmit)=\'save()\'>\n\n           <ion-item>\n               <ion-label style="font-size:25px;color:black;" stacked>Letra</ion-label>\n               <ion-textarea    [froalaEditor]=\'options\'\n               [(froalaModel)]="data.letra"></ion-textarea>\n           </ion-item>\n\n           <ion-item>\n              <ion-label style="font-size:25px;color:black;" stacked>Tradução</ion-label>\n              <ion-textarea    [froalaEditor]=\'options\'\n              [(froalaModel)]="data.traducao"></ion-textarea>\n          </ion-item>\n\n            {{data.id}}\n           <button ion-button type="submit" color="padrao" outline block>\n             Enviar\n           </button>\n\n         </form>\n\n       </ion-card-content>\n   </ion-card>\n <footer> </footer>\n</ion-content>\n'/*ion-inline-end:"/home/sam/angular/Cassete/src/pages/solicitacao-edit/solicitacao-edit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_dados_service_letra_service__["a" /* LetraService */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
], SolicitacaoEditPage);

//# sourceMappingURL=solicitacao-edit.js.map

/***/ })

},[322]);
//# sourceMappingURL=main.js.map