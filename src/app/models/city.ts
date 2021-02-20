import { Photo } from "./Photo";

export class City {
  id!:number;
  name!: string;
  description:string |any;
  userId!:number;
  photos!:Photo[];
}
