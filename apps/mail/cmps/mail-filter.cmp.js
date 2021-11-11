// export default {
//     template: `
//         <div class="mail-filter">
//             <label>Search</label>
//             <input @input="filter" v-model="filterBy.subject" type="text" placeholder="Search mail">        
//         </div>
//     `,
//     data() {
//         return {
//             filterBy: {
//                 subject: '',

//             }
//         };
//     },
//     methods: {
//         filter() {
//             console.log(this.filterBy)
//             this.$emit('filtered', { ...this.filterBy });
//             //deep copy
//             // this.$emit('filtered', JSON.parse(JSON.stringify(this.filterBy)));
//         }
//     }
// }