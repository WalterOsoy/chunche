import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ScoreComponent } from './score/score.component';
import { SearchComponent } from './search/search.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'search', component: SearchComponent},
  {path: 'score', component: ScoreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
