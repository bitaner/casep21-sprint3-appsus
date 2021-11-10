import notePreview from '/apps/keep/cmps/note-preview.cmp.js'

export default {
    props: ['notes'],
    template: `
        <ul class="note-list">
            <li v-for="note in notes" :key="note.id" class="note-preview-container" >
                <note-preview :note="note"/>
                <div class="actions">
                    <button @click="remove(note.id)">X</button>
                    <button @click="edit(note.id)">✏</button>
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
        log() {
            console.log('Logging.....')
        }
    },
    components: {
        notePreview
    }
};