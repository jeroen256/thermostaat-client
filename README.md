# ThermostaatJeroenClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
- Release: `ng build --output-path ../thermostaat-jeroen/wwwroot -prod`
- Staging: `ng build --output-path ../thermostaat-jeroen/wwwroot -e staging`
- Dubug:   `ng build --output-path ../thermostaat-jeroen/wwwroot -dev`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Jeroen

## Angular.io
- Layout Directives? https://stackoverflow.com/questions/37244788/are-layout-directives-supported-by-angular-2-material-design-components
- Data tables:
  - Material Data Table preview whats coming: https://github.com/Teradata/covalent/issues/494 (looks good)
  - Other candidate: http://swimlane.github.io/ngx-datatable/#horz-vert-scrolling (seems bit buggy)
  - Ag-grid still seems best: https://www.ag-grid.com/angular-more-details

## Chrome
- How to debug? Select an element in Chrome, then type in console: ng.probe($0).componentInstance

## Visual Studio Code
- CTRL+P Open palette to select file. Type > to select command. Type @ to select method.
- CTRL+Shift+O - Class view  (or type @ in command palette)- https://stackoverflow.com/questions/36154283/method-list-in-visual-studio-code
- How to debug directly from VSCode? https://stackoverflow.com/questions/42495655/how-to-debug-angular-with-vscode
- Extension for ts intellisense in html: https://marketplace.visualstudio.com/items?itemName=Angular.ng-template
