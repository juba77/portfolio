import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
        <header class="pattern">
          <div class="px-6 mx-auto">
            
            <app-menu/>

            <app-home/>

          </div>
        </header>
    `
})

export class HeaderComponent {

}