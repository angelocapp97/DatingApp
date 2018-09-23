import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberListComponent } from './member-list/member-list.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MemberListComponent, canActivate: [AuthGuard] },
            { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard] },
            { path: 'lists', component: ListsComponent, canActivate: [AuthGuard] }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];