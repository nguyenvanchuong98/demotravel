import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import { Place } from '../places.model';
import { PlacesService } from '../places.service';
@Component({
  selector: 'app-offer',
  templateUrl: './offer.page.html',
  styleUrls: ['./offer.page.scss'],
})
export class OfferPage implements OnInit {
  listplace: Place[];
  constructor(
    private placeService: PlacesService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.listplace = this.placeService.getAllPlace();
  }
  onEdit(idOffer: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log('Edit item', idOffer);
    this.router.navigate(['/places/offer/edit', idOffer]);
  }
}
