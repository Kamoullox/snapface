import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  allreadySnap!: boolean;

  ngOnInit(): void {
    this.allreadySnap = false;
  }

  onAddSnap() {
    if (!this.allreadySnap) {
      this.allreadySnap = true;
      this.faceSnap.snaps++;
    }
    else {
      this.allreadySnap = false;
      this.faceSnap.snaps--;
    }
  }

}
