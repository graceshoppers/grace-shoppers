# Grace Shopper Project

**Check grace-shoppe-project for issues to be worked on**

* To Start:
  * npm install
  * npm run start:dev

## Sprints
_Each sprint will have several main goals, followed by tasks which we need to accomplish, and issues on the project board that everyone can tackle_

* **Sprint 1:** Basic functionality for all visitors + CRUD (for adding, deleting, editing products)
  * _Period: 4/25 - 5/2_
  * Goals:
    * Anyone can browse home page(which for now can just be a catalog page serving all products)
    * Anyone can do a text search in seach bar fo specific product
    * Anyone can add, edit, delete a product
    * Anyone can add products to cart
  * Tasks:
    * Back-End:
      * Have a db with categories, products, users, orders, reviews models, and a seed
      * Have API route to serve db
        * Have get, post, put, delete routes
      * Have App route to serve general pages
    * Front-End:
      * Have a catalog page that serves all products
        * Have single product pages
        * Clicking on product in catalog page will open single product page
        * Have delete/ hide button for all individual product
      * Have a Nav bar with a Home tab and search bar
        * search bar should be able to filter out only the searched item on catalog page
      * Have a Create Product/ Edit Product form
      * Have a cart/order page that houses all the add-to-cart products before check out


* **Sprint 2:** Users Authentication (Unknown, Customer, Admin), additional functionalities, styles
  * _Period: 5/3 - 5/9_
  * Goals:
    * Unknown:
      * can browse all pages and products
      * can add to cart product
    * Customer:
      * can do everything Unknown can
      * can check out/ puchase the items in cart with a payment API
      * can view order history
      * can see browse history
      * get email confirmation for their orders
    * Admin:
      * can do everything customer can
      * can manipulate database
      * can see all pending orders and manipulate orders

* **Sprint 3:** Finalize styling, additional functionality
  * _Period: 5/10 - 5/14_
  * Goals:
  * Tasks:
  * Issues:

## Learning Points/ Helpful Tips:
_To add any help tips/ new learnings our team comes across regarding this project_

