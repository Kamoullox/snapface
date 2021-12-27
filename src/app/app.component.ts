import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = [
      {
        title: 'Archibald',
        description: "Mon meilleur ami depuis tout petit !",
        imageUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
        createdDate: new Date(),
        snaps: 0,
        location: 'Paris'
      },

      {
        title: "Trio Légendaire !",
        description: "Personnages principals de Harry potter",
        imageUrl: "https://img.filmsactu.net/datas/films/h/a/harry-potter-et-les-reliques-de-la-mort-partie-2/xl/harry-potter-et-les-reliques-de-la-mort-partie-2-61c2ef691296c.jpg",
        createdDate: new Date(),
        snaps: 125,
        location: 'Poudlard'
      },

      {
        title: "Sylvain Duriff",
        description: "Le monarque cosmique !",
        imageUrl: "https://blobsvc.wort.lu/picture/f7ea4fe76f388eb367037d1f6e21e671/800/800/crop/0/109/440/357/wortv3/edd7ee043660c9283a832bb1c4257e6c4e8fffa0",
        createdDate: new Date(),
        snaps: 0
      }

    ]
  }
}
