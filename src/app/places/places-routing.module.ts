import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';

const routes: Routes = [
  {
    path: '',
    component: PlacesPage,
    children:[
      {
        path: 'discover',
        loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule)
        // children:[
        //   {
        //     path: '',
        //     loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule)
        //   },
          // {
          //   path: ':id',
          //   loadChildren: () => import('./discover/discover-detail/discover-detail.module').then( m => m.DiscoverDetailPageModule)
          // }
        // ]
      },
      {
        path: 'offer',
        loadChildren: () => import('./offer/offer.module').then( m => m.OfferPageModule)
      },
      {
        path: '',
        redirectTo: 'discover',
        pathMatch: 'full'
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
