import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  // form instance
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),

    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
    })
  });

  onSubmit() {
    console.log(this.profileForm.value);
  }

}
