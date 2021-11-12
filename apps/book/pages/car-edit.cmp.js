import { carService } from '../services/car-service.js';

export default {
    template: `
        <section class="car-edit app-main">
            <h3>Add a new car</h3>
            <form v-if="carToEdit" @submit.prevent="save" >
                <input v-model="carToEdit.vendor" type="text" placeholder="Vendor">
                <input v-model.number="carToEdit.maxSpeed" type="number" placeholder="Max speed">
                <button>Save</button>
            </form>
        </section>
    `,
    data() {
        return {
            carToEdit: null
        };
    },
    created() {
        const { carId } = this.$route.params;
        if (carId) {
            carService.getById(carId)
                .then(car => this.carToEdit = car);
        } else {
            this.carToEdit = carService.getEmptyCar();
        }
    },
    methods: {
        save() {
            carService.save(this.carToEdit)
                .then(car => this.$router.push('/car'));
        }
    }
};