import { Photo } from "./Photo";

export class City {
  id!:number;
  name!: string;
  description:string | undefined;
  userId!:number;
  photos!:Photo[];
}
