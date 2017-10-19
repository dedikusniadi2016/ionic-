import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Api } from '../api/api';

@Injectable()
export class RestProvider {

  apiUrl = 'http://services.bisnis.com/bdg/category';

  constructor(public http: HttpClient, public api: Api) {
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

  getJabar() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/getjabar').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  getJabarHeadline() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/getjabarheadline').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getHeadline() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/getheadline').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  getHeadlinebaru() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/getheadlinebaru').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  getkabarnasionalheadline() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/getkabarnasionalheadline').subscribe(data => {
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
      this.http.get(this.apiUrl+'/getbisnis').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  getbisnisheadline() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl +'/getbisnisheadline').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }



  getWisata() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/getwisata').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  getwisataheadline() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/getwisataheadline').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  getOtomotif() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/getotomotif').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getotomotifheadline() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'getotomotifheadline').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  getGadget() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/getgadget').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getgadgetheadline() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/getgadgetheadline').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }



  getOlahraga() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/getolahraga').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getolahragaheadline() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'getolahragaheadline').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getFoto() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/getfoto').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getfoto2() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'getfoto2').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  getVideo() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/getvideo').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getvideoheadline() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'getvideoheadline').subscribe(data => {
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
