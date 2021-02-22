import { TestBed } from '@angular/core/testing';
import { DynamicComponentLoaderService } from './angular-dynamic-component-loader.service';
import { ApplicationRef, ComponentFactoryResolver, ViewRef } from '@angular/core';

class FakeComponent {
  input1: string;
  input2: string;
}

describe('DynamicComponentLoaderService', () => {
  let appRefMock: ApplicationRef;
  let componentFactoryResolverMock: ComponentFactoryResolver;

  let service: DynamicComponentLoaderService;
  let fakeComponentRef;
  let fakeComponentFactory;

  beforeEach(() => {
    fakeComponentRef = { instance: {}, hostView: {} };

    fakeComponentFactory = {
      create: jasmine.createSpy('create'),
    };
    fakeComponentFactory.create.and.returnValue(fakeComponentRef);

    const componentFactoryResolverValue = { resolveComponentFactory: jasmine.createSpy('resolveComponentFactory') };
    componentFactoryResolverValue.resolveComponentFactory.and.returnValue(fakeComponentFactory);

    TestBed.configureTestingModule({
      providers: [
        { provide: ComponentFactoryResolver, useValue: componentFactoryResolverValue },
        { provide: ApplicationRef, useValue: { attachView: jasmine.createSpy('attachView') } },
        DynamicComponentLoaderService,
      ],
    });
    service = TestBed.inject(DynamicComponentLoaderService);
    componentFactoryResolverMock = TestBed.inject(ComponentFactoryResolver);
    appRefMock = TestBed.inject(ApplicationRef);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('.loadComponent', () => {
    it('should load & return given component dynamically', () => {
      expect(componentFactoryResolverMock.resolveComponentFactory).not.toHaveBeenCalled();
      expect(fakeComponentFactory.create).not.toHaveBeenCalled();
      expect(appRefMock.attachView).not.toHaveBeenCalled();

      const fakeComponent = service.loadComponent(FakeComponent, { input1: 'value1', input2: 'value2' });
      expect(componentFactoryResolverMock.resolveComponentFactory).toHaveBeenCalledWith(FakeComponent);
      expect(fakeComponentFactory.create).toHaveBeenCalled();
      expect(appRefMock.attachView).toHaveBeenCalledWith({} as ViewRef);
      expect(fakeComponent).toBe(fakeComponentRef);
      expect(fakeComponent.instance.input1).toEqual('value1');
      expect(fakeComponent.instance.input2).toEqual('value2');
    });
  });
});
