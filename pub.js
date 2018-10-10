let redis = require("redis");
let sub = redis.createClient()
let pub = redis.createClient();
let msg_count = 0;

sub.on("subscribe",function(channel,message){
    pub.publish("a nice channel ","I an sending a message. ");
    pub.publish("a nice channel ","I am sending a second mesage");
    pub.publish("a nice channel ","I am sending a third mesage");
});

sub.on("message", function(channel,message){
    console.log("sub channel " + channel +":"+message);
    msg_count += 1;
    if(msg_count===3){
        sub.unsubscribe();
        sub.quit();
        pub.quit();
    }
});

sub.subscribe("a nice channel");