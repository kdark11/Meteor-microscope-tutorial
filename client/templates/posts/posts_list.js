Template.postsList.helpers({
  posts: function() {
    // body...
    return Posts.find();
  }
});