export default {

    props: ['note'],
    template: `
        <section>
            <p>
                {{note.type}}
                {{note.label}}
                {{note.id}}       
            </p>
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