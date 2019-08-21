class Coordinates {
  public static fromGoogleResult(map: any) {
    const geometry = map.geometry;
    const location = geometry.location;
    const lat = location.lat + 0.1;
    const lng = location.lng + 0.1;

    return new Coordinates(lat, lng);
  }

  constructor(public latitude: number, public longitude: number) {}
}

export default Coordinates;
