import { CollaborateurService } from "./../../../controller/service/collaborateur.service";
import { MessageService } from "primeng/api";
import { Collaborateur } from "./../../../controller/model/collaborateur.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-collaborateur-create",
  templateUrl: "./collaborateur-create.component.html",
  styleUrls: ["./collaborateur-create.component.scss"],
})
export class CollaborateurCreateComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private collaborateurService: CollaborateurService
  ) {}

  ngOnInit(): void {
    this.collaborateurService
      .findAll()
      .subscribe((data) => (this.collaborateurs = data));
  }

  public hideCreateDialog() {
    this.createDialog = false;
    this.submitted = false;
  }

  public save() {
    this.submitted = true;
    if (this.collaborateur.codeCollaborateur.trim()) {
      this.collaborateurService.save().subscribe((data) => {
        this.messageService.add({
          severity: "success",
          summary: "Successful",
          detail: "Collaborateur Created",
          life: 3000,
        });
      });
      this.collaborateurs.push(this.collaborateur);
      this.createDialog = false;
      this.collaborateur = new Collaborateur();
    }
  }
  get createDialog(): boolean {
    return this.collaborateurService.createDialog;
  }

  set createDialog(value: boolean) {
    this.collaborateurService.createDialog = value;
  }

  get submitted(): boolean {
    return this.collaborateurService.submitted;
  }

  set submitted(value: boolean) {
    this.collaborateurService.submitted = value;
  }

  get selectes(): Array<Collaborateur> {
    return this.collaborateurService.selectes;
  }

  set selectes(value: Array<Collaborateur>) {
    this.collaborateurService.selectes = value;
  }

  get collaborateurs(): Array<Collaborateur> {
    return this.collaborateurService.collaborateurs;
  }

  set collaborateurs(value: Array<Collaborateur>) {
    this.collaborateurService.collaborateurs = value;
  }
  get collaborateur(): Collaborateur {
    return this.collaborateurService.collaborateur;
  }

  set collaborateur(value: Collaborateur) {
    this.collaborateurService.collaborateur = value;
  }
}
