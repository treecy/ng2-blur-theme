import './app.loader.ts';
import {Component, ViewEncapsulation} from "@angular/core";
import {AppState} from "./app.state";
import {BaThemeConfigProvider, BaThemeConfig} from "./theme";
import {BaThemeRun} from "./theme/directives";
import {BaImageLoaderService, BaThemePreloader, BaThemeSpinner} from "./theme/services";
import {layoutPaths} from "./theme/theme.constants";

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'ng2-blur-theme',
  directives: [BaThemeRun],
  providers: [BaThemeConfigProvider, BaThemeConfig, BaImageLoaderService, BaThemeSpinner, AppState],
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./ng2-blur-theme.scss'],
  template: `
    <main baThemeRun>
      <div class="additional-bg"></div>
      <ng-content></ng-content>
    </main>
  `
})
export class ng2BlurThemeComponent { 

}

