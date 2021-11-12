import notePreview from './note-preview.cmp.js'

// check if emits neccesry

export default {
    props: ['notes'],
    template: `
        <ul class="note-list">
            <li v-for="note in notes" :key="note.id" class="note-preview-container" v-bind:style="{backgroundColor:color}">
                <note-preview :note="note"  @remove="removeNote" @edit="editNote" />
            </li>
        </ul>
    `,
    data() {
        return { color: null }
    },
    methods: {
        removeNote(noteId) {
            console.log('remove2', noteId)
            this.$emit('remove', noteId)
        },
        edit2(noteId) {
            console.log('edit2', noteId)
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
        },
        editNote(id) {
            console.log('editing note: ', id)
        }

    },
    components: {
        notePreview
    }
}