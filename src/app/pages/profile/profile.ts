import { Component, inject } from '@angular/core';
import { Auth } from '../../services/auth';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-profile',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {
  auth = inject(Auth);
}