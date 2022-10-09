# Strapi Project

User credentials

- email: admin@admin.com
- username: admin
- password: Pass1234


To run the project:

```
npm install
npm run develop
```


# JavaScript Frameworks Course Assignment

![image](./public/uploads/screenshot/Skjermbilde%202022-10-09%20kl.%2017.28.50.png)

An overview of the startpage.

## Description

## Home page

The home page must include:

A hero banner with an image that is uploaded to Strapi. You can find this in the Home single type in the provided Strapi project.
A list of featured products. On Strapi products can be marked as ‘featured’. When a product is marked as ‘featured’ it should be displayed on the homepage. You can find the products in the Products collection type.
Products page
The products page must include:

A list of all products added to Strapi. Each product must display its title, price and image. The product should link to its products detail page.
A search text box. When searching (filtering), only the products that include the searched text in their title or description should be listed.
Product details page
This page is reached by a user clicking on a product on the product list page. The product details page must include:

title
description
image
price
an add to cart button. This will toggle the product in and out of a cart array stored in local storage.
Cart/Basket page
The cart/basket page must display a list of all products added to the cart. Load the items that have been added to local storage and display them on the page. If the cart is empty display a message indicating this.

Each product in the cart must display:

title
price
a link to the product view page
image
After the list of products, display the total price of all the products in the cart.

Note: the cart page is not a checkout page. No payments or user details are required to be taken.

## Admin section
The admin section (apart from the log in form) must only be accessible to logged in admin users and must include the following features.

Login/Logout
Create an admin login form that allows administrator users to login. Use local storage to keep the user logged in.

When logged in, display a logout button in the layout that logs the user out. Logging out should not clear the cart.

Add/edit products
Create form(s) that allow products to be added and edited. The form must allow the user to toggle whether a product is featured.

Product images
For adding/editing product images use either of these 2 methods:

Use a file upload field to upload images to Strapi, or
Use a text input that allows a URL to be entered. This allows an image from an external URL to be used as the product image.
You can find the fields for each in Strapi. Use only one to display a product image.

Delete existing product
Allow products to be deleted. Before a product is deleted you must display a confirmation dialog. The product should only be deleted if the user confirms.

## Built With

Here is what I used:

- [Bootstrap](https://getbootstrap.com)
- [Strapi](https://strapi.io/)
- [Heroku](https://www.heroku.com/platform)

## Getting Started

### Installing

1. Clone the repo:

```bash
git clone git@github.com/j0ach1m/strapi-sp2.git
```

2. Install the dependencies:

```
npm install
```

### Running


To run the app, run the following commands:

```bash
npm run start
```

## Contact


[My LinkedIn page](https://www.linkedin.com/in/joachim-ring/)



