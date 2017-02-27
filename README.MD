# ngx-messages

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
    <div [val-messages]="myForm.get('email')">
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
    NgxMessagesModule.configure({ showErrorsOnlyIfInputDirty: false }) // <-- include it in your app module with custom configuration
  ], 
  declarations: [MyComponent],
  bootstrap: [MyComponent]
})
export class MyAppModule {}
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
