import noteTxt from '/apps/keep/cmps/noteTypes/note-txt.cmp.js'
// import noteImg from 
// import noteTodos from 


// const noteTxt = {
//     props: ['note'],
//     template: `
//         <div class="row">
//             <p>
//                 {{this.note.info.txt}}
//                 <!-- <input type="text" v-model="txt"  /> -->
// </p>
//         </div>
//     `,
//     data() {
//         return {
//             txt: '',
//         };
//     },
//     methods: {
//         reportVal() {
//             this.$emit('setInput', this.txt);
//         }
//     }
// };

// const selectBox = {
//     props: ['data'],
//     template: `
//         <div class="row">
//             <label>
//                 {{data.label}}
//                 <select v-model="selectedOpt" @blur="reportVal">
//                     <option v-for="opt in data.opts">{{opt}}</option>
//                 </select>
//             </label>
//         </div>
//     `,
//     data() {
//         return {
//             selectedOpt: '',
//         };
//     },
//     methods: {
//         reportVal() {
//             this.$emit('setInput', this.selectedOpt);
//         }
//     }
// };
// const rangeBox = {
//     props: ['data'],
//     template: `
//         <div class="row">
//             <label>
//                 {{data.label}}
//                 <input type="number" v-model.number="range.min" /> -
//                 <input type="number" v-model.number="range.max" @blur="reportVal" />
//             </label>
//         </div>
//     `,
//     data() {
//         return {
//             range: { min: this.data.min, max: this.data.max }
//         };
//     },
//     methods: {
//         reportVal() {
//             this.$emit('setInput', this.range);
//         }
//     }
// };
// const dateBox = {
//     props: ['data'],
//     template: `
//         <div class="row">
//             <label>
//                 {{data.label}}
//                 <input type="date" v-model="date" @change="reportVal" /> -
//             </label>
//         </div>
//     `,
//     data() {
//         return {
//             date: new Date()
//         };
//     },
//     methods: {
//         reportVal() {
//             this.$emit('setInput', this.date);
//         }
//     }
// };

export default {
    props: ['note'],
    template: `
    <section v-if="note">
        <h1>note</h1>
            <div>
                <component 
                :note = "note"
                :is= "note.type"
                >
            </component>
        </div>

    </section> 
    `,
    data() {
        return {};
    },
    methods: {

    },
    created() {

    },
    computed: {

    },
    watch: {

    },
    components: {
        noteTxt
    }
};