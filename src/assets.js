import image1 from "./image/women-10.jpeg";
import image60 from "./image/women-11.jpeg";
import image61 from "./image/col-66.jpeg";

import image2 from "./image/women-4.jpeg";

import image3 from "./image/women-2.jpeg";
import image63 from "./image/women-8.jpeg";
import image64 from "./image/women-16.jpeg";
import image65 from "./image/women-20.jpeg";

import image4 from "./image/t-shirt-3.jpeg";
import image66 from "./image/t-shirt-12.jpeg";
import image67 from "./image/t-shirt-13.jpeg";
import image68 from "./image/t-shirt-17.jpeg";

import image5 from "./image/t-shirt-10.jpeg";
import image69 from "./image/t-shirt-11.jpeg";
import image70 from "./image/t-shirt-14.jpeg";
import image71 from "./image/t-shirt-1.jpeg";

import image6 from "./image/t-shirt-18.jpeg";
import image7 from "./image/t-shirt-9.jpeg";
import image72 from "./image/t-shirt-8.jpeg";

import image8 from "./image/shoes-1.jpeg";
import image73 from "./image/shoes-2.jpeg";
import image74 from "./image/shoes-3.jpeg";

import image9 from "./image/cap-2.jpeg";
import image75 from "./image/cap-1.jpeg";
import image76 from "./image/cap-4.jpeg";
import image77 from "./image/cap-5.jpeg";

import image10 from "./image/puff-jacket-2.jpeg";
import image78 from "./image/puff-jacket-1.jpeg";
import image79 from "./image/puff-jacket-3.jpeg";

import image12 from "./image/cap-3.jpeg";

import image13 from "./image/t-shirt-6.jpeg";
import image80 from "./image/t-shirt-5.jpeg";

import image14 from "./image/women-17.jpeg";
import image81 from "./image/women-12.jpeg";

import image15 from "./image/women-14.jpeg";
import image16 from "./image/col-1.jpeg";
import image82 from "./image/col-5.jpeg";
import image83 from "./image/col-10.jpeg";
import image84 from "./image/col-18.jpeg";

import image17 from "./image/col-2.jpeg";
import image18 from "./image/col-3.jpeg";
import image85 from "./image/col-4.jpeg";
import image86 from "./image/col-14.jpeg";
import image87 from "./image/col-61.jpeg";

import image21 from "./image/col-6.jpeg";
import image22 from "./image/col-7.jpeg";
import image23 from "./image/col-8.jpeg";
import image88 from "./image/col-19.jpeg";
import image89 from "./image/col-21.jpeg";
import image90 from "./image/col-9.jpeg";

import image27 from "./image/col-12.jpeg";
import image29 from "./image/col-14.jpeg";
import image30 from "./image/col-15.jpeg";
import image31 from "./image/col-19.jpeg";
import image32 from "./image/col-22.jpeg";
import image33 from "./image/col-24.jpeg";
import image91 from "./image/col-25.jpeg";
import image92 from "./image/col-27.jpeg";
import image93 from "./image/col-40.jpeg";

import image34 from "./image/col-26.jpeg";
import image35 from "./image/col-30.jpeg";
import image94 from "./image/col-32.jpeg";
import image95 from "./image/col-33.jpeg";
import image36 from "./image/col-31.jpeg";
import image37 from "./image/col-36.jpeg";
import image38 from "./image/col-42.jpeg";
import image39 from "./image/col-43.jpeg";
import image100 from "./image/col-44.jpeg";

import image40 from "./image/col-51.jpeg";
import image41 from "./image/col-54.jpeg";
import image99 from "./image/col-56.jpeg";
import image42 from "./image/col-55.jpeg";
import image43 from "./image/col-67.jpeg";
import image98 from "./image/col-68.jpeg";

