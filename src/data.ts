import { MenuCategory, FamilyDeal, Testimonial, Branch } from "./types";

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "classic-momos",
    name: "Classic Momos",
    imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=600",
    items: [
      { name: "Chicken Classic Momos (6pcs)", price: 350, description: "Authentic steamed momos with succulent minced chicken and mild Asian herbs.", popular: true },
      { name: "Chicken Classic Momos (12pcs)", price: 700, description: "Authentic steamed momos with succulent minced chicken and mild Asian herbs.", popular: true },
      { name: "Steamed Cheese Momos (6pcs)", price: 400, description: "Gooey mozzarella and cheddar cheese blended with seasoned diced herbs inside a soft wrapper." },
      { name: "Steamed Cheese Momos (12pcs)", price: 800, description: "Gooey mozzarella and cheddar cheese blended with seasoned diced herbs inside a soft wrapper." },
      { name: "Chocolate Classic Momos (6pcs)", price: 450, description: "Sweet dessert momos filled with premium melted milk chocolate." },
      { name: "Chocolate Classic Momos (12pcs)", price: 900, description: "Sweet dessert momos filled with premium melted milk chocolate." },
      { name: "Beef Classic Momos (6pcs)", price: 450, description: "Classic steamed momos stuffed with rich, flavorful minced beef and secret spices.", popular: true },
      { name: "Beef Classic Momos (12pcs)", price: 900, description: "Classic steamed momos stuffed with rich, flavorful minced beef and secret spices.", popular: true }
    ]
  },
  {
    id: "pan-fried-momos",
    name: "Pan-Fried Momos",
    imageUrl: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=600",
    items: [
      { name: "Chicken Pan-Fried Momos (6pcs)", price: 400, description: "Golden pan-crisped chicken dumplings served with signature dipping sauce.", popular: true },
      { name: "Chicken Pan-Fried Momos (12pcs)", price: 800, description: "Golden pan-crisped chicken dumplings served with signature dipping sauce.", popular: true },
      { name: "Pan-Fried Cheese Momos (6pcs)", price: 450, description: "Perfect pan-seared momos with melted cheese core and crispy skin." },
      { name: "Pan-Fried Cheese Momos (12pcs)", price: 900, description: "Perfect pan-seared momos with melted cheese core and crispy skin." },
      { name: "Beef Pan-Fried Momos (6pcs)", price: 550, description: "Succulent pan-fried beef dumplings packed with rich street-side umami flavors." },
      { name: "Beef Pan-Fried Momos (12pcs)", price: 1000, description: "Succulent pan-fried beef dumplings packed with rich street-side umami flavors." }
    ]
  },
  {
    id: "spicy-gravy",
    name: "Spicy Gravy",
    imageUrl: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=600",
    items: [
      { name: "Manchurian Momos (4pcs)", price: 500, description: "Drenched in classic tangy Indo-Chinese sweet & sour soy garlic Manchurian gravy.", popular: true },
      { name: "Manchurian Momos (8pcs)", price: 950, description: "Drenched in classic tangy Indo-Chinese sweet & sour soy garlic Manchurian gravy.", popular: true },
      { name: "Maxicana Momos (4pcs)", price: 500, description: "Tossed in fiery jalapeno infused smoky tomato salsa gravy.", spicy: true },
      { name: "Maxicana Momos (8pcs)", price: 950, description: "Tossed in fiery jalapeno infused smoky tomato salsa gravy.", spicy: true },
      { name: "Shashlik Momos (4pcs)", price: 500, description: "Served in sweet and savory shashlik sauce with crunchy onion and bell peppers." },
      { name: "Shashlik Momos (8pcs)", price: 950, description: "Served in sweet and savory shashlik sauce with crunchy onion and bell peppers." },
      { name: "Chilli Dry Momos (4pcs)", price: 500, description: "Wok-tossed dry style momos loaded with fresh green chillies and spring onions.", spicy: true },
      { name: "Chilli Dry Momos (8pcs)", price: 950, description: "Wok-tossed dry style momos loaded with fresh green chillies and spring onions.", spicy: true },
      { name: "Fajita Momos (4pcs)", price: 500, description: "Sizzling momos with Mexican fajita seasoning, lime, and colorful bell peppers." },
      { name: "Fajita Momos (8pcs)", price: 950, description: "Sizzling momos with Mexican fajita seasoning, lime, and colorful bell peppers." },
      { name: "Hot-dynamite Momos (4pcs)", price: 500, description: "Absolutely scorching! Dripping in our extra-hot signature creamy sriracha dynamite sauce.", spicy: true, popular: true },
      { name: "Hot-dynamite Momos (8pcs)", price: 950, description: "Absolutely scorching! Dripping in our extra-hot signature creamy sriracha dynamite sauce.", spicy: true, popular: true }
    ]
  },
  {
    id: "creamy-momos",
    name: "Creamy Momos",
    imageUrl: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=600&blur=1",
    items: [
      { name: "Creamy Taragon Momos (4pcs)", price: 500, description: "Smothered in a rich, French-inspired velvety butter cream sauce with aromatic tarragon.", popular: true },
      { name: "Creamy Taragon Momos (8pcs)", price: 950, description: "Smothered in a rich, French-inspired velvety butter cream sauce with aromatic tarragon.", popular: true },
      { name: "Creamy Butter Mushroom Momos (4pcs)", price: 500, description: "Indulgent rich cream base packed with sauteed garlic mushrooms and butter." },
      { name: "Creamy Butter Mushroom Momos (8pcs)", price: 950, description: "Indulgent rich cream base packed with sauteed garlic mushrooms and butter." },
      { name: "Afghani Black-Olived Momos (4pcs)", price: 500, description: "Slightly smoky cream sauce tossed with fragrant black olive rings and mild herbs." },
      { name: "Afghani Black-Olived Momos (8pcs)", price: 950, description: "Slightly smoky cream sauce tossed with fragrant black olive rings and mild herbs." },
      { name: "Creamy Jalapeno Momos (4pcs)", price: 500, description: "A balanced mild kick of sliced pickled jalapenos folded in extra smooth white cream.", spicy: true },
      { name: "Creamy Jalapeno Momos (8pcs)", price: 950, description: "A balanced mild kick of sliced pickled jalapenos folded in extra smooth white cream.", spicy: true }
    ]
  },
  {
    id: "steak-sauce",
    name: "Steak Sauce",
    imageUrl: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&q=80&w=600",
    items: [
      { name: "Demi-Glaced Momos (4pcs)", price: 500, description: "Rich, deeply reductionist demi-glaze sauce giving an elegant steakhouse character." },
      { name: "Demi-Glaced Momos (8pcs)", price: 950, description: "Rich, deeply reductionist demi-glaze sauce giving an elegant steakhouse character." },
      { name: "Californian-Loaded Momos (4pcs)", price: 600, description: "Momos loaded with savory brown steak glaze, dynamic cheese pull, and fresh microgreens.", popular: true },
      { name: "Californian-Loaded Momos (8pcs)", price: 1100, description: "Momos loaded with savory brown steak glaze, dynamic cheese pull, and fresh microgreens.", popular: true },
      { name: "Black Pepper Momos (4pcs)", price: 500, description: "Crushed peppercorn cream glaze with roasted garlic notes and intense warmth.", spicy: true },
      { name: "Black Pepper Momos (8pcs)", price: 950, description: "Crushed peppercorn cream glaze with roasted garlic notes and intense warmth.", spicy: true },
      { name: "Brown Butter Mushroom Momos (4pcs)", price: 500, description: "Rich, nutty browned butter base combined with earthy mushrooms." },
      { name: "Brown Butter Mushroom Momos (8pcs)", price: 950, description: "Rich, nutty browned butter base combined with earthy mushrooms." }
    ]
  },
  {
    id: "specials",
    name: "Specials",
    imageUrl: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&q=80&w=600&blur=2",
    items: [
      { name: "Crunchy Japanese Tempura Momos (6pcs)", price: 600, description: "Crisp, airy golden tempura fried momos, making each bite incredibly crunchy and light.", popular: true },
      { name: "Crunchy Japanese Tempura Momos (12pcs)", price: 1200, description: "Crisp, airy golden tempura fried momos, making each bite incredibly crunchy and light.", popular: true },
      { name: "Honey Chilli Momos (6pcs)", price: 500, description: "Sweet, sticky, and glazed premium honey-chilli sauce cooked with sesame seeds." },
      { name: "Honey Chilli Momos (12pcs)", price: 950, description: "Sweet, sticky, and glazed premium honey-chilli sauce cooked with sesame seeds." },
      { name: "Cheese-Corn Momos (6pcs)", price: 500, description: "Sweet corn kernels combined with liquid cheddar cheese stuffed inside premium momos." },
      { name: "Cheese-Corn Momos (12pcs)", price: 950, description: "Sweet corn kernels combined with liquid cheddar cheese stuffed inside premium momos." },
      { name: "Honey Chilli Potato", price: 480, description: "Crispy potato wedges tossed with a sweet, spicy honey and chili sesame glaze." },
      { name: "Chicken Chilli Potato", price: 700, description: "Crispy seasoned wedges cooked with diced chicken chunks and spicy soy garlic glaze." }
    ]
  },
  {
    id: "noodles",
    name: "Noodles",
    imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=600",
    items: [
      { name: "Chicken Chow Mein Noodles (Half)", price: 450, description: "Classic wok-tossed noodles with tender chicken strips, carrots, and cabbage.", popular: true },
      { name: "Chicken Chow Mein Noodles (Full)", price: 900, description: "Classic wok-tossed noodles with tender chicken strips, carrots, and cabbage.", popular: true },
      { name: "Chicken Hakka Noodles (Half)", price: 450, description: "Lighter, garlic and soy based hakka noodles stir-fried with sliced chicken." },
      { name: "Chicken Hakka Noodles (Full)", price: 900, description: "Lighter, garlic and soy based hakka noodles stir-fried with sliced chicken." },
      { name: "Veg. Hakka Noodles (Half)", price: 350, description: "Fresh capsicums, cabbage, carrots and spring onion tossed with aromatic Hakka seasoning.", veg: true },
      { name: "Veg. Hakka Noodles (Full)", price: 650, description: "Fresh capsicums, cabbage, carrots and spring onion tossed with aromatic Hakka seasoning.", veg: true },
      { name: "Ramen Noodles (Half)", price: 450, description: "Sizzling bowl of rich, spiced Asian broth noodles topped with a sliced chicken cutlet.", spicy: true, popular: true },
      { name: "Ramen Noodles (Full)", price: 900, description: "Sizzling bowl of rich, spiced Asian broth noodles topped with a sliced chicken cutlet.", spicy: true, popular: true }
    ]
  },
  {
    id: "soups",
    name: "Soups",
    imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=600",
    items: [
      { name: "Hot & Sour Soup (Half)", price: 300, description: "Traditional fiery & sour soup with mushrooms, chicken pieces, and egg ribbons.", spicy: true, popular: true },
      { name: "Hot & Sour Soup (Full)", price: 550, description: "Traditional fiery & sour soup with mushrooms, chicken pieces, and egg ribbons.", spicy: true, popular: true },
      { name: "Manchow Soup (Half)", price: 300, description: "Tangy chicken soy garlic soup served with crispy, crunchy fried noodles on top." },
      { name: "Manchow Soup (Full)", price: 550, description: "Tangy chicken soy garlic soup served with crispy, crunchy fried noodles on top." },
      { name: "Corn Soup (Half)", price: 300, description: "Sweet corn kernels and shredded chicken in a thickened, comforting clear egg drop broth." },
      { name: "Corn Soup (Full)", price: 550, description: "Sweet corn kernels and shredded chicken in a thickened, comforting clear egg drop broth." },
      { name: "Momo's Soup (Half)", price: 300, description: "Special street-style hearty chicken clear broth served with steamed chicken momos sunken inside." },
      { name: "Momo's Soup (Full)", price: 550, description: "Special street-style hearty chicken clear broth served with steamed chicken momos sunken inside." }
    ]
  },
  {
    id: "rice-meals",
    name: "Meals with Rice",
    imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=600&blur=1",
    items: [
      { name: "Chicken Kung Pao", price: 750, description: "Spicy stir-fried chicken with roasted peanuts, bell peppers, kung pao sauce with rice.", popular: true },
      { name: "Schezwan Chicken", price: 750, description: "Zesty chicken chunks cooked in Sichuan red pepper gravy, served with rice.", spicy: true },
      { name: "Dragon Chicken", price: 750, description: "Shredded chicken in a sweet and spicy dragon sauce, matched with rice.", spicy: true, popular: true },
      { name: "Chicken Cashew Nuts", price: 750, description: "Slices of tender chicken stir-fried with rich butter roasted cashew nuts and garlic soy, with rice." }
    ]
  },
  {
    id: "pasta",
    name: "Pasta",
    imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600",
    items: [
      { name: "Mexican Pasta (Half)", price: 450, description: "Deliciously spiced Mexican pasta with cheese, peppers, and savory herbs." },
      { name: "Mexican Pasta (Full)", price: 800, description: "Deliciously spiced Mexican pasta with cheese, peppers, and savory herbs." },
      { name: "Alfredo Pasta (Half)", price: 450, description: "Rich, creamy white sauce fettuccine tossed with grilled chicken strips and parmesan.", popular: true },
      { name: "Alfredo Pasta (Full)", price: 800, description: "Rich, creamy white sauce fettuccine tossed with grilled chicken strips and parmesan.", popular: true }
    ]
  },
  {
    id: "drinks",
    name: "Drinks",
    imageUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600",
    items: [
      { name: "Appletini", price: 300, description: "Crisp green apple essence blended sweet-and-sour with fresh club soda." },
      { name: "Blue Berry", price: 300, description: "Sweet blueberry fruit infusion topped with sparkling lime juice." },
      { name: "Blue Lagoon", price: 300, description: "Beautiful vibrant blue curaçao syrup mixed with zesty lime soda and crushed ice." },
      { name: "Mint Margarita", price: 250, description: "Pure refreshingly blended fresh mint leaves, lemon juice, ice, and fizzy soda.", popular: true },
      { name: "Strawberry Lime", price: 250, description: "Brimming with fresh red strawberry syrup, lime juice wedges, and bubbly carbonation." },
      { name: "Pineapple Lemonade", price: 250, description: "Tropical pineapple extract crushed with freshly squeezed lemonade." },
      { name: "Peach Maltini", price: 250, description: "Delicate and sweet peach pulp shaken with crisp non-alcoholic malt fizz." },
      { name: "Mangotini", price: 250, description: "Rich pakistani summer mango pulp infusion with key lime, shaken beautifully.", popular: true },
      { name: "Lemon Made", price: 200, description: "The classic comforting lemonade served chilled with sliced mint leaves." }
    ]
  },
  {
    id: "extra-sauce",
    name: "Extra Sauce",
    imageUrl: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&q=80&w=600",
    items: [
      { name: "Extra Sauce", price: 50, description: "An extra portion of our delicious house-crafted dipping or fusion sauces of your choice." }
    ]
  }
];

