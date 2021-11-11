import { mailservice } from '../services/mail-service.js';
import longText from '../cmps/long-text.cmp.js';
import reviewAdd from '../cmps/review-add.cmp.js';
export default {
    template: `
        <section v-if="mail" class="mail-details app-main">
            <h5>{{mail.subject}}</h5>
            <p><span>Subtitle:</span> {{mail.subtitle}}</p>
            <p><span>Authors: </span>{{mail.authors}}</p>
            <p><span>Published Date :</span> {{mail.publishedDate}} {{textAboutDate}}</p>
            <long-text :description="mail.description"></long-text>
            <p><span>Page Count: </span>{{mail.pageCount}} {{textAboutPage}}</p>
            <p >Categories:</p>
            <span v-for="category in mail.categories">{{category}}</span>
            <p><span>Language :</span> {{mail.language}}</p>
            <p v-bind:class="classPrice" > <span>price:</span> {{mail.listPrice.amount}}{{priceIcon}} <span class="red">{{sale}}</span></p>
            <img v-bind:src="mail.thumbnail">
            <review-add :mail="mail"></review-add>
        </section>
        <section v-else class="loader app-main">
            <h2>Loading...</h2>
        </section>
    `,
    data() {
        return {
            mail: null
        };
    },
    created() {
        const { mailId } = this.$route.params;
        console.log(mailId)
        mailservice.getById(mailId)
            .then(mail => {
                this.mail = mail,
                    console.log(mail)
            });
    },
    components: {
        longText,
        reviewAdd
    },
    computed: {
        textAboutPage() {
            if (this.mail.pageCount > 500) return 'Long reading';
            else if (this.mail.pageCount > 200) return 'Decent Reading';
            else if (this.mail.pageCount < 100) return 'Light Reading';
        },
        textAboutDate() {
            if (this.mail.publishedDate > 2011) return 'New!';
            else return 'Veteran mail';
        },
        classPrice() {
            if (this.mail.listPrice.amount > 150) return 'red';
            else if (this.mail.listPrice.amount < 20) return 'green';
        },
        showLessText() {
            if (this.mail.description.length > 96) {
                console.log(this.mail.description.slice(0, 96) + "...")
                return this.mail.description.slice(0, 96) + "..."
            }
        },
        showMoreText() {
            return { isLess: false, isMore: true }
        },
        priceIcon() {
            if (this.mail.listPrice.currencyCode === 'ILS') return '₪';
            else if (this.mail.listPrice.currencyCode === 'EUR') return '€';
            else if (this.mail.listPrice.currencyCode === 'USD') return '$';
        },
        sale() {
            if (this.mail.listPrice.isOnSale) return 'sale!'
            else return ''
        }



    }



}