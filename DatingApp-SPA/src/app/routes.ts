// import { Route } from '@angular/compiler/src/core';

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
// import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '', // localhost:4200/{path}/
        runGuardsAndResolvers: 'always',
        // canActivate: [AuthGuard],
        children: [
            { path: 'resume', component: MemberListComponent },
            { path: 'certifications', component: MessagesComponent },
            { path: 'projects', component: ListsComponent }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
