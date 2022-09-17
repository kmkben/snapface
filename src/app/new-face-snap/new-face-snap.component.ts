import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';
import { faceSnapsSeervice } from '../services/face-snap.service';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {

  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;

  //urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

  constructor(private formBuilder: FormBuilder, 
              private faceSnapsService: faceSnapsSeervice,
              private router: Router) { }

  ngOnInit(): void {
    this.snapForm = this.formBuilder.group({
      title: [null, Validators.required],
      desc: [null, Validators.required],
      imageUrl: [null, Validators.required], 
      location: [null]
    },
    {
      updateOn: 'blur'
    });

    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        created_at: new Date(),
        id: 0,
        snaps: 0
      }))
    );
  }

  onSubmitForm(): void {
    //console.log(this.snapForm.value);

    this.faceSnapsService.addFaceSnap(this.snapForm.value);
    this.router.navigateByUrl('/facesnaps');
  }

}
