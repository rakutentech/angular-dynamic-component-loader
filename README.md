# Angular Dynamic Component Loader

This library exposes a dynamic loader for angular components.

## Table of contents

- [Prerequisites](#Prerequisites)
- [Installation](#Installation)
- [Usage](#usage)
- [License](#license)

## Prerequisites

- [Angular](https://angular.io/) (> 9.0.0)

## Installation

- Install Angular Dynamic Component Loader:

```bash
npm install @rak/angular-dynamic-component-loader
```

## Usage

To use Angular Dynamic Component Loader, you will need to import the `DynamicComponentLoaderService`:

```typescript
import { DynamicComponentLoaderService } from '@rak/angular-dynamic-component-loader';
```

You can now create a dynamic component. This is done by calling the `loadComponent()` method of the service, which first needs to be injected:

```typescript
// ...

constructor(
  private readonly dynamicComponentLoaderService: DynamicComponentLoaderService,
  // ...
) {}

// ...
const component = this.dynamicComponentLoaderService.loadComponent(componentType, {}, true, instanceInjector);
```

It takes four arguments:

- The class name of the dynamically loaded component.
- The data of the component instance.
- Should be set to `true` if the view should be assigned to a [viewContainer](https://angular.io/api/core/ApplicationRef#attachView)
- The providers injector of the component instance.

## License

MIT
