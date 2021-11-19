# Angular Dynamic Component Loader

This library exposes a dynamic loader for angular components.

## Table of contents

- [Prerequisites](#Prerequisites)
- [Installation](#Installation)
- [Download](#Download)
- [Usage](#usage)
- [Development](#Development)
- [Changelog](https://github.com/rakutentech/angular-dynamic-component-loader/releases)
- [Contributing](https://github.com/rakutentech/angular-dynamic-component-loader/blob/main/CONTRIBUTING.md)
- [License](#license)

## Prerequisites

- [Angular](https://angular.io/) (> 9.0.0)

## Installation

- Install Angular Dynamic Component Loader:

```bash
npm install @rakutentech/angular-dynamic-component-loader
```

## Download
- NPM
    - `npm i @rakutentech/angular-dynamic-component-loader`
- GIT
    - `git clone https://github.com/rakutentech/angular-dynamic-component-loader.git`

## Usage

To use Angular Dynamic Component Loader, you will need to import the `DynamicComponentLoaderService`:

```typescript
import { DynamicComponentLoaderService } from '@rakutentech/angular-dynamic-component-loader';
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

## Development
Clone the repository and install all the necessary dependencies.

```bash
git clone https://github.com/rakutentech/angular-dynamic-component-loader.git
cd angular-dynamic-component-loader
npm install
```

## License

MIT
