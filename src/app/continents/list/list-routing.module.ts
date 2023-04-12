import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPage } from './list.page';
import { ContinentsResolver } from './resolver';

const routes: Routes = [
  {
    path: '',
    component: ListPage,
    resolve: {
      continents: ContinentsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPageRoutingModule {}
