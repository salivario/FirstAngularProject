import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-checkout-dialog',
  templateUrl: './checkout-dialog.component.html',
  styleUrls: ['./checkout-dialog.component.scss']
})
export class CheckoutDialogComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<CheckoutDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      delivery: ['delivery', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      const result = {
        name: this.form.value.name,
        address: this.form.value.address,
        delivery: this.form.value.delivery
      };
      this.dialogRef.close(result);
    }
  }
}