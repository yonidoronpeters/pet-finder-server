import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class CatsDto {
  @ApiModelProperty({
    description: "The cat's ages",
    type: 'string',
    isArray: true,
  })
  ages: string[]; // cat specific ages e.g. cat-adult, cat-senior

  @ApiModelProperty({
    description: "The cat's breeds",
    type: 'string',
    isArray: true,
  })
  breeds: string[];

  @ApiModelProperty({
    description: "The cat's gender",
    type: 'string',
  })
  gender: 'male' | 'female' | 'either';

  @ApiModelProperty({
    description: "The cat's ages",
    type: 'string',
    isArray: true,
  })
  hair: ['short' | 'medium' | 'long'];
}
