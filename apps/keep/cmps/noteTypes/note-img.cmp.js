export default {

    props: ['note'],
    template: `
        <section>
            <p>
                {{note.type}}
                {{note.info.title}}
                {{note.id}}       
            </p>
            <img :src="note.info.url" alt="">
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