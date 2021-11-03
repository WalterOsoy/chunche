import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/services/score.service';
//import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  contador: number = 0;
  nombre: string = "";

  chunche = {
    image: '',
    url: '',
    name: '',
    score: 0
  };
  submitted = false;

  constructor(private scoreService: ScoreService) { }


  ngOnInit(): void {
  }

  calificar(event: any){
    //console.log(event.path[0].id);
    this.contador= event.path[0].id[0];
    //console.log(this.contador);
    this.nombre= event.path[0].id.substring(1);
    //console.log(this.nombre + "HAHAHAHAS");

    for (let i = 0; i < 5; i++) {
      if (i<this.contador) {
       (<HTMLInputElement>document.getElementById((i+1)+this.nombre)).style.color="orange";
      }else{
        (<HTMLInputElement>document.getElementById((i+1)+this.nombre)).style.color="black";
      }
    }
  }

  mensaje(){
    alert("Gracias por puntuar este chunche!!! Usted nos dio " + this.contador + " estrellas!!!");
  }

  saveTutorial(): void {
    const data = {
      iamge: this.chunche.image,
      url: this.chunche.url,
      name: this.chunche.name,
      score: this.chunche.score
    };

    this.scoreService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }


}
