import keepApp from './apps/keep/keep-app.cmp.js'
import bookApp from './apps/book/book-app.cmp.js'
import mailApp from './apps/mail/mail-app.cmp.js'
import homePage from './pages/home-page.cmp.js'
import aboutPage from './pages/about-page.cmp.js'


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
        component: bookApp
    },

];

export const router = new VueRouter({ routes });