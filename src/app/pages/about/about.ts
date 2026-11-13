import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about',
  imports: [MatIconModule, MatCardModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {}