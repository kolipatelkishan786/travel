import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ContactComponent} from './contact/contact.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'index', redirectTo: '/index', pathMatch: 'full'},
  {path: '', component: IndexComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
