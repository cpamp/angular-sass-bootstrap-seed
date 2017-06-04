import "./shared/styles/external.scss";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic().bootstrapModule(AppModule);
