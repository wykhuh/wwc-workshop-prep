# Prep for Women Who Code: Intro to Node/Express workshop, part 2

### Prerequistes

In order to attend part 2 of the workshop, you must

1. have your computer setup
2. attended part 1 or read through the slides for part 1
3. have a working copy of the app from part 1.
4. complete this prep for part 2

### Prep work

copy this repo into your github account by forking the repo.
- click on the "Fork" button in the upper right hand corner
- you should have a copy of this repo in your account now

clone your forked copy of the repo.

```
$ git clone https://github.com/<YOUR USERNAME>/wwc-workshop-prep.git
```

switch to the part2 branch

```
$ git checkout part2
```

install the packages

```
$ npm install
```

finish the assignment below.

commit the changes and push to github 

### Your assignment  

add a template for books.

add a route for '/books' in the routes section of server.js.

Create an array of three book. Each book should have a title, an author, and
a link to the Amazon page that sells that book.

Create an unordered list in the template that displays the name book and the author.
The name of the book should be a clickable link to Amazon page.
