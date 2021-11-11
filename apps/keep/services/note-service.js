// import { utilService } from '.../services/util-service.js'
import { storageService } from '../../../services/async-storage-service.js';
import { utilService } from '../../../services/util-service.js'

const NOTES_KEY = 'notes';
var gNotes
_createNotes()

export const noteService = {
    query,
    remove,
    save,
    getById,
};

function query() {
    return storageService.query(NOTES_KEY);
}


function remove(noteId) {
    // return Promise.reject('Big balagan!')
    return storageService.remove(NOTES_KEY, noteId);
}

function save(note) {
    if (note.id) return storageService.put(NOTES_KEY, note);
    else return storageService.post(NOTES_KEY, note);
}

function getById(noteId) {
    return storageService.get(NOTES_KEY, noteId);
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
                        isPinned: true,
                        info: {
                            txt: "Fullstack Me Baby!"
                        },

                        backgroundColor: "#12020d"

                    },
                    {
                        id: "n102",
                        type: "note-txt",
                        isPinned: false,
                        info: {
                            txt: "fafa!"
                        },

                        backgroundColor: "#12020d"

                    },
                    {
                        id: "n103",
                        type: "note-img",
                        info: {
                            url: "apps/keep/imgs/2.jpeg",
                            title: "caparrrraaaa"
                        },

                        backgroundColor: "#12020d"

                    },
                    {
                        id: "n104",
                        type: "note-img",
                        info: {
                            url: "apps/keep/imgs/1.jpeg",
                            title: "if vue gives you errors, turn them to notes "
                        },

                        backgroundColor: "#12020d"

                    },
                    {
                        id: "n105",
                        type: "note-todos",
                        info: {
                            label: "you are fine the way you are",
                            todos: [
                                { txt: "Driving liscence", doneAt: null, id: '0' },
                                { txt: "Coding power", doneAt: 187111111, id: '1' }
                            ]
                        },

                        backgroundColor: "#12020d"

                    },
                    {
                        id: "n106",
                        type: "note-todos",
                        info: {
                            label: "you are getting it done",
                            todos: [
                                { txt: "baba", doneAt: null, id: '0' },
                                { txt: "hello", doneAt: 187123411, id: '1' },
                                { txt: "finish him", doneAt: null, id: '2' },
                                { txt: "yalla sa ", doneAt: 2323, id: '3' }
                            ]
                        },

                        backgroundColor: "#12020d"

                    },
                ]
                utilService.saveToStorage(NOTES_KEY, gNotes);
            }
            console.log(gNotes)
            return gNotes;
        })
    return gNotes;

}