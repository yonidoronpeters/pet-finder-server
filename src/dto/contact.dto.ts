import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class ContactDto {
  @ApiModelProperty({
    description: "The user's phone number",
  })
  phone: string;
}
