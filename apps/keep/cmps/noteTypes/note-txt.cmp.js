export default {

    props: ['note'],
    template: `
       <section class="text-note">
            <p>
               {{note.info.txt}}
            </p>
        </section> 
    `,
    data() {
        return {};
    },
    methods: {}
}