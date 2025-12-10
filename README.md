🚀 NextGen Shop — Admin & Product Management Platform

NextGen Shop is a modern e-commerce admin dashboard built with Next.js, TypeScript, Tailwind CSS, and Zustand. It allows admins to manage products efficiently, with features like CRUD operations, role-based access, dark mode, and real-time previews.

📑 Table of Contents

About

Features

Requirements

Project Structure

Quick Start

Environment Variables

Deployment

Author / Contact

📘 About

NextGen Shop is a web-based admin dashboard that allows store owners or admins to manage products, categories, and user access. The platform is fully responsive, supports dark mode, and provides an intuitive interface for adding, editing, deleting, and viewing products.

✨ Features

User Authentication: Admin login and role-based access control

Product Management:

Add / Edit / Delete products

View all products in a table with images and details

Add products to wishlist or cart (buy)

Live image preview on add/edit forms

Category Management: Assign categories to products

Responsive Dashboard: Works on desktop and mobile devices

Dark Mode support

Real-Time Updates: Changes reflect immediately via Zustand store

Navigation: Sidebar navigation with active link highlight

Notifications: Alerts on successful creation or deletion

Role-Based Access: Admin, Manager, Viewer (different permissions)

📦 Requirements

Node.js 18+

npm or yarn

Git

Vercel account (optional for deployment)

🔧 Quick Start

Clone the repository

git clone https://github.com/Arthurdavin/Final-NextGen-shop.git
cd NextGenShop


Install dependencies

npm install
# or
yarn install


Create .env.local file (if needed)

NEXT_PUBLIC_API_URL=your_api_endpoint
NEXT_PUBLIC_API_KEY=your_api_key


Run development server

npm run dev
# or
yarn dev

Open in browser

http://localhost:3000/admin

🚀 Deployment

Deploy easily on Vercel

Connect your GitHub repository

Set environment variables if using an external API