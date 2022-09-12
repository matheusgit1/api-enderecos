import { IsString, MinLength, IsNumber, MaxLength } from 'class-validator';
import { IsCEP } from 'brazilian-class-validator';

export class CreateAdressEntity {
  @IsString({ message: "atributo 'rua' dever ser um texto" })
  @MinLength(4, {
    message: "atributo 'rua' dever possuir no minimo 4 caracteres",
  })
  street: string;

  @IsString({ message: "atributo 'bairro' dever ser um texto" })
  @MinLength(4, {
    message: "atributo 'bairro' dever possuir no minimo 4 caracteres",
  })
  district: string;

  @IsCEP({ message: "atributo 'cep' dever ser válido" })
  zipCode: string;

  @IsNumber({}, { message: "atributo 'número' dever ter menos de 7 digitos" })
  number: number;

  @IsString({ message: "atributo 'quadra' dever ter menos de 7 digitos" })
  @MaxLength(7, {
    message: "atributo 'quadra' dever possuir um máximo 7 digitos",
  })
  block: string;

  @IsString({ message: "atributo 'estado' dever ser válido" })
  @MinLength(4, {
    message: "atributo 'estado' dever possuir no minimo 4 digitos",
  })
  state: string;

  @IsString({ message: "atributo 'uf' dever ser um texto" })
  @MinLength(2, {
    message: "atributo 'estado' dever possuir no minimo 4 digitos",
  })
  uf?: string;

  @IsString({
    message:
      "atributo 'referência' dever ser válido com um minimo de 10 caracteres",
  })
  @MinLength(10, {
    message: "atributo 'estado' dever possuir no minimo 10 digitos",
  })
  reference?: string;

  @IsString({
    message:
      "atributo 'cidade' dever ser válido com um minimo de 10 caracteres",
  })
  @MinLength(3, {
    message: "atributo 'cidade' dever possuir no minimo 3 caracteres",
  })
  city?: string;
}
