//fires when window loads
window.onload = function() {

  $.get('data/tweets.json').then(function(tweets){
      console.log(tweets)
      return $.get('data/friends.json')
  }).then((friends)=>{
      console.log(friends)
  }).catch((error)=>{
      console.log(error)
  })

// function get(url) {
//     return new Promise(function(resolve,reject){
//         var xhttp = new XMLHttpRequest()
//         xhttp.open('GET',url,true)
//         xhttp.onload = function() {
//             if(xhttp.status == 200) {
//                 resolve(JSON.parse(xhttp.response))
//             }else{
//                 reject(xhttp.statusText)
//             }
//         }
//         xhttp.onerror = function() {
//             reject(xhttp.statusText)
//         }
//         xhttp.send()
//     })
// }

// var promise = get('data/tweets.json')
// promise.then(function(tweets){
//     console.log(tweets)
//     return get('data/friends.json')
// }).then(function(friends){
//     console.log(friends)
// }).catch((error)=>{
//     console.log(error)
// })

}