import sam,{DataTypes} from 'san'
var i = 0;
var MyApp = san.defineComponent({
	template: '<div><div>'+
                 '<button on-click="addUser">添加</button>'+
              '</div>'+
              '<div>'+
                  '<table cellspacing="0" cellpadding="0">'+
                     '<tr>'+
                        '<td>姓名</td>'+
                        '<td>审核状态</td>'+
                        '<td>操作</td>'+
                     '</tr>'+
                     '<template s-for="u in users">'+
                        '<tr>'+
                            '<td>{{u.userName}}</td>'+
                            '<td>'+
                                '<span s-if="{{u.userState==\'2\'}}">合格</span>'+
                                '<span s-elif="{{u.userState==\'1\'}}">不合格</span>'+
                                '<span s-elif="{{u.userState==\'0\'}}">待审核</span>'+
                            '</td>'+
                            '<td>'+
                                '<button s-if="{{u.userState==\'2\'}}" on-click="delUser(u)">删除</button>'+
                                '<button s-elif="{{u.userState==\'1\'}}" on-click="delUser(u)">删除</button>'+
                                '<button s-elif="{{u.userState==\'0\'}}" on-click="editUser(u)">审核</button>'+
                            '</td>'+
                        '</tr>'+
                     '</template>'+
                 '</table>'+
              '</div></div>',
	/*数据*/
    initData:function() {
    	return{
    		users:[
                {userName:'张三',userState:'2'},
                {userName:'李四',userState:'1'},
                {userName:'王五',userState:'0'},
                {userName:'赵六',userState:'0'},
                {userName:'孙七',userState:'0'},          
            ],
    		
    	};
    },
    addUser: function () {
        i = i + 1;
        this.data.push('users', {userName:'孙七'+i,userState:'0'});
    },
    delUser:function(user) {
        
        var users = this.data.raw.users;      
        for (var i = 0; i<users.length;i++) {
            if(users[i].userName == user.userName){
                this.data.removeAt('users', i);
            }
        }
        
    },
    editUser:function(user) {
        var users = this.data.raw.users;       
        for (var i = 0; i<users.length;i++) {
            if(users[i].userName == user.userName){
                this.data.set('users['+i+'].userState', '2');
            }
        }
    }
   
});

var myApp = new MyApp();
myApp.attach(document.body);