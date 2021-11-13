import keepApp from './apps/keep/keep-app.cmp.js'
import bookApp from './apps/book/book-app.cmp.js'
import mailApp from './apps/mail/mail-app.cmp.js'
import homePage from './pages/home-page.cmp.js'
import aboutPage from './pages/about-page.cmp.js'
import bookDetails from './apps/book/pages/book-details.cmp.js';
import bookEdit from './apps/book/pages/book-edit.cmp.js';


const routes = [{
    path: '/',
    component: homePage
},
{
    path: '/about',
    component: aboutPage
},
{
    path: '/keep',
    component: keepApp
},
{
    path: '/mail',
    component: mailApp
},
{
    path: '/book',
    component: bookApp,
    children: [
        {
            path: '/book/edit/:bookId?',
            component: bookEdit
        },
        {
            path: '/book/:bookId',
            component: bookDetails
        },
    ],
},

];

export const router = new VueRouter({ routes });