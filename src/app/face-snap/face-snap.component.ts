import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { faceSnapsSeervice } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap! : FaceSnap;

  btnText! : string;

  constructor(private faceSnapsService: faceSnapsSeervice, private router: Router){}

  ngOnInit(): void {
    this.btnText = "Snap";
  }

  onSnap() {
    if (this.btnText == "Snap") {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.btnText = "Unsnap";
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.btnText = "Snap";
    }
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${ this.faceSnap.id }`);
  }


  
}
