import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { ProjectDisplayComponent } from './components/project-display/project-display.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavLinksComponent } from './components/nav-links/nav-links.component';

const appRoutes: Routes = [
  {path: '', component: OverlayComponent},
  {path: 'about', component: AboutComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'projects/:id', component: ProjectDisplayComponent},
  { path: '**', pathMatch: 'full',  component: PageNotFoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    FooterComponent,
    OverlayComponent,
    AboutComponent,
    ProjectsComponent,
    ProjectItemComponent,
    ProjectDisplayComponent,
    PageNotFoundComponent,
    NavLinksComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  //, {enableTracing: true}
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
