/* Edit this file to change what's shown on the site.
   `image` uses picsum.photos as a placeholder — swap it for a real
   product photo URL (or a local import) whenever you have one. */
import Category1 from '../assets/categoryGrid.jpg';
import Category2 from '../assets/main.jpg';
import Jacket from '../assets/jacket.jpg';
// intgram part 
import Weman from '../assets/weman.jpg';
import Footer1 from '../assets/footer1.jpg'
import Footer2 from '../assets/footer2.jpg'
import Footer3 from '../assets/footer3.jpg'
import Footer4 from '../assets/footer4.jpg'
import Footer5 from '../assets/footer5.jpg'

export const CATEGORIES = [
  { id: "hoodies", label: "Hoodies", image:"7bd841bc66938a977113fa37dba01b91.jpg" },
  { id: "tshirts", label: "T-Shirts", image:`${Category1}`},
  { id: "pants", label: "Pants", image:"3644475290128e1a37317e5d245243ea.jpg" },
  { id: "jackets", label: "Jackets", image:`${Category2}` },
  { id: "accessories", label: "Accessories", image:"ce1e16c5abcbfd6aa872f8bbb49a06c4.jpg" },
];

export const PRODUCTS = [
  { id: "p01", name: "Dark Dreams Hoodie", price: 1699, category: "hoodies", image: "1b328c259deecb2f09f6563beaf13401.jpg", tag: "New" },
  { id: "p02", name: "Chaos Club Tee", price: 899, category: "tshirts", image: "3c44a8961cf0d9885bebb6d8b4b9b29e.jpg" },
  { id: "p03", name: "Vintage Washed Tee", price: 949, category: "tshirts", image: "42a937af5ed1d955e0eeaf7f7fdeab2c.jpg" },
  { id: "p04", name: "Utility Cargo Pants", price: 1599, category: "pants", image: "7849e973550b837dff580546b17662a1.jpg" },
  { id: "p05", name: "Neon Oversized Tee", price: 999, category: "tshirts", image: "8706b5ef507046813ba03e6f1213cf43.jpg" },
  { id: "p06", name: "Essential Hoodie", price: 1499, category: "hoodies", image: "adad8433ba53bef9f0f5a86a099aa00b.jpg" },
  { id: "p07", name: "Overdyed Cargo Jacket", price: 2299, category: "jackets", image: "b17ff6db90f06033925bb4234d5d4da1.jpg", tag: "New" },
  { id: "p08", name: "Boxy Fit Denim Jacket", price: 2099, category: "jackets", image: "b22b19de381e96ceb2ba888e50568779.jpg" },
  { id: "p09", name: "Distressed Trucker Cap", price: 599, category: "accessories", image: "d011ba9b16bab53be8bb0fca5b62ba71.jpg" },
  { id: "p10", name: "Relaxed Fit Joggers", price: 1399, category: "pants", image: `${Jacket}` },
];

export const PROMOS = [
  { id: "promo1", title: "New Drops", subtitle: "Every Week", cta: "Explore", image: "d2c8c99ed43591f1e07d07f0bbcb5833.jpg" },
  { id: "promo2", title: "Premium Thrift", subtitle: "Handpicked Pieces", cta: "Explore", image: "1e576088a6ff31c4bdee555aa8b03e31.jpg" },
  { id: "promo3", title: "Up to 50% Off", subtitle: "Limited Time Only", cta: "Shop Sale", image: "1c9be718ebfd04feed6c0cff59c2b963.jpg" },
];

export const INSTAGRAM_IMAGES = [
  {id: `i1` , image:`${Footer1}`},
  {id: `i2` , image:`${Weman}`},
  {id: `i3` , image:`${Footer2}`},
  {id: `i4` , image:`${Footer3}`},
  {id: `i5` , image:`${Footer4}`},
  {id: `i6` , image:`${Footer5}`},
]
