import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class CreateNoteDto {

 
  @IsString()
  @IsNotEmpty({message: 'Wrtite your note first'})
  note_text: string;
}
