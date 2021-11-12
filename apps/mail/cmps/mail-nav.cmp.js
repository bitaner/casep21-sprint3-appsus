import progressBar from './progress-bar.cmp.js';

export default {
    props: ['mails'],
    template: `
       <section class="mail-nav">
            <label>
            <input v-on:input="setFilterSub" v-model="filterBy.subject" type="text" placeholder="Search mail">
            </label>
            <progress-bar :mails="mails" ></progress-bar>
            <nav>
            <button v-on:click="createNewMail" class="compuse">Compose <i class="fas fa-plus"></i></button>
            <button v-on:click="setMore('all')" v-bind:value="filterBy.moreFilter" v-bind:class="curMails('all')" type="button">Inbox <i class="fas fa-inbox"></i></button> |
            <button v-on:click="setMore('stared')" v-bind:value="filterBy.moreFilter"  v-bind:class="curMails('stared')" type="button">Stared <i class="far fa-star"></i></button> |
            <button v-on:click="setMore('sent')" v-bind:value="filterBy.moreFilter"  v-bind:class="curMails('sent')" type="button">Sent <i class="far fa-paper-plane"></i></button> |
            <button v-on:click="setMore('drafs')" v-bind:value="filterBy.moreFilter"  v-bind:class="curMails('drafts')" type="button">Drafts <i class="fas fa-pencil-ruler"></i></button> 
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
        },
        curMails(value){
            if (value === this.filterBy.moreFilter){
                return 'activeMails'
            }
        }
    },
    components:{
        progressBar
    }
};