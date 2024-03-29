import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {
  public  linkTheme = document.querySelector('#theme');
  ngOnInit(): void {
  }
  changeTheme(theme : string){
    
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href',url);

    localStorage.setItem('theme', url);
    this.checkCurrentThem()
  }
  checkCurrentThem(){
    const links = document.querySelectorAll('.selector');
    links.forEach(elem => {
      elem.classList.remove('working');

      const btnTheme = elem.getAttribute('data-theme');
      const brnThemeUrl = `./assets/css/colors/${btnTheme}.css`
      const currentTheme = this.linkTheme?.getAttribute('href');

      if(brnThemeUrl === currentTheme) {
        elem.classList.add('working')
      }
    })
  }
}
