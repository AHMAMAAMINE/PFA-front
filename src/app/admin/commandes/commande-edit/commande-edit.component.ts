import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {InterventionService} from '../../../service/intervention.service';
import {Intervention} from '../../../model/intervention.model';


@Component({
    selector: 'app-commande-edit',
    templateUrl: './commande-edit.component.html',
    styleUrls: ['./commande-edit.component.scss']
})
export class InterventionEditComponent implements OnInit {

    constructor(private messageService: MessageService, private service: InterventionService) {

    }

    ngOnInit(): void {
    }

    public edit() {
        this.submitted = true;
        if (this.selected.code.trim()) {
            if (this.selected.id) {
                console.log(this.selected);
                this.items[this.service.findIndexById(this.selected.id)] = this.selected;
                console.log(this.selected)
                this.service.edit().subscribe(data => {
                    console.log(data);
                    this.selected = data;
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Intervention Updated',
                        life: 3000
                    });
                });
            }
            this.editDialog = false;
            this.selected = new Intervention();
        }
    }

  public hideEditDialog() {
    this.editDialog = false;
  }
    get selected(): Intervention {
        return this.service.selected;
    }

    set selected(value: Intervention) {
        this.service.selected = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
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
    value(){
      return  this.selected.dateFin.toLocaleString();
    }

}
