import { Component } from "@angular/core";

import { AppConstantsProvider } from "../shared/providers/appConstants.provider";

@Component({
    templateUrl: './home.component.html',
    styles: [require('./home.component.scss')]
})
export class HomeComponent {
    private version: string;

    constructor(appConstants: AppConstantsProvider) {
        this.version = appConstants.Application.Version;
    }
}