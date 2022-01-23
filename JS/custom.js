new fullpage('#fullpage',{
    autoScrolling:true,
    scrollHorizontally:true,
    onLeave: function(origin,destination,direction){
        var loading2 = new TimelineMax();
        //                     對象,時間 
        loading2.fromTo(".upper",0.6,{
            //由alpha 0 
            autoAlpha: 0 
            
        },{
            //變alpha 1 
            autoAlpha: 1 
            
        }, "+=0.5") //加0.5秒後先彈出animation
    }
});


//Load完成個web之後再出之後既野 for Animation
document.addEventListener("DOMContentLoaded",function(){

    


    var loading = new TimelineMax();
    //                     對象,時間 
    loading.fromTo(".upper h2",0.6,{
        //由alpha 0 
        autoAlpha: 0 ,
        //由下至上升上去
        y:20
    },{
        //變alpha 1 
        autoAlpha: 1 ,
        //由下至上升上去
        y:0
    })
    
    .fromTo(".upper p",0.6,{
        autoAlpha : 0
    },{
        autoAlpha : 1
    })
    
});