import { Component } from '@angular/core'

@Component({
    selector: 'services-component',
    template : `
        <section class="services">
            <div class="services__container">
                <div class="services__left">
                    <div class="services__left-1">
                        <img src="assets/services/ceo.jpeg" class="services__img" alt="ceo marqueting"/>
                        <h3 class="services__title">Ceo Marketing</h3>
                    </div>
                    <div class="services__left-2">
                        <img src="assets/services/webdesign.jpeg" class="services__img" alt="webdesign"/>
                        <h3 class="services__title">Web Development</h3>
                    </div>
                </div>
                <div class="services__right">
                    <div class="services__right-1">
                        <img src="assets/services/branding.jpeg" class="services__img" alt="branding"/>
                        <h3 class="services__title">Brandign design</h3>
                    </div>
                    <div class="services__right-2">
                        <img src="assets/services/security.jpeg" class="services__img" alt="security"/>
                        <h3 class="services__title">Web Security</h3>
                    </div>
                </div>
            </div>
        </section>
    `,
    styleUrls : ['./services.component.css']
})

export class Services {
    
}