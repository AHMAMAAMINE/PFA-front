import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';

import {TabViewModule} from 'primeng/tabview';
import {DatePipe} from '@angular/common';
import {Intervention} from '../../../model/intervention.model';
import {InterventionService} from '../../../service/intervention.service';

@Component({
    selector: 'app-commande-create',
    templateUrl: './commande-create.component.html',
    styleUrls: ['./commande-create.component.scss'],
    providers:[DatePipe]
})
export class CommandeCreateComponent implements OnInit {
    myDate = new Date();
    date : string;
    constructor(private messageService: MessageService, private service: InterventionService,private datePipe: DatePipe) {
        this.date = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    }

    ngOnInit(): void {
    }

    public hideCreateDialog() {
        this.createDialog = false;
        this.submitted = false;
    }

    public save() {
        this.submitted = true;
        this.items.push(this.selected);
        if (this.selected.code.trim()) {
            this.service.save().subscribe(data => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Commande Created',
                    life: 3000
                });
            });
            this.createDialog = false;
            this.selected = new Intervention();
        }
    }
    get selected(): Intervention {
        return this.service.selected;
    }

    set selected(value: Intervention) {
        this.service.selected = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get submitted(): boolean {
        return this.service.submitted;
    }

    set submitted(value: boolean) {
        this.service.submitted = value;
    }

    get items(): Array<Intervention> {
        return this.service.items;
    }

    set items(value: Array<Intervention>) {
        this.service.items = value;
    }

}
