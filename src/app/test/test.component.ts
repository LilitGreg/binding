import { Component, OnInit } from '@angular/core';

//With interpolation we can not perform assignment or access global javascript  variables 
//Different HTML attribute ($0.getAttribute('value') ) and DOM property ($0.value)
//Attribute and properties are not the same.
/*
    Attribute -HTML
    Properties - DOM (Document Object Model)
    Attributes initialize DOM properties and then they are done.
    Attribute values cannot change once they are initialized.
    Property values however can change.


    We using [class]  for  adding single class and [ngClass]
     or multiple classes

     // [] brackets for property(data) binding  which is date flow
     from the class to the template
     and we have () for event binding so the data flow  from the template to the class
     [()] -banana in box
     
 */


@Component({
  selector: 'app-test',
  template: `
    <h2> 
    Welcome {{name}}
   </h2>
   
    <h2> {{2+2}} </h2>
   <h2> {{"Welecome " + name}} </h2>
   <h2> {{name.length}} </h2>
   <h2> {{name.toUpperCase()}} </h2>
   <h2> {{greetUser()}} </h2>
   <h2> {{ siteUrl }} </h2>
   <input [id] = "myId" type="text" value = "Vishwas">
   
   <input [disabled]="isDisabled" id = "{{myId}}" type="text" value = "Vishwas">
   <input bind-disabled="isDisabled" id = "{{myId}}" type="text" value = "Vishwas">
   
   <h2 class="text-success"> Codevolution </h2>
   <h2 [class] ="successClass" > Codevolution </h2>

   <h2 class="text-special" [class] = "successClass"> Codevolution  </h2>
   
   <h2 [class.text-danger] = "hasError"> Codevolution </h2>
   <h2 [ngClass] ="messageClasses">Codevolution </h2>

   <h2 [style.color] = "hasError ? 'red': 'green'">  Style Binding </h2>
   <h2 [style.color] = "highlightColor">  Style Binding 2 </h2>
   <h2 [ngStyle] ="titleStyles"> Style Binding 3 </h2>

   <button (click) = "onClick($event)"> Greet </button>
   <button (click) = "greeting = 'Welcome Vishwas'"> Greet </button>

   {{greeting}}

   <input #myInput type = "text">
   <button (click) = "logMessage(myInput.value)"> Log </button>
   <br/> <br/>
   <input  [(ngModel)] = "name1"  type ="text">
   {{name1}}

  
   `,
  styles: [`
    .text-success {
      color:green;
    }
    .text-danger {
      color:red;
    }
    .text-special {
      font-style:italic;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = "Vishwas";
  public myId = "testId";
  public isDisabled = false;
  public siteUrl = window.location.href;

   public successClass ="text-success";
   public  hasError = true;
   public isSpecial = true;
   public messageClasses = {
     "text-success": !this.hasError,
     "text-danger": this.hasError,
     "text-special" : this.isSpecial
   };
   public highlightColor = "orange";
   public titleStyles = {
     color: "blue",
     fontStyle : "italic"
   }
   public greeting = "";

   public name1 ="";
  
   constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

  onClick(event){
    console.log(event);
    this.greeting =event.type;
  }

  logMessage (value){
    console.log(value);
  }

}
