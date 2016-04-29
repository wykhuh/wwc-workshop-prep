# Prep for Women Who Code: Intro to Node/Express workshop, part 1

### Computer setup

1. Install Node via nvm or nodist. [instructions](https://gist.github.com/wykhuh/e3aedcfd784d703472c4a6111941adcd)

2. Install Git. https://git-scm.com/downloads

3. Get a Github account.  https://github.com

4. Get a Heroku account. https://www.heroku.com

5. Install Heroku toolbelt. https://toolbelt.heroku.com

6. Install text editor Atom https://atom.io

7.  Download and run this sample app to make sure you have your computer set up correctly.

8. After you deploy the sample app to Heroku, post a link to the Heroku app in the comments of the Meetup.

### Sample app

Download app.

```
$ git clone https://github.com/wykhuh/www-workshop-prep.git
```

Change directories
```
$ cd www-workshop-prep
```

Install the packages for the app.

```
$ npm install
```

Start the app.

```
$ npm start
```

Load this url in your browser.

```
http://localhost:3000
```

If everything is working correctly, you should see a welcome message.

Create new app on Heroku.

```
$ heroku create
```

Upload app to Heroku.

```
$ git push heroku master
```

Open the site in your browser.

```
$ heroku open
```

===

# Prep for Women Who Code: Intro to Node/Express workshop, part 2

### Prerequistes

In order to attend part 2 of the workshop, you must

1. have your computer setup as per part 1.
2. attended workshop part 1 OR read through the [slides for part 1](https://speakerdeck.com/wykhuh/express-p1) and completed part 1  app.
3. have a working copy of the app from part 1.
4. finish the assignment below.

### Your assignment  

In you copy of the app, add a template for books.

add a route for '/books' in the routes section.

Create an array of three book. Each book should have a title, an author, and
a link to the Amazon page that sells that book.

Create an unordered list in the template that displays the name book and the author.
The name of the book should be a clickable link to the Amazon page.

Your finished page should look something like this. I'm guessing your book list will
be different than mine.

![Image of screen](http://i.imgur.com/k10ZJur.png?1)

Commit the changes. Push to github.

Post a link of your repo to the meetup comments.
