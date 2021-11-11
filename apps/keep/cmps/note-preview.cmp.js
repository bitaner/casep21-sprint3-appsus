import noteTxt from './noteTypes/note-txt.cmp.js'
import noteImg from './noteTypes/note-img.cmp.js'
import noteTodos from './noteTypes/note-todos.cmp.js'

export default {
    props: ['note'],
    components: {
        noteTxt,
        noteImg,
        noteTodos
    },
    template: `
    <section v-if="note" class="note">
            <div>
                <component :note = "note" :is= "note.type" class="note"></component>
        </div>
    </section> 
    `,
    data() {
        return {};
    },
    methods: {

    },
    created() {

    },
    computed: {

    },
    watch: {

    },

};