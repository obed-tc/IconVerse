import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-toggle-theme',
  templateUrl: './toggle-theme.component.html',
})
export class ToggleThemeComponent {

  darkMode = signal<boolean>(false);

  constructor() {
    const savedTheme = localStorage.getItem("dark");
    this.darkMode.set(savedTheme === 'true'); 
    this.applyTheme(); 
  }

  changeTheme() {
    this.darkMode.set(!this.darkMode());
    this.applyTheme(); 
  }

  applyTheme() {
    if (this.darkMode()) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("dark"); 
    }
  }
}
