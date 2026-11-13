
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { Auth } from '../../services/auth';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  auth = inject(Auth);
  private router = inject(Router);

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/home']);
  }

}
