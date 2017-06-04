import { Injectable } from "@angular/core";

@Injectable()
export class AppConstantsProvider {
    public readonly Application: IApplication;

    constructor() {
        var appPackage = require("../../../package.json");
        this.Application = {
            Name: appPackage.name,
            Version: appPackage.version
        }
    }
}

export interface IApplication {
    readonly Name: string;
    readonly Version: string;
}