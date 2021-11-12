import { noteService } from './services/note-service.js'
import noteFilter from './cmps/note-filter.cmp.js'
import noteAdd from './cmps/note-add.cmp.js'
import noteList from './cmps/note-list.cmp.js'
import { eventBus } from '../../services/event-bus-service.js'

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
        <note-list :notes="notesToShow"  @remove="removeNote" @edit="editNote" class="notes-gallery" @textEdit="textEdit"></note-list>
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

        eventBus.$on('setBGC', this.setBGC)
        eventBus.$on('updateText', this.textEdit)
        eventBus.$on('toggleMark', this.noteUpdate)
        eventBus.$on('noteUpdate', this.noteUpdate)
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
                // console.log(this.filterBy)
        },
        setFilterText(filterText) {
            this.filterText = filterText
                // console.log(this.filterText)
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
                        // eventBus.$emit('showMsg', msg)
                    this.notes = this.notes.filter(note => note.id !== id)
                })
                .catch(err => {
                    console.log('err', err)
                    const msg = {
                            txt: 'Error. Please try later',
                            type: 'error'
                        }
                        // eventBus.$emit('showMsg', msg)
                })
        },
        textEdit(note) {
            console.log('arrived to bus', note)
                // console.log('4', note)
            noteService.save(note)

        },
        setBGC(note) {
            //  (noteId, bgc) => {
            console.log('arrived to bus', note)
            noteService.save(note)
                // })
        },
        noteUpdate(note) {
            console.log('arrived to bus', note)
                // console.log('4', note)
            noteService.save(note)
        }

    },
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.notes
                // const searchStr = this.filterBy

            const notesToShow = this.notes.filter(note => {
                return note.type === this.filterBy
            })

            // if (this.filterText) {
            //     return notesToShow.filter(note => {
            //         return note.includes(this.filterText)
            //     })
            // } else {
            return notesToShow
                // }
        }
    },
}

// mailsToShow() {
//     console.log('hi')
//     console.log(this.filterBy);
//     var mailToUser = this.mails.filter(mail => mail.to === "user@appsus.com")
//     const searchStr = this.filterBy.subject
//     var mailFiltered = null;
//     if (this.filterBy.moreFilter === 'sent'){
//         if (!searchStr) return mailFiltered = this.mails.filter(mail => mail.to !== "user@appsus.com");
//         else return mailFiltered = this.mails.filter(mail => mail.to !== "user@appsus.com" && mail.subject.toLowerCase().includes(searchStr));
//     }
//     switch (this.filterBy.moreFilter) {
//         case 'all': mailFiltered = this.mails.filter(mail => mail.to === "user@appsus.com");
//             break
//         case 'read': mailFiltered = mailToUser.filter(mail => mail.isRead === true);
//             break
//         case 'unread': mailFiltered = mailToUser.filter(mail => mail.isRead === false);
//             break
//         case 'stared': mailFiltered = mailToUser.filter(mail => mail.stared === true);
//         }
//     if (searchStr) {
//         return mailFiltered.filter(mail => mail.subject.toLowerCase().includes(searchStr))
//     } else return mailFiltered;

// }