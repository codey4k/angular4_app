import { Component } from '@angular/core'

@Component({
    selector: 'services',
    template : `
        <section class="services">
            <div class="services__container">
                <div class="services__left">
                    <div class="services__left-1">Ceo Marketing</div>
                    <div class="services__left-2">Web Development</div>
                </div>
                <div class="services__right">
                    <div class="services__right-1">Brandign design</div>
                    <div class="services__right-2">Web Security</div>
                </div>
            </div>
        </section>
    `,
    styleUrls : ['./services.component.css']
})

export class Services {
    
}