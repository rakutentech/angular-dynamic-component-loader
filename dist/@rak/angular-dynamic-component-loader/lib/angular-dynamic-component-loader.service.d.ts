import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injector, Type } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DynamicComponentLoaderService {
    private componentFactoryResolver;
    private appRef;
    private injector;
    constructor(componentFactoryResolver: ComponentFactoryResolver, appRef: ApplicationRef, injector: Injector);
    /**
     * Loads a dynamic Angular component instance of given type T
     *
     * @param component - The class name of the dynamically loaded component
     * @param [data] - Data of the dynamic component
     * @param [shouldAttachView] - If true, the component's view will be attached to a viewContainer
     * @param [injector] - This provides local injections to a dynamic component instance
     * @returns A new ComponentRef instance
     */
    loadComponent<T>(component: Type<T>, data?: {}, shouldAttachView?: boolean, injector?: Injector): ComponentRef<T>;
    static ɵfac: i0.ɵɵFactoryDef<DynamicComponentLoaderService, never>;
    static ɵprov: i0.ɵɵInjectableDef<DynamicComponentLoaderService>;
}
