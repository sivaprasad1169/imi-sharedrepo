import {Component, OnInit} from '@angular/core';
import {RecordsService} from "./common/records.service";
import {Store} from "@ngrx/store";
import {mapRecordsFunction, UpdateRecords} from "./common/store-helper";
import {RecordsState} from "./common/records-state";

@Component({
    selector: 'app-lookup',
    templateUrl: './lookup.component.html',
    styleUrls: ['./lookup.component.css']
})
export class LookupComponent implements OnInit {
    private records: Array<any>;

    constructor(private recordsService: RecordsService,
                private store: Store<RecordsState>) {
    }

    public ngOnInit(): void {
        this.fetchRecords();
    }

    public fetchRecords(): void {
        // start loader
        this.store.select(mapRecordsFunction).subscribe(records => {

            if (records) {
                this.records = records;
                // stop loader
            } else {
                this.recordsService.getRecords().subscribe(records => {
                    this.store.dispatch(new UpdateRecords(records));
                }, error => {
                    // handler error
                }, () => {
                    // stop loader
                });

            }

        });


    }

}
