export default {
    template: `
        <div class="car-filter">
            <label>
                Search:
                <input @input="filter" v-model="filterBy.vendor" type="text" placeholder="Search...">
            </label>
            <label>
                Max Speed:
                <input @input="filter" v-model="filterBy.maxSpeed" type="range" min="0" max="300" >
                {{filterBy.maxSpeed}}
            </label>
        </div>
    `,
    data() {
        return {
            filterBy: {
                vendor: '',
                maxSpeed : 300
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