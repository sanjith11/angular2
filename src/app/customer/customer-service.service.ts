import { Injectable } from '@angular/core';

@Injectable()
export class CustomerServiceService {

  constructor() { }

getCustomers(){

return [{id:1,name:"san"},{id:2,name:"ran"}];

}

}
