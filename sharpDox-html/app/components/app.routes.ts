import { provideRouter, RouterConfig } from '@angular/router';

import {ArticleComponent} from './content/article.component';
import {NamespaceComponent} from './content/namespace.component';
import {TypeComponent} from './content/type.component';
import {CodeComponent} from './content/code.component';

const routes : RouterConfig = [
    { path:'', redirectTo: 'article/home', pathMatch: 'full' },
    { path:'article/:id', component: ArticleComponent },
    { path:'namespace/:id', component: NamespaceComponent },
    { path:'type/:id', component: TypeComponent },
    { path:'type/:id/:member', component: TypeComponent },
    { path:'code/:id', component: CodeComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];