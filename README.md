# 🛍️ My E-Commerce Store

Welcome to **My E-Commerce Store**, a fully functional e-commerce platform designed to provide a smooth and user-friendly shopping experience. This project combines modern design with robust back-end functionality to deliver an intuitive and scalable application.

---

## 🌟 Key Features

### 🏠 **Home Page**
- Eye-catching **hero section** to welcome users.
- Highlights the store's **unique selling points** and benefits of shopping with us.
- Clear navigation to explore **Products**, view the **Cart**, and access **Contact Us**.


### 🛒 **Products Page**
- Displays a **dynamic list of products** fetched from a database.
- Includes product details like name, description, price, and images.
- Allows users to **add products to their cart** with a single click.

### 🛍️ **Cart Page**
- Displays all selected products along with their **quantities and subtotals**.
- Real-time updates for **tax**, **shipping**, and **grand total**.
- Users can **adjust quantities** or **remove items** from the cart.

### 💳 **Checkout Page**
- Summarizes the **cart contents** and provides the final total.
- A clean, user-friendly interface to proceed to the payment process.

### 📞 **Contact Us Page**
- Displays **contact information**: phone number, email, and physical address.
- Functional **message form** for user inquiries.
- **Google Maps integration** to show the store location.

---

## 💻 Tech Stack

| Technology       | Purpose                                   |
|-------------------|-------------------------------------------|
| **Node.js**       | Server-side application logic             |
| **Express.js**    | Routing and API handling                  |
| **MySQL**         | Database for storing product and cart data|
| **EJS**           | Template engine for rendering dynamic HTML|
| **HTML/CSS**      | Front-end structure and styling           |
| **JavaScript**    | Interactivity and client-side logic       |

---

## 🛠️ Installation and Setup

### Prerequisites
- [Node.js](https://nodejs.org/) installed.
- [MySQL](https://www.mysql.com/) server running.

### Steps to Run the Project
1. **Set Up the Project Directory**:
   - Download the project files to a folder on your system.

2. **Navigate to the Project Directory**:
   - Open your terminal or command prompt and navigate to the folder where you saved the project:
     ```bash
     cd /path/to/your/project
     ```

3. **Install Required Libraries**:
   - Ensure you have [Node.js](https://nodejs.org/) installed.
   - Run the following command to install the necessary dependencies:
     ```bash
     npm install
     ```
     This will install all the required libraries listed in the `package.json` file, including:
     - **express**: For server and routing.
     - **mysql**: For connecting to the MySQL database.
     - **ejs**: For rendering dynamic HTML pages.
     - Other dependencies necessary for the project.

4. **Set Up the Database**:
   - Ensure you have [MySQL](https://www.mysql.com/) installed and running on your system.
   - Open your MySQL Command-Line Client or any MySQL GUI tool like[MySQL Workbench](https://www.mysql.com/products/workbench/).
   - Create a new database for the project:
     ```sql
     CREATE DATABASE ecommerce;
     ```
   - Import the `database.sql` file into your database to create the required tables and seed data:
     - For command-line users:
       ```bash
       mysql -u your-username -p ecommerce < database.sql
       ```
     - For GUI tools, use the "Import" feature and select the `database.sql` file.


5. **Run the Server**:
   - Start the Node.js server by running:
     ```bash
     npm start
     ```
   - The server will start running at `http://localhost:3000`.

6. **Access the Application**:
   - Open your browser and navigate to:
     ```
     http://localhost:3000
     ```

That's it! Your e-commerce application should now be running locally on your machine.
