import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {EntriesService} from "./entries.service";
import {Entries} from "./entries.model";
import {MOODIES} from "../chart/mock-chart";

@Component({
    selector: 'my-app',
    templateUrl: 'app/entries/entries.component.html',
    providers: [EntriesService]
})
export class EntriesComponent implements OnInit {
    public entriesList: Array<Entries> = [];

    constructor(
        private _service: EntriesService,
        private _router: Router
    ){}

    ngOnInit() {
        // this.entriesList = this._service.getStorage();
        this.entriesList = MOODIES;
    }

    onclickDelete(item: Entries) {
        var x: number, lenX: number;
        for (x = 0, lenX = this.entriesList.length; x < lenX; x++) {
            if (this.entriesList[x].id === item.id) {
                this.entriesList.splice(x, 1);
                break;
            }
        }

        this._service.setStorage(this.entriesList);
    }

    onclickNew() {
        this._router.navigate(['Mood']);
    }

    onclickGoToCharts() {
        this._router.navigate(['Chart']);
    }

}