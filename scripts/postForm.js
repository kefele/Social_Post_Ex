"use strict"

const postForm = {

    bindings:{
        postForm:"<",
        addPost:"&",
    },
    template:`
    <form ng-show="showForm" ng-submit="$ctrl.addPost({newPost: $ctrl.newPost})">
      <h1>Title</h1>
      <input type="text" ng-model="$ctrl.newPost.title">
      <h1>Thoughts</h1>
      <input type="textarea" ng-model="$ctrl.newPost.thoughts">
      <button>Add Post</button>
    
    </form>
    
    `,
}


angular
  .module("socialApp")
  .component("postForm", postForm)