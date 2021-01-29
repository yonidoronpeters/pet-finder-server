import { Age, Gender } from './enums';

export class DogsDto {
  gender: Gender;
  ages: Age[];
  breeds: string[];
}
