import { Component } from '@angular/core'

@Component({
    selector : 'footer',
    template : `
        <footer class="footer">
        </footer>
    `,
    styleUrls : ['./footer.component.css']
})

export class Footer {
    
    public copyright:string = 'copy'
    
}