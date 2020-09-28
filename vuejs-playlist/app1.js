Vue.component('component1', {
    data: function() {
        return {
            count: 0

        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
new Vue({
    el: "#vue-app-one",
    data: {
        output: 'null'
    },
    methods: {
        readrefs: function() {
            console.log(this.$refs.input.value);
            this.output = this.$refs.input.value;
            console.log(this.$refs.test.innerText)
        }
    }

})