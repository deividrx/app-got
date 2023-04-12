import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPage } from './list.page';
import { ListResolver } from './resolver';

const routes: Routes = [
  {
    path: '',
    component: ListPage,
    resolve: {
      characters: ListResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPageRoutingModule {}
