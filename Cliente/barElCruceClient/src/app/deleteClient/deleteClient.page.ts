import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-deleteClient',
  templateUrl: 'deleteClient.page.html',
  styleUrls: ['deleteClient.page.scss']
})

export class deleteClientPage {

  dniText: string;
  nombreText: string;
  deudaText: string;
  dniTextValue: string
  constructor(public http: HttpClient, private AlertController: AlertController) {
    this.dniText = "50";
  }
  async presentAlert() {
    const alert = await this.AlertController.create({
      header: 'Alerta',

      message: 'Introduzca un cliente existente',
      buttons: ['OK']
    });

    await alert.present();
  }
  onSubmit() {
    document.getElementById("beforeDelete").style.display = "none";
    document.getElementById("deleteInfo").style.display = "block";
    this.http.get("http://localhost:8080/consultaCliente/" + this.dniTextValue).subscribe((res: JSON) => {

      this.nombreText = res["nombre"]
      this.deudaText = res["deuda"]
      this.dniText = res["dni"]
    }, err => {
      this.presentAlert();
      document.getElementById("deleteInfo").style.display = "none";
      document.getElementById("beforeDelete").style.display = "block";
    });
  }
  cancel() {
    document.getElementById("deleteInfo").style.display = "none";
    document.getElementById("beforeDelete").style.display = "block";
    this.dniTextValue = ""

  }
  delete() {
    this.http.delete("http://localhost:8080/eliminarCliente/" + this.dniTextValue).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });;
    document.getElementById("deleteInfo").style.display = "none";
    document.getElementById("beforeDelete").style.display = "block";
    this.dniTextValue = ""
  }


}
