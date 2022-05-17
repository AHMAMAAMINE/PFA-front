import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {InterventionService} from '../../../service/intervention.service';
import {Intervention} from '../../../model/intervention.model';


// import {ConfirmationService} from 'primeng/api';

@Component({
    selector: 'app-commande-list',
    templateUrl: './commande-list.component.html',
    styleUrls: ['./commande-list.component.scss'],
    providers: [MessageService, ConfirmationService]
})
export class CommandeListComponent implements OnInit {
    cols: any[];

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
                private service: InterventionService) {
        this.editDialog = false;
    }

    ngOnInit(): void {
        this.initCol();
        this.service.findAll().subscribe(data => this.items = data);
    }

    public delete(selected: Intervention) {
        this.selected = selected;
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + selected.code + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteByCode().subscribe(data => {
                    this.items = this.items.filter(val => val.id !== this.selected.id);
                    this.selected = new Intervention();
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Commande Deleted',
                        life: 3000
                    });
                });
            }
        });
    }
    public deleteMultiple() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected commandes?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteMultipleByReference().subscribe(data => {
                    this.service.deleteMultipleIndexById();
                    this.selectes = null;
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Commandes Deleted',
                        life: 3000
                    });
                });
            }
        });
    }
    public openCreate() {
        this.selected = new Intervention();
        this.submitted = false;
        this.createDialog = true;
        this.service.collaborateurs = null;
        this.service.materialInterventions = null;
        this.service.materialIntervention=null;
    }

    public edit(commande: Intervention) {
        this.service.findByCode(commande.code).subscribe(data => this.selected = data);
        this.service.findByInterventionCode(commande.code).subscribe(data => this.service.collaborateurs = data);
        this.service.findByCodeInterv(commande.code).subscribe(data => this.service.materialInterventions = data);
        this.service.findByCodeIntervention(commande.code).subscribe(data => this.service.conseilInterventions = data);
        this.selected.etatIntervention.code = commande.etatIntervention.code;
        this.editDialog = true;
    }
    public view(commande: Intervention) {
        this.service.findByCode(commande.code).subscribe(data => this.selected = data);
        this.service.findByInterventionCode(commande.code).subscribe(data => this.service.collaborateurs = data);
        this.service.findByCodeInterv(commande.code).subscribe(data => this.service.materialInterventions = data);
        this.service.findByCodeIntervention(commande.code).subscribe(data => this.service.conseilInterventions = data);
        this.viewDialog = true;
    }

    private initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'dateDeProbleme', header: 'Date De Probleme'},
            {field: 'dateDebut', header: 'date Debut'},
            {field: 'dateFin', header: 'date Fin'},
        ];
    }

    get selected(): Intervention {
        return this.service.selected;
    }

    set selected(value: Intervention) {
        this.service.selected = value;
    }
    get interv(): Intervention {
        return this.service.interv;
    }

    set interv(value: Intervention) {
        this.service.interv = value;
    }

    get items(): Array<Intervention> {
        return this.service.items;
    }

    set items(value: Array<Intervention>) {
        this.service.items = value;
    }

    get submitted(): boolean {
        return this.service.submitted;
    }

    set submitted(value: boolean) {
        this.service.submitted = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get selectes(): Array<Intervention> {
        return this.service.selectes;
    }

    set selectes(value: Array<Intervention>) {
        this.service.selectes = value;
    }

    private findByCode(code: string) {
        this.service.findByCode(code).subscribe(
            data => {
                this.selected = data;
        });

    }
}
