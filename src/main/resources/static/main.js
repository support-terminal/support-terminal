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

/***/ "./src/app/angular.material.module.ts":
/*!********************************************!*\
  !*** ./src/app/angular.material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_mat_codemirror__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-mat-codemirror */ "./node_modules/ngx-mat-codemirror/esm5/ngx-mat-codemirror.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var modules = [
    ngx_mat_codemirror__WEBPACK_IMPORTED_MODULE_4__["MatCodemirrorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"]
];
var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: modules.slice(),
            exports: modules.slice(),
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.component */ "./src/app/main.component.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");
/* harmony import */ var _login_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/auth.guard */ "./src/app/login/auth.guard.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [
                _config__WEBPACK_IMPORTED_MODULE_3__["Config"]
            ],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([{
                        path: '',
                        canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                        component: _main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"],
                        children: []
                    },
                    {
                        path: 'login',
                        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
                    }])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "\n      <router-outlet></router-outlet>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.component */ "./src/app/main.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_ui_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-ui-auth */ "./node_modules/ng2-ui-auth/fesm5/ng2-ui-auth.js");
/* harmony import */ var _enevts_services_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enevts/services/events.service */ "./src/app/enevts/services/events.service.ts");
/* harmony import */ var _login_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/auth.guard */ "./src/app/login/auth.guard.ts");
/* harmony import */ var _enevts_events_console_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enevts/events-console.component */ "./src/app/enevts/events-console.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-split */ "./node_modules/angular-split/fesm5/angular-split.js");
/* harmony import */ var _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ctrl/ngx-codemirror */ "./node_modules/@ctrl/ngx-codemirror/fesm5/ctrl-ngx-codemirror.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./angular.material.module */ "./src/app/angular.material.module.ts");
/* harmony import */ var _core_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/api */ "./src/app/core/api/index.ts");
/* harmony import */ var _bot_commands_bot_commands_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bot-commands/bot-commands.module */ "./src/app/bot-commands/bot-commands.module.ts");
/* harmony import */ var _bot_monitoring_bot_monitoring_task_module_ts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bot-monitoring/bot-monitoring-task.module.ts */ "./src/app/bot-monitoring/bot-monitoring-task.module.ts.ts");
/* harmony import */ var codemirror_mode_sql_sql__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! codemirror/mode/sql/sql */ "./node_modules/codemirror/mode/sql/sql.js");
/* harmony import */ var codemirror_mode_sql_sql__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_sql_sql__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _data_forms_data_forms_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./data-forms/data-forms.module */ "./src/app/data-forms/data-forms.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
                _enevts_events_console_component__WEBPACK_IMPORTED_MODULE_7__["EventsConsoleComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
            ],
            imports: [
                angular_split__WEBPACK_IMPORTED_MODULE_9__["AngularSplitModule"],
                _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_10__["CodemirrorModule"],
                ng2_ui_auth__WEBPACK_IMPORTED_MODULE_4__["Ng2UiAuthModule"].forRoot({}),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_material_module__WEBPACK_IMPORTED_MODULE_14__["AngularMaterialModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_13__["CoreModule"],
                _bot_monitoring_bot_monitoring_task_module_ts__WEBPACK_IMPORTED_MODULE_17__["BotMonitoringTasksModule"],
                _data_forms_data_forms_module__WEBPACK_IMPORTED_MODULE_19__["DataFormsModule"],
                _bot_commands_bot_commands_module__WEBPACK_IMPORTED_MODULE_16__["BotCommandsModule"]
            ],
            providers: [
                _login_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"],
                _enevts_services_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"],
                ng2_ui_auth__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
                ng2_ui_auth__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
                ng2_ui_auth__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
                _core_api__WEBPACK_IMPORTED_MODULE_15__["MessagingBusService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bot-commands/bot-commands-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/bot-commands/bot-commands-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: BotCommandsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotCommandsRoutingModule", function() { return BotCommandsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _commands_bot_commands_list_bot_commands_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commands/bot-commands-list/bot-commands-list.component */ "./src/app/bot-commands/commands/bot-commands-list/bot-commands-list.component.ts");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main.component */ "./src/app/main.component.ts");
/* harmony import */ var _login_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/auth.guard */ "./src/app/login/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            { path: 'bot-commands', component: _commands_bot_commands_list_bot_commands_list_component__WEBPACK_IMPORTED_MODULE_2__["BotCommandsListComponent"] }
        ]
    }
];
var BotCommandsRoutingModule = /** @class */ (function () {
    function BotCommandsRoutingModule() {
    }
    BotCommandsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BotCommandsRoutingModule);
    return BotCommandsRoutingModule;
}());



/***/ }),

/***/ "./src/app/bot-commands/bot-commands.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/bot-commands/bot-commands.module.ts ***!
  \*****************************************************/
/*! exports provided: BotCommandsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotCommandsModule", function() { return BotCommandsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _commands_bot_commands_list_bot_commands_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commands/bot-commands-list/bot-commands-list.component */ "./src/app/bot-commands/commands/bot-commands-list/bot-commands-list.component.ts");
/* harmony import */ var _commands_services_bot_commands_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commands/services/bot-commands.service */ "./src/app/bot-commands/commands/services/bot-commands.service.ts");
/* harmony import */ var _bot_commands_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bot-commands-routing.module */ "./src/app/bot-commands/bot-commands-routing.module.ts");
/* harmony import */ var _commands_bot_commands_list_bot_command_item_bot_command_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commands/bot-commands-list/bot-command-item/bot-command-item.component */ "./src/app/bot-commands/commands/bot-commands-list/bot-command-item/bot-command-item.component.ts");
/* harmony import */ var _commands_add_bot_command_add_bot_command_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commands/add-bot-command/add-bot-command.component */ "./src/app/bot-commands/commands/add-bot-command/add-bot-command.component.ts");
/* harmony import */ var _commands_edit_bot_command_edit_bot_command_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./commands/edit-bot-command/edit-bot-command.component */ "./src/app/bot-commands/commands/edit-bot-command/edit-bot-command.component.ts");
/* harmony import */ var _commands_services_bot_commands_bus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./commands/services/bot-commands.bus */ "./src/app/bot-commands/commands/services/bot-commands.bus.ts");
/* harmony import */ var _commands_bot_command_form_bot_command_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./commands/bot-command-form/bot-command-form.component */ "./src/app/bot-commands/commands/bot-command-form/bot-command-form.component.ts");
/* harmony import */ var _commands_bot_command_form_sql_in_excel_file_command_sql_in_excel_file_command_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./commands/bot-command-form/sql-in-excel-file-command/sql-in-excel-file-command.component */ "./src/app/bot-commands/commands/bot-command-form/sql-in-excel-file-command/sql-in-excel-file-command.component.ts");
/* harmony import */ var _commands_bot_command_form_sql_command_sql_command_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./commands/bot-command-form/sql-command/sql-command-form.component */ "./src/app/bot-commands/commands/bot-command-form/sql-command/sql-command-form.component.ts");
/* harmony import */ var _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ctrl/ngx-codemirror */ "./node_modules/@ctrl/ngx-codemirror/fesm5/ctrl-ngx-codemirror.js");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../angular.material.module */ "./src/app/angular.material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var BotCommandsModule = /** @class */ (function () {
    function BotCommandsModule(botCommandsBus) {
        this.botCommandsBus = botCommandsBus;
    }
    BotCommandsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material_module__WEBPACK_IMPORTED_MODULE_13__["AngularMaterialModule"],
                _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_12__["CodemirrorModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _bot_commands_routing_module__WEBPACK_IMPORTED_MODULE_4__["BotCommandsRoutingModule"]
            ],
            providers: [_commands_services_bot_commands_bus__WEBPACK_IMPORTED_MODULE_8__["BotCommandsBus"], _commands_services_bot_commands_service__WEBPACK_IMPORTED_MODULE_3__["BotCommandsService"]],
            declarations: [
                _commands_add_bot_command_add_bot_command_component__WEBPACK_IMPORTED_MODULE_6__["AddBotCommandComponent"], _commands_bot_command_form_bot_command_form_component__WEBPACK_IMPORTED_MODULE_9__["BotCommandFormComponent"],
                _commands_bot_command_form_sql_in_excel_file_command_sql_in_excel_file_command_component__WEBPACK_IMPORTED_MODULE_10__["SqlInExcelFileCommandComponent"], _commands_bot_command_form_sql_command_sql_command_form_component__WEBPACK_IMPORTED_MODULE_11__["SqlCommandFormComponent"], _commands_edit_bot_command_edit_bot_command_component__WEBPACK_IMPORTED_MODULE_7__["EditBotCommandComponent"],
                _commands_bot_commands_list_bot_commands_list_component__WEBPACK_IMPORTED_MODULE_2__["BotCommandsListComponent"],
                _commands_bot_commands_list_bot_command_item_bot_command_item_component__WEBPACK_IMPORTED_MODULE_5__["BotCommandItemComponent"],
            ],
            entryComponents: [_commands_add_bot_command_add_bot_command_component__WEBPACK_IMPORTED_MODULE_6__["AddBotCommandComponent"], _commands_edit_bot_command_edit_bot_command_component__WEBPACK_IMPORTED_MODULE_7__["EditBotCommandComponent"]]
        }),
        __metadata("design:paramtypes", [_commands_services_bot_commands_bus__WEBPACK_IMPORTED_MODULE_8__["BotCommandsBus"]])
    ], BotCommandsModule);
    return BotCommandsModule;
}());



/***/ }),

/***/ "./src/app/bot-commands/bus/Сhannel.ts":
/*!*********************************************!*\
  !*** ./src/app/bot-commands/bus/Сhannel.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Channel = /** @class */ (function () {
    function Channel() {
    }
    Channel.BOT_COMMANDS_WERE_UPDATED = "BOT_COMMANDS_WERE_UPDATED";
    Channel.OPEN_ADD_BOT_COMMAND_DIALOG = "OPEN_ADD_BOT_COMMAND_DIALOG";
    Channel.OPEN_EDIT_BOT_COMMAND_DIALOG = "OPEN_EDIT_BOT_COMMAND_DIALOG";
    Channel.DB_CONNECTIONS_WERE_UPDATED = "DB_CONNECTIONS_WERE_UPDATED";
    Channel.BOTS_WERE_UPDATED = "BOTS_WERE_UPDATED";
    return Channel;
}());
/* harmony default export */ __webpack_exports__["default"] = (Channel);


/***/ }),

/***/ "./src/app/bot-commands/commands/add-bot-command/add-bot-command.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/bot-commands/commands/add-bot-command/add-bot-command.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout fxLayoutAlign=\"start center\">\n  <h2 fxFlex=\"100%\" mat-dialog-title>Новая бот комманда</h2>\n  <button mat-icon-button matTooltip=\"Закрыть окно\" (click)=\"close()\">\n    <mat-icon aria-label=\"Закрыть\"\n              matTooltipPosition=\"above\">close</mat-icon>\n  </button>\n</div>\n<mat-dialog-content>\n  <bot-command-form (onSubmitEvent)=\"add($event)\"\n                      submitButtonText=\"Добавить бот комманду\">\n  </bot-command-form>\n</mat-dialog-content>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/bot-commands/commands/add-bot-command/add-bot-command.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/bot-commands/commands/add-bot-command/add-bot-command.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvdC1jb21tYW5kcy9jb21tYW5kcy9hZGQtYm90LWNvbW1hbmQvYWRkLWJvdC1jb21tYW5kLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/bot-commands/commands/add-bot-command/add-bot-command.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/bot-commands/commands/add-bot-command/add-bot-command.component.ts ***!
  \************************************************************************************/
/*! exports provided: AddBotCommandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBotCommandComponent", function() { return AddBotCommandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_bot_commands_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bot-commands.service */ "./src/app/bot-commands/commands/services/bot-commands.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddBotCommandComponent = /** @class */ (function () {
    function AddBotCommandComponent(dialogRef, botCommandsService, snackBar) {
        this.dialogRef = dialogRef;
        this.botCommandsService = botCommandsService;
        this.snackBar = snackBar;
    }
    AddBotCommandComponent.prototype.add = function (command) {
        var _this = this;
        this.botCommandsService.add(command)
            .subscribe(function (command) {
            _this.dialogRef.close();
            _this.snackBar.open("Команда добавлена", '', {
                duration: 3000,
                panelClass: 'colorGreen',
                horizontalPosition: 'right'
            });
        });
    };
    AddBotCommandComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    AddBotCommandComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-bot-command',
            template: __webpack_require__(/*! ./add-bot-command.component.html */ "./src/app/bot-commands/commands/add-bot-command/add-bot-command.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./add-bot-command.component.scss */ "./src/app/bot-commands/commands/add-bot-command/add-bot-command.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _services_bot_commands_service__WEBPACK_IMPORTED_MODULE_2__["BotCommandsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], AddBotCommandComponent);
    return AddBotCommandComponent;
}());



/***/ }),

/***/ "./src/app/bot-commands/commands/bot-command-form/bot-command-form.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/bot-commands/commands/bot-command-form/bot-command-form.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"botCommandForm\" (ngSubmit)=\"onSubmit()\" fxLayout=\"column\">\n\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"Наименование команды\"\n           id=\"name\" name=\"name\"\n           formControlName=\"name\"/>\n    <mat-error *ngIf=\" (botCommandForm.controls['name'].dirty || botCommandForm.controls['name'].touched)\n                       && botCommandForm.controls['name'].errors && botCommandForm.controls['name'].errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"Команда\"\n           id=\"cmd\" name=\"cmd\"\n           formControlName=\"cmd\"/>\n    <mat-error *ngIf=\" (botCommandForm.controls['cmd'].dirty || botCommandForm.controls['cmd'].touched)\n                       && botCommandForm.controls['cmd'].errors && botCommandForm.controls['cmd'].errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n\n  <mat-form-field>\n    <mat-select placeholder=\"Бот API\"\n                multiple\n                formControlName=\"botIds\">\n      <mat-option *ngFor=\"let bot of bots\" [value]=\"bot.id\">\n        {{ bot.label }}\n      </mat-option>\n    </mat-select>\n\n    <mat-error *ngIf=\"(botCommandForm.controls['botIds'].dirty || botCommandForm.controls['botIds'].touched)\n                       && botCommandForm.controls['botIds'].errors && botCommandForm.controls['botIds'].errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n\n  <mat-form-field [formGroup]=\"botCommandForm.controls['action']\">\n    <mat-select placeholder=\"Тип команды\"\n                id=\"type\" name=\"type\"\n                formControlName=\"type\">\n      <mat-option *ngFor=\"let t of actionTypes\" [value]=\"t.type\">\n        {{ t.name }}\n      </mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"(botCommandForm.controls['action'].controls['type'].dirty || botCommandForm.controls['action'].controls['type'].touched)\n                       && botCommandForm.controls['action'].controls['type'].errors && botCommandForm.controls['action'].controls['type'].errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n  <sql-command-form *ngIf=\"botCommandForm.controls['action'].value.type == 'SQL_SELECT'\"\n                    [actionForm]=\"botCommandForm.controls['action']\"\n                    [actionModel]=\"botCommandModel.action\">\n  </sql-command-form>\n\n  <sql-in-excel-file-command *ngIf=\"botCommandForm.controls['action'].value.type == 'SQL_SELECT_IN_EXCEL_FILE'\"\n                             [actionForm]=\"botCommandForm.controls['action']\"\n                             [actionModel]=\"botCommandModel.action\">\n  </sql-in-excel-file-command>\n\n  <div fxLayout fxFlexAlign=\"center\" style=\"margin: 20px;\" fxLayoutGap=\"10px\">\n    <button type=\"submit\" mat-raised-button color=\"primary\"\n              [disabled]=\"botCommandForm.invalid\">{{submitButtonText}}</button>\n\n    <ng-content select=\".ng-content-bottom-buttons\"></ng-content>\n\n  </div>\n\n</form>\n\n\n"

/***/ }),

/***/ "./src/app/bot-commands/commands/bot-command-form/bot-command-form.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/bot-commands/commands/bot-command-form/bot-command-form.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvdC1jb21tYW5kcy9jb21tYW5kcy9ib3QtY29tbWFuZC1mb3JtL2JvdC1jb21tYW5kLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/bot-commands/commands/bot-command-form/bot-command-form.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/bot-commands/commands/bot-command-form/bot-command-form.component.ts ***!
  \**************************************************************************************/
/*! exports provided: BotCommandFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotCommandFormComponent", function() { return BotCommandFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_BotCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/BotCommand */ "./src/app/bot-commands/commands/models/BotCommand.ts");
/* harmony import */ var _services_bot_commands_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bot-commands.service */ "./src/app/bot-commands/commands/services/bot-commands.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BotCommandFormComponent = /** @class */ (function () {
    function BotCommandFormComponent(botCommandsService, fb) {
        var _this = this;
        this.botCommandsService = botCommandsService;
        this.fb = fb;
        this.onSubmitEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.botCommandModel = new _models_BotCommand__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.actionTypes = [
            { name: 'Выборка SQL', type: 'SQL_SELECT' },
            { name: 'Выборка SQL в excel файл', type: 'SQL_SELECT_IN_EXCEL_FILE' },
        ];
        this.initForm();
        this.botsSubscription = this.botCommandsService.botsSubject.subscribe(function (bots) {
            _this.bots = bots;
        });
    }
    BotCommandFormComponent.prototype.initForm = function () {
        this.botCommandForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cmd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            botIds: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            action: this.fb.group({
                type: [''],
            })
        });
    };
    BotCommandFormComponent.prototype.onSubmit = function () {
        this.botCommandModel = this.botCommandForm.value;
        this.botCommandModel.action = this.botCommandForm.controls['action'].value;
        this.onSubmitEvent.emit(this.botCommandModel);
    };
    BotCommandFormComponent.prototype.ngOnChanges = function (changes) {
        if (changes['initial']) {
            if (this.initial != null) {
                this.botCommandModel = this.initial;
                var id = this.botCommandForm.controls['id'];
                if (id == null) {
                    this.botCommandForm.addControl('id', this.fb.control({}));
                }
                this.botCommandForm.controls['id'].setValue(this.botCommandModel.id);
                this.botCommandForm.controls['name'].setValue(this.botCommandModel.name);
                this.botCommandForm.controls['cmd'].setValue(this.botCommandModel.cmd);
                this.botCommandForm.controls['botIds'].setValue(this.botCommandModel.botIds);
                this.botCommandForm.controls['action'].controls['type'].setValue(this.botCommandModel.action.type);
            }
        }
    };
    BotCommandFormComponent.prototype.ngOnDestroy = function () {
        this.botsSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BotCommandFormComponent.prototype, "onSubmitEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_BotCommand__WEBPACK_IMPORTED_MODULE_1__["default"])
    ], BotCommandFormComponent.prototype, "initial", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BotCommandFormComponent.prototype, "submitButtonText", void 0);
    BotCommandFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bot-command-form',
            template: __webpack_require__(/*! ./bot-command-form.component.html */ "./src/app/bot-commands/commands/bot-command-form/bot-command-form.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./bot-command-form.component.scss */ "./src/app/bot-commands/commands/bot-command-form/bot-command-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_bot_commands_service__WEBPACK_IMPORTED_MODULE_2__["BotCommandsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], BotCommandFormComponent);
    return BotCommandFormComponent;
}());



/***/ }),

/***/ "./src/app/bot-commands/commands/bot-command-form/sql-command/sql-command-form.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/bot-commands/commands/bot-command-form/sql-command/sql-command-form.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"actionFormDiv\" fxLayout=\"column\" *ngIf=\"actionForm\" [formGroup]=\"actionForm\">\n\n  <mat-form-field>\n    <mat-select placeholder=\"База данных\"\n                id=\"dataBaseId\" name=\"dataBaseId\"\n                formControlName=\"dataBaseId\">\n      <mat-option *ngFor=\"let bd of dataBases\" [value]=\"bd.id\">\n        {{ bd.name }}\n      </mat-option>\n    </mat-select>\n\n    <mat-error *ngIf=\"(actionForm.controls['dataBaseId'].dirty || actionForm.controls['dataBaseId'].touched)\n                       && actionForm.controls['dataBaseId'].errors && actionForm.controls['dataBaseId'].errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-codemirror formControlName=\"select\"\n                    id=\"select\" name=\"select\"\n                    required\n                    [options]=\"{\n          theme: 'idea',\n          mode: 'text/x-sql'\n        }\" placeholder=\"Sql select\"></mat-codemirror>\n    <mat-error *ngIf=\"(actionForm.controls['select'].dirty || actionForm.controls['select'].touched)\n                     && actionForm.controls['select'].errors && actionForm.controls['select'].errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"Шаблон ответа\"\n           id=\"resultTemplate\" name=\"resultTemplate\"\n           formControlName=\"resultTemplate\"/>\n    <mat-error *ngIf=\"(actionForm.controls['resultTemplate'].dirty || actionForm.controls['resultTemplate'].touched)\n                       && actionForm.controls['resultTemplate'].errors && actionForm.controls['resultTemplate'].errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n</div>\n"

/***/ }),

/***/ "./src/app/bot-commands/commands/bot-command-form/sql-command/sql-command-form.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/bot-commands/commands/bot-command-form/sql-command/sql-command-form.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: SqlCommandFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqlCommandFormComponent", function() { return SqlCommandFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_bot_commands_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/bot-commands.service */ "./src/app/bot-commands/commands/services/bot-commands.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_Action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/Action */ "./src/app/bot-commands/commands/models/Action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SqlCommandFormComponent = /** @class */ (function () {
    function SqlCommandFormComponent(botCommandsService, fb) {
        var _this = this;
        this.botCommandsService = botCommandsService;
        this.fb = fb;
        this.dataBasesSubscription = this.botCommandsService.dataBasesSubject.subscribe(function (dataBases) {
            _this.dataBases = dataBases;
        });
    }
    SqlCommandFormComponent.prototype.ngOnChanges = function (changes) {
        if (changes['actionForm']) {
            this.actionForm.addControl('dataBaseId', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]));
            this.actionForm.addControl('select', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]));
            this.actionForm.addControl('resultTemplate', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]));
        }
        if (changes['actionModel']) {
            if (this.actionModel != null) {
                this.actionForm.controls['dataBaseId'].setValue(this.actionModel.dataBaseId);
                this.actionForm.controls['select'].setValue(this.actionModel.select);
                this.actionForm.controls['type'].setValue('SQL_SELECT');
                this.actionForm.controls['resultTemplate'].setValue(this.actionModel.resultTemplate);
            }
        }
    };
    SqlCommandFormComponent.prototype.ngOnDestroy = function () {
        this.dataBasesSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_Action__WEBPACK_IMPORTED_MODULE_3__["default"])
    ], SqlCommandFormComponent.prototype, "actionModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], SqlCommandFormComponent.prototype, "actionForm", void 0);
    SqlCommandFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sql-command-form',
            template: __webpack_require__(/*! ./sql-command-form.component.html */ "./src/app/bot-commands/commands/bot-command-form/sql-command/sql-command-form.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
        }),
        __metadata("design:paramtypes", [_services_bot_commands_service__WEBPACK_IMPORTED_MODULE_1__["BotCommandsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], SqlCommandFormComponent);
    return SqlCommandFormComponent;
}());



/***/ }),

/***/ "./src/app/bot-commands/commands/bot-command-form/sql-in-excel-file-command/sql-in-excel-file-command.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/bot-commands/commands/bot-command-form/sql-in-excel-file-command/sql-in-excel-file-command.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"actionFormDiv\" fxLayout=\"column\" *ngIf=\"actionForm\" [formGroup]=\"actionForm\">\n  <mat-form-field>\n    <mat-select placeholder=\"База данных\"\n                id=\"dataBaseId\" name=\"dataBaseId\"\n                formControlName=\"dataBaseId\">\n      <mat-option *ngFor=\"let bd of dataBases\" [value]=\"bd.id\">\n        {{ bd.name }}\n      </mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"(actionForm.controls['dataBaseId'].dirty || actionForm.controls['dataBaseId'].touched)\n                       && actionForm.controls['dataBaseId'].errors && actionForm.controls['dataBaseId'].errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-codemirror formControlName=\"select\"\n                    id=\"select\" name=\"select\"\n                    required\n                    [options]=\"{\n          theme: 'idea',\n          mode: 'text/x-sql'\n        }\" placeholder=\"Sql select\"></mat-codemirror>\n    <mat-error *ngIf=\"(actionForm.controls['select'].dirty || actionForm.controls['select'].touched)\n                     && actionForm.controls['select'].errors && actionForm.controls['select'].errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"Шаблон имени файла\"\n           id=\"fileNameTemplate\" name=\"fileNameTemplate\"\n           formControlName=\"fileNameTemplate\"/>\n    <mat-error *ngIf=\"(actionForm.controls['fileNameTemplate'].dirty || actionForm.controls['fileNameTemplate'].touched)\n                       && actionForm.controls['fileNameTemplate'].errors && actionForm.controls['fileNameTemplate'].errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n</div>\n"

/***/ }),

/***/ "./src/app/bot-commands/commands/bot-command-form/sql-in-excel-file-command/sql-in-excel-file-command.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/bot-commands/commands/bot-command-form/sql-in-excel-file-command/sql-in-excel-file-command.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: SqlInExcelFileCommandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqlInExcelFileCommandComponent", function() { return SqlInExcelFileCommandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_bot_commands_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/bot-commands.service */ "./src/app/bot-commands/commands/services/bot-commands.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_Action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/Action */ "./src/app/bot-commands/commands/models/Action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SqlInExcelFileCommandComponent = /** @class */ (function () {
    function SqlInExcelFileCommandComponent(botCommandsService, fb) {
        var _this = this;
        this.botCommandsService = botCommandsService;
        this.fb = fb;
        this.dataBasesSubscription = this.botCommandsService.dataBasesSubject.subscribe(function (dataBases) {
            _this.dataBases = dataBases;
        });
    }
    SqlInExcelFileCommandComponent.prototype.ngOnChanges = function (changes) {
        if (changes['actionForm']) {
            this.actionForm.addControl('dataBaseId', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]));
            this.actionForm.addControl('select', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]));
            this.actionForm.addControl('fileNameTemplate', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]));
        }
        if (changes['actionModel']) {
            if (this.actionModel != null) {
                this.actionForm.controls['dataBaseId'].setValue(this.actionModel.dataBaseId);
                this.actionForm.controls['select'].setValue(this.actionModel.select);
                this.actionForm.controls['type'].setValue('SQL_SELECT_IN_EXCEL_FILE');
                this.actionForm.controls['fileNameTemplate'].setValue(this.actionModel.fileNameTemplate);
            }
        }
    };
    SqlInExcelFileCommandComponent.prototype.ngOnDestroy = function () {
        this.dataBasesSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_Action__WEBPACK_IMPORTED_MODULE_3__["default"])
    ], SqlInExcelFileCommandComponent.prototype, "actionModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], SqlInExcelFileCommandComponent.prototype, "actionForm", void 0);
    SqlInExcelFileCommandComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sql-in-excel-file-command',
            template: __webpack_require__(/*! ./sql-in-excel-file-command.component.html */ "./src/app/bot-commands/commands/bot-command-form/sql-in-excel-file-command/sql-in-excel-file-command.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
        }),
        __metadata("design:paramtypes", [_services_bot_commands_service__WEBPACK_IMPORTED_MODULE_1__["BotCommandsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], SqlInExcelFileCommandComponent);
    return SqlInExcelFileCommandComponent;
}());



/***/ }),

/***/ "./src/app/bot-commands/commands/bot-commands-list/bot-command-item/bot-command-item.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/bot-commands/commands/bot-commands-list/bot-command-item/bot-command-item.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list-item style=\"background-color: #fff;\">\n  <span matLine> <span style=\"font-size: 18px; font-weight: 600;\">{{command.cmd}}</span> - <span>{{command.name}}</span></span>\n  <button mat-icon-button (click)=\"edit()\">\n    <mat-icon aria-label=\"Редактировать\">edit</mat-icon>\n  </button>\n</mat-list-item>\n<mat-divider></mat-divider>\n"

/***/ }),

/***/ "./src/app/bot-commands/commands/bot-commands-list/bot-command-item/bot-command-item.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/bot-commands/commands/bot-commands-list/bot-command-item/bot-command-item.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvdC1jb21tYW5kcy9jb21tYW5kcy9ib3QtY29tbWFuZHMtbGlzdC9ib3QtY29tbWFuZC1pdGVtL2JvdC1jb21tYW5kLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/bot-commands/commands/bot-commands-list/bot-command-item/bot-command-item.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/bot-commands/commands/bot-commands-list/bot-command-item/bot-command-item.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: BotCommandItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotCommandItemComponent", function() { return BotCommandItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bus_hannel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../bus/Сhannel */ "./src/app/bot-commands/bus/Сhannel.ts");
/* harmony import */ var _models_BotCommand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/BotCommand */ "./src/app/bot-commands/commands/models/BotCommand.ts");
/* harmony import */ var _core_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/api */ "./src/app/core/api/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BotCommandItemComponent = /** @class */ (function () {
    function BotCommandItemComponent(messagingBusService) {
        this.messagingBusService = messagingBusService;
    }
    BotCommandItemComponent.prototype.edit = function () {
        this.messagingBusService.sendMessage({ channel: _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].OPEN_EDIT_BOT_COMMAND_DIALOG, data: { id: this.command.id } });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_BotCommand__WEBPACK_IMPORTED_MODULE_2__["default"])
    ], BotCommandItemComponent.prototype, "command", void 0);
    BotCommandItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bot-command-item',
            template: __webpack_require__(/*! ./bot-command-item.component.html */ "./src/app/bot-commands/commands/bot-commands-list/bot-command-item/bot-command-item.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./bot-command-item.component.scss */ "./src/app/bot-commands/commands/bot-commands-list/bot-command-item/bot-command-item.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_api__WEBPACK_IMPORTED_MODULE_3__["MessagingBusService"]])
    ], BotCommandItemComponent);
    return BotCommandItemComponent;
}());



/***/ }),

/***/ "./src/app/bot-commands/commands/bot-commands-list/bot-commands-list.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/bot-commands/commands/bot-commands-list/bot-commands-list.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <span>Список команд для ботов</span>\n      <span fxFlex=\"100%\"></span>\n      <span fxFlex=\"100%\" fxLayoutAlign=\"end\">\n        <button mat-button (click)=\"add()\">\n          <mat-icon aria-label=\"Добавить новую команду\">playlist_add</mat-icon>\n          Добавить новую команду\n        </button>\n      </span>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <mat-list>\n    <bot-command-item *ngFor=\"let command of commandsList\" [command]=\"command\"></bot-command-item>\n  </mat-list>\n\n</div>\n"

/***/ }),

/***/ "./src/app/bot-commands/commands/bot-commands-list/bot-commands-list.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/bot-commands/commands/bot-commands-list/bot-commands-list.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvdC1jb21tYW5kcy9jb21tYW5kcy9ib3QtY29tbWFuZHMtbGlzdC9ib3QtY29tbWFuZHMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/bot-commands/commands/bot-commands-list/bot-commands-list.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/bot-commands/commands/bot-commands-list/bot-commands-list.component.ts ***!
  \****************************************************************************************/
/*! exports provided: BotCommandsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotCommandsListComponent", function() { return BotCommandsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bus_hannel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bus/Сhannel */ "./src/app/bot-commands/bus/Сhannel.ts");
/* harmony import */ var _services_bot_commands_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bot-commands.service */ "./src/app/bot-commands/commands/services/bot-commands.service.ts");
/* harmony import */ var _core_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/api */ "./src/app/core/api/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BotCommandsListComponent = /** @class */ (function () {
    function BotCommandsListComponent(messagingBusService, botCommandsService) {
        var _this = this;
        this.messagingBusService = messagingBusService;
        this.botCommandsService = botCommandsService;
        this.getBotsList();
        this.commandsListSubscription = this.messagingBusService.getMessage().subscribe(function (message) {
            if (message.channel == _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].BOT_COMMANDS_WERE_UPDATED) {
                _this.getBotsList();
            }
        });
    }
    BotCommandsListComponent.prototype.ngOnDestroy = function () {
        this.commandsListSubscription.unsubscribe();
    };
    BotCommandsListComponent.prototype.add = function () {
        this.messagingBusService.sendMessage({ channel: _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].OPEN_ADD_BOT_COMMAND_DIALOG });
    };
    BotCommandsListComponent.prototype.getBotsList = function () {
        var _this = this;
        this.botCommandsService.getAll().subscribe(function (commands) {
            _this.commandsList = commands;
        });
    };
    BotCommandsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bot-commands-list',
            template: __webpack_require__(/*! ./bot-commands-list.component.html */ "./src/app/bot-commands/commands/bot-commands-list/bot-commands-list.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./bot-commands-list.component.scss */ "./src/app/bot-commands/commands/bot-commands-list/bot-commands-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_api__WEBPACK_IMPORTED_MODULE_3__["MessagingBusService"],
            _services_bot_commands_service__WEBPACK_IMPORTED_MODULE_2__["BotCommandsService"]])
    ], BotCommandsListComponent);
    return BotCommandsListComponent;
}());



/***/ }),

/***/ "./src/app/bot-commands/commands/edit-bot-command/edit-bot-command.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/bot-commands/commands/edit-bot-command/edit-bot-command.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout fxLayoutAlign=\"start center\">\n  <h2 fxFlex=\"100%\" mat-dialog-title>Редактировать: {{command.name}} </h2>\n  <button mat-icon-button matTooltip=\"Закрыть окно\" (click)=\"close()\">\n    <mat-icon aria-label=\"Закрыть\"\n              matTooltipPosition=\"above\">close</mat-icon>\n  </button>\n</div>\n<mat-dialog-content *ngIf=\"command\">\n\n  <mat-slide-toggle\n          color=\"primary\"\n          (change)=\"changeCommandState($event)\"\n          [checked]=\"command.state == 'ENABLED'\">\n   <span *ngIf=\"command.state == 'ENABLED'\">Включен</span>\n   <span *ngIf=\"command.state != 'ENABLED'\">Выключен</span>\n  </mat-slide-toggle>\n\n  <bot-command-form (onSubmitEvent)=\"edit($event)\"\n                      [initial]=\"command\"\n                      submitButtonText=\"Сохранить изменения\">\n\n    <div class=\"ng-content-bottom-buttons\">\n      <button type=\"button\" mat-button color=\"warn\" (click)=\"delete()\">Удалить команду</button>\n    </div>\n\n  </bot-command-form>\n</mat-dialog-content>\n\n"

/***/ }),

/***/ "./src/app/bot-commands/commands/edit-bot-command/edit-bot-command.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/bot-commands/commands/edit-bot-command/edit-bot-command.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvdC1jb21tYW5kcy9jb21tYW5kcy9lZGl0LWJvdC1jb21tYW5kL2VkaXQtYm90LWNvbW1hbmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/bot-commands/commands/edit-bot-command/edit-bot-command.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/bot-commands/commands/edit-bot-command/edit-bot-command.component.ts ***!
  \**************************************************************************************/
/*! exports provided: EditBotCommandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBotCommandComponent", function() { return EditBotCommandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_bot_commands_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bot-commands.service */ "./src/app/bot-commands/commands/services/bot-commands.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EditBotCommandComponent = /** @class */ (function () {
    function EditBotCommandComponent(dialogRef, data, botCommandsService, snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.botCommandsService = botCommandsService;
        this.snackBar = snackBar;
        this.command = data.command;
    }
    EditBotCommandComponent.prototype.edit = function (command) {
        var _this = this;
        this.botCommandsService.update(command)
            .subscribe(function (command) {
            _this.snackBar.open("Изменения сохранены", '', {
                duration: 3000,
                panelClass: 'colorGreen',
                horizontalPosition: 'right'
            });
        });
    };
    EditBotCommandComponent.prototype.changeCommandState = function (changeEvent) {
        if (changeEvent.checked) {
            this.command.state = 'ENABLED';
        }
        else {
            this.command.state = 'DISABLED';
        }
    };
    EditBotCommandComponent.prototype.delete = function () {
        var _this = this;
        console.log("delete");
        this.botCommandsService.delete(this.command.id)
            .subscribe(function (command) {
            _this.dialogRef.close();
            _this.snackBar.open("Удалено", '', {
                duration: 3000,
                panelClass: 'colorGreen',
                horizontalPosition: 'right'
            });
        });
    };
    EditBotCommandComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    EditBotCommandComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-bot-command',
            template: __webpack_require__(/*! ./edit-bot-command.component.html */ "./src/app/bot-commands/commands/edit-bot-command/edit-bot-command.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./edit-bot-command.component.scss */ "./src/app/bot-commands/commands/edit-bot-command/edit-bot-command.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_bot_commands_service__WEBPACK_IMPORTED_MODULE_2__["BotCommandsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], EditBotCommandComponent);
    return EditBotCommandComponent;
}());



/***/ }),

/***/ "./src/app/bot-commands/commands/models/Action.ts":
/*!********************************************************!*\
  !*** ./src/app/bot-commands/commands/models/Action.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Action = /** @class */ (function () {
    function Action() {
    }
    return Action;
}());
/* harmony default export */ __webpack_exports__["default"] = (Action);


/***/ }),

/***/ "./src/app/bot-commands/commands/models/BotCommand.ts":
/*!************************************************************!*\
  !*** ./src/app/bot-commands/commands/models/BotCommand.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ "./src/app/bot-commands/commands/models/Action.ts");

var BotCommand = /** @class */ (function () {
    function BotCommand() {
        this.action = new _Action__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    return BotCommand;
}());
/* harmony default export */ __webpack_exports__["default"] = (BotCommand);


/***/ }),

/***/ "./src/app/bot-commands/commands/services/bot-commands.bus.ts":
/*!********************************************************************!*\
  !*** ./src/app/bot-commands/commands/services/bot-commands.bus.ts ***!
  \********************************************************************/
/*! exports provided: BotCommandsBus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotCommandsBus", function() { return BotCommandsBus; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _bus_hannel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bus/Сhannel */ "./src/app/bot-commands/bus/Сhannel.ts");
/* harmony import */ var _bot_commands_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bot-commands.service */ "./src/app/bot-commands/commands/services/bot-commands.service.ts");
/* harmony import */ var _add_bot_command_add_bot_command_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-bot-command/add-bot-command.component */ "./src/app/bot-commands/commands/add-bot-command/add-bot-command.component.ts");
/* harmony import */ var _edit_bot_command_edit_bot_command_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-bot-command/edit-bot-command.component */ "./src/app/bot-commands/commands/edit-bot-command/edit-bot-command.component.ts");
/* harmony import */ var _core_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/api */ "./src/app/core/api/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var BotCommandsBus = /** @class */ (function () {
    function BotCommandsBus(dialog, messagingBusService, telegramCommandsService) {
        var _this = this;
        this.dialog = dialog;
        this.messagingBusService = messagingBusService;
        this.telegramCommandsService = telegramCommandsService;
        this.subscription = this.messagingBusService.getMessage().subscribe(function (message) {
            if (message.channel == _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].OPEN_ADD_BOT_COMMAND_DIALOG) {
                _this.openAddDialog();
            }
            else if (message.channel == _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].OPEN_EDIT_BOT_COMMAND_DIALOG) {
                _this.openEditDialog(message.data.id);
            }
        });
    }
    BotCommandsBus.prototype.openAddDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_add_bot_command_add_bot_command_component__WEBPACK_IMPORTED_MODULE_3__["AddBotCommandComponent"], {
            width: '900px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.messagingBusService.sendMessage({ channel: _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].BOT_COMMANDS_WERE_UPDATED });
        });
    };
    BotCommandsBus.prototype.openEditDialog = function (id) {
        var _this = this;
        this.telegramCommandsService.get(id)
            .subscribe(function (command) {
            var dialogRef = _this.dialog.open(_edit_bot_command_edit_bot_command_component__WEBPACK_IMPORTED_MODULE_4__["EditBotCommandComponent"], {
                width: '900px',
                data: {
                    command: command
                }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                _this.messagingBusService.sendMessage({ channel: _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].BOT_COMMANDS_WERE_UPDATED });
            });
        });
    };
    BotCommandsBus = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"],
            _core_api__WEBPACK_IMPORTED_MODULE_5__["MessagingBusService"],
            _bot_commands_service__WEBPACK_IMPORTED_MODULE_2__["BotCommandsService"]])
    ], BotCommandsBus);
    return BotCommandsBus;
}());



/***/ }),

/***/ "./src/app/bot-commands/commands/services/bot-commands.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/bot-commands/commands/services/bot-commands.service.ts ***!
  \************************************************************************/
/*! exports provided: BotCommandsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotCommandsService", function() { return BotCommandsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _bus_hannel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bus/Сhannel */ "./src/app/bot-commands/bus/Сhannel.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/api */ "./src/app/core/api/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/app/config.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var BotCommandsService = /** @class */ (function () {
    function BotCommandsService(http, messagingBusService, config) {
        var _this = this;
        this.http = http;
        this.messagingBusService = messagingBusService;
        this.config = config;
        this.headers = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        this.botsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Array());
        this.dataBasesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Array());
        this.url = config.api + '/bot-commands/commands';
        this.dataBasesUrl = config.api + '/db-connections';
        this.botsUrl = config.api + '/bots';
        this.requestDataBases();
        this.requestBots();
        this.subscription = this.messagingBusService.getMessage().subscribe(function (message) {
            if (message.channel == _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].BOTS_WERE_UPDATED) {
                _this.requestBots();
            }
            else if (message.channel == _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].DB_CONNECTIONS_WERE_UPDATED) {
                console.log("DB_CONNECTIONS_WERE_UPDATED");
                _this.requestDataBases();
            }
        });
    }
    BotCommandsService.prototype.requestDataBases = function () {
        var _this = this;
        this.http.get(this.dataBasesUrl, this.headers)
            .subscribe(function (dbs) {
            _this.dataBasesSubject.next(dbs);
        });
    };
    BotCommandsService.prototype.requestBots = function () {
        var _this = this;
        this.http.get(this.botsUrl, this.headers)
            .subscribe(function (bots) {
            _this.botsSubject.next(bots);
        });
    };
    BotCommandsService.prototype.add = function (command) {
        return this.http
            .post(this.url, command, this.headers);
    };
    BotCommandsService.prototype.getAll = function () {
        return this.http.get(this.url, this.headers);
    };
    BotCommandsService.prototype.get = function (commandId) {
        return this.http
            .get(this.url + ("/" + commandId));
    };
    BotCommandsService.prototype.delete = function (commandId) {
        return this.http
            .delete(this.url + ("/" + commandId));
    };
    BotCommandsService.prototype.update = function (command) {
        return this.http
            .put(this.url + ("/" + command.id), command, this.headers);
    };
    BotCommandsService = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _core_api__WEBPACK_IMPORTED_MODULE_3__["MessagingBusService"],
            _config__WEBPACK_IMPORTED_MODULE_4__["Config"]])
    ], BotCommandsService);
    return BotCommandsService;
}());



/***/ }),

/***/ "./src/app/bot-monitoring/bot-monitoring-task-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/bot-monitoring/bot-monitoring-task-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: BotTasksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotTasksRoutingModule", function() { return BotTasksRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tasks_bot_tasks_list_bot_tasks_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks/bot-tasks-list/bot-tasks-list.component */ "./src/app/bot-monitoring/tasks/bot-tasks-list/bot-tasks-list.component.ts");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main.component */ "./src/app/main.component.ts");
/* harmony import */ var _login_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/auth.guard */ "./src/app/login/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            { path: 'bot-monitoring', component: _tasks_bot_tasks_list_bot_tasks_list_component__WEBPACK_IMPORTED_MODULE_2__["BotTasksListComponent"] }
        ]
    }
];
var BotTasksRoutingModule = /** @class */ (function () {
    function BotTasksRoutingModule() {
    }
    BotTasksRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BotTasksRoutingModule);
    return BotTasksRoutingModule;
}());



/***/ }),

/***/ "./src/app/bot-monitoring/bot-monitoring-task.module.ts.ts":
/*!*****************************************************************!*\
  !*** ./src/app/bot-monitoring/bot-monitoring-task.module.ts.ts ***!
  \*****************************************************************/
/*! exports provided: BotMonitoringTasksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotMonitoringTasksModule", function() { return BotMonitoringTasksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../angular.material.module */ "./src/app/angular.material.module.ts");
/* harmony import */ var _tasks_bot_tasks_list_bot_tasks_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks/bot-tasks-list/bot-tasks-list.component */ "./src/app/bot-monitoring/tasks/bot-tasks-list/bot-tasks-list.component.ts");
/* harmony import */ var _tasks_services_bot_monitoring_tasks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks/services/bot-monitoring-tasks.service */ "./src/app/bot-monitoring/tasks/services/bot-monitoring-tasks.service.ts");
/* harmony import */ var _bot_monitoring_task_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bot-monitoring-task-routing.module */ "./src/app/bot-monitoring/bot-monitoring-task-routing.module.ts");
/* harmony import */ var _tasks_bot_tasks_list_bot_task_item_bot_task_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tasks/bot-tasks-list/bot-task-item/bot-task-item.component */ "./src/app/bot-monitoring/tasks/bot-tasks-list/bot-task-item/bot-task-item.component.ts");
/* harmony import */ var _tasks_add_bot_task_add_bot_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tasks/add-bot-task/add-bot-task.component */ "./src/app/bot-monitoring/tasks/add-bot-task/add-bot-task.component.ts");
/* harmony import */ var _tasks_edit_bot_task_edit_bot_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tasks/edit-bot-task/edit-bot-task.component */ "./src/app/bot-monitoring/tasks/edit-bot-task/edit-bot-task.component.ts");
/* harmony import */ var _tasks_services_bot_monitoring_tasks_bus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tasks/services/bot-monitoring-tasks.bus */ "./src/app/bot-monitoring/tasks/services/bot-monitoring-tasks.bus.ts");
/* harmony import */ var _tasks_bot_task_form_bot_task_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tasks/bot-task-form/bot-task-form.component */ "./src/app/bot-monitoring/tasks/bot-task-form/bot-task-form.component.ts");
/* harmony import */ var _tasks_bot_task_form_select_one_numeric_value_task_select_one_numeric_value_task_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tasks/bot-task-form/select-one-numeric-value-task/select-one-numeric-value-task.component */ "./src/app/bot-monitoring/tasks/bot-task-form/select-one-numeric-value-task/select-one-numeric-value-task.component.ts");
/* harmony import */ var _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ctrl/ngx-codemirror */ "./node_modules/@ctrl/ngx-codemirror/fesm5/ctrl-ngx-codemirror.js");
/* harmony import */ var _tasks_bot_task_form_bot_monitoring_task_condition_item_bot_monitoring_task_condition_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tasks/bot-task-form/bot-monitoring-task-condition-item/bot-monitoring-task-condition-item.component */ "./src/app/bot-monitoring/tasks/bot-task-form/bot-monitoring-task-condition-item/bot-monitoring-task-condition-item.component.ts");
/* harmony import */ var _tasks_bot_task_form_bot_monitoring_task_notify_item_bot_monitoring_task_notify_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tasks/bot-task-form/bot-monitoring-task-notify-item/bot-monitoring-task-notify-item.component */ "./src/app/bot-monitoring/tasks/bot-task-form/bot-monitoring-task-notify-item/bot-monitoring-task-notify-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var BotMonitoringTasksModule = /** @class */ (function () {
    function BotMonitoringTasksModule(botTasksBus) {
        this.botTasksBus = botTasksBus;
    }
    BotMonitoringTasksModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_12__["CodemirrorModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _bot_monitoring_task_routing_module__WEBPACK_IMPORTED_MODULE_5__["BotTasksRoutingModule"],
                _angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"]
            ],
            providers: [_tasks_services_bot_monitoring_tasks_bus__WEBPACK_IMPORTED_MODULE_9__["BotMonitoringTasksBus"], _tasks_services_bot_monitoring_tasks_service__WEBPACK_IMPORTED_MODULE_4__["BotMonitoringTasksService"]],
            declarations: [
                _tasks_add_bot_task_add_bot_task_component__WEBPACK_IMPORTED_MODULE_7__["AddBotTaskComponent"], _tasks_bot_task_form_bot_task_form_component__WEBPACK_IMPORTED_MODULE_10__["BotTaskFormComponent"],
                _tasks_bot_task_form_select_one_numeric_value_task_select_one_numeric_value_task_component__WEBPACK_IMPORTED_MODULE_11__["SelectOneNumericValueTaskComponent"], _tasks_edit_bot_task_edit_bot_task_component__WEBPACK_IMPORTED_MODULE_8__["EditBotTaskComponent"],
                _tasks_bot_task_form_bot_monitoring_task_condition_item_bot_monitoring_task_condition_item_component__WEBPACK_IMPORTED_MODULE_13__["BotMonitoringTaskConditionItem"], _tasks_bot_task_form_bot_monitoring_task_notify_item_bot_monitoring_task_notify_item_component__WEBPACK_IMPORTED_MODULE_14__["BotMonitoringTaskNotifyItemComponent"],
                _tasks_bot_tasks_list_bot_tasks_list_component__WEBPACK_IMPORTED_MODULE_3__["BotTasksListComponent"],
                _tasks_bot_tasks_list_bot_task_item_bot_task_item_component__WEBPACK_IMPORTED_MODULE_6__["BotTaskItemComponent"],
            ],
            entryComponents: [_tasks_add_bot_task_add_bot_task_component__WEBPACK_IMPORTED_MODULE_7__["AddBotTaskComponent"], _tasks_edit_bot_task_edit_bot_task_component__WEBPACK_IMPORTED_MODULE_8__["EditBotTaskComponent"]]
        }),
        __metadata("design:paramtypes", [_tasks_services_bot_monitoring_tasks_bus__WEBPACK_IMPORTED_MODULE_9__["BotMonitoringTasksBus"]])
    ], BotMonitoringTasksModule);
    return BotMonitoringTasksModule;
}());



/***/ }),

/***/ "./src/app/bot-monitoring/bus/Сhannel.ts":
/*!***********************************************!*\
  !*** ./src/app/bot-monitoring/bus/Сhannel.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Channel = /** @class */ (function () {
    function Channel() {
    }
    Channel.BOT_TASKS_WERE_UPDATED = "BOT_TASKS_WERE_UPDATED";
    Channel.OPEN_ADD_BOT_TASK_DIALOG = "OPEN_ADD_BOT_TASK_DIALOG";
    Channel.OPEN_EDIT_BOT_TASKS_DIALOG = "OPEN_EDIT_BOT_TASKS_DIALOG";
    Channel.DB_CONNECTIONS_WERE_UPDATED = "DB_CONNECTIONS_WERE_UPDATED";
    Channel.BOTS_WERE_UPDATED = "BOTS_WERE_UPDATED";
    return Channel;
}());
/* harmony default export */ __webpack_exports__["default"] = (Channel);


/***/ }),

/***/ "./src/app/bot-monitoring/tasks/add-bot-task/add-bot-task.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/bot-monitoring/tasks/add-bot-task/add-bot-task.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout fxLayoutAlign=\"start center\">\n  <h2 fxFlex=\"100%\" mat-dialog-title>Новая задача мониторинга</h2>\n  <button mat-icon-button matTooltip=\"Закрыть окно\" (click)=\"close()\">\n    <mat-icon aria-label=\"Закрыть\"\n              matTooltipPosition=\"above\">close</mat-icon>\n  </button>\n</div>\n<mat-dialog-content>\n  <bot-task-form (onSubmitEvent)=\"add($event)\"\n                      submitButtonText=\"Добавить задачу\">\n  </bot-task-form>\n</mat-dialog-content>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/bot-monitoring/tasks/add-bot-task/add-bot-task.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/bot-monitoring/tasks/add-bot-task/add-bot-task.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvdC1tb25pdG9yaW5nL3Rhc2tzL2FkZC1ib3QtdGFzay9hZGQtYm90LXRhc2suY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/bot-monitoring/tasks/add-bot-task/add-bot-task.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/bot-monitoring/tasks/add-bot-task/add-bot-task.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddBotTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBotTaskComponent", function() { return AddBotTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_bot_monitoring_tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bot-monitoring-tasks.service */ "./src/app/bot-monitoring/tasks/services/bot-monitoring-tasks.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddBotTaskComponent = /** @class */ (function () {
    function AddBotTaskComponent(dialogRef, botTasksService, snackBar) {
        this.dialogRef = dialogRef;
        this.botTasksService = botTasksService;
        this.snackBar = snackBar;
    }
    AddBotTaskComponent.prototype.add = function (task) {
        var _this = this;
        this.botTasksService.add(task)
            .subscribe(function (task) {
            _this.dialogRef.close();
            _this.snackBar.open("Задача добавлена", '', {
                duration: 3000,
                panelClass: 'colorGreen',
                horizontalPosition: 'right'
            });
        });
    };
    AddBotTaskComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    AddBotTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-bot-task',
            template: __webpack_require__(/*! ./add-bot-task.component.html */ "./src/app/bot-monitoring/tasks/add-bot-task/add-bot-task.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./add-bot-task.component.scss */ "./src/app/bot-monitoring/tasks/add-bot-task/add-bot-task.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _services_bot_monitoring_tasks_service__WEBPACK_IMPORTED_MODULE_2__["BotMonitoringTasksService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], AddBotTaskComponent);
    return AddBotTaskComponent;
}());



/***/ }),

/***/ "./src/app/bot-monitoring/tasks/bot-task-form/bot-monitoring-task-condition-item/bot-monitoring-task-condition-item.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/bot-monitoring/tasks/bot-task-form/bot-monitoring-task-condition-item/bot-monitoring-task-condition-item.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-elevation-z4\"  [formGroup]=\"condition\" >\n    <mat-card-title>{{getConditionName(condition.controls['type'].value)}}</mat-card-title>\n    <mat-card-content>\n        <div fxFlex=\"60%\">\n            <input matInput placeholder=\"Чем значение\"\n                   id=\"expectedValue\" name=\"expectedValue\"\n                   formControlName=\"expectedValue\"\n                   required/>\n          <mat-error *ngIf=\" (condition.controls['expectedValue'].dirty || condition.controls['expectedValue'].touched)\n                       && condition.controls['expectedValue'].errors && condition.controls['expectedValue'].errors.required\">\n            Необходимое значение\n          </mat-error>\n        </div>\n    </mat-card-content>\n    <mat-card-actions fxLayoutAlign=\"end\">\n        <button type=\"submit\" mat-button color=\"warn\" (click)=\"submitRemoveMe()\">\n            Убрать проверку\n        </button>\n    </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/bot-monitoring/tasks/bot-task-form/bot-monitoring-task-condition-item/bot-monitoring-task-condition-item.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/bot-monitoring/tasks/bot-task-form/bot-monitoring-task-condition-item/bot-monitoring-task-condition-item.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: BotMonitoringTaskConditionItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotMonitoringTaskConditionItem", function() { return BotMonitoringTaskConditionItem; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BotMonitoringTaskConditionItem = /** @class */ (function () {
    function BotMonitoringTaskConditionItem() {
        this.removeMeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BotMonitoringTaskConditionItem.prototype.getConditionName = function (type) {
        if (type == 'NUMERIC_MORE_THAN') {
            return ' Больше чем';
        }
        else if (type == 'NUMERIC_LESS_THAN') {
            return ' Меньше чем';
        }
        else if (type == 'NUMERIC_EQUAL') {
            return ' Равно';
        }
    };
    BotMonitoringTaskConditionItem.prototype.submitRemoveMe = function () {
        this.removeMeEvent.emit(this.index);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BotMonitoringTaskConditionItem.prototype, "removeMeEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], BotMonitoringTaskConditionItem.prototype, "condition", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BotMonitoringTaskConditionItem.prototype, "index", void 0);
    BotMonitoringTaskConditionItem = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bot-monitoring-task-condition-item',
            template: __webpack_require__(/*! ./bot-monitoring-task-condition-item.component.html */ "./src/app/bot-monitoring/tasks/bot-task-form/bot-monitoring-task-condition-item/bot-monitoring-task-condition-item.component.html"),
            viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"] }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
        })
    ], BotMonitoringTaskConditionItem);
    return BotMonitoringTaskConditionItem;
}());



/***/ }),

/***/ "./src/app/bot-monitoring/tasks/bot-task-form/bot-monitoring-task-notify-item/bot-monitoring-task-notify-item.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/bot-monitoring/tasks/bot-task-form/bot-monitoring-task-notify-item/bot-monitoring-task-notify-item.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-elevation-z4\" [formGroup]=\"notifyForm\" >\n    <mat-card-title>{{getNotifyName(notifyForm.controls['type'].value)}}</mat-card-title>\n    <mat-card-content>\n\n         <mat-form-field  *ngIf=\"notifyForm.controls['type'].value == 'SLACK_BOT_API'\">\n            <mat-select placeholder=\"Бот API\"\n                        id=\"botId\" name=\"botId\"\n                        formControlName=\"botId\"\n                        required>\n                <mat-option *ngFor=\"let bot of slackBots\" [value]=\"bot.id\">\n                    {{ bot.label }}\n                </mat-option>\n            </mat-select>\n          <mat-error *ngIf=\"(notifyForm.controls['botId'].dirty || notifyForm.controls['botId'].touched)\n                       && notifyForm.controls['botId'].errors && notifyForm.controls['botId'].errors.required\">\n            Необходимое значение\n          </mat-error>\n        </mat-form-field>\n\n        <div>\n            <input matInput placeholder=\"Шаблон уведомления\"\n                   id=\"messageTemplate\" name=\"messageTemplate\"\n                   formControlName=\"messageTemplate\"\n                   required/>\n          <mat-error *ngIf=\"(notifyForm.controls['messageTemplate'].dirty || notifyForm.controls['messageTemplate'].touched)\n                       && notifyForm.controls['messageTemplate'].errors && notifyForm.controls['messageTemplate'].errors.required\">\n            Необходимое значение\n          </mat-error>\n        </div>\n\n    </mat-card-content>\n    <mat-card-actions fxLayoutAlign=\"end\">\n        <button type=\"submit\" mat-button color=\"warn\" (click)=\"submitRemoveMe()\">\n            Убрать уведомление\n        </button>\n    </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/bot-monitoring/tasks/bot-task-form/bot-monitoring-task-notify-item/bot-monitoring-task-notify-item.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/bot-monitoring/tasks/bot-task-form/bot-monitoring-task-notify-item/bot-monitoring-task-notify-item.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: BotMonitoringTaskNotifyItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotMonitoringTaskNotifyItemComponent", function() { return BotMonitoringTaskNotifyItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_bot_monitoring_tasks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/bot-monitoring-tasks.service */ "./src/app/bot-monitoring/tasks/services/bot-monitoring-tasks.service.ts");
/* harmony import */ var _models_Notify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Notify */ "./src/app/bot-monitoring/tasks/models/Notify.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BotMonitoringTaskNotifyItemComponent = /** @class */ (function () {
    function BotMonitoringTaskNotifyItemComponent(botMonitoringTasksService, fb) {
        var _this = this;
        this.botMonitoringTasksService = botMonitoringTasksService;
        this.fb = fb;
        this.removeMeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.slackBotsSubscription = this.botMonitoringTasksService.slackBotsSubject.subscribe(function (slackBots) {
            _this.slackBots = slackBots;
        });
    }
    BotMonitoringTaskNotifyItemComponent.prototype.ngOnChanges = function (changes) {
        if (changes['notifyForm']) {
            this.notifyForm.addControl('botId', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]));
            this.notifyForm.addControl('messageTemplate', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]));
        }
        if (changes['notifyModel']) {
            if (this.notifyModel != null) {
                this.notifyForm.controls['botId'].setValue(this.notifyModel.botId);
                this.notifyForm.controls['messageTemplate'].setValue(this.notifyModel.messageTemplate);
            }
        }
    };
    BotMonitoringTaskNotifyItemComponent.prototype.getNotifyName = function (type) {
        if (type == 'SLACK_BOT_API') {
            return 'Уведомить через Slack';
        }
    };
    BotMonitoringTaskNotifyItemComponent.prototype.submitRemoveMe = function () {
        this.removeMeEvent.emit(this.index);
    };
    BotMonitoringTaskNotifyItemComponent.prototype.ngOnDestroy = function () {
        this.slackBotsSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BotMonitoringTaskNotifyItemComponent.prototype, "removeMeEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"])
    ], BotMonitoringTaskNotifyItemComponent.prototype, "notifyForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_Notify__WEBPACK_IMPORTED_MODULE_2__["default"])
    ], BotMonitoringTaskNotifyItemComponent.prototype, "notifyModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BotMonitoringTaskNotifyItemComponent.prototype, "index", void 0);
    BotMonitoringTaskNotifyItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bot-monitoring-task-notify-item',
            template: __webpack_require__(/*! ./bot-monitoring-task-notify-item.component.html */ "./src/app/bot-monitoring/tasks/bot-task-form/bot-monitoring-task-notify-item/bot-monitoring-task-notify-item.component.html"),
            viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"] }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
        }),
        __metadata("design:paramtypes", [_services_bot_monitoring_tasks_service__WEBPACK_IMPORTED_MODULE_1__["BotMonitoringTasksService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], BotMonitoringTaskNotifyItemComponent);
    return BotMonitoringTaskNotifyItemComponent;
}());



/***/ }),

/***/ "./src/app/bot-monitoring/tasks/bot-task-form/bot-task-form.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/bot-monitoring/tasks/bot-task-form/bot-task-form.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"botTaskForm\" (ngSubmit)=\"onSubmit()\" fxLayout=\"column\">\n\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"Наименование задачи\"\n           id=\"name\" name=\"name\"\n           formControlName=\"name\"/>\n    <mat-error *ngIf=\" (botTaskForm.controls['name'].dirty || botTaskForm.controls['name'].touched)\n                       && botTaskForm.controls['name'].errors && botTaskForm.controls['name'].errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field [formGroup]=\"botTaskForm.controls['cronFrequency']\">\n    <mat-select placeholder=\"Периодичность выполнения задания\"\n                id=\"cronFrequency\" name=\"cronFrequency\"\n                formControlName=\"type\">\n      <mat-option *ngFor=\"let f of cronFrequencies\" [value]=\"f.frequency\">\n        {{ f.label }}\n      </mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"(botTaskForm.controls['cronFrequency'].dirty || botTaskForm.controls['cronFrequency'].touched)\n                       && botTaskForm.controls['cronFrequency'].errors && botTaskForm.controls['cronFrequency'].errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field [formGroup]=\"botTaskForm.controls['action']\">\n    <mat-select placeholder=\"Тип выполняемой проверки\"\n                id=\"type\" name=\"type\"\n                formControlName=\"type\">\n      <mat-option *ngFor=\"let t of actionTypes\" [value]=\"t.type\">\n        {{ t.name }}\n      </mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"(botTaskForm.controls['action'].controls['type'].dirty || botTaskForm.controls['action'].controls['type'].touched)\n                       && botTaskForm.controls['action'].controls['type'].errors && botTaskForm.controls['action'].controls['type'].errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n  <!--Отслеживание единичного значения из базы данных-->\n  <select-one-numeric-value-task *ngIf=\"botTaskForm.controls['action'].value.type == 'SQL_SELECT_ONE_NUMERIC_VALUE'\"\n                                 [actionForm]=\"botTaskForm.controls['action']\"\n                                 [actionModel]=\"botTaskModel.action\"></select-one-numeric-value-task>\n\n  <fieldset>\n    <legend>Выполняемые проверки</legend>\n    <div>\n      <button mat-raised-button color=\"primary\" type=\"button\" [matMenuTriggerFor]=\"conditionsTypesMenu\">Проверить, что\n        результат\n      </button>\n      <mat-menu #conditionsTypesMenu=\"matMenu\">\n        <button type=\"button\" *ngFor=\"let conditionType of conditionsTypes\"\n                (click)=\"addCondition(conditionType.type)\"\n                mat-menu-item>{{conditionType.name}}\n        </button>\n      </mat-menu>\n    </div>\n    <br/>\n    <bot-monitoring-task-condition-item\n      *ngFor=\"let condition of this.botTaskForm.controls['conditions'].controls; let i = index\"\n      (removeMeEvent)=\"dropCondition(i)\" [condition]=\"condition\">\n    </bot-monitoring-task-condition-item>\n  </fieldset>\n\n  <br/>\n  <fieldset>\n    <legend>Действия после проверки</legend>\n    <div>\n      <button type=\"button\" mat-raised-button color=\"primary\" [matMenuTriggerFor]=\"notifyTypesMenu\">\n        В случае не выполнения условий\n      </button>\n      <mat-menu #notifyTypesMenu=\"matMenu\">\n        <button type=\"button\" *ngFor=\"let notifyType of notifyTypes\" (click)=\"addNotify(notifyType.type)\"\n                mat-menu-item>{{notifyType.name}}\n        </button>\n      </mat-menu>\n    </div>\n    <br/>\n    <bot-monitoring-task-notify-item\n      *ngFor=\"let notify of botTaskForm.controls['notifyList'].controls; let i = index\"\n      [notifyForm]=\"notify\"\n      [notifyModel]=\"botTaskModel.notifyList[i]\"\n      (removeMeEvent)=\"dropNotify(i)\">\n    </bot-monitoring-task-notify-item>\n  </fieldset>\n\n  <div fxLayout fxFlexAlign=\"center\" style=\"margin: 20px;\" fxLayoutGap=\"10px\">\n    <button type=\"submit\" mat-raised-button color=\"primary\"\n            >{{submitButtonText}}</button>\n\n    <ng-content select=\".ng-content-bottom-buttons\"></ng-content>\n\n  </div>\n\n</form>\n\n\n"

/***/ }),

/***/ "./src/app/bot-monitoring/tasks/bot-task-form/bot-task-form.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/bot-monitoring/tasks/bot-task-form/bot-task-form.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvdC1tb25pdG9yaW5nL3Rhc2tzL2JvdC10YXNrLWZvcm0vYm90LXRhc2stZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/bot-monitoring/tasks/bot-task-form/bot-task-form.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/bot-monitoring/tasks/bot-task-form/bot-task-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BotTaskFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotTaskFormComponent", function() { return BotTaskFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_BotMonitoringTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/BotMonitoringTask */ "./src/app/bot-monitoring/tasks/models/BotMonitoringTask.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bot_commands_commands_services_bot_commands_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../bot-commands/commands/services/bot-commands.service */ "./src/app/bot-commands/commands/services/bot-commands.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BotTaskFormComponent = /** @class */ (function () {
    function BotTaskFormComponent(botCommandsService, fb) {
        this.botCommandsService = botCommandsService;
        this.fb = fb;
        this.onSubmitEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.botTaskModel = new _models_BotMonitoringTask__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.actionTypes = [
            { name: 'Выборка единичного числового значения из базы данных', type: 'SQL_SELECT_ONE_NUMERIC_VALUE' },
        ];
        this.cronFrequencies = [
            { label: 'Каждую минуту', frequency: 'EVERY_1_MINUTE' },
            { label: 'Каждые 5 минут', frequency: 'EVERY_5_MINUTES' },
            { label: 'Каждые 15 минут', frequency: 'EVERY_15_MINUTES' },
            { label: 'Каждый час', frequency: 'EVERY_HOUR' }
        ];
        this.notifyTypes = [
            { name: 'Уведомить через Slack', type: 'SLACK_BOT_API' }
        ];
        this.conditionsTypes = [
            { name: 'Больше чем', type: 'NUMERIC_MORE_THAN' },
            { name: 'Меньше чем', type: 'NUMERIC_LESS_THAN' },
            { name: 'Равно', type: 'NUMERIC_EQUAL' },
        ];
        this.initForm();
    }
    BotTaskFormComponent.prototype.onSubmit = function () {
        this.botTaskModel = this.botTaskForm.value;
        this.onSubmitEvent.emit(this.botTaskModel);
    };
    BotTaskFormComponent.prototype.initForm = function () {
        this.botTaskForm = this.fb.group({
            id: [''],
            state: [''],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cronFrequency: this.fb.group({
                type: ['']
            }),
            action: this.fb.group({
                type: ['']
            }),
            conditions: this.fb.array([]),
            notifyList: this.fb.array([])
        });
    };
    BotTaskFormComponent.prototype.addNotify = function (type) {
        this.botTaskForm.controls['notifyList'].push(this.fb.group({
            type: [type, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }));
    };
    BotTaskFormComponent.prototype.dropNotify = function (index) {
        if (this.botTaskForm.controls['notifyList'].length != 0) {
            this.botTaskForm.controls['notifyList'].removeAt(index);
        }
    };
    BotTaskFormComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['initial']) {
            if (this.initial != null) {
                this.botTaskModel = this.initial;
                this.botTaskForm.controls['id'].setValue(this.botTaskModel.id);
                this.botTaskForm.controls['name'].setValue(this.botTaskModel.name);
                this.botTaskForm.controls['state'].setValue(this.botTaskModel.state);
                this.botTaskForm.controls['cronFrequency'].controls['type'].setValue(this.botTaskModel.cronFrequency.type);
                this.botTaskForm.controls['action'].controls['type'].setValue(this.botTaskModel.action.type);
                if (Array.isArray(this.botTaskModel.conditions) && this.botTaskModel.conditions.length > 0) {
                    this.botTaskModel.conditions.forEach(function (c) {
                        _this.botTaskForm.controls['conditions'].push(_this.fb.group({
                            type: [c.type, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                            expectedValue: [c.expectedValue, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                        }));
                    });
                }
                if (Array.isArray(this.botTaskModel.notifyList) && this.botTaskModel.notifyList.length > 0) {
                    this.botTaskModel.notifyList.forEach(function (n) {
                        _this.botTaskForm.controls['notifyList'].push(_this.fb.group({
                            type: [n.type, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                            messageTemplate: [n.messageTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                        }));
                    });
                }
            }
        }
    };
    BotTaskFormComponent.prototype.addCondition = function (type) {
        this.botTaskForm.controls['conditions'].push(this.fb.group({
            type: [type, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            expectedValue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }));
    };
    BotTaskFormComponent.prototype.dropCondition = function (index) {
        if (this.botTaskForm.controls['conditions'].length != 0) {
            this.botTaskForm.controls['conditions'].removeAt(index);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BotTaskFormComponent.prototype, "onSubmitEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_BotMonitoringTask__WEBPACK_IMPORTED_MODULE_1__["default"])
    ], BotTaskFormComponent.prototype, "initial", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BotTaskFormComponent.prototype, "submitButtonText", void 0);
    BotTaskFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bot-task-form',
            template: __webpack_require__(/*! ./bot-task-form.component.html */ "./src/app/bot-monitoring/tasks/bot-task-form/bot-task-form.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./bot-task-form.component.scss */ "./src/app/bot-monitoring/tasks/bot-task-form/bot-task-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_bot_commands_commands_services_bot_commands_service__WEBPACK_IMPORTED_MODULE_3__["BotCommandsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], BotTaskFormComponent);
    return BotTaskFormComponent;
}());



/***/ }),

/***/ "./src/app/bot-monitoring/tasks/bot-task-form/select-one-numeric-value-task/select-one-numeric-value-task.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/bot-monitoring/tasks/bot-task-form/select-one-numeric-value-task/select-one-numeric-value-task.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"actionFormDiv\" fxLayout=\"column\" *ngIf=\"actionForm\" [formGroup]=\"actionForm\">\n  <mat-form-field>\n    <mat-select placeholder=\"Из какой базы данных делаем выборку\"\n                id=\"dataBaseId\" name=\"dataBaseId\"\n                formControlName=\"dataBaseId\">\n      <mat-option *ngFor=\"let bd of dataBases\" [value]=\"bd.id\">\n        {{ bd.name }}\n      </mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"(actionForm.controls['dataBaseId'].dirty || actionForm.controls['dataBaseId'].touched)\n                       && actionForm.controls['dataBaseId'].errors && actionForm.controls['dataBaseId'].errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-codemirror formControlName=\"select\"\n                    id=\"select\" name=\"select\"\n                    required\n                    [options]=\"{\n          theme: 'idea',\n          mode: 'text/x-sql'\n        }\" placeholder=\"SQL select\"></mat-codemirror>\n    <mat-error *ngIf=\"(actionForm.controls['select'].dirty || actionForm.controls['select'].touched)\n                     && actionForm.controls['select'].errors && actionForm.controls['select'].errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n</div>\n"

/***/ }),

/***/ "./src/app/bot-monitoring/tasks/bot-task-form/select-one-numeric-value-task/select-one-numeric-value-task.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/bot-monitoring/tasks/bot-task-form/select-one-numeric-value-task/select-one-numeric-value-task.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: SelectOneNumericValueTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectOneNumericValueTaskComponent", function() { return SelectOneNumericValueTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_bot_monitoring_tasks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/bot-monitoring-tasks.service */ "./src/app/bot-monitoring/tasks/services/bot-monitoring-tasks.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bot_commands_commands_models_Action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../bot-commands/commands/models/Action */ "./src/app/bot-commands/commands/models/Action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SelectOneNumericValueTaskComponent = /** @class */ (function () {
    function SelectOneNumericValueTaskComponent(botTasksService, fb) {
        var _this = this;
        this.botTasksService = botTasksService;
        this.fb = fb;
        this.dataBasesSubscription = this.botTasksService.dataBasesSubject.subscribe(function (dataBases) {
            _this.dataBases = dataBases;
        });
    }
    SelectOneNumericValueTaskComponent.prototype.ngOnChanges = function (changes) {
        if (changes['actionForm']) {
            this.actionForm.addControl('dataBaseId', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]));
            this.actionForm.addControl('select', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]));
        }
        if (changes['actionModel']) {
            if (this.actionModel != null) {
                this.actionForm.controls['dataBaseId'].setValue(this.actionModel.dataBaseId);
                this.actionForm.controls['select'].setValue(this.actionModel.select);
            }
        }
    };
    SelectOneNumericValueTaskComponent.prototype.ngOnDestroy = function () {
        this.dataBasesSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], SelectOneNumericValueTaskComponent.prototype, "actionForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _bot_commands_commands_models_Action__WEBPACK_IMPORTED_MODULE_3__["default"])
    ], SelectOneNumericValueTaskComponent.prototype, "actionModel", void 0);
    SelectOneNumericValueTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'select-one-numeric-value-task',
            template: __webpack_require__(/*! ./select-one-numeric-value-task.component.html */ "./src/app/bot-monitoring/tasks/bot-task-form/select-one-numeric-value-task/select-one-numeric-value-task.component.html"),
            viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"] }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
        }),
        __metadata("design:paramtypes", [_services_bot_monitoring_tasks_service__WEBPACK_IMPORTED_MODULE_1__["BotMonitoringTasksService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], SelectOneNumericValueTaskComponent);
    return SelectOneNumericValueTaskComponent;
}());



/***/ }),

/***/ "./src/app/bot-monitoring/tasks/bot-tasks-list/bot-task-item/bot-task-item.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/bot-monitoring/tasks/bot-tasks-list/bot-task-item/bot-task-item.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list-item style=\"background-color: #fff;\">\n  <span matLine><span>{{task.name}}</span></span>\n  <button mat-icon-button (click)=\"edit()\">\n    <mat-icon aria-label=\"Редактировать\">edit</mat-icon>\n  </button>\n</mat-list-item>\n<mat-divider></mat-divider>"

/***/ }),

/***/ "./src/app/bot-monitoring/tasks/bot-tasks-list/bot-task-item/bot-task-item.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/bot-monitoring/tasks/bot-tasks-list/bot-task-item/bot-task-item.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvdC1tb25pdG9yaW5nL3Rhc2tzL2JvdC10YXNrcy1saXN0L2JvdC10YXNrLWl0ZW0vYm90LXRhc2staXRlbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/bot-monitoring/tasks/bot-tasks-list/bot-task-item/bot-task-item.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/bot-monitoring/tasks/bot-tasks-list/bot-task-item/bot-task-item.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: BotTaskItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotTaskItemComponent", function() { return BotTaskItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bus_hannel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../bus/Сhannel */ "./src/app/bot-monitoring/bus/Сhannel.ts");
/* harmony import */ var _models_BotMonitoringTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/BotMonitoringTask */ "./src/app/bot-monitoring/tasks/models/BotMonitoringTask.ts");
/* harmony import */ var _core_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/api */ "./src/app/core/api/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BotTaskItemComponent = /** @class */ (function () {
    function BotTaskItemComponent(messagingBusService) {
        this.messagingBusService = messagingBusService;
    }
    BotTaskItemComponent.prototype.edit = function () {
        this.messagingBusService.sendMessage({ channel: _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].OPEN_EDIT_BOT_TASKS_DIALOG, data: { id: this.task.id } });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_BotMonitoringTask__WEBPACK_IMPORTED_MODULE_2__["default"])
    ], BotTaskItemComponent.prototype, "task", void 0);
    BotTaskItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bot-task-item',
            template: __webpack_require__(/*! ./bot-task-item.component.html */ "./src/app/bot-monitoring/tasks/bot-tasks-list/bot-task-item/bot-task-item.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./bot-task-item.component.scss */ "./src/app/bot-monitoring/tasks/bot-tasks-list/bot-task-item/bot-task-item.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_api__WEBPACK_IMPORTED_MODULE_3__["MessagingBusService"]])
    ], BotTaskItemComponent);
    return BotTaskItemComponent;
}());



/***/ }),

/***/ "./src/app/bot-monitoring/tasks/bot-tasks-list/bot-tasks-list.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/bot-monitoring/tasks/bot-tasks-list/bot-tasks-list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <span>Задачи мониторинга</span>\n      <span fxFlex=\"100%\"></span>\n      <span fxFlex=\"100%\" fxLayoutAlign=\"end\">\n        <button mat-button (click)=\"add()\">\n          <mat-icon aria-label=\"Добавить новую задачу\">playlist_add</mat-icon>\n          Добавить новую задачу\n        </button>\n      </span>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <mat-list>\n    <bot-task-item *ngFor=\"let task of tasksList\" [task]=\"task\"></bot-task-item>\n  </mat-list>\n\n</div>\n"

/***/ }),

/***/ "./src/app/bot-monitoring/tasks/bot-tasks-list/bot-tasks-list.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/bot-monitoring/tasks/bot-tasks-list/bot-tasks-list.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvdC1tb25pdG9yaW5nL3Rhc2tzL2JvdC10YXNrcy1saXN0L2JvdC10YXNrcy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/bot-monitoring/tasks/bot-tasks-list/bot-tasks-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/bot-monitoring/tasks/bot-tasks-list/bot-tasks-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BotTasksListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotTasksListComponent", function() { return BotTasksListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bus_hannel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bus/Сhannel */ "./src/app/bot-monitoring/bus/Сhannel.ts");
/* harmony import */ var _services_bot_monitoring_tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bot-monitoring-tasks.service */ "./src/app/bot-monitoring/tasks/services/bot-monitoring-tasks.service.ts");
/* harmony import */ var _core_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/api */ "./src/app/core/api/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BotTasksListComponent = /** @class */ (function () {
    function BotTasksListComponent(messagingBusService, botTasksService) {
        var _this = this;
        this.messagingBusService = messagingBusService;
        this.botTasksService = botTasksService;
        this.getBotsList();
        this.commandsListSubscription = this.messagingBusService.getMessage().subscribe(function (message) {
            if (message.channel == _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].BOT_TASKS_WERE_UPDATED) {
                _this.getBotsList();
            }
        });
    }
    BotTasksListComponent.prototype.ngOnDestroy = function () {
        this.commandsListSubscription.unsubscribe();
    };
    BotTasksListComponent.prototype.add = function () {
        this.messagingBusService.sendMessage({ channel: _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].OPEN_ADD_BOT_TASK_DIALOG });
    };
    BotTasksListComponent.prototype.getBotsList = function () {
        var _this = this;
        this.botTasksService.getAll().subscribe(function (commands) {
            _this.tasksList = commands;
        });
    };
    BotTasksListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bot-tasks-list',
            template: __webpack_require__(/*! ./bot-tasks-list.component.html */ "./src/app/bot-monitoring/tasks/bot-tasks-list/bot-tasks-list.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./bot-tasks-list.component.scss */ "./src/app/bot-monitoring/tasks/bot-tasks-list/bot-tasks-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_api__WEBPACK_IMPORTED_MODULE_3__["MessagingBusService"],
            _services_bot_monitoring_tasks_service__WEBPACK_IMPORTED_MODULE_2__["BotMonitoringTasksService"]])
    ], BotTasksListComponent);
    return BotTasksListComponent;
}());



/***/ }),

/***/ "./src/app/bot-monitoring/tasks/edit-bot-task/edit-bot-task.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/bot-monitoring/tasks/edit-bot-task/edit-bot-task.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout fxLayoutAlign=\"start center\">\n  <h2 fxFlex=\"100%\" mat-dialog-title>Редактировать: {{task.name}} </h2>\n  <button mat-icon-button  matTooltip=\"Закрыть окно\" (click)=\"close()\">\n    <mat-icon aria-label=\"Закрыть\"\n              matTooltipPosition=\"above\">close</mat-icon>\n  </button>\n</div>\n<mat-dialog-content *ngIf=\"task\">\n\n  <mat-slide-toggle\n          color=\"primary\"\n          (change)=\"changeCommandState($event)\"\n          [checked]=\"task.state == 'ENABLED'\">\n<!--   <span *ngIf=\"task.state == 'ENABLED'\">Включен</span>\n   <span *ngIf=\"task.state != 'ENABLED'\">Выключен</span>-->\n  </mat-slide-toggle>\n\n  <bot-task-form (onSubmitEvent)=\"edit($event)\"\n                      [initial]=\"task\"\n                      submitButtonText=\"Сохранить изменения\">\n    <div class=\"ng-content-bottom-buttons\">\n      <button type=\"button\" mat-button color=\"warn\" (click)=\"delete()\">Удалить задачу</button>\n    </div>\n  </bot-task-form>\n</mat-dialog-content>\n\n"

/***/ }),

/***/ "./src/app/bot-monitoring/tasks/edit-bot-task/edit-bot-task.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/bot-monitoring/tasks/edit-bot-task/edit-bot-task.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvdC1tb25pdG9yaW5nL3Rhc2tzL2VkaXQtYm90LXRhc2svZWRpdC1ib3QtdGFzay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/bot-monitoring/tasks/edit-bot-task/edit-bot-task.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/bot-monitoring/tasks/edit-bot-task/edit-bot-task.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditBotTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBotTaskComponent", function() { return EditBotTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_bot_monitoring_tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bot-monitoring-tasks.service */ "./src/app/bot-monitoring/tasks/services/bot-monitoring-tasks.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EditBotTaskComponent = /** @class */ (function () {
    function EditBotTaskComponent(dialogRef, data, botTasksService, snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.botTasksService = botTasksService;
        this.snackBar = snackBar;
        this.task = data.task;
    }
    EditBotTaskComponent.prototype.edit = function (task) {
        var _this = this;
        this.botTasksService.update(task)
            .subscribe(function (task) {
            _this.snackBar.open("Изменения сохранены", '', {
                duration: 3000,
                panelClass: 'colorGreen',
                horizontalPosition: 'right'
            });
        });
    };
    EditBotTaskComponent.prototype.changeCommandState = function (changeEvent) {
        if (changeEvent.checked) {
            this.task.state = 'ENABLED';
        }
        else {
            this.task.state = 'DISABLED';
        }
    };
    EditBotTaskComponent.prototype.delete = function () {
        var _this = this;
        console.log("delete");
        this.botTasksService.delete(this.task.id)
            .subscribe(function (task) {
            _this.dialogRef.close();
            _this.snackBar.open("Удалено", '', {
                duration: 3000,
                panelClass: 'colorGreen',
                horizontalPosition: 'right'
            });
        });
    };
    EditBotTaskComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    EditBotTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-bot-task',
            template: __webpack_require__(/*! ./edit-bot-task.component.html */ "./src/app/bot-monitoring/tasks/edit-bot-task/edit-bot-task.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./edit-bot-task.component.scss */ "./src/app/bot-monitoring/tasks/edit-bot-task/edit-bot-task.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_bot_monitoring_tasks_service__WEBPACK_IMPORTED_MODULE_2__["BotMonitoringTasksService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], EditBotTaskComponent);
    return EditBotTaskComponent;
}());



/***/ }),

/***/ "./src/app/bot-monitoring/tasks/models/BotMonitoringTask.ts":
/*!******************************************************************!*\
  !*** ./src/app/bot-monitoring/tasks/models/BotMonitoringTask.ts ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var BotMonitoringTask = /** @class */ (function () {
    function BotMonitoringTask() {
        this.conditions = [];
        this.notifyList = [];
    }
    return BotMonitoringTask;
}());
/* harmony default export */ __webpack_exports__["default"] = (BotMonitoringTask);


/***/ }),

/***/ "./src/app/bot-monitoring/tasks/models/Notify.ts":
/*!*******************************************************!*\
  !*** ./src/app/bot-monitoring/tasks/models/Notify.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Notify = /** @class */ (function () {
    function Notify(type) {
        this.type = type;
    }
    return Notify;
}());
/* harmony default export */ __webpack_exports__["default"] = (Notify);


/***/ }),

/***/ "./src/app/bot-monitoring/tasks/services/bot-monitoring-tasks.bus.ts":
/*!***************************************************************************!*\
  !*** ./src/app/bot-monitoring/tasks/services/bot-monitoring-tasks.bus.ts ***!
  \***************************************************************************/
/*! exports provided: BotMonitoringTasksBus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotMonitoringTasksBus", function() { return BotMonitoringTasksBus; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _bus_hannel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bus/Сhannel */ "./src/app/bot-monitoring/bus/Сhannel.ts");
/* harmony import */ var _bot_monitoring_tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bot-monitoring-tasks.service */ "./src/app/bot-monitoring/tasks/services/bot-monitoring-tasks.service.ts");
/* harmony import */ var _add_bot_task_add_bot_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-bot-task/add-bot-task.component */ "./src/app/bot-monitoring/tasks/add-bot-task/add-bot-task.component.ts");
/* harmony import */ var _edit_bot_task_edit_bot_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-bot-task/edit-bot-task.component */ "./src/app/bot-monitoring/tasks/edit-bot-task/edit-bot-task.component.ts");
/* harmony import */ var _core_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/api */ "./src/app/core/api/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var BotMonitoringTasksBus = /** @class */ (function () {
    function BotMonitoringTasksBus(dialog, messagingBusService, botTasksService) {
        var _this = this;
        this.dialog = dialog;
        this.messagingBusService = messagingBusService;
        this.botTasksService = botTasksService;
        this.subscription = this.messagingBusService.getMessage().subscribe(function (message) {
            if (message.channel == _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].OPEN_ADD_BOT_TASK_DIALOG) {
                _this.openAddDialog();
            }
            else if (message.channel == _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].OPEN_EDIT_BOT_TASKS_DIALOG) {
                _this.openEditDialog(message.data.id);
            }
        });
    }
    BotMonitoringTasksBus.prototype.openAddDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_add_bot_task_add_bot_task_component__WEBPACK_IMPORTED_MODULE_3__["AddBotTaskComponent"], {
            width: '1000px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.messagingBusService.sendMessage({ channel: _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].BOT_TASKS_WERE_UPDATED });
        });
    };
    BotMonitoringTasksBus.prototype.openEditDialog = function (id) {
        var _this = this;
        this.botTasksService.get(id)
            .subscribe(function (task) {
            var dialogRef = _this.dialog.open(_edit_bot_task_edit_bot_task_component__WEBPACK_IMPORTED_MODULE_4__["EditBotTaskComponent"], {
                width: '1000px',
                data: {
                    task: task
                }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                _this.messagingBusService.sendMessage({ channel: _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].BOT_TASKS_WERE_UPDATED });
            });
        });
    };
    BotMonitoringTasksBus = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"],
            _core_api__WEBPACK_IMPORTED_MODULE_5__["MessagingBusService"],
            _bot_monitoring_tasks_service__WEBPACK_IMPORTED_MODULE_2__["BotMonitoringTasksService"]])
    ], BotMonitoringTasksBus);
    return BotMonitoringTasksBus;
}());



/***/ }),

/***/ "./src/app/bot-monitoring/tasks/services/bot-monitoring-tasks.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/bot-monitoring/tasks/services/bot-monitoring-tasks.service.ts ***!
  \*******************************************************************************/
/*! exports provided: BotMonitoringTasksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotMonitoringTasksService", function() { return BotMonitoringTasksService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _bus_hannel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bus/Сhannel */ "./src/app/bot-monitoring/bus/Сhannel.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config */ "./src/app/config.ts");
/* harmony import */ var _core_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/api */ "./src/app/core/api/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var BotMonitoringTasksService = /** @class */ (function () {
    function BotMonitoringTasksService(http, messagingBusService, config) {
        var _this = this;
        this.http = http;
        this.messagingBusService = messagingBusService;
        this.config = config;
        this.headers = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        this.botsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Array());
        this.slackBotsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Array());
        this.dataBasesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Array());
        this.url = config.api + '/bot-monitoring/tasks';
        this.dataBasesUrl = config.api + '/db-connections';
        this.botsUrl = config.api + '/bots';
        this.requestDataBases();
        this.requestBots();
        this.subscription = this.messagingBusService.getMessage().subscribe(function (message) {
            if (message.channel == _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].BOTS_WERE_UPDATED) {
                _this.requestBots();
            }
            else if (message.channel == _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].DB_CONNECTIONS_WERE_UPDATED) {
                _this.requestDataBases();
            }
        });
    }
    BotMonitoringTasksService.prototype.requestDataBases = function () {
        var _this = this;
        this.http.get(this.dataBasesUrl, this.headers)
            .subscribe(function (dbs) {
            _this.dataBasesSubject.next(dbs);
        });
    };
    BotMonitoringTasksService.prototype.requestBots = function () {
        var _this = this;
        this.http.get(this.botsUrl, this.headers)
            .subscribe(function (bots) {
            _this.botsSubject.next(bots);
            _this.slackBotsSubject.next(bots.filter(function (b) { return b.type == 'SLACK_BOT'; }));
        });
    };
    BotMonitoringTasksService.prototype.add = function (command) {
        return this.http
            .post(this.url, command, this.headers);
    };
    BotMonitoringTasksService.prototype.getAll = function () {
        return this.http.get(this.url, this.headers);
    };
    BotMonitoringTasksService.prototype.get = function (commandId) {
        return this.http
            .get(this.url + ("/" + commandId));
    };
    BotMonitoringTasksService.prototype.delete = function (commandId) {
        return this.http
            .delete(this.url + ("/" + commandId));
    };
    BotMonitoringTasksService.prototype.update = function (command) {
        return this.http
            .put(this.url + ("/" + command.id), command, this.headers);
    };
    BotMonitoringTasksService = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _core_api__WEBPACK_IMPORTED_MODULE_4__["MessagingBusService"],
            _config__WEBPACK_IMPORTED_MODULE_3__["Config"]])
    ], BotMonitoringTasksService);
    return BotMonitoringTasksService;
}());



/***/ }),

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Config = /** @class */ (function () {
    function Config() {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
            this.root = '';
            this.api = '/api';
        }
        else {
            this.root = 'http://localhost:8080';
            this.api = 'http://localhost:8080/api';
        }
    }
    Config = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], Config);
    return Config;
}());



/***/ }),

/***/ "./src/app/core/api/Message.ts":
/*!*************************************!*\
  !*** ./src/app/core/api/Message.ts ***!
  \*************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message() {
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/core/api/index.ts":
/*!***********************************!*\
  !*** ./src/app/core/api/index.ts ***!
  \***********************************/
/*! exports provided: Message, UiCoreModule, MessagingBusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiCoreModule", function() { return UiCoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _messaging_bus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messaging-bus.service */ "./src/app/core/api/messaging-bus.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessagingBusService", function() { return _messaging_bus_service__WEBPACK_IMPORTED_MODULE_2__["MessagingBusService"]; });

/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Message */ "./src/app/core/api/Message.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return _Message__WEBPACK_IMPORTED_MODULE_3__["Message"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UiCoreModule = /** @class */ (function () {
    function UiCoreModule() {
    }
    UiCoreModule_1 = UiCoreModule;
    UiCoreModule.forRoot = function () {
        return {
            ngModule: UiCoreModule_1,
            providers: [_messaging_bus_service__WEBPACK_IMPORTED_MODULE_2__["MessagingBusService"]]
        };
    };
    var UiCoreModule_1;
    UiCoreModule = UiCoreModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _messaging_bus_service__WEBPACK_IMPORTED_MODULE_2__["MessagingBusService"]
            ],
            exports: [
                _messaging_bus_service__WEBPACK_IMPORTED_MODULE_2__["MessagingBusService"]
            ]
        })
    ], UiCoreModule);
    return UiCoreModule;
}());



/***/ }),

/***/ "./src/app/core/api/messaging-bus.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/api/messaging-bus.service.ts ***!
  \***************************************************/
/*! exports provided: MessagingBusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingBusService", function() { return MessagingBusService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var MessagingBusService = /** @class */ (function () {
    function MessagingBusService() {
        this.message$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    MessagingBusService.prototype.sendMessage = function (message) {
        this.message$.next(message);
    };
    MessagingBusService.prototype.getMessage = function () {
        return this.message$.asObservable();
    };
    return MessagingBusService;
}());



/***/ }),

/***/ "./src/app/core/bots/add-bot/add-bot.component.html":
/*!**********************************************************!*\
  !*** ./src/app/core/bots/add-bot/add-bot.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout fxLayoutAlign=\"start center\">\n  <h2 fxFlex=\"100%\" mat-dialog-title>Новый API бот</h2>\n  <button mat-icon-button matTooltip=\"Закрыть окно\" (click)=\"close()\">\n    <mat-icon aria-label=\"Закрыть\"\n              matTooltipPosition=\"above\">close</mat-icon>\n  </button>\n</div>\n<mat-dialog-content>\n  <bot-form (onSubmitEvent)=\"addBot($event)\"\n                      submitButtonText=\"Добавить\">\n  </bot-form>\n</mat-dialog-content>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/core/bots/add-bot/add-bot.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/core/bots/add-bot/add-bot.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYm90cy9hZGQtYm90L2FkZC1ib3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/core/bots/add-bot/add-bot.component.ts":
/*!********************************************************!*\
  !*** ./src/app/core/bots/add-bot/add-bot.component.ts ***!
  \********************************************************/
/*! exports provided: AddBotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBotComponent", function() { return AddBotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_bots_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bots.service */ "./src/app/core/bots/services/bots.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddBotComponent = /** @class */ (function () {
    function AddBotComponent(dialogRef, botsService, snackBar) {
        this.dialogRef = dialogRef;
        this.botsService = botsService;
        this.snackBar = snackBar;
    }
    AddBotComponent.prototype.addBot = function (bot) {
        var _this = this;
        this.botsService.add(bot)
            .subscribe(function (bot) {
            _this.dialogRef.close();
            _this.snackBar.open("API бот добавлен", '', {
                duration: 3000,
                panelClass: 'colorGreen',
                horizontalPosition: 'right'
            });
        });
    };
    AddBotComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    AddBotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-bot-connection',
            template: __webpack_require__(/*! ./add-bot.component.html */ "./src/app/core/bots/add-bot/add-bot.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./add-bot.component.scss */ "./src/app/core/bots/add-bot/add-bot.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _services_bots_service__WEBPACK_IMPORTED_MODULE_2__["BotsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], AddBotComponent);
    return AddBotComponent;
}());



/***/ }),

/***/ "./src/app/core/bots/bot-access-list/bot-access-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/core/bots/bot-access-list/bot-access-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout fxLayoutAlign=\"start center\">\n  <h2 fxFlex=\"100%\" mat-dialog-title>Список пользователей бота</h2>\n  <button mat-icon-button (click)=\"close()\" matTooltip=\"Закрыть окно\">\n    <mat-icon aria-label=\"Закрыть\"\n              matTooltipPosition=\"above\">close\n    </mat-icon>\n  </button>\n</div>\n<mat-dialog-content style=\"padding: 5px; background-color: #f1f1f1;\"\n                    *ngIf=\"joinRequests\">\n\n    <div style=\"margin: 5px;\" *ngFor=\"let join of joinRequests\" >\n      <mat-card class=\"card\">\n        <mat-card-header>\n          <mat-icon style=\"font-size: 40px;\" mat-card-avatar>account_circle</mat-icon>\n          <mat-card-title>{{join.firstName}} {{join.lastName}}</mat-card-title>\n          <mat-card-subtitle>\n             accountId: {{join.accountId}}\n             <span style=\"color: blueviolet;\" *ngIf=\"join.state == 'IS_AWAITING_APPROVAL'\">, ОЖИДАЕТ ПОДТВЕРЖДЕНИЯ</span>\n             <span style=\"color: green;\" *ngIf=\"join.state == 'APPROVED'\">, ОДОБРЕН</span>\n          </mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-actions>\n          <span fxFlex=\"100%\"></span>\n          <button mat-raised-button color=\"primary\"\n                  *ngIf=\"join.state == 'IS_AWAITING_APPROVAL'\" fxFlex=\"25%\" (click)=\"accept(join.id)\">Принять</button>\n          <button mat-raised-button color=\"warn\"\n                  *ngIf=\"join.state == 'IS_AWAITING_APPROVAL'\" fxFlex=\"25%\" (click)=\"denied(join.id)\">Отказать</button>\n          <button mat-raised-button color=\"warn\"\n                  *ngIf=\"join.state == 'APPROVED'\" fxFlex=\"25%\" (click)=\"denied(join.id)\">Отменить</button>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n\n</mat-dialog-content>\n"

/***/ }),

/***/ "./src/app/core/bots/bot-access-list/bot-access-list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/core/bots/bot-access-list/bot-access-list.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYm90cy9ib3QtYWNjZXNzLWxpc3QvYm90LWFjY2Vzcy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/bots/bot-access-list/bot-access-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/core/bots/bot-access-list/bot-access-list.component.ts ***!
  \************************************************************************/
/*! exports provided: BotAccessListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotAccessListComponent", function() { return BotAccessListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_bots_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bots.service */ "./src/app/core/bots/services/bots.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var BotAccessListComponent = /** @class */ (function () {
    function BotAccessListComponent(dialogRef, data, botsService, snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.botsService = botsService;
        this.snackBar = snackBar;
        this.botId = data.botId;
        this.refreshBot();
    }
    BotAccessListComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    BotAccessListComponent.prototype.accept = function (joinId) {
        var _this = this;
        this.botsService.accept(this.botId, joinId)
            .subscribe(function (res) {
            _this.snackBar.open("Пользователь одобрен", '', {
                duration: 3000,
                panelClass: 'colorGreen',
                horizontalPosition: 'right'
            });
            _this.refreshBot();
        });
    };
    BotAccessListComponent.prototype.denied = function (joinId) {
        var _this = this;
        this.botsService.denied(this.botId, joinId)
            .subscribe(function (res) {
            _this.snackBar.open("Пользователь отклонен", '', {
                duration: 3000,
                panelClass: 'colorGreen',
                horizontalPosition: 'right'
            });
            _this.refreshBot();
        });
    };
    BotAccessListComponent.prototype.refreshBot = function () {
        var _this = this;
        this.botsService.get(this.botId)
            .subscribe(function (bot) {
            _this.joinRequests = bot.joinRequests;
        });
    };
    BotAccessListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bot-access-list',
            template: __webpack_require__(/*! ./bot-access-list.component.html */ "./src/app/core/bots/bot-access-list/bot-access-list.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./bot-access-list.component.scss */ "./src/app/core/bots/bot-access-list/bot-access-list.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_bots_service__WEBPACK_IMPORTED_MODULE_2__["BotsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], BotAccessListComponent);
    return BotAccessListComponent;
}());



/***/ }),

/***/ "./src/app/core/bots/bot-form/bot-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/core/bots/bot-form/bot-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" #botForm=\"ngForm\" fxLayout=\"column\">\n\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"Наименование бота\"\n           id=\"label\" name=\"label\"\n           [(ngModel)]=\"bot.label\"\n           required\n           #label=\"ngModel\"/>\n    <mat-error *ngIf=\"label.errors && (label.dirty || label.touched) && label.errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Тип бот API\"\n                id=\"type\" name=\"type\"\n                [(ngModel)]=\"bot.type\"\n                required #type=\"ngModel\">\n      <mat-option *ngFor=\"let t of botTypes\" [value]=\"t.type\">\n        {{ t.name }}\n      </mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"type.errors && (type.dirty || type.touched) && type.errors.required\">Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n  <telegram-bot-form *ngIf=\"bot.type == 'TELEGRAM_BOT'\"\n                             [bot]=\"bot\"></telegram-bot-form>\n\n  <slack-bot-form *ngIf=\"bot.type == 'SLACK_BOT'\"\n                               [bot]=\"bot\"></slack-bot-form>\n\n  <div fxLayout fxFlexAlign=\"center\" style=\"margin: 20px;\" fxLayoutGap=\"10px\">\n    <button type=\"submit\" mat-raised-button color=\"primary\"\n              [disabled]=\"!botForm.form.valid\">{{submitButtonText}}</button>\n    <ng-content select=\".ng-content-bottom-buttons\"></ng-content>\n\n  </div>\n\n</form>\n\n\n"

/***/ }),

/***/ "./src/app/core/bots/bot-form/bot-form.component.scss":
/*!************************************************************!*\
  !*** ./src/app/core/bots/bot-form/bot-form.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYm90cy9ib3QtZm9ybS9ib3QtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/bots/bot-form/bot-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/bots/bot-form/bot-form.component.ts ***!
  \**********************************************************/
/*! exports provided: BotFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotFormComponent", function() { return BotFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Bot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Bot */ "./src/app/core/bots/models/Bot.ts");
/* harmony import */ var _services_bots_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bots.service */ "./src/app/core/bots/services/bots.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BotFormComponent = /** @class */ (function () {
    function BotFormComponent(botsService, snackBar) {
        var _this = this;
        this.botsService = botsService;
        this.snackBar = snackBar;
        this.onSubmitEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.bot = new _models_Bot__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.botsService.getBotTypes().subscribe(function (botTypes) {
            _this.botTypes = botTypes;
        });
    }
    BotFormComponent.prototype.onSubmit = function () {
        this.onSubmitEvent.emit(this.bot);
    };
    BotFormComponent.prototype.ngOnChanges = function (changes) {
        if (changes['initial']) {
            if (this.initial != null && this.initial != undefined) {
                this.bot = this.initial;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BotFormComponent.prototype, "onSubmitEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_Bot__WEBPACK_IMPORTED_MODULE_1__["default"])
    ], BotFormComponent.prototype, "initial", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BotFormComponent.prototype, "submitButtonText", void 0);
    BotFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bot-form',
            template: __webpack_require__(/*! ./bot-form.component.html */ "./src/app/core/bots/bot-form/bot-form.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./bot-form.component.scss */ "./src/app/core/bots/bot-form/bot-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_bots_service__WEBPACK_IMPORTED_MODULE_2__["BotsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], BotFormComponent);
    return BotFormComponent;
}());



/***/ }),

/***/ "./src/app/core/bots/bot-form/slack-form/slack-bot-form.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/core/bots/bot-form/slack-form/slack-bot-form.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"Токен из xoxb**\"\n           id=\"token\" name=\"token\"\n           [(ngModel)]=\"bot.token\"\n           required\n           #token=\"ngModel\"/>\n    <mat-error *ngIf=\"token.errors && (token.dirty || token.touched) && token.errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"Прослушиваемый канал\"\n           id=\"channel\" name=\"channel\"\n           [(ngModel)]=\"bot.channel\"\n           required\n           #channel=\"ngModel\"/>\n    <mat-error *ngIf=\"channel.errors && (channel.dirty || channel.touched) && channel.errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n</div>\n"

/***/ }),

/***/ "./src/app/core/bots/bot-form/slack-form/slack-bot-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/core/bots/bot-form/slack-form/slack-bot-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: SlackBotFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlackBotFormComponent", function() { return SlackBotFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_SlackBot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/SlackBot */ "./src/app/core/bots/models/SlackBot.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SlackBotFormComponent = /** @class */ (function () {
    function SlackBotFormComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_SlackBot__WEBPACK_IMPORTED_MODULE_1__["default"])
    ], SlackBotFormComponent.prototype, "bot", void 0);
    SlackBotFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'slack-bot-form',
            template: __webpack_require__(/*! ./slack-bot-form.component.html */ "./src/app/core/bots/bot-form/slack-form/slack-bot-form.component.html"),
            viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"] }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
        })
    ], SlackBotFormComponent);
    return SlackBotFormComponent;
}());



/***/ }),

/***/ "./src/app/core/bots/bot-form/telegram-form/telegram-bot-form.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/core/bots/bot-form/telegram-form/telegram-bot-form.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"Название в @BotFather\"\n           id=\"name\" name=\"name\"\n           [(ngModel)]=\"bot.name\"\n           required\n           #name=\"ngModel\"/>\n    <mat-error *ngIf=\"name.errors && (name.dirty || name.touched) && name.errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"Токен из @BotFather\"\n           id=\"token\" name=\"token\"\n           [(ngModel)]=\"bot.token\"\n           required\n           #token=\"ngModel\"/>\n    <mat-error *ngIf=\"token.errors && (token.dirty || token.touched) && token.errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n</div>\n"

/***/ }),

/***/ "./src/app/core/bots/bot-form/telegram-form/telegram-bot-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/core/bots/bot-form/telegram-form/telegram-bot-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TelegramBotFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelegramBotFormComponent", function() { return TelegramBotFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_TelegramBot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/TelegramBot */ "./src/app/core/bots/models/TelegramBot.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TelegramBotFormComponent = /** @class */ (function () {
    function TelegramBotFormComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_TelegramBot__WEBPACK_IMPORTED_MODULE_1__["default"])
    ], TelegramBotFormComponent.prototype, "bot", void 0);
    TelegramBotFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'telegram-bot-form',
            template: __webpack_require__(/*! ./telegram-bot-form.component.html */ "./src/app/core/bots/bot-form/telegram-form/telegram-bot-form.component.html"),
            viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"] }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
        })
    ], TelegramBotFormComponent);
    return TelegramBotFormComponent;
}());



/***/ }),

/***/ "./src/app/core/bots/bots-list/bot-item/bot-item.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/core/bots/bots-list/bot-item/bot-item.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list-item style=\"background-color: #fff;\">\n  <span matLine> <b>{{bot.label}}</b></span>\n  <button mat-icon-button (click)=\"accessList()\">\n    <mat-icon aria-label=\"Список пользователе\">account_box</mat-icon>\n    <span class=\"accessLabel\"\n          *ngIf=\"awaitingRequests > '0'\">{{awaitingRequests}}</span>\n  </button>\n  <button mat-icon-button (click)=\"edit()\">\n    <mat-icon aria-label=\"Редактировать\">edit</mat-icon>\n  </button>\n</mat-list-item>\n<mat-divider></mat-divider>\n"

/***/ }),

/***/ "./src/app/core/bots/bots-list/bot-item/bot-item.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/core/bots/bots-list/bot-item/bot-item.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padding0 {\n  padding: 0 !important; }\n\nmat-card-title {\n  margin: 0 0 0 16px; }\n\n.accessLabel {\n  position: relative;\n  right: 7px;\n  color: red;\n  font-size: 21px;\n  top: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVrc2FuZHJzZXJkdWtvdi9wcm9qZWN0cy9zdXBwb3J0LXRlcm1pbmFsLWRldi9zdXBwb3J0LXRlcm1pbmFsL3VpL3NyYy9hcHAvY29yZS9ib3RzL2JvdHMtbGlzdC9ib3QtaXRlbS9ib3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFvQixFQUFBOztBQUd0QjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtFQUNWLGVBQWU7RUFDZixRQUFRLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2JvdHMvYm90cy1saXN0L2JvdC1pdGVtL2JvdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZGRpbmcwe1xuICBwYWRkaW5nOjAgIWltcG9ydGFudDtcbn1cblxubWF0LWNhcmQtdGl0bGV7XG4gIG1hcmdpbjogMCAwIDAgMTZweDtcbn1cblxuLmFjY2Vzc0xhYmVse1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiA3cHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgdG9wOiA2cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/core/bots/bots-list/bot-item/bot-item.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/bots/bots-list/bot-item/bot-item.component.ts ***!
  \********************************************************************/
/*! exports provided: BotItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotItemComponent", function() { return BotItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Bot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Bot */ "./src/app/core/bots/models/Bot.ts");
/* harmony import */ var _bus_hannel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../bus/Сhannel */ "./src/app/core/bus/Сhannel.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api */ "./src/app/core/api/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BotItemComponent = /** @class */ (function () {
    function BotItemComponent(messagingBusService) {
        this.messagingBusService = messagingBusService;
        this.awaitingRequests = 0;
    }
    BotItemComponent.prototype.edit = function () {
        this.messagingBusService.sendMessage({ channel: _bus_hannel__WEBPACK_IMPORTED_MODULE_2__["default"].OPEN_EDIT_BOT_DIALOG, data: { botId: this.bot.id } });
    };
    BotItemComponent.prototype.accessList = function () {
        this.messagingBusService.sendMessage({ channel: _bus_hannel__WEBPACK_IMPORTED_MODULE_2__["default"].OPEN_BOT_ACCESS_LIST_DIALOG, data: { botId: this.bot.id } });
    };
    BotItemComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['bot']) {
            if (this.bot != null && this.bot != undefined) {
                this.bot.joinRequests.forEach(function (v) {
                    if (v.state == 'IS_AWAITING_APPROVAL') {
                        _this.awaitingRequests++;
                    }
                });
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_Bot__WEBPACK_IMPORTED_MODULE_1__["default"])
    ], BotItemComponent.prototype, "bot", void 0);
    BotItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bot-item',
            template: __webpack_require__(/*! ./bot-item.component.html */ "./src/app/core/bots/bots-list/bot-item/bot-item.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./bot-item.component.scss */ "./src/app/core/bots/bots-list/bot-item/bot-item.component.scss")]
        }),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_3__["MessagingBusService"]])
    ], BotItemComponent);
    return BotItemComponent;
}());



/***/ }),

/***/ "./src/app/core/bots/bots-list/bots-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/core/bots/bots-list/bots-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <span>Список ботов</span>\n      <span fxFlex=\"100%\"></span>\n      <span fxFlex=\"100%\" fxLayoutAlign=\"end\">\n        <button mat-button (click)=\"add()\">\n          <mat-icon aria-label=\"Добавить нового бота\">playlist_add</mat-icon>\n           Добавить нового бота\n        </button>\n      </span>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <mat-list>\n    <bot-item *ngFor=\"let bot of botsList\" [bot]=\"bot\"></bot-item>\n  </mat-list>\n\n</div>\n"

/***/ }),

/***/ "./src/app/core/bots/bots-list/bots-list.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/core/bots/bots-list/bots-list.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYm90cy9ib3RzLWxpc3QvYm90cy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/bots/bots-list/bots-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/bots/bots-list/bots-list.component.ts ***!
  \************************************************************/
/*! exports provided: BotsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotsListComponent", function() { return BotsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bus_hannel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bus/Сhannel */ "./src/app/core/bus/Сhannel.ts");
/* harmony import */ var _services_bots_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bots.service */ "./src/app/core/bots/services/bots.service.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api */ "./src/app/core/api/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BotsListComponent = /** @class */ (function () {
    function BotsListComponent(messagingBusService, telegramBotsService) {
        var _this = this;
        this.messagingBusService = messagingBusService;
        this.telegramBotsService = telegramBotsService;
        this.botsList = new Array();
        this.getBotsList();
        this.botsListSubscription = this.messagingBusService.getMessage().subscribe(function (message) {
            if (message.channel == _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].BOTS_WERE_UPDATED) {
                _this.getBotsList();
            }
        });
    }
    BotsListComponent.prototype.ngOnDestroy = function () {
        this.botsListSubscription.unsubscribe();
    };
    BotsListComponent.prototype.add = function () {
        this.messagingBusService.sendMessage({ channel: _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].OPEN_ADD_BOT_DIALOG });
    };
    BotsListComponent.prototype.getBotsList = function () {
        var _this = this;
        this.telegramBotsService.getAll().subscribe(function (bots) {
            _this.botsList = bots;
        });
    };
    BotsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bots-list',
            template: __webpack_require__(/*! ./bots-list.component.html */ "./src/app/core/bots/bots-list/bots-list.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./bots-list.component.scss */ "./src/app/core/bots/bots-list/bots-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_3__["MessagingBusService"],
            _services_bots_service__WEBPACK_IMPORTED_MODULE_2__["BotsService"]])
    ], BotsListComponent);
    return BotsListComponent;
}());



/***/ }),

/***/ "./src/app/core/bots/edit-bot/edit-bot.component.html":
/*!************************************************************!*\
  !*** ./src/app/core/bots/edit-bot/edit-bot.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout fxLayoutAlign=\"start center\">\n  <h2 fxFlex=\"100%\" mat-dialog-title>Редактировать: {{bot.name}} </h2>\n  <button mat-icon-button matTooltip=\"Закрыть окно\" (click)=\"close()\">\n    <mat-icon aria-label=\"Закрыть\"\n              matTooltipPosition=\"above\">close</mat-icon>\n  </button>\n</div>\n<mat-dialog-content *ngIf=\"bot\">\n\n  <mat-slide-toggle\n    color=\"primary\"\n    (change)=\"changeCommandState($event)\"\n    [checked]=\"bot.state == 'ENABLED'\">\n    <span *ngIf=\"bot.state == 'ENABLED'\">Включен</span>\n    <span *ngIf=\"bot.state != 'ENABLED'\">Выключен</span>\n  </mat-slide-toggle>\n\n  <bot-form (onSubmitEvent)=\"edit($event)\"\n                      [initial]=\"bot\"\n                      submitButtonText=\"Сохранить изменения\">\n\n    <div class=\"ng-content-bottom-buttons\">\n      <button type=\"button\" mat-button color=\"warn\" (click)=\"delete()\">Удалить бота</button>\n    </div>\n\n  </bot-form>\n</mat-dialog-content>\n\n"

/***/ }),

/***/ "./src/app/core/bots/edit-bot/edit-bot.component.scss":
/*!************************************************************!*\
  !*** ./src/app/core/bots/edit-bot/edit-bot.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYm90cy9lZGl0LWJvdC9lZGl0LWJvdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/bots/edit-bot/edit-bot.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/bots/edit-bot/edit-bot.component.ts ***!
  \**********************************************************/
/*! exports provided: EditBotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBotComponent", function() { return EditBotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_bots_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bots.service */ "./src/app/core/bots/services/bots.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EditBotComponent = /** @class */ (function () {
    function EditBotComponent(dialogRef, data, botsService, snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.botsService = botsService;
        this.snackBar = snackBar;
        this.bot = data.bot;
    }
    EditBotComponent.prototype.edit = function (bot) {
        var _this = this;
        this.botsService.update(bot)
            .subscribe(function (bot) {
            _this.snackBar.open("Изменения сохранены", '', {
                duration: 3000,
                panelClass: 'colorGreen',
                horizontalPosition: 'right'
            });
        });
    };
    EditBotComponent.prototype.delete = function () {
        var _this = this;
        this.botsService.delete(this.bot.id)
            .subscribe(function (db) {
            _this.dialogRef.close();
            _this.snackBar.open("Бот удален", '', {
                duration: 3000,
                panelClass: 'colorGreen',
                horizontalPosition: 'right'
            });
        });
    };
    EditBotComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    EditBotComponent.prototype.changeCommandState = function (changeEvent) {
        if (changeEvent.checked) {
            this.bot.state = 'ENABLED';
        }
        else {
            this.bot.state = 'DISABLED';
        }
    };
    EditBotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-bot',
            template: __webpack_require__(/*! ./edit-bot.component.html */ "./src/app/core/bots/edit-bot/edit-bot.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./edit-bot.component.scss */ "./src/app/core/bots/edit-bot/edit-bot.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_bots_service__WEBPACK_IMPORTED_MODULE_2__["BotsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], EditBotComponent);
    return EditBotComponent;
}());



/***/ }),

/***/ "./src/app/core/bots/models/Bot.ts":
/*!*****************************************!*\
  !*** ./src/app/core/bots/models/Bot.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Bot = /** @class */ (function () {
    function Bot() {
    }
    return Bot;
}());
/* harmony default export */ __webpack_exports__["default"] = (Bot);


/***/ }),

/***/ "./src/app/core/bots/models/SlackBot.ts":
/*!**********************************************!*\
  !*** ./src/app/core/bots/models/SlackBot.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bot */ "./src/app/core/bots/models/Bot.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SlackBot = /** @class */ (function (_super) {
    __extends(SlackBot, _super);
    function SlackBot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SlackBot;
}(_Bot__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (SlackBot);


/***/ }),

/***/ "./src/app/core/bots/models/TelegramBot.ts":
/*!*************************************************!*\
  !*** ./src/app/core/bots/models/TelegramBot.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bot */ "./src/app/core/bots/models/Bot.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TelegramBot = /** @class */ (function (_super) {
    __extends(TelegramBot, _super);
    function TelegramBot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TelegramBot;
}(_Bot__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (TelegramBot);


/***/ }),

/***/ "./src/app/core/bots/services/bots.bus.ts":
/*!************************************************!*\
  !*** ./src/app/core/bots/services/bots.bus.ts ***!
  \************************************************/
/*! exports provided: BotsBus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotsBus", function() { return BotsBus; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _bus_hannel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bus/Сhannel */ "./src/app/core/bus/Сhannel.ts");
/* harmony import */ var _bots_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bots.service */ "./src/app/core/bots/services/bots.service.ts");
/* harmony import */ var _add_bot_add_bot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-bot/add-bot.component */ "./src/app/core/bots/add-bot/add-bot.component.ts");
/* harmony import */ var _edit_bot_edit_bot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-bot/edit-bot.component */ "./src/app/core/bots/edit-bot/edit-bot.component.ts");
/* harmony import */ var _bot_access_list_bot_access_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bot-access-list/bot-access-list.component */ "./src/app/core/bots/bot-access-list/bot-access-list.component.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api */ "./src/app/core/api/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var BotsBus = /** @class */ (function () {
    function BotsBus(dialog, messagingBusService, botsService) {
        var _this = this;
        this.dialog = dialog;
        this.messagingBusService = messagingBusService;
        this.botsService = botsService;
        this.subscription = this.messagingBusService.getMessage().subscribe(function (message) {
            if (message.channel == _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].OPEN_ADD_BOT_DIALOG) {
                _this.openAddBotDialog();
            }
            else if (message.channel == _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].OPEN_EDIT_BOT_DIALOG) {
                _this.openEditBotDialog(message.data.botId);
            }
            else if (message.channel == _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].OPEN_BOT_ACCESS_LIST_DIALOG) {
                _this.openAccessListDialog(message.data.botId);
            }
        });
    }
    BotsBus.prototype.openAddBotDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_add_bot_add_bot_component__WEBPACK_IMPORTED_MODULE_3__["AddBotComponent"], {
            width: '700px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.messagingBusService.sendMessage({ channel: _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].BOTS_WERE_UPDATED });
        });
    };
    BotsBus.prototype.openEditBotDialog = function (botId) {
        var _this = this;
        this.botsService.get(botId)
            .subscribe(function (bot) {
            var dialogRef = _this.dialog.open(_edit_bot_edit_bot_component__WEBPACK_IMPORTED_MODULE_4__["EditBotComponent"], {
                width: '700px',
                data: { bot: bot }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                _this.messagingBusService.sendMessage({ channel: _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].BOTS_WERE_UPDATED });
            });
        });
    };
    BotsBus.prototype.openAccessListDialog = function (botId) {
        var _this = this;
        this.botsService.get(botId)
            .subscribe(function (bot) {
            var dialogRef = _this.dialog.open(_bot_access_list_bot_access_list_component__WEBPACK_IMPORTED_MODULE_5__["BotAccessListComponent"], {
                width: '600px',
                data: { botId: bot.id }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                _this.messagingBusService.sendMessage({ channel: _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].BOTS_WERE_UPDATED });
            });
        });
    };
    BotsBus = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"],
            _api__WEBPACK_IMPORTED_MODULE_6__["MessagingBusService"],
            _bots_service__WEBPACK_IMPORTED_MODULE_2__["BotsService"]])
    ], BotsBus);
    return BotsBus;
}());



/***/ }),

/***/ "./src/app/core/bots/services/bots.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/bots/services/bots.service.ts ***!
  \****************************************************/
/*! exports provided: BotsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotsService", function() { return BotsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config */ "./src/app/config.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var BotsService = /** @class */ (function () {
    function BotsService(http, config) {
        this.http = http;
        this.config = config;
        this.headers = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        this.url = config.api + '/bots';
    }
    BotsService.prototype.add = function (bot) {
        return this.http
            .post(this.url, bot, this.headers);
    };
    BotsService.prototype.getAll = function () {
        return this.http.get(this.url, this.headers);
    };
    BotsService.prototype.get = function (botId) {
        return this.http
            .get(this.url + ("/" + botId));
    };
    BotsService.prototype.delete = function (botId) {
        return this.http
            .delete(this.url + ("/" + botId));
    };
    BotsService.prototype.update = function (bot) {
        return this.http
            .put(this.url + ("/" + bot.id), bot, this.headers);
    };
    BotsService.prototype.denied = function (botId, joinId) {
        return this.http
            .put(this.url + ("/" + botId + "/join/" + joinId + "/denied"), {}, this.headers);
    };
    BotsService.prototype.accept = function (botId, joinId) {
        return this.http
            .put(this.url + ("/" + botId + "/join/" + joinId + "/accept"), {}, this.headers);
    };
    BotsService.prototype.getBotTypes = function () {
        return this.http.get(this.url + "/types", this.headers);
    };
    BotsService = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _config__WEBPACK_IMPORTED_MODULE_1__["Config"]])
    ], BotsService);
    return BotsService;
}());



/***/ }),

/***/ "./src/app/core/bus/Сhannel.ts":
/*!*************************************!*\
  !*** ./src/app/core/bus/Сhannel.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Channel = /** @class */ (function () {
    function Channel() {
    }
    Channel.OPEN_ADD_DB_CONNECTION_DIALOG = "OPEN_ADD_DB_CONNECTION_DIALOG";
    Channel.OPEN_EDIT_DB_CONNECTION_DIALOG = "OPEN_EDIT_DB_CONNECTION_DIALOG";
    Channel.DB_CONNECTIONS_WERE_UPDATED = "DB_CONNECTIONS_WERE_UPDATED";
    Channel.OPEN_ADD_WEB_USER_DIALOG = "OPEN_ADD_WEB_USER_DIALOG";
    Channel.OPEN_EDIT_WEB_USER_DIALOG = "OPEN_EDIT_WEB_USER_DIALOG";
    Channel.WEB_USERS_WERE_UPDATED = "WEB_USERS_WERE_UPDATED";
    Channel.OPEN_ADD_TEXT_HANDLER_PROCESSOR_DIALOG = "OPEN_ADD_TEXT_HANDLER_PROCESSOR_DIALOG";
    Channel.OPEN_EDIT_TEXT_HANDLER_PROCESSOR_DIALOG = "OPEN_EDIT_TEXT_HANDLER_PROCESSOR_DIALOG";
    Channel.TEXT_HANDLER_PROCESSORS_WERE_UPDATED = "TEXT_HANDLER_PROCESSORS_WERE_UPDATED";
    Channel.BOTS_WERE_UPDATED = "BOTS_WERE_UPDATED";
    Channel.OPEN_ADD_BOT_DIALOG = "OPEN_ADD_BOT_DIALOG";
    Channel.OPEN_EDIT_BOT_DIALOG = "OPEN_EDIT_BOT_DIALOG";
    Channel.OPEN_BOT_ACCESS_LIST_DIALOG = "OPEN_BOT_ACCESS_LIST_DIALOG";
    return Channel;
}());
/* harmony default export */ __webpack_exports__["default"] = (Channel);


/***/ }),

/***/ "./src/app/core/core-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/core/core-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CoreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function() { return CoreRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dbs_dbs_list_dbs_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dbs/dbs-list/dbs-list.component */ "./src/app/core/dbs/dbs-list/dbs-list.component.ts");
/* harmony import */ var _bots_bots_list_bots_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bots/bots-list/bots-list.component */ "./src/app/core/bots/bots-list/bots-list.component.ts");
/* harmony import */ var _login_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/auth.guard */ "./src/app/login/auth.guard.ts");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../main.component */ "./src/app/main.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/core/settings/settings.component.ts");
/* harmony import */ var _web_users_web_users_list_web_users_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./web-users/web-users-list/web-users-list.component */ "./src/app/core/web-users/web-users-list/web-users-list.component.ts");
/* harmony import */ var _processor_text_text_processor_handlers_list_text_processors_handlers_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./processor/text/text-processor-handlers-list/text-processors-handlers-list.component */ "./src/app/core/processor/text/text-processor-handlers-list/text-processors-handlers-list.component.ts");
/* harmony import */ var _processor_text_execute_text_handler_execute_text_handler_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./processor/text/execute-text-handler/execute-text-handler.component */ "./src/app/core/processor/text/execute-text-handler/execute-text-handler.component.ts");
/* harmony import */ var _processor_text_services_text_process_handler_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./processor/text/services/text-process-handler.resolver */ "./src/app/core/processor/text/services/text-process-handler.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: _main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
        canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            { path: 'text-processor-handlers-list', component: _processor_text_text_processor_handlers_list_text_processors_handlers_list_component__WEBPACK_IMPORTED_MODULE_8__["TextProcessorsHandlersListComponent"] },
            { path: 'text-processor-handlers-list/:id/execute',
                resolve: { textProcessorHandler: _processor_text_services_text_process_handler_resolver__WEBPACK_IMPORTED_MODULE_10__["TextProcessHandlerResolver"] },
                component: _processor_text_execute_text_handler_execute_text_handler_component__WEBPACK_IMPORTED_MODULE_9__["ExecuteTextHandlerComponent"] },
            { path: 'dbs-list', component: _dbs_dbs_list_dbs_list_component__WEBPACK_IMPORTED_MODULE_2__["DbsListComponent"] },
            { path: 'web-users-list', component: _web_users_web_users_list_web_users_list_component__WEBPACK_IMPORTED_MODULE_7__["WebUsersListComponent"] },
            { path: 'bots-list', component: _bots_bots_list_bots_list_component__WEBPACK_IMPORTED_MODULE_3__["BotsListComponent"] },
            { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"] }
        ]
    }
];
var CoreRoutingModule = /** @class */ (function () {
    function CoreRoutingModule() {
    }
    CoreRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CoreRoutingModule);
    return CoreRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core-routing.module */ "./src/app/core/core-routing.module.ts");
/* harmony import */ var _dbs_dbs_list_dbs_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dbs/dbs-list/dbs-list.component */ "./src/app/core/dbs/dbs-list/dbs-list.component.ts");
/* harmony import */ var _dbs_add_db_connection_add_db_connection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dbs/add-db-connection/add-db-connection.component */ "./src/app/core/dbs/add-db-connection/add-db-connection.component.ts");
/* harmony import */ var _dbs_services_db_connections_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dbs/services/db-connections.service */ "./src/app/core/dbs/services/db-connections.service.ts");
/* harmony import */ var _dbs_services_db_connections_bus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dbs/services/db-connections.bus */ "./src/app/core/dbs/services/db-connections.bus.ts");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../angular.material.module */ "./src/app/angular.material.module.ts");
/* harmony import */ var _dbs_dbs_list_db_item_db_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dbs/dbs-list/db-item/db-item.component */ "./src/app/core/dbs/dbs-list/db-item/db-item.component.ts");
/* harmony import */ var _dbs_db_connection_form_db_connection_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dbs/db-connection-form/db-connection-form.component */ "./src/app/core/dbs/db-connection-form/db-connection-form.component.ts");
/* harmony import */ var _dbs_edit_db_connection_edit_db_connection_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dbs/edit-db-connection/edit-db-connection.component */ "./src/app/core/dbs/edit-db-connection/edit-db-connection.component.ts");
/* harmony import */ var _bots_bots_list_bots_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bots/bots-list/bots-list.component */ "./src/app/core/bots/bots-list/bots-list.component.ts");
/* harmony import */ var _bots_add_bot_add_bot_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bots/add-bot/add-bot.component */ "./src/app/core/bots/add-bot/add-bot.component.ts");
/* harmony import */ var _bots_edit_bot_edit_bot_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bots/edit-bot/edit-bot.component */ "./src/app/core/bots/edit-bot/edit-bot.component.ts");
/* harmony import */ var _bots_bot_form_bot_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bots/bot-form/bot-form.component */ "./src/app/core/bots/bot-form/bot-form.component.ts");
/* harmony import */ var _bots_bots_list_bot_item_bot_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bots/bots-list/bot-item/bot-item.component */ "./src/app/core/bots/bots-list/bot-item/bot-item.component.ts");
/* harmony import */ var _bots_services_bots_bus__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bots/services/bots.bus */ "./src/app/core/bots/services/bots.bus.ts");
/* harmony import */ var _bots_services_bots_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bots/services/bots.service */ "./src/app/core/bots/services/bots.service.ts");
/* harmony import */ var _dbs_db_connection_form_postgres_form_postgres_db_connection_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dbs/db-connection-form/postgres-form/postgres-db-connection-form.component */ "./src/app/core/dbs/db-connection-form/postgres-form/postgres-db-connection-form.component.ts");
/* harmony import */ var _dbs_db_connection_form_oracle_form_oracle_db_connection_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dbs/db-connection-form/oracle-form/oracle-db-connection-form.component */ "./src/app/core/dbs/db-connection-form/oracle-form/oracle-db-connection-form.component.ts");
/* harmony import */ var _bots_bot_access_list_bot_access_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bots/bot-access-list/bot-access-list.component */ "./src/app/core/bots/bot-access-list/bot-access-list.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/core/settings/settings.component.ts");
/* harmony import */ var _settings_settings_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./settings/settings.service */ "./src/app/core/settings/settings.service.ts");
/* harmony import */ var _bots_bot_form_telegram_form_telegram_bot_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./bots/bot-form/telegram-form/telegram-bot-form.component */ "./src/app/core/bots/bot-form/telegram-form/telegram-bot-form.component.ts");
/* harmony import */ var _bots_bot_form_slack_form_slack_bot_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./bots/bot-form/slack-form/slack-bot-form.component */ "./src/app/core/bots/bot-form/slack-form/slack-bot-form.component.ts");
/* harmony import */ var _web_users_add_web_user_add_web_user_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./web-users/add-web-user/add-web-user.component */ "./src/app/core/web-users/add-web-user/add-web-user.component.ts");
/* harmony import */ var _web_users_edit_web_user_edit_web_user_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./web-users/edit-web-user/edit-web-user.component */ "./src/app/core/web-users/edit-web-user/edit-web-user.component.ts");
/* harmony import */ var _web_users_web_users_list_web_users_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./web-users/web-users-list/web-users-list.component */ "./src/app/core/web-users/web-users-list/web-users-list.component.ts");
/* harmony import */ var _web_users_services_web_users_bus__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./web-users/services/web-users.bus */ "./src/app/core/web-users/services/web-users.bus.ts");
/* harmony import */ var _web_users_web_user_form_web_user_form_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./web-users/web-user-form/web-user-form.component */ "./src/app/core/web-users/web-user-form/web-user-form.component.ts");
/* harmony import */ var _web_users_web_users_list_web_user_item_web_user_item_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./web-users/web-users-list/web-user-item/web-user-item.component */ "./src/app/core/web-users/web-users-list/web-user-item/web-user-item.component.ts");
/* harmony import */ var _web_users_services_web_users_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./web-users/services/web-users.service */ "./src/app/core/web-users/services/web-users.service.ts");
/* harmony import */ var _dbs_db_connection_form_mysql_form_mysql_db_connection_form_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./dbs/db-connection-form/mysql-form/mysql-db-connection-form.component */ "./src/app/core/dbs/db-connection-form/mysql-form/mysql-db-connection-form.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./api */ "./src/app/core/api/index.ts");
/* harmony import */ var _processor_text_text_processor_handler_form_text_processor_handler_form_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./processor/text/text-processor-handler-form/text-processor-handler-form.component */ "./src/app/core/processor/text/text-processor-handler-form/text-processor-handler-form.component.ts");
/* harmony import */ var _processor_text_add_text_processor_handler_add_text_processor_handler_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./processor/text/add-text-processor-handler/add-text-processor-handler.component */ "./src/app/core/processor/text/add-text-processor-handler/add-text-processor-handler.component.ts");
/* harmony import */ var _processor_text_text_processor_handlers_list_text_processors_handlers_list_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./processor/text/text-processor-handlers-list/text-processors-handlers-list.component */ "./src/app/core/processor/text/text-processor-handlers-list/text-processors-handlers-list.component.ts");
/* harmony import */ var _processor_text_text_processor_handlers_list_text_processor_item_text_processor_item_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./processor/text/text-processor-handlers-list/text-processor-item/text-processor-item.component */ "./src/app/core/processor/text/text-processor-handlers-list/text-processor-item/text-processor-item.component.ts");
/* harmony import */ var _processor_text_services_text_processors_handlers_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./processor/text/services/text-processors-handlers.service */ "./src/app/core/processor/text/services/text-processors-handlers.service.ts");
/* harmony import */ var _processor_text_services_text_processors_handlers_bus__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./processor/text/services/text-processors-handlers.bus */ "./src/app/core/processor/text/services/text-processors-handlers.bus.ts");
/* harmony import */ var _processor_text_edit_text_processor_handler_edit_text_processor_handler_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./processor/text/edit-text-processor-handler/edit-text-processor-handler.component */ "./src/app/core/processor/text/edit-text-processor-handler/edit-text-processor-handler.component.ts");
/* harmony import */ var _processor_text_text_processor_handler_form_text_processor_find_by_key_text_processor_find_by_key_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./processor/text/text-processor-handler-form/text-processor-find-by-key/text-processor-find-by-key.component */ "./src/app/core/processor/text/text-processor-handler-form/text-processor-find-by-key/text-processor-find-by-key.component.ts");
/* harmony import */ var _processor_text_text_processor_handler_form_text_processor_add_delimiter_text_processor_add_delimiter_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./processor/text/text-processor-handler-form/text-processor-add-delimiter/text-processor-add-delimiter.component */ "./src/app/core/processor/text/text-processor-handler-form/text-processor-add-delimiter/text-processor-add-delimiter.component.ts");
/* harmony import */ var _processor_text_text_processor_handler_form_text_processor_find_numbers_with_prefix_text_processor_find_numbers_with_prefix_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./processor/text/text-processor-handler-form/text-processor-find-numbers-with-prefix/text-processor-find-numbers-with-prefix.component */ "./src/app/core/processor/text/text-processor-handler-form/text-processor-find-numbers-with-prefix/text-processor-find-numbers-with-prefix.component.ts");
/* harmony import */ var _processor_text_execute_text_handler_execute_text_handler_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./processor/text/execute-text-handler/execute-text-handler.component */ "./src/app/core/processor/text/execute-text-handler/execute-text-handler.component.ts");
/* harmony import */ var _processor_text_services_text_process_handler_resolver__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./processor/text/services/text-process-handler.resolver */ "./src/app/core/processor/text/services/text-process-handler.resolver.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















































var CoreModule = /** @class */ (function () {
    function CoreModule(messagingBusService, dbConnectionsBus, webUsersBus, textProcessorsHandlersBus, botsBus) {
        this.messagingBusService = messagingBusService;
        this.dbConnectionsBus = dbConnectionsBus;
        this.webUsersBus = webUsersBus;
        this.textProcessorsHandlersBus = textProcessorsHandlersBus;
        this.botsBus = botsBus;
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_module__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"],
                _core_routing_module__WEBPACK_IMPORTED_MODULE_2__["CoreRoutingModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_48__["ScrollingModule"]
            ],
            entryComponents: [
                _processor_text_add_text_processor_handler_add_text_processor_handler_component__WEBPACK_IMPORTED_MODULE_37__["AddTextProcessorHandlerComponent"],
                _processor_text_edit_text_processor_handler_edit_text_processor_handler_component__WEBPACK_IMPORTED_MODULE_42__["EditTextProcessorHandlerComponent"],
                _dbs_add_db_connection_add_db_connection_component__WEBPACK_IMPORTED_MODULE_4__["AddDbConnectionComponent"],
                _dbs_edit_db_connection_edit_db_connection_component__WEBPACK_IMPORTED_MODULE_10__["EditDbConnectionComponent"],
                _bots_add_bot_add_bot_component__WEBPACK_IMPORTED_MODULE_12__["AddBotComponent"],
                _bots_edit_bot_edit_bot_component__WEBPACK_IMPORTED_MODULE_13__["EditBotComponent"],
                _bots_bot_access_list_bot_access_list_component__WEBPACK_IMPORTED_MODULE_20__["BotAccessListComponent"],
                _web_users_add_web_user_add_web_user_component__WEBPACK_IMPORTED_MODULE_25__["AddWebUserComponent"],
                _web_users_edit_web_user_edit_web_user_component__WEBPACK_IMPORTED_MODULE_26__["EditWebUserComponent"],
            ],
            declarations: [
                _dbs_dbs_list_dbs_list_component__WEBPACK_IMPORTED_MODULE_3__["DbsListComponent"],
                _dbs_add_db_connection_add_db_connection_component__WEBPACK_IMPORTED_MODULE_4__["AddDbConnectionComponent"],
                _dbs_edit_db_connection_edit_db_connection_component__WEBPACK_IMPORTED_MODULE_10__["EditDbConnectionComponent"],
                _dbs_db_connection_form_db_connection_form_component__WEBPACK_IMPORTED_MODULE_9__["DbConnectionFormComponent"],
                _dbs_db_connection_form_postgres_form_postgres_db_connection_form_component__WEBPACK_IMPORTED_MODULE_18__["PostgresDbConnectionFormComponent"],
                _dbs_db_connection_form_mysql_form_mysql_db_connection_form_component__WEBPACK_IMPORTED_MODULE_32__["MysqlDbConnectionFormComponent"],
                _dbs_db_connection_form_oracle_form_oracle_db_connection_form_component__WEBPACK_IMPORTED_MODULE_19__["OracleDbConnectionFormComponent"],
                _dbs_dbs_list_db_item_db_item_component__WEBPACK_IMPORTED_MODULE_8__["DbItemComponent"],
                _bots_bots_list_bots_list_component__WEBPACK_IMPORTED_MODULE_11__["BotsListComponent"],
                _bots_add_bot_add_bot_component__WEBPACK_IMPORTED_MODULE_12__["AddBotComponent"],
                _bots_edit_bot_edit_bot_component__WEBPACK_IMPORTED_MODULE_13__["EditBotComponent"],
                _bots_bot_form_bot_form_component__WEBPACK_IMPORTED_MODULE_14__["BotFormComponent"],
                _bots_bots_list_bot_item_bot_item_component__WEBPACK_IMPORTED_MODULE_15__["BotItemComponent"],
                _bots_bot_form_slack_form_slack_bot_form_component__WEBPACK_IMPORTED_MODULE_24__["SlackBotFormComponent"],
                _bots_bot_form_telegram_form_telegram_bot_form_component__WEBPACK_IMPORTED_MODULE_23__["TelegramBotFormComponent"],
                _web_users_web_users_list_web_users_list_component__WEBPACK_IMPORTED_MODULE_27__["WebUsersListComponent"],
                _web_users_web_users_list_web_user_item_web_user_item_component__WEBPACK_IMPORTED_MODULE_30__["WebUserItemComponent"],
                _web_users_add_web_user_add_web_user_component__WEBPACK_IMPORTED_MODULE_25__["AddWebUserComponent"],
                _web_users_edit_web_user_edit_web_user_component__WEBPACK_IMPORTED_MODULE_26__["EditWebUserComponent"],
                _web_users_web_user_form_web_user_form_component__WEBPACK_IMPORTED_MODULE_29__["WebUserFormComponent"],
                _processor_text_add_text_processor_handler_add_text_processor_handler_component__WEBPACK_IMPORTED_MODULE_37__["AddTextProcessorHandlerComponent"],
                _processor_text_edit_text_processor_handler_edit_text_processor_handler_component__WEBPACK_IMPORTED_MODULE_42__["EditTextProcessorHandlerComponent"],
                _processor_text_text_processor_handlers_list_text_processors_handlers_list_component__WEBPACK_IMPORTED_MODULE_38__["TextProcessorsHandlersListComponent"],
                _processor_text_text_processor_handlers_list_text_processor_item_text_processor_item_component__WEBPACK_IMPORTED_MODULE_39__["TextProcessorHandlerItemComponent"],
                _processor_text_text_processor_handler_form_text_processor_handler_form_component__WEBPACK_IMPORTED_MODULE_36__["TextProcessorHandlerFormComponent"],
                _processor_text_text_processor_handler_form_text_processor_find_by_key_text_processor_find_by_key_component__WEBPACK_IMPORTED_MODULE_43__["TextProcessorFindByKeyComponent"],
                _processor_text_text_processor_handler_form_text_processor_add_delimiter_text_processor_add_delimiter_component__WEBPACK_IMPORTED_MODULE_44__["TextProcessorAddDelimiterComponent"],
                _processor_text_text_processor_handler_form_text_processor_find_numbers_with_prefix_text_processor_find_numbers_with_prefix_component__WEBPACK_IMPORTED_MODULE_45__["TextProcessorFindNumbersWithPrefixComponent"],
                _processor_text_execute_text_handler_execute_text_handler_component__WEBPACK_IMPORTED_MODULE_46__["ExecuteTextHandlerComponent"],
                _bots_bot_access_list_bot_access_list_component__WEBPACK_IMPORTED_MODULE_20__["BotAccessListComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_21__["SettingsComponent"]
            ],
            providers: [
                _angular_material__WEBPACK_IMPORTED_MODULE_34__["MatDialog"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpClient"],
                _dbs_services_db_connections_service__WEBPACK_IMPORTED_MODULE_5__["DbConnectionsService"],
                _dbs_services_db_connections_bus__WEBPACK_IMPORTED_MODULE_6__["DbConnectionsBus"],
                _web_users_services_web_users_bus__WEBPACK_IMPORTED_MODULE_28__["WebUsersBus"],
                _web_users_services_web_users_service__WEBPACK_IMPORTED_MODULE_31__["WebUsersService"],
                _bots_services_bots_bus__WEBPACK_IMPORTED_MODULE_16__["BotsBus"],
                _bots_services_bots_service__WEBPACK_IMPORTED_MODULE_17__["BotsService"],
                _processor_text_services_text_process_handler_resolver__WEBPACK_IMPORTED_MODULE_47__["TextProcessHandlerResolver"],
                _processor_text_services_text_processors_handlers_service__WEBPACK_IMPORTED_MODULE_40__["TextProcessorsHandlersService"],
                _processor_text_services_text_processors_handlers_bus__WEBPACK_IMPORTED_MODULE_41__["TextProcessorsHandlersBus"],
                _settings_settings_service__WEBPACK_IMPORTED_MODULE_22__["SettingsService"]
            ]
        }),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_35__["MessagingBusService"],
            _dbs_services_db_connections_bus__WEBPACK_IMPORTED_MODULE_6__["DbConnectionsBus"],
            _web_users_services_web_users_bus__WEBPACK_IMPORTED_MODULE_28__["WebUsersBus"],
            _processor_text_services_text_processors_handlers_bus__WEBPACK_IMPORTED_MODULE_41__["TextProcessorsHandlersBus"],
            _bots_services_bots_bus__WEBPACK_IMPORTED_MODULE_16__["BotsBus"]])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/dbs/add-db-connection/add-db-connection.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/core/dbs/add-db-connection/add-db-connection.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout fxLayoutAlign=\"start center\">\n  <h2 fxFlex=\"100%\" mat-dialog-title>Новая база данных</h2>\n  <button mat-icon-button matTooltip=\"Закрыть окно\" (click)=\"close()\">\n    <mat-icon aria-label=\"Закрыть\"\n              matTooltipPosition=\"above\">close</mat-icon>\n  </button>\n</div>\n<mat-dialog-content>\n  <db-connection-form (onSubmitEvent)=\"addDbConnection($event)\"\n                      submitButtonText=\"Сохранить базу данных\">\n  </db-connection-form>\n</mat-dialog-content>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/core/dbs/add-db-connection/add-db-connection.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/core/dbs/add-db-connection/add-db-connection.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZGJzL2FkZC1kYi1jb25uZWN0aW9uL2FkZC1kYi1jb25uZWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/dbs/add-db-connection/add-db-connection.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/core/dbs/add-db-connection/add-db-connection.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddDbConnectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDbConnectionComponent", function() { return AddDbConnectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_db_connections_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/db-connections.service */ "./src/app/core/dbs/services/db-connections.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddDbConnectionComponent = /** @class */ (function () {
    function AddDbConnectionComponent(dialogRef, dbConnectionsService, snackBar) {
        this.dialogRef = dialogRef;
        this.dbConnectionsService = dbConnectionsService;
        this.snackBar = snackBar;
    }
    AddDbConnectionComponent.prototype.addDbConnection = function (dbConnection) {
        var _this = this;
        this.dbConnectionsService.add(dbConnection)
            .subscribe(function (db) {
            _this.dialogRef.close();
            _this.snackBar.open("Соединение добавлено", '', {
                duration: 3000,
                panelClass: 'colorGreen',
                horizontalPosition: 'right'
            });
        });
    };
    AddDbConnectionComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    AddDbConnectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-db-connection',
            template: __webpack_require__(/*! ./add-db-connection.component.html */ "./src/app/core/dbs/add-db-connection/add-db-connection.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./add-db-connection.component.scss */ "./src/app/core/dbs/add-db-connection/add-db-connection.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _services_db_connections_service__WEBPACK_IMPORTED_MODULE_2__["DbConnectionsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], AddDbConnectionComponent);
    return AddDbConnectionComponent;
}());



/***/ }),

/***/ "./src/app/core/dbs/db-connection-form/db-connection-form.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/core/dbs/db-connection-form/db-connection-form.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" #dbConnectionForm=\"ngForm\" fxLayout=\"column\">\n\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"Наименование соединения с базой данных\"\n           id=\"name\" name=\"name\"\n           [(ngModel)]=\"dbConnection.name\"\n           required\n           #name=\"ngModel\"/>\n    <mat-error *ngIf=\"name.errors && (name.dirty || name.touched) && name.errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Тип базы данных\"\n                id=\"type\" name=\"type\"\n                [(ngModel)]=\"dbConnection.type\"\n                required #type=\"ngModel\">\n      <mat-option *ngFor=\"let t of dbTypes\" [value]=\"t.type\">\n        {{ t.name }}\n      </mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"type.errors && (type.dirty || type.touched) && type.errors.required\">Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n  <oracle-db-connection-form *ngIf=\"dbConnection.type == 'ORACLE'\"\n                             [dbConnection]=\"dbConnection\"></oracle-db-connection-form>\n\n  <postgres-db-connection-form *ngIf=\"dbConnection.type == 'POSTGRES'\"\n                               [dbConnection]=\"dbConnection\"></postgres-db-connection-form>\n\n  <mysql-db-connection-form *ngIf=\"dbConnection.type == 'MYSQL'\"\n                               [dbConnection]=\"dbConnection\"></mysql-db-connection-form>\n\n\n  <div fxLayout fxFlexAlign=\"center\" style=\"margin: 20px;\" fxLayoutGap=\"10px\">\n    <button type=\"button\" (click)=\"checkConnection()\" mat-raised-button [disabled]=\"!dbConnectionForm.form.valid\">Проверить соединение</button>\n\n    <button type=\"submit\" mat-raised-button color=\"primary\"\n              [disabled]=\"!dbConnectionForm.form.valid\">{{submitButtonText}}</button>\n    <ng-content select=\".ng-content-bottom-buttons\"></ng-content>\n  </div>\n\n</form>\n\n\n"

/***/ }),

/***/ "./src/app/core/dbs/db-connection-form/db-connection-form.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/core/dbs/db-connection-form/db-connection-form.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZGJzL2RiLWNvbm5lY3Rpb24tZm9ybS9kYi1jb25uZWN0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/core/dbs/db-connection-form/db-connection-form.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/core/dbs/db-connection-form/db-connection-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DbConnectionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbConnectionFormComponent", function() { return DbConnectionFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_db_connections_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/db-connections.service */ "./src/app/core/dbs/services/db-connections.service.ts");
/* harmony import */ var _models_DbConnection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/DbConnection */ "./src/app/core/dbs/models/DbConnection.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DbConnectionFormComponent = /** @class */ (function () {
    function DbConnectionFormComponent(dbConnectionsService, snackBar) {
        var _this = this;
        this.dbConnectionsService = dbConnectionsService;
        this.snackBar = snackBar;
        this.onSubmitEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dbConnection = new _models_DbConnection__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.dbConnectionsService.getDbTypes().subscribe(function (dbTypes) {
            _this.dbTypes = dbTypes;
        });
        ;
    }
    DbConnectionFormComponent.prototype.onSubmit = function () {
        this.onSubmitEvent.emit(this.dbConnection);
    };
    DbConnectionFormComponent.prototype.checkConnection = function () {
        var _this = this;
        this.dbConnectionsService.checkConnection(this.dbConnection)
            .subscribe(function (res) {
            if (res.success) {
                _this.snackBar.open('Удачно', '', {
                    duration: 5000,
                    panelClass: 'colorGreen',
                    horizontalPosition: 'right'
                });
            }
            else {
                _this.snackBar.open('Не удалось установить соединение', '', {
                    duration: 5000,
                    panelClass: 'colorRed',
                    horizontalPosition: 'right'
                });
            }
        });
    };
    DbConnectionFormComponent.prototype.ngOnChanges = function (changes) {
        if (changes['initial']) {
            if (this.initial != null && this.initial != undefined) {
                this.dbConnection = this.initial;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DbConnectionFormComponent.prototype, "onSubmitEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_DbConnection__WEBPACK_IMPORTED_MODULE_2__["default"])
    ], DbConnectionFormComponent.prototype, "initial", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DbConnectionFormComponent.prototype, "submitButtonText", void 0);
    DbConnectionFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'db-connection-form',
            template: __webpack_require__(/*! ./db-connection-form.component.html */ "./src/app/core/dbs/db-connection-form/db-connection-form.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./db-connection-form.component.scss */ "./src/app/core/dbs/db-connection-form/db-connection-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_db_connections_service__WEBPACK_IMPORTED_MODULE_1__["DbConnectionsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], DbConnectionFormComponent);
    return DbConnectionFormComponent;
}());



/***/ }),

/***/ "./src/app/core/dbs/db-connection-form/mysql-form/mysql-db-connection-form.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/core/dbs/db-connection-form/mysql-form/mysql-db-connection-form.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"Хост\"\n           id=\"host\" name=\"host\"\n           [(ngModel)]=\"dbConnection.host\"\n           required #host=\"ngModel\"/>\n    <mat-error *ngIf=\"host.errors && (host.dirty || host.touched) && host.errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"Порт\"\n           id=\"port\" name=\"port\"\n           [(ngModel)]=\"dbConnection.port\"\n           required #port=\"ngModel\"/>\n    <mat-error *ngIf=\"port.errors && (port.dirty || port.touched) && port.errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"База данных\"\n           id=\"dbName\" name=\"dbName\"\n           [(ngModel)]=\"dbConnection.dbName\"\n           required #dbName=\"ngModel\"/>\n    <mat-error *ngIf=\"dbName.errors && (dbName.dirty || dbName.touched) && dbName.errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"Пользователь\"\n           id=\"user\" name=\"user\"\n           [(ngModel)]=\"dbConnection.user\"\n           required #user=\"ngModel\"/>\n    <mat-error *ngIf=\"user.errors && (user.dirty || user.touched) && user.errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"Пароль\"\n           [type]=\"show ?'text':'password'\"\n           id=\"password\" name=\"password\"\n           [(ngModel)]=\"dbConnection.password\"\n           required #password=\"ngModel\"/>\n    <mat-icon matSuffix (click)=\"show = !show\">{{show ?'visibility_off': 'visibility' }}</mat-icon>\n    <mat-error *ngIf=\"password.errors && (password.dirty || password.touched) && password.errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/core/dbs/db-connection-form/mysql-form/mysql-db-connection-form.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/core/dbs/db-connection-form/mysql-form/mysql-db-connection-form.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: MysqlDbConnectionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MysqlDbConnectionFormComponent", function() { return MysqlDbConnectionFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_DbConnection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/DbConnection */ "./src/app/core/dbs/models/DbConnection.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MysqlDbConnectionFormComponent = /** @class */ (function () {
    function MysqlDbConnectionFormComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_DbConnection__WEBPACK_IMPORTED_MODULE_1__["default"])
    ], MysqlDbConnectionFormComponent.prototype, "dbConnection", void 0);
    MysqlDbConnectionFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mysql-db-connection-form',
            template: __webpack_require__(/*! ./mysql-db-connection-form.component.html */ "./src/app/core/dbs/db-connection-form/mysql-form/mysql-db-connection-form.component.html"),
            viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"] }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
        })
    ], MysqlDbConnectionFormComponent);
    return MysqlDbConnectionFormComponent;
}());



/***/ }),

/***/ "./src/app/core/dbs/db-connection-form/oracle-form/oracle-db-connection-form.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/core/dbs/db-connection-form/oracle-form/oracle-db-connection-form.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"Хост\"\n           id=\"host\" name=\"host\"\n           [(ngModel)]=\"dbConnection.host\"\n           required #host=\"ngModel\"/>\n    <mat-error *ngIf=\"host.errors && (host.dirty || host.touched) && host.errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"Порт\"\n           id=\"port\" name=\"port\"\n           [(ngModel)]=\"dbConnection.port\"\n           required #port=\"ngModel\"/>\n    <mat-error *ngIf=\"port.errors && (port.dirty || port.touched) && port.errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"SID\"\n           id=\"sid\" name=\"sid\"\n           [(ngModel)]=\"dbConnection.sid\"\n           required #sid=\"ngModel\"/>\n    <mat-error *ngIf=\"sid.errors && (sid.dirty || sid.touched) && sid.errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"Пользователь\"\n           id=\"user\" name=\"user\"\n           [(ngModel)]=\"dbConnection.user\"\n           required #user=\"ngModel\"/>\n    <mat-error *ngIf=\"user.errors && (user.dirty || user.touched) && user.errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"Пароль\"\n           [type]=\"show ?'text':'password'\"\n           id=\"password\" name=\"password\"\n           [(ngModel)]=\"dbConnection.password\"\n           required #password=\"ngModel\"/>\n    <mat-icon matSuffix (click)=\"show = !show\">{{show ?'visibility_off': 'visibility' }}</mat-icon>\n    <mat-error *ngIf=\"password.errors && (password.dirty || password.touched) && password.errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n</div>\n"

/***/ }),

/***/ "./src/app/core/dbs/db-connection-form/oracle-form/oracle-db-connection-form.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/core/dbs/db-connection-form/oracle-form/oracle-db-connection-form.component.ts ***!
  \************************************************************************************************/
/*! exports provided: OracleDbConnectionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OracleDbConnectionFormComponent", function() { return OracleDbConnectionFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_DbConnection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/DbConnection */ "./src/app/core/dbs/models/DbConnection.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OracleDbConnectionFormComponent = /** @class */ (function () {
    function OracleDbConnectionFormComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_DbConnection__WEBPACK_IMPORTED_MODULE_1__["default"])
    ], OracleDbConnectionFormComponent.prototype, "dbConnection", void 0);
    OracleDbConnectionFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'oracle-db-connection-form',
            template: __webpack_require__(/*! ./oracle-db-connection-form.component.html */ "./src/app/core/dbs/db-connection-form/oracle-form/oracle-db-connection-form.component.html"),
            viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"] }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
        })
    ], OracleDbConnectionFormComponent);
    return OracleDbConnectionFormComponent;
}());



/***/ }),

/***/ "./src/app/core/dbs/db-connection-form/postgres-form/postgres-db-connection-form.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/core/dbs/db-connection-form/postgres-form/postgres-db-connection-form.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"Хост\"\n           id=\"host\" name=\"host\"\n           [(ngModel)]=\"dbConnection.host\"\n           required #host=\"ngModel\"/>\n    <mat-error *ngIf=\"host.errors && (host.dirty || host.touched) && host.errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"Порт\"\n           id=\"port\" name=\"port\"\n           [(ngModel)]=\"dbConnection.port\"\n           required #port=\"ngModel\"/>\n    <mat-error *ngIf=\"port.errors && (port.dirty || port.touched) && port.errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"База данных\"\n           id=\"dbName\" name=\"dbName\"\n           [(ngModel)]=\"dbConnection.dbName\"\n           required #dbName=\"ngModel\"/>\n    <mat-error *ngIf=\"dbName.errors && (dbName.dirty || dbName.touched) && dbName.errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"Пользователь\"\n           id=\"user\" name=\"user\"\n           [(ngModel)]=\"dbConnection.user\"\n           required #user=\"ngModel\"/>\n    <mat-error *ngIf=\"user.errors && (user.dirty || user.touched) && user.errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"Пароль\"\n           [type]=\"show ?'text':'password'\"\n           id=\"password\" name=\"password\"\n           [(ngModel)]=\"dbConnection.password\"\n           required #password=\"ngModel\"/>\n    <mat-icon matSuffix (click)=\"show = !show\">{{show ?'visibility_off': 'visibility' }}</mat-icon>\n    <mat-error *ngIf=\"password.errors && (password.dirty || password.touched) && password.errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/core/dbs/db-connection-form/postgres-form/postgres-db-connection-form.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/core/dbs/db-connection-form/postgres-form/postgres-db-connection-form.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: PostgresDbConnectionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostgresDbConnectionFormComponent", function() { return PostgresDbConnectionFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_DbConnection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/DbConnection */ "./src/app/core/dbs/models/DbConnection.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostgresDbConnectionFormComponent = /** @class */ (function () {
    function PostgresDbConnectionFormComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_DbConnection__WEBPACK_IMPORTED_MODULE_1__["default"])
    ], PostgresDbConnectionFormComponent.prototype, "dbConnection", void 0);
    PostgresDbConnectionFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'postgres-db-connection-form',
            template: __webpack_require__(/*! ./postgres-db-connection-form.component.html */ "./src/app/core/dbs/db-connection-form/postgres-form/postgres-db-connection-form.component.html"),
            viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"] }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
        })
    ], PostgresDbConnectionFormComponent);
    return PostgresDbConnectionFormComponent;
}());



/***/ }),

/***/ "./src/app/core/dbs/dbs-list/db-item/db-item.component.html":
/*!******************************************************************!*\
  !*** ./src/app/core/dbs/dbs-list/db-item/db-item.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list-item style=\"background-color: #fff;\">\n  <span matLine> <b>{{dbConnection.name}}</b></span>\n  <button mat-icon-button (click)=\"edit()\">\n    <mat-icon aria-label=\"Редактировать\">edit</mat-icon>\n  </button>\n</mat-list-item>\n<mat-divider></mat-divider>\n"

/***/ }),

/***/ "./src/app/core/dbs/dbs-list/db-item/db-item.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/core/dbs/dbs-list/db-item/db-item.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padding0 {\n  padding: 0 !important; }\n\nmat-card-title {\n  margin: 0 0 0 16px; }\n\n.semafor {\n  font-size: 17px;\n  color: #1acb1e; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVrc2FuZHJzZXJkdWtvdi9wcm9qZWN0cy9zdXBwb3J0LXRlcm1pbmFsLWRldi9zdXBwb3J0LXRlcm1pbmFsL3VpL3NyYy9hcHAvY29yZS9kYnMvZGJzLWxpc3QvZGItaXRlbS9kYi1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQW9CLEVBQUE7O0FBR3RCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZGJzL2Ricy1saXN0L2RiLWl0ZW0vZGItaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRkaW5nMHtcbiAgcGFkZGluZzowICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1jYXJkLXRpdGxle1xuICBtYXJnaW46IDAgMCAwIDE2cHg7XG59XG5cbi5zZW1hZm9ye1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjMWFjYjFlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/core/dbs/dbs-list/db-item/db-item.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/dbs/dbs-list/db-item/db-item.component.ts ***!
  \****************************************************************/
/*! exports provided: DbItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbItemComponent", function() { return DbItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_DbConnection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/DbConnection */ "./src/app/core/dbs/models/DbConnection.ts");
/* harmony import */ var _bus_hannel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../bus/Сhannel */ "./src/app/core/bus/Сhannel.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api */ "./src/app/core/api/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DbItemComponent = /** @class */ (function () {
    function DbItemComponent(messagingBusService) {
        this.messagingBusService = messagingBusService;
    }
    DbItemComponent.prototype.edit = function () {
        this.messagingBusService.sendMessage({ channel: _bus_hannel__WEBPACK_IMPORTED_MODULE_2__["default"].OPEN_EDIT_DB_CONNECTION_DIALOG, data: { dbConnectionId: this.dbConnection.id } });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_DbConnection__WEBPACK_IMPORTED_MODULE_1__["default"])
    ], DbItemComponent.prototype, "dbConnection", void 0);
    DbItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'db-item',
            template: __webpack_require__(/*! ./db-item.component.html */ "./src/app/core/dbs/dbs-list/db-item/db-item.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./db-item.component.scss */ "./src/app/core/dbs/dbs-list/db-item/db-item.component.scss")]
        }),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_3__["MessagingBusService"]])
    ], DbItemComponent);
    return DbItemComponent;
}());



/***/ }),

/***/ "./src/app/core/dbs/dbs-list/dbs-list.component.html":
/*!***********************************************************!*\
  !*** ./src/app/core/dbs/dbs-list/dbs-list.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <span>Список баз данных</span>\n      <span fxFlex=\"100%\"></span>\n      <span fxFlex=\"100%\" fxLayoutAlign=\"end\">\n        <button mat-button (click)=\"add()\">\n          <mat-icon aria-label=\"Добавить базу данных\">playlist_add</mat-icon>\n          Добавить базу данных\n        </button>\n      </span>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <mat-list>\n    <db-item *ngFor=\"let dbConnection of dbskList\" [dbConnection]=\"dbConnection\"></db-item>\n  </mat-list>\n</div>\n"

/***/ }),

/***/ "./src/app/core/dbs/dbs-list/dbs-list.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/core/dbs/dbs-list/dbs-list.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZGJzL2Ricy1saXN0L2Ricy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/dbs/dbs-list/dbs-list.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/dbs/dbs-list/dbs-list.component.ts ***!
  \*********************************************************/
/*! exports provided: DbsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbsListComponent", function() { return DbsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bus_hannel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bus/Сhannel */ "./src/app/core/bus/Сhannel.ts");
/* harmony import */ var _services_db_connections_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/db-connections.service */ "./src/app/core/dbs/services/db-connections.service.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api */ "./src/app/core/api/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DbsListComponent = /** @class */ (function () {
    function DbsListComponent(messagingBusService, dbConnectionsService) {
        var _this = this;
        this.messagingBusService = messagingBusService;
        this.dbConnectionsService = dbConnectionsService;
        this.getDbsList();
        this.dbskListSubscription = this.messagingBusService.getMessage().subscribe(function (message) {
            if (message.channel == _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].DB_CONNECTIONS_WERE_UPDATED) {
                _this.getDbsList();
            }
        });
    }
    DbsListComponent.prototype.ngOnDestroy = function () {
        this.dbskListSubscription.unsubscribe();
    };
    DbsListComponent.prototype.add = function () {
        this.messagingBusService.sendMessage({ channel: _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].OPEN_ADD_DB_CONNECTION_DIALOG });
    };
    DbsListComponent.prototype.getDbsList = function () {
        var _this = this;
        this.dbConnectionsService.getAll().subscribe(function (dbs) {
            _this.dbskList = dbs;
        });
    };
    DbsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dbs-list',
            template: __webpack_require__(/*! ./dbs-list.component.html */ "./src/app/core/dbs/dbs-list/dbs-list.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./dbs-list.component.scss */ "./src/app/core/dbs/dbs-list/dbs-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_3__["MessagingBusService"],
            _services_db_connections_service__WEBPACK_IMPORTED_MODULE_2__["DbConnectionsService"]])
    ], DbsListComponent);
    return DbsListComponent;
}());



/***/ }),

/***/ "./src/app/core/dbs/edit-db-connection/edit-db-connection.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/core/dbs/edit-db-connection/edit-db-connection.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout fxLayoutAlign=\"start center\">\n  <h2 fxFlex=\"100%\" mat-dialog-title>Редактировать: {{dbConnection.name}} </h2>\n  <button mat-icon-button matTooltip=\"Закрыть окно\" (click)=\"close()\">\n    <mat-icon aria-label=\"Закрыть\"\n              matTooltipPosition=\"above\">close</mat-icon>\n  </button>\n</div>\n<mat-dialog-content *ngIf=\"dbConnection\">\n  <db-connection-form (onSubmitEvent)=\"editDbConnection($event)\"\n                      [initial]=\"dbConnection\"\n                      submitButtonText=\"Сохранить изменения\">\n    <div class=\"ng-content-bottom-buttons\">\n      <button type=\"button\" mat-button color=\"warn\" (click)=\"deleteDb()\">Удалить базу данных</button>\n    </div>\n\n  </db-connection-form>\n</mat-dialog-content>\n\n"

/***/ }),

/***/ "./src/app/core/dbs/edit-db-connection/edit-db-connection.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/core/dbs/edit-db-connection/edit-db-connection.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZGJzL2VkaXQtZGItY29ubmVjdGlvbi9lZGl0LWRiLWNvbm5lY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/core/dbs/edit-db-connection/edit-db-connection.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/core/dbs/edit-db-connection/edit-db-connection.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditDbConnectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDbConnectionComponent", function() { return EditDbConnectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_db_connections_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/db-connections.service */ "./src/app/core/dbs/services/db-connections.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EditDbConnectionComponent = /** @class */ (function () {
    function EditDbConnectionComponent(dialogRef, data, dbConnectionsService, snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dbConnectionsService = dbConnectionsService;
        this.snackBar = snackBar;
        this.dbConnection = data.dbConnection;
    }
    EditDbConnectionComponent.prototype.editDbConnection = function (dbConnection) {
        var _this = this;
        this.dbConnectionsService.update(dbConnection)
            .subscribe(function (db) {
            _this.snackBar.open("Изменения сохранены", '', {
                duration: 3000,
                panelClass: 'colorGreen',
                horizontalPosition: 'right'
            });
        });
    };
    EditDbConnectionComponent.prototype.deleteDb = function () {
        var _this = this;
        this.dbConnectionsService.delete(this.dbConnection.id)
            .subscribe(function (db) {
            _this.dialogRef.close();
            _this.snackBar.open("База данных удалена", '', {
                duration: 3000,
                panelClass: 'colorGreen',
                horizontalPosition: 'right'
            });
        });
        ;
    };
    EditDbConnectionComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    EditDbConnectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-db-connection',
            template: __webpack_require__(/*! ./edit-db-connection.component.html */ "./src/app/core/dbs/edit-db-connection/edit-db-connection.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./edit-db-connection.component.scss */ "./src/app/core/dbs/edit-db-connection/edit-db-connection.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_db_connections_service__WEBPACK_IMPORTED_MODULE_2__["DbConnectionsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], EditDbConnectionComponent);
    return EditDbConnectionComponent;
}());



/***/ }),

/***/ "./src/app/core/dbs/models/DbConnection.ts":
/*!*************************************************!*\
  !*** ./src/app/core/dbs/models/DbConnection.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var DbConnection = /** @class */ (function () {
    function DbConnection() {
    }
    return DbConnection;
}());
/* harmony default export */ __webpack_exports__["default"] = (DbConnection);


/***/ }),

/***/ "./src/app/core/dbs/services/db-connections.bus.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/dbs/services/db-connections.bus.ts ***!
  \*********************************************************/
/*! exports provided: DbConnectionsBus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbConnectionsBus", function() { return DbConnectionsBus; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_db_connection_add_db_connection_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add-db-connection/add-db-connection.component */ "./src/app/core/dbs/add-db-connection/add-db-connection.component.ts");
/* harmony import */ var _bus_hannel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../bus/Сhannel */ "./src/app/core/bus/Сhannel.ts");
/* harmony import */ var _db_connections_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./db-connections.service */ "./src/app/core/dbs/services/db-connections.service.ts");
/* harmony import */ var _edit_db_connection_edit_db_connection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-db-connection/edit-db-connection.component */ "./src/app/core/dbs/edit-db-connection/edit-db-connection.component.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api */ "./src/app/core/api/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var DbConnectionsBus = /** @class */ (function () {
    function DbConnectionsBus(dialog, messagingBusService, dbConnectionsService) {
        var _this = this;
        this.dialog = dialog;
        this.messagingBusService = messagingBusService;
        this.dbConnectionsService = dbConnectionsService;
        this.subscription = this.messagingBusService.getMessage().subscribe(function (message) {
            if (message.channel == _bus_hannel__WEBPACK_IMPORTED_MODULE_2__["default"].OPEN_ADD_DB_CONNECTION_DIALOG) {
                _this.openAddDbConnectionDialog();
            }
            else if (message.channel == _bus_hannel__WEBPACK_IMPORTED_MODULE_2__["default"].OPEN_EDIT_DB_CONNECTION_DIALOG) {
                _this.openEditDbConnectionDialog(message.data.dbConnectionId);
            }
        });
    }
    DbConnectionsBus.prototype.openAddDbConnectionDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_add_db_connection_add_db_connection_component__WEBPACK_IMPORTED_MODULE_1__["AddDbConnectionComponent"], {
            width: '700px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.messagingBusService.sendMessage({ channel: _bus_hannel__WEBPACK_IMPORTED_MODULE_2__["default"].DB_CONNECTIONS_WERE_UPDATED });
        });
    };
    DbConnectionsBus.prototype.openEditDbConnectionDialog = function (dbConnectionId) {
        var _this = this;
        this.dbConnectionsService.get(dbConnectionId)
            .subscribe(function (db) {
            var dialogRef = _this.dialog.open(_edit_db_connection_edit_db_connection_component__WEBPACK_IMPORTED_MODULE_4__["EditDbConnectionComponent"], {
                width: '700px',
                data: { dbConnection: db }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                _this.messagingBusService.sendMessage({ channel: _bus_hannel__WEBPACK_IMPORTED_MODULE_2__["default"].DB_CONNECTIONS_WERE_UPDATED });
            });
        });
    };
    DbConnectionsBus = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"],
            _api__WEBPACK_IMPORTED_MODULE_5__["MessagingBusService"],
            _db_connections_service__WEBPACK_IMPORTED_MODULE_3__["DbConnectionsService"]])
    ], DbConnectionsBus);
    return DbConnectionsBus;
}());



/***/ }),

/***/ "./src/app/core/dbs/services/db-connections.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/dbs/services/db-connections.service.ts ***!
  \*************************************************************/
/*! exports provided: DbConnectionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbConnectionsService", function() { return DbConnectionsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config */ "./src/app/config.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DbConnectionsService = /** @class */ (function () {
    function DbConnectionsService(http, config) {
        this.http = http;
        this.config = config;
        this.headers = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        this.urlDbConnections = config.api + '/db-connections';
    }
    DbConnectionsService.prototype.add = function (db) {
        return this.http
            .post(this.urlDbConnections, db, this.headers);
    };
    DbConnectionsService.prototype.checkConnection = function (db) {
        return this.http
            .post(this.urlDbConnections + "/check", db, this.headers);
    };
    DbConnectionsService.prototype.getAll = function () {
        return this.http.get(this.urlDbConnections, this.headers);
    };
    DbConnectionsService.prototype.getDbTypes = function () {
        return this.http.get(this.urlDbConnections + "/types", this.headers);
    };
    DbConnectionsService.prototype.get = function (dbConnectionId) {
        return this.http
            .get(this.urlDbConnections + ("/" + dbConnectionId));
    };
    DbConnectionsService.prototype.delete = function (dbConnectionId) {
        return this.http
            .delete(this.urlDbConnections + ("/" + dbConnectionId));
    };
    DbConnectionsService.prototype.update = function (db) {
        return this.http
            .put(this.urlDbConnections + ("/" + db.id), db, this.headers);
    };
    DbConnectionsService = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _config__WEBPACK_IMPORTED_MODULE_1__["Config"]])
    ], DbConnectionsService);
    return DbConnectionsService;
}());



/***/ }),

/***/ "./src/app/core/processor/text/add-text-processor-handler/add-text-processor-handler.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/core/processor/text/add-text-processor-handler/add-text-processor-handler.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout fxLayoutAlign=\"start center\">\n  <h2 fxFlex=\"100%\" mat-dialog-title>Новый обработчик текста</h2>\n  <button mat-icon-button (click)=\"close()\">\n    <mat-icon aria-label=\"Закрыть\"\n              matTooltip=\"Закрыть окно\"\n              matTooltipPosition=\"above\">close</mat-icon>\n  </button>\n</div>\n<mat-dialog-content>\n  <text-processor-handler-form (onSubmitEvent)=\"add($event)\"\n                      submitButtonText=\"Добавить обработчик\">\n  </text-processor-handler-form>\n</mat-dialog-content>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/core/processor/text/add-text-processor-handler/add-text-processor-handler.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/core/processor/text/add-text-processor-handler/add-text-processor-handler.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcHJvY2Vzc29yL3RleHQvYWRkLXRleHQtcHJvY2Vzc29yLWhhbmRsZXIvYWRkLXRleHQtcHJvY2Vzc29yLWhhbmRsZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/core/processor/text/add-text-processor-handler/add-text-processor-handler.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/core/processor/text/add-text-processor-handler/add-text-processor-handler.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: AddTextProcessorHandlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTextProcessorHandlerComponent", function() { return AddTextProcessorHandlerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_text_processors_handlers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/text-processors-handlers.service */ "./src/app/core/processor/text/services/text-processors-handlers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddTextProcessorHandlerComponent = /** @class */ (function () {
    function AddTextProcessorHandlerComponent(dialogRef, textProcessorsHandlersService, snackBar) {
        this.dialogRef = dialogRef;
        this.textProcessorsHandlersService = textProcessorsHandlersService;
        this.snackBar = snackBar;
    }
    AddTextProcessorHandlerComponent.prototype.add = function (textProcessorHandler) {
        var _this = this;
        this.textProcessorsHandlersService.add(textProcessorHandler)
            .subscribe(function (handler) {
            _this.dialogRef.close();
            _this.snackBar.open("Обработчик добавлен", '', {
                duration: 3000,
                panelClass: 'colorGreen',
                horizontalPosition: 'right'
            });
        });
    };
    AddTextProcessorHandlerComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    AddTextProcessorHandlerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-text-processor-handler',
            template: __webpack_require__(/*! ./add-text-processor-handler.component.html */ "./src/app/core/processor/text/add-text-processor-handler/add-text-processor-handler.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./add-text-processor-handler.component.scss */ "./src/app/core/processor/text/add-text-processor-handler/add-text-processor-handler.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _services_text_processors_handlers_service__WEBPACK_IMPORTED_MODULE_2__["TextProcessorsHandlersService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], AddTextProcessorHandlerComponent);
    return AddTextProcessorHandlerComponent;
}());



/***/ }),

/***/ "./src/app/core/processor/text/edit-text-processor-handler/edit-text-processor-handler.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/core/processor/text/edit-text-processor-handler/edit-text-processor-handler.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout fxLayoutAlign=\"start center\">\n  <h2 fxFlex=\"100%\" mat-dialog-title>Редактировать: {{textProcessorHandler.name}} </h2>\n  <button mat-icon-button matTooltip=\"Закрыть окно\" (click)=\"close()\">\n    <mat-icon aria-label=\"Закрыть\"\n              matTooltipPosition=\"above\">close</mat-icon>\n  </button>\n</div>\n<mat-dialog-content *ngIf=\"textProcessorHandler\">\n\n  <text-processor-handler-form (onSubmitEvent)=\"edit($event)\"\n                      [initial]=\"textProcessorHandler\"\n                      submitButtonText=\"Сохранить изменения\">\n\n    <div class=\"ng-content-bottom-buttons\">\n      <button type=\"button\" mat-button color=\"warn\" (click)=\"delete()\">Удалить обработчик</button>\n    </div>\n\n  </text-processor-handler-form>\n</mat-dialog-content>\n\n"

/***/ }),

/***/ "./src/app/core/processor/text/edit-text-processor-handler/edit-text-processor-handler.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/core/processor/text/edit-text-processor-handler/edit-text-processor-handler.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcHJvY2Vzc29yL3RleHQvZWRpdC10ZXh0LXByb2Nlc3Nvci1oYW5kbGVyL2VkaXQtdGV4dC1wcm9jZXNzb3ItaGFuZGxlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/processor/text/edit-text-processor-handler/edit-text-processor-handler.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/core/processor/text/edit-text-processor-handler/edit-text-processor-handler.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: EditTextProcessorHandlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTextProcessorHandlerComponent", function() { return EditTextProcessorHandlerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_text_processors_handlers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/text-processors-handlers.service */ "./src/app/core/processor/text/services/text-processors-handlers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EditTextProcessorHandlerComponent = /** @class */ (function () {
    function EditTextProcessorHandlerComponent(dialogRef, data, textProcessorsHandlersService, snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.textProcessorsHandlersService = textProcessorsHandlersService;
        this.snackBar = snackBar;
        this.textProcessorHandler = data.textProcessorHandler;
    }
    EditTextProcessorHandlerComponent.prototype.edit = function (textProcessorHandler) {
        var _this = this;
        this.textProcessorsHandlersService.update(textProcessorHandler)
            .subscribe(function (command) {
            _this.snackBar.open("Изменения сохранены", '', {
                duration: 3000,
                panelClass: 'colorGreen',
                horizontalPosition: 'right'
            });
        });
    };
    EditTextProcessorHandlerComponent.prototype.delete = function () {
        var _this = this;
        console.log("delete");
        this.textProcessorsHandlersService.delete(this.textProcessorHandler.id)
            .subscribe(function (command) {
            _this.dialogRef.close();
            _this.snackBar.open("Удалено", '', {
                duration: 3000,
                panelClass: 'colorGreen',
                horizontalPosition: 'right'
            });
        });
    };
    EditTextProcessorHandlerComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    EditTextProcessorHandlerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-bot-command',
            template: __webpack_require__(/*! ./edit-text-processor-handler.component.html */ "./src/app/core/processor/text/edit-text-processor-handler/edit-text-processor-handler.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./edit-text-processor-handler.component.scss */ "./src/app/core/processor/text/edit-text-processor-handler/edit-text-processor-handler.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_text_processors_handlers_service__WEBPACK_IMPORTED_MODULE_2__["TextProcessorsHandlersService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], EditTextProcessorHandlerComponent);
    return EditTextProcessorHandlerComponent;
}());



/***/ }),

/***/ "./src/app/core/processor/text/execute-text-handler/execute-text-handler.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/core/processor/text/execute-text-handler/execute-text-handler.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <span>Обработчик: {{textProcessorHandler.name}}</span>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <mat-card fxLayout=\"column\">\n  <form [formGroup]=\"executionRequestForm\" (ngSubmit)=\"onSubmit()\" fxLayout=\"column\">\n    <mat-form-field>\n      <mat-label>Текст</mat-label>\n      <textarea matInput\n                cdkTextareaAutosize\n                cdkAutosizeMinRows=\"15\"\n                cdkAutosizeMaxRows=\"30\"\n                id=\"text\" name=\"text\"\n                formControlName=\"text\"></textarea>\n      <mat-error *ngIf=\"(executionRequestForm.controls['text'].dirty || executionRequestForm.controls['text'].touched)\n                       && executionRequestForm.controls['text'].errors && executionRequestForm.controls['text'].errors.required\">\n        Необходимое значение\n      </mat-error>\n    </mat-form-field>\n\n    <div fxLayout fxFlexAlign=\"end\" style=\"margin: 20px;\" fxLayoutGap=\"10px\">\n      <button type=\"submit\" mat-raised-button color=\"primary\"\n              [disabled]=\"executionRequestForm.invalid\">Выполнить\n      </button>\n    </div>\n\n\n\n    <div fxLayout=\"column\">\n      <mat-form-field>\n        <mat-label>Результат</mat-label>\n        <textarea matInput\n                  cdkTextareaAutosize\n                  cdkAutosizeMinRows=\"15\"\n                  cdkAutosizeMaxRows=\"30\"\n\n        > {{resultText}}</textarea>\n      </mat-form-field>\n\n    </div>\n\n  </form>\n\n\n  </mat-card>\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/core/processor/text/execute-text-handler/execute-text-handler.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/core/processor/text/execute-text-handler/execute-text-handler.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcHJvY2Vzc29yL3RleHQvZXhlY3V0ZS10ZXh0LWhhbmRsZXIvZXhlY3V0ZS10ZXh0LWhhbmRsZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/core/processor/text/execute-text-handler/execute-text-handler.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/core/processor/text/execute-text-handler/execute-text-handler.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ExecuteTextHandlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecuteTextHandlerComponent", function() { return ExecuteTextHandlerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_text_processors_handlers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/text-processors-handlers.service */ "./src/app/core/processor/text/services/text-processors-handlers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExecuteTextHandlerComponent = /** @class */ (function () {
    function ExecuteTextHandlerComponent(route, textProcessorsHandlersService, fb) {
        this.route = route;
        this.textProcessorsHandlersService = textProcessorsHandlersService;
        this.fb = fb;
        this.textProcessorHandler = route.snapshot.data['textProcessorHandler'];
        this.executionRequestForm = this.fb.group({
            text: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            handlerId: [this.textProcessorHandler.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    ExecuteTextHandlerComponent.prototype.onSubmit = function () {
        var _this = this;
        this.textProcessorsHandlersService.execute(this.executionRequestForm.value)
            .subscribe(function (executionResult) {
            _this.resultText = executionResult.result;
        });
    };
    ExecuteTextHandlerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'execute-text-handler',
            template: __webpack_require__(/*! ./execute-text-handler.component.html */ "./src/app/core/processor/text/execute-text-handler/execute-text-handler.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./execute-text-handler.component.scss */ "./src/app/core/processor/text/execute-text-handler/execute-text-handler.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_text_processors_handlers_service__WEBPACK_IMPORTED_MODULE_3__["TextProcessorsHandlersService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ExecuteTextHandlerComponent);
    return ExecuteTextHandlerComponent;
}());



/***/ }),

/***/ "./src/app/core/processor/text/models/TextProcessorAddDelimiter.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/processor/text/models/TextProcessorAddDelimiter.ts ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var TextProcessorAddDelimiter = /** @class */ (function () {
    function TextProcessorAddDelimiter() {
    }
    return TextProcessorAddDelimiter;
}());
/* harmony default export */ __webpack_exports__["default"] = (TextProcessorAddDelimiter);


/***/ }),

/***/ "./src/app/core/processor/text/models/TextProcessorFindByKey.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/processor/text/models/TextProcessorFindByKey.ts ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var TextProcessorFindByKey = /** @class */ (function () {
    function TextProcessorFindByKey() {
    }
    return TextProcessorFindByKey;
}());
/* harmony default export */ __webpack_exports__["default"] = (TextProcessorFindByKey);


/***/ }),

/***/ "./src/app/core/processor/text/models/TextProcessorFindNumberWithPrefix.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/core/processor/text/models/TextProcessorFindNumberWithPrefix.ts ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var TextProcessorFindNumberWithPrefix = /** @class */ (function () {
    function TextProcessorFindNumberWithPrefix() {
    }
    return TextProcessorFindNumberWithPrefix;
}());
/* harmony default export */ __webpack_exports__["default"] = (TextProcessorFindNumberWithPrefix);


/***/ }),

/***/ "./src/app/core/processor/text/models/TextProcessorHandler.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/processor/text/models/TextProcessorHandler.ts ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var TextProcessorHandler = /** @class */ (function () {
    function TextProcessorHandler() {
        this.processors = [];
    }
    return TextProcessorHandler;
}());
/* harmony default export */ __webpack_exports__["default"] = (TextProcessorHandler);


/***/ }),

/***/ "./src/app/core/processor/text/services/text-process-handler.resolver.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/core/processor/text/services/text-process-handler.resolver.ts ***!
  \*******************************************************************************/
/*! exports provided: TextProcessHandlerResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextProcessHandlerResolver", function() { return TextProcessHandlerResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _text_processors_handlers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-processors-handlers.service */ "./src/app/core/processor/text/services/text-processors-handlers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var TextProcessHandlerResolver = /** @class */ (function () {
    function TextProcessHandlerResolver(textProcessorsHandlersService) {
        this.textProcessorsHandlersService = textProcessorsHandlersService;
    }
    TextProcessHandlerResolver.prototype.resolve = function (route) {
        var _this = this;
        var id = route.paramMap.get('id');
        return new Promise(function (resolve, reject) {
            _this.textProcessorsHandlersService.get(id).subscribe(function (handler) {
                resolve(handler);
            });
        });
    };
    TextProcessHandlerResolver = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_text_processors_handlers_service__WEBPACK_IMPORTED_MODULE_1__["TextProcessorsHandlersService"])),
        __metadata("design:paramtypes", [_text_processors_handlers_service__WEBPACK_IMPORTED_MODULE_1__["TextProcessorsHandlersService"]])
    ], TextProcessHandlerResolver);
    return TextProcessHandlerResolver;
}());



/***/ }),

/***/ "./src/app/core/processor/text/services/text-processors-handlers.bus.ts":
/*!******************************************************************************!*\
  !*** ./src/app/core/processor/text/services/text-processors-handlers.bus.ts ***!
  \******************************************************************************/
/*! exports provided: TextProcessorsHandlersBus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextProcessorsHandlersBus", function() { return TextProcessorsHandlersBus; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _text_processors_handlers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-processors-handlers.service */ "./src/app/core/processor/text/services/text-processors-handlers.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api */ "./src/app/core/api/index.ts");
/* harmony import */ var _bus_hannel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../bus/Сhannel */ "./src/app/core/bus/Сhannel.ts");
/* harmony import */ var _add_text_processor_handler_add_text_processor_handler_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-text-processor-handler/add-text-processor-handler.component */ "./src/app/core/processor/text/add-text-processor-handler/add-text-processor-handler.component.ts");
/* harmony import */ var _edit_text_processor_handler_edit_text_processor_handler_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../edit-text-processor-handler/edit-text-processor-handler.component */ "./src/app/core/processor/text/edit-text-processor-handler/edit-text-processor-handler.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var TextProcessorsHandlersBus = /** @class */ (function () {
    function TextProcessorsHandlersBus(dialog, messagingBusService, textProcessorsHandlersService) {
        var _this = this;
        this.dialog = dialog;
        this.messagingBusService = messagingBusService;
        this.textProcessorsHandlersService = textProcessorsHandlersService;
        this.subscription = this.messagingBusService.getMessage().subscribe(function (message) {
            if (message.channel == _bus_hannel__WEBPACK_IMPORTED_MODULE_4__["default"].OPEN_ADD_TEXT_HANDLER_PROCESSOR_DIALOG) {
                _this.openAddDialog();
            }
            else if (message.channel == _bus_hannel__WEBPACK_IMPORTED_MODULE_4__["default"].OPEN_EDIT_TEXT_HANDLER_PROCESSOR_DIALOG) {
                _this.openEditDialog(message.data.textHandlerId);
            }
        });
    }
    TextProcessorsHandlersBus.prototype.openAddDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_add_text_processor_handler_add_text_processor_handler_component__WEBPACK_IMPORTED_MODULE_5__["AddTextProcessorHandlerComponent"], {
            width: '700px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.messagingBusService.sendMessage({ channel: _bus_hannel__WEBPACK_IMPORTED_MODULE_4__["default"].TEXT_HANDLER_PROCESSORS_WERE_UPDATED });
        });
    };
    TextProcessorsHandlersBus.prototype.openEditDialog = function (id) {
        var _this = this;
        this.textProcessorsHandlersService.get(id)
            .subscribe(function (textProcessorHandler) {
            var dialogRef = _this.dialog.open(_edit_text_processor_handler_edit_text_processor_handler_component__WEBPACK_IMPORTED_MODULE_6__["EditTextProcessorHandlerComponent"], {
                width: '700px',
                data: {
                    textProcessorHandler: textProcessorHandler
                }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                _this.messagingBusService.sendMessage({ channel: _bus_hannel__WEBPACK_IMPORTED_MODULE_4__["default"].TEXT_HANDLER_PROCESSORS_WERE_UPDATED });
            });
        });
    };
    TextProcessorsHandlersBus = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"],
            _api__WEBPACK_IMPORTED_MODULE_3__["MessagingBusService"],
            _text_processors_handlers_service__WEBPACK_IMPORTED_MODULE_1__["TextProcessorsHandlersService"]])
    ], TextProcessorsHandlersBus);
    return TextProcessorsHandlersBus;
}());



/***/ }),

/***/ "./src/app/core/processor/text/services/text-processors-handlers.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/core/processor/text/services/text-processors-handlers.service.ts ***!
  \**********************************************************************************/
/*! exports provided: TextProcessorsHandlersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextProcessorsHandlersService", function() { return TextProcessorsHandlersService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var TextProcessorsHandlersService = /** @class */ (function () {
    function TextProcessorsHandlersService(http, config) {
        this.http = http;
        this.config = config;
        this.headers = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        this.url = config.api + '/text/process/handlers';
    }
    TextProcessorsHandlersService.prototype.add = function (handler) {
        return this.http
            .post(this.url, handler, this.headers);
    };
    TextProcessorsHandlersService.prototype.execute = function (request) {
        return this.http
            .post(this.url + "/execute", request, this.headers);
    };
    TextProcessorsHandlersService.prototype.getAll = function () {
        return this.http.get(this.url, this.headers);
    };
    TextProcessorsHandlersService.prototype.get = function (id) {
        return this.http
            .get(this.url + ("/" + id));
    };
    TextProcessorsHandlersService.prototype.delete = function (id) {
        return this.http
            .delete(this.url + ("/" + id));
    };
    TextProcessorsHandlersService.prototype.update = function (db) {
        return this.http
            .put(this.url + ("/" + db.id), db, this.headers);
    };
    TextProcessorsHandlersService = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _config__WEBPACK_IMPORTED_MODULE_2__["Config"]])
    ], TextProcessorsHandlersService);
    return TextProcessorsHandlersService;
}());



/***/ }),

/***/ "./src/app/core/processor/text/text-processor-handler-form/text-processor-add-delimiter/text-processor-add-delimiter.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/core/processor/text/text-processor-handler-form/text-processor-add-delimiter/text-processor-add-delimiter.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-elevation-z4\" *ngIf=\"processorForm\" [formGroup]=\"processorForm\">\n  <mat-card-title>Добавить разделитель между строк</mat-card-title>\n  <mat-card-content>\n    <mat-form-field fxFlex>\n      <input matInput placeholder=\"В начало строки\"\n             id=\"prefix\" name=\"prefix\"\n             formControlName=\"prefix\"/>\n    </mat-form-field>\n\n    <mat-form-field fxFlex>\n      <input matInput placeholder=\"Разделитель строк\"\n             id=\"delimiter\" name=\"delimiter\"\n             formControlName=\"delimiter\"/>\n      <mat-error *ngIf=\"(processorForm.controls['delimiter'].dirty || processorForm.controls['delimiter'].touched)\n                       && processorForm.controls['delimiter'].errors && processorForm.controls['delimiter'].errors.required\">\n        Необходимое значение\n      </mat-error>\n    </mat-form-field>\n\n\n    <mat-form-field fxFlex>\n      <input matInput placeholder=\"В конец строки\"\n             id=\"suffix\" name=\"suffix\"\n             formControlName=\"suffix\"/>\n    </mat-form-field>\n\n\n    <mat-card-actions fxLayoutAlign=\"end\">\n      <button type=\"submit\" mat-button color=\"warn\" (click)=\"submitRemoveMe()\">\n        Убрать\n      </button>\n    </mat-card-actions>\n  </mat-card-content>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/core/processor/text/text-processor-handler-form/text-processor-add-delimiter/text-processor-add-delimiter.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/core/processor/text/text-processor-handler-form/text-processor-add-delimiter/text-processor-add-delimiter.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: TextProcessorAddDelimiterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextProcessorAddDelimiterComponent", function() { return TextProcessorAddDelimiterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_TextProcessorAddDelimiter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/TextProcessorAddDelimiter */ "./src/app/core/processor/text/models/TextProcessorAddDelimiter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TextProcessorAddDelimiterComponent = /** @class */ (function () {
    function TextProcessorAddDelimiterComponent(fb) {
        this.fb = fb;
        this.removeMeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TextProcessorAddDelimiterComponent.prototype.ngOnChanges = function (changes) {
        if (changes['processorForm']) {
            this.processorForm.addControl('prefix', this.fb.control(''));
            this.processorForm.addControl('delimiter', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
            this.processorForm.addControl('suffix', this.fb.control(''));
            this.processorForm.addControl('type', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
        }
        if (changes['processorModel']) {
            if (this.processorModel != null) {
                this.processorForm.patchValue(this.processorModel);
            }
        }
    };
    TextProcessorAddDelimiterComponent.prototype.submitRemoveMe = function () {
        this.removeMeEvent.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_TextProcessorAddDelimiter__WEBPACK_IMPORTED_MODULE_2__["default"])
    ], TextProcessorAddDelimiterComponent.prototype, "processorModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], TextProcessorAddDelimiterComponent.prototype, "processorForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TextProcessorAddDelimiterComponent.prototype, "removeMeEvent", void 0);
    TextProcessorAddDelimiterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'text-processor-add-delimiter',
            template: __webpack_require__(/*! ./text-processor-add-delimiter.component.html */ "./src/app/core/processor/text/text-processor-handler-form/text-processor-add-delimiter/text-processor-add-delimiter.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], TextProcessorAddDelimiterComponent);
    return TextProcessorAddDelimiterComponent;
}());



/***/ }),

/***/ "./src/app/core/processor/text/text-processor-handler-form/text-processor-find-by-key/text-processor-find-by-key.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/core/processor/text/text-processor-handler-form/text-processor-find-by-key/text-processor-find-by-key.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-elevation-z4\" *ngIf=\"processorForm\" [formGroup]=\"processorForm\">\n  <mat-card-title>Фильтровать строки по ключевому слову</mat-card-title>\n  <mat-card-content>\n    <mat-form-field fxFlex>\n      <input matInput placeholder=\"Ключевая фраза имени файла\"\n             id=\"key\" name=\"key\"\n             formControlName=\"key\"/>\n      <mat-error *ngIf=\"(processorForm.controls['key'].dirty || processorForm.controls['key'].touched)\n                       && processorForm.controls['key'].errors && processorForm.controls['key'].errors.required\">\n        Необходимое значение\n      </mat-error>\n    </mat-form-field>\n\n\n    <mat-card-actions fxLayoutAlign=\"end\">\n      <button type=\"submit\" mat-button color=\"warn\" (click)=\"submitRemoveMe()\">\n        Убрать\n      </button>\n    </mat-card-actions>\n\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/core/processor/text/text-processor-handler-form/text-processor-find-by-key/text-processor-find-by-key.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/core/processor/text/text-processor-handler-form/text-processor-find-by-key/text-processor-find-by-key.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: TextProcessorFindByKeyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextProcessorFindByKeyComponent", function() { return TextProcessorFindByKeyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_TextProcessorFindByKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/TextProcessorFindByKey */ "./src/app/core/processor/text/models/TextProcessorFindByKey.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TextProcessorFindByKeyComponent = /** @class */ (function () {
    function TextProcessorFindByKeyComponent(fb) {
        this.fb = fb;
        this.removeMeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TextProcessorFindByKeyComponent.prototype.ngOnChanges = function (changes) {
        if (changes['processorForm']) {
            this.processorForm.addControl('key', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
            this.processorForm.addControl('type', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
        }
        if (changes['processorModel']) {
            if (this.processorModel != null) {
                this.processorForm.patchValue(this.processorModel);
            }
        }
    };
    TextProcessorFindByKeyComponent.prototype.submitRemoveMe = function () {
        this.removeMeEvent.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_TextProcessorFindByKey__WEBPACK_IMPORTED_MODULE_2__["default"])
    ], TextProcessorFindByKeyComponent.prototype, "processorModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], TextProcessorFindByKeyComponent.prototype, "processorForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TextProcessorFindByKeyComponent.prototype, "removeMeEvent", void 0);
    TextProcessorFindByKeyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'text-processor-find-by-key',
            template: __webpack_require__(/*! ./text-processor-find-by-key.component.html */ "./src/app/core/processor/text/text-processor-handler-form/text-processor-find-by-key/text-processor-find-by-key.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], TextProcessorFindByKeyComponent);
    return TextProcessorFindByKeyComponent;
}());



/***/ }),

/***/ "./src/app/core/processor/text/text-processor-handler-form/text-processor-find-numbers-with-prefix/text-processor-find-numbers-with-prefix.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/core/processor/text/text-processor-handler-form/text-processor-find-numbers-with-prefix/text-processor-find-numbers-with-prefix.component.html ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-elevation-z4\" *ngIf=\"processorForm\" [formGroup]=\"processorForm\">\n  <mat-card-title>Поиск номеров с префиксом</mat-card-title>\n  <mat-card-content>\n    <mat-form-field fxFlex>\n      <input matInput placeholder=\"Префикс номера\"\n             id=\"prefix\" name=\"prefix\"\n             formControlName=\"prefix\"/>\n    </mat-form-field>\n    <mat-card-actions fxLayoutAlign=\"end\">\n      <button type=\"submit\" mat-button color=\"warn\" (click)=\"submitRemoveMe()\">\n        Убрать\n      </button>\n    </mat-card-actions>\n\n  </mat-card-content>\n\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/core/processor/text/text-processor-handler-form/text-processor-find-numbers-with-prefix/text-processor-find-numbers-with-prefix.component.ts":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/core/processor/text/text-processor-handler-form/text-processor-find-numbers-with-prefix/text-processor-find-numbers-with-prefix.component.ts ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: TextProcessorFindNumbersWithPrefixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextProcessorFindNumbersWithPrefixComponent", function() { return TextProcessorFindNumbersWithPrefixComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_TextProcessorFindNumberWithPrefix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/TextProcessorFindNumberWithPrefix */ "./src/app/core/processor/text/models/TextProcessorFindNumberWithPrefix.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TextProcessorFindNumbersWithPrefixComponent = /** @class */ (function () {
    function TextProcessorFindNumbersWithPrefixComponent(fb) {
        this.fb = fb;
        this.removeMeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TextProcessorFindNumbersWithPrefixComponent.prototype.ngOnChanges = function (changes) {
        if (changes['processorForm']) {
            this.processorForm.addControl('prefix', this.fb.control(''));
            this.processorForm.addControl('type', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
        }
        if (changes['processorModel']) {
            if (this.processorModel != null) {
                this.processorForm.patchValue(this.processorModel);
            }
        }
    };
    TextProcessorFindNumbersWithPrefixComponent.prototype.submitRemoveMe = function () {
        this.removeMeEvent.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_TextProcessorFindNumberWithPrefix__WEBPACK_IMPORTED_MODULE_2__["default"])
    ], TextProcessorFindNumbersWithPrefixComponent.prototype, "processorModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], TextProcessorFindNumbersWithPrefixComponent.prototype, "processorForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TextProcessorFindNumbersWithPrefixComponent.prototype, "removeMeEvent", void 0);
    TextProcessorFindNumbersWithPrefixComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'text-processor-find-numbers-with-prefix',
            template: __webpack_require__(/*! ./text-processor-find-numbers-with-prefix.component.html */ "./src/app/core/processor/text/text-processor-handler-form/text-processor-find-numbers-with-prefix/text-processor-find-numbers-with-prefix.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], TextProcessorFindNumbersWithPrefixComponent);
    return TextProcessorFindNumbersWithPrefixComponent;
}());



/***/ }),

/***/ "./src/app/core/processor/text/text-processor-handler-form/text-processor-handler-form.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/core/processor/text/text-processor-handler-form/text-processor-handler-form.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"textProcessorHandlerForm\" (ngSubmit)=\"onSubmit()\" fxLayout=\"column\">\n\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"Название обработчика\"\n           id=\"name\" name=\"name\"\n           formControlName=\"name\"/>\n    <mat-error *ngIf=\" (textProcessorHandlerForm.controls['name'].dirty || textProcessorHandlerForm.controls['name'].touched)\n                       && textProcessorHandlerForm.controls['name'].errors && textProcessorHandlerForm.controls['name'].errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n\n    <h3>Обработки</h3>\n    <div>\n      <button mat-raised-button color=\"primary\" type=\"button\"\n              [matMenuTriggerFor]=\"processingTypesMenu\">Добавить обработку\n      </button>\n      <mat-menu #processingTypesMenu=\"matMenu\">\n        <button type=\"button\" *ngFor=\"let processingType of processingTypes\"\n                (click)=\"addProcessor(processingType.type)\"\n                mat-menu-item>{{processingType.name}}\n        </button>\n      </mat-menu>\n    </div>\n    <br/>\n\n    <div *ngFor=\"let processorForm of this.textProcessorHandlerForm.controls['processors'].controls;\n     let i = index\" >\n      <text-processor-find-by-key *ngIf=\"processorForm.value.type == 'FILTER_BY_KEY'\"\n                                 [processorForm]=\"processorForm\"\n                                  [processorModel]=\"processorForm.value\"\n                                  (removeMeEvent)=\"dropProcessor(i)\">\n      </text-processor-find-by-key>\n\n      <text-processor-add-delimiter *ngIf=\"processorForm.value.type == 'ADD_DELIMITER'\"\n                                 [processorForm]=\"processorForm\"\n                                    [processorModel]=\"processorForm.value\"\n                                    (removeMeEvent)=\"dropProcessor(i)\">\n      </text-processor-add-delimiter>\n\n      <text-processor-find-numbers-with-prefix *ngIf=\"processorForm.value.type == 'FIND_NUMBERS_WITH_PREFIX'\"\n                                 [processorForm]=\"processorForm\"\n                                 [processorModel]=\"processorForm.value\"\n                                    (removeMeEvent)=\"dropProcessor(i)\">\n      </text-processor-find-numbers-with-prefix>\n\n    </div>\n\n\n  <div fxLayout fxFlexAlign=\"center\" style=\"margin: 20px;\" fxLayoutGap=\"10px\">\n    <button type=\"submit\" mat-raised-button color=\"primary\"\n            [disabled]=\"textProcessorHandlerForm.invalid\">{{submitButtonText}}</button>\n    <ng-content select=\".ng-content-bottom-buttons\"></ng-content>\n  </div>\n</form>\n\n\n"

/***/ }),

/***/ "./src/app/core/processor/text/text-processor-handler-form/text-processor-handler-form.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/core/processor/text/text-processor-handler-form/text-processor-handler-form.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcHJvY2Vzc29yL3RleHQvdGV4dC1wcm9jZXNzb3ItaGFuZGxlci1mb3JtL3RleHQtcHJvY2Vzc29yLWhhbmRsZXItZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/processor/text/text-processor-handler-form/text-processor-handler-form.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/core/processor/text/text-processor-handler-form/text-processor-handler-form.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: TextProcessorHandlerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextProcessorHandlerFormComponent", function() { return TextProcessorHandlerFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_TextProcessorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/TextProcessorHandler */ "./src/app/core/processor/text/models/TextProcessorHandler.ts");
/* harmony import */ var _services_text_processors_handlers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/text-processors-handlers.service */ "./src/app/core/processor/text/services/text-processors-handlers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TextProcessorHandlerFormComponent = /** @class */ (function () {
    function TextProcessorHandlerFormComponent(textProcessorsHandlersService, fb) {
        this.textProcessorsHandlersService = textProcessorsHandlersService;
        this.fb = fb;
        this.onSubmitEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.textProcessorHandler = new _models_TextProcessorHandler__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.processingTypes = [
            { name: 'Фильтровать строки по ключевому слову', type: 'FILTER_BY_KEY' },
            { name: 'Поиск номеров с префиксом', type: 'FIND_NUMBERS_WITH_PREFIX' },
            { name: 'Добавить разделитель между строк', type: 'ADD_DELIMITER' },
        ];
        this.initForm();
    }
    TextProcessorHandlerFormComponent.prototype.initForm = function () {
        this.textProcessorHandlerForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            processors: this.fb.array([]),
        });
    };
    TextProcessorHandlerFormComponent.prototype.onSubmit = function () {
        this.textProcessorHandler = this.textProcessorHandlerForm.value;
        this.onSubmitEvent.emit(this.textProcessorHandler);
    };
    TextProcessorHandlerFormComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['initial']) {
            if (this.initial != null) {
                this.textProcessorHandler = this.initial;
                var id = this.textProcessorHandlerForm.controls['id'];
                if (id == null) {
                    this.textProcessorHandlerForm.addControl('id', this.fb.control({}));
                }
                this.textProcessorHandlerForm.controls['id'].setValue(this.textProcessorHandler.id);
                this.textProcessorHandlerForm.controls['name'].setValue(this.textProcessorHandler.name);
                if (Array.isArray(this.textProcessorHandler.processors)) {
                    this.textProcessorHandler.processors.forEach(function (processor) {
                        _this.textProcessorHandlerForm.controls['processors']
                            .push(_this.fb.group(processor));
                    });
                }
            }
        }
    };
    TextProcessorHandlerFormComponent.prototype.addProcessor = function (type) {
        this.textProcessorHandlerForm.controls['processors'].push(this.fb.group({
            type: [type, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        }));
    };
    TextProcessorHandlerFormComponent.prototype.dropProcessor = function (index) {
        if (this.textProcessorHandlerForm.controls['processors'].length != 0) {
            this.textProcessorHandlerForm.controls['processors'].removeAt(index);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TextProcessorHandlerFormComponent.prototype, "onSubmitEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_TextProcessorHandler__WEBPACK_IMPORTED_MODULE_2__["default"])
    ], TextProcessorHandlerFormComponent.prototype, "initial", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TextProcessorHandlerFormComponent.prototype, "submitButtonText", void 0);
    TextProcessorHandlerFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'text-processor-handler-form',
            template: __webpack_require__(/*! ./text-processor-handler-form.component.html */ "./src/app/core/processor/text/text-processor-handler-form/text-processor-handler-form.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./text-processor-handler-form.component.scss */ "./src/app/core/processor/text/text-processor-handler-form/text-processor-handler-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_text_processors_handlers_service__WEBPACK_IMPORTED_MODULE_3__["TextProcessorsHandlersService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], TextProcessorHandlerFormComponent);
    return TextProcessorHandlerFormComponent;
}());



/***/ }),

/***/ "./src/app/core/processor/text/text-processor-handlers-list/text-processor-item/text-processor-item.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/core/processor/text/text-processor-handlers-list/text-processor-item/text-processor-item.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list-item style=\"background-color: #fff;\">\n  <span matLine>\n    <a [routerLink]=\"textProcessorHandler.id+'/execute'\" >  <b>{{textProcessorHandler.name}}</b>\n    </a>\n  </span>\n  <button mat-icon-button (click)=\"edit()\">\n    <mat-icon aria-label=\"Редактировать\">edit</mat-icon>\n  </button>\n</mat-list-item>\n<mat-divider></mat-divider>\n"

/***/ }),

/***/ "./src/app/core/processor/text/text-processor-handlers-list/text-processor-item/text-processor-item.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/core/processor/text/text-processor-handlers-list/text-processor-item/text-processor-item.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padding0 {\n  padding: 0 !important; }\n\nmat-card-title {\n  margin: 0 0 0 16px; }\n\n.semafor {\n  font-size: 17px;\n  color: #1acb1e; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVrc2FuZHJzZXJkdWtvdi9wcm9qZWN0cy9zdXBwb3J0LXRlcm1pbmFsLWRldi9zdXBwb3J0LXRlcm1pbmFsL3VpL3NyYy9hcHAvY29yZS9wcm9jZXNzb3IvdGV4dC90ZXh0LXByb2Nlc3Nvci1oYW5kbGVycy1saXN0L3RleHQtcHJvY2Vzc29yLWl0ZW0vdGV4dC1wcm9jZXNzb3ItaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFvQixFQUFBOztBQUd0QjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3Byb2Nlc3Nvci90ZXh0L3RleHQtcHJvY2Vzc29yLWhhbmRsZXJzLWxpc3QvdGV4dC1wcm9jZXNzb3ItaXRlbS90ZXh0LXByb2Nlc3Nvci1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZGRpbmcwe1xuICBwYWRkaW5nOjAgIWltcG9ydGFudDtcbn1cblxubWF0LWNhcmQtdGl0bGV7XG4gIG1hcmdpbjogMCAwIDAgMTZweDtcbn1cblxuLnNlbWFmb3J7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICMxYWNiMWU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/core/processor/text/text-processor-handlers-list/text-processor-item/text-processor-item.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/core/processor/text/text-processor-handlers-list/text-processor-item/text-processor-item.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: TextProcessorHandlerItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextProcessorHandlerItemComponent", function() { return TextProcessorHandlerItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_TextProcessorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/TextProcessorHandler */ "./src/app/core/processor/text/models/TextProcessorHandler.ts");
/* harmony import */ var _bus_hannel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../bus/Сhannel */ "./src/app/core/bus/Сhannel.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api */ "./src/app/core/api/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TextProcessorHandlerItemComponent = /** @class */ (function () {
    function TextProcessorHandlerItemComponent(messagingBusService) {
        this.messagingBusService = messagingBusService;
    }
    TextProcessorHandlerItemComponent.prototype.edit = function () {
        this.messagingBusService.sendMessage({ channel: _bus_hannel__WEBPACK_IMPORTED_MODULE_2__["default"].OPEN_EDIT_TEXT_HANDLER_PROCESSOR_DIALOG,
            data: { textHandlerId: this.textProcessorHandler.id } });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_TextProcessorHandler__WEBPACK_IMPORTED_MODULE_1__["default"])
    ], TextProcessorHandlerItemComponent.prototype, "textProcessorHandler", void 0);
    TextProcessorHandlerItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'text-processor-handler-item',
            template: __webpack_require__(/*! ./text-processor-item.component.html */ "./src/app/core/processor/text/text-processor-handlers-list/text-processor-item/text-processor-item.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./text-processor-item.component.scss */ "./src/app/core/processor/text/text-processor-handlers-list/text-processor-item/text-processor-item.component.scss")]
        }),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_3__["MessagingBusService"]])
    ], TextProcessorHandlerItemComponent);
    return TextProcessorHandlerItemComponent;
}());



/***/ }),

/***/ "./src/app/core/processor/text/text-processor-handlers-list/text-processors-handlers-list.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/core/processor/text/text-processor-handlers-list/text-processors-handlers-list.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <span>Список обработчиков текста</span>\n      <span fxFlex=\"100%\"></span>\n      <span fxFlex=\"100%\" fxLayoutAlign=\"end\">\n        <button mat-button (click)=\"add()\">\n          <mat-icon aria-label=\"Добавить обработчик\">playlist_add</mat-icon>\n          Добавить обработчик\n        </button>\n      </span>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <mat-list>\n    <text-processor-handler-item *ngFor=\"let textProcessorHandler of textProcessorHandlers\"\n                   [textProcessorHandler]=\"textProcessorHandler\"></text-processor-handler-item>\n  </mat-list>\n</div>\n"

/***/ }),

/***/ "./src/app/core/processor/text/text-processor-handlers-list/text-processors-handlers-list.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/core/processor/text/text-processor-handlers-list/text-processors-handlers-list.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcHJvY2Vzc29yL3RleHQvdGV4dC1wcm9jZXNzb3ItaGFuZGxlcnMtbGlzdC90ZXh0LXByb2Nlc3NvcnMtaGFuZGxlcnMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/processor/text/text-processor-handlers-list/text-processors-handlers-list.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/core/processor/text/text-processor-handlers-list/text-processors-handlers-list.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: TextProcessorsHandlersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextProcessorsHandlersListComponent", function() { return TextProcessorsHandlersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_text_processors_handlers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/text-processors-handlers.service */ "./src/app/core/processor/text/services/text-processors-handlers.service.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api */ "./src/app/core/api/index.ts");
/* harmony import */ var _bus_hannel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../bus/Сhannel */ "./src/app/core/bus/Сhannel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TextProcessorsHandlersListComponent = /** @class */ (function () {
    function TextProcessorsHandlersListComponent(messagingBusService, textProcessorsHandlersService) {
        var _this = this;
        this.messagingBusService = messagingBusService;
        this.textProcessorsHandlersService = textProcessorsHandlersService;
        this.getList();
        this.textProcessorHandlersSubscriprion = this.messagingBusService.getMessage().subscribe(function (message) {
            if (message.channel == _bus_hannel__WEBPACK_IMPORTED_MODULE_3__["default"].TEXT_HANDLER_PROCESSORS_WERE_UPDATED) {
                _this.getList();
            }
        });
    }
    TextProcessorsHandlersListComponent.prototype.ngOnDestroy = function () {
        this.textProcessorHandlersSubscriprion.unsubscribe();
    };
    TextProcessorsHandlersListComponent.prototype.add = function () {
        this.messagingBusService.sendMessage({ channel: _bus_hannel__WEBPACK_IMPORTED_MODULE_3__["default"].OPEN_ADD_TEXT_HANDLER_PROCESSOR_DIALOG });
    };
    TextProcessorsHandlersListComponent.prototype.getList = function () {
        var _this = this;
        this.textProcessorsHandlersService.getAll().subscribe(function (handlers) {
            _this.textProcessorHandlers = handlers;
        });
    };
    TextProcessorsHandlersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'text-processors-list',
            template: __webpack_require__(/*! ./text-processors-handlers-list.component.html */ "./src/app/core/processor/text/text-processor-handlers-list/text-processors-handlers-list.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./text-processors-handlers-list.component.scss */ "./src/app/core/processor/text/text-processor-handlers-list/text-processors-handlers-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_2__["MessagingBusService"],
            _services_text_processors_handlers_service__WEBPACK_IMPORTED_MODULE_1__["TextProcessorsHandlersService"]])
    ], TextProcessorsHandlersListComponent);
    return TextProcessorsHandlersListComponent;
}());



/***/ }),

/***/ "./src/app/core/settings/settings.component.html":
/*!*******************************************************!*\
  !*** ./src/app/core/settings/settings.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <span>Настройки</span>\n      <span fxFlex=\"100%\"></span>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <mat-card *ngIf=\"version != null\">\n    <mat-card-title>Версия</mat-card-title>\n    <mat-card-content>\n      {{version}}\n    </mat-card-content>\n  </mat-card>\n\n  <mat-card>\n    <mat-card-title>Автоматическое обновление</mat-card-title>\n    <mat-card-content>\n      Вы можете принудительно запустить процесс обновления.\n      Приложение попытается скачать новую версию и самостоятельно обновиться.\n      Во время процесса обновления, приложение временно будет недоступно.\n      Есть <b>риск</b>, что приложение <b>НЕ</b> сможет пройти все шаги обновления и его <b>придется запустить в ручную</b>\n    </mat-card-content>\n    <mat-card-actions fxLayoutAlign=\"end\">\n      <button mat-raised-button color=\"primary\" (click)=\"update()\" fxLayoutAlign=\"start\">\n        <mat-icon aria-label=\"Обновить\">system_update_alt</mat-icon>\n        Запустить обновление\n      </button>\n    </mat-card-actions>\n  </mat-card>\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/core/settings/settings.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/core/settings/settings.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/core/settings/settings.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/settings/settings.component.ts ***!
  \*****************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.service */ "./src/app/core/settings/settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(settingsService) {
        var _this = this;
        this.settingsService = settingsService;
        settingsService.info().subscribe(function (res) {
            _this.version = res.build.version;
        });
    }
    SettingsComponent.prototype.update = function () {
        this.settingsService.updateApplication().subscribe(function (res) {
            console.log(res);
        });
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'settings-component',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/core/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/core/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/core/settings/settings.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/settings/settings.service.ts ***!
  \***************************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var SettingsService = /** @class */ (function () {
    function SettingsService(http, config) {
        this.http = http;
        this.config = config;
        this.headers = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        this.url = config.api;
        this.actuator = config.root + '/actuator/info';
    }
    SettingsService.prototype.updateApplication = function () {
        return this.http
            .post(this.url + '/run-auto-update', {}, this.headers);
    };
    SettingsService.prototype.info = function () {
        return this.http.get(this.actuator, this.headers);
    };
    SettingsService = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _config__WEBPACK_IMPORTED_MODULE_1__["Config"]])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/app/core/web-users/add-web-user/add-web-user.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/core/web-users/add-web-user/add-web-user.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout fxLayoutAlign=\"start center\">\n  <h2 fxFlex=\"100%\" mat-dialog-title>Новый веб-пользователь</h2>\n  <button mat-icon-button (click)=\"close()\">\n    <mat-icon aria-label=\"Закрыть\"\n              matTooltip=\"Закрыть окно\"\n              matTooltipPosition=\"above\">close</mat-icon>\n  </button>\n</div>\n<mat-dialog-content>\n  <web-user-form (onSubmitEvent)=\"addWebUser($event)\"\n                      submitButtonText=\"Добавить веб-пользователя\">\n  </web-user-form>\n</mat-dialog-content>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/core/web-users/add-web-user/add-web-user.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/core/web-users/add-web-user/add-web-user.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvd2ViLXVzZXJzL2FkZC13ZWItdXNlci9hZGQtd2ViLXVzZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/core/web-users/add-web-user/add-web-user.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/web-users/add-web-user/add-web-user.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddWebUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWebUserComponent", function() { return AddWebUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_web_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/web-users.service */ "./src/app/core/web-users/services/web-users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddWebUserComponent = /** @class */ (function () {
    function AddWebUserComponent(dialogRef, webUsersService, snackBar) {
        this.dialogRef = dialogRef;
        this.webUsersService = webUsersService;
        this.snackBar = snackBar;
    }
    AddWebUserComponent.prototype.addWebUser = function (webUser) {
        var _this = this;
        this.webUsersService.add(webUser)
            .subscribe(function (user) {
            _this.dialogRef.close();
            _this.snackBar.open("Пользователь добавлен", '', {
                duration: 3000,
                panelClass: 'colorGreen',
                horizontalPosition: 'right'
            });
        });
    };
    AddWebUserComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    AddWebUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-web-user',
            template: __webpack_require__(/*! ./add-web-user.component.html */ "./src/app/core/web-users/add-web-user/add-web-user.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./add-web-user.component.scss */ "./src/app/core/web-users/add-web-user/add-web-user.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _services_web_users_service__WEBPACK_IMPORTED_MODULE_2__["WebUsersService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], AddWebUserComponent);
    return AddWebUserComponent;
}());



/***/ }),

/***/ "./src/app/core/web-users/edit-web-user/edit-web-user.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/core/web-users/edit-web-user/edit-web-user.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout fxLayoutAlign=\"start center\">\n  <h2 fxFlex=\"100%\" mat-dialog-title>Редактировать: {{webUser.name}} </h2>\n  <button mat-icon-button (click)=\"close()\">\n    <mat-icon aria-label=\"Закрыть\"\n              matTooltip=\"Закрыть окно\"\n              matTooltipPosition=\"above\">close</mat-icon>\n  </button>\n</div>\n<mat-dialog-content *ngIf=\"webUser\">\n  <web-user-form (onSubmitEvent)=\"editWebUser($event)\"\n                      [initial]=\"webUser\"\n                      submitButtonText=\"Сохранить изменения\">\n    <div class=\"ng-content-bottom-buttons\">\n      <button type=\"button\" mat-button color=\"warn\" (click)=\"deleteWebUser()\">Удалить пользователя</button>\n    </div>\n\n  </web-user-form>\n</mat-dialog-content>\n\n"

/***/ }),

/***/ "./src/app/core/web-users/edit-web-user/edit-web-user.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/core/web-users/edit-web-user/edit-web-user.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvd2ViLXVzZXJzL2VkaXQtd2ViLXVzZXIvZWRpdC13ZWItdXNlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/web-users/edit-web-user/edit-web-user.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/web-users/edit-web-user/edit-web-user.component.ts ***!
  \*************************************************************************/
/*! exports provided: EditWebUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWebUserComponent", function() { return EditWebUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_web_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/web-users.service */ "./src/app/core/web-users/services/web-users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EditWebUserComponent = /** @class */ (function () {
    function EditWebUserComponent(dialogRef, data, webUsersService, snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.webUsersService = webUsersService;
        this.snackBar = snackBar;
        this.webUser = data.dbConnection;
    }
    EditWebUserComponent.prototype.editWebUser = function (webUser) {
        var _this = this;
        this.webUsersService.update(webUser)
            .subscribe(function (user) {
            _this.snackBar.open("Изменения сохранены", '', {
                duration: 3000,
                panelClass: 'colorGreen',
                horizontalPosition: 'right'
            });
        });
    };
    EditWebUserComponent.prototype.deleteWebUser = function () {
        var _this = this;
        this.webUsersService.delete(this.webUser.id)
            .subscribe(function (user) {
            _this.dialogRef.close();
            _this.snackBar.open("Пользователь удален", '', {
                duration: 3000,
                panelClass: 'colorGreen',
                horizontalPosition: 'right'
            });
        });
        ;
    };
    EditWebUserComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    EditWebUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-web-user',
            template: __webpack_require__(/*! ./edit-web-user.component.html */ "./src/app/core/web-users/edit-web-user/edit-web-user.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./edit-web-user.component.scss */ "./src/app/core/web-users/edit-web-user/edit-web-user.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_web_users_service__WEBPACK_IMPORTED_MODULE_2__["WebUsersService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], EditWebUserComponent);
    return EditWebUserComponent;
}());



/***/ }),

/***/ "./src/app/core/web-users/models/WebUser.ts":
/*!**************************************************!*\
  !*** ./src/app/core/web-users/models/WebUser.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var WebUser = /** @class */ (function () {
    function WebUser() {
    }
    return WebUser;
}());
/* harmony default export */ __webpack_exports__["default"] = (WebUser);


/***/ }),

/***/ "./src/app/core/web-users/services/web-users.bus.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/web-users/services/web-users.bus.ts ***!
  \**********************************************************/
/*! exports provided: WebUsersBus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebUsersBus", function() { return WebUsersBus; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_web_user_add_web_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add-web-user/add-web-user.component */ "./src/app/core/web-users/add-web-user/add-web-user.component.ts");
/* harmony import */ var _bus_hannel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../bus/Сhannel */ "./src/app/core/bus/Сhannel.ts");
/* harmony import */ var _edit_web_user_edit_web_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../edit-web-user/edit-web-user.component */ "./src/app/core/web-users/edit-web-user/edit-web-user.component.ts");
/* harmony import */ var _web_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web-users.service */ "./src/app/core/web-users/services/web-users.service.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api */ "./src/app/core/api/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var WebUsersBus = /** @class */ (function () {
    function WebUsersBus(dialog, messagingBusService, webUsersService) {
        var _this = this;
        this.dialog = dialog;
        this.messagingBusService = messagingBusService;
        this.webUsersService = webUsersService;
        this.subscription = this.messagingBusService.getMessage().subscribe(function (message) {
            if (message.channel == _bus_hannel__WEBPACK_IMPORTED_MODULE_2__["default"].OPEN_ADD_WEB_USER_DIALOG) {
                _this.openAddUserDialog();
            }
            else if (message.channel == _bus_hannel__WEBPACK_IMPORTED_MODULE_2__["default"].OPEN_EDIT_WEB_USER_DIALOG) {
                _this.openEditUserDialog(message.data.webUserId);
            }
        });
    }
    WebUsersBus.prototype.openAddUserDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_add_web_user_add_web_user_component__WEBPACK_IMPORTED_MODULE_1__["AddWebUserComponent"], {
            width: '700px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.messagingBusService.sendMessage({ channel: _bus_hannel__WEBPACK_IMPORTED_MODULE_2__["default"].WEB_USERS_WERE_UPDATED });
        });
    };
    WebUsersBus.prototype.openEditUserDialog = function (webUserId) {
        var _this = this;
        this.webUsersService.get(webUserId)
            .subscribe(function (db) {
            var dialogRef = _this.dialog.open(_edit_web_user_edit_web_user_component__WEBPACK_IMPORTED_MODULE_3__["EditWebUserComponent"], {
                width: '700px',
                data: { dbConnection: db }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                _this.messagingBusService.sendMessage({ channel: _bus_hannel__WEBPACK_IMPORTED_MODULE_2__["default"].WEB_USERS_WERE_UPDATED });
            });
        });
    };
    WebUsersBus = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"],
            _api__WEBPACK_IMPORTED_MODULE_5__["MessagingBusService"],
            _web_users_service__WEBPACK_IMPORTED_MODULE_4__["WebUsersService"]])
    ], WebUsersBus);
    return WebUsersBus;
}());



/***/ }),

/***/ "./src/app/core/web-users/services/web-users.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/web-users/services/web-users.service.ts ***!
  \**************************************************************/
/*! exports provided: WebUsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebUsersService", function() { return WebUsersService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config */ "./src/app/config.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var WebUsersService = /** @class */ (function () {
    function WebUsersService(http, config) {
        this.http = http;
        this.config = config;
        this.headers = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        this.urlWebUsers = config.api + '/web-users';
    }
    WebUsersService.prototype.add = function (db) {
        return this.http
            .post(this.urlWebUsers, db, this.headers);
    };
    WebUsersService.prototype.getAll = function () {
        return this.http.get(this.urlWebUsers, this.headers);
    };
    WebUsersService.prototype.get = function (userId) {
        return this.http
            .get(this.urlWebUsers + ("/" + userId));
    };
    WebUsersService.prototype.delete = function (userId) {
        return this.http
            .delete(this.urlWebUsers + ("/" + userId));
    };
    WebUsersService.prototype.update = function (db) {
        return this.http
            .put(this.urlWebUsers + ("/" + db.id), db, this.headers);
    };
    WebUsersService = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _config__WEBPACK_IMPORTED_MODULE_1__["Config"]])
    ], WebUsersService);
    return WebUsersService;
}());



/***/ }),

/***/ "./src/app/core/web-users/web-user-form/web-user-form.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/core/web-users/web-user-form/web-user-form.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" #webUserForm=\"ngForm\" fxLayout=\"column\">\n\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"Фаимилия Имя пользователя\"\n           id=\"name\" name=\"name\"\n           [(ngModel)]=\"webUser.name\"\n           required\n           #name=\"ngModel\"/>\n    <mat-error *ngIf=\"name.errors && (name.dirty || name.touched) && name.errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"Login пользователя\"\n           id=\"username\" name=\"username\"\n           [(ngModel)]=\"webUser.username\"\n           required\n           #username=\"ngModel\"/>\n    <mat-error *ngIf=\"username.errors && (username.dirty || username.touched) && username.errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"Пароль\"\n           [type]=\"show ?'text':'password'\"\n           id=\"password\" name=\"password\"\n           [(ngModel)]=\"webUser.password\"\n           required #password=\"ngModel\"/>\n    <mat-icon matSuffix (click)=\"show = !show\">{{show ?'visibility_off': 'visibility' }}</mat-icon>\n    <mat-error *ngIf=\"password.errors && (password.dirty || password.touched) && password.errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n  <div fxLayout fxFlexAlign=\"center\" style=\"margin: 20px;\" fxLayoutGap=\"10px\">\n    <button type=\"submit\" mat-raised-button color=\"primary\"\n              [disabled]=\"!webUserForm.form.valid\">{{submitButtonText}}</button>\n    <ng-content select=\".ng-content-bottom-buttons\"></ng-content>\n  </div>\n\n</form>\n\n\n"

/***/ }),

/***/ "./src/app/core/web-users/web-user-form/web-user-form.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/core/web-users/web-user-form/web-user-form.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvd2ViLXVzZXJzL3dlYi11c2VyLWZvcm0vd2ViLXVzZXItZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/web-users/web-user-form/web-user-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/web-users/web-user-form/web-user-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: WebUserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebUserFormComponent", function() { return WebUserFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_WebUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/WebUser */ "./src/app/core/web-users/models/WebUser.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebUserFormComponent = /** @class */ (function () {
    function WebUserFormComponent() {
        this.onSubmitEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.webUser = new _models_WebUser__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    WebUserFormComponent.prototype.onSubmit = function () {
        this.onSubmitEvent.emit(this.webUser);
    };
    WebUserFormComponent.prototype.ngOnChanges = function (changes) {
        if (changes['initial']) {
            if (this.initial != null && this.initial != undefined) {
                this.webUser = this.initial;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WebUserFormComponent.prototype, "onSubmitEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_WebUser__WEBPACK_IMPORTED_MODULE_1__["default"])
    ], WebUserFormComponent.prototype, "initial", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WebUserFormComponent.prototype, "submitButtonText", void 0);
    WebUserFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'web-user-form',
            template: __webpack_require__(/*! ./web-user-form.component.html */ "./src/app/core/web-users/web-user-form/web-user-form.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./web-user-form.component.scss */ "./src/app/core/web-users/web-user-form/web-user-form.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WebUserFormComponent);
    return WebUserFormComponent;
}());



/***/ }),

/***/ "./src/app/core/web-users/web-users-list/web-user-item/web-user-item.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/core/web-users/web-users-list/web-user-item/web-user-item.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list-item style=\"background-color: #fff;\">\n  <span matLine> <b>{{webUser.name}}</b></span>\n  <button mat-icon-button (click)=\"edit()\">\n    <mat-icon aria-label=\"Редактировать\">edit</mat-icon>\n  </button>\n</mat-list-item>\n<mat-divider></mat-divider>\n"

/***/ }),

/***/ "./src/app/core/web-users/web-users-list/web-user-item/web-user-item.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/core/web-users/web-users-list/web-user-item/web-user-item.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padding0 {\n  padding: 0 !important; }\n\nmat-card-title {\n  margin: 0 0 0 16px; }\n\n.semafor {\n  font-size: 17px;\n  color: #1acb1e; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVrc2FuZHJzZXJkdWtvdi9wcm9qZWN0cy9zdXBwb3J0LXRlcm1pbmFsLWRldi9zdXBwb3J0LXRlcm1pbmFsL3VpL3NyYy9hcHAvY29yZS93ZWItdXNlcnMvd2ViLXVzZXJzLWxpc3Qvd2ViLXVzZXItaXRlbS93ZWItdXNlci1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQW9CLEVBQUE7O0FBR3RCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvd2ViLXVzZXJzL3dlYi11c2Vycy1saXN0L3dlYi11c2VyLWl0ZW0vd2ViLXVzZXItaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRkaW5nMHtcbiAgcGFkZGluZzowICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1jYXJkLXRpdGxle1xuICBtYXJnaW46IDAgMCAwIDE2cHg7XG59XG5cbi5zZW1hZm9ye1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjMWFjYjFlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/core/web-users/web-users-list/web-user-item/web-user-item.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/core/web-users/web-users-list/web-user-item/web-user-item.component.ts ***!
  \****************************************************************************************/
/*! exports provided: WebUserItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebUserItemComponent", function() { return WebUserItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bus_hannel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../bus/Сhannel */ "./src/app/core/bus/Сhannel.ts");
/* harmony import */ var _models_WebUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/WebUser */ "./src/app/core/web-users/models/WebUser.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api */ "./src/app/core/api/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebUserItemComponent = /** @class */ (function () {
    function WebUserItemComponent(messagingBusService) {
        this.messagingBusService = messagingBusService;
    }
    WebUserItemComponent.prototype.edit = function () {
        this.messagingBusService.sendMessage({ channel: _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].OPEN_EDIT_WEB_USER_DIALOG, data: { webUserId: this.webUser.id } });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_WebUser__WEBPACK_IMPORTED_MODULE_2__["default"])
    ], WebUserItemComponent.prototype, "webUser", void 0);
    WebUserItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'web-user-item',
            template: __webpack_require__(/*! ./web-user-item.component.html */ "./src/app/core/web-users/web-users-list/web-user-item/web-user-item.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./web-user-item.component.scss */ "./src/app/core/web-users/web-users-list/web-user-item/web-user-item.component.scss")]
        }),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_3__["MessagingBusService"]])
    ], WebUserItemComponent);
    return WebUserItemComponent;
}());



/***/ }),

/***/ "./src/app/core/web-users/web-users-list/web-users-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/core/web-users/web-users-list/web-users-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <span>Список веб пользователей</span>\n      <span fxFlex=\"100%\"></span>\n      <span fxFlex=\"100%\" fxLayoutAlign=\"end\">\n        <button mat-button (click)=\"add()\">\n          <mat-icon aria-label=\"Добавить веб-пользователя\">playlist_add</mat-icon>\n          Добавить веб-пользователя\n        </button>\n      </span>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <mat-list>\n    <web-user-item *ngFor=\"let webUser of webUsersList\" [webUser]=\"webUser\"></web-user-item>\n  </mat-list>\n</div>\n"

/***/ }),

/***/ "./src/app/core/web-users/web-users-list/web-users-list.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/core/web-users/web-users-list/web-users-list.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvd2ViLXVzZXJzL3dlYi11c2Vycy1saXN0L3dlYi11c2Vycy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/web-users/web-users-list/web-users-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/core/web-users/web-users-list/web-users-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: WebUsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebUsersListComponent", function() { return WebUsersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bus_hannel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bus/Сhannel */ "./src/app/core/bus/Сhannel.ts");
/* harmony import */ var _services_web_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/web-users.service */ "./src/app/core/web-users/services/web-users.service.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api */ "./src/app/core/api/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebUsersListComponent = /** @class */ (function () {
    function WebUsersListComponent(messagingBusService, webUsersService) {
        var _this = this;
        this.messagingBusService = messagingBusService;
        this.webUsersService = webUsersService;
        this.getDbsList();
        this.webUsersListSubscription = this.messagingBusService.getMessage().subscribe(function (message) {
            if (message.channel == _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].WEB_USERS_WERE_UPDATED) {
                _this.getDbsList();
            }
        });
    }
    WebUsersListComponent.prototype.ngOnDestroy = function () {
        this.webUsersListSubscription.unsubscribe();
    };
    WebUsersListComponent.prototype.add = function () {
        this.messagingBusService.sendMessage({ channel: _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].OPEN_ADD_WEB_USER_DIALOG });
    };
    WebUsersListComponent.prototype.getDbsList = function () {
        var _this = this;
        this.webUsersService.getAll().subscribe(function (users) {
            _this.webUsersList = users;
        });
    };
    WebUsersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'web-users-list',
            template: __webpack_require__(/*! ./web-users-list.component.html */ "./src/app/core/web-users/web-users-list/web-users-list.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./web-users-list.component.scss */ "./src/app/core/web-users/web-users-list/web-users-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_3__["MessagingBusService"],
            _services_web_users_service__WEBPACK_IMPORTED_MODULE_2__["WebUsersService"]])
    ], WebUsersListComponent);
    return WebUsersListComponent;
}());



/***/ }),

/***/ "./src/app/data-forms/bus/Сhannel.ts":
/*!*******************************************!*\
  !*** ./src/app/data-forms/bus/Сhannel.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Channel = /** @class */ (function () {
    function Channel() {
    }
    Channel.OPEN_ADD_DATA_FORM_DIALOG = "OPEN_ADD_DATA_FORM_DIALOG";
    Channel.OPEN_EDIT_DATA_FORM_DIALOG = "OPEN_EDIT_DATA_FORM_DIALOG";
    Channel.DATA_FORMS_WERE_UPDATED = "DATA_FORMS_WERE_UPDATED";
    Channel.DB_CONNECTIONS_WERE_UPDATED = "DB_CONNECTIONS_WERE_UPDATED";
    return Channel;
}());
/* harmony default export */ __webpack_exports__["default"] = (Channel);


/***/ }),

/***/ "./src/app/data-forms/data-forms-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/data-forms/data-forms-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: DataFormsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFormsRoutingModule", function() { return DataFormsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forms_execute_data_form_execute_data_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms/execute-data-form/execute-data-form.component */ "./src/app/data-forms/forms/execute-data-form/execute-data-form.component.ts");
/* harmony import */ var _forms_services_data_form_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms/services/data-form.resolver */ "./src/app/data-forms/forms/services/data-form.resolver.ts");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../main.component */ "./src/app/main.component.ts");
/* harmony import */ var _login_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/auth.guard */ "./src/app/login/auth.guard.ts");
/* harmony import */ var _forms_data_forms_list_data_forms_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms/data-forms-list/data-forms-list.component */ "./src/app/data-forms/forms/data-forms-list/data-forms-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
        canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        children: [
            { path: 'data-forms', component: _forms_data_forms_list_data_forms_list_component__WEBPACK_IMPORTED_MODULE_6__["DataFormsListComponent"],
                children: [
                    { path: ':formId/execute',
                        resolve: { dataForm: _forms_services_data_form_resolver__WEBPACK_IMPORTED_MODULE_3__["DataFormResolver"] },
                        component: _forms_execute_data_form_execute_data_form_component__WEBPACK_IMPORTED_MODULE_2__["ExecuteDataFormComponent"] }
                ]
            }
        ]
    }
];
var DataFormsRoutingModule = /** @class */ (function () {
    function DataFormsRoutingModule() {
    }
    DataFormsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DataFormsRoutingModule);
    return DataFormsRoutingModule;
}());



/***/ }),

/***/ "./src/app/data-forms/data-forms.module.ts":
/*!*************************************************!*\
  !*** ./src/app/data-forms/data-forms.module.ts ***!
  \*************************************************/
/*! exports provided: DataFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFormsModule", function() { return DataFormsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _forms_data_forms_list_data_forms_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms/data-forms-list/data-forms-list.component */ "./src/app/data-forms/forms/data-forms-list/data-forms-list.component.ts");
/* harmony import */ var _forms_services_data_forms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms/services/data-forms.service */ "./src/app/data-forms/forms/services/data-forms.service.ts");
/* harmony import */ var _data_forms_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-forms-routing.module */ "./src/app/data-forms/data-forms-routing.module.ts");
/* harmony import */ var _forms_data_forms_list_data_form_item_data_form_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms/data-forms-list/data-form-item/data-form-item.component */ "./src/app/data-forms/forms/data-forms-list/data-form-item/data-form-item.component.ts");
/* harmony import */ var _forms_add_data_form_add_data_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms/add-data-form/add-data-form.component */ "./src/app/data-forms/forms/add-data-form/add-data-form.component.ts");
/* harmony import */ var _forms_edit_data_form_edit_data_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms/edit-data-form/edit-data-form.component */ "./src/app/data-forms/forms/edit-data-form/edit-data-form.component.ts");
/* harmony import */ var _forms_services_data_forms_bus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forms/services/data-forms.bus */ "./src/app/data-forms/forms/services/data-forms.bus.ts");
/* harmony import */ var _forms_data_form_form_data_form_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forms/data-form-form/data-form-form.component */ "./src/app/data-forms/forms/data-form-form/data-form-form.component.ts");
/* harmony import */ var _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ctrl/ngx-codemirror */ "./node_modules/@ctrl/ngx-codemirror/fesm5/ctrl-ngx-codemirror.js");
/* harmony import */ var _forms_data_form_form_parameters_data_form_parameters_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forms/data-form-form/parameters/data-form-parameters.component */ "./src/app/data-forms/forms/data-form-form/parameters/data-form-parameters.component.ts");
/* harmony import */ var _forms_data_form_form_parameters_data_form_parameter_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forms/data-form-form/parameters/data-form-parameter-item.component */ "./src/app/data-forms/forms/data-form-form/parameters/data-form-parameter-item.component.ts");
/* harmony import */ var _forms_data_form_form_steps_data_form_step_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forms/data-form-form/steps/data-form-step-item.component */ "./src/app/data-forms/forms/data-form-form/steps/data-form-step-item.component.ts");
/* harmony import */ var _forms_data_form_form_steps_data_form_steps_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./forms/data-form-form/steps/data-form-steps.component */ "./src/app/data-forms/forms/data-form-form/steps/data-form-steps.component.ts");
/* harmony import */ var _forms_execute_data_form_execute_data_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./forms/execute-data-form/execute-data-form.component */ "./src/app/data-forms/forms/execute-data-form/execute-data-form.component.ts");
/* harmony import */ var _forms_services_data_form_resolver__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./forms/services/data-form.resolver */ "./src/app/data-forms/forms/services/data-form.resolver.ts");
/* harmony import */ var _forms_execute_data_form_parameters_values_data_form_execute_parameters_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./forms/execute-data-form/parameters-values/data-form-execute-parameters.component */ "./src/app/data-forms/forms/execute-data-form/parameters-values/data-form-execute-parameters.component.ts");
/* harmony import */ var _forms_execute_data_form_parameters_values_string_parameter_field_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./forms/execute-data-form/parameters-values/string-parameter-field.component */ "./src/app/data-forms/forms/execute-data-form/parameters-values/string-parameter-field.component.ts");
/* harmony import */ var _forms_data_form_form_results_data_form_results_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./forms/data-form-form/results/data-form-results.component */ "./src/app/data-forms/forms/data-form-form/results/data-form-results.component.ts");
/* harmony import */ var _forms_data_form_form_results_types_data_form_table_results_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./forms/data-form-form/results/types/data-form-table-results.component */ "./src/app/data-forms/forms/data-form-form/results/types/data-form-table-results.component.ts");
/* harmony import */ var _forms_execute_data_form_results_data_form_view_results_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./forms/execute-data-form/results/data-form-view-results.component */ "./src/app/data-forms/forms/execute-data-form/results/data-form-view-results.component.ts");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../angular.material.module */ "./src/app/angular.material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var DataFormsModule = /** @class */ (function () {
    function DataFormsModule(dataFormsBus) {
        this.dataFormsBus = dataFormsBus;
    }
    DataFormsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_10__["CodemirrorModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _data_forms_routing_module__WEBPACK_IMPORTED_MODULE_4__["DataFormsRoutingModule"],
                _angular_material_module__WEBPACK_IMPORTED_MODULE_22__["AngularMaterialModule"]
            ],
            providers: [_forms_services_data_forms_service__WEBPACK_IMPORTED_MODULE_3__["DataFormsService"], _forms_services_data_form_resolver__WEBPACK_IMPORTED_MODULE_16__["DataFormResolver"], _forms_services_data_forms_bus__WEBPACK_IMPORTED_MODULE_8__["DataFormsBus"], _forms_services_data_forms_service__WEBPACK_IMPORTED_MODULE_3__["DataFormsService"]],
            declarations: [
                _forms_add_data_form_add_data_form_component__WEBPACK_IMPORTED_MODULE_6__["AddDataFromComponent"], _forms_data_form_form_data_form_form_component__WEBPACK_IMPORTED_MODULE_9__["DataFormFormComponent"], _forms_edit_data_form_edit_data_form_component__WEBPACK_IMPORTED_MODULE_7__["EditDataFormComponent"],
                _forms_data_form_form_parameters_data_form_parameters_component__WEBPACK_IMPORTED_MODULE_11__["DataFormParametersComponent"], _forms_data_form_form_parameters_data_form_parameter_item_component__WEBPACK_IMPORTED_MODULE_12__["DataFormParameterItemComponent"], _forms_data_form_form_steps_data_form_steps_component__WEBPACK_IMPORTED_MODULE_14__["DataFormStepsComponent"],
                _forms_data_form_form_steps_data_form_step_item_component__WEBPACK_IMPORTED_MODULE_13__["DataFormStepItemComponent"], _forms_data_form_form_results_data_form_results_component__WEBPACK_IMPORTED_MODULE_19__["DataFormResultsComponent"], _forms_data_form_form_results_types_data_form_table_results_component__WEBPACK_IMPORTED_MODULE_20__["TableResultsComponent"],
                _forms_execute_data_form_execute_data_form_component__WEBPACK_IMPORTED_MODULE_15__["ExecuteDataFormComponent"],
                _forms_execute_data_form_results_data_form_view_results_component__WEBPACK_IMPORTED_MODULE_21__["DataFormViewResultsComponent"],
                _forms_data_forms_list_data_forms_list_component__WEBPACK_IMPORTED_MODULE_2__["DataFormsListComponent"],
                _forms_data_forms_list_data_form_item_data_form_item_component__WEBPACK_IMPORTED_MODULE_5__["DataFormItemComponent"],
                _forms_execute_data_form_parameters_values_data_form_execute_parameters_component__WEBPACK_IMPORTED_MODULE_17__["DataFormExecuteParametersComponent"],
                _forms_execute_data_form_parameters_values_string_parameter_field_component__WEBPACK_IMPORTED_MODULE_18__["StringParameterFieldComponent"]
            ],
            entryComponents: [_forms_add_data_form_add_data_form_component__WEBPACK_IMPORTED_MODULE_6__["AddDataFromComponent"], _forms_edit_data_form_edit_data_form_component__WEBPACK_IMPORTED_MODULE_7__["EditDataFormComponent"]]
        }),
        __metadata("design:paramtypes", [_forms_services_data_forms_bus__WEBPACK_IMPORTED_MODULE_8__["DataFormsBus"]])
    ], DataFormsModule);
    return DataFormsModule;
}());



/***/ }),

/***/ "./src/app/data-forms/forms/add-data-form/add-data-form.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/data-forms/forms/add-data-form/add-data-form.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout fxLayoutAlign=\"start center\">\n  <h2 fxFlex=\"100%\" mat-dialog-title>Новая форма запроса</h2>\n  <button mat-icon-button (click)=\"close()\">\n    <mat-icon aria-label=\"Закрыть\"\n              matTooltip=\"Закрыть окно\"\n              matTooltipPosition=\"above\">close</mat-icon>\n  </button>\n</div>\n<mat-dialog-content>\n  <data-form-form (onSubmitEvent)=\"add($event)\"\n                      submitButtonText=\"Добавить форму\">\n  </data-form-form>\n</mat-dialog-content>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/data-forms/forms/add-data-form/add-data-form.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/data-forms/forms/add-data-form/add-data-form.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEtZm9ybXMvZm9ybXMvYWRkLWRhdGEtZm9ybS9hZGQtZGF0YS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/data-forms/forms/add-data-form/add-data-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/data-forms/forms/add-data-form/add-data-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddDataFromComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDataFromComponent", function() { return AddDataFromComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_data_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data-forms.service */ "./src/app/data-forms/forms/services/data-forms.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddDataFromComponent = /** @class */ (function () {
    function AddDataFromComponent(dialogRef, dataFormsService, snackBar) {
        this.dialogRef = dialogRef;
        this.dataFormsService = dataFormsService;
        this.snackBar = snackBar;
    }
    AddDataFromComponent.prototype.add = function (form) {
        var _this = this;
        this.dataFormsService.add(form)
            .subscribe(function (command) {
            _this.dialogRef.close();
            _this.snackBar.open("Форма добавлена", '', {
                duration: 3000,
                panelClass: 'colorGreen',
                horizontalPosition: 'right'
            });
        });
    };
    AddDataFromComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    AddDataFromComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-data-form',
            template: __webpack_require__(/*! ./add-data-form.component.html */ "./src/app/data-forms/forms/add-data-form/add-data-form.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./add-data-form.component.scss */ "./src/app/data-forms/forms/add-data-form/add-data-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _services_data_forms_service__WEBPACK_IMPORTED_MODULE_2__["DataFormsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], AddDataFromComponent);
    return AddDataFromComponent;
}());



/***/ }),

/***/ "./src/app/data-forms/forms/data-form-form/data-form-form.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/data-forms/forms/data-form-form/data-form-form.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"dataFormForm\" (ngSubmit)=\"onSubmit()\" fxLayout=\"column\">\n\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"Наименование формы\"\n           id=\"name\" name=\"name\"\n           formControlName=\"name\"/>\n    <mat-error *ngIf=\" (dataFormForm.controls['name'].dirty || dataFormForm.controls['name'].touched)\n    && dataFormForm.controls['name'].errors && dataFormForm.controls['name'].errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field fxFlex>\n    <input matInput placeholder=\"Описание формы\"\n           id=\"description\" name=\"description\"\n           formControlName=\"description\"/>\n    <mat-error *ngIf=\" (dataFormForm.controls['description'].dirty || dataFormForm.controls['description'].touched)\n    && dataFormForm.controls['description'].errors && dataFormForm.controls['description'].errors.required\">\n      Необходимое значение\n    </mat-error>\n  </mat-form-field>\n\n  <!--Добавление параметров пользователя-->\n  <data-form-parameters [parametersForms]=\"dataFormForm.controls['parameters']\"></data-form-parameters>\n\n  <!--  Добавление шагов формы-->\n  <data-form-steps [stepsForms]=\"dataFormForm.controls['steps']\"></data-form-steps>\n\n  <!--  Добавление способа получения ответа -->\n  <data-form-results [resultDescriptors]=\"dataFormForm.controls['resultDescriptors']\"></data-form-results>\n\n  <div fxLayout fxFlexAlign=\"center\" style=\"margin: 20px;\" fxLayoutGap=\"10px\">\n    <button type=\"submit\" mat-raised-button color=\"primary\"\n              [disabled]=\"dataFormForm.invalid\">{{submitButtonText}}</button>\n    <ng-content select=\".ng-content-bottom-buttons\"></ng-content>\n  </div>\n\n</form>\n\n\n"

/***/ }),

/***/ "./src/app/data-forms/forms/data-form-form/data-form-form.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/data-forms/forms/data-form-form/data-form-form.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEtZm9ybXMvZm9ybXMvZGF0YS1mb3JtLWZvcm0vZGF0YS1mb3JtLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/data-forms/forms/data-form-form/data-form-form.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/data-forms/forms/data-form-form/data-form-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DataFormFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFormFormComponent", function() { return DataFormFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_DataForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/DataForm */ "./src/app/data-forms/forms/models/DataForm.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataFormFormComponent = /** @class */ (function () {
    function DataFormFormComponent(fb) {
        this.fb = fb;
        this.onSubmitEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dataFormModel = new _models_DataForm__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.initForm();
    }
    DataFormFormComponent.prototype.onSubmit = function () {
        this.dataFormModel.name = this.dataFormForm.value.name;
        this.dataFormModel.description = this.dataFormForm.value.description;
        this.dataFormModel.parameters = this.dataFormForm.value.parameters;
        this.dataFormModel.steps = this.dataFormForm.value.steps;
        this.dataFormModel.resultDescriptors = this.dataFormForm.value.resultDescriptors;
        this.onSubmitEvent.emit(this.dataFormModel);
    };
    DataFormFormComponent.prototype.initForm = function () {
        this.dataFormForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            parameters: this.fb.array([]),
            steps: this.fb.array([]),
            resultDescriptors: this.fb.array([])
        });
    };
    DataFormFormComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['initial']) {
            if (this.initial != null && this.initial != undefined) {
                this.dataFormModel = this.initial;
                var parametersFormsArray_1 = this.fb.array([]);
                if (Array.isArray(this.dataFormModel.parameters)
                    && this.dataFormModel.parameters.length > 0) {
                    this.dataFormModel.parameters.forEach(function (v) {
                        parametersFormsArray_1.push(_this.fb.group({
                            label: [v.label, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], type: [v.type, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                        }));
                    });
                }
                var stepsFormsArray_1 = this.fb.array([]);
                if (Array.isArray(this.dataFormModel.steps)
                    && this.dataFormModel.steps.length > 0) {
                    this.dataFormModel.steps.forEach(function (step) {
                        stepsFormsArray_1.push(_this.fb.group({
                            order: [step.order, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                            type: [step.type, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                            dataBaseId: [step.dataBaseId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                            sql: [step.sql, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                        }));
                    });
                }
                var resultsFormsArray_1 = this.fb.array([]);
                if (Array.isArray(this.dataFormModel.resultDescriptors)
                    && this.dataFormModel.resultDescriptors.length > 0) {
                    this.dataFormModel.resultDescriptors.forEach(function (result) {
                        var columns = _this.fb.array([]);
                        if (Array.isArray(result.columns)) {
                            result.columns.forEach(function (col) {
                                columns.push(_this.fb.group({
                                    order: [col.order],
                                    header: [col.header, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                                    resultPath: [col.resultPath, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                                    joinRule: [col.joinRule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                                }));
                            });
                        }
                        resultsFormsArray_1.push(_this.fb.group({
                            order: [result.order],
                            type: [result.type, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                            columns: columns,
                        }));
                    });
                }
                this.dataFormForm = this.fb.group({
                    name: [this.initial.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    description: [this.initial.description, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    parameters: parametersFormsArray_1,
                    steps: stepsFormsArray_1,
                    resultDescriptors: resultsFormsArray_1
                });
            }
        }
    };
    DataFormFormComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DataFormFormComponent.prototype, "onSubmitEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_DataForm__WEBPACK_IMPORTED_MODULE_1__["default"])
    ], DataFormFormComponent.prototype, "initial", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DataFormFormComponent.prototype, "submitButtonText", void 0);
    DataFormFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'data-form-form',
            template: __webpack_require__(/*! ./data-form-form.component.html */ "./src/app/data-forms/forms/data-form-form/data-form-form.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./data-form-form.component.scss */ "./src/app/data-forms/forms/data-form-form/data-form-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], DataFormFormComponent);
    return DataFormFormComponent;
}());



/***/ }),

/***/ "./src/app/data-forms/forms/data-form-form/parameters/data-form-parameter-item.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/data-forms/forms/data-form-form/parameters/data-form-parameter-item.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-elevation-z4\" [formGroup]=\"parameterForm\" >\n\n    <mat-card-content fxLayout=\"row\" fxLayoutGap=\"20px\">\n\n        <mat-form-field fxFlex=\"50%\">\n            <input matInput placeholder=\"Наименование\"\n                   id=\"parameterLabel\" name=\"parameterLabel\"\n                   formControlName=\"label\"/>\n            <mat-error *ngIf=\"(parameterForm.controls['label'].dirty || parameterForm.controls['label'].touched)\n                     && parameterForm.controls['label'].errors && parameterForm.controls['label'].errors.required\">\n                Необходимое значение\n            </mat-error>\n        </mat-form-field>\n\n        <mat-form-field fxFlex=\"40%\">\n            <mat-select placeholder=\"Тип\"\n                        id=\"type\" name=\"type\"\n                        formControlName=\"type\">\n                <mat-option *ngFor=\"let parameterType of parametersTypes\" [value]=\"parameterType.type\">\n                    {{ parameterType.name }}\n                </mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"(parameterForm.controls['type'].dirty || parameterForm.controls['type'].touched)\n                     && parameterForm.controls['type'].errors && parameterForm.controls['type'].errors.required\">\n                Необходимое значение\n            </mat-error>\n        </mat-form-field>\n\n    </mat-card-content>\n\n    <mat-card-actions fxLayoutAlign=\"end\">\n        <button type=\"button\" mat-button color=\"warn\" (click)=\"submitRemoveMe()\">\n            Убрать\n        </button>\n    </mat-card-actions>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/data-forms/forms/data-form-form/parameters/data-form-parameter-item.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/data-forms/forms/data-form-form/parameters/data-form-parameter-item.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: DataFormParameterItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFormParameterItemComponent", function() { return DataFormParameterItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataFormParameterItemComponent = /** @class */ (function () {
    function DataFormParameterItemComponent() {
        this.removeMeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.parametersTypes = [
            { name: 'Строка', type: 'STRING_PARAMETER' },
        ];
    }
    DataFormParameterItemComponent.prototype.submitRemoveMe = function () {
        this.removeMeEvent.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DataFormParameterItemComponent.prototype, "removeMeEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], DataFormParameterItemComponent.prototype, "parameterForm", void 0);
    DataFormParameterItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'data-form-parameter-item',
            template: __webpack_require__(/*! ./data-form-parameter-item.component.html */ "./src/app/data-forms/forms/data-form-form/parameters/data-form-parameter-item.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
        })
    ], DataFormParameterItemComponent);
    return DataFormParameterItemComponent;
}());



/***/ }),

/***/ "./src/app/data-forms/forms/data-form-form/parameters/data-form-parameters.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/data-forms/forms/data-form-form/parameters/data-form-parameters.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n    <fieldset>\n        <legend>Параметры запроса данных</legend>\n        <div>\n            <button mat-raised-button color=\"primary\" type=\"button\"\n                    (click)=\"addParameter()\">\n                Добавить параметр\n            </button>\n        </div>\n        <br/>\n\n      <data-form-parameter-item\n                *ngFor=\"let p of parametersForms.controls; let i = index\"\n                (removeMeEvent)=\"dropParameter(i)\" [parameterForm]=\"p\">\n        </data-form-parameter-item>\n    </fieldset>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/data-forms/forms/data-form-form/parameters/data-form-parameters.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/data-forms/forms/data-form-form/parameters/data-form-parameters.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: DataFormParametersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFormParametersComponent", function() { return DataFormParametersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataFormParametersComponent = /** @class */ (function () {
    function DataFormParametersComponent(fb) {
        this.fb = fb;
    }
    DataFormParametersComponent.prototype.addParameter = function () {
        this.parametersForms.push(this.fb.group({
            label: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required], type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }));
    };
    DataFormParametersComponent.prototype.dropParameter = function (index) {
        if (this.parametersForms.length > 0) {
            this.parametersForms.removeAt(index);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"])
    ], DataFormParametersComponent.prototype, "parametersForms", void 0);
    DataFormParametersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'data-form-parameters',
            template: __webpack_require__(/*! ./data-form-parameters.component.html */ "./src/app/data-forms/forms/data-form-form/parameters/data-form-parameters.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], DataFormParametersComponent);
    return DataFormParametersComponent;
}());



/***/ }),

/***/ "./src/app/data-forms/forms/data-form-form/results/data-form-results.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/data-forms/forms/data-form-form/results/data-form-results.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n    <fieldset>\n        <legend>В каком виде предоставлять результаты выполнения запроса</legend>\n\n        <div>\n            <button type=\"button\" mat-raised-button color=\"primary\" [matMenuTriggerFor]=\"resultTypesMenu\">\n                Добавить результат\n            </button>\n            <mat-menu #resultTypesMenu=\"matMenu\">\n                <button type=\"button\" *ngFor=\"let resultType of resultsTypes\" (click)=\"addResult(resultType.type)\"\n                        mat-menu-item>{{resultType.name}}\n                </button>\n            </mat-menu>\n        </div>\n        <br/>\n\n\n        <mat-card class=\"mat-elevation-z4\" *ngFor=\"let resultForm of resultDescriptors.controls; let i = index\">\n\n            <!--строковый параметр-->\n            <data-form-table-results *ngIf=\"resultForm.controls['type'].value == 'TABLE_DATE_FORM_RESULT'\"\n                                    [tableResultForm]=\"resultForm\">\n\n            </data-form-table-results>\n\n                <mat-card-actions fxLayoutAlign=\"end\">\n                    <button type=\"button\" mat-button color=\"warn\" (click)=\"dropResult(i)\">\n                        Удалить формат результата\n                    </button>\n                </mat-card-actions>\n        </mat-card>\n\n\n\n    </fieldset>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/data-forms/forms/data-form-form/results/data-form-results.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/data-forms/forms/data-form-form/results/data-form-results.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DataFormResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFormResultsComponent", function() { return DataFormResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataFormResultsComponent = /** @class */ (function () {
    function DataFormResultsComponent(fb) {
        this.fb = fb;
        this.resultsTypes = [
            { name: 'В виде таблицы', type: 'TABLE_DATE_FORM_RESULT' }
        ];
    }
    DataFormResultsComponent.prototype.addResult = function (type) {
        this.resultDescriptors.push(this.fb.group({
            order: [this.resultDescriptors.length + 1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            type: [type, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }));
    };
    DataFormResultsComponent.prototype.dropResult = function (index) {
        if (this.resultDescriptors.length > 0) {
            this.resultDescriptors.removeAt(index);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"])
    ], DataFormResultsComponent.prototype, "resultDescriptors", void 0);
    DataFormResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'data-form-results',
            template: __webpack_require__(/*! ./data-form-results.component.html */ "./src/app/data-forms/forms/data-form-form/results/data-form-results.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
        })
        //FIXME  это Result Descriptor
        ,
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], DataFormResultsComponent);
    return DataFormResultsComponent;
}());



/***/ }),

/***/ "./src/app/data-forms/forms/data-form-form/results/types/data-form-table-results.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/data-forms/forms/data-form-form/results/types/data-form-table-results.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <mat-card-content fxLayout=\"column\" fxLayoutGap=\"20px\" [formGroup]=\"tableResultForm\">\n        <mat-card-title>Вернуть результат в ввиде таблицы</mat-card-title>\n        <div>\n            <button mat-raised-button color=\"primary\" type=\"button\"\n                    (click)=\"addColumn()\">\n                Добавить колонку\n            </button>\n        </div>\n        <br/>\n\n        <div fxLayout=\"row\" *ngIf=\"tableResultForm.get('columns')\">\n\n            <div *ngFor=\"let column of tableResultForm.get('columns').controls; let i = index\" fxLayout=\"column\"  [formGroup]=\"column\">\n\n                <mat-form-field fxFlex=\"25%\">\n                    <input matInput placeholder=\"Заголовок\"\n                           id=\"header\" name=\"header\"\n                           formControlName=\"header\"/>\n                    <mat-error *ngIf=\"(column.controls['header'].dirty || column.controls['header'].touched)\n                     && column.controls['header'].errors && column.controls['header'].errors.required\">\n                        Необходимо указать\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field fxFlex=\"25%\">\n                    <input matInput placeholder=\"Путь к значению\"\n                           id=\"resultPath\" name=\"resultPath\"\n                           formControlName=\"resultPath\"/>\n                    <mat-error *ngIf=\"(column.controls['resultPath'].dirty || column.controls['resultPath'].touched)\n                     && column.controls['resultPath'].errors && column.controls['resultPath'].errors.required\">\n                        Необходимо указать\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field fxFlex=\"25%\">\n                    <input matInput placeholder=\"Правило Join\"\n                           id=\"joinRule\" name=\"joinRule\"\n                           formControlName=\"joinRule\"/>\n                    <mat-error *ngIf=\"(column.controls['joinRule'].dirty || column.controls['joinRule'].touched)\n                     && column.controls['joinRule'].errors && column.controls['joinRule'].errors.required\">\n                        Необходимо указать\n                    </mat-error>\n                </mat-form-field>\n\n                <div fxFlex=\"25%\">\n                    <button type=\"button\" mat-button color=\"warn\" (click)=\"dropColumn(i)\">\n                        Убрать\n                    </button>\n                </div>\n\n            </div>\n\n        </div>\n\n    </mat-card-content>\n"

/***/ }),

/***/ "./src/app/data-forms/forms/data-form-form/results/types/data-form-table-results.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/data-forms/forms/data-form-form/results/types/data-form-table-results.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: TableResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableResultsComponent", function() { return TableResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TableResultsComponent = /** @class */ (function () {
    function TableResultsComponent(fb) {
        this.fb = fb;
    }
    TableResultsComponent.prototype.addColumn = function () {
        var columns = this.tableResultForm.controls['columns'];
        if (columns == null) {
            columns = this.fb.array([]);
            this.tableResultForm.addControl('columns', columns);
        }
        columns.push(this.fb.group({
            order: [columns.length + 1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            header: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            resultPath: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            joinRule: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }));
    };
    TableResultsComponent.prototype.dropColumn = function (index) {
        var columns = this.tableResultForm.get('columns');
        if (columns.length > 0) {
            columns.removeAt(index);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], TableResultsComponent.prototype, "tableResultForm", void 0);
    TableResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'data-form-table-results',
            template: __webpack_require__(/*! ./data-form-table-results.component.html */ "./src/app/data-forms/forms/data-form-form/results/types/data-form-table-results.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], TableResultsComponent);
    return TableResultsComponent;
}());



/***/ }),

/***/ "./src/app/data-forms/forms/data-form-form/steps/data-form-step-item.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/data-forms/forms/data-form-form/steps/data-form-step-item.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-elevation-z4\" [formGroup]=\"stepForm\" >\n\n    <mat-card-content fxLayout=\"column\" fxLayoutGap=\"20px\">\n\n        <!--TODO нужно это перенести в отдельные компоненты, который сами по себе несут поля для конкретных шагов, по аналогии с DataFOrmResult-->\n        <mat-card-title>{{stepForm.get('type').value}}</mat-card-title>\n\n        <mat-form-field>\n            <mat-select placeholder=\"База данных\"\n                        id=\"dataBaseId\" name=\"dataBaseId\"\n                        formControlName=\"dataBaseId\">\n                <mat-option *ngFor=\"let bd of dataBases\" [value]=\"bd.id\">\n                    {{ bd.name }}\n                </mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"(stepForm.controls['dataBaseId'].dirty || stepForm.controls['dataBaseId'].touched)\n                     && stepForm.controls['dataBaseId'].errors && stepForm.controls['dataBaseId'].errors.required\">\n                Необходимое значение\n            </mat-error>\n        </mat-form-field>\n\n      <mat-form-field>\n        <mat-codemirror formControlName=\"sql\"\n                        id=\"sql\" name=\"sql\"\n                        required\n                        [options]=\"{\n          theme: 'idea',\n          mode: 'text/x-sql'\n        }\" placeholder=\"Sql select\"></mat-codemirror>\n        <mat-error *ngIf=\"(stepForm.controls['sql'].dirty || stepForm.controls['sql'].touched)\n                     && stepForm.controls['sql'].errors && stepForm.controls['sql'].errors.required\">\n          Необходимое значение\n        </mat-error>\n      </mat-form-field>\n\n    </mat-card-content>\n\n    <mat-card-actions fxLayoutAlign=\"end\">\n        <button type=\"button\" mat-button color=\"warn\" (click)=\"submitRemoveMe()\">\n            Убрать\n        </button>\n    </mat-card-actions>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/data-forms/forms/data-form-form/steps/data-form-step-item.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/data-forms/forms/data-form-form/steps/data-form-step-item.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DataFormStepItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFormStepItemComponent", function() { return DataFormStepItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataFormStepItemComponent = /** @class */ (function () {
    function DataFormStepItemComponent() {
        this.removeMeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DataFormStepItemComponent.prototype.submitRemoveMe = function () {
        this.removeMeEvent.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DataFormStepItemComponent.prototype, "removeMeEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], DataFormStepItemComponent.prototype, "stepForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DataFormStepItemComponent.prototype, "dataBases", void 0);
    DataFormStepItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'data-form-step-item',
            template: __webpack_require__(/*! ./data-form-step-item.component.html */ "./src/app/data-forms/forms/data-form-form/steps/data-form-step-item.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
        })
    ], DataFormStepItemComponent);
    return DataFormStepItemComponent;
}());



/***/ }),

/***/ "./src/app/data-forms/forms/data-form-form/steps/data-form-steps.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/data-forms/forms/data-form-form/steps/data-form-steps.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n    <fieldset>\n        <legend>Шаги выполнения запроса</legend>\n\n        <div>\n            <button type=\"button\" mat-raised-button color=\"primary\" [matMenuTriggerFor]=\"stepsTypesMenu\">\n                Добавить шаг\n            </button>\n            <mat-menu #stepsTypesMenu=\"matMenu\">\n                <button type=\"button\" *ngFor=\"let stepType of stepsTypes\" (click)=\"addStep(stepType.type)\"\n                        mat-menu-item>{{stepType.name}}\n                </button>\n            </mat-menu>\n        </div>\n        <br/>\n        <data-form-step-item [dataBases]=\"dataBases\"\n                *ngFor=\"let s of stepsForms.controls; let i = index\"\n                (removeMeEvent)=\"dropStep(i)\" [stepForm]=\"s\">\n        </data-form-step-item>\n    </fieldset>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/data-forms/forms/data-form-form/steps/data-form-steps.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/data-forms/forms/data-form-form/steps/data-form-steps.component.ts ***!
  \************************************************************************************/
/*! exports provided: DataFormStepsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFormStepsComponent", function() { return DataFormStepsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data-forms.service */ "./src/app/data-forms/forms/services/data-forms.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataFormStepsComponent = /** @class */ (function () {
    function DataFormStepsComponent(fb, dataFormsService) {
        var _this = this;
        this.fb = fb;
        this.dataFormsService = dataFormsService;
        this.dataBases = new Array();
        this.stepsTypes = [
            { name: 'Выполнить SQL селект', type: 'SQL_REQUEST_DATE_FORM_STEP' }
        ];
        this.dataBaseSubscription = this.dataFormsService.dataBasesSubject.subscribe(function (dbs) {
            _this.dataBases = dbs;
        });
    }
    DataFormStepsComponent.prototype.addStep = function (type) {
        this.stepsForms.push(this.fb.group({
            order: [this.stepsForms.length + 1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            type: [type, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dataBaseId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            sql: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }));
    };
    DataFormStepsComponent.prototype.dropStep = function (index) {
        if (this.stepsForms.length > 0) {
            this.stepsForms.removeAt(index);
        }
    };
    DataFormStepsComponent.prototype.ngOnDestroy = function () {
        this.dataBaseSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"])
    ], DataFormStepsComponent.prototype, "stepsForms", void 0);
    DataFormStepsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'data-form-steps',
            template: __webpack_require__(/*! ./data-form-steps.component.html */ "./src/app/data-forms/forms/data-form-form/steps/data-form-steps.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_data_forms_service__WEBPACK_IMPORTED_MODULE_2__["DataFormsService"]])
    ], DataFormStepsComponent);
    return DataFormStepsComponent;
}());



/***/ }),

/***/ "./src/app/data-forms/forms/data-forms-list/data-form-item/data-form-item.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/data-forms/forms/data-forms-list/data-form-item/data-form-item.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list-item style=\"background-color: #fff;\">\n  <span matLine> <a [routerLink]=\"dataForm.id+'/execute'\" > {{dataForm.name}} </a></span>\n  <button mat-icon-button (click)=\"edit()\">\n    <mat-icon aria-label=\"Редактировать\">edit</mat-icon>\n  </button>\n</mat-list-item>\n<mat-divider></mat-divider>"

/***/ }),

/***/ "./src/app/data-forms/forms/data-forms-list/data-form-item/data-form-item.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/data-forms/forms/data-forms-list/data-form-item/data-form-item.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEtZm9ybXMvZm9ybXMvZGF0YS1mb3Jtcy1saXN0L2RhdGEtZm9ybS1pdGVtL2RhdGEtZm9ybS1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/data-forms/forms/data-forms-list/data-form-item/data-form-item.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/data-forms/forms/data-forms-list/data-form-item/data-form-item.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: DataFormItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFormItemComponent", function() { return DataFormItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bus_hannel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../bus/Сhannel */ "./src/app/data-forms/bus/Сhannel.ts");
/* harmony import */ var _models_DataForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/DataForm */ "./src/app/data-forms/forms/models/DataForm.ts");
/* harmony import */ var _core_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/api */ "./src/app/core/api/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataFormItemComponent = /** @class */ (function () {
    function DataFormItemComponent(messagingBusService) {
        this.messagingBusService = messagingBusService;
    }
    DataFormItemComponent.prototype.edit = function () {
        this.messagingBusService.sendMessage({ channel: _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].OPEN_EDIT_DATA_FORM_DIALOG, data: { id: this.dataForm.id } });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_DataForm__WEBPACK_IMPORTED_MODULE_2__["default"])
    ], DataFormItemComponent.prototype, "dataForm", void 0);
    DataFormItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'data-form-item',
            template: __webpack_require__(/*! ./data-form-item.component.html */ "./src/app/data-forms/forms/data-forms-list/data-form-item/data-form-item.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./data-form-item.component.scss */ "./src/app/data-forms/forms/data-forms-list/data-form-item/data-form-item.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_api__WEBPACK_IMPORTED_MODULE_3__["MessagingBusService"]])
    ], DataFormItemComponent);
    return DataFormItemComponent;
}());



/***/ }),

/***/ "./src/app/data-forms/forms/data-forms-list/data-forms-list.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/data-forms/forms/data-forms-list/data-forms-list.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <span>Список форм запроса данных</span>\n      <span fxFlex=\"100%\"></span>\n      <span fxFlex=\"100%\" fxLayoutAlign=\"end\">\n        <button mat-button (click)=\"add()\">\n          <mat-icon aria-label=\"Добавить форму\">playlist_add</mat-icon>\n          Добавить новую форму\n        </button>\n      </span>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <mat-list>\n    <data-form-item *ngFor=\"let dataForm of dataFormsList\" [dataForm]=\"dataForm\"></data-form-item>\n  </mat-list>\n\n</div>\n"

/***/ }),

/***/ "./src/app/data-forms/forms/data-forms-list/data-forms-list.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/data-forms/forms/data-forms-list/data-forms-list.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEtZm9ybXMvZm9ybXMvZGF0YS1mb3Jtcy1saXN0L2RhdGEtZm9ybXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/data-forms/forms/data-forms-list/data-forms-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/data-forms/forms/data-forms-list/data-forms-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DataFormsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFormsListComponent", function() { return DataFormsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bus_hannel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bus/Сhannel */ "./src/app/data-forms/bus/Сhannel.ts");
/* harmony import */ var _services_data_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data-forms.service */ "./src/app/data-forms/forms/services/data-forms.service.ts");
/* harmony import */ var _core_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/api */ "./src/app/core/api/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataFormsListComponent = /** @class */ (function () {
    function DataFormsListComponent(messagingBusService, dataFormsService) {
        var _this = this;
        this.messagingBusService = messagingBusService;
        this.dataFormsService = dataFormsService;
        this.getDataFormsList();
        this.dataFormsSubscription = this.messagingBusService.getMessage().subscribe(function (message) {
            if (message.channel == _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].DATA_FORMS_WERE_UPDATED) {
                _this.getDataFormsList();
            }
        });
    }
    DataFormsListComponent.prototype.ngOnDestroy = function () {
        this.dataFormsSubscription.unsubscribe();
    };
    DataFormsListComponent.prototype.add = function () {
        this.messagingBusService.sendMessage({ channel: _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].OPEN_ADD_DATA_FORM_DIALOG });
    };
    DataFormsListComponent.prototype.getDataFormsList = function () {
        var _this = this;
        this.dataFormsService.getAll().subscribe(function (dataForms) {
            _this.dataFormsList = dataForms;
        });
    };
    DataFormsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'data-forms-list',
            template: __webpack_require__(/*! ./data-forms-list.component.html */ "./src/app/data-forms/forms/data-forms-list/data-forms-list.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./data-forms-list.component.scss */ "./src/app/data-forms/forms/data-forms-list/data-forms-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_api__WEBPACK_IMPORTED_MODULE_3__["MessagingBusService"],
            _services_data_forms_service__WEBPACK_IMPORTED_MODULE_2__["DataFormsService"]])
    ], DataFormsListComponent);
    return DataFormsListComponent;
}());



/***/ }),

/***/ "./src/app/data-forms/forms/edit-data-form/edit-data-form.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/data-forms/forms/edit-data-form/edit-data-form.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout fxLayoutAlign=\"start center\">\n  <h2 fxFlex=\"100%\" mat-dialog-title>Редактировать: {{dataForm.name}} </h2>\n  <button mat-icon-button (click)=\"close()\">\n    <mat-icon aria-label=\"Закрыть\"\n              matTooltip=\"Закрыть окно\"\n              matTooltipPosition=\"above\">close</mat-icon>\n  </button>\n</div>\n<mat-dialog-content *ngIf=\"dataForm\">\n\n  <mat-slide-toggle\n          color=\"primary\"\n          (change)=\"changeState($event)\"\n          [checked]=\"dataForm.state == 'ENABLED'\">\n   <span *ngIf=\"dataForm.state == 'ENABLED'\">Включен</span>\n   <span *ngIf=\"dataForm.state != 'ENABLED'\">Выключен</span>\n  </mat-slide-toggle>\n\n  <data-form-form (onSubmitEvent)=\"edit($event)\"\n                      [initial]=\"dataForm\"\n                      submitButtonText=\"Сохранить изменения\">\n\n    <div class=\"ng-content-bottom-buttons\">\n      <button type=\"button\" mat-button color=\"warn\" (click)=\"delete()\">Удалить форму</button>\n    </div>\n\n  </data-form-form>\n</mat-dialog-content>\n"

/***/ }),

/***/ "./src/app/data-forms/forms/edit-data-form/edit-data-form.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/data-forms/forms/edit-data-form/edit-data-form.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEtZm9ybXMvZm9ybXMvZWRpdC1kYXRhLWZvcm0vZWRpdC1kYXRhLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/data-forms/forms/edit-data-form/edit-data-form.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/data-forms/forms/edit-data-form/edit-data-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditDataFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDataFormComponent", function() { return EditDataFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_data_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data-forms.service */ "./src/app/data-forms/forms/services/data-forms.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EditDataFormComponent = /** @class */ (function () {
    function EditDataFormComponent(dialogRef, data, dataFormsService, snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataFormsService = dataFormsService;
        this.snackBar = snackBar;
        this.dataForm = data.dataForm;
    }
    EditDataFormComponent.prototype.edit = function (dataForm) {
        var _this = this;
        console.log(dataForm);
        this.dataFormsService.update(dataForm)
            .subscribe(function (dataForm) {
            _this.snackBar.open("Изменения сохранены", '', {
                duration: 3000,
                panelClass: 'colorGreen',
                horizontalPosition: 'right'
            });
        });
    };
    EditDataFormComponent.prototype.changeState = function (changeEvent) {
        if (changeEvent.checked) {
            this.dataForm.state = 'ENABLED';
        }
        else {
            this.dataForm.state = 'DISABLED';
        }
    };
    EditDataFormComponent.prototype.delete = function () {
        var _this = this;
        this.dataFormsService.delete(this.dataForm.id)
            .subscribe(function (command) {
            _this.dialogRef.close();
            _this.snackBar.open("Удалено", '', {
                duration: 3000,
                panelClass: 'colorGreen',
                horizontalPosition: 'right'
            });
        });
    };
    EditDataFormComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    EditDataFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-data-form',
            template: __webpack_require__(/*! ./edit-data-form.component.html */ "./src/app/data-forms/forms/edit-data-form/edit-data-form.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./edit-data-form.component.scss */ "./src/app/data-forms/forms/edit-data-form/edit-data-form.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_data_forms_service__WEBPACK_IMPORTED_MODULE_2__["DataFormsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], EditDataFormComponent);
    return EditDataFormComponent;
}());



/***/ }),

/***/ "./src/app/data-forms/forms/execute-data-form/execute-data-form.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/data-forms/forms/execute-data-form/execute-data-form.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"executionRequestForm\" (ngSubmit)=\"onSubmit()\" fxLayout=\"column\">\n\n\n\n  <mat-accordion>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <h3>{{dataForm.name}}</h3>\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      {{dataForm.description}}\n    </mat-expansion-panel>\n  </mat-accordion>\n\n   <!-- Заполняем вхдные параметры формы -->\n  <data-form-execute-parameters\n          *ngIf=\"executionRequestForm\"\n          [parametersValues]=\"executionRequestForm.controls['parametersValues']\">\n  </data-form-execute-parameters>\n\n  <div fxLayout fxFlexAlign=\"end\" style=\"margin: 20px;\" fxLayoutGap=\"10px\">\n    <button type=\"submit\" mat-raised-button color=\"primary\" *ngIf=\"!waitProccingFlag\"\n            [disabled]=\"executionRequestForm.invalid\">Выполнить</button>\n\n    <button type=\"button\" *ngIf=\"waitProccingFlag\" (click)=\"stopRequest()\" mat-raised-button>Отменить запрос</button>\n  </div>\n\n</form>\n<div fxLayout=\"row\" fxLayoutAlign=\"center\" *ngIf=\"waitProccingFlag\" >\n  <mat-spinner  [diameter]=\"50\"></mat-spinner>\n  <div>Запрос выполняется...</div>\n</div>\n<div fxLayout=\"column\">\n  <data-form-view-results [dataForExecution]=\"dataForExecution\" style=\"margin: 10px;\"></data-form-view-results>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/data-forms/forms/execute-data-form/execute-data-form.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/data-forms/forms/execute-data-form/execute-data-form.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEtZm9ybXMvZm9ybXMvZXhlY3V0ZS1kYXRhLWZvcm0vZXhlY3V0ZS1kYXRhLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/data-forms/forms/execute-data-form/execute-data-form.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/data-forms/forms/execute-data-form/execute-data-form.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ExecuteDataFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecuteDataFormComponent", function() { return ExecuteDataFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_forms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data-forms.service */ "./src/app/data-forms/forms/services/data-forms.service.ts");
/* harmony import */ var _models_DataFormExecuteRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/DataFormExecuteRequest */ "./src/app/data-forms/forms/models/DataFormExecuteRequest.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_DataFormParameterValue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/DataFormParameterValue */ "./src/app/data-forms/forms/models/DataFormParameterValue.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ExecuteDataFormComponent = /** @class */ (function () {
    function ExecuteDataFormComponent(route, dataFormsService, fb, snackBar) {
        var _this = this;
        this.route = route;
        this.dataFormsService = dataFormsService;
        this.fb = fb;
        this.snackBar = snackBar;
        this.dataForm = route.snapshot.data['dataForm'];
        var parametersValues = this.fb.array([]);
        if (Array.isArray(this.dataForm.parameters)
            && this.dataForm.parameters.length > 0) {
            this.dataForm.parameters.forEach(function (v) {
                parametersValues.push(_this.fb.group({
                    label: [v.label, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    value: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    type: [v.type, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                }));
            });
        }
        this.executionRequestForm = this.fb.group({
            parametersValues: parametersValues,
        });
    }
    ExecuteDataFormComponent.prototype.stopRequest = function () {
        this.waitProccingFlag = false;
    };
    ExecuteDataFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var request = new _models_DataFormExecuteRequest__WEBPACK_IMPORTED_MODULE_4__["default"]();
        var parametersValues = [];
        if (Array.isArray(this.executionRequestForm.value.parametersValues)
            && this.executionRequestForm.value.parametersValues.length > 0) {
            this.executionRequestForm.value.parametersValues.forEach(function (v) {
                parametersValues.push(new _models_DataFormParameterValue__WEBPACK_IMPORTED_MODULE_6__["default"](v.label, v.type, v.value));
            });
        }
        request.parametersValues = parametersValues;
        this.dataFormsService.execute(this.dataForm.id, request).subscribe(function (execution) {
            _this.snackBar.open("Запущено исполнение", '', {
                duration: 3000,
                panelClass: 'colorGreen',
                horizontalPosition: 'right'
            });
            //start cycle wait
            _this.waitProccingFlag = true;
            _this.waitResult(execution.id);
        });
        ;
    };
    ExecuteDataFormComponent.prototype.waitResult = function (executionId) {
        var _this = this;
        if (!this.waitProccingFlag) {
            return;
        }
        this.dataFormsService.getExecutionById(executionId).subscribe(function (execution) {
            _this.dataForExecution = execution;
            if (execution.endStatus != 'OK') {
                setTimeout(function () {
                    _this.waitResult(execution.id);
                }, 3000);
            }
            else {
                _this.stopRequest();
            }
        });
    };
    ExecuteDataFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'execute-data-form',
            template: __webpack_require__(/*! ./execute-data-form.component.html */ "./src/app/data-forms/forms/execute-data-form/execute-data-form.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./execute-data-form.component.scss */ "./src/app/data-forms/forms/execute-data-form/execute-data-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_data_forms_service__WEBPACK_IMPORTED_MODULE_3__["DataFormsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], ExecuteDataFormComponent);
    return ExecuteDataFormComponent;
}());



/***/ }),

/***/ "./src/app/data-forms/forms/execute-data-form/parameters-values/data-form-execute-parameters.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/data-forms/forms/execute-data-form/parameters-values/data-form-execute-parameters.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" style=\"margin-top: 20px;\">\n      <div *ngFor=\"let parameterValue of parametersValues.controls; let i = index\" fxLayout=\"row\" fxLayoutAlign=\"center\" style=\"margin:10px;\">\n             <!--строковый параметр-->\n             <string-parameter-field *ngIf=\"parameterValue.controls['type'].value == 'STRING_PARAMETER'\"\n                                     [stringParameter]=\"parameterValue\"></string-parameter-field>\n      </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/data-forms/forms/execute-data-form/parameters-values/data-form-execute-parameters.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/data-forms/forms/execute-data-form/parameters-values/data-form-execute-parameters.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: DataFormExecuteParametersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFormExecuteParametersComponent", function() { return DataFormExecuteParametersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataFormExecuteParametersComponent = /** @class */ (function () {
    function DataFormExecuteParametersComponent(fb) {
        this.fb = fb;
        console.log(this.parametersValues);
    }
    DataFormExecuteParametersComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        console.log(this.parametersValues);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"])
    ], DataFormExecuteParametersComponent.prototype, "parametersValues", void 0);
    DataFormExecuteParametersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'data-form-execute-parameters',
            template: __webpack_require__(/*! ./data-form-execute-parameters.component.html */ "./src/app/data-forms/forms/execute-data-form/parameters-values/data-form-execute-parameters.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], DataFormExecuteParametersComponent);
    return DataFormExecuteParametersComponent;
}());



/***/ }),

/***/ "./src/app/data-forms/forms/execute-data-form/parameters-values/string-parameter-field.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/data-forms/forms/execute-data-form/parameters-values/string-parameter-field.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"stringParameter\" [formGroup]=\"stringParameter\">\n   <label for=\"value\" style=\"font-size: 16px; font-weight: bolder; margin: 10px; \" >{{stringParameter.controls['label'].value }}</label>\n   <input style=\"font-size: 16px;padding: 10px;\" id=\"value\" name=\"value\" formControlName=\"value\"/>\n   <mat-error *ngIf=\"(stringParameter.controls['value'].dirty || stringParameter.controls['value'].touched)\n                     && stringParameter.controls['value'].errors && stringParameter.controls['value'].errors.required\">\n      Необходимое значение\n   </mat-error>\n</div>"

/***/ }),

/***/ "./src/app/data-forms/forms/execute-data-form/parameters-values/string-parameter-field.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/data-forms/forms/execute-data-form/parameters-values/string-parameter-field.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: StringParameterFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringParameterFieldComponent", function() { return StringParameterFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StringParameterFieldComponent = /** @class */ (function () {
    function StringParameterFieldComponent(fb) {
        this.fb = fb;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], StringParameterFieldComponent.prototype, "stringParameter", void 0);
    StringParameterFieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'string-parameter-field',
            template: __webpack_require__(/*! ./string-parameter-field.component.html */ "./src/app/data-forms/forms/execute-data-form/parameters-values/string-parameter-field.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], StringParameterFieldComponent);
    return StringParameterFieldComponent;
}());



/***/ }),

/***/ "./src/app/data-forms/forms/execute-data-form/results/data-form-view-results.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/data-forms/forms/execute-data-form/results/data-form-view-results.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divTable minimalistBlack\" *ngIf=\"showTable\">\n    <div class=\"divTableHeading\">\n        <div class=\"divTableRow\">\n            <div class=\"divTableHead\"\n                 *ngFor=\"let header of dataForExecution.dataFormExecutionResults[0].headers;\">{{header}}</div>\n        </div>\n    </div>\n    <div class=\"divTableBody\">\n        <div class=\"divTableRow\" *ngFor=\"let row of dataForExecution.dataFormExecutionResults[0].rows;\">\n            <div class=\"divTableCell\" *ngFor=\"let v of row;\" >{{v}}</div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/data-forms/forms/execute-data-form/results/data-form-view-results.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/data-forms/forms/execute-data-form/results/data-form-view-results.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.minimalistBlack {\n  border: 1px solid #333;\n  width: 100%;\n  text-align: left;\n  border-collapse: collapse; }\n\n.divTable.minimalistBlack .divTableCell, .divTable.minimalistBlack .divTableHead {\n  border: 1px solid #333;\n  padding: 5px 4px; }\n\n.divTable.minimalistBlack .divTableBody .divTableCell {\n  font-size: 13px; }\n\n.divTable.minimalistBlack .divTableHeading {\n  background: #CFCFCF;\n  background: -webkit-gradient(linear, left top, left bottom, from(#dbdbdb), color-stop(66%, #d3d3d3), to(#CFCFCF));\n  background: linear-gradient(to bottom, #dbdbdb 0%, #d3d3d3 66%, #CFCFCF 100%);\n  border-bottom: 1px solid #333; }\n\n.divTable.minimalistBlack .divTableHeading .divTableHead {\n  font-size: 15px;\n  font-weight: bold;\n  color: #333;\n  text-align: left; }\n\n.minimalistBlack .tableFootStyle {\n  font-size: 14px;\n  font-weight: bold;\n  color: #111;\n  border-top: 1px solid #333; }\n\n.minimalistBlack .tableFootStyle {\n  font-size: 14px; }\n\n/* DivTable.com */\n\n.divTable {\n  display: table; }\n\n.divTableRow {\n  display: table-row; }\n\n.divTableHeading {\n  display: table-header-group; }\n\n.divTableCell, .divTableHead {\n  display: table-cell; }\n\n.divTableHeading {\n  display: table-header-group; }\n\n.divTableFoot {\n  display: table-footer-group; }\n\n.divTableBody {\n  display: table-row-group; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVrc2FuZHJzZXJkdWtvdi9wcm9qZWN0cy9zdXBwb3J0LXRlcm1pbmFsLWRldi9zdXBwb3J0LXRlcm1pbmFsL3VpL3NyYy9hcHAvZGF0YS1mb3Jtcy9mb3Jtcy9leGVjdXRlLWRhdGEtZm9ybS9yZXN1bHRzL2RhdGEtZm9ybS12aWV3LXJlc3VsdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLG1CQUFtQjtFQUduQixpSEFBNkU7RUFBN0UsNkVBQTZFO0VBQzdFLDZCQUE2QixFQUFBOztBQUUvQjtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztFQUNYLDBCQUEwQixFQUFBOztBQUU1QjtFQUNFLGVBQWUsRUFBQTs7QUFFakIsaUJBQUE7O0FBQ0E7RUFBVyxjQUFjLEVBQUE7O0FBQ3pCO0VBQWUsa0JBQWtCLEVBQUE7O0FBQ2pDO0VBQW1CLDJCQUEyQixFQUFBOztBQUM5QztFQUErQixtQkFBbUIsRUFBQTs7QUFDbEQ7RUFBbUIsMkJBQTJCLEVBQUE7O0FBQzlDO0VBQWdCLDJCQUEyQixFQUFBOztBQUMzQztFQUFnQix3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RhdGEtZm9ybXMvZm9ybXMvZXhlY3V0ZS1kYXRhLWZvcm0vcmVzdWx0cy9kYXRhLWZvcm0tdmlldy1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2Lm1pbmltYWxpc3RCbGFjayB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuLmRpdlRhYmxlLm1pbmltYWxpc3RCbGFjayAuZGl2VGFibGVDZWxsLCAuZGl2VGFibGUubWluaW1hbGlzdEJsYWNrIC5kaXZUYWJsZUhlYWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuICBwYWRkaW5nOiA1cHggNHB4O1xufVxuLmRpdlRhYmxlLm1pbmltYWxpc3RCbGFjayAuZGl2VGFibGVCb2R5IC5kaXZUYWJsZUNlbGwge1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uZGl2VGFibGUubWluaW1hbGlzdEJsYWNrIC5kaXZUYWJsZUhlYWRpbmcge1xuICBiYWNrZ3JvdW5kOiAjQ0ZDRkNGO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNkYmRiZGIgMCUsICNkM2QzZDMgNjYlLCAjQ0ZDRkNGIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNkYmRiZGIgMCUsICNkM2QzZDMgNjYlLCAjQ0ZDRkNGIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZGJkYmRiIDAlLCAjZDNkM2QzIDY2JSwgI0NGQ0ZDRiAxMDAlKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XG59XG4uZGl2VGFibGUubWluaW1hbGlzdEJsYWNrIC5kaXZUYWJsZUhlYWRpbmcgLmRpdlRhYmxlSGVhZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1pbmltYWxpc3RCbGFjayAudGFibGVGb290U3R5bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzExMTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzMzM7XG59XG4ubWluaW1hbGlzdEJsYWNrIC50YWJsZUZvb3RTdHlsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi8qIERpdlRhYmxlLmNvbSAqL1xuLmRpdlRhYmxleyBkaXNwbGF5OiB0YWJsZTsgfVxuLmRpdlRhYmxlUm93IHsgZGlzcGxheTogdGFibGUtcm93OyB9XG4uZGl2VGFibGVIZWFkaW5nIHsgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO31cbi5kaXZUYWJsZUNlbGwsIC5kaXZUYWJsZUhlYWQgeyBkaXNwbGF5OiB0YWJsZS1jZWxsO31cbi5kaXZUYWJsZUhlYWRpbmcgeyBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7fVxuLmRpdlRhYmxlRm9vdCB7IGRpc3BsYXk6IHRhYmxlLWZvb3Rlci1ncm91cDt9XG4uZGl2VGFibGVCb2R5IHsgZGlzcGxheTogdGFibGUtcm93LWdyb3VwO30iXX0= */"

/***/ }),

/***/ "./src/app/data-forms/forms/execute-data-form/results/data-form-view-results.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/data-forms/forms/execute-data-form/results/data-form-view-results.component.ts ***!
  \************************************************************************************************/
/*! exports provided: DataFormViewResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFormViewResultsComponent", function() { return DataFormViewResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_DataForExecution__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/DataForExecution */ "./src/app/data-forms/forms/models/DataForExecution.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataFormViewResultsComponent = /** @class */ (function () {
    function DataFormViewResultsComponent() {
        this.showTable = false;
    }
    DataFormViewResultsComponent.prototype.ngOnChanges = function (changes) {
        if (changes['dataForExecution']) {
            if (this.dataForExecution != null
                && this.dataForExecution != undefined
                && this.dataForExecution.endStatus == 'OK') {
                this.showTable = true;
            }
        }
    };
    DataFormViewResultsComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_DataForExecution__WEBPACK_IMPORTED_MODULE_1__["default"])
    ], DataFormViewResultsComponent.prototype, "dataForExecution", void 0);
    DataFormViewResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'data-form-view-results',
            template: __webpack_require__(/*! ./data-form-view-results.component.html */ "./src/app/data-forms/forms/execute-data-form/results/data-form-view-results.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./data-form-view-results.component.scss */ "./src/app/data-forms/forms/execute-data-form/results/data-form-view-results.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DataFormViewResultsComponent);
    return DataFormViewResultsComponent;
}());



/***/ }),

/***/ "./src/app/data-forms/forms/models/DataForExecution.ts":
/*!*************************************************************!*\
  !*** ./src/app/data-forms/forms/models/DataForExecution.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var DataForExecution = /** @class */ (function () {
    function DataForExecution() {
    }
    return DataForExecution;
}());
/* harmony default export */ __webpack_exports__["default"] = (DataForExecution);


/***/ }),

/***/ "./src/app/data-forms/forms/models/DataForm.ts":
/*!*****************************************************!*\
  !*** ./src/app/data-forms/forms/models/DataForm.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var DataForm = /** @class */ (function () {
    function DataForm() {
    }
    return DataForm;
}());
/* harmony default export */ __webpack_exports__["default"] = (DataForm);


/***/ }),

/***/ "./src/app/data-forms/forms/models/DataFormExecuteRequest.ts":
/*!*******************************************************************!*\
  !*** ./src/app/data-forms/forms/models/DataFormExecuteRequest.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var DataFormExecuteRequest = /** @class */ (function () {
    function DataFormExecuteRequest() {
    }
    return DataFormExecuteRequest;
}());
/* harmony default export */ __webpack_exports__["default"] = (DataFormExecuteRequest);


/***/ }),

/***/ "./src/app/data-forms/forms/models/DataFormParameterValue.ts":
/*!*******************************************************************!*\
  !*** ./src/app/data-forms/forms/models/DataFormParameterValue.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var DataFormParameterValue = /** @class */ (function () {
    function DataFormParameterValue(label, type, value) {
        this.label = label;
        this.type = type;
        this.value = value;
    }
    return DataFormParameterValue;
}());
/* harmony default export */ __webpack_exports__["default"] = (DataFormParameterValue);


/***/ }),

/***/ "./src/app/data-forms/forms/services/data-form.resolver.ts":
/*!*****************************************************************!*\
  !*** ./src/app/data-forms/forms/services/data-form.resolver.ts ***!
  \*****************************************************************/
/*! exports provided: DataFormResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFormResolver", function() { return DataFormResolver; });
/* harmony import */ var _data_forms_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-forms.service */ "./src/app/data-forms/forms/services/data-forms.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DataFormResolver = /** @class */ (function () {
    function DataFormResolver(dataFormsService) {
        this.dataFormsService = dataFormsService;
    }
    DataFormResolver.prototype.resolve = function (route) {
        var _this = this;
        var formId = route.paramMap.get('formId');
        return new Promise(function (resolve, reject) {
            _this.dataFormsService.get(formId).subscribe(function (dataForm) {
                resolve(dataForm);
            });
        });
    };
    DataFormResolver = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_data_forms_service__WEBPACK_IMPORTED_MODULE_0__["DataFormsService"])),
        __metadata("design:paramtypes", [_data_forms_service__WEBPACK_IMPORTED_MODULE_0__["DataFormsService"]])
    ], DataFormResolver);
    return DataFormResolver;
}());



/***/ }),

/***/ "./src/app/data-forms/forms/services/data-forms.bus.ts":
/*!*************************************************************!*\
  !*** ./src/app/data-forms/forms/services/data-forms.bus.ts ***!
  \*************************************************************/
/*! exports provided: DataFormsBus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFormsBus", function() { return DataFormsBus; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _bus_hannel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bus/Сhannel */ "./src/app/data-forms/bus/Сhannel.ts");
/* harmony import */ var _data_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-forms.service */ "./src/app/data-forms/forms/services/data-forms.service.ts");
/* harmony import */ var _add_data_form_add_data_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-data-form/add-data-form.component */ "./src/app/data-forms/forms/add-data-form/add-data-form.component.ts");
/* harmony import */ var _edit_data_form_edit_data_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-data-form/edit-data-form.component */ "./src/app/data-forms/forms/edit-data-form/edit-data-form.component.ts");
/* harmony import */ var _core_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/api */ "./src/app/core/api/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var DataFormsBus = /** @class */ (function () {
    function DataFormsBus(dialog, messagingBusService, dataFormsService) {
        var _this = this;
        this.dialog = dialog;
        this.messagingBusService = messagingBusService;
        this.dataFormsService = dataFormsService;
        this.subscription = this.messagingBusService.getMessage().subscribe(function (message) {
            if (message.channel == _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].OPEN_ADD_DATA_FORM_DIALOG) {
                _this.openAddDialog();
            }
            else if (message.channel == _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].OPEN_EDIT_DATA_FORM_DIALOG) {
                _this.openEditDialog(message.data.id);
            }
        });
    }
    DataFormsBus.prototype.openAddDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_add_data_form_add_data_form_component__WEBPACK_IMPORTED_MODULE_3__["AddDataFromComponent"], {
            width: '1000px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.messagingBusService.sendMessage({ channel: _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].DATA_FORMS_WERE_UPDATED });
        });
    };
    DataFormsBus.prototype.openEditDialog = function (id) {
        var _this = this;
        this.dataFormsService.get(id)
            .subscribe(function (dataForm) {
            var dialogRef = _this.dialog.open(_edit_data_form_edit_data_form_component__WEBPACK_IMPORTED_MODULE_4__["EditDataFormComponent"], {
                width: '1000px',
                data: {
                    dataForm: dataForm
                }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                _this.messagingBusService.sendMessage({ channel: _bus_hannel__WEBPACK_IMPORTED_MODULE_1__["default"].DATA_FORMS_WERE_UPDATED });
            });
        });
    };
    DataFormsBus = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"],
            _core_api__WEBPACK_IMPORTED_MODULE_5__["MessagingBusService"],
            _data_forms_service__WEBPACK_IMPORTED_MODULE_2__["DataFormsService"]])
    ], DataFormsBus);
    return DataFormsBus;
}());



/***/ }),

/***/ "./src/app/data-forms/forms/services/data-forms.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/data-forms/forms/services/data-forms.service.ts ***!
  \*****************************************************************/
/*! exports provided: DataFormsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFormsService", function() { return DataFormsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _bus_hannel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../bus/Сhannel */ "./src/app/data-forms/bus/Сhannel.ts");
/* harmony import */ var _core_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/api */ "./src/app/core/api/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/app/config.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var DataFormsService = /** @class */ (function () {
    function DataFormsService(http, messagingBusService, config) {
        var _this = this;
        this.http = http;
        this.messagingBusService = messagingBusService;
        this.config = config;
        this.headers = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        this.dataBasesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new Array());
        this.url = config.api + '/data-forms/forms';
        this.dataBasesUrl = config.api + '/db-connections';
        this.requestDataBases();
        this.subscription = this.messagingBusService.getMessage().subscribe(function (message) {
            if (message.channel == _bus_hannel__WEBPACK_IMPORTED_MODULE_2__["default"].DB_CONNECTIONS_WERE_UPDATED) {
                _this.requestDataBases();
            }
        });
    }
    DataFormsService.prototype.requestDataBases = function () {
        var _this = this;
        this.http.get(this.dataBasesUrl, this.headers)
            .subscribe(function (dbs) {
            _this.dataBasesSubject.next(dbs);
        });
    };
    DataFormsService.prototype.add = function (dataForm) {
        return this.http
            .post(this.url, dataForm, this.headers);
    };
    DataFormsService.prototype.execute = function (formId, request) {
        return this.http
            .post(this.url + "/" + formId + "/executions", request, this.headers);
    };
    DataFormsService.prototype.getExecutionById = function (executionId) {
        return this.http
            .get(this.url + ("/executions/" + executionId));
    };
    DataFormsService.prototype.getAll = function () {
        return this.http.get(this.url, this.headers);
    };
    DataFormsService.prototype.get = function (datFormId) {
        return this.http
            .get(this.url + ("/" + datFormId));
    };
    DataFormsService.prototype.delete = function (datFormId) {
        return this.http
            .delete(this.url + ("/" + datFormId));
    };
    DataFormsService.prototype.update = function (dataForm) {
        return this.http
            .put(this.url + ("/" + dataForm.id), dataForm, this.headers);
    };
    DataFormsService = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _core_api__WEBPACK_IMPORTED_MODULE_3__["MessagingBusService"],
            _config__WEBPACK_IMPORTED_MODULE_4__["Config"]])
    ], DataFormsService);
    return DataFormsService;
}());



/***/ }),

/***/ "./src/app/enevts/events-console.component.html":
/*!******************************************************!*\
  !*** ./src/app/enevts/events-console.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"color:#666;margin: 7px;\">Уведомления:</div>\n<div *ngFor=\"let event of applicationEvents\" style=\"margin: 7px; color:#555;\">\n      {{event.date  | date:'yyyy-MM-dd HH:mm:ss'}} - {{event.text}}\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/enevts/events-console.component.scss":
/*!******************************************************!*\
  !*** ./src/app/enevts/events-console.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.mat-badge-content {\n  font-weight: 600;\n  font-size: 12px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-badge-small .mat-badge-content {\n  font-size: 6px; }\n.mat-badge-large .mat-badge-content {\n  font-size: 24px; }\n.mat-h1, .mat-headline, .mat-typography h1 {\n  font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h2, .mat-title, .mat-typography h2 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h3, .mat-subheading-2, .mat-typography h3 {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h4, .mat-subheading-1, .mat-typography h4 {\n  font: 400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h5, .mat-typography h5 {\n  font: 400 11.62px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px; }\n.mat-h6, .mat-typography h6 {\n  font: 400 9.38px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px; }\n.mat-body-strong, .mat-body-2 {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-body, .mat-body-1, .mat-typography {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-body p, .mat-body-1 p, .mat-typography p {\n    margin: 0 0 12px; }\n.mat-small, .mat-caption {\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-display-4, .mat-typography .mat-display-4 {\n  font: 300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 56px;\n  letter-spacing: -0.05em; }\n.mat-display-3, .mat-typography .mat-display-3 {\n  font: 400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.02em; }\n.mat-display-2, .mat-typography .mat-display-2 {\n  font: 400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.005em; }\n.mat-display-1, .mat-typography .mat-display-1 {\n  font: 400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px; }\n.mat-bottom-sheet-container {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-button, .mat-raised-button, .mat-icon-button, .mat-stroked-button,\n.mat-flat-button, .mat-fab, .mat-mini-fab {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-button-toggle {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-card {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-card-title {\n  font-size: 24px;\n  font-weight: 500; }\n.mat-card-header .mat-card-title {\n  font-size: 20px; }\n.mat-card-subtitle,\n.mat-card-content {\n  font-size: 14px; }\n.mat-checkbox {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-checkbox-layout .mat-checkbox-label {\n  line-height: 24px; }\n.mat-chip {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-chip .mat-chip-trailing-icon.mat-icon,\n  .mat-chip .mat-chip-remove.mat-icon {\n    font-size: 18px; }\n.mat-table {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-header-cell {\n  font-size: 12px;\n  font-weight: 500; }\n.mat-cell, .mat-footer-cell {\n  font-size: 14px; }\n.mat-calendar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-calendar-body {\n  font-size: 13px; }\n.mat-calendar-body-label,\n.mat-calendar-period-button {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-calendar-table-header th {\n  font-size: 11px;\n  font-weight: 400; }\n.mat-dialog-title {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-expansion-panel-header {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: 400; }\n.mat-expansion-panel-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-form-field {\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1.125;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-form-field-wrapper {\n  padding-bottom: 1.34375em; }\n.mat-form-field-prefix .mat-icon,\n.mat-form-field-suffix .mat-icon {\n  font-size: 150%;\n  line-height: 1.125; }\n.mat-form-field-prefix .mat-icon-button,\n.mat-form-field-suffix .mat-icon-button {\n  height: 1.5em;\n  width: 1.5em; }\n.mat-form-field-prefix .mat-icon-button .mat-icon,\n  .mat-form-field-suffix .mat-icon-button .mat-icon {\n    height: 1.125em;\n    line-height: 1.125; }\n.mat-form-field-infix {\n  padding: 0.5em 0;\n  border-top: 0.84375em solid transparent; }\n.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-1.34375em) scale(0.75);\n          transform: translateY(-1.34375em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.34374em) scale(0.75);\n          transform: translateY(-1.34374em) scale(0.75);\n  width: 133.33334333%; }\n.mat-form-field-label-wrapper {\n  top: -0.84375em;\n  padding-top: 0.84375em; }\n.mat-form-field-label {\n  top: 1.34375em; }\n.mat-form-field-underline {\n  bottom: 1.34375em; }\n.mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 0.66666667em;\n  top: calc(100% - 1.79166667em); }\n.mat-form-field-appearance-legacy .mat-form-field-wrapper {\n  padding-bottom: 1.25em; }\n.mat-form-field-appearance-legacy .mat-form-field-infix {\n  padding: 0.4375em 0; }\n.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n  -ms-transform: translateY(-1.28124em) scale(0.75);\n  width: 133.33334333%; }\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n  -ms-transform: translateY(-1.28123em) scale(0.75);\n  width: 133.33335333%; }\n.mat-form-field-appearance-legacy .mat-form-field-label {\n  top: 1.28125em; }\n.mat-form-field-appearance-legacy .mat-form-field-underline {\n  bottom: 1.25em; }\n.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper {\n  margin-top: 0.54166667em;\n  top: calc(100% - 1.66666667em); }\n@media print {\n  .mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n  .mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n    -webkit-transform: translateY(-1.28122em) scale(0.75);\n            transform: translateY(-1.28122em) scale(0.75); }\n  .mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-label-wrapper\n.mat-form-field-label {\n    -webkit-transform: translateY(-1.28121em) scale(0.75);\n            transform: translateY(-1.28121em) scale(0.75); }\n  .mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n    -webkit-transform: translateY(-1.2812em) scale(0.75);\n            transform: translateY(-1.2812em) scale(0.75); } }\n.mat-form-field-appearance-fill .mat-form-field-infix {\n  padding: 0.25em 0 0.75em 0; }\n.mat-form-field-appearance-fill .mat-form-field-label {\n  top: 1.09375em;\n  margin-top: -0.5em; }\n.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-0.59375em) scale(0.75);\n          transform: translateY(-0.59375em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-0.59374em) scale(0.75);\n          transform: translateY(-0.59374em) scale(0.75);\n  width: 133.33334333%; }\n.mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 1em 0 1em 0; }\n.mat-form-field-appearance-outline .mat-form-field-label {\n  top: 1.84375em;\n  margin-top: -0.25em; }\n.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-1.59375em) scale(0.75);\n          transform: translateY(-1.59375em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.59374em) scale(0.75);\n          transform: translateY(-1.59374em) scale(0.75);\n  width: 133.33334333%; }\n.mat-grid-tile-header,\n.mat-grid-tile-footer {\n  font-size: 14px; }\n.mat-grid-tile-header .mat-line,\n  .mat-grid-tile-footer .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-grid-tile-header .mat-line:nth-child(n+2),\n    .mat-grid-tile-footer .mat-line:nth-child(n+2) {\n      font-size: 12px; }\ninput.mat-input-element {\n  margin-top: -0.0625em; }\n.mat-menu-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 400; }\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px; }\n.mat-radio-button {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-select {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-select-trigger {\n  height: 1.125em; }\n.mat-slide-toggle-content {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-slider-thumb-label-text {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n.mat-stepper-vertical, .mat-stepper-horizontal {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-step-label {\n  font-size: 14px;\n  font-weight: 400; }\n.mat-step-sub-label-error {\n  font-weight: normal; }\n.mat-step-label-error {\n  font-size: 14px; }\n.mat-step-label-selected {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-tab-group {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-tab-label, .mat-tab-link {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-toolbar,\n.mat-toolbar h1,\n.mat-toolbar h2,\n.mat-toolbar h3,\n.mat-toolbar h4,\n.mat-toolbar h5,\n.mat-toolbar h6 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0; }\n.mat-tooltip {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\n.mat-tooltip-handset {\n  font-size: 14px;\n  padding-top: 8px;\n  padding-bottom: 8px; }\n.mat-list-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-list-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-list-base .mat-list-item {\n  font-size: 16px; }\n.mat-list-base .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list-base .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n.mat-list-base .mat-list-option {\n  font-size: 16px; }\n.mat-list-base .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list-base .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n.mat-list-base .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-list-base[dense] .mat-list-item {\n  font-size: 12px; }\n.mat-list-base[dense] .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list-base[dense] .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n.mat-list-base[dense] .mat-list-option {\n  font-size: 12px; }\n.mat-list-base[dense] .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list-base[dense] .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n.mat-list-base[dense] .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n.mat-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px; }\n.mat-optgroup-label {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-simple-snackbar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px; }\n.mat-simple-snackbar-action {\n  line-height: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500; }\n.mat-tree {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-tree-node,\n.mat-nested-tree-node {\n  font-weight: 400;\n  font-size: 14px; }\n.mat-ripple {\n  overflow: hidden;\n  position: relative; }\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible; }\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  -webkit-transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n@media (-ms-high-contrast: active) {\n    .mat-ripple-element {\n      display: none; } }\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n.cdk-overlay-container:empty {\n    display: none; }\n.cdk-global-overlay-wrapper {\n  display: -webkit-box;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: -webkit-box;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%; }\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 1; }\n@media screen and (-ms-high-contrast: active) {\n      .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n        opacity: 0.6; } }\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.32); }\n.cdk-overlay-transparent-backdrop, .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing {\n  opacity: 0; }\n.cdk-overlay-connected-position-bounding-box {\n  position: absolute;\n  z-index: 1000;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  min-width: 1px;\n  min-height: 1px; }\n.cdk-global-scrollblock {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll; }\n@-webkit-keyframes cdk-text-field-autofill-start {\n  /*!*/ }\n@keyframes cdk-text-field-autofill-start {\n  /*!*/ }\n@-webkit-keyframes cdk-text-field-autofill-end {\n  /*!*/ }\n@keyframes cdk-text-field-autofill-end {\n  /*!*/ }\n.cdk-text-field-autofill-monitored:-webkit-autofill {\n  -webkit-animation-name: cdk-text-field-autofill-start;\n          animation-name: cdk-text-field-autofill-start; }\n.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {\n  -webkit-animation-name: cdk-text-field-autofill-end;\n          animation-name: cdk-text-field-autofill-end; }\ntextarea.cdk-textarea-autosize {\n  resize: none; }\ntextarea.cdk-textarea-autosize-measuring {\n  height: auto !important;\n  overflow: hidden !important;\n  padding: 2px 0 !important;\n  box-sizing: content-box !important; }\n.mat-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-toolbar.mat-primary {\n    background: #1565c0;\n    color: white; }\n.mat-toolbar.mat-accent {\n    background: #ff5252;\n    color: white; }\n.mat-toolbar.mat-warn {\n    background: #f44336;\n    color: white; }\n.mat-toolbar .mat-form-field-underline,\n  .mat-toolbar .mat-form-field-ripple,\n  .mat-toolbar .mat-focused .mat-form-field-ripple {\n    background-color: currentColor; }\n.mat-toolbar .mat-form-field-label,\n  .mat-toolbar .mat-focused .mat-form-field-label,\n  .mat-toolbar .mat-select-value,\n  .mat-toolbar .mat-select-arrow,\n  .mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {\n    color: inherit; }\n.mat-toolbar .mat-input-element {\n    caret-color: currentColor; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVrc2FuZHJzZXJkdWtvdi9wcm9qZWN0cy9zdXBwb3J0LXRlcm1pbmFsLWRldi9zdXBwb3J0LXRlcm1pbmFsL3VpL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9fdGhlbWluZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXkxQ0Esa0NBQUE7QUFvaERBLDJDQUFBO0FBd0NBLHFCQUFBO0FBcitCRTtFQUNFLGdCQWhMdUI7RUFpTHZCLGVBbExzQjtFQW1MdEIsaURBcGlCK0QsRUFBQTtBQXVpQmpFO0VBQ0UsY0FBbUMsRUFBQTtBQUdyQztFQUNFLGVBQW1DLEVBQUE7QUF4VHJDO0VBMU5FLHdEQTFCK0Q7RUFzUC9ELGdCQUFnQixFQUFBO0FBR2xCO0VBL05FLHdEQTFCK0Q7RUEyUC9ELGdCQUFnQixFQUFBO0FBR2xCO0VBcE9FLHdEQTFCK0Q7RUFnUS9ELGdCQUFnQixFQUFBO0FBR2xCO0VBek9FLHdEQTFCK0Q7RUFxUS9ELGdCQUFnQixFQUFBO0FBTWxCO0VBalBFLDJEQTFCK0Q7RUFtUi9ELGdCQUFnQixFQUFBO0FBR2xCO0VBNVBFLDBEQTFCK0Q7RUE4Ui9ELGdCQUFnQixFQUFBO0FBR2xCO0VBdlFFLHdEQTFCK0QsRUFBQTtBQXFTakU7RUEzUUUsd0RBMUIrRCxFQUFBO0FBcVNqRTtJQUlJLGdCQUFnQixFQUFBO0FBSXBCO0VBblJFLHdEQTFCK0QsRUFBQTtBQW1UakU7RUF6UkUsMERBMUIrRDtFQXFUL0QsZ0JBQWdCO0VBQ2hCLHVCQUF1QixFQUFBO0FBR3pCO0VBL1JFLHdEQTFCK0Q7RUEyVC9ELGdCQUFnQjtFQUNoQix1QkFBdUIsRUFBQTtBQUd6QjtFQXJTRSx3REExQitEO0VBaVUvRCxnQkFBZ0I7RUFDaEIsd0JBQXdCLEVBQUE7QUFHMUI7RUEzU0Usd0RBMUIrRDtFQXVVL0QsZ0JBQWdCLEVBQUE7QUF5UGxCO0VBdGlCRSx3REExQitELEVBQUE7QUEydEJqRTs7RUFHSSxpREE5dEI2RDtFQSt0QjdELGVBaGhCcUM7RUFpaEJyQyxnQkFqaEJnRCxFQUFBO0FBeW1CcEQ7RUFDRSxpREF6ekIrRCxFQUFBO0FBdzFCakU7RUFDRSxpREF6MUIrRCxFQUFBO0FBNDFCakU7RUFFSSxlQXRwQnFDO0VBdXBCckMsZ0JBdHBCZ0QsRUFBQTtBQTBwQnBEO0VBQ0UsZUEzcEJ1QyxFQUFBO0FBOHBCekM7O0VBRUUsZUE1cEJ1QyxFQUFBO0FBOHdCekM7RUFDRSxpREE1OUIrRCxFQUFBO0FBZytCakU7RUFDRSxpQkFyeEI2QyxFQUFBO0FBbTJCL0M7RUFDRSxlQXAyQnVDO0VBcTJCdkMsZ0JBcjJCa0QsRUFBQTtBQW0yQnBEOztJQU1JLGVBM0UwQixFQUFBO0FBa0g5QjtFQUNFLGlEQTdsQytELEVBQUE7QUFnbUNqRTtFQUNFLGVBbjVCdUM7RUFvNUJ2QyxnQkF0NUJrRCxFQUFBO0FBeTVCcEQ7RUFDRSxlQXo1QnVDLEVBQUE7QUFzaUN6QztFQUNFLGlEQXB2QytELEVBQUE7QUF1dkNqRTtFQUNFLGVBckk4QixFQUFBO0FBd0loQzs7RUFHSSxlQS9pQ3FDO0VBZ2pDckMsZ0JBaGpDZ0QsRUFBQTtBQW9qQ3BEO0VBRUksZUFqSnFDO0VBa0pyQyxnQkF6akNnRCxFQUFBO0FBZ2xDcEQ7RUFud0NFLHdEQTFCK0QsRUFBQTtBQTQxQ2pFO0VBRUksaURBOTFDNkQ7RUErMUM3RCxlQXBwQ3FDO0VBcXBDckMsZ0JBcnBDZ0QsRUFBQTtBQXlwQ3BEO0VBMTBDRSx3REExQitELEVBQUE7QUFrd0dqRTtFQWp2R0Usa0JBZ00wQztFQS9MMUMsZ0JBK0xzRDtFQTlMdEQsa0JBOExpRDtFQTdMakQsaURBcEIrRCxFQUFBO0FBc3dHakU7RUFDRSx5QkFQcUYsRUFBQTtBQVV2Rjs7RUFJSSxlQXZCZ0U7RUF3QmhFLGtCQTlqRytDLEVBQUE7QUF5akduRDs7RUFVSSxhQUE0QztFQUM1QyxZQUEyQyxFQUFBO0FBWC9DOztJQWNNLGVBQTBCO0lBQzFCLGtCQXhrRzZDLEVBQUE7QUE2a0duRDtFQUNFLGdCQUF5QjtFQUV6Qix1Q0FBK0MsRUFBQTtBQUdqRDs7RUFwRUEscURBQzZCO1VBRDdCLDZDQUM2QjtFQUM3QixvQkFBa0QsRUFBQTtBQWtFbEQ7O0VBcEVBLHFEQUM2QjtVQUQ3Qiw2Q0FDNkI7RUFDN0Isb0JBQWtELEVBQUE7QUFrRmxEO0VBQ0UsZUFsRTJEO0VBbUUzRCxzQkFuRTJELEVBQUE7QUFzRTdEO0VBQ0UsY0FBdUMsRUFBQTtBQUd6QztFQUdFLGlCQWhFcUYsRUFBQTtBQW1FdkY7RUFDRSxjQS9FZ0Q7RUFnRmhELHdCQXpFa0Q7RUE2RWxELDhCQUFvRSxFQUFBO0FBMWN0RTtFQUVJLHNCQUptRixFQUFBO0FBRXZGO0VBTUksbUJBQXlCLEVBQUE7QUFON0I7O0VBL0NBLDRGQUNtRDtVQURuRCxvRkFDbUQ7RUFHbkQsaURBQ2tDO0VBRWxDLG9CQUF5RCxFQUFBO0FBd0N6RDs7RUEvQ0EsOEZBQ21EO1VBRG5ELHNGQUNtRDtFQUduRCxpREFDa0M7RUFFbEMsb0JBQXlELEVBQUE7QUF3Q3pEOztFQS9DQSw4RkFDbUQ7VUFEbkQsc0ZBQ21EO0VBR25ELGlEQUNrQztFQUVsQyxvQkFBeUQsRUFBQTtBQXdDekQ7RUFpQ0ksY0FBdUMsRUFBQTtBQWpDM0M7RUF1Q0ksY0F6Q21GLEVBQUE7QUFFdkY7RUEyQ0ksd0JBakRzRTtFQXFEdEUsOEJBQW9FLEVBQUE7QUFNeEU7RUFDRTs7SUFyRkYscURBQ2tDO1lBRGxDLDZDQUNrQyxFQUFBO0VBb0ZoQzs7SUFyRkYscURBQ2tDO1lBRGxDLDZDQUNrQyxFQUFBO0VBb0ZoQzs7SUFyRkYsb0RBQ2tDO1lBRGxDLDRDQUNrQyxFQUFBLEVBeUczQjtBQXRNUDtFQUVJLDBCQUFxRCxFQUFBO0FBRnpEO0VBTUksY0FBMkM7RUFDM0Msa0JBVGlDLEVBQUE7QUFFckM7O0VBckJBLHFEQUM2QjtVQUQ3Qiw2Q0FDNkI7RUFDN0Isb0JBQXVELEVBQUE7QUFtQnZEOztFQXJCQSxxREFDNkI7VUFEN0IsNkNBQzZCO0VBQzdCLG9CQUF1RCxFQUFBO0FBb1V2RDtFQUVJLG9CQUEwQyxFQUFBO0FBRjlDO0VBTUksY0FBdUM7RUFDdkMsbUJBVHFDLEVBQUE7QUFFekM7O0VBNUJBLHFEQUNrQjtVQURsQiw2Q0FDa0I7RUFDbEIsb0JBQTBELEVBQUE7QUEwQjFEOztFQTVCQSxxREFDa0I7VUFEbEIsNkNBQ2tCO0VBQ2xCLG9CQUEwRCxFQUFBO0FBdm5EMUQ7O0VBR0UsZUExdEN1QyxFQUFBO0FBMHFDekM7O0lBUkEsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFRckIsY0FBYztJQUNkLHNCQUFzQixFQUFBO0FBR3RCOztNQUNFLGVBaHJDcUMsRUFBQTtBQTAzQ3pDO0VBQ0UscUJBQWdDLEVBQUE7QUFxSWxDO0VBRUksaURBaHRENkQ7RUFpdEQ3RCxlQXBnRHFDO0VBcWdEckMsZ0JBcmdEZ0QsRUFBQTtBQWtqRHBEOztFQUdJLGlEQWx3RDZEO0VBbXdEN0QsZUFyakRxQyxFQUFBO0FBOHNEekM7RUFDRSxpREE3NUQrRCxFQUFBO0FBcStEakU7RUFDRSxpREF0K0QrRCxFQUFBO0FBeStEakU7RUFDRSxlQUEwQixFQUFBO0FBMko1QjtFQUNFLGlEQXRvRStELEVBQUE7QUE4d0VqRTtFQUVJLGlEQWh4RTZEO0VBaXhFN0QsZUFua0VxQztFQW9rRXJDLGdCQXRrRWdELEVBQUE7QUF3cEVwRDtFQUNFLGlEQXIyRStELEVBQUE7QUF3MkVqRTtFQUVJLGVBN3BFcUM7RUE4cEVyQyxnQkE5cEVnRCxFQUFBO0FBa3FFcEQ7RUFDRSxtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLGVBeHFFdUMsRUFBQTtBQTJxRXpDO0VBRUksZUE3cUVxQztFQThxRXJDLGdCQTlxRWdELEVBQUE7QUE2MEVwRDtFQUNFLGlEQTFoRitELEVBQUE7QUE2aEZqRTtFQUVJLGlEQS9oRjZEO0VBZ2lGN0QsZUFqMUVxQztFQWsxRXJDLGdCQWwxRWdELEVBQUE7QUFpNUVwRDs7Ozs7OztFQXRrRkUsd0RBMUIrRDtFQXdtRi9ELFNBQVMsRUFBQTtBQXdCWDtFQUNFLGlEQWpvRitEO0VBa29GL0QsZUFqQndCO0VBa0J4QixnQkFqQm9GO0VBa0JwRixtQkFsQm9GLEVBQUE7QUFxQnRGO0VBQ0UsZUFuQmdDO0VBb0JoQyxnQkFsQnlFO0VBbUJ6RSxtQkFuQnlFLEVBQUE7QUFsZ0MzRTtFQUNFLGlEQXRuRCtELEVBQUE7QUF5bkRqRTtFQUNFLGlEQTFuRCtELEVBQUE7QUE4bkRqRTtFQUVJLGVBdDdDcUMsRUFBQTtBQTZxQ3pDO0lBUkEsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFRckIsY0FBYztJQUNkLHNCQUFzQixFQUFBO0FBR3RCO01BQ0UsZUFqckNxQyxFQUFBO0FBaTdDekM7RUFPSSxlQTM3Q3FDLEVBQUE7QUE2cUN6QztJQVJBLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBUXJCLGNBQWM7SUFDZCxzQkFBc0IsRUFBQTtBQUd0QjtNQUNFLGVBanJDcUMsRUFBQTtBQWk3Q3pDO0VBWUksaURBMW9ENkQ7RUEyb0Q3RCxlQS83Q3FDO0VBZzhDckMsZ0JBaDhDZ0QsRUFBQTtBQXE4Q3BEO0VBRUksZUFyOENxQyxFQUFBO0FBeXFDekM7SUFSQSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQVFyQixjQUFjO0lBQ2Qsc0JBQXNCLEVBQUE7QUFHdEI7TUFDRSxlQWhyQ3FDLEVBQUE7QUFtOEN6QztFQU9JLGVBMThDcUMsRUFBQTtBQXlxQ3pDO0lBUkEsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFRckIsY0FBYztJQUNkLHNCQUFzQixFQUFBO0FBR3RCO01BQ0UsZUFockNxQyxFQUFBO0FBbThDekM7RUFZSSxpREE3cEQ2RDtFQThwRDdELGVBaDlDcUM7RUFpOUNyQyxnQkFuOUNnRCxFQUFBO0FBdEhwRDtFQUVJLGlEQXhGNkQ7RUF5RjdELGVBaUhxQyxFQUFBO0FBM0Z6QztFQXJGRSx3REExQitELEVBQUE7QUFxcUZqRTtFQUVJLGlEQXZxRjZEO0VBd3FGN0QsZUEzOUVxQyxFQUFBO0FBKzlFekM7RUFDRSxjQUFjO0VBRVosb0JBQWU7RUFDZixrQkFBYTtFQUNiLGdCQWwrRWdELEVBQUE7QUFzcEdwRDtFQUNFLGlEQXQyRytELEVBQUE7QUF5MkdqRTs7RUFFRSxnQkE5cEdrRDtFQStwR2xELGVBL3BHdUMsRUFBQTtBQTlSekM7RUFDRSxnQkFBZ0I7RUFJaEIsa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxpQkFBaUIsRUFBQTtBQUduQjtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBRXBCLDZFQUE2RDtFQUE3RCxxRUFBNkQ7RUFBN0QsNkRBQTZEO0VBQTdELCtHQUE2RDtFQUM3RCwyQkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7QUFwcUNyQjtJQThwQ0E7TUFVSSxhQUFhLEVBQUEsRUFFaEI7QUFwc0NEO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFHVixVQUFVO0VBR1Ysd0JBQXdCO0VBQ3hCLHFCQUFxQixFQUFBO0FBOUl2QjtFQUVFLG9CQUFvQjtFQUdwQixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixXQUFXLEVBQUE7QUFJYjtFQUNFLGVBQWU7RUFDZixhQTNCZ0MsRUFBQTtBQXlCbEM7SUFPSSxhQUFhLEVBQUE7QUFRakI7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUExQ3NCLEVBQUE7QUE4Q3hCO0VBR0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsYUFwRHNCO0VBd0R0QixvQkFBYTtFQUFiLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7QUFHbEI7RUFFRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUVSLGFBcEUrQjtFQXFFL0Isb0JBQW9CO0VBQ3BCLHdDQUF3QztFQUN4QyxrRUFoRWlFO0VBZ0VqRSwwREFoRWlFO0VBaUVqRSxVQUFVLEVBQUE7QUFaWjtJQWVJLFVBQVUsRUFBQTtBQU1WO01BckJKO1FBc0JNLFlBQVksRUFBQSxFQUVmO0FBR0g7RUFDRSwrQkFyRnNELEVBQUE7QUF3RnhEO0VBTUksVUFBVSxFQUFBO0FBTWQ7RUFDRSxrQkFBa0I7RUFDbEIsYUExR3NCO0VBK0d0QixvQkFBYTtFQUFiLGFBQWE7RUFJYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUd0QixjQUFjO0VBQ2QsZUFBZSxFQUFBO0FBSWpCO0VBQ0UsZUFBZTtFQUtmLFdBQVc7RUFLWCxrQkFBa0IsRUFBQTtBQTBDcEI7RUFBMEMsSUFBQSxFQUFLO0FBQS9DO0VBQTBDLElBQUEsRUFBSztBQUMvQztFQUF3QyxJQUFBLEVBQUs7QUFBN0M7RUFBd0MsSUFBQSxFQUFLO0FBRTdDO0VBQ0UscURBQTZDO1VBQTdDLDZDQUE2QyxFQUFBO0FBRy9DO0VBQ0UsbURBQTJDO1VBQTNDLDJDQUEyQyxFQUFBO0FBSzdDO0VBQ0UsWUFBWSxFQUFBO0FBTWQ7RUFDRSx1QkFBdUI7RUFDdkIsMkJBQTJCO0VBRzNCLHlCQUF5QjtFQUN6QixrQ0FBa0MsRUFBQTtBQXl3SHBDO0VBQ0Usc0JBaDVGVTtFQWk1RlYsMEJBenhGMkIsRUFBQTtBQXV4RjdCO0lBL0JBLG1CQXJ2R1k7SUFzdkdaLFlBMTZHd0IsRUFBQTtBQXc4R3hCO0lBL0JBLG1CQXY1R2E7SUF3NUdiLFlBMTZHd0IsRUFBQTtBQXc4R3hCO0lBL0JBLG1CQTc1R1k7SUE4NUdaLFlBMTZHd0IsRUFBQTtBQTg2R3hCOzs7SUFHRSw4QkFBOEIsRUFBQTtBQUdoQzs7Ozs7SUFLRSxjQUFjLEVBQUE7QUFHaEI7SUFDRSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VuZXZ0cy9ldmVudHMtY29uc29sZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCBhbGwgdGhlIHRoZW1pbmcgZnVuY3Rpb25hbGl0eS5cbi8vIFdlIGNhbiB1c2UgcmVsYXRpdmUgaW1wb3J0cyBmb3IgaW1wb3J0cyBmcm9tIHRoZSBjZGsgYmVjYXVzZSB3ZSBidW5kbGUgZXZlcnl0aGluZ1xuLy8gdXAgaW50byBhIHNpbmdsZSBmbGF0IHNjc3MgZmlsZSBmb3IgbWF0ZXJpYWwuXG4vLyBXZSB3YW50IG92ZXJsYXlzIHRvIGFsd2F5cyBhcHBlYXIgb3ZlciB1c2VyIGNvbnRlbnQsIHNvIHNldCBhIGJhc2VsaW5lXG4vLyB2ZXJ5IGhpZ2ggei1pbmRleCBmb3IgdGhlIG92ZXJsYXkgY29udGFpbmVyLCB3aGljaCBpcyB3aGVyZSB3ZSBjcmVhdGUgdGhlIG5ld1xuLy8gc3RhY2tpbmcgY29udGV4dCBmb3IgYWxsIG92ZXJsYXlzLlxuJGNkay16LWluZGV4LW92ZXJsYXktY29udGFpbmVyOiAxMDAwO1xuJGNkay16LWluZGV4LW92ZXJsYXk6IDEwMDA7XG4kY2RrLXotaW5kZXgtb3ZlcmxheS1iYWNrZHJvcDogMTAwMDtcblxuLy8gQmFja2dyb3VuZCBjb2xvciBmb3IgYWxsIG9mIHRoZSBiYWNrZHJvcHNcbiRjZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zMik7XG5cbi8vIERlZmF1bHQgYmFja2Ryb3AgYW5pbWF0aW9uIGlzIGJhc2VkIG9uIHRoZSBNYXRlcmlhbCBEZXNpZ24gc3dpZnQtZWFzZS1vdXQuXG4kYmFja2Ryb3AtYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcyAhZGVmYXVsdDtcbiRiYWNrZHJvcC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSAhZGVmYXVsdDtcblxuXG5AbWl4aW4gY2RrLW92ZXJsYXkoKSB7XG4gIC5jZGstb3ZlcmxheS1jb250YWluZXIsIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gICAgLy8gRGlzYWJsZSBldmVudHMgZnJvbSBiZWluZyBjYXB0dXJlZCBvbiB0aGUgb3ZlcmxheSBjb250YWluZXIuXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAvLyBUaGUgY29udGFpbmVyIHNob3VsZCBiZSB0aGUgc2l6ZSBvZiB0aGUgdmlld3BvcnQuXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLy8gVGhlIG92ZXJsYXktY29udGFpbmVyIGlzIGFuIGludmlzaWJsZSBlbGVtZW50IHdoaWNoIGNvbnRhaW5zIGFsbCBpbmRpdmlkdWFsIG92ZXJsYXlzLlxuICAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXktY29udGFpbmVyO1xuXG4gICAgJjplbXB0eSB7XG4gICAgICAvLyBIaWRlIHRoZSBlbGVtZW50IHdoZW4gaXQgZG9lc24ndCBoYXZlIGFueSBjaGlsZCBub2Rlcy4gVGhpcyBkb2Vzbid0XG4gICAgICAvLyBpbmNsdWRlIG92ZXJsYXlzIHRoYXQgaGF2ZSBiZWVuIGRldGFjaGVkLCByYXRoZXIgdGhhbiBkaXNwb3NlZC5cbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLy8gV2UgdXNlIGFuIGV4dHJhIHdyYXBwZXIgZWxlbWVudCBpbiBvcmRlciB0byB1c2UgbWFrZSB0aGUgb3ZlcmxheSBpdHNlbGYgYSBmbGV4IGl0ZW0uXG4gIC8vIFRoaXMgbWFrZXMgY2VudGVyaW5nIHRoZSBvdmVybGF5IGVhc3kgd2l0aG91dCBydW5uaW5nIGludG8gdGhlIHN1YnBpeGVsIHJlbmRlcmluZ1xuICAvLyBwcm9ibGVtcyB0aWVkIHRvIHVzaW5nIGB0cmFuc2Zvcm1gIGFuZCB3aXRob3V0IGludGVyZmVyaW5nIHdpdGggdGhlIG90aGVyIHBvc2l0aW9uXG4gIC8vIHN0cmF0ZWdpZXMuXG4gIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXk7XG4gIH1cblxuICAvLyBBIHNpbmdsZSBvdmVybGF5IHBhbmUuXG4gIC5jZGstb3ZlcmxheS1wYW5lIHtcbiAgICAvLyBOb3RlOiBpdCdzIGltcG9ydGFudCBmb3IgdGhpcyBvbmUgdG8gc3RhcnQgb2ZmIGBhYnNvbHV0ZWAsXG4gICAgLy8gaW4gb3JkZXIgZm9yIHVzIHRvIGJlIGFibGUgdG8gbWVhc3VyZSBpdCBjb3JyZWN0bHkuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXk7XG5cbiAgICAvLyBGb3IgY29ubmVjdGVkLXBvc2l0aW9uIG92ZXJsYXlzLCB3ZSBzZXQgYGRpc3BsYXk6IGZsZXhgIGluXG4gICAgLy8gb3JkZXIgdG8gZm9yY2UgYG1heC13aWR0aGAgYW5kIGBtYXgtaGVpZ2h0YCB0byB0YWtlIGVmZmVjdC5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmNkay1vdmVybGF5LWJhY2tkcm9wIHtcbiAgICAvLyBUT0RPKGplbGJvdXJuKTogcmV1c2Ugc2lkZW5hdiBmdWxsc2NyZWVuIG1peGluLlxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG5cbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheS1iYWNrZHJvcDtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJGJhY2tkcm9wLWFuaW1hdGlvbi1kdXJhdGlvbiAkYmFja2Ryb3AtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjtcbiAgICBvcGFjaXR5OiAwO1xuXG4gICAgJi5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgIC8vIEluIGhpZ2ggY29udHJhc3QgbW9kZSB0aGUgcmdiYSBiYWNrZ3JvdW5kIHdpbGwgYmVjb21lIHNvbGlkIHNvIHdlIG5lZWQgdG8gZmFsbCBiYWNrXG4gICAgICAvLyB0byBtYWtpbmcgaXQgb3BhcXVlIHVzaW5nIGBvcGFjaXR5YC4gTm90ZSB0aGF0IHdlIGNhbid0IHVzZSB0aGUgYGNkay1oaWdoLWNvbnRyYXN0YFxuICAgICAgLy8gbWl4aW4sIGJlY2F1c2Ugd2UgY2FuJ3Qgbm9ybWFsaXplIHRoZSBpbXBvcnQgcGF0aCB0byB0aGUgX2ExMXkuc2NzcyBib3RoIGZvciB0aGVcbiAgICAgIC8vIHNvdXJjZSBhbmQgd2hlbiB0aGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWQuIFNlZSAjMTA5MDguXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQ6ICRjZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wLWJhY2tncm91bmQ7XG4gIH1cblxuICAuY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3Age1xuICAgIC8vIE5vdGU6IGFzIG9mIEZpcmVmb3ggNTcsIGhhdmluZyB0aGUgYmFja2Ryb3AgYmUgYGJhY2tncm91bmQ6IG5vbmVgIHdpbGwgcHJldmVudCBpdCBmcm9tXG4gICAgLy8gY2FwdHVyaW5nIHRoZSB1c2VyJ3MgbW91c2Ugc2Nyb2xsIGV2ZW50cy4gU2luY2Ugd2UgYWxzbyBjYW4ndCB1c2Ugc29tZXRoaW5nIGxpa2VcbiAgICAvLyBgcmdiYSgwLCAwLCAwLCAwKWAsIHdlIHdvcmsgYXJvdW5kIHRoZSBpbmNvbnNpc3RlbmN5IGJ5IG5vdCBzZXR0aW5nIHRoZSBiYWNrZ3JvdW5kIGF0XG4gICAgLy8gYWxsIGFuZCB1c2luZyBgb3BhY2l0eWAgdG8gbWFrZSB0aGUgZWxlbWVudCB0cmFuc3BhcmVudC5cbiAgICAmLCAmLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cblxuICAvLyBPdmVybGF5IHBhcmVudCBlbGVtZW50IHVzZWQgd2l0aCB0aGUgY29ubmVjdGVkIHBvc2l0aW9uIHN0cmF0ZWd5LiBVc2VkIHRvIGNvbnN0cmFpbiB0aGVcbiAgLy8gb3ZlcmxheSBlbGVtZW50J3Mgc2l6ZSB0byBmaXQgd2l0aGluIHRoZSB2aWV3cG9ydC5cbiAgLmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheTtcblxuICAgIC8vIFdlIHVzZSBgZGlzcGxheTogZmxleGAgb24gdGhpcyBlbGVtZW50IGV4Y2x1c2l2ZWx5IGZvciBjZW50ZXJpbmcgY29ubmVjdGVkIG92ZXJsYXlzLlxuICAgIC8vIFdoZW4gKm5vdCogY2VudGVyaW5nLCBhIHRvcC9sZWZ0L2JvdHRvbS9yaWdodCB3aWxsIGJlIHNldCB3aGljaCBvdmVycmlkZXMgdGhlIG5vcm1hbFxuICAgIC8vIGZsZXggbGF5b3V0LlxuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAvLyBXZSB1c2UgdGhlIGBjb2x1bW5gIGRpcmVjdGlvbiBoZXJlIHRvIGF2b2lkIHNvbWUgZmxleGJveCBpc3N1ZXMgaW4gRWRnZVxuICAgIC8vIHdoZW4gdXNpbmcgdGhlIFwiZ3JvdyBhZnRlciBvcGVuXCIgb3B0aW9ucy5cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLy8gQWRkIHNvbWUgZGltZW5zaW9ucyBzbyB0aGUgZWxlbWVudCBoYXMgYW4gYGlubmVyVGV4dGAgd2hpY2ggc29tZSBwZW9wbGUgZGVwZW5kIG9uIGluIHRlc3RzLlxuICAgIG1pbi13aWR0aDogMXB4O1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgfVxuXG4gIC8vIFVzZWQgd2hlbiBkaXNhYmxpbmcgZ2xvYmFsIHNjcm9sbGluZy5cbiAgLmNkay1nbG9iYWwtc2Nyb2xsYmxvY2sge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcblxuICAgIC8vIE5lY2Vzc2FyeSBmb3IgdGhlIGNvbnRlbnQgbm90IHRvIGxvc2UgaXRzIHdpZHRoLiBOb3RlIHRoYXQgd2UncmUgdXNpbmcgMTAwJSwgaW5zdGVhZCBvZlxuICAgIC8vIDEwMHZ3LCBiZWNhdXNlIDEwMHZ3IGluY2x1ZGVzIHRoZSB3aWR0aCBwbHVzIHRoZSBzY3JvbGxiYXIsIHdoZXJlYXMgMTAwJSBpcyB0aGUgd2lkdGhcbiAgICAvLyB0aGF0IHRoZSBlbGVtZW50IGhhZCBiZWZvcmUgd2UgbWFkZSBpdCBgZml4ZWRgLlxuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLy8gTm90ZTogdGhpcyB3aWxsIGFsd2F5cyBhZGQgYSBzY3JvbGxiYXIgdG8gd2hhdGV2ZXIgZWxlbWVudCBpdCBpcyBvbiwgd2hpY2ggY2FuXG4gICAgLy8gcG90ZW50aWFsbHkgcmVzdWx0IGluIGRvdWJsZSBzY3JvbGxiYXJzLiBJdCBzaG91bGRuJ3QgYmUgYW4gaXNzdWUsIGJlY2F1c2Ugd2Ugd29uJ3RcbiAgICAvLyBibG9jayBzY3JvbGxpbmcgb24gYSBwYWdlIHRoYXQgZG9lc24ndCBoYXZlIGEgc2Nyb2xsYmFyIGluIHRoZSBmaXJzdCBwbGFjZS5cbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cbn1cblxuQG1peGluIGNkay1hMTF5IHtcbiAgLmNkay12aXN1YWxseS1oaWRkZW4ge1xuICAgIGJvcmRlcjogMDtcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgIGhlaWdodDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxcHg7XG5cbiAgICAvLyBBdm9pZCBicm93c2VycyByZW5kZXJpbmcgdGhlIGZvY3VzIHJpbmcgaW4gc29tZSBjYXNlcy5cbiAgICBvdXRsaW5lOiAwO1xuXG4gICAgLy8gQXZvaWQgc29tZSBjYXNlcyB3aGVyZSB0aGUgYnJvd3NlciB3aWxsIHN0aWxsIHJlbmRlciB0aGUgbmF0aXZlIGNvbnRyb2xzIChzZWUgIzkwNDkpLlxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIH1cbn1cblxuLy8gQXBwbGllcyBzdHlsZXMgZm9yIHVzZXJzIGluIGhpZ2ggY29udHJhc3QgbW9kZS4gTm90ZSB0aGF0IHRoaXMgb25seSBhcHBsaWVzXG4vLyB0byBNaWNyb3NvZnQgYnJvd3NlcnMuIENocm9tZSBjYW4gYmUgaW5jbHVkZWQgYnkgY2hlY2tpbmcgZm9yIHRoZSBgaHRtbFtoY11gXG4vLyBhdHRyaWJ1dGUsIGhvd2V2ZXIgQ2hyb21lIGhhbmRsZXMgaGlnaCBjb250cmFzdCBkaWZmZXJlbnRseS5cbi8vXG4vLyBAcGFyYW0gdGFyZ2V0IFdoaWNoIGtpbmQgb2YgaGlnaCBjb250cmFzdCBzZXR0aW5nIHRvIHRhcmdldC4gRGVmYXVsdHMgdG8gYGFjdGl2ZWAsIGNhbiBiZVxuLy8gICAgYHdoaXRlLW9uLWJsYWNrYCBvciBgYmxhY2stb24td2hpdGVgLlxuQG1peGluIGNkay1oaWdoLWNvbnRyYXN0KCR0YXJnZXQ6IGFjdGl2ZSkge1xuICBAbWVkaWEgKC1tcy1oaWdoLWNvbnRyYXN0OiAkdGFyZ2V0KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gQ29yZSBzdHlsZXMgdGhhdCBlbmFibGUgbW9uaXRvcmluZyBhdXRvZmlsbCBzdGF0ZSBvZiB0ZXh0IGZpZWxkcy5cbkBtaXhpbiBjZGstdGV4dC1maWVsZCB7XG4gIC8vIEtleWZyYW1lcyB0aGF0IGFwcGx5IG5vIHN0eWxlcywgYnV0IGFsbG93IHVzIHRvIG1vbml0b3Igd2hlbiBhbiB0ZXh0IGZpZWxkIGJlY29tZXMgYXV0b2ZpbGxlZFxuICAvLyBieSB3YXRjaGluZyBmb3IgdGhlIGFuaW1hdGlvbiBldmVudHMgdGhhdCBhcmUgZmlyZWQgd2hlbiB0aGV5IHN0YXJ0LiBOb3RlOiB0aGUgLyohKi8gY29tbWVudCBpc1xuICAvLyBuZWVkZWQgdG8gcHJldmVudCBMaWJTYXNzIGZyb20gc3RyaXBwaW5nIHRoZSBrZXlmcmFtZXMgb3V0LlxuICAvLyBCYXNlZCBvbjogaHR0cHM6Ly9tZWRpdW0uY29tL0BicnVubi9kZXRlY3RpbmctYXV0b2ZpbGxlZC1maWVsZHMtaW4tamF2YXNjcmlwdC1hZWQ1OThkMjVkYTdcbiAgQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCB7LyohKi99XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIHsvKiEqL31cblxuICAuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydDtcbiAgfVxuXG4gIC5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKSB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZDtcbiAgfVxuXG4gIC8vIFJlbW92ZSB0aGUgcmVzaXplIGhhbmRsZSBvbiBhdXRvc2l6aW5nIHRleHRhcmVhcywgYmVjYXVzZSB3aGF0ZXZlciBoZWlnaHRcbiAgLy8gdGhlIHVzZXIgcmVzaXplZCB0byB3aWxsIGJlIG92ZXJ3cml0dGVuIG9uY2UgdGhleSBzdGFydCB0eXBpbmcgYWdhaW4uXG4gIHRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZSB7XG4gICAgcmVzaXplOiBub25lO1xuICB9XG5cbiAgLy8gVGhpcyBjbGFzcyBpcyB0ZW1wb3JhcmlseSBhcHBsaWVkIHRvIHRoZSB0ZXh0YXJlYSB3aGVuIGl0IGlzIGJlaW5nIG1lYXN1cmVkLiBJdCBpcyBpbW1lZGlhdGVseVxuICAvLyByZW1vdmVkIHdoZW4gbWVhc3VyaW5nIGlzIGNvbXBsZXRlLiBXZSB1c2UgYCFpbXBvcnRhbnRgIHJ1bGVzIGhlcmUgdG8gbWFrZSBzdXJlIHVzZXItc3BlY2lmaWVkXG4gIC8vIHJ1bGVzIGRvIG5vdCBpbnRlcmZlcmUgd2l0aCB0aGUgbWVhc3VyZW1lbnQuXG4gIHRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmcge1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAvLyBIYXZpbmcgMnB4IHRvcCBhbmQgYm90dG9tIHBhZGRpbmcgc2VlbXMgdG8gZml4IGEgYnVnIHdoZXJlIENocm9tZSBnZXRzIGFuIGluY29ycmVjdFxuICAgIC8vIG1lYXN1cmVtZW50LiBXZSBqdXN0IGhhdmUgdG8gYWNjb3VudCBmb3IgaXQgbGF0ZXIgYW5kIHN1YnRyYWN0IGl0IG9mZiB0aGUgZmluYWwgcmVzdWx0LlxuICAgIHBhZGRpbmc6IDJweCAwICFpbXBvcnRhbnQ7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcbiAgfVxufVxuXG4vLyBVc2VkIHRvIGdlbmVyYXRlIFVJRHMgZm9yIGtleWZyYW1lcyB1c2VkIHRvIGNoYW5nZSB0aGUgdGV4dCBmaWVsZCBhdXRvZmlsbCBzdHlsZXMuXG4kY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQ6IDA7XG5cbi8vIE1peGluIHVzZWQgdG8gYXBwbHkgY3VzdG9tIGJhY2tncm91bmQgYW5kIGZvcmVncm91bmQgY29sb3JzIHRvIGFuIGF1dG9maWxsZWQgdGV4dCBmaWVsZC5cbi8vIEJhc2VkIG9uOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNzgxNTQ5L1xuLy8gcmVtb3ZpbmctaW5wdXQtYmFja2dyb3VuZC1jb2xvdXItZm9yLWNocm9tZS1hdXRvY29tcGxldGUjYW5zd2VyLTM3NDMyMjYwXG5AbWl4aW4gY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3IoJGJhY2tncm91bmQsICRmb3JlZ3JvdW5kOicnKSB7XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9IHtcbiAgICB0byB7XG4gICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgICAgIEBpZiAkZm9yZWdyb3VuZCAhPSAnJyB7IGNvbG9yOiAkZm9yZWdyb3VuZDsgfVxuICAgIH1cbiAgfVxuXG4gICY6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fTtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICB9XG5cbiAgJi5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH07XG4gIH1cblxuICAkY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQ6XG4gICAgICAkY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQgKyAxICFnbG9iYWw7XG59XG5cblxuLy8gQ29yZSBzdHlsZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBhcHBseSBtYXRlcmlhbCBkZXNpZ24gdHJlYXRtZW50cyB0byBhbnkgZWxlbWVudC5cbi8vIE1lZGlhIHF1ZXJpZXNcbi8vIFRPRE8oam9zZXBocGVycm90dCk6IENoYW5nZSAkbWF0LXhzbWFsbCBhbmQgJG1hdC1zbWFsbCB1c2FnZXMgdG8gcmVseSBvbiBCcmVha3BvaW50T2JzZXJ2ZXIsXG4kbWF0LXhzbWFsbDogJ21heC13aWR0aDogNTk5cHgnO1xuJG1hdC1zbWFsbDogJ21heC13aWR0aDogOTU5cHgnO1xuXG4vLyBUT0RPOiBSZXZpc2l0IGFsbCB6LWluZGljZXMgYmVmb3JlIGJldGFcbi8vIHotaW5kZXggbWFzdGVyIGxpc3RcblxuJHotaW5kZXgtZmFiOiAyMCAhZGVmYXVsdDtcbiR6LWluZGV4LWRyYXdlcjogMTAwICFkZWZhdWx0O1xuXG4vLyBHbG9iYWwgY29uc3RhbnRzXG4kcGk6IDMuMTQxNTkyNjU7XG5cbi8vIFBhZGRpbmcgYmV0d2VlbiBpbnB1dCB0b2dnbGVzIGFuZCB0aGVpciBsYWJlbHNcbiRtYXQtdG9nZ2xlLXBhZGRpbmc6IDhweCAhZGVmYXVsdDtcbi8vIFdpZHRoIGFuZCBoZWlnaHQgb2YgaW5wdXQgdG9nZ2xlc1xuJG1hdC10b2dnbGUtc2l6ZTogMjBweCAhZGVmYXVsdDtcblxuLy8gRWFzaW5nIEN1cnZlc1xuLy8gVE9ETyhqZWxib3Vybik6IGFsbCBvZiB0aGVzZSBuZWVkIHRvIGJlIHJldmlzaXRlZFxuXG4vLyBUaGUgZGVmYXVsdCBhbmltYXRpb24gY3VydmVzIHVzZWQgYnkgbWF0ZXJpYWwgZGVzaWduLlxuJG1hdC1saW5lYXItb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAwLjEpICFkZWZhdWx0O1xuJG1hdC1mYXN0LW91dC1zbG93LWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAhZGVmYXVsdDtcbiRtYXQtZmFzdC1vdXQtbGluZWFyLWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSkgIWRlZmF1bHQ7XG5cbiRlYXNlLWluLW91dC1jdXJ2ZS1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpICFkZWZhdWx0O1xuXG4kc3dpZnQtZWFzZS1vdXQtZHVyYXRpb246IDQwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSkgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1vdXQ6IGFsbCAkc3dpZnQtZWFzZS1vdXQtZHVyYXRpb24gJHN3aWZ0LWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuJHN3aWZ0LWVhc2UtaW4tZHVyYXRpb246IDMwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKSAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluOiBhbGwgJHN3aWZ0LWVhc2UtaW4tZHVyYXRpb24gJHN3aWZ0LWVhc2UtaW4tdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG4kc3dpZnQtZWFzZS1pbi1vdXQtZHVyYXRpb246IDUwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tb3V0LXRpbWluZy1mdW5jdGlvbjogJGVhc2UtaW4tb3V0LWN1cnZlLWZ1bmN0aW9uICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tb3V0OiBhbGwgJHN3aWZ0LWVhc2UtaW4tb3V0LWR1cmF0aW9uICRzd2lmdC1lYXNlLWluLW91dC10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cbiRzd2lmdC1saW5lYXItZHVyYXRpb246IDgwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtbGluZWFyLXRpbWluZy1mdW5jdGlvbjogbGluZWFyICFkZWZhdWx0O1xuJHN3aWZ0LWxpbmVhcjogYWxsICRzd2lmdC1saW5lYXItZHVyYXRpb24gJHN3aWZ0LWxpbmVhci10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cblxuXG4vLyBBIGNvbGxlY3Rpb24gb2YgbWl4aW5zIGFuZCBDU1MgY2xhc3NlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGFwcGx5IGVsZXZhdGlvbiB0byBhIG1hdGVyaWFsXG4vLyBlbGVtZW50LlxuLy8gU2VlOiBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9lbnZpcm9ubWVudC9lbGV2YXRpb24uaHRtbFxuLy8gRXhhbXBsZXM6XG4vL1xuLy9cbi8vIC5tYXQtZm9vIHtcbi8vICAgQGluY2x1ZGUgJG1hdC1lbGV2YXRpb24oMik7XG4vL1xuLy8gICAmOmFjdGl2ZSB7XG4vLyAgICAgQGluY2x1ZGUgJG1hdC1lbGV2YXRpb24oOCk7XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyA8ZGl2IGlkPVwiZXh0ZXJuYWwtY2FyZFwiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16MlwiPjxwPlNvbWUgY29udGVudDwvcD48L2Rpdj5cbi8vXG4vLyBGb3IgYW4gZXhwbGFuYXRpb24gb2YgdGhlIGRlc2lnbiBiZWhpbmQgaG93IGVsZXZhdGlvbiBpcyBpbXBsZW1lbnRlZCwgc2VlIHRoZSBkZXNpZ24gZG9jIGF0XG4vLyBodHRwczovL2dvby5nbC9LcTBrOVouXG5cbi8vIENvbG9ycyBmb3IgdW1icmEsIHBlbnVtYnJhLCBhbmQgYW1iaWVudCBzaGFkb3dzLiBBcyBkZXNjcmliZWQgaW4gdGhlIGRlc2lnbiBkb2MsIGVhY2ggZWxldmF0aW9uXG4vLyBsZXZlbCBpcyBjcmVhdGVkIHVzaW5nIGEgc2V0IG9mIDMgc2hhZG93IHZhbHVlcywgb25lIGZvciB1bWJyYSAodGhlIHNoYWRvdyByZXByZXNlbnRpbmcgdGhlXG4vLyBzcGFjZSBjb21wbGV0ZWx5IG9ic2N1cmVkIGJ5IGFuIG9iamVjdCByZWxhdGl2ZSB0byBpdHMgbGlnaHQgc291cmNlKSwgb25lIGZvciBwZW51bWJyYSAodGhlXG4vLyBzcGFjZSBwYXJ0aWFsbHkgb2JzY3VyZWQgYnkgYW4gb2JqZWN0KSwgYW5kIG9uZSBmb3IgYW1iaWVudCAodGhlIHNwYWNlIHdoaWNoIGNvbnRhaW5zIHRoZSBvYmplY3Rcbi8vIGl0c2VsZikuIEZvciBhIGZ1cnRoZXIgZXhwbGFuYXRpb24gb2YgdGhlc2UgdGVybXMgYW5kIHRoZWlyIG1lYW5pbmdzLCBzZWVcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VtYnJhLF9wZW51bWJyYV9hbmRfYW50dW1icmEuXG5cbi8vIE1hcHMgZm9yIHRoZSBkaWZmZXJlbnQgc2hhZG93IHNldHMgYW5kIHRoZWlyIHZhbHVlcyB3aXRoaW4gZWFjaCB6LXNwYWNlLiBUaGVzZSB2YWx1ZXMgd2VyZVxuLy8gY3JlYXRlZCBieSB0YWtpbmcgYSBmZXcgcmVmZXJlbmNlIHNoYWRvdyBzZXRzIGNyZWF0ZWQgYnkgR29vZ2xlJ3MgRGVzaWduZXJzIGFuZCBpbnRlcnBvbGF0aW5nXG4vLyBhbGwgb2YgdGhlIHZhbHVlcyBiZXR3ZWVuIHRoZW0uXG5cbkBmdW5jdGlvbiBfZ2V0LXVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKHR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMnB4IDFweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggM3B4IDFweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggM3B4IDNweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggMnB4IDRweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggM3B4IDVweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggM3B4IDVweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggNHB4IDVweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggNXB4IDVweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggNXB4IDZweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDZweCA2cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCA2cHggN3B4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggN3B4IDhweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDdweCA4cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCA3cHggOXB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggOHB4IDlweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDhweCAxMHB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggOHB4IDExcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCA5cHggMTFweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDlweCAxMnB4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggMTBweCAxM3B4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggMTBweCAxM3B4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjI6ICcwcHggMTBweCAxNHB4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggMTFweCAxNHB4IC03cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggMTFweCAxNXB4IC03cHggI3skc2hhZG93LWNvbG9yfSdcbiAgKTtcbn1cblxuQGZ1bmN0aW9uIF9nZXQtcGVudW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYodHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMXB4IDFweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAycHggMnB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDNweCA0cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggNHB4IDVweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCA1cHggOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDZweCAxMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDdweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDhweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDlweCAxMnB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCAxMHB4IDE0cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDExcHggMTVweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggMTJweCAxN3B4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCAxM3B4IDE5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDE0cHggMjFweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggMTVweCAyMnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCAxNnB4IDI0cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDE3cHggMjZweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggMThweCAyOHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCAxOXB4IDI5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDIwcHggMzFweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggMjFweCAzM3B4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCAyMnB4IDM1cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDIzcHggMzZweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggMjRweCAzOHB4IDNweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG5AZnVuY3Rpb24gX2dldC1hbWJpZW50LW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKHR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMiksICRjb2xvcik7XG5cbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOiAnMHB4IDFweCAzcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggMXB4IDVweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMzogJzBweCAxcHggOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA0OiAnMHB4IDFweCAxMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDFweCAxNHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDFweCAxOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDJweCAxNnB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDNweCAxNHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDNweCAxNnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCA0cHggMThweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggNHB4IDIwcHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEyOiAnMHB4IDVweCAyMnB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCA1cHggMjRweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggNXB4IDI2cHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE1OiAnMHB4IDZweCAyOHB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCA2cHggMzBweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggNnB4IDMycHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE4OiAnMHB4IDdweCAzNHB4IDZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCA3cHggMzZweCA2cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggOHB4IDM4cHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIxOiAnMHB4IDhweCA0MHB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCA4cHggNDJweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggOXB4IDQ0cHggOHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI0OiAnMHB4IDlweCA0NnB4IDhweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG4vLyBUaGUgZGVmYXVsdCBkdXJhdGlvbiB2YWx1ZSBmb3IgZWxldmF0aW9uIHRyYW5zaXRpb25zLlxuJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1kdXJhdGlvbjogMjgwbXMgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IGVhc2luZyB2YWx1ZSBmb3IgZWxldmF0aW9uIHRyYW5zaXRpb25zLlxuJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICRtYXQtZmFzdC1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb247XG5cbi8vIFRoZSBkZWZhdWx0IGNvbG9yIGZvciBlbGV2YXRpb24gc2hhZG93cy5cbiRtYXQtZWxldmF0aW9uLWNvbG9yOiBibGFjayAhZGVmYXVsdDtcblxuLy8gVGhlIGRlZmF1bHQgb3BhY2l0eSBzY2FsaW5nIHZhbHVlIGZvciBlbGV2YXRpb24gc2hhZG93cy5cbiRtYXQtZWxldmF0aW9uLW9wYWNpdHk6IDEgIWRlZmF1bHQ7XG5cbi8vIFByZWZpeCBmb3IgZWxldmF0aW9uLXJlbGF0ZWQgc2VsZWN0b3JzLlxuJF9tYXQtZWxldmF0aW9uLXByZWZpeDogJ21hdC1lbGV2YXRpb24teic7XG5cbi8vIEFwcGxpZXMgdGhlIGNvcnJlY3QgY3NzIHJ1bGVzIHRvIGFuIGVsZW1lbnQgdG8gZ2l2ZSBpdCB0aGUgZWxldmF0aW9uIHNwZWNpZmllZCBieSAkelZhbHVlLlxuLy8gVGhlICR6VmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI0LlxuQG1peGluIG1hdC1lbGV2YXRpb24oJHpWYWx1ZSwgJGNvbG9yOiAkbWF0LWVsZXZhdGlvbi1jb2xvciwgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgQGlmIHR5cGUtb2YoJHpWYWx1ZSkgIT0gbnVtYmVyIG9yIG5vdCB1bml0bGVzcygkelZhbHVlKSB7XG4gICAgQGVycm9yICckelZhbHVlIG11c3QgYmUgYSB1bml0bGVzcyBudW1iZXInO1xuICB9XG4gIEBpZiAkelZhbHVlIDwgMCBvciAkelZhbHVlID4gMjQge1xuICAgIEBlcnJvciAnJHpWYWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMjQnO1xuICB9XG5cbiAgYm94LXNoYWRvdzogI3ttYXAtZ2V0KF9nZXQtdW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX0sXG4gICAgICAgICAgICAgICN7bWFwLWdldChfZ2V0LXBlbnVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9LFxuICAgICAgICAgICAgICAje21hcC1nZXQoX2dldC1hbWJpZW50LW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9O1xufVxuXG5AbWl4aW4gX21hdC10aGVtZS1lbGV2YXRpb24oJHpWYWx1ZSwgJHRoZW1lLCAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkZWxldmF0aW9uLWNvbG9yOiBtYXAtZ2V0KCRmb3JlZ3JvdW5kLCBlbGV2YXRpb24pO1xuICAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQ6IGlmKCRlbGV2YXRpb24tY29sb3IgPT0gbnVsbCwgJG1hdC1lbGV2YXRpb24tY29sb3IsICRlbGV2YXRpb24tY29sb3IpO1xuXG4gIEBpbmNsdWRlIG1hdC1lbGV2YXRpb24oJHpWYWx1ZSwgJGVsZXZhdGlvbi1jb2xvci1vci1kZWZhdWx0LCAkb3BhY2l0eSk7XG59XG5cbi8vIEFwcGxpZXMgdGhlIGVsZXZhdGlvbiB0byBhbiBlbGVtZW50IGluIGEgbWFubmVyIHRoYXQgYWxsb3dzXG4vLyBjb25zdW1lcnMgdG8gb3ZlcnJpZGUgaXQgdmlhIHRoZSBNYXRlcmlhbCBlbGV2YXRpb24gY2xhc3Nlcy5cbkBtaXhpbiBtYXQtb3ZlcnJpZGFibGUtZWxldmF0aW9uKFxuICAgICR6VmFsdWUsXG4gICAgJGNvbG9yOiAkbWF0LWVsZXZhdGlvbi1jb2xvcixcbiAgICAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICAmOm5vdChbY2xhc3MqPScjeyRfbWF0LWVsZXZhdGlvbi1wcmVmaXh9J10pIHtcbiAgICBAaW5jbHVkZSBtYXQtZWxldmF0aW9uKCR6VmFsdWUsICRjb2xvciwgJG9wYWNpdHkpO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigkelZhbHVlLCAkdGhlbWUsICRvcGFjaXR5OiAkbWF0LWVsZXZhdGlvbi1vcGFjaXR5KSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRlbGV2YXRpb24tY29sb3I6IG1hcC1nZXQoJGZvcmVncm91bmQsIGVsZXZhdGlvbik7XG4gICRlbGV2YXRpb24tY29sb3Itb3ItZGVmYXVsdDogaWYoJGVsZXZhdGlvbi1jb2xvciA9PSBudWxsLCAkbWF0LWVsZXZhdGlvbi1jb2xvciwgJGVsZXZhdGlvbi1jb2xvcik7XG5cbiAgQGluY2x1ZGUgbWF0LW92ZXJyaWRhYmxlLWVsZXZhdGlvbigkelZhbHVlLCAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQsICRvcGFjaXR5KTtcbn1cblxuLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGNhbiBiZSB1c2VkIGFzIHRoZSB2YWx1ZSBmb3IgYSB0cmFuc2l0aW9uIHByb3BlcnR5IGZvciBlbGV2YXRpb24uXG4vLyBDYWxsaW5nIHRoaXMgZnVuY3Rpb24gZGlyZWN0bHkgaXMgdXNlZnVsIGluIHNpdHVhdGlvbnMgd2hlcmUgYSBjb21wb25lbnQgbmVlZHMgdG8gdHJhbnNpdGlvblxuLy8gbW9yZSB0aGFuIG9uZSBwcm9wZXJ0eS5cbi8vXG4vLyAuZm9vIHtcbi8vICAgdHJhbnNpdGlvbjogbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKCksIG9wYWNpdHkgMTAwbXMgZWFzZTtcbi8vIH1cbkBmdW5jdGlvbiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoXG4gICAgJGR1cmF0aW9uOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLWR1cmF0aW9uLFxuICAgICRlYXNpbmc6ICRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKSB7XG4gIEByZXR1cm4gYm94LXNoYWRvdyAjeyRkdXJhdGlvbn0gI3skZWFzaW5nfTtcbn1cblxuLy8gQXBwbGllcyB0aGUgY29ycmVjdCBjc3MgcnVsZXMgbmVlZGVkIHRvIGhhdmUgYW4gZWxlbWVudCB0cmFuc2l0aW9uIGJldHdlZW4gZWxldmF0aW9ucy5cbi8vIFRoaXMgbWl4aW4gc2hvdWxkIGJlIGFwcGxpZWQgdG8gZWxlbWVudHMgd2hvc2UgZWxldmF0aW9uIHZhbHVlcyB3aWxsIGNoYW5nZSBkZXBlbmRpbmcgb24gdGhlaXJcbi8vIGNvbnRleHQgKGUuZy4gd2hlbiBhY3RpdmUgb3IgZGlzYWJsZWQpLlxuLy9cbi8vIE5PVEUodHJhdmlza2F1Zm1hbik6IEJvdGggdGhpcyBtaXhpbiBhbmQgdGhlIGFib3ZlIGZ1bmN0aW9uIHVzZSBkZWZhdWx0IHBhcmFtZXRlcnMgc28gdGhleSBjYW5cbi8vIGJlIHVzZWQgaW4gdGhlIHNhbWUgd2F5IGJ5IGNsaWVudHMuXG5AbWl4aW4gbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uKFxuICAgICRkdXJhdGlvbjogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgICAkZWFzaW5nOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbikge1xuICB0cmFuc2l0aW9uOiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoJGR1cmF0aW9uLCAkZWFzaW5nKTtcbn1cblxuLy8gQ29sb3IgcGFsZXR0ZXMgZnJvbSB0aGUgTWF0ZXJpYWwgRGVzaWduIHNwZWMuXG4vLyBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29sb3IvXG4vL1xuLy8gQ29udHJhc3QgY29sb3JzIGFyZSBoYXJkLWNvZGVkIGJlY2F1c2UgaXQgaXMgdG9vIGRpZmZpY3VsdCAocHJvYmFibHkgaW1wb3NzaWJsZSkgdG9cbi8vIGNhbGN1bGF0ZSB0aGVtLiBUaGVzZSBjb250cmFzdCBjb2xvcnMgYXJlIHB1bGxlZCBmcm9tIHRoZSBwdWJsaWMgTWF0ZXJpYWwgRGVzaWduIHNwZWMgc3dhdGNoZXMuXG4vLyBXaGlsZSB0aGUgY29udHJhc3QgY29sb3JzIGluIHRoZSBzcGVjIGFyZSBub3QgcHJlc2NyaXB0aXZlLCB3ZSB1c2UgdGhlbSBmb3IgY29udmVuaWVuY2UuXG5cblxuLy8gQGRlcHJlY2F0ZWQgcmVuYW1lZCB0byAkZGFyay1wcmltYXJ5LXRleHQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kYmxhY2stODctb3BhY2l0eTogcmdiYShibGFjaywgMC44Nyk7XG4vLyBAZGVwcmVjYXRlZCByZW5hbWVkIHRvICRsaWdodC1wcmltYXJ5LXRleHQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtODctb3BhY2l0eTogcmdiYSh3aGl0ZSwgMC44Nyk7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGRhcmstW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiRibGFjay0xMi1vcGFjaXR5OiByZ2JhKGJsYWNrLCAwLjEyKTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkbGlnaHQtW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiR3aGl0ZS0xMi1vcGFjaXR5OiByZ2JhKHdoaXRlLCAwLjEyKTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkZGFyay1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJGJsYWNrLTYtb3BhY2l0eTogcmdiYShibGFjaywgMC4wNik7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGxpZ2h0LVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtNi1vcGFjaXR5OiByZ2JhKHdoaXRlLCAwLjA2KTtcblxuJGRhcmstcHJpbWFyeS10ZXh0OiByZ2JhKGJsYWNrLCAwLjg3KTtcbiRkYXJrLXNlY29uZGFyeS10ZXh0OiByZ2JhKGJsYWNrLCAwLjU0KTtcbiRkYXJrLWRpc2FibGVkLXRleHQ6IHJnYmEoYmxhY2ssIDAuMzgpO1xuJGRhcmstZGl2aWRlcnM6IHJnYmEoYmxhY2ssIDAuMTIpO1xuJGRhcmstZm9jdXNlZDogcmdiYShibGFjaywgMC4xMik7XG4kbGlnaHQtcHJpbWFyeS10ZXh0OiB3aGl0ZTtcbiRsaWdodC1zZWNvbmRhcnktdGV4dDogcmdiYSh3aGl0ZSwgMC43KTtcbiRsaWdodC1kaXNhYmxlZC10ZXh0OiByZ2JhKHdoaXRlLCAwLjUpO1xuJGxpZ2h0LWRpdmlkZXJzOiByZ2JhKHdoaXRlLCAwLjEyKTtcbiRsaWdodC1mb2N1c2VkOiByZ2JhKHdoaXRlLCAwLjEyKTtcblxuJG1hdC1yZWQ6IChcbiAgNTA6ICNmZmViZWUsXG4gIDEwMDogI2ZmY2RkMixcbiAgMjAwOiAjZWY5YTlhLFxuICAzMDA6ICNlNTczNzMsXG4gIDQwMDogI2VmNTM1MCxcbiAgNTAwOiAjZjQ0MzM2LFxuICA2MDA6ICNlNTM5MzUsXG4gIDcwMDogI2QzMmYyZixcbiAgODAwOiAjYzYyODI4LFxuICA5MDA6ICNiNzFjMWMsXG4gIEExMDA6ICNmZjhhODAsXG4gIEEyMDA6ICNmZjUyNTIsXG4gIEE0MDA6ICNmZjE3NDQsXG4gIEE3MDA6ICNkNTAwMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1waW5rOiAoXG4gIDUwOiAjZmNlNGVjLFxuICAxMDA6ICNmOGJiZDAsXG4gIDIwMDogI2Y0OGZiMSxcbiAgMzAwOiAjZjA2MjkyLFxuICA0MDA6ICNlYzQwN2EsXG4gIDUwMDogI2U5MWU2MyxcbiAgNjAwOiAjZDgxYjYwLFxuICA3MDA6ICNjMjE4NWIsXG4gIDgwMDogI2FkMTQ1NyxcbiAgOTAwOiAjODgwZTRmLFxuICBBMTAwOiAjZmY4MGFiLFxuICBBMjAwOiAjZmY0MDgxLFxuICBBNDAwOiAjZjUwMDU3LFxuICBBNzAwOiAjYzUxMTYyLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtcHVycGxlOiAoXG4gIDUwOiAjZjNlNWY1LFxuICAxMDA6ICNlMWJlZTcsXG4gIDIwMDogI2NlOTNkOCxcbiAgMzAwOiAjYmE2OGM4LFxuICA0MDA6ICNhYjQ3YmMsXG4gIDUwMDogIzljMjdiMCxcbiAgNjAwOiAjOGUyNGFhLFxuICA3MDA6ICM3YjFmYTIsXG4gIDgwMDogIzZhMWI5YSxcbiAgOTAwOiAjNGExNDhjLFxuICBBMTAwOiAjZWE4MGZjLFxuICBBMjAwOiAjZTA0MGZiLFxuICBBNDAwOiAjZDUwMGY5LFxuICBBNzAwOiAjYWEwMGZmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1kZWVwLXB1cnBsZTogKFxuICA1MDogI2VkZTdmNixcbiAgMTAwOiAjZDFjNGU5LFxuICAyMDA6ICNiMzlkZGIsXG4gIDMwMDogIzk1NzVjZCxcbiAgNDAwOiAjN2U1N2MyLFxuICA1MDA6ICM2NzNhYjcsXG4gIDYwMDogIzVlMzViMSxcbiAgNzAwOiAjNTEyZGE4LFxuICA4MDA6ICM0NTI3YTAsXG4gIDkwMDogIzMxMWI5MixcbiAgQTEwMDogI2IzODhmZixcbiAgQTIwMDogIzdjNGRmZixcbiAgQTQwMDogIzY1MWZmZixcbiAgQTcwMDogIzYyMDBlYSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtaW5kaWdvOiAoXG4gIDUwOiAjZThlYWY2LFxuICAxMDA6ICNjNWNhZTksXG4gIDIwMDogIzlmYThkYSxcbiAgMzAwOiAjNzk4NmNiLFxuICA0MDA6ICM1YzZiYzAsXG4gIDUwMDogIzNmNTFiNSxcbiAgNjAwOiAjMzk0OWFiLFxuICA3MDA6ICMzMDNmOWYsXG4gIDgwMDogIzI4MzU5MyxcbiAgOTAwOiAjMWEyMzdlLFxuICBBMTAwOiAjOGM5ZWZmLFxuICBBMjAwOiAjNTM2ZGZlLFxuICBBNDAwOiAjM2Q1YWZlLFxuICBBNzAwOiAjMzA0ZmZlLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1ibHVlOiAoXG4gIDUwOiAjZTNmMmZkLFxuICAxMDA6ICNiYmRlZmIsXG4gIDIwMDogIzkwY2FmOSxcbiAgMzAwOiAjNjRiNWY2LFxuICA0MDA6ICM0MmE1ZjUsXG4gIDUwMDogIzIxOTZmMyxcbiAgNjAwOiAjMWU4OGU1LFxuICA3MDA6ICMxOTc2ZDIsXG4gIDgwMDogIzE1NjVjMCxcbiAgOTAwOiAjMGQ0N2ExLFxuICBBMTAwOiAjODJiMWZmLFxuICBBMjAwOiAjNDQ4YWZmLFxuICBBNDAwOiAjMjk3OWZmLFxuICBBNzAwOiAjMjk2MmZmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtbGlnaHQtYmx1ZTogKFxuICA1MDogI2UxZjVmZSxcbiAgMTAwOiAjYjNlNWZjLFxuICAyMDA6ICM4MWQ0ZmEsXG4gIDMwMDogIzRmYzNmNyxcbiAgNDAwOiAjMjliNmY2LFxuICA1MDA6ICMwM2E5ZjQsXG4gIDYwMDogIzAzOWJlNSxcbiAgNzAwOiAjMDI4OGQxLFxuICA4MDA6ICMwMjc3YmQsXG4gIDkwMDogIzAxNTc5YixcbiAgQTEwMDogIzgwZDhmZixcbiAgQTIwMDogIzQwYzRmZixcbiAgQTQwMDogIzAwYjBmZixcbiAgQTcwMDogIzAwOTFlYSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1jeWFuOiAoXG4gIDUwOiAjZTBmN2ZhLFxuICAxMDA6ICNiMmViZjIsXG4gIDIwMDogIzgwZGVlYSxcbiAgMzAwOiAjNGRkMGUxLFxuICA0MDA6ICMyNmM2ZGEsXG4gIDUwMDogIzAwYmNkNCxcbiAgNjAwOiAjMDBhY2MxLFxuICA3MDA6ICMwMDk3YTcsXG4gIDgwMDogIzAwODM4ZixcbiAgOTAwOiAjMDA2MDY0LFxuICBBMTAwOiAjODRmZmZmLFxuICBBMjAwOiAjMThmZmZmLFxuICBBNDAwOiAjMDBlNWZmLFxuICBBNzAwOiAjMDBiOGQ0LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtdGVhbDogKFxuICA1MDogI2UwZjJmMSxcbiAgMTAwOiAjYjJkZmRiLFxuICAyMDA6ICM4MGNiYzQsXG4gIDMwMDogIzRkYjZhYyxcbiAgNDAwOiAjMjZhNjlhLFxuICA1MDA6ICMwMDk2ODgsXG4gIDYwMDogIzAwODk3YixcbiAgNzAwOiAjMDA3OTZiLFxuICA4MDA6ICMwMDY5NWMsXG4gIDkwMDogIzAwNGQ0MCxcbiAgQTEwMDogI2E3ZmZlYixcbiAgQTIwMDogIzY0ZmZkYSxcbiAgQTQwMDogIzFkZTliNixcbiAgQTcwMDogIzAwYmZhNSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWdyZWVuOiAoXG4gIDUwOiAjZThmNWU5LFxuICAxMDA6ICNjOGU2YzksXG4gIDIwMDogI2E1ZDZhNyxcbiAgMzAwOiAjODFjNzg0LFxuICA0MDA6ICM2NmJiNmEsXG4gIDUwMDogIzRjYWY1MCxcbiAgNjAwOiAjNDNhMDQ3LFxuICA3MDA6ICMzODhlM2MsXG4gIDgwMDogIzJlN2QzMixcbiAgOTAwOiAjMWI1ZTIwLFxuICBBMTAwOiAjYjlmNmNhLFxuICBBMjAwOiAjNjlmMGFlLFxuICBBNDAwOiAjMDBlNjc2LFxuICBBNzAwOiAjMDBjODUzLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1saWdodC1ncmVlbjogKFxuICA1MDogI2YxZjhlOSxcbiAgMTAwOiAjZGNlZGM4LFxuICAyMDA6ICNjNWUxYTUsXG4gIDMwMDogI2FlZDU4MSxcbiAgNDAwOiAjOWNjYzY1LFxuICA1MDA6ICM4YmMzNGEsXG4gIDYwMDogIzdjYjM0MixcbiAgNzAwOiAjNjg5ZjM4LFxuICA4MDA6ICM1NThiMmYsXG4gIDkwMDogIzMzNjkxZSxcbiAgQTEwMDogI2NjZmY5MCxcbiAgQTIwMDogI2IyZmY1OSxcbiAgQTQwMDogIzc2ZmYwMyxcbiAgQTcwMDogIzY0ZGQxNyxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1saW1lOiAoXG4gIDUwOiAjZjlmYmU3LFxuICAxMDA6ICNmMGY0YzMsXG4gIDIwMDogI2U2ZWU5YyxcbiAgMzAwOiAjZGNlNzc1LFxuICA0MDA6ICNkNGUxNTcsXG4gIDUwMDogI2NkZGMzOSxcbiAgNjAwOiAjYzBjYTMzLFxuICA3MDA6ICNhZmI0MmIsXG4gIDgwMDogIzllOWQyNCxcbiAgOTAwOiAjODI3NzE3LFxuICBBMTAwOiAjZjRmZjgxLFxuICBBMjAwOiAjZWVmZjQxLFxuICBBNDAwOiAjYzZmZjAwLFxuICBBNzAwOiAjYWVlYTAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC15ZWxsb3c6IChcbiAgNTA6ICNmZmZkZTcsXG4gIDEwMDogI2ZmZjljNCxcbiAgMjAwOiAjZmZmNTlkLFxuICAzMDA6ICNmZmYxNzYsXG4gIDQwMDogI2ZmZWU1OCxcbiAgNTAwOiAjZmZlYjNiLFxuICA2MDA6ICNmZGQ4MzUsXG4gIDcwMDogI2ZiYzAyZCxcbiAgODAwOiAjZjlhODI1LFxuICA5MDA6ICNmNTdmMTcsXG4gIEExMDA6ICNmZmZmOGQsXG4gIEEyMDA6ICNmZmZmMDAsXG4gIEE0MDA6ICNmZmVhMDAsXG4gIEE3MDA6ICNmZmQ2MDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtYW1iZXI6IChcbiAgNTA6ICNmZmY4ZTEsXG4gIDEwMDogI2ZmZWNiMyxcbiAgMjAwOiAjZmZlMDgyLFxuICAzMDA6ICNmZmQ1NGYsXG4gIDQwMDogI2ZmY2EyOCxcbiAgNTAwOiAjZmZjMTA3LFxuICA2MDA6ICNmZmIzMDAsXG4gIDcwMDogI2ZmYTAwMCxcbiAgODAwOiAjZmY4ZjAwLFxuICA5MDA6ICNmZjZmMDAsXG4gIEExMDA6ICNmZmU1N2YsXG4gIEEyMDA6ICNmZmQ3NDAsXG4gIEE0MDA6ICNmZmM0MDAsXG4gIEE3MDA6ICNmZmFiMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtb3JhbmdlOiAoXG4gIDUwOiAjZmZmM2UwLFxuICAxMDA6ICNmZmUwYjIsXG4gIDIwMDogI2ZmY2M4MCxcbiAgMzAwOiAjZmZiNzRkLFxuICA0MDA6ICNmZmE3MjYsXG4gIDUwMDogI2ZmOTgwMCxcbiAgNjAwOiAjZmI4YzAwLFxuICA3MDA6ICNmNTdjMDAsXG4gIDgwMDogI2VmNmMwMCxcbiAgOTAwOiAjZTY1MTAwLFxuICBBMTAwOiAjZmZkMTgwLFxuICBBMjAwOiAjZmZhYjQwLFxuICBBNDAwOiAjZmY5MTAwLFxuICBBNzAwOiAjZmY2ZDAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiBibGFjayxcbiAgKVxuKTtcblxuJG1hdC1kZWVwLW9yYW5nZTogKFxuICA1MDogI2ZiZTllNyxcbiAgMTAwOiAjZmZjY2JjLFxuICAyMDA6ICNmZmFiOTEsXG4gIDMwMDogI2ZmOGE2NSxcbiAgNDAwOiAjZmY3MDQzLFxuICA1MDA6ICNmZjU3MjIsXG4gIDYwMDogI2Y0NTExZSxcbiAgNzAwOiAjZTY0YTE5LFxuICA4MDA6ICNkODQzMTUsXG4gIDkwMDogI2JmMzYwYyxcbiAgQTEwMDogI2ZmOWU4MCxcbiAgQTIwMDogI2ZmNmU0MCxcbiAgQTQwMDogI2ZmM2QwMCxcbiAgQTcwMDogI2RkMmMwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtYnJvd246IChcbiAgNTA6ICNlZmViZTksXG4gIDEwMDogI2Q3Y2NjOCxcbiAgMjAwOiAjYmNhYWE0LFxuICAzMDA6ICNhMTg4N2YsXG4gIDQwMDogIzhkNmU2MyxcbiAgNTAwOiAjNzk1NTQ4LFxuICA2MDA6ICM2ZDRjNDEsXG4gIDcwMDogIzVkNDAzNyxcbiAgODAwOiAjNGUzNDJlLFxuICA5MDA6ICMzZTI3MjMsXG4gIEExMDA6ICNkN2NjYzgsXG4gIEEyMDA6ICNiY2FhYTQsXG4gIEE0MDA6ICM4ZDZlNjMsXG4gIEE3MDA6ICM1ZDQwMzcsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtZ3JleTogKFxuICA1MDogI2ZhZmFmYSxcbiAgMTAwOiAjZjVmNWY1LFxuICAyMDA6ICNlZWVlZWUsXG4gIDMwMDogI2UwZTBlMCxcbiAgNDAwOiAjYmRiZGJkLFxuICA1MDA6ICM5ZTllOWUsXG4gIDYwMDogIzc1NzU3NSxcbiAgNzAwOiAjNjE2MTYxLFxuICA4MDA6ICM0MjQyNDIsXG4gIDkwMDogIzIxMjEyMSxcbiAgQTEwMDogI2ZmZmZmZixcbiAgQTIwMDogI2VlZWVlZSxcbiAgQTQwMDogI2JkYmRiZCxcbiAgQTcwMDogIzYxNjE2MSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4vLyBBbGlhcyBmb3IgYWx0ZXJuYXRlIHNwZWxsaW5nLlxuJG1hdC1ncmF5OiAkbWF0LWdyZXk7XG5cbiRtYXQtYmx1ZS1ncmV5OiAoXG4gIDUwOiAjZWNlZmYxLFxuICAxMDA6ICNjZmQ4ZGMsXG4gIDIwMDogI2IwYmVjNSxcbiAgMzAwOiAjOTBhNGFlLFxuICA0MDA6ICM3ODkwOWMsXG4gIDUwMDogIzYwN2Q4YixcbiAgNjAwOiAjNTQ2ZTdhLFxuICA3MDA6ICM0NTVhNjQsXG4gIDgwMDogIzM3NDc0ZixcbiAgOTAwOiAjMjYzMjM4LFxuICBBMTAwOiAjY2ZkOGRjLFxuICBBMjAwOiAjYjBiZWM1LFxuICBBNDAwOiAjNzg5MDljLFxuICBBNzAwOiAjNDU1YTY0LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbi8vIEFsaWFzIGZvciBhbHRlcm5hdGUgc3BlbGxpbmcuXG4kbWF0LWJsdWUtZ3JheTogJG1hdC1ibHVlLWdyZXk7XG5cblxuLy8gQmFja2dyb3VuZCBwYWxldHRlIGZvciBsaWdodCB0aGVtZXMuXG4kbWF0LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ6IChcbiAgc3RhdHVzLWJhcjogbWFwX2dldCgkbWF0LWdyZXksIDMwMCksXG4gIGFwcC1iYXI6ICAgIG1hcF9nZXQoJG1hdC1ncmV5LCAxMDApLFxuICBiYWNrZ3JvdW5kOiBtYXBfZ2V0KCRtYXQtZ3JleSwgNTApLFxuICBob3ZlcjogICAgICByZ2JhKGJsYWNrLCAwLjA0KSwgLy8gVE9ETyhrYXJhKTogY2hlY2sgc3R5bGUgd2l0aCBNYXRlcmlhbCBEZXNpZ24gVVhcbiAgY2FyZDogICAgICAgd2hpdGUsXG4gIGRpYWxvZzogICAgIHdoaXRlLFxuICBkaXNhYmxlZC1idXR0b246IHJnYmEoYmxhY2ssIDAuMTIpLFxuICByYWlzZWQtYnV0dG9uOiB3aGl0ZSxcbiAgZm9jdXNlZC1idXR0b246ICRkYXJrLWZvY3VzZWQsXG4gIHNlbGVjdGVkLWJ1dHRvbjogbWFwX2dldCgkbWF0LWdyZXksIDMwMCksXG4gIHNlbGVjdGVkLWRpc2FibGVkLWJ1dHRvbjogbWFwX2dldCgkbWF0LWdyZXksIDQwMCksXG4gIGRpc2FibGVkLWJ1dHRvbi10b2dnbGU6IG1hcF9nZXQoJG1hdC1ncmV5LCAyMDApLFxuICB1bnNlbGVjdGVkLWNoaXA6IG1hcF9nZXQoJG1hdC1ncmV5LCAzMDApLFxuICBkaXNhYmxlZC1saXN0LW9wdGlvbjogbWFwX2dldCgkbWF0LWdyZXksIDIwMCksXG4pO1xuXG4vLyBCYWNrZ3JvdW5kIHBhbGV0dGUgZm9yIGRhcmsgdGhlbWVzLlxuJG1hdC1kYXJrLXRoZW1lLWJhY2tncm91bmQ6IChcbiAgc3RhdHVzLWJhcjogYmxhY2ssXG4gIGFwcC1iYXI6ICAgIG1hcF9nZXQoJG1hdC1ncmV5LCA5MDApLFxuICBiYWNrZ3JvdW5kOiAjMzAzMDMwLFxuICBob3ZlcjogICAgICByZ2JhKHdoaXRlLCAwLjA0KSwgLy8gVE9ETyhrYXJhKTogY2hlY2sgc3R5bGUgd2l0aCBNYXRlcmlhbCBEZXNpZ24gVVhcbiAgY2FyZDogICAgICAgbWFwX2dldCgkbWF0LWdyZXksIDgwMCksXG4gIGRpYWxvZzogICAgIG1hcF9nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBkaXNhYmxlZC1idXR0b246IHJnYmEod2hpdGUsIDAuMTIpLFxuICByYWlzZWQtYnV0dG9uOiBtYXAtZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZm9jdXNlZC1idXR0b246ICRsaWdodC1mb2N1c2VkLFxuICBzZWxlY3RlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCA5MDApLFxuICBzZWxlY3RlZC1kaXNhYmxlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBkaXNhYmxlZC1idXR0b24tdG9nZ2xlOiBibGFjayxcbiAgdW5zZWxlY3RlZC1jaGlwOiBtYXBfZ2V0KCRtYXQtZ3JleSwgNzAwKSxcbiAgZGlzYWJsZWQtbGlzdC1vcHRpb246IGJsYWNrLFxuKTtcblxuLy8gRm9yZWdyb3VuZCBwYWxldHRlIGZvciBsaWdodCB0aGVtZXMuXG4kbWF0LWxpZ2h0LXRoZW1lLWZvcmVncm91bmQ6IChcbiAgYmFzZTogICAgICAgICAgICAgIGJsYWNrLFxuICBkaXZpZGVyOiAgICAgICAgICAgJGRhcmstZGl2aWRlcnMsXG4gIGRpdmlkZXJzOiAgICAgICAgICAkZGFyay1kaXZpZGVycyxcbiAgZGlzYWJsZWQ6ICAgICAgICAgICRkYXJrLWRpc2FibGVkLXRleHQsXG4gIGRpc2FibGVkLWJ1dHRvbjogICByZ2JhKGJsYWNrLCAwLjI2KSxcbiAgZGlzYWJsZWQtdGV4dDogICAgICRkYXJrLWRpc2FibGVkLXRleHQsXG4gIGVsZXZhdGlvbjogICAgICAgICBibGFjayxcbiAgaGludC10ZXh0OiAgICAgICAgICRkYXJrLWRpc2FibGVkLXRleHQsXG4gIHNlY29uZGFyeS10ZXh0OiAgICAkZGFyay1zZWNvbmRhcnktdGV4dCxcbiAgaWNvbjogICAgICAgICAgICAgIHJnYmEoYmxhY2ssIDAuNTQpLFxuICBpY29uczogICAgICAgICAgICAgcmdiYShibGFjaywgMC41NCksXG4gIHRleHQ6ICAgICAgICAgICAgICByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgc2xpZGVyLW1pbjogICAgICAgIHJnYmEoYmxhY2ssIDAuODcpLFxuICBzbGlkZXItb2ZmOiAgICAgICAgcmdiYShibGFjaywgMC4yNiksXG4gIHNsaWRlci1vZmYtYWN0aXZlOiByZ2JhKGJsYWNrLCAwLjM4KSxcbik7XG5cbi8vIEZvcmVncm91bmQgcGFsZXR0ZSBmb3IgZGFyayB0aGVtZXMuXG4kbWF0LWRhcmstdGhlbWUtZm9yZWdyb3VuZDogKFxuICBiYXNlOiAgICAgICAgICAgICAgd2hpdGUsXG4gIGRpdmlkZXI6ICAgICAgICAgICAkbGlnaHQtZGl2aWRlcnMsXG4gIGRpdmlkZXJzOiAgICAgICAgICAkbGlnaHQtZGl2aWRlcnMsXG4gIGRpc2FibGVkOiAgICAgICAgICAkbGlnaHQtZGlzYWJsZWQtdGV4dCxcbiAgZGlzYWJsZWQtYnV0dG9uOiAgIHJnYmEod2hpdGUsIDAuMyksXG4gIGRpc2FibGVkLXRleHQ6ICAgICAkbGlnaHQtZGlzYWJsZWQtdGV4dCxcbiAgZWxldmF0aW9uOiAgICAgICAgIGJsYWNrLFxuICBoaW50LXRleHQ6ICAgICAgICAgJGxpZ2h0LWRpc2FibGVkLXRleHQsXG4gIHNlY29uZGFyeS10ZXh0OiAgICAkbGlnaHQtc2Vjb25kYXJ5LXRleHQsXG4gIGljb246ICAgICAgICAgICAgICB3aGl0ZSxcbiAgaWNvbnM6ICAgICAgICAgICAgIHdoaXRlLFxuICB0ZXh0OiAgICAgICAgICAgICAgd2hpdGUsXG4gIHNsaWRlci1taW46ICAgICAgICB3aGl0ZSxcbiAgc2xpZGVyLW9mZjogICAgICAgIHJnYmEod2hpdGUsIDAuMyksXG4gIHNsaWRlci1vZmYtYWN0aXZlOiByZ2JhKHdoaXRlLCAwLjMpLFxuKTtcblxuXG5cbi8vIEZvciBhIGdpdmVuIGh1ZSBpbiBhIHBhbGV0dGUsIHJldHVybiB0aGUgY29udHJhc3QgY29sb3IgZnJvbSB0aGUgbWFwIG9mIGNvbnRyYXN0IHBhbGV0dGVzLlxuLy8gQHBhcmFtICRjb2xvci1tYXBcbi8vIEBwYXJhbSAkaHVlXG5AZnVuY3Rpb24gbWF0LWNvbnRyYXN0KCRwYWxldHRlLCAkaHVlKSB7XG4gIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRwYWxldHRlLCBjb250cmFzdCksICRodWUpO1xufVxuXG5cbi8vIENyZWF0ZXMgYSBtYXAgb2YgaHVlcyB0byBjb2xvcnMgZm9yIGEgdGhlbWUuIFRoaXMgaXMgdXNlZCB0byBkZWZpbmUgYSB0aGVtZSBwYWxldHRlIGluIHRlcm1zXG4vLyBvZiB0aGUgTWF0ZXJpYWwgRGVzaWduIGh1ZXMuXG4vLyBAcGFyYW0gJGNvbG9yLW1hcFxuLy8gQHBhcmFtICRwcmltYXJ5XG4vLyBAcGFyYW0gJGxpZ2h0ZXJcbkBmdW5jdGlvbiBtYXQtcGFsZXR0ZSgkYmFzZS1wYWxldHRlLCAkZGVmYXVsdDogNTAwLCAkbGlnaHRlcjogMTAwLCAkZGFya2VyOiA3MDApIHtcbiAgJHJlc3VsdDogbWFwX21lcmdlKCRiYXNlLXBhbGV0dGUsIChcbiAgICBkZWZhdWx0OiBtYXAtZ2V0KCRiYXNlLXBhbGV0dGUsICRkZWZhdWx0KSxcbiAgICBsaWdodGVyOiBtYXAtZ2V0KCRiYXNlLXBhbGV0dGUsICRsaWdodGVyKSxcbiAgICBkYXJrZXI6IG1hcC1nZXQoJGJhc2UtcGFsZXR0ZSwgJGRhcmtlciksXG5cbiAgICBkZWZhdWx0LWNvbnRyYXN0OiBtYXQtY29udHJhc3QoJGJhc2UtcGFsZXR0ZSwgJGRlZmF1bHQpLFxuICAgIGxpZ2h0ZXItY29udHJhc3Q6IG1hdC1jb250cmFzdCgkYmFzZS1wYWxldHRlLCAkbGlnaHRlciksXG4gICAgZGFya2VyLWNvbnRyYXN0OiBtYXQtY29udHJhc3QoJGJhc2UtcGFsZXR0ZSwgJGRhcmtlcilcbiAgKSk7XG5cbiAgLy8gRm9yIGVhY2ggaHVlIGluIHRoZSBwYWxldHRlLCBhZGQgYSBcIi1jb250cmFzdFwiIGNvbG9yIHRvIHRoZSBtYXAuXG4gIEBlYWNoICRodWUsICRjb2xvciBpbiAkYmFzZS1wYWxldHRlIHtcbiAgICAkcmVzdWx0OiBtYXBfbWVyZ2UoJHJlc3VsdCwgKFxuICAgICAgJyN7JGh1ZX0tY29udHJhc3QnOiBtYXQtY29udHJhc3QoJGJhc2UtcGFsZXR0ZSwgJGh1ZSlcbiAgICApKTtcbiAgfVxuXG4gIEByZXR1cm4gJHJlc3VsdDtcbn1cblxuXG4vLyBHZXRzIGEgY29sb3IgZnJvbSBhIHRoZW1lIHBhbGV0dGUgKHRoZSBvdXRwdXQgb2YgbWF0LXBhbGV0dGUpLlxuLy8gVGhlIGh1ZSBjYW4gYmUgb25lIG9mIHRoZSBzdGFuZGFyZCB2YWx1ZXMgKDUwMCwgQTQwMCwgZXRjLiksIG9uZSBvZiB0aGUgdGhyZWUgcHJlY29uZmlndXJlZFxuLy8gaHVlcyAoZGVmYXVsdCwgbGlnaHRlciwgZGFya2VyKSwgb3IgYW55IG9mIHRoZSBhZm9yZW1lbnRpb25lZCBwcmVmaXhlZCB3aXRoIFwiLWNvbnRyYXN0XCIuXG4vL1xuLy8gQHBhcmFtICRjb2xvci1tYXAgVGhlIHRoZW1lIHBhbGV0dGUgKG91dHB1dCBvZiBtYXQtcGFsZXR0ZSkuXG4vLyBAcGFyYW0gJGh1ZSBUaGUgaHVlIGZyb20gdGhlIHBhbGV0dGUgdG8gdXNlLiBJZiB0aGlzIGlzIGEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxLCBpdCB3aWxsXG4vLyAgICAgYmUgdHJlYXRlZCBhcyBvcGFjaXR5LlxuLy8gQHBhcmFtICRvcGFjaXR5IFRoZSBhbHBoYSBjaGFubmVsIHZhbHVlIGZvciB0aGUgY29sb3IuXG5AZnVuY3Rpb24gbWF0LWNvbG9yKCRwYWxldHRlLCAkaHVlOiBkZWZhdWx0LCAkb3BhY2l0eTogbnVsbCkge1xuICAvLyBJZiBodWVLZXkgaXMgYSBudW1iZXIgYmV0d2VlbiB6ZXJvIGFuZCBvbmUsIHRoZW4gaXQgYWN0dWFsbHkgY29udGFpbnMgYW5cbiAgLy8gb3BhY2l0eSB2YWx1ZSwgc28gcmVjYWxsIHRoaXMgZnVuY3Rpb24gd2l0aCB0aGUgZGVmYXVsdCBodWUgYW5kIHRoYXQgZ2l2ZW4gb3BhY2l0eS5cbiAgQGlmIHR5cGUtb2YoJGh1ZSkgPT0gbnVtYmVyIGFuZCAkaHVlID49IDAgYW5kICRodWUgPD0gMSB7XG4gICAgQHJldHVybiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQsICRodWUpO1xuICB9XG5cbiAgJGNvbG9yOiBtYXAtZ2V0KCRwYWxldHRlLCAkaHVlKTtcblxuICBAaWYgKHR5cGUtb2YoJGNvbG9yKSAhPSBjb2xvcikge1xuICAgIC8vIElmIHRoZSAkY29sb3IgcmVzb2x2ZWQgdG8gc29tZXRoaW5nIGRpZmZlcmVudCBmcm9tIGEgY29sb3IgKGUuZy4gYSBDU1MgdmFyaWFibGUpLFxuICAgIC8vIHdlIGNhbid0IGFwcGx5IHRoZSBvcGFjaXR5IGFueXdheSBzbyB3ZSByZXR1cm4gdGhlIHZhbHVlIGFzIGlzLCBvdGhlcndpc2UgU2FzcyBjYW5cbiAgICAvLyB0aHJvdyBhbiBlcnJvciBvciBvdXRwdXQgc29tZXRoaW5nIGludmFsaWQuXG4gICAgQHJldHVybiAkY29sb3I7XG4gIH1cblxuICBAcmV0dXJuIHJnYmEoJGNvbG9yLCBpZigkb3BhY2l0eSA9PSBudWxsLCBvcGFjaXR5KCRjb2xvciksICRvcGFjaXR5KSk7XG59XG5cblxuLy8gQ3JlYXRlcyBhIGNvbnRhaW5lciBvYmplY3QgZm9yIGEgbGlnaHQgdGhlbWUgdG8gYmUgZ2l2ZW4gdG8gaW5kaXZpZHVhbCBjb21wb25lbnQgdGhlbWUgbWl4aW5zLlxuQGZ1bmN0aW9uIG1hdC1saWdodC10aGVtZSgkcHJpbWFyeSwgJGFjY2VudCwgJHdhcm46IG1hdC1wYWxldHRlKCRtYXQtcmVkKSkge1xuICBAcmV0dXJuIChcbiAgICBwcmltYXJ5OiAkcHJpbWFyeSxcbiAgICBhY2NlbnQ6ICRhY2NlbnQsXG4gICAgd2FybjogJHdhcm4sXG4gICAgaXMtZGFyazogZmFsc2UsXG4gICAgZm9yZWdyb3VuZDogJG1hdC1saWdodC10aGVtZS1mb3JlZ3JvdW5kLFxuICAgIGJhY2tncm91bmQ6ICRtYXQtbGlnaHQtdGhlbWUtYmFja2dyb3VuZCxcbiAgKTtcbn1cblxuXG4vLyBDcmVhdGVzIGEgY29udGFpbmVyIG9iamVjdCBmb3IgYSBkYXJrIHRoZW1lIHRvIGJlIGdpdmVuIHRvIGluZGl2aWR1YWwgY29tcG9uZW50IHRoZW1lIG1peGlucy5cbkBmdW5jdGlvbiBtYXQtZGFyay10aGVtZSgkcHJpbWFyeSwgJGFjY2VudCwgJHdhcm46IG1hdC1wYWxldHRlKCRtYXQtcmVkKSkge1xuICBAcmV0dXJuIChcbiAgICBwcmltYXJ5OiAkcHJpbWFyeSxcbiAgICBhY2NlbnQ6ICRhY2NlbnQsXG4gICAgd2FybjogJHdhcm4sXG4gICAgaXMtZGFyazogdHJ1ZSxcbiAgICBmb3JlZ3JvdW5kOiAkbWF0LWRhcmstdGhlbWUtZm9yZWdyb3VuZCxcbiAgICBiYWNrZ3JvdW5kOiAkbWF0LWRhcmstdGhlbWUtYmFja2dyb3VuZCxcbiAgKTtcbn1cblxuXG5cbiRtYXQtcmlwcGxlLWNvbG9yLW9wYWNpdHk6IDAuMTtcblxuQG1peGluIG1hdC1yaXBwbGUoKSB7XG5cbiAgLy8gVGhlIGhvc3QgZWxlbWVudCBvZiBhbiBtYXQtcmlwcGxlIGRpcmVjdGl2ZSBzaG91bGQgYWx3YXlzIGhhdmUgYSBwb3NpdGlvbiBvZiBcImFic29sdXRlXCIgb3JcbiAgLy8gXCJyZWxhdGl2ZVwiIHNvIHRoYXQgdGhlIHJpcHBsZXMgaW5zaWRlIGFyZSBjb3JyZWN0bHkgcG9zaXRpb25lZCByZWxhdGl2ZWx5IHRvIHRoZSBjb250YWluZXIuXG4gIC5tYXQtcmlwcGxlIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLy8gQnkgZGVmYXVsdCwgZXZlcnkgcmlwcGxlIGNvbnRhaW5lciBzaG91bGQgaGF2ZSBwb3NpdGlvbjogcmVsYXRpdmUgaW4gZmF2b3Igb2YgY3JlYXRpbmcgYW5cbiAgICAvLyBlYXN5IEFQSSBmb3IgZGV2ZWxvcGVycyB1c2luZyB0aGUgTWF0UmlwcGxlIGRpcmVjdGl2ZS5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAubWF0LXJpcHBsZS5tYXQtcmlwcGxlLXVuYm91bmRlZCB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cblxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSwgdHJhbnNmb3JtIDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuXG4gICAgLy8gSW4gaGlnaCBjb250cmFzdCBtb2RlIHRoZSByaXBwbGUgaXMgb3BhcXVlLCBjYXVzaW5nIGl0IHRvIG9ic3RydWN0IHRoZSBjb250ZW50LlxuICAgIEBpbmNsdWRlIGNkay1oaWdoLWNvbnRyYXN0IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi8qIFRoZW1lIGZvciB0aGUgcmlwcGxlIGVsZW1lbnRzLiovXG5AbWl4aW4gbWF0LXJpcHBsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcF9nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQtYmFzZTogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgLy8gSWYgdGhlIHJpcHBsZSBjb2xvciBpcyByZXNvbHZlcyB0byBhIGNvbG9yICp0eXBlKiwgd2UgY2FuIHVzZSBpdCBkaXJlY3RseSwgb3RoZXJ3aXNlXG4gICAgLy8gKGUuZy4gaXQgcmVzb2x2ZXMgdG8gYSBDU1MgdmFyaWFibGUpIHdlIGZhbGwgYmFjayB0byB1c2luZyB0aGUgY29sb3IgYW5kIHNldHRpbmcgYW4gb3BhY2l0eS5cbiAgICBAaWYgKHR5cGUtb2YoJGZvcmVncm91bmQtYmFzZSkgPT0gY29sb3IpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGZvcmVncm91bmQtYmFzZSwgJG1hdC1yaXBwbGUtY29sb3Itb3BhY2l0eSk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmb3JlZ3JvdW5kLWJhc2U7XG4gICAgICBvcGFjaXR5OiAkbWF0LXJpcHBsZS1jb2xvci1vcGFjaXR5O1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gVXRpbGl0eSBmb3IgZmV0Y2hpbmcgYSBuZXN0ZWQgdmFsdWUgZnJvbSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCAkbmFtZSkge1xuICBAcmV0dXJuIG1hcC1nZXQobWFwLWdldCgkY29uZmlnLCAkbGV2ZWwpLCAkbmFtZSk7XG59XG5cbi8vIEdldHMgdGhlIGZvbnQgc2l6ZSBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtZm9udC1zaXplKCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBmb250LXNpemUpO1xufVxuXG4vLyBHZXRzIHRoZSBsaW5lIGhlaWdodCBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGxpbmUtaGVpZ2h0KTtcbn1cblxuLy8gR2V0cyB0aGUgZm9udCB3ZWlnaHQgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBmb250LXdlaWdodCk7XG59XG5cbi8vIEdldHMgdGhlIGxldHRlciBzcGFjaW5nIGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1sZXR0ZXItc3BhY2luZygkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgbGV0dGVyLXNwYWNpbmcpO1xufVxuXG4vLyBHZXRzIHRoZSBmb250LWZhbWlseSBmcm9tIGEgdHlwb2dyYXBoeSBjb25maWcgYW5kIHJlbW92ZXMgdGhlIHF1b3RlcyBhcm91bmQgaXQuXG5AZnVuY3Rpb24gbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsICRsZXZlbDogbnVsbCkge1xuICAkZm9udC1mYW1pbHk6IG1hcC1nZXQoJGNvbmZpZywgZm9udC1mYW1pbHkpO1xuXG4gIEBpZiAkbGV2ZWwgIT0gbnVsbCB7XG4gICAgJGZvbnQtZmFtaWx5OiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgZm9udC1mYW1pbHkpO1xuICB9XG5cbiAgLy8gR3VhcmQgYWdhaW5zdCB1bnF1b3Rpbmcgbm9uLXN0cmluZyB2YWx1ZXMsIGJlY2F1c2UgaXQncyBkZXByZWNhdGVkLlxuICBAcmV0dXJuIGlmKHR5cGUtb2YoJGZvbnQtZmFtaWx5KSA9PSBzdHJpbmcsIHVucXVvdGUoJGZvbnQtZmFtaWx5KSwgJGZvbnQtZmFtaWx5KTtcbn1cblxuLy8gT3V0cHV0cyB0aGUgc2hvcnRoYW5kIGBmb250YCBDU1MgcHJvcGVydHksIGJhc2VkIG9uIGEgc2V0IG9mIHR5cG9ncmFwaHkgdmFsdWVzLiBGYWxscyBiYWNrIHRvXG4vLyB0aGUgaW5kaXZpZHVhbCBwcm9wZXJ0aWVzIGlmIGEgdmFsdWUgdGhhdCBpc24ndCBhbGxvd2VkIGluIHRoZSBzaG9ydGhhbmQgaXMgcGFzc2VkIGluLlxuQG1peGluIG1hdC10eXBvZ3JhcGh5LWZvbnQtc2hvcnRoYW5kKCRmb250LXNpemUsICRmb250LXdlaWdodCwgJGxpbmUtaGVpZ2h0LCAkZm9udC1mYW1pbHkpIHtcbiAgLy8gSWYgYW55IG9mIHRoZSB2YWx1ZXMgYXJlIHNldCB0byBgaW5oZXJpdGAsIHdlIGNhbid0IHVzZSB0aGUgc2hvcnRoYW5kXG4gIC8vIHNvIHdlIGZhbGwgYmFjayB0byBwYXNzaW5nIGluIHRoZSBpbmRpdmlkdWFsIHByb3BlcnRpZXMuXG4gIEBpZiAoJGZvbnQtc2l6ZSA9PSBpbmhlcml0IG9yXG4gICAgICAgJGZvbnQtd2VpZ2h0ID09IGluaGVyaXQgb3JcbiAgICAgICAkbGluZS1oZWlnaHQgPT0gaW5oZXJpdCBvclxuICAgICAgICRmb250LWZhbWlseSA9PSBpbmhlcml0IG9yXG4gICAgICAgJGZvbnQtc2l6ZSA9PSBudWxsIG9yXG4gICAgICAgJGZvbnQtd2VpZ2h0ID09IG51bGwgb3JcbiAgICAgICAkbGluZS1oZWlnaHQgPT0gbnVsbCBvclxuICAgICAgICRmb250LWZhbWlseSA9PSBudWxsKSB7XG5cbiAgICBmb250LXNpemU6ICRmb250LXNpemU7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIH1cbiAgQGVsc2Uge1xuICAgIC8vIE90aGVyd2lzZSB1c2UgdGhlIHNob3J0aGFuZCBgZm9udGAsIGJlY2F1c2UgaXQncyB0aGUgbGVhc3QgYW1vdW50IG9mIGJ5dGVzLiBOb3RlXG4gICAgLy8gdGhhdCB3ZSBuZWVkIHRvIHVzZSBpbnRlcnBvbGF0aW9uIGZvciBgZm9udC1zaXplL2xpbmUtaGVpZ2h0YCBpbiBvcmRlciB0byBwcmV2ZW50XG4gICAgLy8gU2FzcyBmcm9tIGRpdmlkaW5nIHRoZSB0d28gdmFsdWVzLlxuICAgIGZvbnQ6ICRmb250LXdlaWdodCAjeyRmb250LXNpemV9LyN7JGxpbmUtaGVpZ2h0fSAkZm9udC1mYW1pbHk7XG4gIH1cbn1cblxuLy8gQ29udmVydHMgYSB0eXBvZ3JhcGh5IGxldmVsIGludG8gQ1NTIHN0eWxlcy5cbkBtaXhpbiBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgJGxldmVsKSB7XG4gICRmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgJGxldmVsKTtcbiAgJGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgJGxldmVsKTtcbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgJGxldmVsKTtcbiAgJGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgJGxldmVsKTtcblxuICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZCgkZm9udC1zaXplLCAkZm9udC13ZWlnaHQsICRsaW5lLWhlaWdodCwgJGZvbnQtZmFtaWx5KTtcbiAgbGV0dGVyLXNwYWNpbmc6IG1hdC1sZXR0ZXItc3BhY2luZygkY29uZmlnLCAkbGV2ZWwpO1xufVxuXG5cbkBtaXhpbiBtYXQtb3B0aW9uLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LW9wdGlvbiB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmOmhvdmVyOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCksXG4gICAgJjpmb2N1czpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cblxuICAgIC8vIEluIG11bHRpcGxlIG1vZGUgdGhlcmUgaXMgYSBjaGVja2JveCB0byBzaG93IHRoYXQgdGhlIG9wdGlvbiBpcyBzZWxlY3RlZC5cbiAgICAmLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuXG4gICAgJi5tYXQtYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgJi5tYXQtb3B0aW9uLWRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgfVxuXG4gIC5tYXQtYWNjZW50IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICB9XG5cbiAgLm1hdC13YXJuIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LW9wdGlvbi10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1vcHRpb24ge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtb3B0Z3JvdXAtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1vcHRncm91cC1kaXNhYmxlZCAubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtb3B0Z3JvdXAtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTIpO1xuICB9XG59XG5cblxuXG5AbWl4aW4gbWF0LXBzZXVkby1jaGVja2JveC10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG5cbiAgLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogV2hpbGUgdGhlIHNwZWMgY2FsbHMgZm9yIHRyYW5zbHVjZW50IGJsYWNrcy93aGl0ZXMgZm9yIGRpc2FibGVkIGNvbG9ycyxcbiAgLy8gdGhpcyBkb2VzIG5vdCB3b3JrIHdlbGwgd2l0aCBlbGVtZW50cyBsYXllcmVkIG9uIHRvcCBvZiBvbmUgYW5vdGhlci4gVG8gZ2V0IGFyb3VuZCB0aGlzIHdlXG4gIC8vIGJsZW5kIHRoZSBjb2xvcnMgdG9nZXRoZXIgYmFzZWQgb24gdGhlIGJhc2UgY29sb3IgYW5kIHRoZSB0aGVtZSBiYWNrZ3JvdW5kLlxuICAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrOiAjNjg2ODY4O1xuICAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodDogI2IwYjBiMDtcbiAgJGRpc2FibGVkLWNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyaywgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQpO1xuICAkY29sb3JlZC1ib3gtc2VsZWN0b3I6ICcubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlJztcblxuICAubWF0LXBzZXVkby1jaGVja2JveCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCksIHNlY29uZGFyeS10ZXh0KTtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVkIHtcbiAgICBjb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICB9XG5cbiAgLy8gRGVmYXVsdCB0byB0aGUgYWNjZW50IGNvbG9yLiBOb3RlIHRoYXQgdGhlIHBzZXVkbyBjaGVja2JveGVzIGFyZSBtZWFudCB0byBpbmhlcml0IHRoZVxuICAvLyB0aGVtZSBmcm9tIHRoZWlyIHBhcmVudCwgcmF0aGVyIHRoYW4gaW1wbGVtZW50aW5nIHRoZWlyIG93biB0aGVtaW5nLCB3aGljaCBpcyB3aHkgd2VcbiAgLy8gZG9uJ3QgYXR0YWNoIHRvIHRoZSBgbWF0LSpgIGNsYXNzZXMuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUsXG4gIC5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KSk7XG4gIH1cblxuICAubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbiAgLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSkpO1xuICB9XG5cbiAgLm1hdC13YXJuIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHdhcm4pKTtcbiAgfVxuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgICYubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBSZXByZXNlbnRzIGEgdHlwb2dyYXBoeSBsZXZlbCBmcm9tIHRoZSBNYXRlcmlhbCBkZXNpZ24gc3BlYy5cbkBmdW5jdGlvbiBtYXQtdHlwb2dyYXBoeS1sZXZlbChcbiAgJGZvbnQtc2l6ZSxcbiAgJGxpbmUtaGVpZ2h0OiAkZm9udC1zaXplLFxuICAkZm9udC13ZWlnaHQ6IDQwMCxcbiAgJGZvbnQtZmFtaWx5OiBudWxsLFxuICAkbGV0dGVyLXNwYWNpbmc6IG51bGwpIHtcblxuICBAcmV0dXJuIChcbiAgICBmb250LXNpemU6ICRmb250LXNpemUsXG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodCxcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LFxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHksXG4gICAgbGV0dGVyLXNwYWNpbmc6ICRsZXR0ZXItc3BhY2luZ1xuICApO1xufVxuXG4vLyBSZXByZXNlbnRzIGEgY29sbGVjdGlvbiBvZiB0eXBvZ3JhcGh5IGxldmVscy5cbi8vIERlZmF1bHRzIGNvbWUgZnJvbSBodHRwczovL21hdGVyaWFsLmlvL2d1aWRlbGluZXMvc3R5bGUvdHlwb2dyYXBoeS5odG1sXG5AZnVuY3Rpb24gbWF0LXR5cG9ncmFwaHktY29uZmlnKFxuICAkZm9udC1mYW1pbHk6ICAgJ1JvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmJyxcbiAgJGRpc3BsYXktNDogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDExMnB4LCAxMTJweCwgMzAwKSxcbiAgJGRpc3BsYXktMzogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDU2cHgsIDU2cHgsIDQwMCksXG4gICRkaXNwbGF5LTI6ICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCg0NXB4LCA0OHB4LCA0MDApLFxuICAkZGlzcGxheS0xOiAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMzRweCwgNDBweCwgNDAwKSxcbiAgJGhlYWRsaW5lOiAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDI0cHgsIDMycHgsIDQwMCksXG4gICR0aXRsZTogICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgyMHB4LCAzMnB4LCA1MDApLFxuICAkc3ViaGVhZGluZy0yOiAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTZweCwgMjhweCwgNDAwKSxcbiAgJHN1YmhlYWRpbmctMTogIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE1cHgsIDI0cHgsIDQwMCksXG4gICRib2R5LTI6ICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNHB4LCAyNHB4LCA1MDApLFxuICAkYm9keS0xOiAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTRweCwgMjBweCwgNDAwKSxcbiAgJGNhcHRpb246ICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDEycHgsIDIwcHgsIDQwMCksXG4gICRidXR0b246ICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNHB4LCAxNHB4LCA1MDApLFxuICAvLyBMaW5lLWhlaWdodCBtdXN0IGJlIHVuaXQtbGVzcyBmcmFjdGlvbiBvZiB0aGUgZm9udC1zaXplLlxuICAkaW5wdXQ6ICAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoaW5oZXJpdCwgMS4xMjUsIDQwMClcbikge1xuXG4gIC8vIERlY2xhcmUgYW4gaW5pdGlhbCBtYXAgd2l0aCBhbGwgb2YgdGhlIGxldmVscy5cbiAgJGNvbmZpZzogKFxuICAgIGRpc3BsYXktNDogICAgICAkZGlzcGxheS00LFxuICAgIGRpc3BsYXktMzogICAgICAkZGlzcGxheS0zLFxuICAgIGRpc3BsYXktMjogICAgICAkZGlzcGxheS0yLFxuICAgIGRpc3BsYXktMTogICAgICAkZGlzcGxheS0xLFxuICAgIGhlYWRsaW5lOiAgICAgICAkaGVhZGxpbmUsXG4gICAgdGl0bGU6ICAgICAgICAgICR0aXRsZSxcbiAgICBzdWJoZWFkaW5nLTI6ICAgJHN1YmhlYWRpbmctMixcbiAgICBzdWJoZWFkaW5nLTE6ICAgJHN1YmhlYWRpbmctMSxcbiAgICBib2R5LTI6ICAgICAgICAgJGJvZHktMixcbiAgICBib2R5LTE6ICAgICAgICAgJGJvZHktMSxcbiAgICBjYXB0aW9uOiAgICAgICAgJGNhcHRpb24sXG4gICAgYnV0dG9uOiAgICAgICAgICRidXR0b24sXG4gICAgaW5wdXQ6ICAgICAgICAgICRpbnB1dCxcbiAgKTtcblxuICAvLyBMb29wIHRocm91Z2ggdGhlIGxldmVscyBhbmQgc2V0IHRoZSBgZm9udC1mYW1pbHlgIG9mIHRoZSBvbmVzIHRoYXQgZG9uJ3QgaGF2ZSBvbmUgdG8gdGhlIGJhc2UuXG4gIC8vIE5vdGUgdGhhdCBTYXNzIGNhbid0IG1vZGlmeSBtYXBzIGluIHBsYWNlLCB3aGljaCBtZWFucyB0aGF0IHdlIG5lZWQgdG8gbWVyZ2UgYW5kIHJlLWFzc2lnbi5cbiAgQGVhY2ggJGtleSwgJGxldmVsIGluICRjb25maWcge1xuICAgIEBpZiBtYXAtZ2V0KCRsZXZlbCwgZm9udC1mYW1pbHkpID09IG51bGwge1xuICAgICAgJG5ldy1sZXZlbDogbWFwLW1lcmdlKCRsZXZlbCwgKGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHkpKTtcbiAgICAgICRjb25maWc6IG1hcC1tZXJnZSgkY29uZmlnLCAoJGtleTogJG5ldy1sZXZlbCkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCB0aGUgYmFzZSBmb250IGZhbWlseSB0byB0aGUgY29uZmlnLlxuICBAcmV0dXJuIG1hcC1tZXJnZSgkY29uZmlnLCAoZm9udC1mYW1pbHk6ICRmb250LWZhbWlseSkpO1xufVxuXG4vLyBBZGRzIHRoZSBiYXNlIHR5cG9ncmFwaHkgc3R5bGVzLCBiYXNlZCBvbiBhIGNvbmZpZy5cbkBtaXhpbiBtYXQtYmFzZS10eXBvZ3JhcGh5KCRjb25maWcsICRzZWxlY3RvcjogJy5tYXQtdHlwb2dyYXBoeScpIHtcbiAgLm1hdC1oMSwgLm1hdC1oZWFkbGluZSwgI3skc2VsZWN0b3J9IGgxIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgaGVhZGxpbmUpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAubWF0LWgyLCAubWF0LXRpdGxlLCAjeyRzZWxlY3Rvcn0gaDIge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCB0aXRsZSk7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC5tYXQtaDMsIC5tYXQtc3ViaGVhZGluZy0yLCAjeyRzZWxlY3Rvcn0gaDMge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAubWF0LWg0LCAubWF0LXN1YmhlYWRpbmctMSwgI3skc2VsZWN0b3J9IGg0IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLy8gTm90ZTogdGhlIHNwZWMgZG9lc24ndCBoYXZlIGFueXRoaW5nIHRoYXQgd291bGQgY29ycmVzcG9uZCB0byBoNSBhbmQgaDYsIGJ1dCB3ZSBhZGQgdGhlc2UgZm9yXG4gIC8vIGNvbnNpc3RlbmN5LiBUaGUgZm9udCBzaXplcyBjb21lIGZyb20gdGhlIENocm9tZSB1c2VyIGFnZW50IHN0eWxlcyB3aGljaCBoYXZlIGg1IGF0IDAuODNlbVxuICAvLyBhbmQgaDYgYXQgMC42N2VtLlxuICAubWF0LWg1LCAjeyRzZWxlY3Rvcn0gaDUge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWZvbnQtc2hvcnRoYW5kKFxuICAgICAgbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpICogMC44MyxcbiAgICAgIG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGJvZHktMSksXG4gICAgICBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKVxuICAgICk7XG5cbiAgICBtYXJnaW46IDAgMCAxMnB4O1xuICB9XG5cbiAgLm1hdC1oNiwgI3skc2VsZWN0b3J9IGg2IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZChcbiAgICAgIG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKSAqIDAuNjcsXG4gICAgICBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMSlcbiAgICApO1xuXG4gICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgfVxuXG4gIC5tYXQtYm9keS1zdHJvbmcsIC5tYXQtYm9keS0yIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxuXG4gIC5tYXQtYm9keSwgLm1hdC1ib2R5LTEsICN7JHNlbGVjdG9yfSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMSk7XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMCAwIDEycHg7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbWFsbCwgLm1hdC1jYXB0aW9uIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgY2FwdGlvbik7XG4gIH1cblxuICAvLyBOb3RlOiBUaGUgc3BlYyBkb2Vzbid0IG1lbnRpb24gbGV0dGVyIHNwYWNpbmcuIFRoZSB2YWx1ZSBjb21lcyBmcm9tXG4gIC8vIGV5ZWJhbGxpbmcgaXQgdW50aWwgaXQgbG9va2VkIGV4YWN0bHkgbGlrZSB0aGUgc3BlYyBleGFtcGxlcy5cbiAgLm1hdC1kaXNwbGF5LTQsICN7JHNlbGVjdG9yfSAubWF0LWRpc3BsYXktNCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGRpc3BsYXktNCk7XG4gICAgbWFyZ2luOiAwIDAgNTZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDVlbTtcbiAgfVxuXG4gIC5tYXQtZGlzcGxheS0zLCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTMge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTMpO1xuICAgIG1hcmdpbjogMCAwIDY0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gIH1cblxuICAubWF0LWRpc3BsYXktMiwgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS0yIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS0yKTtcbiAgICBtYXJnaW46IDAgMCA2NHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMDVlbTtcbiAgfVxuXG4gIC5tYXQtZGlzcGxheS0xLCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTEge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTEpO1xuICAgIG1hcmdpbjogMCAwIDY0cHg7XG4gIH1cbn1cblxuXG5cblxuQG1peGluIG1hdC1hdXRvY29tcGxldGUtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG5cbiAgLm1hdC1hdXRvY29tcGxldGUtcGFuZWwge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDQsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgIC8vIFNlbGVjdGVkIG9wdGlvbnMgaW4gYXV0b2NvbXBsZXRlcyBzaG91bGQgbm90IGJlIGdyYXksIGJ1dCB3ZVxuICAgIC8vIG9ubHkgd2FudCB0byBvdmVycmlkZSB0aGUgYmFja2dyb3VuZCBmb3Igc2VsZWN0ZWQgb3B0aW9ucyBpZlxuICAgIC8vIHRoZXkgYXJlICpub3QqIGluIGhvdmVyIG9yIGZvY3VzIHN0YXRlLiBUaGlzIGNoYW5nZSBoYXMgdG8gYmVcbiAgICAvLyBtYWRlIGhlcmUgYmVjYXVzZSBiYXNlIG9wdGlvbiBzdHlsZXMgYXJlIHNoYXJlZCBiZXR3ZWVuIHRoZVxuICAgIC8vIGF1dG9jb21wbGV0ZSBhbmQgdGhlIHNlbGVjdC5cbiAgICAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtYWN0aXZlKTpub3QoOmhvdmVyKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuXG4gICAgICAmOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG5AbWl4aW4gbWF0LWF1dG9jb21wbGV0ZS10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG4vLyBUaGlzIGNvbnRhaW5zIGFsbCBvZiB0aGUgc3R5bGVzIGZvciB0aGUgYmFkZ2Vcbi8vIHJhdGhlciB0aGFuIGp1c3QgdGhlIGNvbG9yL3RoZW1lIGJlY2F1c2Ugb2Zcbi8vIG5vIHN0eWxlIHNoZWV0IHN1cHBvcnQgZm9yIGRpcmVjdGl2ZXMuXG5cblxuXG5cblxuJG1hdC1iYWRnZS1mb250LXNpemU6IDEycHg7XG4kbWF0LWJhZGdlLWZvbnQtd2VpZ2h0OiA2MDA7XG4kbWF0LWJhZGdlLWRlZmF1bHQtc2l6ZTogMjJweCAhZGVmYXVsdDtcbiRtYXQtYmFkZ2Utc21hbGwtc2l6ZTogJG1hdC1iYWRnZS1kZWZhdWx0LXNpemUgLSA2O1xuJG1hdC1iYWRnZS1sYXJnZS1zaXplOiAkbWF0LWJhZGdlLWRlZmF1bHQtc2l6ZSArIDY7XG5cbi8vIE1peGluIGZvciBidWlsZGluZyBvZmZzZXQgZ2l2ZW4gZGlmZmVyZW50IHNpemVzXG5AbWl4aW4gX21hdC1iYWRnZS1zaXplKCRzaXplKSB7XG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgd2lkdGg6ICRzaXplO1xuICAgIGhlaWdodDogJHNpemU7XG4gICAgbGluZS1oZWlnaHQ6ICRzaXplO1xuICB9XG5cbiAgJi5tYXQtYmFkZ2UtYWJvdmUge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICB0b3A6IC0kc2l6ZSAvIDI7XG4gICAgfVxuICB9XG5cbiAgJi5tYXQtYmFkZ2UtYmVsb3cge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBib3R0b206IC0kc2l6ZSAvIDI7XG4gICAgfVxuICB9XG5cbiAgJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgbGVmdDogLSRzaXplO1xuICAgIH1cbiAgfVxuXG4gIFtkaXI9J3J0bCddICYubWF0LWJhZGdlLWJlZm9yZSB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGxlZnQ6IGF1dG87XG4gICAgICByaWdodDogLSRzaXplO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgcmlnaHQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1hZnRlciB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgbGVmdDogLSRzaXplO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLW92ZXJsYXAge1xuICAgICYubWF0LWJhZGdlLWJlZm9yZSB7XG4gICAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgICBsZWZ0OiAtJHNpemUgLyAyO1xuICAgICAgfVxuICAgIH1cblxuICAgIFtkaXI9J3J0bCddICYubWF0LWJhZGdlLWJlZm9yZSB7XG4gICAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICByaWdodDogLSRzaXplIC8gMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC1iYWRnZS1hZnRlciB7XG4gICAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgICByaWdodDogLSRzaXplIC8gMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1hZnRlciB7XG4gICAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgbGVmdDogLSRzaXplIC8gMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1iYWRnZS10aGVtZSgkdGhlbWUpIHtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuXG4gICAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3Qge1xuICAgICAgb3V0bGluZTogc29saWQgMXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLWFjY2VudCB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS13YXJuIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2UtaGlkZGVuIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLWRpc2FibGVkIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgJGFwcC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdiYWNrZ3JvdW5kJyk7XG4gICAgICAkYmFkZ2UtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtYnV0dG9uKTtcblxuICAgICAgLy8gVGhlIGRpc2FibGVkIGNvbG9yIHVzdWFsbHkgaGFzIHNvbWUga2luZCBvZiBvcGFjaXR5LCBidXQgYmVjYXVzZSB0aGUgYmFkZ2UgaXMgb3ZlcmxheWVkXG4gICAgICAvLyBvbiB0b3Agb2Ygc29tZXRoaW5nIGVsc2UsIGl0IHdvbid0IGxvb2sgZ29vZCBpZiBpdCdzIG9wYXF1ZS4gSWYgaXQgaXMgYSBjb2xvciAqdHlwZSosXG4gICAgICAvLyB3ZSBjb252ZXJ0IGl0IGludG8gYSBzb2xpZCBjb2xvciBieSB0YWtpbmcgdGhlIG9wYWNpdHkgZnJvbSB0aGUgcmdiYSB2YWx1ZSBhbmQgdXNpbmdcbiAgICAgIC8vIHRoZSB2YWx1ZSB0byBkZXRlcm1pbmUgdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGJhY2tncm91bmQgdG8gcHV0IGludG8gZm9yZWdyb3VuZCB3aGVuXG4gICAgICAvLyBtaXhpbmcgdGhlIGNvbG9ycyB0b2dldGhlci5cbiAgICAgIEBpZiAodHlwZS1vZigkYmFkZ2UtY29sb3IpID09IGNvbG9yIGFuZCB0eXBlLW9mKCRhcHAtYmFja2dyb3VuZCkgPT0gY29sb3IpIHtcbiAgICAgICAgJGJhZGdlLW9wYWNpdHk6IG9wYWNpdHkoJGJhZGdlLWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZDogbWl4KCRhcHAtYmFja2dyb3VuZCwgcmdiYSgkYmFkZ2UtY29sb3IsIDEpLCAoMSAtICRiYWRnZS1vcGFjaXR5KSAqIDEwMCUpO1xuICAgICAgfVxuICAgICAgQGVsc2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkYmFkZ2UtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLy8gVGhlIGFjdGl2ZSBjbGFzcyBpcyBhZGRlZCBhZnRlciB0aGUgZWxlbWVudCBpcyBhZGRlZFxuICAvLyBzbyBpdCBjYW4gYW5pbWF0ZSBzY2FsZSB0byBkZWZhdWx0XG4gIC5tYXQtYmFkZ2UtY29udGVudC5tYXQtYmFkZ2UtYWN0aXZlIHtcbiAgICAvLyBTY2FsZSB0byBgbm9uZWAgaW5zdGVhZCBvZiBgMWAgdG8gYXZvaWQgYmx1cnJ5IHRleHQgaW4gc29tZSBicm93c2Vycy5cbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cblxuICAubWF0LWJhZGdlLXNtYWxsIHtcbiAgICBAaW5jbHVkZSBfbWF0LWJhZGdlLXNpemUoJG1hdC1iYWRnZS1zbWFsbC1zaXplKTtcbiAgfVxuICAubWF0LWJhZGdlLW1lZGl1bSB7XG4gICAgQGluY2x1ZGUgX21hdC1iYWRnZS1zaXplKCRtYXQtYmFkZ2UtZGVmYXVsdC1zaXplKTtcbiAgfVxuICAubWF0LWJhZGdlLWxhcmdlIHtcbiAgICBAaW5jbHVkZSBfbWF0LWJhZGdlLXNpemUoJG1hdC1iYWRnZS1sYXJnZS1zaXplKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJhZGdlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIGZvbnQtd2VpZ2h0OiAkbWF0LWJhZGdlLWZvbnQtd2VpZ2h0O1xuICAgIGZvbnQtc2l6ZTogJG1hdC1iYWRnZS1mb250LXNpemU7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2Utc21hbGwgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBmb250LXNpemU6ICRtYXQtYmFkZ2UtZm9udC1zaXplIC8gMjtcbiAgfVxuXG4gIC5tYXQtYmFkZ2UtbGFyZ2UgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBmb250LXNpemU6ICRtYXQtYmFkZ2UtZm9udC1zaXplICogMjtcbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtYm90dG9tLXNoZWV0LXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lciB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMTYsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtYm90dG9tLXNoZWV0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG5cblxuJF9tYXQtYnV0dG9uLXJpcHBsZS1vcGFjaXR5OiAwLjE7XG5cbi8vIEFwcGxpZXMgYSBmb2N1cyBzdHlsZSB0byBhbiBtYXQtYnV0dG9uIGVsZW1lbnQgZm9yIGVhY2ggb2YgdGhlIHN1cHBvcnRlZCBwYWxldHRlcy5cbkBtaXhpbiBfbWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LWNvbG9yKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAmLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gIH1cblxuICAmLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICB9XG5cbiAgJi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICB9XG5cbiAgJltkaXNhYmxlZF0gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtYnV0dG9uLXJpcHBsZS1jb2xvcigkdGhlbWUsICRodWUsICRvcGFjaXR5OiAkX21hdC1idXR0b24tcmlwcGxlLW9wYWNpdHkpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgJi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksICRodWUsICRvcGFjaXR5KTtcbiAgfVxuXG4gICYubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgJGh1ZSwgJG9wYWNpdHkpO1xuICB9XG5cbiAgJi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4sICRodWUsICRvcGFjaXR5KTtcbiAgfVxufVxuXG4vLyBBcHBsaWVzIGEgcHJvcGVydHkgdG8gYW4gbWF0LWJ1dHRvbiBlbGVtZW50IGZvciBlYWNoIG9mIHRoZSBzdXBwb3J0ZWQgcGFsZXR0ZXMuXG5AbWl4aW4gX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAkcHJvcGVydHksICRodWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJi5tYXQtcHJpbWFyeSB7XG4gICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJHByaW1hcnksICRodWUpO1xuICB9XG4gICYubWF0LWFjY2VudCB7XG4gICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJGFjY2VudCwgJGh1ZSk7XG4gIH1cbiAgJi5tYXQtd2FybiB7XG4gICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJHdhcm4sICRodWUpO1xuICB9XG5cbiAgJi5tYXQtcHJpbWFyeSwgJi5tYXQtYWNjZW50LCAmLm1hdC13YXJuLCAmW2Rpc2FibGVkXSB7XG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgJHBhbGV0dGU6IGlmKCRwcm9wZXJ0eSA9PSAnY29sb3InLCAkZm9yZWdyb3VuZCwgJGJhY2tncm91bmQpO1xuICAgICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJHBhbGV0dGUsIGRpc2FibGVkLWJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWJ1dHRvbiwgLm1hdC1pY29uLWJ1dHRvbiwgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XG4gICAgLy8gQnV0dG9ucyB3aXRob3V0IGEgYmFja2dyb3VuZCBjb2xvciBzaG91bGQgaW5oZXJpdCB0aGUgZm9udCBjb2xvci4gVGhpcyBpcyBuZWNlc3NhcnkgdG9cbiAgICAvLyBlbnN1cmUgdGhhdCB0aGUgYnV0dG9uIGlzIHJlYWRhYmxlIG9uIGN1c3RvbSBiYWNrZ3JvdW5kIGNvbG9ycy4gSXQncyB3cm9uZyB0byBhbHdheXMgYXNzdW1lXG4gICAgLy8gdGhhdCB0aG9zZSBidXR0b25zIGFyZSBhbHdheXMgcGxhY2VkIGluc2lkZSBvZiBjb250YWluZXJzIHdpdGggdGhlIGRlZmF1bHQgYmFja2dyb3VuZFxuICAgIC8vIGNvbG9yIG9mIHRoZSB0aGVtZSAoZS5nLiB0aGVtZWQgdG9vbGJhcnMpLlxuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAnY29sb3InLCBkZWZhdWx0KTtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LWNvbG9yKCR0aGVtZSk7XG5cbiAgICAvLyBTZXR1cCB0aGUgcmlwcGxlIGNvbG9yIHRvIGJlIGJhc2VkIG9uIHRoZSB0ZXh0IGNvbG9yLiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgcmlwcGxlc1xuICAgIC8vIGFyZSBtYXRjaGluZyB3aXRoIHRoZSBjdXJyZW50IHRoZW1lIHBhbGV0dGUgYW5kIGFyZSBpbiBjb250cmFzdCB0byB0aGUgYmFja2dyb3VuZCBjb2xvclxuICAgIC8vIChlLmcgaW4gdGhlbWVkIHRvb2xiYXJzKS5cbiAgICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIG9wYWNpdHk6ICRfbWF0LWJ1dHRvbi1yaXBwbGUtb3BhY2l0eTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcbiAgfVxuXG4gIC8vIE5vdGU6IHRoaXMgbmVlZHMgYSBiaXQgZXh0cmEgc3BlY2lmaWNpdHksIGJlY2F1c2Ugd2UncmUgbm90IGd1YXJhbnRlZWQgdGhlIGluY2x1c2lvblxuICAvLyBvcmRlciBvZiB0aGUgdGhlbWUgc3R5bGVzIGFuZCB0aGUgYnV0dG9uIHJlc2V0IG1heSBlbmQgdXAgcmVzZXR0aW5nIHRoaXMgYXMgd2VsbC5cbiAgLm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSkge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtZmxhdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbiwgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIC8vIERlZmF1bHQgZm9udCBhbmQgYmFja2dyb3VuZCBjb2xvciB3aGVuIG5vdCB1c2luZyBhbnkgY29sb3IgcGFsZXR0ZS5cbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHJhaXNlZC1idXR0b24pO1xuXG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAnY29sb3InLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi10aGVtZS1wcm9wZXJ0eSgkdGhlbWUsICdiYWNrZ3JvdW5kLWNvbG9yJywgZGVmYXVsdCk7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tcmlwcGxlLWNvbG9yKCR0aGVtZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LXN0cm9rZWQtYnV0dG9uLCAubWF0LWZsYXQtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigwLCAkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigyLCAkdGhlbWUpO1xuXG4gICAgJjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDgsICR0aGVtZSk7XG4gICAgfVxuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWZhYiwgLm1hdC1taW5pLWZhYiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNiwgJHRoZW1lKTtcblxuICAgICY6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigxMiwgJHRoZW1lKTtcbiAgICB9XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigwLCAkdGhlbWUpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJ1dHRvbi10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbiwgLm1hdC1pY29uLWJ1dHRvbiwgLm1hdC1zdHJva2VkLWJ1dHRvbixcbiAgLm1hdC1mbGF0LWJ1dHRvbiwgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJ1dHRvbik7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJ1dHRvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1idXR0b24tdG9nZ2xlLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZGl2aWRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcblxuICAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZSxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigyLCAkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG5cbiAgICAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGZvY3VzZWQtYnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcblxuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZS1mb2N1cy1vdmVybGF5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZm9jdXNlZC1idXR0b24sIDEpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgfVxuXG4gIFtkaXI9J3J0bCddIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZC5tYXQtYnV0dG9uLXRvZ2dsZS12ZXJ0aWNhbCB7XG4gICAgLm1hdC1idXR0b24tdG9nZ2xlICsgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHNlbGVjdGVkLWJ1dHRvbik7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuXG4gICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtYnV0dG9uKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpc2FibGVkLWJ1dHRvbi10b2dnbGUpO1xuXG4gICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgfVxuXG4gICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgc2VsZWN0ZWQtZGlzYWJsZWQtYnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLFxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cbn1cblxuQG1peGluIG1hdC1idXR0b24tdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1jYXJkLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtY2FyZCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMSwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgLy8gTmVlZHMgZXh0cmEgc3BlY2lmaWNpdHkgdG8gYmUgYWJsZSB0byBvdmVycmlkZSB0aGUgZWxldmF0aW9uIHNlbGVjdG9ycy5cbiAgICAmLm1hdC1jYXJkLWZsYXQge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhcmQtc3VidGl0bGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNhcmQtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtY2FyZCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtY2FyZC10aXRsZSB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBoZWFkbGluZSk7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCB0aXRsZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCB0aXRsZSk7XG4gIH1cblxuICAubWF0LWNhcmQtc3VidGl0bGUsXG4gIC5tYXQtY2FyZC1jb250ZW50IHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1jaGVja2JveC10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cblxuICAvLyBUaGUgY29sb3Igb2YgdGhlIGNoZWNrYm94J3MgY2hlY2ttYXJrIC8gbWl4ZWRtYXJrLlxuICAkY2hlY2tib3gtbWFyay1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcblxuICAvLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBXaGlsZSB0aGUgc3BlYyBjYWxscyBmb3IgdHJhbnNsdWNlbnQgYmxhY2tzL3doaXRlcyBmb3IgZGlzYWJsZWQgY29sb3JzLFxuICAvLyB0aGlzIGRvZXMgbm90IHdvcmsgd2VsbCB3aXRoIGVsZW1lbnRzIGxheWVyZWQgb24gdG9wIG9mIG9uZSBhbm90aGVyLiBUbyBnZXQgYXJvdW5kIHRoaXMgd2VcbiAgLy8gYmxlbmQgdGhlIGNvbG9ycyB0b2dldGhlciBiYXNlZCBvbiB0aGUgYmFzZSBjb2xvciBhbmQgdGhlIHRoZW1lIGJhY2tncm91bmQuXG4gICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcms6ICM2ODY4Njg7XG4gICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0OiAjYjBiMGIwO1xuICAkZGlzYWJsZWQtY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrLCAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodCk7XG5cbiAgLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtY2hlY2ttYXJrIHtcbiAgICBmaWxsOiAkY2hlY2tib3gtbWFyay1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtY2hlY2ttYXJrLXBhdGgge1xuICAgIC8vICFpbXBvcnRhbnQgaXMgbmVlZGVkIGhlcmUgYmVjYXVzZSBhIHN0cm9rZSBtdXN0IGJlIHNldCBhcyBhblxuICAgIC8vIGF0dHJpYnV0ZSBvbiB0aGUgU1ZHIGluIG9yZGVyIGZvciBsaW5lIGFuaW1hdGlvbiB0byB3b3JrIHByb3Blcmx5LlxuICAgIHN0cm9rZTogJGNoZWNrYm94LW1hcmstY29sb3IgIWltcG9ydGFudDtcblxuICAgIEBpbmNsdWRlIGNkay1oaWdoLWNvbnRyYXN0KGJsYWNrLW9uLXdoaXRlKSB7XG4gICAgICAvLyBIYXZpbmcgdGhlIG9uZSBhYm92ZSBiZSAhaW1wb3J0YW50IGVuZHMgdXAgb3ZlcnJpZGluZyB0aGUgYnJvd3NlcidzIGF1dG9tYXRpY1xuICAgICAgLy8gY29sb3IgaW52ZXJzaW9uIHNvIHdlIG5lZWQgdG8gcmUtaW52ZXJ0IGl0IG91cnNlbHZlcyBmb3IgYmxhY2stb24td2hpdGUuXG4gICAgICBzdHJva2U6ICMwMDAgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAubWF0LWNoZWNrYm94LW1peGVkbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNoZWNrYm94LW1hcmstY29sb3I7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUsIC5tYXQtY2hlY2tib3gtY2hlY2tlZCB7XG4gICAgJi5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtZGlzYWJsZWQge1xuICAgICYubWF0LWNoZWNrYm94LWNoZWNrZWQsXG4gICAgJi5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgICAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1jaGVja2JveC1jaGVja2VkKSB7XG4gICAgICAubWF0LWNoZWNrYm94LWZyYW1lIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3Qge1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgfVxuXG4gIC8vIFRoaXMgb25lIGlzIG1vdmVkIGRvd24gaGVyZSBzbyBpdCBjYW4gdGFyZ2V0IGJvdGhcbiAgLy8gdGhlIHRoZW1lIGNvbG9ycyBhbmQgdGhlIGRpc2FibGVkIHN0YXRlLlxuICBAaW5jbHVkZSBjZGstaGlnaC1jb250cmFzdCB7XG4gICAgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIC8vIE5lZWRzIHRvIGJlIHJlbW92ZWQgYmVjYXVzZSBpdCBoaWRlcyB0aGUgY2hlY2tib3ggb3V0bGluZS5cbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jaGVja2JveDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkge1xuICAgICYubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1jaGVja2JveC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1jaGVja2JveCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC8vIFRPRE8oa2FyYSk6IFJlbW92ZSB0aGlzIHN0eWxlIHdoZW4gZml4aW5nIHZlcnRpY2FsIGJhc2VsaW5lXG4gIC5tYXQtY2hlY2tib3gtbGF5b3V0IC5tYXQtY2hlY2tib3gtbGFiZWwge1xuICAgIGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxufVxuXG5cblxuXG5cblxuJG1hdC1jaGlwLXJlbW92ZS1mb250LXNpemU6IDE4cHg7XG5cbkBtaXhpbiBtYXQtY2hpcHMtY29sb3IoJGZvcmVncm91bmQsICRiYWNrZ3JvdW5kKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICBjb2xvcjogJGZvcmVncm91bmQ7XG5cbiAgLm1hdC1jaGlwLXJlbW92ZSB7XG4gICAgY29sb3I6ICRmb3JlZ3JvdW5kO1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNoaXBzLXRoZW1lLWNvbG9yKCRwYWxldHRlKSB7XG4gIEBpbmNsdWRlIG1hdC1jaGlwcy1jb2xvcihtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpLCBtYXQtY29sb3IoJHBhbGV0dGUpKTtcblxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QsIDAuMSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1jaGlwcy10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJHVuc2VsZWN0ZWQtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCB1bnNlbGVjdGVkLWNoaXApO1xuICAkdW5zZWxlY3RlZC1mb3JlZ3JvdW5kOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcCB7XG4gICAgQGluY2x1ZGUgbWF0LWNoaXBzLWNvbG9yKCR1bnNlbGVjdGVkLWZvcmVncm91bmQsICR1bnNlbGVjdGVkLWJhY2tncm91bmQpO1xuXG4gICAgJjpub3QoLm1hdC1jaGlwLWRpc2FibGVkKSB7XG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDMsICR0aGVtZSk7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtY2hpcC1yZW1vdmU6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjU0O1xuICAgICAgfVxuICAgIH1cblxuICAgICYubWF0LWNoaXAtZGlzYWJsZWQge1xuICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hcF9nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZCB7XG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBtYXQtY2hpcHMtdGhlbWUtY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgbWF0LWNoaXBzLXRoZW1lLWNvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgbWF0LWNoaXBzLXRoZW1lLWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNoaXBzLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWNoaXAge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcblxuICAgIC5tYXQtY2hpcC10cmFpbGluZy1pY29uLm1hdC1pY29uLFxuICAgIC5tYXQtY2hpcC1yZW1vdmUubWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAkbWF0LWNoaXAtcmVtb3ZlLWZvbnQtc2l6ZTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXRhYmxlLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtdGFibGUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtdGFibGUgdGhlYWQsIC5tYXQtdGFibGUgdGJvZHksIC5tYXQtdGFibGUgdGZvb3QsXG4gIG1hdC1oZWFkZXItcm93LCBtYXQtcm93LCBtYXQtZm9vdGVyLXJvdyxcbiAgW21hdC1oZWFkZXItcm93XSwgW21hdC1yb3ddLCBbbWF0LWZvb3Rlci1yb3ddLFxuICAubWF0LXRhYmxlLXN0aWNreSB7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgfVxuXG4gIG1hdC1yb3csIG1hdC1oZWFkZXItcm93LCBtYXQtZm9vdGVyLXJvdyxcbiAgdGgubWF0LWhlYWRlci1jZWxsLCB0ZC5tYXQtY2VsbCwgdGQubWF0LWZvb3Rlci1jZWxsIHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jZWxsLCAubWF0LWZvb3Rlci1jZWxsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRhYmxlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRhYmxlIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxuXG4gIC5tYXQtY2VsbCwgLm1hdC1mb290ZXItY2VsbCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLXRvZGF5LWJveC1zaGFkb3ctd2lkdGg6IDFweDtcbiRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC1mYWRlLWFtb3VudDogMC42O1xuJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50OiAwLjI7XG4kbWF0LWNhbGVuZGFyLWJvZHktZm9udC1zaXplOiAxM3B4ICFkZWZhdWx0O1xuJG1hdC1jYWxlbmRhci13ZWVrZGF5LXRhYmxlLWZvbnQtc2l6ZTogMTFweCAhZGVmYXVsdDtcblxuQG1peGluIF9tYXQtZGF0ZXBpY2tlci1jb2xvcigkcGFsZXR0ZSkge1xuICAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgICRiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuXG4gICAgQGlmICh0eXBlLW9mKCRiYWNrZ3JvdW5kKSA9PSBjb2xvcikge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZmFkZS1vdXQoJGJhY2tncm91bmQsICRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC1mYWRlLWFtb3VudCk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIC8vIElmIHdlIGNvdWxkbid0IHJlc29sdmUgdG8gYmFja2dyb3VuZCB0byBhIGNvbG9yIChlLmcuIGl0J3MgYSBDU1MgdmFyaWFibGUpLFxuICAgICAgLy8gZmFsbCBiYWNrIHRvIGZhZGluZyB0aGUgY29udGVudCBvdXQgdmlhIGBvcGFjaXR5YC5cbiAgICAgIG9wYWNpdHk6ICRtYXQtZGF0ZXBpY2tlci10b2RheS1mYWRlLWFtb3VudDtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwICRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC10b2RheS1ib3gtc2hhZG93LXdpZHRoXG4gICAgICAgICAgICAgICAgbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWRhdGVwaWNrZXItdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG5cbiAgLm1hdC1jYWxlbmRhci1hcnJvdyB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBpY29uKTtcbiAgfVxuXG4gIC8vIFRoZSBwcmV2L25leHQgYnV0dG9ucyBuZWVkIGEgYml0IG1vcmUgc3BlY2lmaWNpdHkgdG9cbiAgLy8gYXZvaWQgYmVpbmcgb3ZlcndyaXR0ZW4gYnkgdGhlIC5tYXQtaWNvbi1idXR0b24uXG4gIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUsXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItbmV4dC1idXR0b24sXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItcHJldmlvdXMtYnV0dG9uIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBpY29uKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXItZGl2aWRlcjo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktbGFiZWwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQpOmhvdmVyLFxuICAuY2RrLWtleWJvYXJkLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZSxcbiAgLmNkay1wcm9ncmFtLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZSB7XG4gICAgJiA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgICAvLyBOb3RlOiB0aG91Z2ggaXQncyBub3QgdGV4dCwgdGhlIGJvcmRlciBpcyBhIGhpbnQgYWJvdXQgdGhlIGZhY3QgdGhhdCB0aGlzIGlzIHRvZGF5J3MgZGF0ZSxcbiAgICAvLyBzbyB3ZSB1c2UgdGhlIGhpbnQgY29sb3IuXG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICAgICRjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuXG4gICAgQGlmICh0eXBlLW9mKCRjb2xvcikgPT0gY29sb3IpIHtcbiAgICAgIGJvcmRlci1jb2xvcjogZmFkZS1vdXQoJGNvbG9yLCAkbWF0LWRhdGVwaWNrZXItdG9kYXktZmFkZS1hbW91bnQpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAvLyBJZiB0aGUgY29sb3IgZGlkbid0IHJlc29sdmUgdG8gYSBjb2xvciB2YWx1ZSwgYnV0IHNvbWV0aGluZyBsaWtlIGEgQ1NTIHZhcmlhYmxlLCB3ZSBjYW4ndFxuICAgICAgLy8gZmFkZSBpdCBvdXQgc28gd2UgZmFsbCBiYWNrIHRvIHJlZHVjaW5nIHRoZSBlbGVtZW50IG9wYWNpdHkuIE5vdGUgdGhhdCB3ZSBkb24ndCB1c2UgdGhlXG4gICAgICAvLyAkbWF0LWRhdGVwaWNrZXItdG9kYXktZmFkZS1hbW91bnQsIGJlY2F1c2UgaGludCB0ZXh0IHVzdWFsbHkgaGFzIHNvbWUgb3BhY2l0eSBhcHBsaWVkXG4gICAgICAvLyB0byBpdCBhbHJlYWR5IGFuZCB3ZSBkb24ndCB3YW50IHRoZW0gdG8gc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIuXG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICB9XG5cbiAgQGluY2x1ZGUgX21hdC1kYXRlcGlja2VyLWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KSk7XG5cbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDQsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWRhdGVwaWNrZXItY29sb3IobWFwLWdldCgkdGhlbWUsIGFjY2VudCkpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX21hdC1kYXRlcGlja2VyLWNvbG9yKG1hcC1nZXQoJHRoZW1lLCB3YXJuKSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQtdG91Y2gge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gIH1cblxuICAubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSkpO1xuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIGFjY2VudCkpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgd2FybikpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWRhdGVwaWNrZXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtY2FsZW5kYXIge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHkge1xuICAgIGZvbnQtc2l6ZTogJG1hdC1jYWxlbmRhci1ib2R5LWZvbnQtc2l6ZTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCxcbiAgLm1hdC1jYWxlbmRhci1wZXJpb2QtYnV0dG9uIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJ1dHRvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHRoIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiAkbWF0LWNhbGVuZGFyLXdlZWtkYXktdGFibGUtZm9udC1zaXplO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1kaWFsb2ctdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigyNCwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1kaWFsb2ctdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtZGlhbG9nLXRpdGxlIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgdGl0bGUpO1xuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWV4cGFuc2lvbi1wYW5lbC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMiwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1hY3Rpb24tcm93IHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgJjpub3QoW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSkge1xuICAgICAgJi5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbiAgICAgICYuY2RrLXByb2dyYW0tZm9jdXNlZCxcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBEaXNhYmxlIHRoZSBob3ZlciBvbiB0b3VjaCBkZXZpY2VzIHNpbmNlIGl0IGNhbiBhcHBlYXIgbGlrZSBpdCBpcyBzdHVjay4gV2UgY2FuJ3QgdXNlXG4gIC8vIGBAbWVkaWEgKGhvdmVyKWAgYWJvdmUsIGJlY2F1c2UgdGhlIGRlc2t0b3Agc3VwcG9ydCBicm93c2VyIHN1cHBvcnQgaXNuJ3QgZ3JlYXQuXG4gIEBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCk6bm90KFthcmlhLWRpc2FibGVkPSd0cnVlJ10pXG4gICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uLFxuICAubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24pO1xuXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1leHBhbnNpb24tcGFuZWwtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuLy8gVGhpcyBtaXhpbiB3aWxsIGVuc3VyZSB0aGF0IGxpbmVzIHRoYXQgb3ZlcmZsb3cgdGhlIGNvbnRhaW5lciB3aWxsIGhpZGUgdGhlIG92ZXJmbG93IGFuZFxuLy8gdHJ1bmNhdGUgbmVhdGx5IHdpdGggYW4gZWxsaXBzaXMuXG5AbWl4aW4gbWF0LXRydW5jYXRlLWxpbmUoKSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vLyBNaXhpbiB0byBwcm92aWRlIGFsbCBtYXQtbGluZSBzdHlsZXMsIGNoYW5naW5nIHNlY29uZGFyeSBmb250IHNpemUgYmFzZWQgb24gd2hldGhlciB0aGUgbGlzdFxuLy8gaXMgaW4gZGVuc2UgbW9kZS5cbkBtaXhpbiBtYXQtbGluZS1iYXNlKCRzZWNvbmRhcnktZm9udC1zaXplKSB7XG4gIC5tYXQtbGluZSB7XG4gICAgQGluY2x1ZGUgbWF0LXRydW5jYXRlLWxpbmUoKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgLy8gYWxsIGxpbmVzIGJ1dCB0aGUgdG9wIGxpbmUgc2hvdWxkIGhhdmUgc21hbGxlciB0ZXh0XG4gICAgJjpudGgtY2hpbGQobisyKSB7XG4gICAgICBmb250LXNpemU6ICRzZWNvbmRhcnktZm9udC1zaXplO1xuICAgIH1cbiAgfVxufVxuXG4vLyBUaGlzIG1peGluIG5vcm1hbGl6ZXMgZGVmYXVsdCBlbGVtZW50IHN0eWxlcywgZS5nLiBmb250IHdlaWdodCBmb3IgaGVhZGluZyB0ZXh0LlxuQG1peGluIG1hdC1ub3JtYWxpemUtdGV4dCgpIHtcbiAgJiA+ICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICB9XG59XG5cbi8vIFRoaXMgbWl4aW4gcHJvdmlkZXMgYmFzZSBzdHlsZXMgZm9yIHRoZSB3cmFwcGVyIGFyb3VuZCBtYXQtbGluZSBlbGVtZW50cyBpbiBhIGxpc3QuXG5AbWl4aW4gbWF0LWxpbmUtd3JhcHBlci1iYXNlKCkge1xuICBAaW5jbHVkZSBtYXQtbm9ybWFsaXplLXRleHQoKTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAvLyBNdXN0IHJlbW92ZSB3cmFwcGVyIHdoZW4gbGluZXMgYXJlIGVtcHR5IG9yIGl0IHRha2VzIHVwIGhvcml6b250YWxcbiAgLy8gc3BhY2UgYW5kIHB1c2hlcyBvdGhlciBlbGVtZW50cyB0byB0aGUgcmlnaHQuXG4gICY6ZW1wdHkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuXG5cbi8vIEluY2x1ZGUgdGhpcyBlbXB0eSBtaXhpbiBmb3IgY29uc2lzdGVuY3kgd2l0aCB0aGUgb3RoZXIgY29tcG9uZW50cy5cbkBtaXhpbiBtYXQtZ3JpZC1saXN0LXRoZW1lKCR0aGVtZSkgeyB9XG5cbkBtaXhpbiBtYXQtZ3JpZC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWdyaWQtdGlsZS1oZWFkZXIsXG4gIC5tYXQtZ3JpZC10aWxlLWZvb3RlciB7XG4gICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pKTtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG4vLyBJbmNsdWRlIHRoaXMgZW1wdHkgbWl4aW4gZm9yIGNvbnNpc3RlbmN5IHdpdGggdGhlIG90aGVyIGNvbXBvbmVudHMuXG5AbWl4aW4gbWF0LWljb24tdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtaWNvbiB7XG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWljb24tdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG4vLyBSZW5kZXJzIGEgZ3JhZGllbnQgZm9yIHNob3dpbmcgdGhlIGRhc2hlZCBsaW5lIHdoZW4gdGhlIGlucHV0IGlzIGRpc2FibGVkLlxuLy8gVW5saWtlIHVzaW5nIGEgYm9yZGVyLCBhIGdyYWRpZW50IGFsbG93cyB1cyB0byBhZGp1c3QgdGhlIHNwYWNpbmcgb2YgdGhlIGRvdHRlZCBsaW5lXG4vLyB0byBtYXRjaCB0aGUgTWF0ZXJpYWwgRGVzaWduIHNwZWMuXG5AbWl4aW4gbWF0LWNvbnRyb2wtZGlzYWJsZWQtdW5kZXJsaW5lKCRjb2xvcikge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvciAwJSwgJGNvbG9yIDMzJSwgdHJhbnNwYXJlbnQgMCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDRweCAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi8vIEZpZ3VyZXMgb3V0IHRoZSBjb2xvciBvZiB0aGUgcGxhY2Vob2xkZXIgZm9yIGEgZm9ybSBjb250cm9sLlxuLy8gVXNlZCBwcmltYXJpbHkgdG8gcHJldmVudCB0aGUgdmFyaW91cyBmb3JtIGNvbnRyb2xzIGZyb21cbi8vIGJlY29taW5nIG91dCBvZiBzeW5jIHNpbmNlIHRoZXNlIGNvbG9ycyBhcmVuJ3QgaW4gYSBwYWxldHRlLlxuQGZ1bmN0aW9uIF9tYXQtY29udHJvbC1wbGFjZWhvbGRlci1jb2xvcigkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgQHJldHVybiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0LCBpZigkaXMtZGFyay10aGVtZSwgMC41LCAwLjQyKSk7XG59XG5cblxuLyogc3R5bGVsaW50LWRpc2FibGUgbWF0ZXJpYWwvbm8tcHJlZml4ZXMgKi9cbkBtaXhpbiB1c2VyLXNlbGVjdCgkdmFsdWUpIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogJHZhbHVlO1xuICAtbW96LXVzZXItc2VsZWN0OiAkdmFsdWU7XG4gIC1tcy11c2VyLXNlbGVjdDogJHZhbHVlO1xuICB1c2VyLXNlbGVjdDogJHZhbHVlO1xufVxuXG5AbWl4aW4gaW5wdXQtcGxhY2Vob2xkZXIge1xuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBjdXJzb3ItZ3JhYiB7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xuICBjdXJzb3I6IGdyYWI7XG59XG5cbkBtaXhpbiBjdXJzb3ItZ3JhYmJpbmcge1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XG4gIGN1cnNvcjogZ3JhYmJpbmc7XG59XG5cbkBtaXhpbiBiYWNrZmFjZS12aXNpYmlsaXR5KCR2YWx1ZSkge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6ICR2YWx1ZTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogJHZhbHVlO1xufVxuLyogc3R5bGVsaW50LWVuYWJsZSAqL1xuXG5cblxuQG1peGluIG1hdC1pbnB1dC10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVkLFxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG5cbiAgICBAaW5jbHVkZSBpbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogX21hdC1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yKCR0aGVtZSk7XG4gICAgfVxuXG4gICAgLy8gT24gZGFyayB0aGVtZXMgd2Ugc2V0IHRoZSBuYXRpdmUgYHNlbGVjdGAgY29sb3IgdG8gc29tZSBzaGFkZSBvZiB3aGl0ZSxcbiAgICAvLyBob3dldmVyIHRoZSBjb2xvciBwcm9wYWdhdGVzIHRvIGFsbCBvZiB0aGUgYG9wdGlvbmAgZWxlbWVudHMsIHdoaWNoIGFyZVxuICAgIC8vIGFsd2F5cyBvbiBhIHdoaXRlIGJhY2tncm91bmQgaW5zaWRlIHRoZSBkcm9wZG93biwgY2F1c2luZyB0aGVtIHRvIGJsZW5kIGluLlxuICAgIC8vIFNpbmNlIHdlIGNhbid0IGNoYW5nZSBiYWNrZ3JvdW5kIG9mIHRoZSBkcm9wZG93biwgd2UgbmVlZCB0byBleHBsaWNpdGx5XG4gICAgLy8gcmVzZXQgdGhlIGNvbG9yIG9mIHRoZSBvcHRpb25zIHRvIHNvbWV0aGluZyBkYXJrLlxuICAgIEBpZiAobWFwLWdldCgkdGhlbWUsIGlzLWRhcmspKSB7XG4gICAgICBvcHRpb24ge1xuICAgICAgICBjb2xvcjogJGRhcmstcHJpbWFyeS10ZXh0O1xuICAgICAgfVxuXG4gICAgICBvcHRpb246ZGlzYWJsZWQge1xuICAgICAgICBjb2xvcjogJGRhcmstZGlzYWJsZWQtdGV4dDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LWFjY2VudCAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gIH1cblxuICAubWF0LXdhcm4gLm1hdC1pbnB1dC1lbGVtZW50LFxuICAubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWlucHV0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG5cbiAgLy8gVGhlIGFtb3VudCBvZiBzcGFjZSBiZXR3ZWVuIHRoZSB0b3Agb2YgdGhlIGxpbmUgYW5kIHRoZSB0b3Agb2YgdGhlIGFjdHVhbCB0ZXh0XG4gIC8vIChhcyBhIGZyYWN0aW9uIG9mIHRoZSBmb250LXNpemUpLlxuICAkbGluZS1zcGFjaW5nOiAoJGxpbmUtaGVpZ2h0IC0gMSkgLyAyO1xuXG4gIC8vIDxpbnB1dD4gZWxlbWVudHMgc2VlbSB0byBoYXZlIHRoZWlyIGhlaWdodCBzZXQgc2xpZ2h0bHkgdG9vIGxhcmdlIG9uIFNhZmFyaSBjYXVzaW5nIHRoZSB0ZXh0IHRvXG4gIC8vIGJlIG1pc2FsaWduZWQgdy5yLnQuIHRoZSBwbGFjZWhvbGRlci4gQWRkaW5nIHRoaXMgbWFyZ2luIGNvcnJlY3RzIGl0LlxuICBpbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgbWFyZ2luLXRvcDogLSRsaW5lLXNwYWNpbmcgKiAxZW07XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1saXN0LXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtbGlzdC1iYXNlIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3ViaGVhZGVyIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWxpc3QtaXRlbS1kaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaXNhYmxlZC1saXN0LW9wdGlvbik7XG4gIH1cblxuICAubWF0LWxpc3Qtb3B0aW9uLFxuICAubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtLFxuICAubWF0LWFjdGlvbi1saXN0IC5tYXQtbGlzdC1pdGVtIHtcbiAgICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2hvdmVyJyk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgJGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG5cbiAgLm1hdC1saXN0LWl0ZW0ge1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIH1cblxuICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICB9XG5cbiAgLy8gRGVmYXVsdCBsaXN0XG4gIC5tYXQtbGlzdC1iYXNlIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpKTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSkpO1xuICAgIH1cblxuICAgIC5tYXQtc3ViaGVhZGVyIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0yKTtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICAgICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIERlbnNlIGxpc3RcbiAgLm1hdC1saXN0LWJhc2VbZGVuc2VdIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbikpO1xuICAgIH1cblxuICAgIC5tYXQtbGlzdC1vcHRpb24ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pKTtcbiAgICB9XG5cbiAgICAubWF0LXN1YmhlYWRlciB7XG4gICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LW1lbnUtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1tZW51LXBhbmVsIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtbWVudS1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAndGV4dCcpO1xuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgJiwgJjo6YWZ0ZXIge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbSAubWF0LWljb24tbm8tY29sb3IsXG4gIC5tYXQtbWVudS1pdGVtLXN1Ym1lbnUtdHJpZ2dlcjo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsICdpY29uJyk7XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbTpob3ZlcixcbiAgLm1hdC1tZW51LWl0ZW0uY2RrLXByb2dyYW0tZm9jdXNlZCxcbiAgLm1hdC1tZW51LWl0ZW0uY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gIC5tYXQtbWVudS1pdGVtLWhpZ2hsaWdodGVkIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdob3ZlcicpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LW1lbnUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtbWVudS1pdGVtIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtcGFnaW5hdG9yLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtcGFnaW5hdG9yIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvcixcbiAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtcGFnaW5hdG9yLWRlY3JlbWVudCxcbiAgLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50IHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgfVxuXG4gIC5tYXQtcGFnaW5hdG9yLWZpcnN0LFxuICAubWF0LXBhZ2luYXRvci1sYXN0IHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICB9XG5cbiAgLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0ge1xuICAgIC5tYXQtcGFnaW5hdG9yLWRlY3JlbWVudCxcbiAgICAubWF0LXBhZ2luYXRvci1pbmNyZW1lbnQsXG4gICAgLm1hdC1wYWdpbmF0b3ItZmlyc3QsXG4gICAgLm1hdC1wYWdpbmF0b3ItbGFzdCB7XG4gICAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2Rpc2FibGVkJyk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcGFnaW5hdG9yLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXBhZ2luYXRvcixcbiAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLWJhci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gICAgZmlsbDogbWF0LWNvbG9yKCRwcmltYXJ5LCBsaWdodGVyKTtcbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCBsaWdodGVyKTtcbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICB9XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCB7XG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gICAgICBmaWxsOiBtYXQtY29sb3IoJGFjY2VudCwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCBsaWdodGVyKTtcbiAgICB9XG5cbiAgICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4ge1xuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgICAgZmlsbDogbWF0LWNvbG9yKCR3YXJuLCBsaWdodGVyKTtcbiAgICB9XG5cbiAgICAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuLCBsaWdodGVyKTtcbiAgICB9XG5cbiAgICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLWJhci10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1wcm9ncmVzcy1zcGlubmVyLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LXByb2dyZXNzLXNwaW5uZXIsIC5tYXQtc3Bpbm5lciB7XG4gICAgY2lyY2xlIHtcbiAgICAgIHN0cm9rZTogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgY2lyY2xlIHtcbiAgICAgIHN0cm9rZTogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gY2lyY2xlIHtcbiAgICAgIHN0cm9rZTogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1wcm9ncmVzcy1zcGlubmVyLXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuQG1peGluIF9tYXQtcmFkaW8tY29sb3IoJHBhbGV0dGUpIHtcbiAgJi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICB9XG5cbiAgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsXG4gIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLFxuICAmLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsXG4gICY6YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1yYWRpby10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXJhZGlvLWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgX21hdC1yYWRpby1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtcmFkaW8tY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgIC8vIFRoaXMgbmVlZHMgZXh0cmEgc3BlY2lmaWNpdHksIGJlY2F1c2UgdGhlIGNsYXNzZXMgYWJvdmUgYXJlIGNvbWJpbmVkXG4gICAgLy8gKGUuZy4gYC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnRgKSB3aGljaCBpbmNyZWFzZXMgdGhlaXIgc3BlY2lmaWNpdHkgYSBsb3QuXG4gICAgLy8gVE9ETzogY29uc2lkZXIgbWFraW5nIHRoZSBzZWxlY3RvcnMgaW50byBkZXNjZW5kYW50cyAoYC5tYXQtcHJpbWFyeSAubWF0LXJhZGlvLWJ1dHRvbmApLlxuICAgICYubWF0LXJhZGlvLWRpc2FibGVkIHtcbiAgICAgICYubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUsXG4gICAgICAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQsXG4gICAgICAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAgICAgfVxuXG4gICAgICAubWF0LXJhZGlvLWxhYmVsLWNvbnRlbnQge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3dpdGNoIHRoaXMgdG8gYSBzb2xpZCBjb2xvciBzaW5jZSB3ZSdyZSB1c2luZyBgb3BhY2l0eWBcbiAgICAvLyB0byBjb250cm9sIGhvdyBvcGFxdWUgdGhlIHJpcHBsZSBzaG91bGQgYmUuXG4gICAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1yYWRpby10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1yYWRpby1idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXNlbGVjdC10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1zZWxlY3QtdmFsdWUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiBfbWF0LWNvbnRyb2wtcGxhY2Vob2xkZXItY29sb3IoJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1wYW5lbCB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuXG4gICAgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3ZlciwgMC4xMik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICAmLm1hdC1mb2N1c2VkIHtcbiAgICAgICYubWF0LXByaW1hcnkgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtYWNjZW50IC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtd2FybiAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtaW52YWxpZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNlbGVjdC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuXG4gIC5tYXQtc2VsZWN0IHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gICAgaGVpZ2h0OiAkbGluZS1oZWlnaHQgKiAxZW07XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtc2lkZW5hdi10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJGRyYXdlci1iYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICRkcmF3ZXItY29udGFpbmVyLWJhY2tncm91bmQtY29sb3I6ICBtYXQtY29sb3IoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAkZHJhd2VyLXB1c2gtYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAkZHJhd2VyLXNpZGUtYm9yZGVyOiBzb2xpZCAxcHggbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcblxuICAubWF0LWRyYXdlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkcmF3ZXItY29udGFpbmVyLWJhY2tncm91bmQtY29sb3I7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LWRyYXdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRyYXdlci1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtZHJhd2VyLXB1c2gge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRyYXdlci1wdXNoLWJhY2tncm91bmQtY29sb3I7XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1kcmF3ZXItc2lkZSkge1xuICAgICAgLy8gVGhlIGVsZXZhdGlvbiBvZiB6LTE2IGlzIG5vdGVkIGluIHRoZSBkZXNpZ24gc3BlY2lmaWNhdGlvbnMuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29tcG9uZW50cy9uYXZpZ2F0aW9uLWRyYXdlci5odG1sXG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigxNiwgJHRoZW1lKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWRyYXdlci1zaWRlIHtcbiAgICBib3JkZXItcmlnaHQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG5cbiAgICAmLm1hdC1kcmF3ZXItZW5kIHtcbiAgICAgIGJvcmRlci1sZWZ0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIFtkaXI9J3J0bCddIC5tYXQtZHJhd2VyLXNpZGUge1xuICAgIGJvcmRlci1sZWZ0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcblxuICAgICYubWF0LWRyYXdlci1lbmQge1xuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICBib3JkZXItcmlnaHQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1kcmF3ZXItYmFja2Ryb3AubWF0LWRyYXdlci1zaG93biB7XG4gICAgJG9wYWNpdHk6IDAuNjtcbiAgICAkYmFja2Ryb3AtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCwgJG9wYWNpdHkpO1xuXG4gICAgQGlmICh0eXBlLW9mKCRiYWNrZHJvcC1jb2xvcikgPT0gY29sb3IpIHtcbiAgICAgIC8vIFdlIHVzZSBpbnZlcnQoKSBoZXJlIHRvIGhhdmUgdGhlIGRhcmtlbiB0aGUgYmFja2dyb3VuZCBjb2xvciBleHBlY3RlZCB0byBiZSB1c2VkLiBJZiB0aGVcbiAgICAgIC8vIGJhY2tncm91bmQgaXMgbGlnaHQsIHdlIHVzZSBhIGRhcmsgYmFja2Ryb3AuIElmIHRoZSBiYWNrZ3JvdW5kIGlzIGRhcmssXG4gICAgICAvLyB3ZSB1c2UgYSBsaWdodCBiYWNrZHJvcC5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGludmVydCgkYmFja2Ryb3AtY29sb3IpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAvLyBJZiB3ZSBjb3VsZG4ndCByZXNvbHZlIHRoZSBiYWNrZHJvcCBjb2xvciB0byBhIGNvbG9yIHZhbHVlLCBmYWxsIGJhY2sgdG8gdXNpbmdcbiAgICAgIC8vIGBvcGFjaXR5YCB0byBtYWtlIGl0IG9wYXF1ZSBzaW5jZSBpdHMgZW5kIHZhbHVlIGNvdWxkIGJlIGEgc29saWQgY29sb3IuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2Ryb3AtY29sb3I7XG4gICAgICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zaWRlbmF2LXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuXG5AbWl4aW4gX21hdC1zbGlkZS10b2dnbGUtY2hlY2tlZCgkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlKSB7XG4gICYubWF0LWNoZWNrZWQge1xuICAgIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG5cbiAgICAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICAgICAgLy8gT3BhY2l0eSBpcyBkZXRlcm1pbmVkIGZyb20gdGhlIHNwZWNzIGZvciB0aGUgc2VsZWN0aW9uIGNvbnRyb2xzLlxuICAgICAgLy8gU2VlOiBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb21wb25lbnRzL3NlbGVjdGlvbi1jb250cm9scy5odG1sI3NwZWNzXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSwgMC41NCk7XG4gICAgfVxuXG4gICAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICAvLyBTZXQgbm8gb3BhY2l0eSBmb3IgdGhlIHJpcHBsZXMgYmVjYXVzZSB0aGUgcmlwcGxlIG9wYWNpdHkgd2lsbCBiZSBhZGp1c3RlZCBkeW5hbWljYWxseVxuICAgICAgLy8gYmFzZWQgb24gdGhlIHR5cGUgb2YgaW50ZXJhY3Rpb24gd2l0aCB0aGUgc2xpZGUtdG9nZ2xlIChlLmcuIGZvciBob3ZlciwgZm9jdXMpXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc2xpZGUtdG9nZ2xlLXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyazogbWFwX2dldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAvLyBDb2xvciBodWVzIGFyZSBiYXNlZCBvbiB0aGUgc3BlY3Mgd2hpY2ggYnJpZWZseSBzaG93IHRoZSBodWVzIHRoYXQgYXJlIGFwcGxpZWQgdG8gYSBzd2l0Y2guXG4gIC8vIFRoZSAyMDE4IHNwZWNzIG5vIGxvbmdlciBkZXNjcmliZSBob3cgZGFyayBzd2l0Y2hlcyBzaG91bGQgbG9vayBsaWtlLiBEdWUgdG8gdGhlIGxhY2sgb2ZcbiAgLy8gaW5mb3JtYXRpb24gZm9yIGRhcmsgdGhlbWVkIHN3aXRjaGVzLCB3ZSBwYXJ0aWFsbHkga2VlcCB0aGUgb2xkIGJlaGF2aW9yIHRoYXQgaXMgYmFzZWQgb25cbiAgLy8gdGhlIHByZXZpb3VzIHNwZWNpZmljYXRpb25zLiBGb3IgdGhlIGNoZWNrZWQgY29sb3Igd2UgYWx3YXlzIHVzZSB0aGUgYGRlZmF1bHRgIGh1ZSBiZWNhdXNlXG4gIC8vIHRoYXQgZm9sbG93cyBNREMgYW5kIGFsc28gbWFrZXMgaXQgZWFzaWVyIGZvciBwZW9wbGUgdG8gY3JlYXRlIGEgY3VzdG9tIHRoZW1lIHdpdGhvdXQgbmVlZGluZ1xuICAvLyB0byBzcGVjaWZ5IGVhY2ggaHVlIGluZGl2aWR1YWxseS5cbiAgJHRodW1iLXVuY2hlY2tlZC1odWU6IGlmKCRpcy1kYXJrLCA0MDAsIDUwKTtcbiAgJHRodW1iLWNoZWNrZWQtaHVlOiBkZWZhdWx0O1xuXG4gICRiYXItdW5jaGVja2VkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgJHJpcHBsZS11bmNoZWNrZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSk7XG5cbiAgLm1hdC1zbGlkZS10b2dnbGUge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJGFjY2VudCwgJHRodW1iLWNoZWNrZWQtaHVlKTtcblxuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX21hdC1zbGlkZS10b2dnbGUtY2hlY2tlZCgkcHJpbWFyeSwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJHdhcm4sICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1jaGVja2VkKSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIC8vIFNldCBubyBvcGFjaXR5IGZvciB0aGUgcmlwcGxlcyBiZWNhdXNlIHRoZSByaXBwbGUgb3BhY2l0eSB3aWxsIGJlIGFkanVzdGVkIGR5bmFtaWNhbGx5XG4gICAgICAvLyBiYXNlZCBvbiB0aGUgdHlwZSBvZiBpbnRlcmFjdGlvbiB3aXRoIHRoZSBzbGlkZS10b2dnbGUgKGUuZy4gZm9yIGhvdmVyLCBmb2N1cylcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyaXBwbGUtdW5jaGVja2VkLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigxLCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkbWF0LWdyZXksICR0aHVtYi11bmNoZWNrZWQtaHVlKTtcbiAgfVxuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhci11bmNoZWNrZWQtY29sb3I7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbGlkZS10b2dnbGUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtc2xpZGUtdG9nZ2xlLWNvbnRlbnQge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gX21hdC1zbGlkZXItaW5uZXItY29udGVudC10aGVtZSgkcGFsZXR0ZSkge1xuICAubWF0LXNsaWRlci10cmFjay1maWxsLFxuICAubWF0LXNsaWRlci10aHVtYixcbiAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gIH1cblxuICAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJG1hdC1zbGlkZXItb2ZmLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYpO1xuICAkbWF0LXNsaWRlci1vZmYtZm9jdXNlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmLWFjdGl2ZSk7XG4gICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYpO1xuICAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItbWluKTtcbiAgJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZik7XG4gICRtYXQtc2xpZGVyLWZvY3VzLXJpbmctY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCBkZWZhdWx0LCAwLjIpO1xuICAkbWF0LXNsaWRlci1mb2N1cy1yaW5nLW1pbi12YWx1ZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCAwLjEyKTtcbiAgJG1hdC1zbGlkZXItdGljay1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCAwLjcpO1xuICAkbWF0LXNsaWRlci10aWNrLXNpemU6IDJweDtcblxuICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtY29sb3I7XG4gIH1cblxuICAubWF0LXByaW1hcnkge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJHByaW1hcnkpO1xuICB9XG5cbiAgLm1hdC1hY2NlbnQge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJGFjY2VudCk7XG4gIH1cblxuICAubWF0LXdhcm4ge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJHdhcm4pO1xuICB9XG5cbiAgLm1hdC1zbGlkZXItZm9jdXMtcmluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItZm9jdXMtcmluZy1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyOmhvdmVyLFxuICAuY2RrLWZvY3VzZWQge1xuICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWZvY3VzZWQtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItZGlzYWJsZWQge1xuICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQsXG4gICAgLm1hdC1zbGlkZXItdHJhY2stZmlsbCxcbiAgICAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1taW4tdmFsdWUge1xuICAgIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmcge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItZm9jdXMtcmluZy1taW4tdmFsdWUtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcge1xuICAgICAgLm1hdC1zbGlkZXItdGh1bWIsXG4gICAgICAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAmLmNkay1mb2N1c2VkIHtcbiAgICAgICAgLm1hdC1zbGlkZXItdGh1bWIsXG4gICAgICAgIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1sYWJlbC1jb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICY6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpIHtcbiAgICAgIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtY29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyLFxuICAgICAgJi5jZGstZm9jdXNlZCB7XG4gICAgICAgIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1mb2N1c2VkLWNvbG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItaGFzLXRpY2tzIC5tYXQtc2xpZGVyLXdyYXBwZXI6OmFmdGVyIHtcbiAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLXRpY2stY29sb3I7XG4gIH1cblxuICAubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRpY2tzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkbWF0LXNsaWRlci10aWNrLWNvbG9yLFxuICAgICAgICAkbWF0LXNsaWRlci10aWNrLWNvbG9yICRtYXQtc2xpZGVyLXRpY2stc2l6ZSwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xuICAgIC8vIEZpcmVmb3ggZG9lc24ndCBkcmF3IHRoZSBncmFkaWVudCBjb3JyZWN0bHkgd2l0aCAndG8gcmlnaHQnXG4gICAgLy8gKHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzE0MzE5KS5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LXJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoMC4wMDAxZGVnLCAkbWF0LXNsaWRlci10aWNrLWNvbG9yLFxuICAgICAgICAkbWF0LXNsaWRlci10aWNrLWNvbG9yICRtYXQtc2xpZGVyLXRpY2stc2l6ZSwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xuICB9XG5cbiAgLm1hdC1zbGlkZXItdmVydGljYWwgLm1hdC1zbGlkZXItdGlja3Mge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkbWF0LXNsaWRlci10aWNrLWNvbG9yLFxuICAgICAgICAkbWF0LXNsaWRlci10aWNrLWNvbG9yICRtYXQtc2xpZGVyLXRpY2stc2l6ZSwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc2xpZGVyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtc3RlcHBlci10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LXN0ZXAtaGVhZGVyIHtcbiAgICAmLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAgICYuY2RrLXByb2dyYW0tZm9jdXNlZCxcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cblxuICAgIC8vIE9uIHRvdWNoIGRldmljZXMgdGhlIDpob3ZlciBzdGF0ZSB3aWxsIGxpbmdlciBvbiB0aGUgZWxlbWVudCBhZnRlciBhIHRhcC5cbiAgICAvLyBSZXNldCBpdCB2aWEgYEBtZWRpYWAgYWZ0ZXIgdGhlIGRlY2xhcmF0aW9uLCBiZWNhdXNlIHRoZSBtZWRpYSBxdWVyeSBpc24ndFxuICAgIC8vIHN1cHBvcnRlZCBieSBhbGwgYnJvd3NlcnMgeWV0LlxuICAgIEBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtc3RlcC1sYWJlbCxcbiAgICAubWF0LXN0ZXAtb3B0aW9uYWwge1xuICAgICAgLy8gVE9ETyhqb3NlcGhwZXJyb3R0KTogVXBkYXRlIHRvIHVzaW5nIGEgY29ycmVjdGVkIGRpc2FibGVkLXRleHQgY29udHJhc3RcbiAgICAgIC8vIGluc3RlYWQgb2Ygc2Vjb25kYXJ5LXRleHQuXG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWljb24ge1xuICAgICAgLy8gVE9ETyhqb3NlcGhwZXJyb3R0KTogVXBkYXRlIHRvIHVzaW5nIGEgY29ycmVjdGVkIGRpc2FibGVkLXRleHQgY29udHJhc3RcbiAgICAgIC8vIGluc3RlYWQgb2Ygc2Vjb25kYXJ5LXRleHQuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLFxuICAgIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsXG4gICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZXJyb3Ige1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtYWN0aXZlIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1lcnJvciB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cblxuICAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCwgLm1hdC1zdGVwcGVyLXZlcnRpY2FsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICB9XG5cbiAgLm1hdC1zdGVwcGVyLXZlcnRpY2FsLWxpbmU6OmJlZm9yZSB7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmJlZm9yZSxcbiAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjphZnRlcixcbiAgLm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZSB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXN0ZXBwZXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtc3RlcHBlci12ZXJ0aWNhbCwgLm1hdC1zdGVwcGVyLWhvcml6b250YWwge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXN0ZXAtbGFiZWwge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgfTtcbiAgfVxuXG4gIC5tYXQtc3RlcC1zdWItbGFiZWwtZXJyb3Ige1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cblxuICAubWF0LXN0ZXAtbGFiZWwtZXJyb3Ige1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICB9XG5cbiAgLm1hdC1zdGVwLWxhYmVsLXNlbGVjdGVkIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH07XG4gIH1cbn1cblxuQG1peGluIG1hdC1zb3J0LXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xuICAgICR0YWJsZS1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gICAgJHRleHQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuXG4gICAgLy8gQmVjYXVzZSB0aGUgYXJyb3cgaXMgbWFkZSB1cCBvZiBtdWx0aXBsZSBlbGVtZW50cyB0aGF0IGFyZSBzdGFja2VkIG9uIHRvcCBvZiBlYWNoIG90aGVyLFxuICAgIC8vIHdlIGNhbid0IHVzZSB0aGUgc2VtaS10cmFzcGFyZW50IGNvbG9yIGZyb20gdGhlIHRoZW1lIGRpcmVjdGx5LiBJZiB0aGUgdmFsdWUgaXMgYSBjb2xvclxuICAgIC8vICp0eXBlKiwgd2UgY29udmVydCBpdCBpbnRvIGEgc29saWQgY29sb3IgYnkgdGFraW5nIHRoZSBvcGFjaXR5IGZyb20gdGhlIHJnYmEgdmFsdWUgYW5kXG4gICAgLy8gdXNpbmcgdGhlIHZhbHVlIHRvIGRldGVybWluZSB0aGUgcGVyY2VudGFnZSBvZiB0aGUgYmFja2dyb3VuZCB0byBwdXQgaW50byBmb3JlZ3JvdW5kXG4gICAgLy8gd2hlbiBtaXhpbmcgdGhlIGNvbG9ycyB0b2dldGhlci4gT3RoZXJ3aXNlLCBpZiBpdCByZXNvbHZlcyB0byBzb21ldGhpbmcgZGlmZmVyZW50XG4gICAgLy8gKGUuZy4gaXQgcmVzb2x2ZXMgdG8gYSBDU1MgdmFyaWFibGUpLCB3ZSB1c2UgdGhlIGNvbG9yIGRpcmVjdGx5LlxuICAgIEBpZiAodHlwZS1vZigkdGFibGUtYmFja2dyb3VuZCkgPT0gY29sb3IgYW5kIHR5cGUtb2YoJHRleHQtY29sb3IpID09IGNvbG9yKSB7XG4gICAgICAkdGV4dC1vcGFjaXR5OiBvcGFjaXR5KCR0ZXh0LWNvbG9yKTtcbiAgICAgIGNvbG9yOiBtaXgoJHRhYmxlLWJhY2tncm91bmQsIHJnYmEoJHRleHQtY29sb3IsIDEpLCAoMSAtICR0ZXh0LW9wYWNpdHkpICogMTAwJSk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zb3J0LXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuQG1peGluIG1hdC10YWJzLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGhlYWRlci1ib3JkZXI6IDFweCBzb2xpZCBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuXG4gIC5tYXQtdGFiLW5hdi1iYXIsXG4gIC5tYXQtdGFiLWhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogJGhlYWRlci1ib3JkZXI7XG4gIH1cblxuICAubWF0LXRhYi1ncm91cC1pbnZlcnRlZC1oZWFkZXIge1xuICAgIC5tYXQtdGFiLW5hdi1iYXIsXG4gICAgLm1hdC10YWItaGVhZGVyIHtcbiAgICAgIGJvcmRlci10b3A6ICRoZWFkZXItYm9yZGVyO1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbGluayB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC10YWItZGlzYWJsZWQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG5cbiAgLy8gUmVtb3ZlIGhlYWRlciBib3JkZXIgd2hlbiB0aGVyZSBpcyBhIGJhY2tncm91bmQgY29sb3JcbiAgLm1hdC10YWItZ3JvdXBbY2xhc3MqPSdtYXQtYmFja2dyb3VuZC0nXSAubWF0LXRhYi1oZWFkZXIsXG4gIC5tYXQtdGFiLW5hdi1iYXJbY2xhc3MqPSdtYXQtYmFja2dyb3VuZC0nXSB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICB9XG5cbiAgLm1hdC10YWItZ3JvdXAsIC5tYXQtdGFiLW5hdi1iYXIge1xuICAgICR0aGVtZS1jb2xvcnM6IChcbiAgICAgIHByaW1hcnk6ICRwcmltYXJ5LFxuICAgICAgYWNjZW50OiAkYWNjZW50LFxuICAgICAgd2FybjogJHdhcm5cbiAgICApO1xuXG4gICAgQGVhY2ggJG5hbWUsICRjb2xvciBpbiAkdGhlbWUtY29sb3JzIHtcbiAgICAgIC8vIFNldCB0aGUgZm9yZWdyb3VuZCBjb2xvciBvZiB0aGUgdGFic1xuICAgICAgJi5tYXQtI3skbmFtZX0ge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LXRhYi1sYWJlbC1mb2N1cygkY29sb3IpO1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWluay1iYXIoJGNvbG9yKTtcblxuICAgICAgICAvLyBPdmVycmlkZSBpbmsgYmFyIHdoZW4gYmFja2dyb3VuZCBjb2xvciBpcyB0aGUgc2FtZVxuICAgICAgICAmLm1hdC1iYWNrZ3JvdW5kLSN7JG5hbWV9IHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWluay1iYXIoJGNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIEBlYWNoICRuYW1lLCAkY29sb3IgaW4gJHRoZW1lLWNvbG9ycyB7XG4gICAgICAvLyBTZXQgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgdGFicyBhbmQgb3ZlcnJpZGUgZm9jdXMgY29sb3JcbiAgICAgICYubWF0LWJhY2tncm91bmQtI3skbmFtZX0ge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LXRhYi1sYWJlbC1mb2N1cygkY29sb3IpO1xuICAgICAgICBAaW5jbHVkZSBfbWF0LXRhYnMtYmFja2dyb3VuZCgkY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX21hdC1pbmstYmFyKCRjb2xvciwgJGh1ZTogZGVmYXVsdCkge1xuICAubWF0LWluay1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkY29sb3IsICRodWUpO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LXRhYi1sYWJlbC1mb2N1cygkdGFiLWZvY3VzLWNvbG9yKSB7XG4gIC5tYXQtdGFiLWxhYmVsLFxuICAubWF0LXRhYi1saW5rIHtcbiAgICAmLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAgICYuY2RrLXByb2dyYW0tZm9jdXNlZCB7XG4gICAgICAmOm5vdCgubWF0LXRhYi1kaXNhYmxlZCkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHRhYi1mb2N1cy1jb2xvciwgbGlnaHRlciwgMC4zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9tYXQtdGFicy1iYWNrZ3JvdW5kKCRiYWNrZ3JvdW5kLWNvbG9yKSB7XG4gIC8vIFNldCBiYWNrZ3JvdW5kIGNvbG9yIGZvciB0aGUgdGFiIGdyb3VwXG4gIC5tYXQtdGFiLWhlYWRlciwgLm1hdC10YWItbGlua3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvcik7XG4gIH1cblxuICAvLyBTZXQgbGFiZWxzIHRvIGNvbnRyYXN0IGFnYWluc3QgYmFja2dyb3VuZFxuICAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbGluayB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCk7XG5cbiAgICAmLm1hdC10YWItZGlzYWJsZWQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCwgMC40KTtcbiAgICB9XG4gIH1cblxuICAvLyBTZXQgcGFnaW5hdGlvbiBjaGV2cm9ucyB0byBjb250cmFzdCBiYWNrZ3JvdW5kXG4gIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxuXG4gIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjQpO1xuICB9XG5cbiAgLy8gU2V0IHJpcHBsZXMgY29sb3IgdG8gYmUgdGhlIGNvbnRyYXN0IGNvbG9yIG9mIHRoZSBuZXcgYmFja2dyb3VuZC4gT3RoZXJ3aXNlIHRoZSByaXBwbGVcbiAgLy8gY29sb3Igd2lsbCBiZSBiYXNlZCBvbiB0aGUgYXBwIGJhY2tncm91bmQgY29sb3IuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCwgMC4xMik7XG4gIH1cbn1cblxuQG1peGluIG1hdC10YWJzLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRhYi1ncm91cCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBfbWF0LXRvb2xiYXItY29sb3IoJHBhbGV0dGUpIHtcbiAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG59XG5cbkBtaXhpbiBfbWF0LXRvb2xiYXItZm9ybS1maWVsZC1vdmVycmlkZXMge1xuICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lLFxuICAubWF0LWZvcm0tZmllbGQtcmlwcGxlLFxuICAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAubWF0LXNlbGVjdC12YWx1ZSxcbiAgLm1hdC1zZWxlY3QtYXJyb3csXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuICAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gIH1cbn1cblxuQG1peGluIG1hdC10b29sYmFyLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXRvb2xiYXIge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYXBwLWJhcik7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdG9vbGJhci1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdG9vbGJhci1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdG9vbGJhci1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWZvcm0tZmllbGQtb3ZlcnJpZGVzO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdG9vbGJhci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10b29sYmFyLFxuICAubWF0LXRvb2xiYXIgaDEsXG4gIC5tYXQtdG9vbGJhciBoMixcbiAgLm1hdC10b29sYmFyIGgzLFxuICAubWF0LXRvb2xiYXIgaDQsXG4gIC5tYXQtdG9vbGJhciBoNSxcbiAgLm1hdC10b29sYmFyIGg2IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgdGl0bGUpO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG5cblxuXG5cbiRtYXQtdG9vbHRpcC10YXJnZXQtaGVpZ2h0OiAyMnB4O1xuJG1hdC10b29sdGlwLWZvbnQtc2l6ZTogMTBweDtcbiRtYXQtdG9vbHRpcC12ZXJ0aWNhbC1wYWRkaW5nOiAoJG1hdC10b29sdGlwLXRhcmdldC1oZWlnaHQgLSAkbWF0LXRvb2x0aXAtZm9udC1zaXplKSAvIDI7XG5cbiRtYXQtdG9vbHRpcC1oYW5kc2V0LXRhcmdldC1oZWlnaHQ6IDMwcHg7XG4kbWF0LXRvb2x0aXAtaGFuZHNldC1mb250LXNpemU6IDE0cHg7XG4kbWF0LXRvb2x0aXAtaGFuZHNldC12ZXJ0aWNhbC1wYWRkaW5nOlxuICAgICgkbWF0LXRvb2x0aXAtaGFuZHNldC10YXJnZXQtaGVpZ2h0IC0gJG1hdC10b29sdGlwLWhhbmRzZXQtZm9udC1zaXplKSAvIDI7XG5cbkBtaXhpbiBtYXQtdG9vbHRpcC10aGVtZSgkdGhlbWUpIHtcbiAgLm1hdC10b29sdGlwIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJG1hdC1ncmV5LCA3MDAsIDAuOSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC10b29sdGlwLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRvb2x0aXAge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gICAgZm9udC1zaXplOiAkbWF0LXRvb2x0aXAtZm9udC1zaXplO1xuICAgIHBhZGRpbmctdG9wOiAkbWF0LXRvb2x0aXAtdmVydGljYWwtcGFkZGluZztcbiAgICBwYWRkaW5nLWJvdHRvbTogJG1hdC10b29sdGlwLXZlcnRpY2FsLXBhZGRpbmc7XG4gIH1cblxuICAubWF0LXRvb2x0aXAtaGFuZHNldCB7XG4gICAgZm9udC1zaXplOiAkbWF0LXRvb2x0aXAtaGFuZHNldC1mb250LXNpemU7XG4gICAgcGFkZGluZy10b3A6ICRtYXQtdG9vbHRpcC1oYW5kc2V0LXZlcnRpY2FsLXBhZGRpbmc7XG4gICAgcGFkZGluZy1ib3R0b206ICRtYXQtdG9vbHRpcC1oYW5kc2V0LXZlcnRpY2FsLXBhZGRpbmc7XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXNuYWNrLWJhci10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG5cbiAgLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHtcbiAgICAvLyBVc2UgdGhlIHByaW1hcnkgdGV4dCBvbiB0aGUgZGFyayB0aGVtZSwgZXZlbiB0aG91Z2ggdGhlIGxpZ2h0ZXIgb25lIHVzZXNcbiAgICAvLyBhIHNlY29uZGFyeSwgYmVjYXVzZSB0aGUgY29udHJhc3Qgb24gdGhlIGxpZ2h0IHByaW1hcnkgdGV4dCBpcyBwb29yLlxuICAgIGNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgJGRhcmstcHJpbWFyeS10ZXh0LCAkbGlnaHQtc2Vjb25kYXJ5LXRleHQpO1xuICAgIGJhY2tncm91bmQ6IGlmKCRpcy1kYXJrLXRoZW1lLCBtYXAtZ2V0KCRtYXQtZ3JleSwgNTApLCAjMzIzMjMyKTtcblxuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDYsICR0aGVtZSk7XG4gIH1cblxuICAubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb24ge1xuICAgIGNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgaW5oZXJpdCwgbWF0LWNvbG9yKCRhY2NlbnQpKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNuYWNrLWJhci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1zaW1wbGUtc25hY2tiYXIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMSk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9uIHtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IGluaGVyaXQ7XG4gICAgICBzaXplOiBpbmhlcml0O1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBmaWxsIGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1maWxsLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gICRmaWxsLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMSwgMC4wNCkpO1xuICAkZmlsbC1kaXNhYmxlZC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjA1LCAwLjAyKSk7XG4gICR1bmRlcmxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNSwgMC40MikpO1xuICAkbGFiZWwtZGlzYWJsZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZpbGwtYmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmaWxsLWRpc2FibGVkLWJhY2tncm91bmQ7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBjb2xvcjogJGxhYmVsLWRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtZmlsbC1sYWJlbC1mbG9hdGluZygkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZSlcbiAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGU7XG5cbiAgJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1maWxsLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBwYWRkaW5nIG9uIHRvcCBvZiB0aGUgaW5maXguXG4gICRpbmZpeC1wYWRkaW5nLXRvcDogMC4yNWVtO1xuICAvLyBUaGUgcGFkZGluZyBiZWxvdyB0aGUgaW5maXguXG4gICRpbmZpeC1wYWRkaW5nLWJvdHRvbTogMC43NWVtO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgYW1vdW50IHdlIG9mZnNldCB0aGUgbGFiZWwgZnJvbSB0aGUgaW5wdXQgdGV4dCBpbiB0aGUgZmlsbCBhcHBlYXJhbmNlLlxuICAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDogLTAuNWVtO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwge1xuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZy10b3AgMCAkaW5maXgtcGFkZGluZy1ib3R0b20gMDtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nLXRvcDtcbiAgICAgIG1hcmdpbi10b3A6ICRmaWxsLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0O1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWZpbGwtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZy10b3AgKyAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtZmlsbC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLXRvcCArICRmaWxsLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgbGVnYWN5IGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG5cbiAgJGxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgJHVuZGVybGluZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC43LCAwLjQyKSk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IHtcbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgICB9XG5cbiAgICAubWF0LWhpbnQge1xuICAgICAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jb250cm9sLWRpc2FibGVkLXVuZGVybGluZSgkdW5kZXJsaW5lLWNvbG9yKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICAvLyBXZSB1c2UgcGVyc3BlY3RpdmUgdG8gZml4IHRoZSB0ZXh0IGJsdXJyaW5lc3MgYXMgZGVzY3JpYmVkIGhlcmU6XG4gIC8vIGh0dHA6Ly93d3cudXNlcmFnZW50bWFuLmNvbS9ibG9nLzIwMTQvMDUvMDQvZml4aW5nLXR5cG9ncmFwaHktaW5zaWRlLW9mLTItZC1jc3MtdHJhbnNmb3Jtcy9cbiAgLy8gVGhpcyByZXN1bHRzIGluIGEgc21hbGwgaml0dGVyIGFmdGVyIHRoZSBsYWJlbCBmbG9hdHMgb24gRmlyZWZveCwgd2hpY2ggdGhlXG4gIC8vIHRyYW5zbGF0ZVogZml4ZXMuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZykgc2NhbGUoJGZvbnQtc2NhbGUpIHBlcnNwZWN0aXZlKDEwMHB4KVxuICB0cmFuc2xhdGVaKDAuMDAxcHggKyAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSk7XG4gIC8vIFRoZSB0cmlja3MgYWJvdmUgdXNlZCB0byBzbW9vdGggb3V0IHRoZSBhbmltYXRpb24gb24gY2hyb21lIGFuZCBmaXJlZm94IGFjdHVhbGx5IG1ha2UgdGhpbmdzXG4gIC8vIHdvcnNlIG9uIElFLCBzbyB3ZSBkb24ndCBpbmNsdWRlIHRoZW0gaW4gdGhlIElFIHZlcnNpb24uXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSlcbiAgICAgICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcblxuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGU7XG5cbiAgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG4vLyBTYW1lIGFzIG1peGluIGFib3ZlLCBidXQgb21pdHMgdGhlIHRyYW5zbGF0ZVogZm9yIHByaW50aW5nIHB1cnBvc2VzLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmctcHJpbnQoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICAvLyBUaGlzIHJlc3VsdHMgaW4gYSBzbWFsbCBqaXR0ZXIgYWZ0ZXIgdGhlIGxhYmVsIGZsb2F0cyBvbiBGaXJlZm94LCB3aGljaCB0aGVcbiAgLy8gdHJhbnNsYXRlWiBmaXhlcy5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUpXG4gICAgICAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIC8vIFRoZSB0cmlja3MgYWJvdmUgdXNlZCB0byBzbW9vdGggb3V0IHRoZSBhbmltYXRpb24gb24gY2hyb21lIGFuZCBmaXJlZm94IGFjdHVhbGx5IG1ha2UgdGhpbmdzXG4gIC8vIHdvcnNlIG9uIElFLCBzbyB3ZSBkb24ndCBpbmNsdWRlIHRoZW0gaW4gdGhlIElFIHZlcnNpb24uXG4gICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgYW1vdW50IG9mIHNwYWNlIGJldHdlZW4gdGhlIHRvcCBvZiB0aGUgbGluZSBhbmQgdGhlIHRvcCBvZiB0aGUgYWN0dWFsIHRleHRcbiAgLy8gKGFzIGEgZnJhY3Rpb24gb2YgdGhlIGZvbnQtc2l6ZSkuXG4gICRsaW5lLXNwYWNpbmc6ICgkbGluZS1oZWlnaHQgLSAxKSAvIDI7XG4gIC8vIFRoZSBwYWRkaW5nIG9uIHRoZSBpbmZpeC4gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCBzZWVtIHRvIG1lYXN1cmUgZnJvbSB0aGUgZWRnZVxuICAvLyBvZiB0aGUgdGV4dCBpdHNlbGYsIG5vdCB0aGUgZWRnZSBvZiB0aGUgbGluZTsgdGhlcmVmb3JlIHdlIHN1YnRyYWN0IG9mZiB0aGUgbGluZSBzcGFjaW5nLlxuICAkaW5maXgtcGFkZGluZzogMC41ZW0gLSAkbGluZS1zcGFjaW5nO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgc3BhY2UgYmV0d2VlbiB0aGUgYm90dG9tIG9mIHRoZSAubWF0LWZvcm0tZmllbGQtZmxleCBhcmVhIGFuZCB0aGUgc3Vic2NyaXB0IHdyYXBwZXIuXG4gIC8vIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgdGhpcyBtYXJnaW4gaXMgYXBwbGllZCB0byBhbiBlbGVtZW50IHdpdGggdGhlIHN1YnNjcmlwdFxuICAvLyB0ZXh0IGZvbnQgc2l6ZSwgc28gd2UgbmVlZCB0byBkaXZpZGUgYnkgdGhlIHNjYWxlIGZhY3RvciB0byBtYWtlIGl0IGhhbGYgb2YgdGhlIG9yaWdpbmFsIHRleHRcbiAgLy8gc2l6ZS4gV2UgYWdhaW4gbmVlZCB0byBzdWJ0cmFjdCBvZmYgdGhlIGxpbmUgc3BhY2luZyBzaW5jZSB0aGUgbW9ja3MgbWVhc3VyZSB0byB0aGUgZWRnZSBvZiB0aGVcbiAgLy8gdGV4dCwgbm90IHRoZSAgZWRnZSBvZiB0aGUgbGluZS5cbiAgJHN1YnNjcmlwdC1tYXJnaW4tdG9wOiAwLjVlbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZSAtICgkbGluZS1zcGFjaW5nICogMik7XG4gIC8vIFRoZSBwYWRkaW5nIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtd3JhcHBlciB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgc3Vic2NyaXB0LCBzaW5jZSBpdCdzXG4gIC8vIGFic29sdXRlbHkgcG9zaXRpb25lZC4gVGhpcyBpcyBhIGNvbWJpbmF0aW9uIG9mIHRoZSBzdWJzY3JpcHQncyBtYXJnaW4gYW5kIGxpbmUtaGVpZ2h0LCBidXQgd2VcbiAgLy8gbmVlZCB0byBtdWx0aXBseSBieSB0aGUgc3Vic2NyaXB0IGZvbnQgc2NhbGUgZmFjdG9yIHNpbmNlIHRoZSB3cmFwcGVyIGhhcyBhIGxhcmdlciBmb250IHNpemUuXG4gICR3cmFwcGVyLXBhZGRpbmctYm90dG9tOiAoJHN1YnNjcmlwdC1tYXJnaW4tdG9wICsgJGxpbmUtaGVpZ2h0KSAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kge1xuICAgIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgcGFkZGluZzogJGluZml4LXBhZGRpbmcgMDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wIHdpbGwgcmVseSBvbiBBdXRvZmlsbE1vbml0b3IgaW5zdGVhZC5cbiAgICAgIC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgLy8gV2Ugd2FudCB0aGUgdW5kZXJsaW5lIHRvIHN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgYm94LCBub3QgdGhlIHBhZGRpbmcgYm94LFxuICAgICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQuXG4gICAgICBib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gICAgICBtYXJnaW4tdG9wOiAkc3Vic2NyaXB0LW1hcmdpbi10b3A7XG5cbiAgICAgIC8vIFdlIHdhbnQgdGhlIHN1YnNjcmlwdCB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50IChhZGp1c3RlZCBmb3IgdGhlIHNtYWxsZXIgZm9udCBzaXplKTtcbiAgICAgIHRvcDogY2FsYygxMDAlIC0gI3skd3JhcHBlci1wYWRkaW5nLWJvdHRvbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZX0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRyYW5zbGF0ZVogY2F1c2VzIHRoZSBsYWJlbCB0byBub3QgYXBwZWFyIHdoaWxlIHByaW50aW5nLCBzbyB3ZSBvdmVycmlkZSBpdCB0byBub3RcbiAgLy8gYXBwbHkgdHJhbnNsYXRlWiB3aGlsZSBwcmludGluZ1xuICBAbWVkaWEgcHJpbnQge1xuICAgIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmctcHJpbnQoXG4gICAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wIHdpbGwgcmVseSBvbiBBdXRvZmlsbE1vbml0b3IgaW5zdGVhZC5cbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZy1wcmludChcbiAgICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmctcHJpbnQoXG4gICAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgb3V0bGluZSBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG5cbiAgJGxhYmVsLWRpc2FibGVkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAkb3V0bGluZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC4zLCAwLjEyKSk7XG4gICRvdXRsaW5lLWNvbG9yLWhvdmVyOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAxLCAwLjg3KSk7XG4gICRvdXRsaW5lLWNvbG9yLXByaW1hcnk6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICRvdXRsaW5lLWNvbG9yLWFjY2VudDogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAkb3V0bGluZS1jb2xvci13YXJuOiBtYXQtY29sb3IoJHdhcm4pO1xuICAkb3V0bGluZS1jb2xvci1kaXNhYmxlZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC4xNSwgMC4wNikpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUge1xuICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItaG92ZXI7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9jdXNlZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1wcmltYXJ5O1xuICAgICAgfVxuXG4gICAgICAmLm1hdC1hY2NlbnQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItYWNjZW50O1xuICAgICAgfVxuXG4gICAgICAmLm1hdC13YXJuIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLXdhcm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2xhc3MgcmVwZWF0ZWQgc28gdGhhdCBydWxlIGlzIHNwZWNpZmljIGVub3VnaCB0byBvdmVycmlkZSBmb2N1c2VkIGFjY2VudCBjb2xvciBjYXNlLlxuICAgICYubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLXdhcm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBjb2xvcjogJGxhYmVsLWRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1kaXNhYmxlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtb3V0bGluZS1sYWJlbC1mbG9hdGluZygkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZSlcbiAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtb3V0bGluZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgcGFkZGluZyBhYm92ZSBhbmQgYmVsb3cgdGhlIGluZml4LlxuICAkaW5maXgtcGFkZGluZzogMWVtO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgc3BhY2UgYmV0d2VlbiB0aGUgYm90dG9tIG9mIHRoZSAubWF0LWZvcm0tZmllbGQtZmxleCBhcmVhIGFuZCB0aGUgc3Vic2NyaXB0IHdyYXBwZXIuXG4gIC8vIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgdGhpcyBtYXJnaW4gaXMgYXBwbGllZCB0byBhbiBlbGVtZW50IHdpdGggdGhlIHN1YnNjcmlwdFxuICAvLyB0ZXh0IGZvbnQgc2l6ZSwgc28gd2UgbmVlZCB0byBkaXZpZGUgYnkgdGhlIHNjYWxlIGZhY3RvciB0byBtYWtlIGl0IGhhbGYgb2YgdGhlIG9yaWdpbmFsIHRleHRcbiAgLy8gc2l6ZS5cbiAgJHN1YnNjcmlwdC1tYXJnaW4tdG9wOiAwLjVlbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHBhZGRpbmcgYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC13cmFwcGVyIHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBzdWJzY3JpcHQsIHNpbmNlIGl0J3NcbiAgLy8gYWJzb2x1dGVseSBwb3NpdGlvbmVkLiBUaGlzIGlzIGEgY29tYmluYXRpb24gb2YgdGhlIHN1YnNjcmlwdCdzIG1hcmdpbiBhbmQgbGluZS1oZWlnaHQsIGJ1dCB3ZVxuICAvLyBuZWVkIHRvIG11bHRpcGx5IGJ5IHRoZSBzdWJzY3JpcHQgZm9udCBzY2FsZSBmYWN0b3Igc2luY2UgdGhlIHdyYXBwZXIgaGFzIGEgbGFyZ2VyIGZvbnQgc2l6ZS5cbiAgJHdyYXBwZXItcGFkZGluZy1ib3R0b206ICgkc3Vic2NyaXB0LW1hcmdpbi10b3AgKyAkbGluZS1oZWlnaHQpICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgYW1vdW50IHdlIG9mZnNldCB0aGUgbGFiZWwgZnJvbSB0aGUgaW5wdXQgdGV4dCBpbiB0aGUgb3V0bGluZSBhcHBlYXJhbmNlLlxuICAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDogLTAuMjVlbTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgcGFkZGluZzogJGluZml4LXBhZGRpbmcgMCAkaW5maXgtcGFkZGluZyAwO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmc7XG4gICAgICBtYXJnaW4tdG9wOiAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcgKyAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtb3V0bGluZS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nICsgJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBzdGFuZGFyZCBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG5cbiAgJHVuZGVybGluZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC43LCAwLjQyKSk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgQGluY2x1ZGUgbWF0LWNvbnRyb2wtZGlzYWJsZWQtdW5kZXJsaW5lKCR1bmRlcmxpbmUtY29sb3IpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtdHlwb2dyYXBoeSgkY29uZmlnKSB7fVxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IGFwcGx5IHRvIGFsbCBhcHBlYXJhbmNlcyBvZiB0aGUgZm9ybS1maWVsZC5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG5cbiAgLy8gTGFiZWwgY29sb3JzLiBSZXF1aXJlZCBpcyB1c2VkIGZvciB0aGUgYCpgIHN0YXIgc2hvd24gaW4gdGhlIGxhYmVsLlxuICAkbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjcsIDAuNikpO1xuICAkZm9jdXNlZC1sYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgJHJlcXVpcmVkLWxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG5cbiAgLy8gVW5kZXJsaW5lIGNvbG9ycy5cbiAgJHVuZGVybGluZS1jb2xvci1iYXNlOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAxLCAwLjg3KSk7XG4gICR1bmRlcmxpbmUtY29sb3ItYWNjZW50OiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICR1bmRlcmxpbmUtY29sb3Itd2FybjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgJHVuZGVybGluZS1mb2N1c2VkLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtaGludCB7XG4gICAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiAkZm9jdXNlZC1sYWJlbC1jb2xvcjtcblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci1hY2NlbnQ7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyIHtcbiAgICBjb2xvcjogJHJlcXVpcmVkLWxhYmVsLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvci1iYXNlO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIHtcbiAgICAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtZm9jdXNlZC1jb2xvcjtcblxuICAgICAgJi5tYXQtYWNjZW50IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvci1hY2NlbnQ7XG4gICAgICB9XG5cbiAgICAgICYubWF0LXdhcm4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvY3VzZWQ6bm90KC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkKSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1mb2N1c2VkLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICB9XG4gIH1cblxuICAvLyBTdHlsaW5nIGZvciB0aGUgZXJyb3Igc3RhdGUgb2YgdGhlIGZvcm0gZmllbGQuIE5vdGUgdGhhdCB3aGlsZSB0aGUgc2FtZSBjYW4gYmVcbiAgLy8gYWNoaWV2ZWQgd2l0aCB0aGUgbmctKiBjbGFzc2VzLCB3ZSB1c2UgdGhpcyBhcHByb2FjaCBpbiBvcmRlciB0byBlbnN1cmUgdGhhdCB0aGUgc2FtZVxuICAvLyBsb2dpYyBpcyB1c2VkIHRvIHN0eWxlIHRoZSBlcnJvciBzdGF0ZSBhbmQgdG8gc2hvdyB0aGUgZXJyb3IgbWVzc2FnZXMuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIHtcbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcblxuICAgICAgJi5tYXQtYWNjZW50LFxuICAgICAgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gICAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSxcbiAgICAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC1hY2NlbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZXJyb3Ige1xuICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gIH1cblxuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtZmlsbC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoZW1lKCR0aGVtZSk7XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZygkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1kZWR1cGUpXG4gICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJG1hdC1mb3JtLWZpZWxkLWRlZHVwZTtcblxuICAkbWF0LWZvcm0tZmllbGQtZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcblxuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgcHJlZml4IGFuZCBzdWZmaXggaWNvbnMuXG4gICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZTogMS41O1xuXG4gIC8vIFRoZSBwYWRkaW5nIG9uIHRoZSBpbmZpeC4gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUuXG4gICRpbmZpeC1wYWRkaW5nOiAwLjVlbTtcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gRm9udCBzaXplIHRvIHVzZSBmb3IgdGhlIGxhYmVsIGFuZCBzdWJzY3JpcHQgdGV4dC5cbiAgJHN1YnNjcmlwdC1mb250LXNpemU6ICRzdWJzY3JpcHQtZm9udC1zY2FsZSAqIDEwMCU7XG4gIC8vIEZvbnQgc2l6ZSB0byB1c2UgZm9yIHRoZSBmb3IgdGhlIHByZWZpeCBhbmQgc3VmZml4IGljb25zLlxuICAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2l6ZTogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlICogMTAwJTtcbiAgLy8gVGhlIHNwYWNlIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgLm1hdC1mb3JtLWZpZWxkLWZsZXggYXJlYSBhbmQgdGhlIHN1YnNjcmlwdCB3cmFwcGVyLlxuICAvLyBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHRoaXMgbWFyZ2luIGlzIGFwcGxpZWQgdG8gYW4gZWxlbWVudCB3aXRoIHRoZSBzdWJzY3JpcHRcbiAgLy8gdGV4dCBmb250IHNpemUsIHNvIHdlIG5lZWQgdG8gZGl2aWRlIGJ5IHRoZSBzY2FsZSBmYWN0b3IgdG8gbWFrZSBpdCBoYWxmIG9mIHRoZSBvcmlnaW5hbCB0ZXh0XG4gIC8vIHNpemUuXG4gICRzdWJzY3JpcHQtbWFyZ2luLXRvcDogMC41ZW0gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBwYWRkaW5nIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtd3JhcHBlciB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgc3Vic2NyaXB0LCBzaW5jZSBpdCdzXG4gIC8vIGFic29sdXRlbHkgcG9zaXRpb25lZC4gVGhpcyBpcyBhIGNvbWJpbmF0aW9uIG9mIHRoZSBzdWJzY3JpcHQncyBtYXJnaW4gYW5kIGxpbmUtaGVpZ2h0LCBidXQgd2VcbiAgLy8gbmVlZCB0byBtdWx0aXBseSBieSB0aGUgc3Vic2NyaXB0IGZvbnQgc2NhbGUgZmFjdG9yIHNpbmNlIHRoZSB3cmFwcGVyIGhhcyBhIGxhcmdlciBmb250IHNpemUuXG4gICR3cmFwcGVyLXBhZGRpbmctYm90dG9tOiAoJHN1YnNjcmlwdC1tYXJnaW4tdG9wICsgJGxpbmUtaGVpZ2h0KSAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcblxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBpbnB1dCk7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgcGFkZGluZy1ib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXByZWZpeCxcbiAgLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCB7XG4gICAgLy8gQWxsb3cgaWNvbnMgaW4gYSBwcmVmaXggb3Igc3VmZml4IHRvIGFkYXB0IHRvIHRoZSBjb3JyZWN0IHNpemUuXG4gICAgLm1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNpemU7XG4gICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgIH1cblxuICAgIC8vIEFsbG93IGljb24gYnV0dG9ucyBpbiBhIHByZWZpeCBvciBzdWZmaXggdG8gYWRhcHQgdG8gdGhlIGNvcnJlY3Qgc2l6ZS5cbiAgICAubWF0LWljb24tYnV0dG9uIHtcbiAgICAgIGhlaWdodDogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlICogMWVtO1xuICAgICAgd2lkdGg6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZSAqIDFlbTtcblxuICAgICAgLm1hdC1pY29uIHtcbiAgICAgICAgaGVpZ2h0OiAkbGluZS1oZWlnaHQgKiAxZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZyAwO1xuICAgIC8vIFRocm93cyBvZmYgdGhlIGJhc2VsaW5lIGlmIHdlIGRvIGl0IGFzIGEgcmVhbCBtYXJnaW4sIHNvIHdlIGRvIGl0IGFzIGEgYm9yZGVyIGluc3RlYWQuXG4gICAgYm9yZGVyLXRvcDogJGluZml4LW1hcmdpbi10b3Agc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgfVxuXG4gICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xuICAgIHRvcDogLSRpbmZpeC1tYXJnaW4tdG9wO1xuICAgIHBhZGRpbmctdG9wOiAkaW5maXgtbWFyZ2luLXRvcDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgLy8gV2Ugd2FudCB0aGUgdW5kZXJsaW5lIHRvIHN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgYm94LCBub3QgdGhlIHBhZGRpbmcgYm94LFxuICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50LlxuICAgIGJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICAgIGZvbnQtc2l6ZTogJHN1YnNjcmlwdC1mb250LXNpemU7XG4gICAgbWFyZ2luLXRvcDogJHN1YnNjcmlwdC1tYXJnaW4tdG9wO1xuXG4gICAgLy8gV2Ugd2FudCB0aGUgc3Vic2NyaXB0IHRvIHN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgYm94LCBub3QgdGhlIHBhZGRpbmcgYm94LFxuICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50IChhZGp1c3RlZCBmb3IgdGhlIHNtYWxsZXIgZm9udCBzaXplKTtcbiAgICB0b3A6IGNhbGMoMTAwJSAtICN7JHdyYXBwZXItcGFkZGluZy1ib3R0b20gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGV9KTtcbiAgfVxuXG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1maWxsLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXRyZWUtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC10cmVlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LXRyZWUtbm9kZSxcbiAgLm1hdC1uZXN0ZWQtdHJlZS1ub2RlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRyZWUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdHJlZSB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtdHJlZS1ub2RlLFxuICAubWF0LW5lc3RlZC10cmVlLW5vZGUge1xuICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuLy8gSW5jbHVkZXMgYWxsIG9mIHRoZSB0eXBvZ3JhcGhpYyBzdHlsZXMuXG5AbWl4aW4gYW5ndWxhci1tYXRlcmlhbC10eXBvZ3JhcGh5KCRjb25maWc6IG51bGwpIHtcbiAgQGlmICRjb25maWcgPT0gbnVsbCB7XG4gICAgJGNvbmZpZzogbWF0LXR5cG9ncmFwaHktY29uZmlnKCk7XG4gIH1cblxuICBAaW5jbHVkZSBtYXQtYmFkZ2UtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWJhc2UtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWF1dG9jb21wbGV0ZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYm90dG9tLXNoZWV0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1idXR0b24tdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10b2dnbGUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWNhcmQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWNoZWNrYm94LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1jaGlwcy10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdGFibGUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWRhdGVwaWNrZXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWRpYWxvZy10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZXhwYW5zaW9uLXBhbmVsLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1ncmlkLWxpc3QtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWljb24tdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWlucHV0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1tZW51LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wYWdpbmF0b3ItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLWJhci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcmFkaW8tdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNlbGVjdC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc2lkZW5hdi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc2xpZGUtdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXN0ZXBwZXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNvcnQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRhYnMtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRvb2xiYXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRvb2x0aXAtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWxpc3QtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LW9wdGlvbi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtb3B0Z3JvdXAtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNuYWNrLWJhci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdHJlZS10eXBvZ3JhcGh5KCRjb25maWcpO1xufVxuXG5cbi8vIE1peGluIHRoYXQgcmVuZGVycyBhbGwgb2YgdGhlIGNvcmUgc3R5bGVzIHRoYXQgYXJlIG5vdCB0aGVtZS1kZXBlbmRlbnQuXG5AbWl4aW4gbWF0LWNvcmUoJHR5cG9ncmFwaHktY29uZmlnOiBudWxsKSB7XG4gIEBpbmNsdWRlIGFuZ3VsYXItbWF0ZXJpYWwtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeS1jb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcmlwcGxlKCk7XG4gIEBpbmNsdWRlIGNkay1hMTF5KCk7XG4gIEBpbmNsdWRlIGNkay1vdmVybGF5KCk7XG4gIEBpbmNsdWRlIGNkay10ZXh0LWZpZWxkKCk7XG59XG5cbi8vIE1peGluIHRoYXQgcmVuZGVycyBhbGwgb2YgdGhlIGNvcmUgc3R5bGVzIHRoYXQgZGVwZW5kIG9uIHRoZSB0aGVtZS5cbkBtaXhpbiBtYXQtY29yZS10aGVtZSgkdGhlbWUpIHtcbiAgQGluY2x1ZGUgbWF0LXJpcHBsZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtb3B0aW9uLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1vcHRncm91cC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcHNldWRvLWNoZWNrYm94LXRoZW1lKCR0aGVtZSk7XG5cbiAgLy8gUHJvdmlkZXMgZXh0ZXJuYWwgQ1NTIGNsYXNzZXMgZm9yIGVhY2ggZWxldmF0aW9uIHZhbHVlLiBFYWNoIENTUyBjbGFzcyBpcyBmb3JtYXR0ZWQgYXNcbiAgLy8gYG1hdC1lbGV2YXRpb24teiR6VmFsdWVgIHdoZXJlIGAkelZhbHVlYCBjb3JyZXNwb25kcyB0byB0aGUgei1zcGFjZSB0byB3aGljaCB0aGUgZWxlbWVudCBpc1xuICAvLyBlbGV2YXRlZC5cbiAgQGZvciAkelZhbHVlIGZyb20gMCB0aHJvdWdoIDI0IHtcbiAgICAuI3skX21hdC1lbGV2YXRpb24tcHJlZml4fSN7JHpWYWx1ZX0ge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oJHpWYWx1ZSwgJHRoZW1lKTtcbiAgICB9XG4gIH1cblxuICAvLyBXcmFwcGVyIGVsZW1lbnQgdGhhdCBwcm92aWRlcyB0aGUgdGhlbWUgYmFja2dyb3VuZCB3aGVuIHRoZSB1c2VyJ3MgY29udGVudCBpc24ndFxuICAvLyBpbnNpZGUgb2YgYSBgbWF0LXNpZGVuYXYtY29udGFpbmVyYC4gTm90ZSB0aGF0IHdlIG5lZWQgdG8gZXhjbHVkZSB0aGUgYW1wZXJzYW5kXG4gIC8vIHNlbGVjdG9yIGluIGNhc2UgdGhlIG1peGluIGlzIGluY2x1ZGVkIGF0IHRoZSB0b3AgbGV2ZWwuXG4gIC5tYXQtYXBwLWJhY2tncm91bmQje2lmKCYsICcsICYubWF0LWFwcC1iYWNrZ3JvdW5kJywgJycpfSB7XG4gICAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC8vIE1hcmtlciB0aGF0IGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHVzZXIgaGFzIGFkZGVkIGEgdGhlbWUgdG8gdGhlaXIgcGFnZS5cbiAgQGF0LXJvb3Qge1xuICAgIC5tYXQtdGhlbWUtbG9hZGVkLW1hcmtlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWRpdmlkZXItdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1kaXZpZGVyIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1kaXZpZGVyLXZlcnRpY2FsIHtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gQ3JlYXRlIGEgdGhlbWUuXG5AbWl4aW4gYW5ndWxhci1tYXRlcmlhbC10aGVtZSgkdGhlbWUpIHtcbiAgQGluY2x1ZGUgbWF0LWNvcmUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWF1dG9jb21wbGV0ZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYmFkZ2UtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWJvdHRvbS1zaGVldC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYnV0dG9uLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1idXR0b24tdG9nZ2xlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1jYXJkLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1jaGVja2JveC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtY2hpcHMtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRhYmxlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1kYXRlcGlja2VyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1kaWFsb2ctdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWRpdmlkZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWV4cGFuc2lvbi1wYW5lbC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZ3JpZC1saXN0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1pY29uLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1pbnB1dC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtbGlzdC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtbWVudS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcGFnaW5hdG9yLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1iYXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLXNwaW5uZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXJhZGlvLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zZWxlY3QtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNpZGVuYXYtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNsaWRlLXRvZ2dsZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc2xpZGVyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zdGVwcGVyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zb3J0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC10YWJzLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC10b29sYmFyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC10b29sdGlwLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC10cmVlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zbmFjay1iYXItdGhlbWUoJHRoZW1lKTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/enevts/events-console.component.ts":
/*!****************************************************!*\
  !*** ./src/app/enevts/events-console.component.ts ***!
  \****************************************************/
/*! exports provided: EventsConsoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsConsoleComponent", function() { return EventsConsoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/events.service */ "./src/app/enevts/services/events.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventsConsoleComponent = /** @class */ (function () {
    function EventsConsoleComponent(eventsService) {
        var _this = this;
        this.eventsService = eventsService;
        this.subscription = this.eventsService.applicationEventsSubject.subscribe(function (arr) {
            _this.applicationEvents = arr;
        });
    }
    EventsConsoleComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    EventsConsoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'events-console',
            template: __webpack_require__(/*! ./events-console.component.html */ "./src/app/enevts/events-console.component.html"),
            styles: [__webpack_require__(/*! ./events-console.component.scss */ "./src/app/enevts/events-console.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_events_service__WEBPACK_IMPORTED_MODULE_1__["EventsService"]])
    ], EventsConsoleComponent);
    return EventsConsoleComponent;
}());



/***/ }),

/***/ "./src/app/enevts/services/events.service.ts":
/*!***************************************************!*\
  !*** ./src/app/enevts/services/events.service.ts ***!
  \***************************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stompjs */ "./node_modules/stompjs/index.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stompjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sockjs-client */ "./node_modules/sockjs-client/lib/entry.js");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var EventsService = /** @class */ (function () {
    function EventsService(config) {
        var _this = this;
        this.config = config;
        this.applicationEvents = new Array();
        this.applicationEventsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.applicationEvents);
        this.MAX_COUNT_ENETS = 100;
        var socket = new sockjs_client__WEBPACK_IMPORTED_MODULE_1__(config.api + '/websocket');
        this.stompClient = stompjs__WEBPACK_IMPORTED_MODULE_0__["over"](socket);
        this.stompClient.debug = null;
        this.stompClient.connect({}, function (frame) {
            _this.stompClient.subscribe("/topic/ui/events", function (message) {
                _this.applicationEvents.push(JSON.parse(message.body));
                if (_this.applicationEvents.length > _this.MAX_COUNT_ENETS) {
                    _this.applicationEvents = _this.lastN(_this.applicationEvents, _this.MAX_COUNT_ENETS);
                }
                _this.applicationEventsSubject.next(_this.applicationEvents);
            });
        });
    }
    EventsService.prototype.lastN = function (array, n) {
        if (array == null)
            return void 0;
        if (n == null)
            return array[array.length - 1];
        return array.slice(Math.max(array.length - n, 0));
    };
    ;
    EventsService = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"])(_config__WEBPACK_IMPORTED_MODULE_3__["Config"])),
        __metadata("design:paramtypes", [_config__WEBPACK_IMPORTED_MODULE_3__["Config"]])
    ], EventsService);
    return EventsService;
}());



/***/ }),

/***/ "./src/app/login/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/login/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_ui_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-ui-auth */ "./node_modules/ng2-ui-auth/fesm5/ng2-ui-auth.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.auth.isAuthenticated()) {
            return true;
        }
        this.router.navigateByUrl('login');
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(ng2_ui_auth__WEBPACK_IMPORTED_MODULE_1__["AuthService"])),
        __metadata("design:paramtypes", [ng2_ui_auth__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_ui_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-ui-auth */ "./node_modules/ng2-ui-auth/fesm5/ng2-ui-auth.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ "./src/app/login/login.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, config) {
        this.auth = auth;
        this.router = router;
        this.config = config;
        this.loginData = new _login__WEBPACK_IMPORTED_MODULE_3__["Login"]();
        this.submitted = false;
        this.url = config.api + '/authenticate';
    }
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.submitted = true;
        this.auth.removeToken();
        this.auth.login(this.loginData, this.url).subscribe({
            error: function (err) { return console.log(err); },
            complete: function () { return _this.router.navigateByUrl('/'); }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.html */ "./src/app/login/login.html"),
            styles: [__webpack_require__(/*! ./login.scss */ "./src/app/login/login.scss")]
        }),
        __metadata("design:paramtypes", [ng2_ui_auth__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _config__WEBPACK_IMPORTED_MODULE_4__["Config"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.html":
/*!**********************************!*\
  !*** ./src/app/login/login.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100%; background-color: #ececec;\" fxLayout=\"column\">\n\n  <div fxFlex=\"345px\" fxLayout=\"row\" fxLayoutAlign=\"center\" fxFlexOffset=\"10%\">\n\n    <mat-card fxFlex=\"500px\" fxLayout=\"column\">\n      <mat-card-title fxLayoutAlign=\"center\">\n        <h3>Вход в терминал</h3>\n      </mat-card-title>\n\n      <form (ngSubmit)=\"onSubmit(loginForm)\"\n            #loginForm=\"ngForm\" fxLayout=\"column\">\n\n        <mat-form-field>\n          <input matInput #input\n                 [(ngModel)]=\"loginData.username\"\n                 required type=\"text\"\n                 class=\"form-control\"\n                 id=\"username-field\"\n                 name=\"username\"\n                 placeholder=\"Логин\"\n                 #username=\"ngModel\">\n        </mat-form-field>\n\n\n        <mat-form-field>\n          <input matInput placeholder=\"Пароль\"\n                 [type]=\"show ?'text':'password'\"\n                 [(ngModel)]=\"loginData.password\"\n                 required class=\"form-control\"\n                 id=\"password-field\"\n                 name=\"password\"\n                 #password=\"ngModel\">\n          <mat-icon matSuffix (click)=\"show = !show\">{{show ?'visibility_off': 'visibility' }}</mat-icon>\n        </mat-form-field>\n\n        <div fxLayout fxFlexAlign=\"center\" style=\"margin: 20px;\" fxLayoutGap=\"10px\">\n          <button type=\"submit\" mat-raised-button color=\"primary\">Login</button>\n        </div>\n\n      </form>\n    </mat-card>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.scss":
/*!**********************************!*\
  !*** ./src/app/login/login.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.ts":
/*!********************************!*\
  !*** ./src/app/login/login.ts ***!
  \********************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
var Login = /** @class */ (function () {
    function Login() {
    }
    return Login;
}());



/***/ }),

/***/ "./src/app/main.component.html":
/*!*************************************!*\
  !*** ./src/app/main.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100%\" fxLayout=\"column\">\n  <mat-toolbar color=\"primary\" style=\"z-index: 2;\" class=\"mat-elevation-z4\" fxFlex=\"60px\">\n    <mat-toolbar-row>\n      <span>Dashboard</span>\n      <span class=\"spacer\"></span>\n    </mat-toolbar-row>\n  </mat-toolbar>\n  <div class=\"under-toolbar\" fxFlex=\"100%\" fxLayout class=\"mat-elevation-z5\">\n    <mat-sidenav-container class=\"example-container\" fxFlex>\n      <mat-sidenav mode=\"side\" class=\"mat-elevation-z4\" opened=\"true\">\n\n        <mat-list>\n\n          <mat-list-item>\n            <button mat-icon-button matTooltip=\"Задачи мониторинга\"\n                    routerLink=\"/bot-monitoring\"\n                    matTooltipPosition=\"right\">\n              <mat-icon>desktop_windows</mat-icon>\n            </button>\n          </mat-list-item>\n\n          <mat-list-item>\n            <button mat-icon-button matTooltip=\"Формы запросов\"\n                    routerLink=\"/data-forms\"\n                    matTooltipPosition=\"right\">\n              <mat-icon>pan_tool</mat-icon>\n            </button>\n          </mat-list-item>\n\n          <mat-list-item>\n            <button mat-icon-button matTooltip=\"Команды ботов\"\n                    routerLink=\"/bot-commands\"\n                    matTooltipPosition=\"right\">\n              <mat-icon>send</mat-icon>\n            </button>\n          </mat-list-item>\n\n          <mat-list-item>\n            <button mat-icon-button matTooltip=\"Бот API\"\n                    routerLink=\"/bots-list\"\n                    matTooltipPosition=\"right\">\n              <mat-icon>android</mat-icon>\n            </button>\n          </mat-list-item>\n\n          <mat-list-item>\n            <button mat-icon-button matTooltip=\"Базы данных\"\n                    matTooltipPosition=\"right\" routerLink=\"/dbs-list\">\n              <mat-icon>storage</mat-icon>\n            </button>\n          </mat-list-item>\n\n          <mat-list-item>\n            <button mat-icon-button matTooltip=\"Веб-пользователи\"\n                    matTooltipPosition=\"right\" routerLink=\"/web-users-list\">\n              <mat-icon>face</mat-icon>\n            </button>\n          </mat-list-item>\n\n          <mat-list-item>\n            <button mat-icon-button matTooltip=\"Обработчики текста\"\n                    matTooltipPosition=\"right\" routerLink=\"/text-processor-handlers-list\">\n              <mat-icon>text_rotation_angledown</mat-icon>\n            </button>\n          </mat-list-item>\n\n\n\n          <mat-list-item>\n            <button mat-icon-button matTooltip=\"Настройки приложения\"\n                    matTooltipPosition=\"right\" routerLink=\"/settings\">\n              <mat-icon>settings</mat-icon>\n            </button>\n          </mat-list-item>\n\n        </mat-list>\n\n      </mat-sidenav>\n      <mat-sidenav-content>\n        <as-split direction=\"vertical\">\n          <as-split-area size=\"90\">\n            <router-outlet></router-outlet>\n          </as-split-area>\n          <as-split-area size=\"10\" #autoScrollMe style=\"background-color: #eeeeee;\">\n           <events-console></events-console>\n          </as-split-area>\n        </as-split>\n      </mat-sidenav-content>\n    </mat-sidenav-container>\n  </div>\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/main.component.scss":
/*!*************************************!*\
  !*** ./src/app/main.component.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/app/main.component.ts":
/*!***********************************!*\
  !*** ./src/app/main.component.ts ***!
  \***********************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = /** @class */ (function () {
    function MainComponent(config) {
        this.config = config;
        console.info(config);
    }
    MainComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    MainComponent.prototype.scrollToBottom = function () {
        try {
            this.autoScrollContainer.nativeElement.scrollTop = this.autoScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('autoScrollMe'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MainComponent.prototype, "autoScrollContainer", void 0);
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'main-menu',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main.component.html"),
            providers: [_config__WEBPACK_IMPORTED_MODULE_1__["Config"]],
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main.component.scss")]
        }),
        __metadata("design:paramtypes", [_config__WEBPACK_IMPORTED_MODULE_1__["Config"]])
    ], MainComponent);
    return MainComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aleksandrserdukov/projects/support-terminal-dev/support-terminal/ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map