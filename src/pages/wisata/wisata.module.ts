import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WisataPage } from './wisata';

@NgModule({
  declarations: [
    WisataPage,
  ],
  imports: [
    IonicPageModule.forChild(WisataPage),
  ],
})
export class WisataPageModule {}
