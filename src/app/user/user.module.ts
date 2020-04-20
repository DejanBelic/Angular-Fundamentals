import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule} from '@angular/router';
import { userRoutes } from './user.routes';
import {ProfileComponent} from './profile.component';

/**
 * Lazy loadable module
 * Diff with app module we have browser modudle while we having CommonModule here
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    ProfileComponent
  ],
  providers: []
})

export class UserModule {

}
