import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscoverDetailPageRoutingModule } from './discover-detail-routing.module';

import { DiscoverDetailPage } from './discover-detail.page';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscoverDetailPageRoutingModule
  ],
  declarations: [DiscoverDetailPage,CreateBookingComponent],
  entryComponents:[CreateBookingComponent]
})
export class DiscoverDetailPageModule {}
