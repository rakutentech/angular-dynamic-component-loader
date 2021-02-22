import {ApplicationRef, ComponentFactoryResolver, ComponentRef, Injectable, Injector, Type} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DynamicComponentLoaderService {
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private appRef: ApplicationRef, private injector: Injector) {
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
  loadComponent<T>(component: Type<T>, data: {} = {}, shouldAttachView: boolean = true, injector?: Injector): ComponentRef<T> {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const newComponentRef = componentFactory.create(injector || this.injector);

    Object.assign(newComponentRef.instance, data);

    if (shouldAttachView) {
      this.appRef.attachView(newComponentRef.hostView);
    }

    return newComponentRef;
  }
}
