import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePermisionDTO {
  @ApiProperty({
    example: '',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class CreatePermisionDetailDto {
  @ApiProperty({
    example: '',
  })
  @IsString()
  @IsNotEmpty()
  action_name: string;

  @ApiProperty({
    example: '',
  })
  @IsNumber()
  perId: number;
}
