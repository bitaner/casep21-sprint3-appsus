import noteTxt from './noteTypes/note-txt.cmp.js'
import noteImg from './noteTypes/note-img.cmp.js'
import noteTodos from './noteTypes/note-todos.cmp.js'

export default {
    props: ['note'],
    components: {
        noteTxt,
        noteImg,
        noteTodos
    },
    template: `
    <section v-if="note" class="note" v-bind:style="{backgroundColor:color}">
                <component :note = "note" :is= "note.type" class="dynamic-note"></component>
                    <button @click="remove(note.id)">🗑</button>
                    <button @click="edit(note.id)">✏</button>
                    <button @click="setBGC(note.id)">🎨</button>
                    <button @click="pin(note.id)">📌</button>
                    <button @click="mail(note.id)">📧</button>
                    <input ref="colorInput" type="color"  v-model="color" @change="setBGCinput(note.id)"  >
                    <!-- @change="setBGCinput(note.id, this.value)" -->
                    <!-- v-model="note.backgroundColor" -->
                    <!-- <router-link :to="'/note/'+note.id">Details</router-link> -->
                    <!-- <router-link :to="'/note/edit/'+note.id">Edit</router-link> -->
                
    </section> 
    `,
    data() {
        return { color: null };
    },
    methods: {
        remove(noteId) {
            console.log('remove', noteId)
            this.$emit('remove', noteId)
        },
        edit(noteId) {
            console.log('edit', noteId)
            this.$emit('edit', noteId)
        },
        setBGC(noteId) {
            // this.$emit('setBGC', noteId)
            console.log(noteId)
        },
        setBGCinput(noteId) {
            console.log(noteId, this.color)
        },
        mail(noteId) {
            console.log('mail ', noteId)
        },
        pin(noteId) {
            console.log('pin ', noteId)
        }
    },
    created() {

    },
    computed: {

    },
    watch: {

    },

};