import { carService } from '../services/car-service.js';
import { eventBus } from '../services/event-bus-service.js';
import carList from '../cmps/car-list.cmp.js';
import carFilter from '../cmps/car-filter.cmp.js';

export default {
    template: `
        <section class="car-app app-main">
            <car-filter @filtered="setFilter" />
            <car-list :cars="carsToShow" @remove="removeCar"/>
            <router-link to="/car/edit">Add a new car</router-link>
        </section>
    `,
    data() {
        return {
            cars: null,
            filterBy: null
        };
    },
    created() {
        this.loadCars();
    },
    methods: {
        loadCars() {
            carService.query()
                .then(cars => this.cars = cars);
        },
        removeCar(id) {
            carService.remove(id)
                .then(() => {
                    const msg = {
                        txt: 'Deleted succesfully',
                        type: 'success'
                    };
                    eventBus.$emit('showMsg', msg);
                    this.cars = this.cars.filter(car => car.id !== id)
                })
                .catch(err => {
                    console.log('err', err);
                    const msg = {
                        txt: 'Error. Please try later',
                        type: 'error'
                    };
                    eventBus.$emit('showMsg', msg);
                });
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        }
    },
    computed: {
        carsToShow() {
            if (!this.filterBy) return this.cars;
            const searchStr = this.filterBy.vendor.toLowerCase();
            const carsToShow = this.cars.filter(car => {
                return car.vendor.toLowerCase().includes(searchStr) && 
                       car.maxSpeed <= this.filterBy.maxSpeed 
            });
            return carsToShow;
        }
    },
    components: {
        carList,
        carFilter,
    }
};