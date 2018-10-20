import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AddressService } from '../services/address.service';

@Component({
  selector: 'address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {

  @Output() onAddressSelect = new EventEmitter<number>();
  addresses: any = [];

  constructor(private addressService: AddressService) {
    this.getAddress();
  }

  saveAddress(form) {
    this.addressService.saveAddress(form).subscribe(data => {
      this.getAddress();
    }, error => {
      console.log(error);
    });
  }

  getAddress() {
    this.addressService.getAddress().subscribe(data => {
      this.addresses = data;
      console.log(this.addresses)
    })
  }

  addressSelected(address: number){
    this.onAddressSelect.emit(address);
  }


}
