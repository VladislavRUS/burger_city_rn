class Api {
  public static async findPlace(input: string, apiKey: string) {
    const params = `input=${input}&key=${apiKey}&types=address`;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?${params}`;
    const response = await fetch(url);
    return response.json();
  }

  public static async getCoordinates(address: string, apiKey: string) {
    const params = `address=${address}&key=${apiKey}`;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?${params}`;
    const response = await fetch(url);
    return response.json();
  }
}

export default Api;
