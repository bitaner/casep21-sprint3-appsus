import { noteService } from '/apps/keep/services/note-service.js'
import noteFilter from '/apps/keep/cmps/note-filter.cmp.js'
import noteAdd from '/apps/keep/cmps/note-add.cmp.js'
import noteList from '/apps/keep/cmps/note-list.cmp.js'
import { eventBus } from '/services/event-bus-service.js'


export default {
    components: {
        noteList,
        noteFilter,
        noteAdd
    },
    template: `
        <section class="note-app app-main">
            <h1>notes</h1>
        <note-filter @filtered="setFilter"></note-filter>
        <note-add @noteToAdd="loadNotes"></note-add>
        <note-list :notes="notesToShow"  @remove="removeNote" @edit="editNote" class="notes-gallery"></note-list>
        </section>
    `,
    data() {
        return {
            notes: null,
            selectedNote: null,
            filterBy: null
        }
    },
    created() {
        this.loadNotes()
    },
    methods: {
        loadNotes() {
            noteService.query().then((notes) => this.notes = notes)
        },
        selectNote(note) {
            this.selectedNote = note
        },
        closeDetails() {
            this.selectedNote = null
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        editNote(id) {
            console.log('editing note: ', id)
        },
        removeNote(id) {
            noteService.remove(id)
                .then(() => {
                    const msg = {
                        txt: 'Deleted succesfully',
                        type: 'success'
                    }
                    eventBus.$emit('showMsg', msg)
                    this.notes = this.notes.filter(note => note.id !== id)
                })
                .catch(err => {
                    console.log('err', err)
                    const msg = {
                        txt: 'Error. Please try later',
                        type: 'error'
                    }
                    eventBus.$emit('showMsg', msg)
                })
        }
    },
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.notes
            const searchStr = this.filterBy.title.toLowerCase()

            const notesToShow = this.notes.filter(note => {
                return note.title.toLowerCase().includes(searchStr)
            })
            return notesToShow
        }
    },
}