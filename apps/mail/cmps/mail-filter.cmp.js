export default {
    template: `
        <div class="mail-filter">
            <label>Search</label>
            <input @input="filter" v-model="filterBy.subject" type="text" placeholder="Search mail">
            <select >
            <option value="all">ALL</option>
            <option value="read">Read</option>
            <option value="unread">Unread</option>
            <option value="unread">Stared</option>
        </select>          
        </div>
    `,
    data() {
        return {
            filterBy: {
                subject: '',
                
            }
        };
    },
    methods: {
        filter() {
            this.$emit('filtered', { ...this.filterBy });
            //deep copy
            // this.$emit('filtered', JSON.parse(JSON.stringify(this.filterBy)));
        }
    }
}