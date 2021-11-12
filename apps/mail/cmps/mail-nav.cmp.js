import progressBar from './progress-bar.cmp.js';

export default {
    props: ['mails'],
    template: `
       <section class="mail-nav">
            <label>Search
            <input v-on:input="setFilterSub" v-model="filterBy.subject" type="text" placeholder="Search mail">
            </label>
            <nav>
            <button v-on:click="createNewMail">compose+</button>
            <button v-on:click="setMore('all')" v-bind:value="filterBy.moreFilter" type="button">inbox</button> |
            <button v-on:click="setMore('stared')" v-bind:value="filterBy.moreFilter" type="button">stared</button> |
            <button v-on:click="setMore('sent')" v-bind:value="filterBy.moreFilter" type="button">sent mail</button> |
            <button v-on:click="setMore('drafs')" v-bind:value="filterBy.moreFilter" type="button">drafts</button> 
            <progress-bar :mails="mails" ></progress-bar>
            </nav>

       </section>
    `,
    data() {
        return {
            filterBy: {
                subject: '',
                moreFilter: 'all'
            },
            // newMail: 'newMail',
            
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
        createNewMail() {
            console.log('create new mail')
            this.$emit('newMail');
        }
    },
    components:{
        progressBar
    }
};