import { utilService } from '../../../services/util-service.js';
import { mailService } from '../services/mail-service.js';
import { eventBus } from '../../../services/event-bus-service.js'

export default {
    template: `
        <section v-if="mailToEdit" class="mail-add" >
            <h3>new message</h3>
            <form @submit.prevent="sendMessage">

                <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                <li v-for="error in errors">{{ error }}</li>
                </ul>
                </p>
                <input ref="to" name="to" v-model="mailToEdit.to" type="text" placeholder="To:">
                <input v-model="mailCC" type="text" placeholder="Cc:">
                <input v-model="mailBcc" type="text" placeholder="Bcc:">
                <input v-model="mailToEdit.subject" type="text" placeholder="subject">
                <textarea v-model="mailToEdit.body"  rows="28"></textarea>
                <button type="submit" class="mailSend"><i class="fas fa-paper-plane"></i></button>
                <button type="button" v-on:click="closeModal" class="mailTrash"><i class="fas fa-trash"></i></button>
                <button type="button" v-on:click="makeNote" class="mailSticker"><i class="far fa-sticky-note"></i></button>
            </form>
        </section>
    `,
    data() {
        return {
            mailToEdit: null,
            mailCC: null,
            mailBcc: null,
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
            this.mailToEdit.sentAt = Date.now();
            this.mailToEdit.to += this.mailCC
            this.mailToEdit.to += this.mailBcc
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
        },
        makeNote() {
            var txt = 'subject:'+ this.mailToEdit.subject
            txt += 'body:'+ this.mailToEdit.body
            var newNote = {
                id: utilService.makeId(),
                type: "note-txt",
                isPinned: false,
                info: {
                    txt: txt
                },
                backgroundColor: '#F4976C'
            }
            eventBus.$emit('noteAdd', newNote);
            this.mailToEdit = null
            console.log('sendMessage')
            this.$emit('closeModal')
        }
    }
};

