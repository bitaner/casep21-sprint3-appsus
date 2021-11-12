// problem with search txt 

export default {

    template: `
        <div class="note-filter">
            <label>Search</label>
            <input @input="filter" v-model="filterText" type="text" placeholder="Search...">
            <label for="types">filter notes</label>
            <select name="types" id="types" v-model="NoteType" @change="reportType" >
                <option value="" >All</option>   
                <option value="note-txt">Text</option>
                <option value="note-img">Image</option>
                <option value="note-todos">To-do</option>
                <option value="note-vid">Video</option>
            </select>
        </div>
    `,
    data() {
        return {
            NoteType: null,
            filterText: null
        }
    },
    methods: {
        reportType() {
            // console.log(this.NoteType)
            this.$emit('noteType', this.NoteType)
        },
        filter() {
            // console.log(this.filterText)
            this.$emit('filterText', this.filterText)
        }
    }
}