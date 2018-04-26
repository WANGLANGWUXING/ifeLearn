import sam,{DataTypes} from 'san'

var MyApp = san.defineComponent({
	template: '<div><div>'+
	'<input type="" value="{= name =}" placeholder="姓名（string）">'+
	'<input type="number" value="{= age =}" placeholder="年龄（number）">'+
	'<input type="" value="{= des =}" placeholder="简介"></div>'+
	'<div><p>信息：</p><button on-click="reset">移除信息</button></div>'+
	'<div><label>姓名：</label><p class="show">{{name}}</p></div>'+
	'<div><label>年龄：</label><p class="show">{{age}}</p></div>'+
	'<div><label>简介：</label><p class="show">{{des}}</p></div>'+
	'</div>',
	/*数据初始化*/
    initData:function() {
    	return{
    		name:'',
    		age:0,
    		des:''
    	};
    },
    dataTypes:{
	    name:DataTypes.string,
	    age:DataTypes.number,
	    des:DataTypes.string,    	
    },
    reset:function() {
    	this.data.set('name', '');
    	this.data.set('age', 0);
    	this.data.set('des', '');
    }
});

var myApp = new MyApp();
myApp.attach(document.body);