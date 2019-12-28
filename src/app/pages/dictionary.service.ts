import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor() { }

  private definitions: {word: string, definition: string, link: string}[] = [
    {
      word: 'person',
      definition: '',
      link: '',
    }
  ];

}
