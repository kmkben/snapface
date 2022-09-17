import { NgModule } from "@angular/core";   
import { Route, RouterModule, Routes } from "@angular/router";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { NewFaceSnapComponent } from "./new-face-snap/new-face-snap.component";
import { ViewFaceSnapComponent } from "./view-face-snap/view-face-snap.component";

const routes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'facesnaps',  component: FaceSnapListComponent},
    { path: 'facesnaps/:id', component: ViewFaceSnapComponent},
    { path: 'create', component: NewFaceSnapComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}