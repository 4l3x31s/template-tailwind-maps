export interface GeocodeFirebase {
  results: Result[];
}

export interface Result {
  address_components: AddressComponent[];
  formatted_address:  string;
  geometry:           Geometry;
  place_id:           string;
  types:              string[];
}

export interface AddressComponent {
  long_name:  string;
  short_name: string;
  types:      string[];
}

export interface Geometry {
  bounds:        Bounds;
  location:      Location;
  location_type: string;
  viewport:      Bounds;
}

export interface Bounds {
  south: number;
  west:  number;
  north: number;
  east:  number;
}

export interface Location {
  lat: number;
  lng: number;
}
