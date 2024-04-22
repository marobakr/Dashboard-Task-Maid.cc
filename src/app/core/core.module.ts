import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { HeadrComponent } from './components/headr/headr.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LodingInterceptor } from './interceptor/loding.interceptor';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    HomeComponent,
    HeadrComponent,
    FooterComponent,
    NgxSpinnerModule,
  ],
  exports: [HomeComponent, HeadrComponent, FooterComponent, NgxSpinnerModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LodingInterceptor, multi: true },
  ],
})
export class CoreModule {}
