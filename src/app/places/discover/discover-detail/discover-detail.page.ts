import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { Place } from '../../places.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-discover-detail',
  templateUrl: './discover-detail.page.html',
  styleUrls: ['./discover-detail.page.scss'],
})
export class DiscoverDetailPage implements OnInit {
  loadDiscover: Place[];
  constructor(
    private activeRouter: ActivatedRoute,
    private placeService: PlacesService,
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.activeRouter.paramMap.subscribe((paramabc) => {
      if (!paramabc.has('id')) {
        this.navCtrl.navigateBack('/discover');
        return;
      }
      const idDiscover = paramabc.get('id');
      this.loadDiscover = this.placeService.getPlace(idDiscover);
      console.log('Discover Detail: ', this.loadDiscover);
    });
  }

  onBookDiscover() {
    this.modalCtrl
      .create({
        component: CreateBookingComponent,
        componentProps: { selectedDis: this.loadDiscover },
      })
      .then((modalEl) => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(resultData=>{
        console.log(resultData.data,resultData.role);
        if(resultData.role=='confirm')
        {
          console.log('Booked');

        }
      })
  }
}
