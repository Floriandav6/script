import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent} from "./index/index.component";
import {BleuComponent} from "./bleu/bleu.component";
import {JauneComponent} from "./jaune/jaune.component";
import {VertComponent} from "./vert/vert.component";
import {RougeComponent} from "./rouge/rouge.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },

  {
    path: 'bleu',
    component: BleuComponent
  },
  {
    path: 'jaune',
    component: JauneComponent
  },
  {
    path: 'rouge',
    component: RougeComponent
  },
  {
    path: 'vert',
    component: VertComponent
  },

  {
    path: 'contact',
    component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
export const routingComponents = [IndexComponent, BleuComponent, JauneComponent, RougeComponent, VertComponent, ContactComponent]
