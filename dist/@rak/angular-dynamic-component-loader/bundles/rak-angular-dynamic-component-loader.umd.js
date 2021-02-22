(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@rak/angular-dynamic-component-loader', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.rak = global.rak || {}, global.rak['angular-dynamic-component-loader'] = {}), global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var DynamicComponentLoaderService = /** @class */ (function () {
        function DynamicComponentLoaderService(componentFactoryResolver, appRef, injector) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.appRef = appRef;
            this.injector = injector;
        }
        /**
         * Loads a dynamic Angular component instance of given type T
         *
         * @param component - The class name of the dynamically loaded component
         * @param [data] - Data of the dynamic component
         * @param [shouldAttachView] - If true, the component's view will be attached to a viewContainer
         * @param [injector] - This provides local injections to a dynamic component instance
         * @returns A new ComponentRef instance
         */
        DynamicComponentLoaderService.prototype.loadComponent = function (component, data, shouldAttachView, injector) {
            if (data === void 0) { data = {}; }
            if (shouldAttachView === void 0) { shouldAttachView = true; }
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
            var newComponentRef = componentFactory.create(injector || this.injector);
            Object.assign(newComponentRef.instance, data);
            if (shouldAttachView) {
                this.appRef.attachView(newComponentRef.hostView);
            }
            return newComponentRef;
        };
        return DynamicComponentLoaderService;
    }());
    DynamicComponentLoaderService.ɵfac = function DynamicComponentLoaderService_Factory(t) { return new (t || DynamicComponentLoaderService)(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.Injector)); };
    DynamicComponentLoaderService.ɵprov = i0.ɵɵdefineInjectable({ token: DynamicComponentLoaderService, factory: DynamicComponentLoaderService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DynamicComponentLoaderService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }]; }, null);
    })();

    /*
     * Public API Surface of angular-dynamic-component-loader
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DynamicComponentLoaderService = DynamicComponentLoaderService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=rak-angular-dynamic-component-loader.umd.js.map
