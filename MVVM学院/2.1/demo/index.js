import sam,{DataTypes} from 'san'

var MyApp = san.defineComponent({
	template: '<div><div>'+
	'<input type="" name="name" value="{=name=}" placeholder="姓名（string）">'+
	'<input type="number" name="name" value="{= ageStr =}" placeholder="年龄（number）">'+
	'<input type="" name="name" value="{=des=}" placeholder="简介"></div>'+
	'<div><p>信息：</p><button on-click="reset">移除信息</button></div>'+
	'<div><label>姓名：</label><p class="show">{{name}}</p></div>'+
	'<div><label>年龄：</label><p class="show">{{age}}</p></div>'+
	'<div><label>简介：</label><p class="show">{{des}}</p></div>'+
	'</div>',
	/*数据*/
    initData:function() {
    	return{
    		name:'',
    		ageStr:'',
    		des:''
    	};
    },
    /*数据类型校验*/
    dataTypes:{
	    name:DataTypes.string,
	    ageStr:DataTypes.string,
	    des:DataTypes.string,    	
    },
    /*点击事件*/
    reset:function() {
    	this.data.set('name', '');
    	this.data.set('ageStr', '');
    	this.data.set('des', '');
    },
    /**/
    computed:{
    	age(){
    		var age = this.data.get("ageStr");
    		var number = parseInt(age,10);
    		return isNaN(number)?"":number;
    	}
    }
});

var myApp = new MyApp();
myApp.attach(document.body);