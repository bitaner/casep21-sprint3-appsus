export default {

    props: ['note'],
    template: `
       <section class="text-note">
           
            <p>
               {{note.info.txt}}
                   {{note.id}}
            </p>

        </section> 
    `,
    data() {
        return {};
    },
    methods: {}
}