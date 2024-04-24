import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-listing2',
  templateUrl: './listing2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Listing2Component {
  public products = Array(20);
  public loading = 'lazy';

  public code = `
    <picture>
      <source 
        *ngFor="let source of [1,2,3]"
        [srcset]="'https://source.unsplash.com/random/200x300?sig=' + (source + 20 + i)"
        [media]="'(min-width: ' + (source * 100) + 'px)'" />

        <ng-container [ngTemplateOutlet]="tmpImg"></ng-container>
    </picture>
    <ng-template #tmpImg>
      <img 
        loading="lazy" 
        [src]="'https://source.unsplash.com/random/200x300?sig=' + i" 
        alt="Alt" />
    </ng-template>
  `;
}
