
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private username = signal('');

  login(credentials: {
    username: string;
    password: string;
  }): boolean {

    if (
      credentials.username === 'master@lemoncode.net' &&
      credentials.password === '12345678'
    ) {
      this.username.set(credentials.username);
      return true;
    }

    return false;
  }

  logout(): void {
    this.username.set('');
  }

  isLogged(): boolean {
    return this.username() !== '';
  }

  getUsername(): string {
    return this.username();
  }

}
