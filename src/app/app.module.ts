import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";

// Components
import { AppComponent } from "./app.component";

// Modules
import { SharedModule, SHARED_PROVIDERS } from "../shared/shared.module";
import { HomeModule } from "../home/home.module";
import { PageNotFoundModule } from "../pageNotFound/pageNotFound.module";

const appRoutes: Routes = [
    { path: '', component: HomeModule.Page },

    { path: '**', component: PageNotFoundModule.Page }
]

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        PageNotFoundModule,
        HomeModule
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        SHARED_PROVIDERS
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }