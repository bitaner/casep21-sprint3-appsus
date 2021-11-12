import noteTxt from './noteTypes/note-txt.cmp.js'
import noteImg from './noteTypes/note-img.cmp.js'
import noteTodos from './noteTypes/note-todos.cmp.js'
import { eventBus } from '../../../services/event-bus-service.js'

export default {
    props: ['note'],
    components: {
        noteTxt,
        noteImg,
        noteTodos
    },
    template: `
    <section v-if="note" class="note" v-bind:style="{backgroundColor:note.backgroundColor}">
                <component :note = "note" :is= "note.type" class="dynamic-note" @updateText="updateText"></component>
                    <button @click="remove(note.id)">🗑</button>
                    <button @click="edit(note.id)">✏</button>
                    <button @click="pin(note.id)">📌</button>
                    <button @click="mail(note.id)">📧</button>
                    <input ref="colorInput"  type="color"  v-model="color" @change="setBGCinput(note)"   >
    </section> 
    `,
    data() {
        return { color: null };
    },
    created() {

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
        updateText(note) {
            console.log('2', note)
            this.$emit('textEdit', note)
        },
        setBGCinput(note) {
            // console.log(this.note.backgroundColor)
            // console.log(note, this.color)
            this.note.backgroundColor = this.color
                // console.log('after ', this.note.backgroundColor)
            eventBus.$emit('setBGC', note)
        },
        mail(noteId) {
            console.log('mail ', noteId)
        },
        pin(noteId) {
            console.log('pin ', noteId)
        }
    },

    computed: {

    },
    watch: {

    },

};