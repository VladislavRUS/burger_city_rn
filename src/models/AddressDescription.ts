class AddressDescription {
  public static fromJson(map: any) {
    const { id, description } = map;
    const streetPrediction = map.types.find(
      (type: string) => type === 'street_address',
    );

    const isValid = !!streetPrediction;

    return new AddressDescription(id, description, isValid);
  }

  constructor(
    public id: string,
    public title: string,
    public isValid: boolean,
  ) {}
}

export default AddressDescription;
