import { mailservice } from '../services/mail-service.js';

export default {
    props: ['mail'],
    template: `
        <form v-if="review" class="review-add"  @submit.prevent="addReview">
        <h3>add a review!</h3>  
    
        <label>Name:
            <input ref="name"  v-model="review.readerName" type="text" autofocus placeholder="Full Name">
        </label>
        <select v-model.number="review.reted">
            <option value="5">⭐⭐⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="2">⭐⭐</option>
            <option value="1">⭐</option>
        </select>
        <input v-model="review.txt" type="date"  placeholder="Date Of Reading">
        <textarea ></textarea>
        <button>submit</button>
        <div v-for="review in mail.review" class="reviews">
            <p><span>name:</span> {{review.readerName}}</p> 
            <p><span>rete:</span> {{review.reted}}</p>
            <p><span>date:</span> {{review.date}}</p>
            <p><span>txt:</span> {{review.txt}}</p>
            <button v-on:click="removeReview()">delete</button>
        </div>
        </form>
    `,
    data() {
        return {
            review: {
                readerName: 'mails Reader',
                reted: null,
                date: null,
                txt: null,
                id: Date.now() % 10000
            },
        }
    },
    methods: {
        clearInput() {
            this.review.readerName = 'mails Reader';
            this.review.reted = null;
            this.review.date = null;
            this.review.txt = null;
        },
        focusInput() {
            this.$refs.name.focus();
        },
        addReview() {
            const currRev = this.review;
            console.log(this.review);
            mailservice.saveReview(this.mail.id, currRev)
                .then(() => this.clearInput())
        },


    }
}

