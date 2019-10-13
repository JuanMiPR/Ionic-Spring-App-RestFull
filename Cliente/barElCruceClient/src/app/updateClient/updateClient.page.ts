import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-updateClient',
  templateUrl: 'updateClient.page.html',
  styleUrls: ['updateClient.page.scss']
})
export class updateClientPage {

  dniText: string;
  nombreText: string;
  deudaText: string;
  dniTextValue: string
  nuevoDniTextValue: string
  nuevoNombreTextValue: string
  nuevaDeudaTextValue: number

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
    document.getElementById("beforeUpdate").style.display = "none";
    document.getElementById("updateInfo").style.display = "block";
    this.http.get("http://localhost:8080/consultaCliente/" + this.dniTextValue).subscribe((res: JSON) => {
      this.nombreText = res["nombre"]
      this.deudaText = res["deuda"]
      this.dniText = res["dni"]
    }, err => {
      this.presentAlert();
      document.getElementById("updateInfo").style.display = "none";
      document.getElementById("beforeUpdate").style.display = "block";
    });
  }
  cancel() {
    document.getElementById("updateInfo").style.display = "none";
    document.getElementById("beforeUpdate").style.display = "block";
    this.dniTextValue = ""
    this.nuevoDniTextValue = ""
    this.nuevoNombreTextValue = ""
    this.nuevaDeudaTextValue = 0

  }
  update() {

    let putData = {
      "dni": this.nuevoDniTextValue,
      "nombre": this.nuevoNombreTextValue,
      "deuda": this.nuevaDeudaTextValue.toString()
    }
    this.http.put("http://localhost:8080/actualizarCliente/" + this.dniText, null, { params: putData }).subscribe((Response) => {
      this.nuevoDniTextValue = ""
      this.nuevoNombreTextValue = ""
      this.nuevaDeudaTextValue = 0
      console.log(Response)
        ;


    }, err => {
      this.nuevoDniTextValue = ""
      this.nuevoNombreTextValue = ""
      this.nuevaDeudaTextValue = 0
      console.log(err)
      this.presentAlert();
      document.getElementById("updateInfo").style.display = "none";
      document.getElementById("beforeUpdate").style.display = "block";

    });
    document.getElementById("updateInfo").style.display = "none";
    document.getElementById("beforeUpdate").style.display = "block";
    this.dniTextValue = ""
  }

}
