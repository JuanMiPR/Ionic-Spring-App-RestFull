import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'addClient',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../addClient/addClient.module').then(m => m.addClientPageModule)
          }
        ]
      },
      {
        path: 'deleteClient',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../deleteClient/deleteClient.module').then(m => m.deleteClientPageModule)
          }
        ]
      },
      {
        path: 'updateClient',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../updateClient/updateClient.module').then(m => m.updateClientPageModule)
          }
        ]
      },{
        path: 'searchClient',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../searchClient/searchClient.module').then(m => m.searchClientPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/addClient',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/addClient',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
