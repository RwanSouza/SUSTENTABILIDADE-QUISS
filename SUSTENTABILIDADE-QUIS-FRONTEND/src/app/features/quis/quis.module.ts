import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { QuisComponent } from './components/quis.component';
import { QuisService } from './services/quis.service';
import { QuisRoutingModule } from './quis.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
	declarations: [
		QuisComponent
	],
	imports: [
		CommonModule,
		QuisRoutingModule,
		ReactiveFormsModule,
		MatTabsModule,
		MatCheckboxModule,
		MatRadioModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule
	],
	providers: [
		QuisService
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QuisModule { }
