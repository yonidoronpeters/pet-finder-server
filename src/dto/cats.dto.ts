import { Age, Fur, Gender } from './enums';

export class CatsDto {
  gender: Gender;
  ages: Age[];
  hair:  Fur[];
  breeds: string[];
}
