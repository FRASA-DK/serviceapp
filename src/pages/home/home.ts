import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { FileTransfer } from '@ionic-native/file-transfer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
openLocalPdf() {
    const options: DocumentViewerOptions = {
      title: 'My PDF'
    }
    this.document.viewDocument('assets/test.pdf', 'application/pdf', options);
  }
 
  downloadAndOpenPdf() {
    let path = null;
 
    if (this.platform.is('ios')) {
      path = this.file.documentsDirectory;
    } else if (this.platform.is('android')) {
      path = this.file.dataDirectory;
    }
 
    const transfer = this.transfer.create();
    transfer.download('https://devdactic.com/html/5-simple-hacks-LBT.pdf', path + 'myfile.pdf').then(entry => {
      let url = entry.toURL();
      this.document.viewDocument(url, 'application/pdf', {});
    });
  }
}
}
