import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})
export class AchievementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://speakerdeck.com/assets/embed.js';
    // data-ratioとdata-idを追加
    script.setAttribute('data-ratio', '1.7772511848341233');
    script.setAttribute('data-id', 'e24bb6db369045d0bb22b0ac15d50413');
    script.setAttribute('class', 'speakerdeck-embed')
    
    const div = document.getElementById('script');
    div?.insertAdjacentElement('afterend', script);
  }

}
