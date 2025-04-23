import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-indentify-counter',
  templateUrl: './indentify-counter.component.html',
  styleUrls: ['./indentify-counter.component.css']
})
export class IndentifyCounterComponent implements OnInit{
private hasAnimated = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (this.hasAnimated) return;

    const section = this.el.nativeElement.querySelector('.counter-section');
    const rect = section.getBoundingClientRect();

    if (rect.top < window.innerHeight) {
      this.animateCounters();
      this.hasAnimated = true;
    }
  }

  animateCounters(): void {
    const counters = this.el.nativeElement.querySelectorAll('.counter');

    counters.forEach((counter: HTMLElement) => {
      const target = +counter.getAttribute('data-target')!;
      let count = 0;
      const step = Math.ceil(target / 100);

      const updateCount = () => {
        if (count < target) {
          count += step;
          if (count > target) count = target;
          counter.innerText = `+${count}k`;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = `+${target}k`;
        }
      };

      updateCount();
    });
  }

}
