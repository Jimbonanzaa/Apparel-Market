import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'mabuX',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
       //customer
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
    products:[
      {
        
        name: "Crew Tee Shirt",
        category: "Shirts",
        image: '/images/p1.jpg',
        price: 120,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReview: 10,
        description: 'Standard fit for men high quality product'
      },
      {
        
        name: "Short Sleeve Tee Shirt",
        category: "Shirts",
        image: '/images/p2.jpg',
        price: 100,
        countInStock: 10,
        brand: 'Adidas',
        rating: 4,
        numReview: 20,
        description: 'Standard fit for men high quality product'
      },
      {
        
        name: "Deconstructed Blazer",
        category: "Shirts",
        image: '/images/p3.jpg',
        price: 120,
        countInStock: 10,
        brand: 'Zara',
        rating: 4.5,
        numReview: 15,
        description: 'Standard fit for men high quality product'
      },
      {
        
        name: "V - Neck Tee Shirt",
        category: "Shirts",
        image: '/images/p4.jpg',
        price: 120,
        countInStock: 10,
        brand: 'Reserved',
        rating: 4.5,
        numReview: 9,
        description: 'Standard fit for men high quality product'
      },
      {
        
        name: "Sweater Fleece Jacket",
        category: "Shirts",
        image: '/images/p5.jpg',
        price: 170,
        countInStock: 10,
        brand: 'H&M',
        rating: 4.5,
        numReview: 15,
        description: 'Standard fit for men high quality product'
      },
      {
        
        name: "Palm Burgundy Jacket",
        category: "Shirts",
        image: '/images/p6.jpg',
        price: 180,
        countInStock: 10,
        brand: 'Cotton On',
        rating: 5.0,
        numReview: 5,
        description: 'Standard fit for men high quality product'
      },
    ]
  }
  export default data;
  