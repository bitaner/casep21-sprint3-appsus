
const textBox = {
    props: ['data'],
    template: `
        <div class="row">
            <label>
                {{data.label}}
                <input type="text" v-model="txt" @blur="reportVal" />
            </label>
        </div>
    `,
    data() {
        return {
            txt: '',
        };
    },
    methods: {
        reportVal() {
            this.$emit('setInput', this.txt);
        }
    }
};
const selectBox = {
    props: ['data'],
    template: `
        <div class="row">
            <label>
                {{data.label}}
                <select v-model="selectedOpt" @blur="reportVal">
                    <option v-for="opt in data.opts">{{opt}}</option>
                </select>
            </label>
        </div>
    `,
    data() {
        return {
            selectedOpt: '',
        };
    },
    methods: {
        reportVal() {
            this.$emit('setInput', this.selectedOpt);
        }
    }
};
const rangeBox = {
    props: ['data'],
    template: `
        <div class="row">
            <label>
                {{data.label}}
                <input type="number" v-model.number="range.min" /> -
                <input type="number" v-model.number="range.max" @blur="reportVal" />
            </label>
        </div>
    `,
    data() {
        return {
            range: { min: this.data.min, max: this.data.max }
        };
    },
    methods: {
        reportVal() {
            this.$emit('setInput', this.range);
        }
    }
};
const dateBox = {
    props: ['data'],
    template: `
        <div class="row">
            <label>
                {{data.label}}
                <input type="date" v-model="date" @change="reportVal" /> -
            </label>
        </div>
    `,
    data() {
        return {
            date: new Date()
        };
    },
    methods: {
        reportVal() {
            this.$emit('setInput', this.date);
        }
    }
};

export default {
    template: `
    <section class="survey app-main">
        <h1>Survey</h1>


        <form @submit.prevent="save">
            <component v-for="(currCmp, idx) in cmps" 
                        :is="currCmp.type" 
                        :data="currCmp.data" 
                        @setInput="setInput($event, idx)">
            </component>
            <button type="submit">Save</button>
        </form>

    </section> 
    `,
    data() {
        return {
            cmps: [
                {
                    type: 'textBox',
                    data: {
                        label: 'Car Name:'
                    }
                },
                {
                    type: 'textBox',
                    data: {
                        label: 'Car model:'
                    }
                },
                {
                    type: 'selectBox',
                    data: {
                        label: 'Year',
                        opts: [2015, 2016, 2017, 2018]
                    }
                },
                {
                    type: 'rangeBox',
                    data: {
                        label: 'Range',
                        min: 10, max: 30
                    }
                },
                {
                    type: 'dateBox',
                    data: {
                        label: 'Date',
                    }
                }

            ],
            answers: []
        };
    },
    methods: {
        setInput(ev, inputIdx) {
            this.answers[inputIdx] = ev;
            console.log('Survey Got ev', ev);
        },
        save() {
            console.log('Survey Answers', this.answers);
        }
    },
    created() {

    },
    computed: {

    },
    watch: {

    },
    components: {
        textBox,
        selectBox,
        rangeBox,
        dateBox
    }
};