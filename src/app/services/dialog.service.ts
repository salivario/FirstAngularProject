import { Injectable } from '@angular/core';
import { CheckoutDialogComponent } from '../components/checkout-dialog/checkout-dialog.component';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openCheckoutDialog(): Observable<any> {
    const dialogRef = this.dialog.open(CheckoutDialogComponent, {
      width: '400px'
    });
    return dialogRef.afterClosed();
  }
}
