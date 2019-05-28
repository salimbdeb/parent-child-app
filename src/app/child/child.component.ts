import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  isActive : boolean;
  @Output() childStatus = new EventEmitter();
  constructor() { }

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  });

  ngOnInit() {
    // if(this.profileForm.valid)
    //     this.isActive = true;
    // else this.isActive = false;
    this.isActive = false;
    console.log("child form : "+ this.isActive )
  }

  sendEventToParent(){
    if(this.profileForm.valid)
        this.isActive = true;
    else this.isActive = false;
    console.log("child form : "+ this.isActive )
    this.childStatus.emit();
  }

}
