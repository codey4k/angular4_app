import { Component } from '@angular/core'

@Component({
    selector : 'menu-bar',
    template : `
        <div class="menu">
            <div class="menu__container">
                <h2>{{ logo }}</h2>
                <h2>{{ menu }}</h2>
            </div>
        </div>
    `,
    styleUrls : ['./menu_bar.component.css']
})

export class MenuBar {
    constructor() {
        window.addEventListener('DOMContentLoaded',function(){
            window.addEventListener('scroll',function(){
                
                let scroll = document.documentElement.scrollTop || document.body.scrollTop,
                    menu = <HTMLElement>document.querySelector('.menu')
                
                if(scroll >= 200) {
                    menu.style.background = 'rgba(178, 32, 32,.8)'
                }
                else{
                    menu.style.background = 'transparent'
                }
            })
        })
    }
    public logo = 'CodeY4k'
    public menu = 'menu'
    
}
