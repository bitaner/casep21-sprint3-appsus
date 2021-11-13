import noteTxt from './noteTypes/note-txt.cmp.js'
import noteImg from './noteTypes/note-img.cmp.js'
import noteVid from './noteTypes/note-video.cmp.js'
import noteTodos from './noteTypes/note-todos.cmp.js'
import { eventBus } from '../../../services/event-bus-service.js'

// fix- pin , mail 

export default {
    props: ['note'],
    components: {
        noteTxt,
        noteImg,
        noteTodos,
        noteVid
    },
    template: `
    <section v-if="note" class="note" v-bind:style="{backgroundColor:note.backgroundColor}">
        <span v-bind:class="togglePinnedClass" class="note-pin"><i class="fas fa-map-pin"></i></span>
        <component :note = "note" :is= "note.type" class="dynamic-note" @updateText="updateText"></component>
        <section class="note-btns-container">
            <button @click="remove(note.id)" class="note-btn" title="Delete"><i class="fas fa-trash-alt"></i></button>
            <button @click="duplicate()" class="note-btn" title="Duplicate"><i class="fas fa-copy"></i></button>
            <button @click="pin(note)" class="note-btn" title="Pin"><i class="fas fa-thumbtack"></i></button>
            <button @click="mail(note.id)" class="note-btn" title="send as E-mail"><i class="fas fa-paper-plane"></i>

</button>
            <input ref="colorInput"  type="color"  v-model="color" @change="setBGCinput(note)" class="note-btn note-color" title="Set note color" >
        </section>
    </section> 
    `,
    data() {
        return {
            color: null,
            isPinned: null

        }
    },
    created() {
        this.isPinned = this.note.isPinned
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
            eventBus.$emit('noteUpdate', note)
        },
        setBGCinput(note) {
            // console.log(this.note.backgroundColor)
            // console.log(note, this.color)
            this.note.backgroundColor = this.color
                // console.log('after ', this.note.backgroundColor)
            eventBus.$emit('noteUpdate', note)
        },
        mail(noteId) {
            console.log('mail ', noteId)
        },
        pin(note) {
            console.log('pin ', note)
            this.note.isPinned = !this.note.isPinned
            eventBus.$emit('noteUpdate', note)
        },
        duplicate() {
            eventBus.$emit('duplicate', this.note)

        }
    },

    computed: {
        togglePinnedClass() {
            if (!this.isPinned) return 'hide'
            return ''
        }
    },

}