import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';  // Importe o AuthService

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  // Injete tanto o Router quanto o AuthService no construtor
  constructor(private router: Router, private authService: AuthService) { }

  // Método para navegar programaticamente
  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  // Método de Logout
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
