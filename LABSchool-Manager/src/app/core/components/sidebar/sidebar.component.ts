import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importe o Router

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  // Injete o Router no construtor
  constructor(private router: Router) { }

  // Método para navegar programaticamente
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}

