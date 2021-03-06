import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestProvider {

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


getheadlinesecond() {
  return new Promise(resolve => {
    this.http.get(this.apiUrl + '/getheadlinesecond').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}


  getheadlinethree() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/getheadlinethree').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getheadlinefour() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/getheadlinefour').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getheadlinefive() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/getheadlinefive').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  getheadlinesix() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/getheadlinesix').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getheadlineseven(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/getheadlineseven').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  getheadlineeight() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/getheadlineeight').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getheadlinenine() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/getheadlinenine').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getheadlineten() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/getheadlineten').subscribe(data => {
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
      this.http.get(this.apiUrl + '/getotomotifheadline').subscribe(data => {
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
      this.http.get(this.apiUrl + '/getolahragaheadline').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getfotoheadline() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/getfotoheadline').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    })
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
      this.http.get(this.apiUrl + '/getfoto2').subscribe(data => {
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
      this.http.get(this.apiUrl + '/getvideoheadline').subscribe(data => {
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
