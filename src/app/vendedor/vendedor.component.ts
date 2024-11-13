import { Component } from '@angular/core';

@Component({
  selector: 'app-vendedor',
  standalone: true,
  imports: [],
  templateUrl: './vendedor.component.html',
  styleUrl: './vendedor.component.css'
})
export class VendedorComponent {
vendedor=["idVendedor", "usuarioNombre", "password", "nombre", "apellido", "edad", "direccion", "sueldo", "telefono", "email", "facebook"]
}
