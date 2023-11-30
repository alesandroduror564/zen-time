/*
Filename: ComplexCodeExample.js
Content: This code implements a complex system for managing a virtual library with books, users, and borrowing information.
*/

// Book class
class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author; 
    this.publicationYear = publicationYear;
    this.available = true;
  }
}

// User class
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.borrowedBooks = [];
  }
  
  borrowBook(book) {
    if (book.available) {
      this.borrowedBooks.push(book);
      book.available = false;
      console.log(`User ${this.name} has borrowed the book "${book.title}"`);
    } else {
      console.log(`Book "${book.title}" is currently not available`);
    }
  }
  
  returnBook(book) {
    const index = this.borrowedBooks.indexOf(book);
    if (index !== -1) {
      this.borrowedBooks.splice(index, 1);
      book.available = true;
      console.log(`User ${this.name} has returned the book "${book.title}"`);
    } else {
      console.log(`User ${this.name} did not borrow the book "${book.title}"`);
    }
  }
}

// Library class
class Library {
  constructor() {
    this.books = [];
    this.users = [];
  }
  
  addBook(book) {
    this.books.push(book);
  }
  
  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index  !== -1) {
      this.books.splice(index, 1);
      console.log(`Book "${book.title}" has been removed from the library`);
    } else {
      console.log(`Book "${book.title}" does not exist in the library`);
    }
  }
  
  addUser(user) {
    this.users.push(user);
  }
  
  removeUser(user) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
      console.log(`User ${user.name} has been removed from the library`);
    } else {
      console.log(`User ${user.name} does not exist in the library`);
    }
  }
}

// Usage example
const library = new Library();

const book1 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 1997);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book3 = new Book("1984", "George Orwell", 1949);

const user1 = new User("John Smith", 25, "john@example.com");
const user2 = new User("Jane Doe", 30, "jane@example.com");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.addUser(user1);
library.addUser(user2);

user1.borrowBook(book2);
user2.borrowBook(book1);
user1.borrowBook(book3);

console.log(user1.borrowedBooks);
console.log(user2.borrowedBooks);

user1.returnBook(book2);
user1.borrowBook(book1);
user2.returnBook(book1);

console.log(user1.borrowedBooks);
console.log(user2.borrowedBooks);

library.removeUser(user1);
library.removeBook(book2);

console.log(library.users);
console.log(library.books);