import mailPreview from './mail-preview.cmp.js';


export default {
    props: ['mails'],
    template: `
        <div class="mail-list">

            <div class="mail-card" v-for="mail in mails" :key="mail.id" >
           
                <div class="mail-preview-container" v-on:click="showBiggerPrev(mail.id)">
                    <mail-preview :mail="mail" @click.native="log"/>

                    <div class="actions">
                    <button @click="remove(mail.id)">delete</button>
                    <router-link :to="'/mail/'+mail.id">read?</router-link>
                    <router-link :to="'/mail/edit/'+mail.id">Edit</router-link>
                    </div>
                </div>

                <div :key="mail.id" v-if="mail" class="mail-bigger-prev">
                <h3>{{mail.subject}}</h3>    
                <h5>{{mail.to}}</h5>    
                <p>{{mail.body}}</p>
                </div>

            </div> 

              
        </div>
    `,
    data(){
        return {shouldShow: false}
    },
    methods: {
        showBiggerPrev(mailId){
            this.mails.map(mail => {
                if(mailId = mailId.id) {
              console.log('hi') }})
        },
        remove(mailId) {
            this.$emit('remove', mailId);
        },
        log() {
            console.log('Logging.....');
        }
    },
    components: {
        mailPreview
    }
};