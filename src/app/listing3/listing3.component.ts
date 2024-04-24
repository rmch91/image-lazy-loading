import { Component } from '@angular/core';

@Component({
  selector: 'app-listing3',
  templateUrl: './listing3.component.html',
})
export class Listing3Component {
  public products = Array(20);
  public loading = 'lazy';

  public code = `
  <picture>
    <source 
      *ngFor="let source of [1,2,3]"
      [srcset]="'https://source.unsplash.com/random/200x300?sig=' + (source + 20 + i)"
      [media]="'(min-width: ' + (source * 100) + 'px)'" />
    <img 
      *ngIf="loading === 'lazy'; else tmpEagerImg" 
      loading="lazy"
      [src]="'https://source.unsplash.com/random/200x300?sig=' + i" 
      alt="Alt" />
  </picture>

  <ng-template #tmpEagerImg>
    <img 
      loading="eager" 
      [src]="'https://source.unsplash.com/random/200x300?sig=' + i" 
      alt="Alt" />
  </ng-template>
`;
}
