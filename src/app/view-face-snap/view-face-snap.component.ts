import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { faceSnapsSeervice } from '../services/face-snap.service';

@Component({
  selector: 'app-view-face-snap',
  templateUrl: './view-face-snap.component.html',
  styleUrls: ['./view-face-snap.component.scss']
})
export class ViewFaceSnapComponent implements OnInit {

  faceSnap! : FaceSnap;

  btnText! : string;

  constructor(private faceSnapsService: faceSnapsSeervice, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.btnText = "Snap";
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
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

}
