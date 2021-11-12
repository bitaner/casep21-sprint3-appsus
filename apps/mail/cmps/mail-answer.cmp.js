import { mailService } from '../services/mail-service.js';

export default {
    template: `
        <section v-if="mailToEdit" class="mail-add app-main" >
            <h3>new message</h3>
            <form @submit.prevent="sendMessage">

                <p v-if="errors.length">
                <b>Please correct the following errors:</b>
                <ul>
                <li v-for="error in errors">{{ error }}</li>
                </ul>
                </p>
                <input ref="to" name="to" v-model="mailToEdit.to" type="text" placeholder="To:">
                <input v-model="mailToEdit.to" type="text" placeholder="Cc:">
                <input v-model="mailToEdit.to" type="text" placeholder="Bcc:">
                <input v-model="mailToEdit.subject" type="text" placeholder="subject">
                <textarea v-model="mailToEdit.body"></textarea>
                <button type="submit">send</button>
                <button type="button" v-on:click="closeModal">trash</button>
            </form>
        </section>
    `,
    data() {
        return {
            mailToEdit: null,
            errors: [],
        };
    },
    created() {
        this.mailToEdit = mailService.getEmptyMail();

    },
    beforeMount() {
        this.focusInput()
    },
    methods: {
        sendMessage() {
            var status = this.checkForm()
            if (!status) return
            this.mailToEdit.sendAt = Date.now();
            console.log(this.mailToEdit)
            mailService.save(this.mailToEdit)
                .then(() => {
                    console.log('saved!')

                });

            this.mailToEdit = null
            console.log('sendMessage')
            this.$emit('closeModal')
        },
        closeModal() {
            this.mailToEdit = null
            console.log(this.mailToEdit)
            this.$emit('closeModal')
        },
        focusInput() {
            this.$nextTick(() => this.$refs.to.focus())
        },
        checkForm() {
            if (this.mailToEdit.to && this.mailToEdit.body) return true;
            this.errors = [];
            if (!this.mailToEdit.to) this.errors.push("Recipient is required.") 
            if (!this.mailToEdit.body) this.errors.push("Email text is required.");
            e.preventDefault();
            return false
        }
    }
};

