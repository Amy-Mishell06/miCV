import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  personOutline, schoolOutline, codeSlashOutline, sparklesOutline,
  informationCircleOutline, locationOutline, callOutline, mailOutline,
  searchOutline, folderOpenOutline, ribbonOutline, logoHtml5, logoCss3,
  logoJavascript, logoReact, logoPython, serverOutline, barChartOutline,
  gridOutline, cubeOutline, syncOutline, heartOutline, languageOutline,
  chatbubblesOutline, logoWhatsapp, logoLinkedin, logoGithub, globeOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({
      personOutline, schoolOutline, codeSlashOutline, sparklesOutline,
      informationCircleOutline, locationOutline, callOutline, mailOutline,
      searchOutline, folderOpenOutline, ribbonOutline, logoHtml5, logoCss3,
      logoJavascript, logoReact, logoPython, serverOutline, barChartOutline,
      gridOutline, cubeOutline, syncOutline, heartOutline, languageOutline,
      chatbubblesOutline, logoWhatsapp, logoLinkedin, logoGithub, globeOutline
    });
  }
}