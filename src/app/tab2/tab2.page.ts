import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonCard,
  IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,
  IonBadge, IonChip, IonList, IonItem, IonLabel
} from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonCard,
    IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,
    IonBadge, IonChip, IonList, IonItem, IonLabel
  ],
})
export class Tab2Page {}