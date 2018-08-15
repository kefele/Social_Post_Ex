"use strict"
console.log("socialPost")

const socialPost ={
    template:`
    
    <section>
        <h1>My Thoughts<h1>
        <button ng-onclick="ng-model='showForm'" >New Thought</button>
        <post-form add-post="$ctrl.addPost(newPost)"></post-form>

        <post ng-repeat="post in $ctrl.postList track by $index" post="post"></post>
    
    
    </section>
    
    
    `,
    controller: function () {
       const vm= this;
       vm.postList = [
           {
            title: "Dog",
            thoughts: "I really like dogs"
        }
       ];

       vm.addPost = (newPost) =>{
        vm.postList.unshift(angular.copy(newPost))
        console.log("hi")
       }
    }
    

}
angular
  .module("socialApp")
  .component("socialPost", socialPost)