import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

//Components
import { HeaderComponent } from './components/shared/header/header.component';
import { ListProductComponent } from './components/product/list-product/list-product.component';
import { HomeComponent } from './components/home/home.component';

//Pages
import { HomePage } from './pages/home/home';
import { CreateProduct } from './pages/product/create/create-product';
import { ReadProduct } from './pages/product/read/read-product';

@NgModule({
  declarations: [
    HeaderComponent,
    ListProductComponent,
    HomeComponent,
    HomePage,
    CreateProduct,
    ReadProduct,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [HomePage]
})
export class AppModule { }
