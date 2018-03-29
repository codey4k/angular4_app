import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { MenuBar } from './menu_bar/menu_bar.component'
import { Header } from './header/header.component'
import { Services } from './services/services.component'
import { Footer } from './footer/footer.component'
import { Description } from './description/description.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuBar,
    Header,
    Services,
    Description,
    Footer,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
