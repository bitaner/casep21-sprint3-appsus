import { bookService } from './services/book-service.js';
import bookFilter from './cmps/book-filter.cmp.js';
import bookList from './cmps/book-list.cmp.js';
import bookAdd from './cmps/book-add.cmp.js';
import { eventBus } from '../../services/event-bus-service.js';

export default {
    template: `
        <section class="book-app app-main">
        <book-filter @filtered="setFilter"></book-filter>
        <book-add @bookToAdd="loadBooks"></book-add>
        <book-list :books="booksToShow"  @remove="removeBook"></book-list>
        <div class="book-modal">
        <router-view></router-view>
        </div>
        </section>
    `,
    data() {
        return {
            books: null,
            selectedBook: null,
            filterBy: null
        };
    },
    created() {
        this.loadBooks()
    }, 
    methods: {
        loadBooks(){
            bookService.query().then((books)=> this.books = books)
        },
        selectBook(book) {
            this.selectedBook = book;
        },
        closeDetails() {
            this.selectedBook = null;
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        }, 
        removeBook(id){
            bookService.remove(id)
                    .then(() => {
                        const msg = {
                            txt: 'Deleted succesfully',
                            type: 'success'
                        };
                        eventBus.$emit('showMsg', msg);
                        // this.cars = this.cars.filter(car => car.id !== id)
                    })
                    .catch(err => {
                        console.log('err', err);
                        const msg = {
                            txt: 'Error. Please try later',
                            type: 'error'
                        };
                        // eventBus.$emit('showMsg', msg);
                    });
        }
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;
            const searchStr = this.filterBy.title.toLowerCase();
            const minPrice = this.filterBy.fromPrice
            const maxPrice = this.filterBy.toPrice

            const booksToShow = this.books.filter(book => {
                return book.title.toLowerCase().includes(searchStr) && book.listPrice.amount >= minPrice && book.listPrice.amount <= maxPrice || !this.filterBy.toPrice;
            });
            return booksToShow;
        }
    },
    components: {
        bookList,
        bookFilter,
        bookAdd
    }
};