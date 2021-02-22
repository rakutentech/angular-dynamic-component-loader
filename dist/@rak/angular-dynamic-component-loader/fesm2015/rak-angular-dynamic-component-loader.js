import { ɵɵinject, ComponentFactoryResolver, ApplicationRef, Injector, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable } from '@angular/core';

class DynamicComponentLoaderService {
    constructor(componentFactoryResolver, appRef, injector) {
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
    loadComponent(component, data = {}, shouldAttachView = true, injector) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        const newComponentRef = componentFactory.create(injector || this.injector);
        Object.assign(newComponentRef.instance, data);
        if (shouldAttachView) {
            this.appRef.attachView(newComponentRef.hostView);
        }
        return newComponentRef;
    }
}
DynamicComponentLoaderService.ɵfac = function DynamicComponentLoaderService_Factory(t) { return new (t || DynamicComponentLoaderService)(ɵɵinject(ComponentFactoryResolver), ɵɵinject(ApplicationRef), ɵɵinject(Injector)); };
DynamicComponentLoaderService.ɵprov = ɵɵdefineInjectable({ token: DynamicComponentLoaderService, factory: DynamicComponentLoaderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DynamicComponentLoaderService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: ComponentFactoryResolver }, { type: ApplicationRef }, { type: Injector }]; }, null); })();

/*
 * Public API Surface of angular-dynamic-component-loader
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DynamicComponentLoaderService };
//# sourceMappingURL=rak-angular-dynamic-component-loader.js.map
