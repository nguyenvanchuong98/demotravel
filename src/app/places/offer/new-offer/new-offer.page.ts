import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
  formcreate:FormGroup;
  constructor(private placeService:PlacesService,
              private router:Router,
              private loadingCtrl:LoadingController) { }
  ngOnInit() {
    this.formcreate=new FormGroup({
      title:new FormControl(null),
      description:new FormControl(null),
      price:new FormControl(null),
      dateFrom:new FormControl(null),
      dateTo:new FormControl(null)
    })
  }

  onSaving(){
    //không loading
    // this.placeService.addPlace(this.formcreate.value.title,
    //       this.formcreate.value.description,
    //       this.formcreate.value.price,
    //       this.formcreate.value.dateFrom,
    //       this.formcreate.value.dateTo
    //       )
    // this.router.navigate(['/places/offer']);

    //Có loading
    if (!this.formcreate.valid) {
      return;
    }

    this.loadingCtrl
    .create({
      message:'Creating place...'
    })
    .then(loadingEl=>{
      loadingEl.present();
      this.placeService
        .addPlace(this.formcreate.value.title,
        this.formcreate.value.description,
        this.formcreate.value.price,
        this.formcreate.value.dateFrom,
        this.formcreate.value.dateTo
        )
        .subscribe(() => {
          loadingEl.dismiss();
          this.formcreate.reset();
          this.router.navigate(['/places/offer']);
        });
    })
  }
}
