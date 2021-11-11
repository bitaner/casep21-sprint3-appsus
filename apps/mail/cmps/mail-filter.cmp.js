export default {
    template: `
        <div class="mail-filter">
            <label>Search</label>
            <input @input="filter" v-model="filterBy.subject" type="text" placeholder="Search mail">
            <select v-model="filterBy.moreFilter">
            <option value="all">ALL</option>
            <option value="read">Read</option>
            <option value="unread">Unread</option>
            <option value="stared">Stared</option>
        </select>          
        </div>
    `,
    data() {
        return {
            filterBy: {
                subject: '',
                moreFilter: 'all',
                
            }
        };
    },
    beforeMount(){
        this.filter()
    },
    methods: {
        filter() {
            console.log({ ...this.filterBy })
            this.$emit('filtered', { ...this.filterBy });
            //deep copy
            // this.$emit('filtered', JSON.parse(JSON.stringify(this.filterBy)));
        }
    }
}