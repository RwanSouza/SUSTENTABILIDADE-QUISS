import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './presentation/services/login.service';
import { LoginRoutingModule } from './login.routing';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './presentation/components/login.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
