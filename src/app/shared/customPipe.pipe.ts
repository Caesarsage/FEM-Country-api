import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'customPipe'
})
export class CustomPipe implements PipeTransform{
    transform(value:string,character:string):string {
        return value.replace(character, ' '); //replace the character(,) to space
    }
}
