//fires when window loads
window.onload = function() {

var handleError = (jqXHR,textStatus,error)=>{

    console.log(error)
}

 $.ajax({
     type : "GET",
     url:"data/tweets.json",
     success : cbTweets,
     error :handleError
 })
 function cbTweets(data) {
    console.log(data)

    $.ajax({
        type : "GET",
        url:"data/friends.json",
        success : (data)=>{
           console.log(data)
   
           
        },
        error :handleError
    })
   
 }

   

}