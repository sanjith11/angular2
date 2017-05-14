import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'notefilter',
    pure: false
})
export class NoteFilter implements PipeTransform {
    transform(items: INote[], filter: string): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item => item.noteText.indexOf(filter) !== -1);
    }
}