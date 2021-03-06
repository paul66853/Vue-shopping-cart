var app = new Vue(
    {
        el:'#app',data:{
            itemList:[
                {
                    id:'1',
                    itemName:'優質白色短T',
                    imgUrl:'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80',
                    price:'750',
                    count:'2'
            },
            {
                id:'2',
                itemName:'地獄骷髏黑色短T',
                imgUrl:'https://images.unsplash.com/photo-1616150638538-ffb0679a3fc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=713&q=80',
                price:'690',
                count:'3'
            },
            {
                id:'3',
                itemName:'百搭牛仔褲',
                imgUrl:'https://images.unsplash.com/photo-1529391409740-59f2cea08bc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1124&q=80',
                price:'790',
                count:'1'
              },
              {
                id:'4',
                itemName:'質感褐色系大衣',
                imgUrl:'https://images.unsplash.com/photo-1616938528276-17aa6c0c3c21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                price:'3000',
                count:'1'
              },
        ]
        },methods:{
            handlePlus: function(item){
                item.count++;
            },
            handleSub: function(item){
                if(item.count>1){
                item.count--;                
                }
            },
            handledelete: function(index){
                console.log(this);
                this.itemList.splice(index,1);
            }
        },computed:{}
    }
)