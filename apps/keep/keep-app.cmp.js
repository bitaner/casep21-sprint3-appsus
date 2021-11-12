import { noteService } from './services/note-service.js'
import noteFilter from './cmps/note-filter.cmp.js'
import noteAdd from './cmps/note-add.cmp.js'
import noteList from './cmps/note-list.cmp.js'
import { eventBus } from '../../services/event-bus-service.js'
import { storageService } from '../../services/async-storage-service.js'
import { utilService } from '../../services/util-service.js'

export default {
    components: {
        noteList,
        noteFilter,
        noteAdd
    },
    template: `
        <section class="note-app app-main">
            <h1>notes</h1>
        <note-filter @noteType="setFilter" @filterText="setFilterText"></note-filter>
        <note-add @noteToAdd="loadNotes"></note-add>
        <note-list :notes="notesToShow"  @remove="removeNote" @edit="editNote" class="notes-gallery" ></note-list>
        </section>
    `,
    data() {
        return {
            notes: null,
            selectedNote: null,
            filterBy: null,
            filterText: null
        }
    },
    created() {
        this.loadNotes()

        eventBus.$on('noteUpdate', this.noteUpdate)
        eventBus.$on('duplicate', this.duplicate)
        eventBus.$on('noteAdd', this.noteAdd)
    },
    methods: {
        loadNotes() {
            noteService.query().then((notes) => {
                notes.sort(function(x, y) {
                    return (x.isPinned === y.isPinned) ? 0 : x ? -1 : 1
                })
                this.notes = notes
            })

        },
        selectNote(note) {
            this.selectedNote = note
        },
        closeDetails() {
            this.selectedNote = null
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
                // console.log(this.filterBy)
        },
        setFilterText(filterText) {
            this.filterText = filterText
                // console.log(this.filterText)
        },
        editNote(id) { // meyutar
            console.log('editing note: ', id)
        },
        removeNote(id) {
            noteService.remove(id)
                .then(() => {
                    this.notes = this.notes.filter(note => note.id !== id)
                })
        },
        noteUpdate(note) {
            // console.log('arrived to bus', note)
            // console.log('4', note)
            noteService.save(note)
        },
        duplicate(note) { // dont survive refresh
            console.log('dup bus', note)
            var noteCopy = JSON.parse(JSON.stringify(note))
            noteCopy.id = utilService.makeId()
            this.notes.push(noteCopy)
            noteService.save(noteCopy)
        },
        noteAdd(note) {
            console.log('new note', note)
            this.notes.push(note)
            noteService.add(note)
            noteService.save(note)
        }
    },
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.notes
            var notesToShow = this.notes.filter(note => {
                return note.type === this.filterBy
            })
            return notesToShow
        }
    },
}