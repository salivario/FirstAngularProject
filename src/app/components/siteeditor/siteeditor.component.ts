import { Component,Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-siteeditor',
  templateUrl: './siteeditor.component.html',
  styleUrls: ['./siteeditor.component.scss']
})
export class SiteeditorComponent implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<SiteeditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) {}
    myForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(''),
    wheels: new FormControl(''),
    type: new FormControl(''),
  })
  onNoClick(): void {
    this.dialogRef.close(null);
  }
  
  onSubmit(){
    this.data = {
      title: this.myForm.value.title,
      price: this.myForm.value.price,
      image: '/assets/images/gt-aggressor-sport-black-velokratia-1280x960.jpg',
      config: {
        wheels: this.myForm.value.wheels,
        type: this.myForm.value.type,
      },
    };
    this.dialogRef.close(this.data)
  }
  ngOnInit(): void {
    
  }
}
