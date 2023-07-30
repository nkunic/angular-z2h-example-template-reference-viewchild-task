import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  vowels = [
    { letter: 'a', count: 0 },
    { letter: 'e', count: 0 },
    { letter: 'i', count: 0 },
    { letter: 'o', count: 0 },
    { letter: 'u', count: 0 },
  ];

  @ViewChild('heading', { static: true }) heading;

  ngOnInit() {
    this.heading.nativeElement.innerHTML =
      '<h2 class="mb-2">Analyze Word:</h2>';
  }

  analyzeWord(word) {
    let aCount = 0;
    let eCount = 0;
    let iCount = 0;
    let oCount = 0;
    let uCount = 0;

    for (let letter of word) {
      if (letter === 'a') {
        aCount++;
      }
      if (letter === 'e') {
        eCount++;
      }
      if (letter === 'i') {
        iCount++;
      }
      if (letter === 'o') {
        oCount++;
      }
      if (letter === 'u') {
        uCount++;
      }
    }

    this.vowels = [
      { letter: 'a', count: aCount },
      { letter: 'e', count: eCount },
      { letter: 'i', count: iCount },
      { letter: 'o', count: oCount },
      { letter: 'u', count: uCount },
    ];
  }
}
