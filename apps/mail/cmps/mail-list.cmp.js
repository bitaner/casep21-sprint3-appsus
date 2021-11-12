import mailPreview from './mail-preview.cmp.js';


export default {
    props: ['mails'],
    template: `
        <div v-if="mails" class="mail-list">

            <div class="mail-card" v-for="(mail,index) in mails" :key="mail.id" v-bind:class="readCheck(mail)" >
           
                <div class="mail-preview-container" v-on:click=toggle(index) v-bind:class="readCheck(mail)">
                    <mail-preview :mail="mail" @click.native="log" />
                    
                    <div class="actions">
                    <button @click.stop="remove(mail.id)"><i class="fas fa-trash"></i></button>
                    <button @click.stop="mail.isRead = !mail.isRead" type="button"><i v-bind:class="setEnvelop(mail)"></i></button>
                    </div>
                </div>

                <div v-if="mail" class="mail-bigger-prev hidden" v-show="mail.showMore">
                <h3>{{mail.subject}}</h3>    
                <h5>{{mail.to}}</h5>    
                <p>{{mail.body}}</p>
                </div>

            </div> 

              
        </div>
    `,
    data() {
        return {showMore:true,
            length: this.mails.length
        }
    },
    methods: {
        toggle(index) {
            console.log(index)
            if (!this.mails[index].showMore) {
                this.mails[index].showMore = true;
                this.mails[index].isRead = true

            } else {
                this.mails[index].showMore = false;

            }
        },
        remove(mailId) {
            this.$emit('remove', mailId);
        },
        log() {
            this.toggle()
        },
        readCheck(mail){
            if (mail.isRead === false) return "bold"
            else return "unbold"
        },
        setEnvelop(mail){
            if (mail.isRead === false) return "far fa-envelope"
            else return "far fa-envelope-open"
        }
    },
    components: {
        mailPreview
    }
};