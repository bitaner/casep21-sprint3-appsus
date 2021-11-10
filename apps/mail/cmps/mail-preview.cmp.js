export default {
    props: ['mail'],
    template: `
        <div v-if="mail" class="mail-preview">
            <h3>{{mail.title}}</h3>
        </div>
    `,
    created(){
    
    },
    computed:{
        priceIcon(){
             if(this.mail.listPrice.currencyCode === 'ILS') return '₪';
             else if (this.mail.listPrice.currencyCode === 'EUR') return '€';
             else if (this.mail.listPrice.currencyCode === 'USD') return '$';
        }
        
    }
} 