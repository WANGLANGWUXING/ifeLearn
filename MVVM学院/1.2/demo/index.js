var MyApp = san.defineComponent({
    template: '<p>Hello {{name}}!</p>',

    initData: function () {
        return {
            name: 'world'
        };
    }
});


var myApp = new MyApp();
myApp.attach(document.body);