import { mailService } from '../services/mail-service.js';

export default {
    template: `
        <section  class="mail-edit app-main">
            <h3>Add a new mail</h3>
            <form v-if="mailToEdit" @submit.prevent="save" >
                <input v-model="mailToEdit.subject" type="text" placeholder="subject">
                <input v-model="mailToEdit.subject" type="text" placeholder="subject">
                <input v-model="mailToEdit.subject" type="text" placeholder="subject">
                <input v-model="mailToEdit.subject" type="text" placeholder="subject">
                <input v-model.number="mailToEdit.maxSpeed" type="number" placeholder="Max speed">
                <button>Save</button>
            </form>
        </section>
    `,
    data() {
        return {
            mailToEdit: null
        };
    },
    created() {

        this.mailToEdit = mailService.getEmptyMail();
        console.log(this.mailToEdit)

    },
    methods: {
        save() {
            mailService.save(this.mailToEdit)
                .then(mail => this.$router.push('/mail'));
        }
    }
};