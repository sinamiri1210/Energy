System.register(['@angular/core', '@angular/router', '../service/login'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, login_1;
    var DashComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            }],
        execute: function() {
            DashComponent = class DashComponent {
                constructor(router, loginService) {
                    this.router = router;
                    this.loginService = loginService;
                    this.router.navigate(['/Dash-admin/Map']);
                    this.user = loginService.getUser();
                }
            };
            DashComponent = __decorate([
                core_1.Component({
                    templateUrl: "dashboard.html",
                    styles: [
                        `
       div.row{
           display:flex;
           margin-top:4px;
       }
        `,
                        `
       div.col-md-2{
           padding:0;
       }
        `
                    ]
                }), 
                __metadata('design:paramtypes', [router_1.Router, login_1.LoginService])
            ], DashComponent);
            exports_1("DashComponent", DashComponent);
        }
    }
});
//# sourceMappingURL=dash.js.map