class AddressDescription {
  constructor(
    public id: string,
    public title: string,
    public isValid: boolean,
  ) {}

  public fromJson(map: any) {
    const { id, title, isValid } = map;
    return new AddressDescription(id, title, isValid);
  }
}

export default AddressDescription;