import image44 from "./image/col-69.jpeg";
import image45 from "./image/col-45.jpeg";
import image46 from "./image/col-46.jpeg";
import image24 from "./image/col-16.jpeg";
import image96 from "./image/col-49.jpeg";
import image97 from "./image/col-72.jpeg";

export const products = [
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Women wears",
    description:
      "Effortlessly chic and versatile, this classic white shirt is crafted for comfort and style. Perfect for formal meetings or casual outings.",
    image: [image1, image60, image61],
    category: "female",
    subCategory: "topwear",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: false,
    price: 25,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Women wears",
    description:
      "Sophisticated and tailored, these high-waisted trousers feature a sleek design, ensuring a perfect fit for every occasion",
    image: [image2],
    category: "female",
    subCategory: "underwear",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: false,
    price: 15,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Women wears",
    description:
      "Add a pop of color with this floral-printed shirt. Lightweight and breezy, it’s ideal for sunny days.",
    image: [image3, image63, image64, image65],
    category: "female",
    subCategory: "topwear",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: false,
    price: 12,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Men wears",
    description:
      "A wardrobe essential, this crewneck t-shirt is made from soft cotton for ultimate comfort and a perfect fit.",
    image: [image4, image66, image67, image68],
    category: "male",
    subCategory: "topwear",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    price: 20,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Men wears",
    description:
      "Stay classic with this sleek V-neck t-shirt, a timeless piece that pairs seamlessly with any outfit.",
    image: [image5, image69, image70, image71],
    category: "male",
    subCategory: "topwear",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: false,
    price: 10,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Men wears",
    description:
      "Stand out with this bold graphic t-shirt, designed for those who love to make a statement with their style.",
    image: [image6],
    category: "male",
    subCategory: "topwear",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: false,
    price: 40,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Men wears",
    description:
      "This striped polo shirt blends sporty and smart vibes, making it a go-to choice for casual Fridays or weekend outings.",
    image: [image7, image72],
    category: "men",
    subCategory: "topwear",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: false,
    price: 25,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Unisex Shoes",
    description:
      "Step up your sneaker game with the iconic Nike Air Force 1. Combining classic style and unbeatable comfort for everyday wear.",
    image: [image8, image73, image74],
    category: "shoes",
    subCategory: "footwears",
    sizes: [40, 41, 42, 43, 44, 45],
    date: new Date().toISOString(),
    bestSeller: false,
    price: 110,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Nice Female Pant",
    description:
      "Top off your look with this versatile baseball cap. Adjustable and lightweight, it’s perfect for sun protection or a casual vibe.",
    image: [image15],
    category: "women",
    subCategory: "bottomwear",
    sizes: ["M", "S", "L"],
    date: new Date().toISOString(),
    bestSeller: false,
    price: 36,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Puff-Jacket",
    description:
      "Stay warm in style with this durable puff jacket, featuring a snug fit and premium insulation for those chilly days.",
    image: [image10, image78, image79],
    category: "unisex",
    subCategory: "topwear",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: false,
    price: 115,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Baseball Cap",
    description:
      "Stay warm in style with this durable puff jacket, featuring a snug fit and premium insulation for those chilly days.",
    image: [image9, image75, image76, image77],
    category: "unisex",
    subCategory: "topwear",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: true,
    price: 20,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Trendy T-shirt",
    description:
      "Stay warm in style with this durable puff jacket, featuring a snug fit and premium insulation for those chilly days.",
    image: [image12],
    category: "male",
    subCategory: "topwear",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: true,
    price: 40,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Unisex Cap",
    description:
      "Stay warm in style with this durable puff jacket, featuring a snug fit and premium insulation for those chilly days.",
    image: [image12],
    category: "unisex",
    subCategory: "headwear",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: true,
    price: 15,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Denim Jacket",
    description:
      "Stay warm in style with this durable puff jacket, featuring a snug fit and premium insulation for those chilly days.",
    image: [image13, image80],
    category: "male",
    subCategory: "topwear",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: true,
    price: 200,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Female Wears",
    description:
      "Stay warm in style with this durable puff jacket, featuring a snug fit and premium insulation for those chilly days.",
    image: [image14, image81],
    category: "female",
    subCategory: "topwear",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: true,
    price: 55,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Men Wears",
    description:
      "These athletic joggers combine comfort and performance. Made from moisture-wicking fabric, they’re ideal for workouts or relaxed weekends.",
    image: [image16, image82, image83, image84],
    category: "male",
    subCategory: "casualwears",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: true,
    price: 100,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Joggers",
    description:
      "These athletic joggers combine comfort and performance. Made from moisture-wicking fabric, they’re ideal for workouts or relaxed weekends.",
    image: [image17],
    category: "male",
    subCategory: "bottomwear",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: true,
    price: 78,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Female Suits",
    description:
      "Elevate your formal look with this classic slim-fit suit. Tailored to perfection, it features a modern design, breathable fabric, and a comfortable fit, ideal for any professional or formal occasion.",
    image: [image18, image85, image86, image87],
    category: "female",
    subCategory: "suits",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: true,
    price: 400,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Joggers",
    description:
      "These athletic joggers combine comfort and performance. Made from moisture-wicking fabric, they’re ideal for workouts or relaxed weekends.",
    image: [image21],
    category: "male",
    subCategory: "bottomwear",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: true,
    price: 55,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Female Suit",
    description:
      "Elevate your formal look with this classic slim-fit suit. Tailored to perfection, it features a modern design, breathable fabric, and a comfortable fit, ideal for any professional or formal occasion.",
    image: [image22],
    category: "female",
    subCategory: "suits",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: true,
    price: 200,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Male Collar Neck",
    description:
      "Perfect for everyday wear, this crewneck T-shirt is crafted from soft, durable cotton. Its simple yet stylish design makes it a versatile wardrobe essential.",
    image: [image23, image88, image89, image90],
    category: "male",
    subCategory: "topwear",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: true,
    price: 55,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Male Wears",
    description:
      "Perfect for everyday wear, this crewneck T-shirt is crafted from soft, durable cotton. Its simple yet stylish design makes it a versatile wardrobe essential.",
    image: [image24, image96, image97],
    category: "male",
    subCategory: "casualwears",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: true,
    price: 55,
  },

  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Joggers",
    description:
      "These athletic joggers combine comfort and performance. Made from moisture-wicking fabric, they’re ideal for workouts or relaxed weekends.",
    image: [image27],
    category: "male",
    subCategory: "bottomwear",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: true,
    price: 55,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Men Collar Neck",
    description:
      "Perfect for everyday wear, this crewneck T-shirt is crafted from soft, durable cotton. Its simple yet stylish design makes it a versatile wardrobe essential.",
    image: [image29],
    category: "male",
    subCategory: "topwear",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: true,
    price: 55,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Joggers",
    description:
      "These athletic joggers combine comfort and performance. Made from moisture-wicking fabric, they’re ideal for workouts or relaxed weekends.",
    image: [image30],
    category: "male",
    subCategory: "bottomwear",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: true,
    price: 78,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Men Collar Neck",
    description:
      "Perfect for everyday wear, this crewneck T-shirt is crafted from soft, durable cotton. Its simple yet stylish design makes it a versatile wardrobe essential.",
    image: [image31],
    category: "male",
    subCategory: "topwear",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: true,
    price: 55,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Women Suits",
    description:
      "Elevate your formal look with this classic slim-fit suit. Tailored to perfection, it features a modern design, breathable fabric, and a comfortable fit, ideal for any professional or formal occasion.",
    image: [image32],
    category: "female",
    subCategory: "suits",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: true,
    price: 110,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Men Suits",
    description:
      "Elevate your formal look with this classic slim-fit suit. Tailored to perfection, it features a modern design, breathable fabric, and a comfortable fit, ideal for any professional or formal occasion.",
    image: [image33, image91, image92, image93],
    category: "male",
    subCategory: "suits",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: true,
    price: 210,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Men Wears",
    description:
      "These athletic joggers combine comfort and performance. Made from moisture-wicking fabric, they’re ideal for workouts or relaxed weekends.",
    image: [image34],
    category: "male",
    subCategory: "casualwears",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: true,
    price: 100,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Female Wears",
    description:
      "Perfect for everyday wear, this dress is crafted from soft, durable cotton. Its simple yet stylish design makes it a versatile wardrobe essential.",
    image: [image35, image94, image95],
    category: "female",
    subCategory: "topwear",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: true,
    price: 36,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Men Shoes",
    description:
      "Perfect for everyday wear, this crewneck T-shirt is crafted from soft, durable cotton. Its simple yet stylish design makes it a versatile wardrobe essential.",
    image: [image36],
    category: " shoes",
    subCategory: "footwear",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: true,
    price: 55,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Female Wears",
    description:
      "Perfect for everyday wear, this dress is crafted from soft, durable cotton. Its simple yet stylish design makes it a versatile wardrobe essential.",
    image: [image37],
    category: "female",
    subCategory: "topwear",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: true,
    price: 36,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Female Wears",
    description:
      "Perfect for everyday wear, this dress is crafted from soft, durable cotton. Its simple yet stylish design makes it a versatile wardrobe essential.",
    image: [image38],
    category: "female",
    subCategory: "topwear",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: true,
    price: 36,
  },

  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Men Wears",
    description:
      "Perfect for everyday wear, this crewneck T-shirt is crafted from soft, durable cotton. Its simple yet stylish design makes it a versatile wardrobe essential.",
    image: [image39, image100],
    category: "male",
    subCategory: "casualwears",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: true,
    price: 150,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Men Shoes",
    description:
      "Perfect for everyday wear, this crewneck T-shirt is crafted from soft, durable cotton. Its simple yet stylish design makes it a versatile wardrobe essential.",
    image: [image40],
    category: "shoes",
    subCategory: "footwear",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: true,
    price: 110,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Unisex Caps",
    description:
      "Perfect for everyday wear, this crewneck T-shirt is crafted from soft, durable cotton. Its simple yet stylish design makes it a versatile wardrobe essential.",
    image: [image41, image99],
    category: "unisex",
    subCategory: "headwear",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: true,
    price: 20,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Unisex Caps",
    description:
      "Perfect for everyday wear, this crewneck T-shirt is crafted from soft, durable cotton. Its simple yet stylish design makes it a versatile wardrobe essential.",
    image: [image42],
    category: "unisex",
    subCategory: "headwear",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: true,
    price: 20,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Female Wears",
    description:
      "Perfect for everyday wear, this dress is crafted from soft, durable cotton. Its simple yet stylish design makes it a versatile wardrobe essential.",
    image: [image43, image98],
    category: "female",
    subCategory: "topwear",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: true,
    price: 36,
  },

  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Female Wears",
    description:
      "Perfect for everyday wear, this dress is crafted from soft, durable cotton. Its simple yet stylish design makes it a versatile wardrobe essential.",
    image: [image44],
    category: "female",
    subCategory: "topwear",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: true,
    price: 36,
  },

  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Men Shoes",
    description:
      "Perfect for everyday wear, this crewneck T-shirt is crafted from soft, durable cotton. Its simple yet stylish design makes it a versatile wardrobe essential.",
    image: [image45],
    category: "shoes",
    subCategory: "footwear",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: true,
    price: 110,
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Men Shoes",
    description:
      "Perfect for everyday wear, this crewneck T-shirt is crafted from soft, durable cotton. Its simple yet stylish design makes it a versatile wardrobe essential.",
    image: [image46],
    category: "shoes",
    subCategory: "footwear",
    sizes: ["M", "S", "L", "XL", "XXL"],
    date: new Date().toISOString(),
    bestSeller: true,
    price: 110,
  },
];
