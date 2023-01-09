import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor() { }
  getChars(){
    return [
        {
        name:"goku",
        planet:"earth",
    },
    {
        name:"vegeta",
        planet:"vegeta",
    },

]
}
}
