import { Component } from '@angular/core';
import { TecnologyHeaderComponent } from "./tecnology-header/tecnology-header.component";

@Component({
  selector: 'app-header',
  imports: [TecnologyHeaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
