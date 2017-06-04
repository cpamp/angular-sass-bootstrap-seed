import { NgModule } from "@angular/core";

import { HeadingComponent } from "./components/heading/heading.component";

const components = [
    HeadingComponent
]

import { AppConstantsProvider } from "./providers/appConstants.provider";

const services = [
    AppConstantsProvider
]

@NgModule({
    declarations: components,
    providers: services,
    exports: components
})
export class SharedModule { }

export const SHARED_PROVIDERS = services;