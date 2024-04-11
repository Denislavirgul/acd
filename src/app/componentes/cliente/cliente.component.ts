import { Component } from '@angular/core';


import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalClienteComponent } from './modal-cliente/modal-cliente.component';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {

  constructor(private modalService: NgbModal) {}


  openModal() {
    const modalOptions: NgbModalOptions = {
     // backdrop: 'static', // Esto evita que el modal se cierre haciendo clic fuera de él
      keyboard: false, // Esto evita que el modal se cierre cuando se presiona la tecla Esc
      centered: true // Esto centra el modal verticalmente en la pantalla
    };

    // Abre el modal utilizando el componente NuevoClienteComponent
    this.modalService.open(ModalClienteComponent, modalOptions); // al boton (click)="openModal()"
  }

}
