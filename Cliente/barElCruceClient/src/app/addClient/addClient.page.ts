import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-addClient',
  templateUrl: 'addClient.page.html',
  styleUrls: ['addClient.page.scss']
})
export class addClientPage {

  constructor(public http: HttpClient, private AlertController: AlertController) {


  }
  dniTextValue: string = "";
  nombreTextValue: string = "";
  deudaTextValue: number = null;
  async presentAlert() {
    const alert = await this.AlertController.create({
      header: 'Alerta',

      message: 'Rellene todos los datos por favor.',
      buttons: ['OK']
    });

    await alert.present();
  }
  onSubmit() {

    if (this.deudaTextValue == null || this.nombreTextValue == "" || this.dniTextValue == "") {
      this.presentAlert();
    } else {
      this.addClient(this.deudaTextValue, this.nombreTextValue, this.dniTextValue);
    }

  }
  addClient(auxDeuda: number, auxNombre: string, auxDni: string) {
    var deuda: string;
    deuda = auxDeuda.toString();
    let postData = {
      "dni": auxDni,
      "nombre": auxNombre,
      "deuda": deuda
    }


    this.http.post("http://localhost:8080/addClient", null, { params: postData })
      .subscribe((Response) => {
        
        console.log(Response)
          ;


      }, err => {

      });
  }
}
export class Clientes {
  dni_cliente: String
  nombre_cliente: String
  deuda_cliente: number

}
