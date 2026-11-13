
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private readonly storageKey = 'amazoff.username';

  private username = signal('');

  constructor() {
    // Recuperamos el usuario guardado al iniciar la aplicación.
    const storedUsername = localStorage.getItem(this.storageKey);

    if (storedUsername) {
      this.username.set(storedUsername);
    }
  }

  login(credentials: { username: string; password: string }): boolean {

    if (
      credentials.username === 'rodrigo@gmail.com' &&
      credentials.password === '12345678'
    ) {
      this.username.set(credentials.username);

      // Guardamos el usuario en localStorage.
      localStorage.setItem(this.storageKey, credentials.username);

      return true;
    }

    return false;
  }

  logout(): void {

    // Eliminamos el usuario de la señal.
    this.username.set('');

    // Eliminamos el usuario de localStorage.
    localStorage.removeItem(this.storageKey);
  }

  isLogged(): boolean {
    return this.username() !== '';
  }

  getUsername(): string {
    return this.username();
  }
}
