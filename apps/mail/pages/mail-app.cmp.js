import { mailservice } from '../services/mail-service.js';
import mailFilter from '../cmps/mail-filter.cmp.js';
import mailList from '../cmps/mail-list.cmp.js';
import mailAdd from '../cmps/mail-add.cmp.js';
import { eventBus } from '../services/event-bus-service.js';

export default {
    template: `
        <section class="mail-app app-main">
        <mail-filter @filtered="setFilter"></mail-filter>
        <mail-add @mailToAdd="loadmails"></mail-add>
        <mail-list :mails="mailsToShow"  @remove="removemail"></mail-list>
        </section>
    `,
    data() {
        return {
            mails: null,
            selectedmail: null,
            filterBy: null
        };
    },
    created() {
        this.loadmails()
    }, 
    methods: {
        loadmails(){
            mailservice.query().then((mails)=> this.mails = mails)
        },
        selectmail(mail) {
            this.selectedmail= mail;
        },
        closeDetails() {
            this.selectedmail= null;
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        }, 
        removemail(id){
            mailservice.remove(id)
                    .then(() => {
                        const msg = {
                            txt: 'Deleted succesfully',
                            type: 'success'
                        };
                        eventBus.$emit('showMsg', msg);
                        this.mails = this.mails.filter(mail=> mail.id !== id)
                    })
                    .catch(err => {
                        console.log('err', err);
                        const msg = {
                            txt: 'Error. Please try later',
                            type: 'error'
                        };
                        eventBus.$emit('showMsg', msg);
                    });
        }
    },
    computed: {
        mailsToShow() {
            if (!this.filterBy) return this.mails;
            const searchStr = this.filterBy.title.toLowerCase();
          

            const mailsToShow = this.mails.filter(mail=> {
                return mail.title.toLowerCase().includes(searchStr) 
            });
            return mailsToShow;
        }
    },
    components: {
        mailList,
        mailFilter, 
        mailAdd
    }
};