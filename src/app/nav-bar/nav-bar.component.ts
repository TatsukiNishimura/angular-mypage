import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  languages = environment.languages;
  currentLang: string = environment.defaultLang;
  title: string = "Tatsuki Nishimura's page"
  constructor(private router: Router, private translate: TranslateService) { }

  ngOnInit(): void {
  }

  changeLang(lang: string) {
    if (lang !== this.currentLang) {
      this.translate.use(lang);
      this.currentLang = lang;
    }
  }

  isCurrentLang(lang: string) {
    return lang === this.currentLang;
  }
  goToProfile() {
    this.router.navigate(["profile"]);
  }

  gotoTop() {
    this.router.navigate([""]);
  }
}
