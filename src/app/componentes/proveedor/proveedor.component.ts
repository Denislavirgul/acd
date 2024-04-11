import { Component } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalProveedorComponent } from './modal-proveedor/modal-proveedor.component';

@Component({
  selector: 'app-proveedor',
  standalone: true,
  imports: [],
  templateUrl: './proveedor.component.html',
  styleUrl: './proveedor.component.css'
})
export class ProveedorComponent {

  constructor(private modalService: NgbModal){}

    openModal(){
      const modalOptions: NgbModalOptions = {
       // backdrop: 'static', // Esto evita que el modal se cierre haciendo clic fuera de él
       keyboard: false, // Esto evita que el modal se cierre cuando se presiona la tecla Esc
       centered: true // Esto centra el modal verticalmente en la pantalla
      };

    //Abre el modal utilizando el componente NuevoProveedorComponent
    this.modalService.open(ModalProveedorComponent, modalOptions);
  }

}
