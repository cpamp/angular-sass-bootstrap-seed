import { Component } from '@angular/core';
import { AppConstantsProvider } from "../shared/providers/appConstants.provider";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: [ require('./app.component.scss') ]
})
export class AppComponent {
    public app: string;
    constructor(public appConstants: AppConstantsProvider) {
        this.app = JSON.stringify(appConstants.Application);
    }
}