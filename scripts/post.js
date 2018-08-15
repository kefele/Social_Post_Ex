"use strict"


const post = {
   bindings:{
       post: "<"
   },
   template:`
   <p>{{$ctrl.post.title}}</p>
   <p>{{$ctrl.post.thoughts}}</p>
   
   `
//   (item.title, item.thoughts)


}
angular
  .module("socialApp")
  .component("post", post)