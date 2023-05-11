import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AutoService } from 'src/app/services/auto.service';
import { IsadminService } from 'src/app/services/isadmin.service';


@Component({
  selector: 'app-autorization',
  templateUrl: './autorization.component.html',
  styleUrls: ['./autorization.component.scss']
})
export class AutorizationComponent implements OnInit,OnDestroy{
  form!: FormGroup;
  islog$!: Observable<boolean>;
  constructor(private formBuilder: FormBuilder, private autoService: AutoService, private route: Router, private IsadminService: IsadminService){

  }
  ngOnInit(){
    this.form = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16), Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$")]],
  });
  }
  SubmitForm(){
    this.autoService.login(this.form.value);
    this.IsadminService.getLog().subscribe(isLoggedIn => {
      if(isLoggedIn){
        this.route.navigate(['/']);
      }
    });
  }
  ngOnDestroy(){
    
  }
}
