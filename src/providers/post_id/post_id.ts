import { Injectable } from '@angular/core';
import { Api } from '../api/api';

@Injectable()
export class Post_id {

   users: any;
   defaultItem: any;

   constructor(public api: Api) {

   }

  query(params?: any) {
    return this.api.get('/post_id', params);
  }


}
