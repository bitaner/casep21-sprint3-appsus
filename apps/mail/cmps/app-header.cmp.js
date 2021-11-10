export default {
    template: `
        <header class="app-header">
            <div class="logo">
                <router-link class="link" to="/" active-class="active-link" exact>mails</router-link> |
            </div>
            <nav>
                <router-link class="link" to="/" active-class="active-link" exact>Home</router-link> |
                <router-link class="link" to="/mail">mails</router-link> |
                <router-link class="link" to="/about">About</router-link>
            </nav>
        </header>
    `,
}