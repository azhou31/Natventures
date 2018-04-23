import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

//COMPONENTS
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';

//SERVICE
import { ProductService } from './product.service';
import { HomeProductListComponent } from './home/home-product-list/home-product-list.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    HomeProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
