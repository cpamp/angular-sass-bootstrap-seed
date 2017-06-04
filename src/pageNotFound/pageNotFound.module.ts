import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { PageNotFoundComponent } from "./pageNotFound.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    imports: [SharedModule, RouterModule],
    declarations: [PageNotFoundComponent]
})
export class PageNotFoundModule {
    public static Page: typeof PageNotFoundComponent = PageNotFoundComponent;
}