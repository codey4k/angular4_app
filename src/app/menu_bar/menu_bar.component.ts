import { Component } from '@angular/core'

@Component({
    selector : 'menu-bar',
    template : `
        <div class="menu">
            <h2>{{ logo }}</h2>
            <h2>{{ menu }}</h2>
        </div>
    `,
    styleUrls : ['./menu_bar.component.css']
})

export class MenuBar {
    public logo = 'CodeY4k'
    public menu = 'menu'
}
