import { Component, OnInit, inject, ViewChild } from '@angular/core';
import { GoogleMapsModule, GoogleMap, MapGeocoder } from '@angular/google-maps';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule, MatBottomSheet } from '@angular/material/bottom-sheet';
import { SheetComponent } from '../../../components/sheet/sheet.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, FormsModule, GoogleMapsModule, MatButtonModule, MatBottomSheetModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent implements OnInit {
  //TODO: para abrir Google maps y trazar Ruta
  //-16.4952992,-68.1326279 = lat,lng inicio
  //-16.5228958,-68.1215489 = lat,lng fin
  //@-16.4952992,-68.1326279 =lat,lng actual
  // http://www.google.com/maps/dir/-16.4957456,-68.1309786/-16.5203167,-68.1098184/@-16.4982,-68.1294963,15z/data=!3m1!1e3!4m2!4m1!3e0
  private _bottomSheet = inject(MatBottomSheet);
  @ViewChild(GoogleMap) googleMap!: GoogleMap;

  geocoder = inject(MapGeocoder);

  direccion: string = '';

  @ViewChild('map')
  mapa!: google.maps.Map;
  //markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPosition: google.maps.LatLngLiteral = {
    lat: 38.9147806, lng: -120.0039802
  };
  markerPositions: google.maps.LatLngLiteral[] = [];
  options: google.maps.MapOptions = {
    //styles: environment.styles,
    disableDefaultUI: true,
    fullscreenControl:false,
    maxZoom: 17,
    minZoom: 13,
    center: {lat: 38.9147806, lng: -120.0039802},
    zoom: 4
  };
  height: number = 700;
  constructor() {

  }

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
    },{timeout:1000})
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
  buscarDireccion() {
    console.log('busqueda, ', this.direccion)
    this.geocoder.geocode({address: this.direccion}).subscribe(c=> {
      let dato = c;
      if(dato.status === 'OK'){
        this.mapa.panTo({lat: dato.results[0].geometry.location.lat(),lng: dato.results[0].geometry.location.lng()});
        this.options.center = {lat: dato.results[0].geometry.location.lat(),lng: dato.results[0].geometry.location.lng()}
        this.markerPosition = {
          lat: dato.results[0].geometry.location.lat(),
          lng: dato.results[0].geometry.location.lng()
        }
      }

    })
  }

}
