import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductsService } from '../../services/products.service'
import { IProducts } from 'src/app/interfaces/products';
import { AddToBusketService } from 'src/app/services/add-to-busket.service';


@Component({
  selector: 'app-checkout-dialog',
  templateUrl: './checkout-dialog.component.html',
  styleUrls: ['./checkout-dialog.component.scss']
})
export class CheckoutDialogComponent implements OnInit {
  form!: FormGroup;
  userGoods!: IProducts[];
  constructor(private fb: FormBuilder,public AddToBusketService: AddToBusketService, public dialogRef: MatDialogRef<CheckoutDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private ProductsService: ProductsService) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      delivery: ['delivery', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      const formData = {
        name: this.form.value.name,
        surname: this.form.value.surname,
        phone: this.form.value.phone,
        email: this.form.value.email,
        address: this.form.value.address,
        delivery: this.form.value.delivery,
        userGoods: this.AddToBusketService.getItems()
      };
      
      this.ProductsService.postClient(formData).subscribe(response => {
        console.log(response);
        this.dialogRef.close();
      });
    }
  }
}
