import { Component } from '@angular/core'

@Component({
    selector : 'menu-bar',
    template : `
        <div class="menu">
            <div class="menu__container">
                <h2>{{ logo }}</h2>
                <div class="menu__icon"></div>
                <ul class="menu__list">
                    <li class="menu__item">Home</li>
                    <li class="menu__item">Contact</li>
                    <li class="menu__item">About us</li>
                </ul>
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
                    Object.assign(menu.style,{
                        height : '60px',
                        background : 'rgba(178, 32, 32, .8)'
                    })
                }
                else{
                    Object.assign(menu.style, {
                        height : '80px',
                        background : 'transparent'
                    })
                }
            })
        })
    }
    public logo = 'CodeY4k'
    public menu = 'menu'
    
    // public list = ['Home', 'Contact', 'About us']
    
    // public lista = list.map(i => '<li class="menu__item">#{i}</li>')
}
