import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  food = '';

  submitFood() {
    console.log(this.food);
  }

  color = new FormControl('');

  ngOnInit() {
    this.color.valueChanges.subscribe(value => {
      console.log('Color changed: ' + value);
    });
  }

  submitColor() {
    console.log('Color submitted: ' + this.color.value);
  }

  STATES: string[] = ['CA', 'FL', 'MA', 'OK', 'AZ', 'TX', 'NY'];

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    state: new FormControl('', Validators.required),
  });

  submitProfile() {
    console.log(this.profileForm.value);
  }
}
