import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { faceSnapsSeervice } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  facesnaps!: FaceSnap[];

  constructor(private faceSnapsService: faceSnapsSeervice, private router:Router) {}

  ngOnInit(): void {

    this.facesnaps = this.faceSnapsService.getAllFaceSnaps();
  }

  onAddNewFaceSnap(): void {
    this.router.navigateByUrl('/create');
  }

}
