import { storageService } from '../../../services/async-storage-service.js'
import { utilService } from '../../../services/util-service.js'

const NOTES_KEY = 'notes'
var gNotes
_createNotes()

export const noteService = {
    query,
    remove,
    save,
    getById,
    add
}

function query() {
    return storageService.query(NOTES_KEY)
}


function remove(noteId) {
    // return Promise.reject('Big balagan!')
    return storageService.remove(NOTES_KEY, noteId)
}

function save(note) {
    if (note.id) return storageService.put(NOTES_KEY, note)
    else return storageService.post(NOTES_KEY, note)
}

function add(note) {
    return storageService.post(NOTES_KEY, note)
}

function getById(noteId) {
    return storageService.get(NOTES_KEY, noteId)
}

function _createNotes() {
    storageService.query(NOTES_KEY)
        // console.log(gNotes)
        .then((notes) => {
            gNotes = notes
            if (!gNotes || !gNotes.length) {
                gNotes = [{
                        id: "n101",
                        type: "note-txt",
                        isPinned: false,
                        info: {
                            txt: "insert text here"
                        },
                        backgroundColor: '#F4976C'
                    },
                    {
                        id: "n102",
                        isPinned: false,
                        type: "note-img",
                        info: {
                            url: "apps/keep/imgs/JPEG-1.png",
                            txt: "add an image link here"
                        },
                        backgroundColor: '#303C6C'
                    },
                    {
                        id: "n103",
                        isPinned: false,
                        type: "note-vid",
                        info: {
                            url: "https://www.youtube.com/embed/Jnrh2iU1mRc",
                            txt: "add a video link here"
                        },
                        backgroundColor: '#FBE8A6'
                    },
                    {
                        id: "n104",
                        isPinned: false,
                        type: "note-todos",
                        info: {
                            txt: "add todo's here",
                            todos: [
                                { txt: "not done", doneAt: null, id: '0' },
                                { txt: "done", doneAt: true, id: '1' },
                            ]
                        },
                        backgroundColor: '#303C6C'
                    },
                ]
                utilService.saveToStorage(NOTES_KEY, gNotes)
            }
            // console.log(gNotes)
            return gNotes
        })
    return gNotes
}