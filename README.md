# ngx-messages
I solely missed `ng-messages` directive from AngularJs, so I created this one to use in Angular 2+.
In contrast to the one from AngularJs, this one requires you to pass control to the directive, instead of its errors.
This allowed me to hook in to the status of control, like its `dirty` state, and display validation messages according to that status.
A nice side effect of that decision is less boilerplate code.

## Installation

To install this library, run:

```bash
$ npm install ngx-messages --save
```

## Consuming ngx-messages
```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMessagesModule } from 'ngx-messages'; // <-- import the module
import { MyComponent } from './my.component';

@NgModule({
  imports: [
    BrowserModule,
    NgxMessagesModule // <-- include it in your app module
  ], 
  declarations: [MyComponent],
  bootstrap: [MyComponent]
})
export class MyAppModule {}
```

```typescript
// my.component.ts
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'my-component',
  template: `
  <form novalidate [formGroup]="myForm" (ngSubmit)="checkEmail()">
    <input formControlName="email" placeholder="Email" type="email">
    <div val-messages="email">
      <span val-message="required">Please provide email address</span>
      <span val-message="server" useErrorValue="true"></span>
    </div>
    <button type="submit">Check email</button>
  </form>
  `
})
export class MyComponent implements OnInit {
  myForm: FormGroup;

  constructor(private _fb: FormBuilder, private backendService: any) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      email: ['', Validators.required]
    });
  }

  checkEmail() {
    this.backendService.checkEmail().subscribe((result) => {
      if(result.error) {
        // server returns actual message for the error.
        // Setting attribute `useErrorValue` allows to use it directly
        addError(this.myForm.get('email'), { 'server': result.error });
      }
    });
  }
}

function addError(control: AbstractControl, error: { [key: string]: any }) {
  const updatedErrors = Object.assign({}, control.errors, error);
  control.setErrors(updatedErrors);
}
```

By default, ngx-messages only show errors when input is dirty. Howeverm you can change that by configuring module during its import/declaration:
```typescript
@NgModule({
  imports: [
    BrowserModule,
    NgxMessagesModule.configure({ 
      showErrorsOnlyIfInputDirty: false,
      showErrorsWhenFormSubmitted: true
    }) 
  ], 
  declarations: [MyComponent],
  bootstrap: [MyComponent]
})
export class MyAppModule {}
```

## Styling messages
Just include something similar to the following in your global css file:
```css
[val-message] {
  color: red;
}
```

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Dmitry Efimenko](mailto:dmitrief@gmail.com)
