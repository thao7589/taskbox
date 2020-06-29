const { VueF8Utils } = require('vue/VueF8Utils');

const OpenSourceComponent = {
    name: 'OpenSourceComponent',

    inject: ['f8'], //this is for getting attributes

    template: `
        <div>
            <h1>Hello</h1>
        </div>
    `,

    data: () => ({
    }),

    created() {
    },

    mounted() {
    },

    beforeDestroy() {
    },

    computed: {

    },

    methods: {
    }
};

module.exports = VueF8Utils.componentDefaults(OpenSourceComponent);