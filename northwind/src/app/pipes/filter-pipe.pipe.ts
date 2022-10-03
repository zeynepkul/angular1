import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Todo[], filterText: string): Todo[] {
    filterText = filterText? filterText.toLocaleLowerCase():""
    return filterText?value.filter((t:Todo)=>t.title.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}

