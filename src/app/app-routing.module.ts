import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./presentation/layout/layout.component";
import { MovieDetailsComponent } from "./presentation/movie-details/movie-details.component";
import { MovieListComponent } from "./presentation/movie-list/movie-list.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        { useHash: true, onSameUrlNavigation: 'reload' })],
    exports: [RouterModule]
})


export class AppRoutingModule { }