export default {
    template: `
        <header class="app-header">
            <div class="logo">
                <router-link class="link" to="/" active-class="active-link" exact><i class="far fa-lightbulb"></i>APPSUS</router-link> |
            </div>
            <nav>
                <router-link class="link" to="/" active-class="active-link" exact>Home</router-link> |
                <router-link class="link" to="/book">books</router-link> |
                <router-link class="link" to="/mail">Mail</router-link> |
                <router-link class="link" to="/keep">Keep</router-link> |
                <router-link class="link" to="/about">About</router-link> |
            </nav>
        </header>
    `,
}