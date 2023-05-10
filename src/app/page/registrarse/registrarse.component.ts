
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { filter, map, Subscription } from 'rxjs';
@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {
  uploadedFiles : any[] = [];
  cantidadDeArchivos : number = 0;
  condicionFiscal: string = "DNI"
  nombre? : string;
  countries: City[];
  selectedCountries!: City[];
  filterValue = '';
  codPais!:countries;
  placeHolder:any;
  filtroPaises!:City;
  arrayFiltroPaises:any[]=[];
  registroForm = new FormGroup({
    'nombreCtrl': new FormControl(this.nombre,[Validators.required, Validators.minLength(4)])
  });

  constructor(private http: HttpClient) {
    
    this.countries = [
      {name: 'New York', code: 'NY'},
  ];
    }

  async ngOnInit() {
    /* this._userInfoService.getUserInfo().subscribe({
      next : res=>{
        console.log(res);
        this.userInfo = res;
      },
      error : err=>console.log(err)
    }) */
    await this.http.get("../../assets/conpais.json").pipe(
      map(value => {
        return JSON.stringify(value)
      }),
      map(value => {
        return JSON.parse(value) }),
      map(value => {
        return value.countries;
      }),
    ).subscribe({
      next : res=>{
        res.forEach((pais: { name_es: any; dial_code: any; }) => {
          this.filtroPaises = {
          name:pais.name_es,
          code: pais.dial_code
        }
        this.arrayFiltroPaises.push(this.filtroPaises)
        });
        console.log(this.arrayFiltroPaises)
      },
      error : err=>console.log(err)
    })
  }

  cargarArchivos(event : any) {
    for(let file of event.target.files) {
      this.uploadedFiles.push(file);
      this.cantidadDeArchivos++
    }
  }
  
  mostrarArchivosCargados(){
    console.log(this.uploadedFiles)
  }

  asignarCondicionFiscal(value: string){
    this.condicionFiscal = value;
  }
}

interface City {
  name: string,
  code: string
}

interface countries {
  capital_en: string,
  capital_es: string,
  code_2:string,
  code_3:string,
  continent_en:string,
  continent_es:string,
  dial_code:string,
  name_en:string,
  name_es:string,
  tld:string
}