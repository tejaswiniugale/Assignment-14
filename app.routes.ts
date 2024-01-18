import { RouterModule, Routes } from '@angular/router';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BookComponent } from './book/book.component';
import { NgModule } from '@angular/core';
import { WrongChoiceComponent } from './wrong-choice/wrong-choice.component';
export const routes: Routes = [
    {path: 'technologies', component: TechnologiesComponent},
    {path: 'book', component: BookComponent},
    {path: 'wrong-choice', component: WrongChoiceComponent},
    {path: '', redirectTo: '/technologies', pathMatch: 'full'},
    {path: '**',redirectTo: '/wrong-choice'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}