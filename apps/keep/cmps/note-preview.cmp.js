import noteTxt from '/apps/keep/cmps/noteTypes/note-txt.cmp.js'
import noteImg from '/apps/keep/cmps/noteTypes/note-img.cmp.js'
import noteTodos from '/apps/keep/cmps/noteTypes/note-todos.cmp.js'


export default {
    props: ['note'],
    components: {
        noteTxt,
        noteImg,
        noteTodos
    },
    template: `
    <section v-if="note" class="note">
        <h1>note</h1>
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