import { Component } from '@angular/core'

@Component({
    selector : 'description-component',
    template : `
        <section class="description">
            <div class="description__container">
                <div class="description__img">
                </div>
                <p class="description__text">Hello world</p>
            </div>
        </section>
    `,
    styleUrls : ['./description.component.css']
})

export class Description {
    constructor(){}
}