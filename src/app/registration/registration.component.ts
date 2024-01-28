import { Component } from '@angular/core';
import { AddressFormComponent } from '../address-form/address-form.component';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [AddressFormComponent],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

}
