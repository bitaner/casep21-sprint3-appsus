export default {
    props: ['mails'],
    template: `
       <section class="mail-nav">
            <label>Search
            <input v-on:input="setFilterSub" v-model="filterBy.subject" type="text" placeholder="Search mail">
            </label>
            <nav>
            <button v-on:click="creatNewMail">compose+</button>
            <button v-on:click="setMore('all')" v-bind:value="filterBy.moreFilter" type="button">inbox</button> |
            <button v-on:click="setMore('stared')" v-bind:value="filterBy.moreFilter" type="button">stared</button> |
            <button v-on:click="setMore('sent')" v-bind:value="filterBy.moreFilter" type="button">sent mail</button> |
            <button v-on:click="setMore('drafs')" v-bind:value="filterBy.moreFilter" type="button">drafts</button> 
            </nav>

       </section>
    `,
    data() {
        return {
            filterBy: {
                subject: '',
                moreFilter: 'all'
            },
            
        };
    },
    beforeMount() {
        this.filter()
    },
    methods: {
        setFilterSub(){
            console.log(this.filterBy.subject)
            this.filter()
        },
        setMore(value) {
            this.filterBy.moreFilter = value
            console.log(value)
            this.filter()
        },
        filter(){
            this.$emit('filtered', { ...this.filterBy });
            //deep copy
            // this.$emit('filtered', JSON.parse(JSON.stringify(this.filterBy)));
        },
        creatNewMail() {
            console.log('creat new mail')
        }
    }
};