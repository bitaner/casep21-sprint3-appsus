export default {
    template: `
        <header class="app-header">
            <div class="logo">APPSUS
                <!-- <router-link class="link" to="/" active-class="active-link" exact>APPSUS</router-link> | -->
            </div>
            <nav>
                <!-- <router-link class="link" to="/" active-class="active-link" exact>Home</router-link> | -->
                <router-link class="link" to="/note">notes</router-link> |
                <router-link class="link" to="/about">About</router-link>
            </nav>
        </header>
    `,
}