import { bookService } from '../services/book-service.js';
import bookLongText from '../cmps/book-long-text.cmp.js';
import reviewAdd from '../cmps/review-add.cmp.js';
export default {
    template: `
        <section v-if="book" class="book-details app-main">
            <h5>{{book.title}}</h5>
            <p><span>Subtitle:</span> {{book.subtitle}}</p>
            <p><span>Authors: </span>{{book.authors}}</p>
            <p><span>Published Date :</span> {{book.publishedDate}} {{textAboutDate}}</p>
            <book-long-text :description="book.description"></book-long-text>
            <p><span>Page Count: </span>{{book.pageCount}} {{textAboutPage}}</p>
            <p v-for="category in book.categories"><span>Categories:</span> {{category}}</p>
            <p><span>Language :</span> {{book.language}}</p>
            <p v-bind:class="classPrice" > <span>price:</span> {{book.listPrice.amount}}{{priceIcon}} <span class="red">{{sale}}</span></p>
            <img v-bind:src="book.thumbnail">
            <review-add :book="book"></review-add>
        </section>
        <section v-else class="loader app-main">
            <h2>Loading...</h2>
        </section>
    `,
    data() {
        return {
            book: null
        };
    },
    created() {
        console.log(this.$route.params)
        const { bookId } = this.$route.params;
        console.log(bookId)
        bookService.getById(bookId)
            .then(book => {this.book = book,
            console.log(book)});
    },
    components: {
        bookLongText,
        reviewAdd
    },
    computed: {
        textAboutPage() {
            if (this.book.pageCount > 500) return 'Long reading';
            else if (this.book.pageCount > 200) return 'Decent Reading';
            else if (this.book.pageCount < 100) return 'Light Reading';
        },
        textAboutDate() {
            if (this.book.publishedDate > 2011) return 'New!';
            else return 'Veteran Book';
        },
        classPrice() {
            if (this.book.listPrice.amount > 150) return 'red';
            else if (this.book.listPrice.amount < 20) return 'green';
        },
        showLessText() {
            if (this.book.description.length > 96) {
                console.log(this.book.description.slice(0, 96) + "...")
                return this.book.description.slice(0, 96) + "..."
            }
        },
        showMoreText() {
            return { isLess: false, isMore: true }
        },
        priceIcon() {
            if (this.book.listPrice.currencyCode === 'ILS') return '₪';
            else if (this.book.listPrice.currencyCode === 'EUR') return '€';
            else if (this.book.listPrice.currencyCode === 'USD') return '$';
        },
        sale(){
            if (this.book.listPrice.isOnSale) return 'sale!'
            else return ''
        },
        


    }



}
