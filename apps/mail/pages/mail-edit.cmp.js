// import { mailservice } from '../services/book-service.js';

export default {
    template: `
        <section >
            <!-- <h3>Add a new mail!!!!</h3> -->
            <!-- <form v-if="bookToEdit" @submit.prevent="save" >
                <input v-model="bookToEdit.vendor" type="text" placeholder="Vendor">
                <input v-model.number="carToEdit.maxSpeed" type="number" placeholder="Max speed">
                <button>Save</button>
            </form> -->
        </section>
    `,
    // data() {
    //     return {
    //         carToEdit: null
    //     };
    // },
    // created() {
    //     const { carId } = this.$route.params;
    //     if (carId) {
    //         carService.getById(carId)
    //             .then(car => this.carToEdit = car);
    //     } else {
    //         this.carToEdit = carService.getEmptyCar();
    //     }
    // },
    // methods: {
    //     save() {
    //         carService.save(this.carToEdit)
    //             .then(car => this.$router.push('/car'));
    //     }
    // }
};