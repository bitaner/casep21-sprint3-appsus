import mailPreview from './mail-preview.cmp.js';


export default {
    props: ['mails'],
    template: `
        <div class="mail-list">

            <div class="mail-card" v-for="(mail,index) in mails" :key="mail.id" >
           
                <div class="mail-preview-container" v-on:click=toggle(index)>
                    <mail-preview :mail="mail" @click.native="log"/>

                    <div class="actions">
                    <button @click="remove(mail.id)">delete</button>
                    <router-link :to="'/mail/'+mail.id">read?</router-link>
                    <router-link :to="'/mail/edit/'+mail.id">Edit</router-link>
                    </div>
                </div>

                <div class="mail-bigger-prev hidden" v-show="mail.showMore">
                <h3>{{mail.subject}}</h3>    
                <h5>{{mail.to}}</h5>    
                <p>{{mail.body}}</p>
                </div>

            </div> 

              
        </div>
    `,
    data() {
        return {showMore:true}
    },
    methods: {
        toggle(index) {
            console.log(index)
            if (!this.mails[index].showMore) {
                this.mails[index].showMore = true;
            } else {
                this.mails[index].showMore = false;
            }
        },
        remove(mailId) {
            this.$emit('remove', mailId);
        },
        log() {
            this.toggle()
        }
    },
    components: {
        mailPreview
    }
};