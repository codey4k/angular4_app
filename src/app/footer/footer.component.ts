import { Component } from '@angular/core'

@Component({
    selector : 'footer-component',
    template : `
        <footer class="footer">
            <div class="footer__container">
                <p class="footer__copyright">{{copyright}}&copy;{{codey4k}}</p>
            </div>
        </footer>
    `,
    styleUrls : ['./footer.component.css']
})

export class Footer {
    
    public copyright:string = 'Copyright '
    public codey4k:string = ' CodeY4k'
    
}