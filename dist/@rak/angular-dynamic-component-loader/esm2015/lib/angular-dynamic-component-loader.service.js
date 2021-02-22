import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class DynamicComponentLoaderService {
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
DynamicComponentLoaderService.ɵfac = function DynamicComponentLoaderService_Factory(t) { return new (t || DynamicComponentLoaderService)(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.Injector)); };
DynamicComponentLoaderService.ɵprov = i0.ɵɵdefineInjectable({ token: DynamicComponentLoaderService, factory: DynamicComponentLoaderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DynamicComponentLoaderService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1keW5hbWljLWNvbXBvbmVudC1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamFuaXMuZ2FuZ2EvRG9jdW1lbnRzL0RPQ1VNRU5UUy9DT0RFL0xJQlJBUlkvYW5ndWxhci1keW5hbWljLWNvbXBvbmVudC1sb2FkZXIvcHJvamVjdHMvYW5ndWxhci1keW5hbWljLWNvbXBvbmVudC1sb2FkZXIvc3JjLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXItZHluYW1pYy1jb21wb25lbnQtbG9hZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF5RCxVQUFVLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUtqSCxNQUFNLE9BQU8sNkJBQTZCO0lBQ3hDLFlBQW9CLHdCQUFrRCxFQUFVLE1BQXNCLEVBQVUsUUFBa0I7UUFBOUcsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUNsSSxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCxhQUFhLENBQUksU0FBa0IsRUFBRSxPQUFXLEVBQUUsRUFBRSxtQkFBNEIsSUFBSSxFQUFFLFFBQW1CO1FBQ3ZHLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFGLE1BQU0sZUFBZSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTNFLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU5QyxJQUFJLGdCQUFnQixFQUFFO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsRDtRQUVELE9BQU8sZUFBZSxDQUFDO0lBQ3pCLENBQUM7OzBHQXhCVSw2QkFBNkI7cUVBQTdCLDZCQUE2QixXQUE3Qiw2QkFBNkIsbUJBRjVCLE1BQU07a0RBRVAsNkJBQTZCO2NBSHpDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmLCBJbmplY3RhYmxlLCBJbmplY3RvciwgVHlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljQ29tcG9uZW50TG9hZGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZiwgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyBhIGR5bmFtaWMgQW5ndWxhciBjb21wb25lbnQgaW5zdGFuY2Ugb2YgZ2l2ZW4gdHlwZSBUXG4gICAqXG4gICAqIEBwYXJhbSBjb21wb25lbnQgLSBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgZHluYW1pY2FsbHkgbG9hZGVkIGNvbXBvbmVudFxuICAgKiBAcGFyYW0gW2RhdGFdIC0gRGF0YSBvZiB0aGUgZHluYW1pYyBjb21wb25lbnRcbiAgICogQHBhcmFtIFtzaG91bGRBdHRhY2hWaWV3XSAtIElmIHRydWUsIHRoZSBjb21wb25lbnQncyB2aWV3IHdpbGwgYmUgYXR0YWNoZWQgdG8gYSB2aWV3Q29udGFpbmVyXG4gICAqIEBwYXJhbSBbaW5qZWN0b3JdIC0gVGhpcyBwcm92aWRlcyBsb2NhbCBpbmplY3Rpb25zIHRvIGEgZHluYW1pYyBjb21wb25lbnQgaW5zdGFuY2VcbiAgICogQHJldHVybnMgQSBuZXcgQ29tcG9uZW50UmVmIGluc3RhbmNlXG4gICAqL1xuICBsb2FkQ29tcG9uZW50PFQ+KGNvbXBvbmVudDogVHlwZTxUPiwgZGF0YToge30gPSB7fSwgc2hvdWxkQXR0YWNoVmlldzogYm9vbGVhbiA9IHRydWUsIGluamVjdG9yPzogSW5qZWN0b3IpOiBDb21wb25lbnRSZWY8VD4ge1xuICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xuICAgIGNvbnN0IG5ld0NvbXBvbmVudFJlZiA9IGNvbXBvbmVudEZhY3RvcnkuY3JlYXRlKGluamVjdG9yIHx8IHRoaXMuaW5qZWN0b3IpO1xuXG4gICAgT2JqZWN0LmFzc2lnbihuZXdDb21wb25lbnRSZWYuaW5zdGFuY2UsIGRhdGEpO1xuXG4gICAgaWYgKHNob3VsZEF0dGFjaFZpZXcpIHtcbiAgICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcobmV3Q29tcG9uZW50UmVmLmhvc3RWaWV3KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3Q29tcG9uZW50UmVmO1xuICB9XG59XG4iXX0=