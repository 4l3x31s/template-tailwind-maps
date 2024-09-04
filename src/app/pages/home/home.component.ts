import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  //markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];
  options: google.maps.MapOptions = {
    center: {lat: 40, lng: -20},
    zoom: 4
  };

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((data: GeolocationPosition) =>{
      console.log(data)
      //alert('Location accessed')
      this.options = {

        center: {lat: data.coords.latitude, lng: data.coords.longitude},
        zoom: 15
      };
      this.markerPositions.push({
        lat: data.coords.latitude, lng: data.coords.longitude
      })
    },() => {
        alert('User not allowed')
    },{timeout:5000})
  }

}
