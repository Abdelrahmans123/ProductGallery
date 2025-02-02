# ProductGallery
# Next.js E-Commerce Product Details Page

This project is a Next.js application that demonstrates how to build a dynamic product details page for an e-commerce website. It includes features like server-side rendering (SSR) for SEO optimization, client-side data fetching, and a responsive UI powered by React-Bootstrap.

## Features

- **Dynamic Routing**: Uses Next.js dynamic routes (`[id].js`) to display product details based on the product ID.
- **Server-Side Rendering (SSR)**: Fetches product data on the server side using `getServerSideProps` for better performance and SEO.
- **Client-Side Fallback**: If server-side fetching fails, the app fetches data on the client side for a seamless user experience.
- **Loading State**: Displays a loading spinner while data is being fetched.
- **Error Handling**: Gracefully handles cases where the product is not found or the API request fails.
- **Responsive Design**: Built with React-Bootstrap for a mobile-friendly and visually appealing UI.

## Technologies Used

- **Next.js**: For server-side rendering, dynamic routing, and optimized performance.
- **React-Bootstrap**: For building responsive and reusable UI components.
- **Axios**: For making HTTP requests to fetch product data.
- **FakeStoreAPI**: A mock API used to fetch product details.

## How It Works

1. The user navigates to a product details page (e.g., `/products/1`).
2. The app fetches the product data from the FakeStoreAPI using `getServerSideProps`.
3. If the server-side fetch fails, the app falls back to client-side fetching.
4. A loading spinner is displayed while the data is being fetched.
5. Once the data is loaded, the product details are displayed in a React-Bootstrap Card component.

## Setup Instructions

### Clone the repository:
```bash
git clone https://github.com/your-username/nextjs-product-details.git
```

### Install dependencies:
```bash
cd nextjs-product-details
npm install
```

### Run the development server:
```bash
npm run dev
```

### Open your browser and navigate to:
```
http://localhost:3000/products/1
```
to view the product details page.

## Live Demo
Check out the live demo of the project: [Live Demo Link](#)

