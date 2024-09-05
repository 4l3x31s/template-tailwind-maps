import { Component, inject, ViewChild } from '@angular/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { environment } from '../../../../environments/environment';
import { SheetComponent } from '../../../components/sheet/sheet.component';

@Component({
  selector: 'app-data-info',
  standalone: true,
  imports: [GoogleMapsModule, MatButtonModule, MatBottomSheetModule],
  templateUrl: './data-info.component.html',
  styleUrl: './data-info.component.scss'
})
export class DataInfoComponent {
  //TODO: para abrir Google maps y trazar Ruta
  //-16.4952992,-68.1326279 = lat,lng inicio
  //-16.5228958,-68.1215489 = lat,lng fin
  //@-16.4952992,-68.1326279 =lat,lng actual
  // http://www.google.com/maps/dir/-16.4957456,-68.1309786/-16.5203167,-68.1098184/@-16.4982,-68.1294963,15z/data=!3m1!1e3!4m2!4m1!3e0
  private _bottomSheet = inject(MatBottomSheet);
  @ViewChild(GoogleMap) googleMap!: GoogleMap;

  @ViewChild('map')
  mapa!: google.maps.Map;
  //markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPosition: google.maps.LatLngLiteral = {
    lat: 40, lng: -20
  };
  markerPositions: google.maps.LatLngLiteral[] = [];
  options: google.maps.MapOptions = {
    styles: environment.styles,
    disableDefaultUI: true,
    fullscreenControl:false,
    maxZoom: 17,
    minZoom: 13,
    center: {lat: 40, lng: -20},
    zoom: 4
  };

  ngOnInit(): void {

    navigator.geolocation.getCurrentPosition((data: GeolocationPosition) =>{
      console.log(data)
      //alert('Location accessed')
      this.options.center = {lat: data.coords.latitude, lng: data.coords.longitude}



      this.markerPosition = {
        lat: data.coords.latitude, lng: data.coords.longitude
      }

    },() => {
        alert('User not allowed')
    },{timeout:5000})
  }
  openBottomSheet(): void {
    this._bottomSheet.open(SheetComponent);
  }

  marcadorCambiado(dato: any) {


    let data = JSON.parse(JSON.stringify(dato.latLng));
    console.log(data)
    this.options.center = {lat: data.lat, lng: data.lng};


  }
  centroCambiado(dato: any) {

    let mapa = JSON.parse(JSON.stringify(this.googleMap.getCenter()))
    //let service = new google.maps.places.PlacesService(this.mapa);
    // service.findPlaceFromQuery({

    // })
    console.log(mapa);
    this.markerPosition = {
      lat: mapa.lat,
      lng: mapa.lng
    }

    //console.log(dato);
    //console.log(this.options);
  }

}
