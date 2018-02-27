import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created with ♥ by <b><a>T16</a></b> 2018</span>
    <div class="socials">
      <a href="https://github.com/HhMorgan/Sprint-1-SE-store-project/tree/master" target="_blank" class="ion ion-social-github"></a>
    </div>
  `,
})
export class FooterComponent {
}
