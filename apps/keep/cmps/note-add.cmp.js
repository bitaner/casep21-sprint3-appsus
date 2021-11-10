import { noteService } from '../services/note-service.js';


export default {
    template: `
    <div class="note-add">
            <label for="types">Add note</label>
            <select name="types" id="types" v-model="newNoteType" @change="reportType" >
                <option value="" disabled selected>Select type</option>   
                <option value="note-txt">Text</option>
                <option value="note-img">Image</option>
                <option value="note-todos">To-do</option>
                <option value="note-vid">Video</option>
            </select>
            <section v-if=newNoteType class="create-note">
                <button @click="closeNewNote">X</button>
                <h2>new note section!</h2>
                {{newNoteType}}
                <!-- <component :newNoteType = "noteType" :is= "noteType" ></component> -->
            </section>
    </div>
    
    `,
    data() {
        return {
            noteToAdd: null,
            newNoteType: null,

        };
    },
    methods: {
        addNote() {
            var noteToAdd = this.newNote
            noteService.addNote(noteToAdd)
                .then((note) => { this.$emit('noteToAdd', note) })
        },
        reportType() {
            console.log(this.newNoteType)
        },
        closeNewNote() {
            this.newNoteType = null
        }
    },


}