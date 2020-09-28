var vue_det = new Vue({
    el: '#intro',
    data: {
        name: 'karan',
        website: 'https://www.facebook.com/fb.com',
        age: 24
    },
    methods: {
        greet: function(time) {
            // this.name = 'muna'
            return 'Good ' + time + ' ' + this.name;

        },
        logname: function() {
            console.log("you entered your name");
        },
        logage: function() {
            console.log("you entered your age");
        }
    }
});