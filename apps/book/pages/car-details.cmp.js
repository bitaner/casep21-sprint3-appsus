import { carService } from '../services/car-service.js';

export default {
    template: `
        <section v-if="car" class="car-details app-main">
            <h3>Car Details:</h3>
            <p>Vendor : {{car.vendor}}</p>
            <p>Max speed : {{car.maxSpeed}}</p>
            <button @click="sayAndClose" >X</button>
            <router-link :to="'/car/'+nextCarId">Next car ></router-link>
        </section>
        <section v-else class="loader app-main">
            <h2>Loading...</h2>
        </section>
    `,
    data() {
        return {
            car: null,
            nextCarId: null
        };
    },
    created() {},
    methods: {
        sayAndClose() {
            console.log('Just saying');
            this.$router.push('/car');
        }
    },
    watch: {
        '$route.params.carId': {
            handler() {
                const { carId } = this.$route.params;
                carService.getById(carId)
                    .then(car => this.car = car);
                carService.getNextCarId(carId)
                    .then(carId => this.nextCarId = carId);
            },
            immediate: true
        }
    }
};