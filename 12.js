var v =  new Vue({
    el:"#our-app",
    data:{
        isActive:false,
        count:0  // 1 2 3

    },
    methods:{
        incrementCountValue:function () {
            this.count++;
        }
        }



});