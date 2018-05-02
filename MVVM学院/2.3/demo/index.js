
var MyApp = san.defineComponent({
	template: '<div class="list {{isBgRed ? \'bg-blue\' : \'bg-red\'}}" on-click="changeBgColor"></div>',

    changeBgColor: function () {
        var isBgRed = this.data.get('isBgRed');
        this.data.set('isBgRed', !isBgRed);
    },
    
   
});

var myApp = new MyApp();
myApp.attach(document.body);