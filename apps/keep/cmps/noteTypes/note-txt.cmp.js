export default {

    props: ['note'],
    template: `
    <!-- <div class="row"> -->
        <p>
            {{note.info.txt}}
            <!-- id: "n102",
                        type: "note-txt",
                        isPinned: false,
                        info: {
                            txt: "fafa!" -->
            <!-- <input type="text" v-model="txt"  /> -->
            {{note.id}}
        </p>
    <!-- </div> -->
    `,
    data() {
        return {
            // txt: '',
        };
    },
    methods: {
        // reportVal() {
        //     this.$emit('setInput', this.txt);
        // }
    }
}