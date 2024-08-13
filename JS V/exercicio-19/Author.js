const Post = require("./Post");

class Author {
  constructor(name, posts) {
    this.name = name;
    this.posts = [];
  }
  createPost(title, content) {
    const newPost = new Post(title, content, [], this.name);
    this.posts.push(newPost);
    return console.log(newPost);
  }
}

const daniel = new Author("Daniel D");
const john = new Author("John Doe");

daniel.createPost("The Truth Behind Bananas", "Text about Bananas");
daniel.createPost("The Truth Behind Apples", "Text about Apples");

john.createPost("The Meaning Of Life", "Text about Meaning Of Life");
john.createPost("The Meaning Of Pokemon", "Text about Meaning Of Pokemon");

daniel.posts[0].addComment("John Dee", "Cool!");
daniel.posts[1].addComment("John Dee", "Nice!");
john.posts[0].addComment("Daniel D", "Dope!");
john.posts[1].addComment("Daniel D", "Fire!");

console.log(john);
console.log(daniel);

module.exports = Author;
