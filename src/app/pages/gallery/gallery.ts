import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-gallery',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery {
  images = [
    { title: 'Naturaleza', description: 'Paisajes y espacios naturales.', icon: 'landscape', color: 'nature' },
    { title: 'Tecnología', description: 'Innovación y mundo digital.', icon: 'devices', color: 'technology' },
    { title: 'Arquitectura', description: 'Edificios y construcciones.', icon: 'apartment', color: 'architecture' },
    { title: 'Creatividad', description: 'Ideas y diseños originales.', icon: 'palette', color: 'creativity' },
    { title: 'Viajes', description: 'Lugares por descubrir.', icon: 'flight', color: 'travel' },
    { title: 'Deporte', description: 'Actividad y movimiento.', icon: 'sports_soccer', color: 'sport' }
  ];
}