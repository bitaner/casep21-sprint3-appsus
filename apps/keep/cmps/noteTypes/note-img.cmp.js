export default {

    props: ['note'],
    template: `
        <section class="img-note">
            <img :src="note.info.url" alt="">
            <h3>
                {{note.info.title}}
            </h3>
        </section>
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