
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { PublicMenu } from './components/public-menu/public-menu';
import { PrivateMenu } from './components/private-menu/private-menu';
import { Auth } from './services/auth';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Footer,
    PublicMenu,
    PrivateMenu
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  auth = inject(Auth);

}
