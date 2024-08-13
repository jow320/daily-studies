const Author = require("./Author");
const Comment = require("./Comment");

class Post {
  constructor(title, content, comments, author) {
    this.title = title;
    this.content = content;
    this.comments = comments;
    this.author = author;
  }
  addComment(author, content) {
    const newC = new Comment(author, content);
    this.comments.push(newC);
  }
}

module.exports = Post;
