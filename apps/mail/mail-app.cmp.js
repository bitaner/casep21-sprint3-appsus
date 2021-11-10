import { mailService } from './services/mail-service.js';
import mailFilter from './cmps/mail-filter.cmp.js';
import mailList from './cmps/mail-list.cmp.js';
import mailAdd from './cmps/mail-add.cmp.js';
// import { eventBus } from '../services/event-bus-service.js';


export default {
    template: `
        <section class="mail-app app-main">
        <mail-filter @filtered="setFilter"></mail-filter>
        <!-- <mail-add @mailToAdd="loadmails"></mail-add> -->
        <mail-list v-if="mailsToShow" :mails="mailsToShow"  @remove="removemail"></mail-list>
        </section>
    `,
    data() {
        return {
            mails: null,
            selectedmail: null,
            filterBy: null,
            // mailsToShow:null
           
        };
    },
    created() {
        this.loadMails()
    }, 
    methods: {
        loadMails(){
            mailService.query()
            .then((mails)=> this.mails = mails.filter(mail=> {
                                              return mail.to === "user@appsus.com"}))
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
            mailService.remove(id)
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
            //     console.log(this.mails)
            //    return this.mails.filter(mail=> {
            //         return (mail.to === "user@appsus.com")
            //     });
            // }
            const searchStr = this.filterBy.subject.toLowerCase();

            return this.mails.filter(mail=> {
                return mail.subject.toLowerCase().includes(searchStr)
            });
         
        }
    },
    components: {
        mailList,
        mailFilter, 
        mailAdd
    }
};