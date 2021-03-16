import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Place } from 'src/app/places/places.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedDis:Place[];
  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {}

  onCancel(){
    this.modalCtrl.dismiss(null,'khong book !');
  }

  onBookDiscover(){
    this.modalCtrl.dismiss({meseage:'This is a dummy message !'},'confirm');
  }

}
