import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage,
    children: [{
        path: 'alumnos',
        loadChildren: () => import('../alumno/alumno.module').then( m => m.AlumnoModule)
      },
      {
        path: 'listado',
        loadChildren: () => import('../listado/listado.module').then( m => m.ListadoModule)
      },
      {
        path: 'grafico',
        loadChildren: () => import('../grafico/grafico.module').then( m => m.GraficoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
