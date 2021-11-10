import mailPreview from './mail-preview.cmp.js';

export default {
    props: ['mails'],
    template: `
        <ul class="mail-list">
            <li v-for="mailin mails" :key="mail.id" class="mail-preview-container" >
                <mail-preview :mail="mail" @click.native="log"/>
                <div class="actions">
                    <button @click="remove(mail.id)">X</button>
                    <router-link :to="'/mail/'+mail.id">Details</router-link>
                    <router-link :to="'/mail/edit/'+mail.id">Edit</router-link>
                </div>
            </li>
        </ul>
    `,
    methods: {
        remove(mailId) {
            this.$emit('remove', mailId);
        },
        log() {
            console.log('Logging.....');
        }
    },
    components:{
        mailPreview
    }
};