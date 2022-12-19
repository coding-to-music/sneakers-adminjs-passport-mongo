# sneakers-adminjs-passport-mongo

# 🚀 sneakers eCommerce with adminjs passport and mongo 🚀

https://github.com/coding-to-music/sneakers-adminjs-passport-mongo

https://sneakers-adminjs-passport-mongo.vercel.app

From / By https://github.com/Dat10496/Final-project-BE

https://sneaker-store-dat.netlify.app/

https://sneaker-app-api.onrender.com

https://sneaker-app-api.onrender.com/admin/login

https://sneaker-app-api.onrender.com/v1/items?limit=12

## Environment variables:

```java
PORT = "YOUR PORT"

MONGO_URI = "YOUR URL CONNECT TO YOUR DB"

GOOGLE_CLIENT_ID = "YOUR GOOGLE CLIENT ID USING PASSPORT"
GOOGLE_CLIENT_SECRET = "YOUR GOOGLE CLIENT SECRET USING PASSPORT"

JWT_SECRET_KEY = "YOUR JWT SECRET KEY"
PASSPORT_SECRET_SESSION = "YOUR SECRET SESSION USING PASSPORT"
SENDGRID_API_KEY = "YOUR API KEY USING SENDGRID"

ADMINJS_EMAIL = "YOUR DEFAULT EMAIL LOGIN IN ADMINJS PAGE"
ADMINJS_PASSWORD = "YOUR DEFAULT PASSWORD LOGIN IN ADMINJS PAGE"
ADMINJS_SECRET_SESSION = "YOU ADMIN SECRET SESSION USING ADMINJS"
```

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/sneakers-adminjs-passport-mongo.git
git push -u origin main
```

## Upgrade npm packages

```
ncu
```

Output

```
 adminjs              ^6.5.0  →   ^6.7.2
 argon2              ^0.30.1  →  ^0.30.2
 mongoose             ^6.7.0  →   ^6.8.0
 node                ^19.0.0  →  ^19.3.0
 swagger-ui-express   ^4.5.0  →   ^4.6.0
 tslib                ^2.4.0  →   ^2.4.1
```

# Sneaker Store

Sneaker Store is a place where you can find and buy for your ambition sneakers that you need

You can go to page via https://sneaker-store-dat.netlify.app/

# Description

In this app, you can search, get information and make a payment for this sneaker if you love it

User can login faster by google account, and make a payment online via paypal. After user make a payment successfully user will receive a information mail about this purchase

As a owner shop, i use adminjs dashboard which owner easily manage the products, user and the payment with CRUD

Admin page: https://sneaker-app-api.onrender.com/admin/login

## User Story

As a user, you can get and select items

As a admin page, you can edit, upload, get , delete your items

### Authentication

-[] as a user, i can register and login with name, email, password
-[] as a admin shop, i can register and login with name, email, password

### Users

-[] as a user, i can see list of items
-[] as a user, i can update my profile

### Admin

-[] as a admin shop, i can edit item
-[] as a admin shop, i can create new item
-[] as a admin shop, i can delete the item
-[] as a admin shop, i can get list of items

### Items

-[] as a user and admin, i can get list of items
-[] as a user and admin, i can get detail of item

## Endpoint APIs

### Auth APIs

```Javascript
/**
 * @route POST /users/login
 * @description Login with username and password
 * @body {email, password}
 * @access Public
 * /
```

### Auth Google APIs

```Javascript
/**
 * @route POST /auth/google/login/success
 * @description Get user's information after login by google
 * /
```

```Javascript
/**
 * @route GET /auth/google/login/failed
 * @description Response if login error
 * /
```

```Javascript
/**
 * @route GET /auth/google
 * @description Direct to login google page
 * /
```

```Javascript
/**
 * @route GET /auth/google/callback
 * @description Receive google'response after login via google account
 * /
```

### Users APIs

```Javascript
/**
 * @route POST /users
 * @description Register new user
 * @body {name, email, password}
 * @access Public
 * /
```

```Javascript
/**
 * @route GET /users/me
 * @description Get current user Info
 * @access Login required
 * /
```

```Javascript
/**
 * @route PUT /users
 * @description Update user's profile
 * @body {name, phoneNumber, address}
 * @access Login required
 * /
```

```Javascript
/**
 * @route PUT /users/addcart
 * @description Add product to user's cart
 * @access Login required
 * /
```

```Javascript
/**
 * @route GET /users/history
 * @description Get payment'history
 * @access Login required
 * /
```

### Payment APIs

```Javascript
/**
 * @route GET /payment
 * @description Get payment's detail
 * @access Login
 * /
```

```Javascript
/**
 * @route POST /payment
 * @description Post info of user's payment
 * @access Login
 * /
```

### Items

```Javascript
/**
* @route GET /items?page=1&limit=20
* @description Get item with pagination
* @access Public
* /
```

```Javascript
/**
* @route GET /items/:id
* @description Get the item's detail
* @access Public
* /
```

## Diagram Relation

![diagram image](./image//sneaker_diagram.png)
