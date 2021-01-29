import { ContactDto } from './contact.dto';
import { CatsDto } from './cats.dto';
import { DogsDto } from './dogs.dto';

export class SubscriptionDto {
  contact: ContactDto;
  cats?: CatsDto;
  dogs?: DogsDto;
}
