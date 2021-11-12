import carPreview from './car-preview.cmp.js';

export default {
    props: ['cars','heading'],
    template: `
    <section class="car-list">
        <h2>{{heading || 'Car List'}}</h2>
        <ul>
            <li v-for="car in cars" :key="car.id" class="car-preview-container" >
                <car-preview :car="car" @click.native="log" />
                <div class="actions">
                    <button @click="remove(car.id)" >X</button>
                    <router-link :to="'/car/'+car.id" >Details</router-link>
                    <router-link :to="'/car/'+car.id + '/edit'" >Edit</router-link>
                </div>
            </li>
        </ul>
    </section>
    `,
    created(){
        // Do not Mutate props
        // this.heading = 'Ba li'
    },
    methods: {
        remove(carId) {
            this.$emit('remove', carId);
        },
        log() {
            console.log('Logging.....');
        }
    },
    components:{
        carPreview
    }
};