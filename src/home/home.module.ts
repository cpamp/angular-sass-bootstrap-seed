import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home.component";
import { SharedModule, SHARED_PROVIDERS } from "../shared/shared.module";

@NgModule({
    imports: [SharedModule, RouterModule],
    declarations: [HomeComponent],
    providers: SHARED_PROVIDERS
})
export class HomeModule {
    public static Page: typeof HomeComponent = HomeComponent;
}