export const FAMILY_DEALS: FamilyDeal[] = [
  {
    id: "deal-platter",
    name: "Special Platter",
    price: 1350,
    badge: "Platter Classic",
    includes: [
      "3 Steamed Chicken Momos",
      "3 Crunchy Tempura Momos",
      "3 Steam Cheese Momos",
      "3 Signature Pan-Fried Momos",
      "Half Hakka Noodles Portion"
    ]
  },
  {
    id: "deal-1",
    name: "Family Deal 1",
    price: 2000,
    badge: "Best Seller",
    includes: [
      "6 Classic Steamed or Pan-Fried Momos",
      "4 Gravy Momos (Any Choice)",
      "4 Crunchy Tempura Momos",
      "Small Hakka / Ramen Noodles Tray",
      "Any 2 Refreshing Drinks"
    ]
  },
  {
    id: "deal-2",
    name: "Family Deal 2",
    price: 2600,
    badge: "The Ultimate Feast",
    includes: [
      "6 Classic Steamed or Pan-Fried Momos",
      "4 Spicy Gravy Momos",
      "4 Creamy Gravy Momos",
      "4 Steak Sauce Momos",
      "4 Crunchy Tempura Momos",
      "Small Hakka / Ramen Noodles Tray",
      "Any 2 Specialty Drinks"
    ]
  }
];

