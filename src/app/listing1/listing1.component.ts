import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-listing1',
  templateUrl: './listing1.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Listing1Component {
  public products = Array(20);
  public loading = 'lazy';

  public code = `
      <picture>
        <source 
          *ngFor="let source of [1,2,3]"
          [srcset]="'https://source.unsplash.com/random/200x300?sig=' + (source + 20 + i)"
          [media]="'(min-width: ' + (source * 100) + 'px)'" />
        <img 
          [loading]="loading" 
          [src]="'https://source.unsplash.com/random/200x300?sig=' + i" 
          alt="Alt" />
      </picture>
  `;
}
