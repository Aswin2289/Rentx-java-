import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/shared/services/toast.service';
import { AddresListService } from '../../services/addres-service';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {


formSubmitted = false;
AddressDetailsForm!: FormGroup;

  buttonDisabler=false;
  phoneNumberRegexp = new RegExp(/^[0-9]{10,15}$/);
  pincodeRegex = new RegExp(/^[0-9]{6,8}$/);
  nameRegex = new RegExp(/^[a-zA-Z0-9_\s]{3,20}$/);
  roadRegex = new RegExp(
    /^(?!\s)[a-zA-Z0-9_\s!@#$%^&*()-+=~`{}[\]|:;"'<>,.?/]{3,20}(?<!\s)$/
  );
  
  constructor( private eventEmitter: EventEmitterService,

    private toastService: ToastService,
    private _ngZone: NgZone,
    private route: Router,
    private ngxService: NgxUiLoaderService, private addressService:AddresListService) { }

  ngOnInit(): void {
    this.formSubmitted = false;
    this.AddressDetailsForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern(this.roadRegex),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(15),
        Validators.pattern(this.phoneNumberRegexp),
      ]),
      city: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern(this.roadRegex),
      ]),
      state: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern(this.roadRegex),
      ]),
      pinCode: new FormControl('', [
        Validators.required,
        Validators.maxLength(8),
        Validators.pattern(this.pincodeRegex),
      ]),
      houseName: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern(this.roadRegex),
      ]),
   
      type: new FormControl('', [
        Validators.required,
        
      ]),
    });

  }

onAddressDetailsSubmit() {
console.log(this.AddressDetailsForm.value)
    this.formSubmitted = true;
    if (this.AddressDetailsForm.valid) {
      this.buttonDisabler=true;


      this.addressService.addAddress(this.AddressDetailsForm.value).subscribe({
        next: (data: any) => {
          this.toastService.showSucessToast('Address added sucessfully', 'close');
          this._ngZone.run(() => {
            this.eventEmitter.onSaveEvent();
   
            this.route.navigate(['/profile/listAddress']);
          });
        },
        error: (error:any) => {
          this.toastService.showErrorToast(error.error.errorMessage, 'close');
          this._ngZone.run(() => {
            this.eventEmitter.onSaveEvent();
            this.route.navigate(['/profile/listAddress']);
          });
        },
      });
    }
  }
}

  


