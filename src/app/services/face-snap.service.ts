import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class faceSnapsSeervice {

    facesnaps: FaceSnap[] = [
        {
            id: 1,
            title:'MBOUDI LOVE', 
            desc: 'She is my heart, I really love her.', 
            imageUrl: 'assets/images/pm1.jpg', 
            created_at: new Date, 
            snaps: 200
        },
        {
            id: 2,
            title: 'Mboudi', 
            desc: 'My beautiful sweety girl ', 
            imageUrl:'assets/images/pm.jpg',
            created_at: new Date, 
            snaps: 0,
            location: 'Montbeliard'
        },
        {
            id: 3,
            title:'Peluche', 
            desc: 'A gift for her', 
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg', 
            created_at: new Date, 
            snaps: 200
        },
        {
            id: 4,
            title: 'Mboudi\'s meal', 
            desc: 'Oooh my baby loves eat really !!! haha but only in Montbeliard she eats lot ', 
            imageUrl:'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
            created_at: new Date, 
            snaps: 0,
            location: 'Montbeliard'
        },
        {
            id: 5,
            title: 'Mountain', 
            desc: 'She was at this moutain in Montpellier', 
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
            created_at: new Date, 
            snaps: 3,
            location: 'Montpellier'
        }
      ];

    
    getAllFaceSnaps(): FaceSnap[] {
        return this.facesnaps;
    }


    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.facesnaps.find(faceSnap => faceSnap.id === faceSnapId);

        if (!faceSnap) {
            throw new Error('FaceSnap not found');
        } else {
            return faceSnap;
        }
    }

    
    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);

        snapType == 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }

    addFaceSnap(formValue: {title:string, desc: string, imageUrl: string, location?: string}): void {
        const faceSnap: FaceSnap = {
            ...formValue,
            created_at: new Date(),
            snaps: 0,
            id: this.facesnaps[this.facesnaps.length - 1].id + 1
        };

        this.facesnaps.push(faceSnap);
    }
}