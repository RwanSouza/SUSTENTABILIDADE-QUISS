import { QuisService } from './../services/quis.service';
import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-quis',
  templateUrl: './quis.component.html',
  styleUrls: ['./quis.component.scss']
})
export class QuisComponent implements OnInit {

	favoriteSeason!: string;
	seasonsOne: string[] = ['Desconhecidas', 'Alarmantes', 'Exageradas'];


	ngOnInit() {

	}

	constructor(
		private _service: QuisService
	) {

	}

	submit(option: number) {
		this._service.sendOptionSelected(option).subscribe(res => {
			
		}, () => {

		})
	}
}