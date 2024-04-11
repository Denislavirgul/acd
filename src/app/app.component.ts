import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClienteComponent } from "./componentes/cliente/cliente.component";


import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalClienteComponent } from './componentes/cliente/modal-cliente/modal-cliente.component';
import { ModalProveedorComponent } from './componentes/proveedor/modal-proveedor/modal-proveedor.component';
import { ProveedorComponent } from "./componentes/proveedor/proveedor.component";




@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ClienteComponent, ModalClienteComponent, ModalProveedorComponent, ProveedorComponent]
})
export class AppComponent {
  // title = 'acd';

  // constructor(private modalService: NgbModal) {}


  // openModal() {
  //   const modalOptions: NgbModalOptions = {
  //    // backdrop: 'static', // Esto evita que el modal se cierre haciendo clic fuera de él
  //     keyboard: false, // Esto evita que el modal se cierre cuando se presiona la tecla Esc
  //     centered: true // Esto centra el modal verticalmente en la pantalla
  //   };

  //   // Abre el modal utilizando el componente NuevoClienteComponent
  //   this.modalService.open(ModalClienteComponent, modalOptions);
  // }

}
