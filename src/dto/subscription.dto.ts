import { ContactDto } from './contact.dto';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { CatsDto } from './cats.dto';

export class SubscriptionDto {
  @ApiModelProperty({
    description: 'Contact info for the user',
  })
  contact: ContactDto;

  @ApiModelProperty({
    description: 'The cat characteristics the user is interested in',
  })
  cats: CatsDto
}