export const BRANCHES: Branch[] = [
  {
    name: "Gujranwala Branch",
    address: "Outside Babu Pan Shop, Opposite Quetta Hotel, Model Town, Gujranwala.",
    phones: ["0301-0731079", "0304-6986399"],
  },
  {
    name: "Wazirabad Branch",
    address: "Model Town / G.T Road Intersection, Wazirabad.",
    phones: ["0306-6261298"],
    mapsUrl: "https://maps.app.goo.gl/SAFKkbrg24NLXCom8?g_st=ac",
    embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3371.494747206121!2d74.1165682!3d32.433994799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f1ba4f76ccb5d%3A0xc3ab0f8e91cb7708!2sMomos%20Bite!5e0!3m2!1sen!2s!4v1718491200000!5m2!1sen!2s"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "M. Usman Baig",
    role: "Local Guide - Gujranwala",
    stars: 5,
    comment: "The absolute best momos in town! The Hot-dynamite and Crunchy Tempura momos are an absolute game changer. Highly recommended!",
    date: "2 days ago"
  },
  {
    name: "Ayesha Khan",
    role: "Regular Customer",
    stars: 5,
    comment: "Incredible flavours and excellent customer service by Arbaaz and his team. The Creamy Taragon Momos are smooth and delicious, and we order their family deals every weekly dinner!",
    date: "1 week ago"
  },
  {
    name: "Zainab Ali",
    role: "Food Blogger",
    stars: 5,
    comment: "Our family loves the tempura momos! Super light, crispy, and the sauce serves the perfect kick. Love the brand, love the aesthetic. Order on WhatsApp works seamlessly.",
    date: "3 weeks ago"
  }
];

export const GALLERY_ITEMS = [
  {
    title: "Steamed Chicken Momos",
    category: "Classic",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=500"
  },
  {
    title: "Crispy Pan-Fried Momos",
    category: "Pan-Fried",
    image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=500"
  },
  {
    title: "Stir-Fried Noodles",
    category: "Noodles",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=500"
  },
  {
    title: "Mint Margarita",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=500"
  },
  {
    title: "Happy Customer Dining",
    category: "Atmosphere",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=500"
  },
  {
    title: "Hearty Soup Bowls",
    category: "Soups",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=500"
  }
];
