import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestProvider {

  retry: any;

  apiUrl = 'http://services.bisnis.com/bdg/category';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/getjabar').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getNasional() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/getkabarnasional').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getBisnis() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'getbisnis').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getWisata() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'getwisata').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  getOtomotif() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'getotomotif').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getGadget() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'getgadget').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  getOlahraga() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'getolahraga').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getFoto() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'getfoto').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  getVideo() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'getvideo').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/getjabar', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
