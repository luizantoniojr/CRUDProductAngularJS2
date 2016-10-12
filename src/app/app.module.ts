//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

//Components
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ListProductComponent } from './components/product/list-product/list-product.component';
import { FormProductComponent } from './components/product/form-product/form-product.component';
import { DetailsProductComponent } from './components/product/details-product/details-product.component';

//Pages
import { HomePage } from './pages/home/home';
import { ReadProduct } from './pages/product/read/read-product';
import { CreateProduct } from './pages/product/create/create-product';
import { UpdateProduct } from './pages/product/update/update-product';
import { DeleteProduct } from './pages/product/delete/delete-product';

//Pipes
import { FilterListProduct } from './pipes/product/filter-list-product.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ListProductComponent,
    FormProductComponent,
    DetailsProductComponent,
    FilterListProduct,
    HomePage,
    ReadProduct,
    CreateProduct,
    UpdateProduct,
    DeleteProduct,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ToastModule,
  ],
  providers: [],
  bootstrap: [HomePage]
})
export class AppModule { }
