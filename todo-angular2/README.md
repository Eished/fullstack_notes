# todo-angular2
A TODO list app created in Angular 2

##  STEP 1 : Set up the Development Environment

Install Node.js® and npm if they are not already on your machine

Visit : https://nodejs.org/en/download/


##  STEP 2 : Install Angular CLI

  `npm install -g @angular/cli`

##  STEP 3 : Create a new Project

   `ng new my-application`

##  STEP 4 : Serve the application

  `cd my-app
  ng serve --open [ or ng serve -o ]`

##  To Generate Service Form CLI

  `ng g service servicename`

#   BOOTSTRAP INTEGRATION

## 1) Open below link

  Visit : https://ng-bootstrap.github.io/#/home

## 2) Click on Installation button

## 3) Installation

   `npm install --save @ng-bootstrap/ng-bootstrap`

## 4) Once installed you need to import our main module

   ```typescript
   import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
   ```

## 5) Need to add imports in AppModule

  Example :

  ```typescript
  @NgModule({
    declarations: [AppComponent, ...],
    imports: [NgbModule.forRoot(), ...],  // forRoot is used to add application/singleton services.
    bootstrap: [AppComponent]
  })

  export class AppModule {
  }
  ```

## 6) Install bootstrap (Using only for CSS reference)

  `npm install bootstrap@4.0.0-alpha.6`

## 7) Add css link to .angular-cli.json file

  Example :

  ```css
  "styles": [
    "styles.css",
    "../node_modules/bootstrap/dist/css/bootstrap.css"      
  ]
  ```


#           TODO COMPONENT TEMPLATE

```html
<div class="container">
 <div class="col-xs-2">
     <ul class="list-group">
        <li class="list-group-item">
        </li>
      </ul>
  </div>
</div>
```

#        TASK COMPONENT TEMPLATE

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
<div class="container">
  <div class="row">
     <div class="col-sm-1">
         <!-- Checkbox -->
     </div>
     <div class="col-sm-9">
        <!-- Form -->
     </div>
     <div class="col-sm-1">
        <!-- delete button -->
        <span class="fa fa-trash-o" style="cursor:pointer;"></span>
     </div>
  </div>
</div>
```

#   FORM Validation css

```html
<div class="form-group" [ngClass]="form.get('updatedTask').hasError('required') && isSubmitted ? 'has-danger' : ''">
  <input type="text" class="form-control input-sm form-control-danger" id="task" placeholder="Add a task" formControlName="updatedTask" focus/>
  <div class="form-control-feedback" \*ngIf="form.get('updatedTask').hasError('required') && isSubmitted">
    Task name is required
  </div>
</div>
```

#  STRIKETHROUGH CSS

```html
<span [ngClass]="task.isDone ? 'task-done' : 'task'" (click)="enableEditing()" \*ngIf="!editable" style="cursor:pointer;" >
</span>
```

#  How to make DRAG & DROP TODO

  ## 1) Install DndModule

    `npm install ng2-dnd --save`

  ## 2) Update App.module.ts

  ```typescript
  import {BrowserModule} from "@angular/platform-browser";
  import {NgModule} from '@angular/core';
  import {DndModule} from 'ng2-dnd';

  @NgModule({
    imports: [
        BrowserModule,
        DndModule.forRoot()
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule {
  }
  ```

#  Angular 2 Bootstrap + Bootstrap Styling

Using bootstrap components in Angular 2 Visit: https://valor-software.com/ng2-bootstrap/#/
