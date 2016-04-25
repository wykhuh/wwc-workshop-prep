# Prep for Women Who Code: Intro to Node/Express workshop

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
