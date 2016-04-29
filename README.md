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

connect your copy of repo to this repo

```
$ git remote add upstream https://github.com/wykhuh/wwc-workshop-prep.git

$ git remote set-url origin https://github.com/<YOUR USERNAME>/wwc-workshop-prep.git/
```

pull down the latest files from this repo

```
$ git fetch upstream
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


### Your assignment  

add a template for books.

add a route for '/books' in the routes section of server.js.

Create an array of three book. Each book should have a title, an author, and
a link to the Amazon page that sells that book.

Create an unordered list in the template that displays the name book and the author.
The name of the book should be a clickable link to Amazon page.

Your finshed page should look something like this. I'm guessing your book list will
be different than mine.

![Image of screen](http://i.imgur.com/k10ZJur.png?1)

commit the changes.

push to your github account.

```
$ git push origin master

```

post a link of your repo to the meetup comments.
