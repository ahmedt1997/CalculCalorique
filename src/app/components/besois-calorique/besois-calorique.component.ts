import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-besois-calorique',
  templateUrl: './besois-calorique.component.html',
  styleUrls: ['./besois-calorique.component.css']
})
export class BesoisCaloriqueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public selected:string="";
  public selected2:string="";
  public Resultat:number;


  /*La methode pour recuperer le contenu du sex */

  Selectionner(event:any){
    this.selected=event.target.value;
    console.log(typeof this.selected);
  }

  /*La methode pour recuperer le contenu des activite*/

  Selectionner2(event:any){
    this.selected2=event.target.value;
    console.log(this.selected2);
  }


  /*il faut la minimiser cette fonction un peu*/
  Calculer(poids:number , taille:number , age:number){
    if (this.selected =='Homme'){
      this.Resultat=13.7516*poids+500.33*(taille/100)-6.7550*age+ 66.473;

      if(this.selected2 =='sédentaire'){
         this.Resultat=this.Resultat*1.375
      }
      else if(this.selected2 =='activité physique légère'){
        this.Resultat=this.Resultat*1.56
      }
      else if (this.selected2 =='activité physique modérée'){
        this.Resultat=this.Resultat*1.64
      }
      else if (this.selected2 =='activité physique intense'){
        this.Resultat=this.Resultat*1.82
      }
    }
    else if (this.selected == 'Femme') {
      this.Resultat=9.5634*poids+184.96 *(taille/100)-4.6756*age + 655.0955;
      if(this.selected2 =='sédentaire'){
        this.Resultat=this.Resultat*1.375
      }
      else if(this.selected2 =='activité physique légère'){
        this.Resultat=this.Resultat*1.56
      }
      else if (this.selected2 =='activité physique modérée'){
        this.Resultat=this.Resultat*1.64
      }
      else if (this.selected2 =='activité physique intense'){
        this.Resultat=this.Resultat*1.82
      }
    }
    console.log(this.Resultat);
  }



}
