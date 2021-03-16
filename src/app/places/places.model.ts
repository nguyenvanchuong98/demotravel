export class Place{
  constructor(
  public id:string,
  public title:string,
  public description:string,
  public urlImage:string,
  public price:number,
  public availableFrom:Date,
  public avainableTo:Date,
  public userId: string
  ){}
}
