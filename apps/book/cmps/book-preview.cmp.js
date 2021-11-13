export default {
    props: ['book'],
    template: `
        <div v-if="book" class="book-preview">
            <h3>{{book.title}}</h3>
            <img v-bind:src="book.thumbnail">
            <p>{{book.listPrice.amount}}{{priceIcon}}</p> 
        </div>
    `,
    created(){
    
    },
    computed:{
        priceIcon(){
             if(this.book.listPrice.currencyCode === 'ILS') return '₪';
             else if (this.book.listPrice.currencyCode === 'EUR') return '€';
             else if (this.book.listPrice.currencyCode === 'USD') return '$';
        }
        
    }
} 