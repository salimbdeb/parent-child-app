import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  isActive : boolean;
  @Output() childStatus = new EventEmitter();
  constructor() { }

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.isActive = false;
    console.log("child 2 form : "+ this.isActive )
  }

  sendEventToParent(){
    if(this.profileForm.valid)
        this.isActive = true;
    else this.isActive = false;
    console.log("child 2 form : "+ this.isActive )
    this.childStatus.emit();
  }


}
