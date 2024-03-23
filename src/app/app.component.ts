import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private translateService: TranslateService) {
    const userLang = navigator.language || "fr";
    const userLangCode = userLang.split("-")[0];
    translateService.setDefaultLang(userLangCode);
    translateService.use(userLangCode);
  }
}
