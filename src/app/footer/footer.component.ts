import { Component, OnInit } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faArrawUp = faArrowUp;
  constructor() { }

  ngOnInit(): void {
  }

  gotoTop(): void {
    window.scrollTo(0, 0);
  }
}
