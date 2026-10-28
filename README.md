[README.md](https://github.com/user-attachments/files/34101238/README.md)
# E-commerce Website – IT Products

A web-based online store for IT products (computers, components, accessories), developed as a **master's degree project**. It includes a customer-facing storefront, user accounts, a shopping cart, an order and payment flow, and an admin area for managing the shop.

## Features

- **Product catalogue**: browse IT products and view product detail pages
- **Shopping cart**: add, update and remove items
- **User accounts**: registration, login/logout, profile, password change
- **Google sign-in** integration
- **Guest checkout**: order without creating an account
- **Orders & payment**: order placement, payment processing and a payment success/cancel flow
- **Customer orders**: customers can review their orders
- **Contact form**
- **Admin panel**: manage products, orders and content (see the `admin/` folder)
- **Homepage slider**

## Tech Stack

- **Backend:** PHP
- **Database:** MySQL / MariaDB *(adjust if different)*
- **Frontend:** HTML, CSS, JavaScript
- **Local server:** XAMPP / WAMP / LAMP *(or any PHP-capable server)*

## Project Structure

```
├── admin/               Admin panel
├── assets/              Static assets
├── css/                 Stylesheets
├── database/            Database scripts (SQL dump)
├── fonts/               Fonts
├── images/              Site images
├── js/                  JavaScript files
├── product_images/      Product photos
├── video/               Video content
├── index.php            Homepage
├── header.php           Shared header
├── footer.php           Shared footer
├── db.php               Database connection
├── product-detail.php   Product page
├── cart.php             Shopping cart
├── login.php            Login
├── register.php         Registration
├── profile.php          User profile
├── changepassword.php   Password change
├── customer_order.php   Customer orders
├── Guest.php            Guest checkout
├── Pay_Guest.php        Guest payment
├── connectpay.php       Payment connection
├── payment_success.php  Payment success page
├── cancel.php           Cancelled order/payment
├── Google.php           Google login
├── contact-back.php     Contact form handler
└── main.js              Main JavaScript
```

## Getting Started

### Prerequisites

- PHP 7.4 or newer *(adjust to your version)*
- MySQL or MariaDB
- A web server such as Apache (XAMPP/WAMP recommended for local use)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dumitru1991/E-commerce-Website-IT-Products.git
   ```

2. **Move the project** into your web server's root folder (for XAMPP: `htdocs/`).

3. **Create the database**
   - Open phpMyAdmin (or the MySQL CLI) and create a new database.
   - Import the SQL file from the `database/` folder.

4. **Configure the database connection**
   Edit `db.php` and set your credentials:
   ```php
   $host = "localhost";
   $user = "root";
   $password = "";
   $database = "your_database_name";
   ```

5. **Configure integrations** *(optional)*
   - Google login: set your Google API client ID/secret in `Google.php`.
   - Payment: set your payment provider keys in `connectpay.php`.

6. **Run the site**
   Start Apache and MySQL, then open:
   ```
   http://localhost/E-commerce-Website-IT-Products/
   ```

### Admin Panel

Open `http://localhost/E-commerce-Website-IT-Products/admin/` and log in with the admin credentials stored in your database.

## Security Notes

- Never commit real database passwords or API keys. Keep secrets in a config file excluded via `.gitignore`.
- Use prepared statements and password hashing (`password_hash`) for all user data.
- This is an academic project and should be reviewed and hardened before any production use.

## Screenshots

*Add screenshots of the homepage, product page, cart and admin panel here.*

## Author

**Dumitru** – [@Dumitru1991](https://github.com/Dumitru1991)

Master's degree project.

## License

*Add a license of your choice (e.g. MIT), or state that the project is for academic purposes only.*
