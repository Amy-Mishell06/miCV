import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonChip,
  IonIcon, IonLabel, IonCard, IonCardHeader, IonCardTitle,
  IonCardContent, IonList, IonItem
} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonChip,
    IonIcon, IonLabel, IonCard, IonCardHeader, IonCardTitle,
    IonCardContent, IonList, IonItem
  ],
})
export class Tab1Page {}