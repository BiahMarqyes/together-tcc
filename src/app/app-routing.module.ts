import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'logincli',
    loadChildren: () => import('./logincli/logincli.module').then( m => m.LogincliPageModule)
  },
  {
    path: 'regiscli',
    loadChildren: () => import('./regiscli/regiscli.module').then( m => m.RegiscliPageModule)
  },
  {
    path: 'loginres',
    loadChildren: () => import('./loginres/loginres.module').then( m => m.LoginresPageModule)
  },
  {
    path: 'regisres',
    loadChildren: () => import('./regisres/regisres.module').then( m => m.RegisresPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
