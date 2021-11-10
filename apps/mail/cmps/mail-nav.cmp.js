export default {
    props: ['mails'],
    template: `
       <section class="mail-nav">
            <nav>
            <button>compose+</button>
            <router-link class="link" to="/inbox">inbox</router-link> |
            <router-link class="link" to="/inbox/stared">stared</router-link> |
            <router-link class="link" to="/sent">sent mail</router-link> |
            <router-link class="link" to="/drafts">drafts</router-link> |
            </nav>

       </section>
    `,
    methods: {

    },
    components: {

    }
};