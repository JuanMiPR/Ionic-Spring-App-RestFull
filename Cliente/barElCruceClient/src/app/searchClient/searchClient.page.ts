import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-searchClient',
  templateUrl: 'searchClient.page.html',
  styleUrls: ['searchClient.page.scss']
})
export class searchClientPage {

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
    document.getElementById("beforeSearch").style.display = "none";
    document.getElementById("searchInfo").style.display = "block";
    this.http.get("http://localhost:8080/consultaCliente/" + this.dniTextValue).subscribe((res: JSON) => {

      this.nombreText = res["nombre"]
      this.deudaText = res["deuda"]
      this.dniText = res["dni"]
    }, err => {
      this.presentAlert();
      document.getElementById("searchInfo").style.display = "none";
      document.getElementById("beforeSearch").style.display = "block";
    });
  }
  searchOther() {
    document.getElementById("searchInfo").style.display = "none";
    document.getElementById("beforeSearch").style.display = "block";
    this.dniTextValue = ""

  }
  

}
