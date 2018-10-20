//fires when window loads
window.onload = function() {

   //request object xml gets data back from a server
   var http = new XMLHttpRequest()
   //on changing the ready state
    http.onreadystatechange = () => {
//        console.log(http)
//    
   if(http.readyState == 4 && http.status == 200) {
       //console.log(JSON.parse(http.response))
   }
}

   //setting connection
   http.open('GET',"data/tweets.json",true)
   //telling js to grab the data
   http.send()
   //console.log('test')

   //jquery method
   $.get("data/tweets.json",(data)=>{
       console.log(data)
   })
   console.log('test')


   

}