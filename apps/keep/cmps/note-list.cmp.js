import notePreview from './note-preview.cmp.js'

export default {
    props: ['notes'],
    template: `
        <ul class="note-list">
            <li v-for="note in notes" :key="note.id" class="note-preview-container" v-bind:style="{backgroundColor:color}">
                <note-preview :note="note"  @remove="removeNote" @edit="editNote"/>
                <div class="actions">
                    <!-- <button @click="remove(note.id)">🗑</button>
                    <button @click="edit(note.id)">✏</button>
                    <button @click="setBGC(note.id)">🎨</button>
                    <button @click="pin(note.id)">📌</button>
                    <button @click="mail(note.id)">📧</button>
                    <input ref="colorInput" type="color"  v-model="color" @change="setBGCinput(note.id)"  > -->
                    
                
                    <!-- @change="setBGCinput(note.id, this.value)" -->
                    <!-- v-model="note.backgroundColor" -->
                    <!-- <router-link :to="'/note/'+note.id">Details</router-link> -->
                    <!-- <router-link :to="'/note/edit/'+note.id">Edit</router-link> -->
                </div>
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
        },
        // removeNote(id) {
        //     noteService.remove(id)
        //         .then(() => {
        //             const msg = {
        //                 txt: 'Deleted succesfully',
        //                 type: 'success'
        //             }
        //             eventBus.$emit('showMsg', msg)
        //             this.notes = this.notes.filter(note => note.id !== id)
        //         })
        //         .catch(err => {
        //             console.log('err', err)
        //             const msg = {
        //                 txt: 'Error. Please try later',
        //                 type: 'error'
        //             }
        //             eventBus.$emit('showMsg', msg)
        //         })
        // }
    },
    components: {
        notePreview
    }
};

// this.$refs.colorInput.value this is how we catch elemnt