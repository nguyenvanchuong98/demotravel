import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  places: Place[] = [
    {
      id: 'pl1',
      title: 'Hà Nội',
      description: 'Thủ đô ngàn năm văn hiến',
      urlImage:
        'https://cms.luatvietnam.vn/uploaded/Images/Original/2018/11/15/nhap-ho-khau-ha-noi_1511142628.jpeg',
      price: 1200,
      availableFrom: new Date('2019-01-01'),
      avainableTo: new Date('2019-12-31'),
      userId: 'abc',
    },
    {
      id: 'pl2',
      title: 'Đà Nẵng',
      description: 'Thành phố đáng sống nhất Việt Nam',
      urlImage:
        'https://danangfantasticity.com/wp-content/uploads/2020/03/da-nang-khong-to-chuc-le-ky-niem-45-nam-ngay-giai-phong.jpg',
      price: 1200,
      availableFrom: new Date('2019-01-01'),
      avainableTo: new Date('2019-12-31'),
      userId: 'abc',
    },
    {
      id: 'pl3',
      title: 'Hải Phòng',
      description: 'Thành phố hoa phượng đỏ',
      urlImage:
        'https://media.baodautu.vn/Images/manhcuong/2020/05/13/hai-phong-vung-buoc-toi-tuong-lai1589307029.jpg',
      price: 1200,
      availableFrom: new Date('2019-01-01'),
      avainableTo: new Date('2019-12-31'),
      userId: 'abc',
    },
  ];
  constructor(private authService: AuthService,private router:Router,private http:HttpClient) {}
  getAllPlace() {
    return this.places;
  }

  getPlace(idinput: string) {
    return this.places.filter((pl) => pl.id === idinput);
  }

  addPlace(
    title: string,
    description: string,
    price: number,
    dateFrom: Date,
    dateTo: Date
  ) {
    const newPlace = new Place(
      Math.random().toString(),
      title,
      description,
      'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200',
      price,
      dateFrom,
      dateTo,
      this.authService.userId
    );
    //this.places.push(newPlace);
    return this.http.post('https://ionic-angular-course-c5d33-default-rtdb.firebaseio.com/offer1.json',{...newPlace,id:null});
  }
}
