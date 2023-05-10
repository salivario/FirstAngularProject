import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutoService } from 'src/app/services/auto.service';

@Component({
  selector: 'app-autorization',
  templateUrl: './autorization.component.html',
  styleUrls: ['./autorization.component.scss']
})
export class AutorizationComponent implements OnInit{
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder, private autoService: AutoService){

  }
  ngOnInit(){
    this.form = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$")]],
  });
  }
  SubmitForm(){
    this.autoService.login(this.form.value)
  }
}
