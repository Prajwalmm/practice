import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { BakeryComponent } from '../components/bakery/bakery.component';
import { BookstoreComponent } from '../components/bookstore/bookstore.component';

export const routes: Routes = [
    {
        
      path: '/home', component:HomeComponent
    },
    {
        
        path: '/Bakery', component:BakeryComponent
      },
      {
        
        path: '/BookStore', component:BookstoreComponent
      },
];
