import notePreview from './note-preview.cmp.js'

export default {
    props: ['notes'],
    template: `
        <ul class="note-list">
            <li v-for="note in notes" :key="note.id" class="note-preview-container" >
                <note-preview :note="note"/>
                <div class="actions">
                    <button @click="remove(note.id)">X</button>
                    <button @click="edit(note.id)">✏</button>
                    <button @click="setBGC(note.id)">🎨</button>
                    <input type="color" @change="setBGCinput(note.id)">

                    <!-- <router-link :to="'/note/'+note.id">Details</router-link> -->
                    <!-- <router-link :to="'/note/edit/'+note.id">Edit</router-link> -->
                </div>
            </li>
        </ul>
    `,
    methods: {
        remove(noteId) {
            this.$emit('remove', noteId)
        },
        edit(noteId) {
            this.$emit('edit', noteId)
        },
        setBGC(noteId) {
            // this.$emit('setBGC', noteId)
            console.log(noteId)
        },
        setBGCinput(noteId, value) {
            console.log(noteId, value)
        }
    },
    components: {
        notePreview
    }
};