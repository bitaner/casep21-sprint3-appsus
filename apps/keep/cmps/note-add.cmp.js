// import { noteService } from '../services/note-service.js';
import { utilService } from '../../../services/util-service.js'
import { eventBus } from '../../../services/event-bus-service.js'

// why only 4?

export default {
    template: `
    <div class="note-add">
            <label for="types">Add note</label>
            <select name="types" id="types" v-model="newNoteType" @change="reportType" >
                <option value="" disabled selected>Select type</option>   
                <option value="txt">Text</option>
                <option value="img">Image</option>
                <option value="todos">To-do</option>
                <option value="vid">Video</option>
            </select>
    </div>
    
    `,
    data() {
        return {
            noteToAdd: null,
            newNoteType: null,
            txt: {
                id: utilService.makeId(),
                type: "note-txt",
                isPinned: false,
                info: {
                    txt: "insert text here"
                },
                backgroundColor: '#FBE8A6'
            },
            img: {
                id: utilService.makeId(),
                isPinned: false,
                type: "note-img",
                info: {
                    url: "apps/keep/imgs/JPEG-1.png",
                    txt: "add an image link here"
                },
                backgroundColor: '#FBE8A6'
            },
            todos: {
                id: utilService.makeId(),
                isPinned: false,
                type: "note-todos",
                info: {
                    txt: "add todo's here",
                    todos: [
                        { txt: "not done", doneAt: null, id: '0' },
                        { txt: "done", doneAt: true, id: '1' },
                    ]
                },
                backgroundColor: '#FBE8A6'
            },
            vid: {
                id: utilService.makeId(),
                isPinned: false,
                type: "note-vid",
                info: {
                    url: "https://www.youtube.com/embed/g9bzrGBzSC4",
                    txt: "add a video link here"
                },
                backgroundColor: '#FBE8A6'
            }
        };
    },
    methods: {
        reportType() {
            console.log(this[this.newNoteType])
            eventBus.$emit('noteAdd', this[this.newNoteType])
            this.newNoteType = null
        },
    },


}