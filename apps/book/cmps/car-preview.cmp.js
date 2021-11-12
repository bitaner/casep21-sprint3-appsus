export default {
    props: ['car'],
    template: `
        <div class="car-preview">
            <p>Vendor : {{car.vendor}}</p>
            <p>Max speed : {{car.maxSpeed}}</p>
        </div>
    `,
}