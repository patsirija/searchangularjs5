import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InsertapmComponent } from './insertapm/insertapm.component';
import { JumbotonComponent } from './jumboton/jumboton.component';
import { PlaceComponent } from './place/place.component';
import { DdepartmentComponent } from './ddepartment/ddepartment.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterapmComponent } from './registerapm/registerapm.component';
import { EprofileComponent } from './eprofile/eprofile.component';
import { EapmComponent } from './eapm/eapm.component';

import { Jumboton3Component } from './jumboton3/jumboton3.component';
import { Jumboton2Component } from './jumboton2/jumboton2.component';
const appRoutes: Routes = [
  { path:'eapm', component: EapmComponent  },
  { path:'insertapm', component: InsertapmComponent  },
  { path:'Registerapm', component: RegisterapmComponent  },
  { path:'eprofile', component: EprofileComponent  },
  { path:'home2', component: Jumboton2Component },
  { path:'home3', component: Jumboton3Component },
  { path:'search', component: SearchComponent },
  { path:'department', component: DdepartmentComponent },
  { path:'place', component: PlaceComponent },

  { path:'**'   , component: JumbotonComponent  },

];
@NgModule({
  declarations: [
    AppComponent,
    InsertapmComponent,
    JumbotonComponent,
    PlaceComponent,
    DdepartmentComponent,
    SearchComponent,
    NavbarComponent,
    RegisterapmComponent,
    EprofileComponent,
    EapmComponent,

    Jumboton3Component,
    Jumboton2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only set true
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
