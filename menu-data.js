// Menu data pulled from https://indianspice.ca (Hamilton & Waterloo locations).
// Tags can include: "veg", "spicy", "popular"
// Item "image" is optional — if omitted, script.js falls back to a category-based default.

const RESTAURANT = {
  name: "Indian Spice",
  tagline: "Authentic Punjabi, South Indian & Street Food",
  hours: "Open Daily • 11:30 – 22:30"
};

// Image URLs pulled from indianspice.ca (used as category-based defaults).
// A small Unsplash fallback set is layered in for categories the site doesn't
// have dedicated photos for (Chicken, Beer, generic Drinks).
const CATEGORY_IMAGES = {
  "Street Corner":       "https://indianspice.ca/wp-content/uploads/2024/04/Street_Food_Thumb.jpg",
  "Street Corner Starters": "https://indianspice.ca/wp-content/uploads/2024/04/CR_Vadapav_Is.jpg",
  "Chinese Veg Corner":  "https://indianspice.ca/wp-content/uploads/2026/05/panner-tikka-new.png",
  "Chicken":             "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=700&q=70",
  "Vegetarian Curries":  "https://indianspice.ca/wp-content/uploads/2026/05/dal-makhni-new.png",
  "Rice Station":        "https://indianspice.ca/wp-content/uploads/2026/05/authentic-veg-biryani.png",
  "Bread Station":       "https://indianspice.ca/wp-content/uploads/2026/05/rice-new-e1778618588577.png",
  "Refreshment":         "https://images.unsplash.com/photo-1626202373052-9c4f10f7e0bb?auto=format&fit=crop&w=700&q=70",
  "Drinks":              "https://images.unsplash.com/photo-1626202373052-9c4f10f7e0bb?auto=format&fit=crop&w=700&q=70",
  "Beer":                "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=700&q=70",
  "Idly & Vada":         "https://indianspice.ca/wp-content/uploads/2024/04/masala_idly_footer_thumb_main.png",
  "Idly Vadai":          "https://indianspice.ca/wp-content/uploads/2026/05/dahi-vadai.jpg",
  "Dosa":                "https://indianspice.ca/wp-content/uploads/2026/05/benne-dosa-1024x1024.png",
  "Traditional Dosa":    "https://indianspice.ca/wp-content/uploads/2024/04/CR_Dosa_IS.jpg",
  "Rava Dosa":           "https://indianspice.ca/wp-content/uploads/2026/05/benne-dosa-1024x1024.png",
  "Kids Dosa":           "https://indianspice.ca/wp-content/uploads/2026/05/benne-dosa-1024x1024.png",
  "Flavored Dosa":       "https://indianspice.ca/wp-content/uploads/2026/05/authentic-veg-biryani.png",
  "Uttapam":             "https://indianspice.ca/wp-content/uploads/2026/05/uttapam-new.png",
  "Desserts":            "https://images.unsplash.com/photo-1601303516534-bf18d6cb1d59?auto=format&fit=crop&w=700&q=70",
  "Extra":               "https://indianspice.ca/wp-content/uploads/2024/04/Street_Food_Thumb.jpg"
};

// Logo + hero image from indianspice.ca
const BRAND_IMAGES = {
  logo: "https://indianspice.ca/wp-content/uploads/2023/10/PNG-C-1536x1018-1-170x113-1.png",
  hero: "https://indianspice.ca/wp-content/uploads/2024/04/Gallery1_New.jpg",
  footerBg: "https://indianspice.ca/wp-content/uploads/2023/10/IS_Footer.jpg"
};

const MENUS = {
  hamilton: {
    label: "Hamilton",
    address: "Hamilton, ON",
    items: [
      // ---------- Street Corner Starters ----------
      { name: "Fried Papad",                category: "Street Corner Starters", price: 1.99,  description: "Crispy fried papad.",                                                tags: ["veg"] },
      { name: "Masala Fried Papad",         category: "Street Corner Starters", price: 2.99,  description: "Fried papad topped with veggies and spices.",                       tags: ["veg"] },
      { name: "Samosa (2)",                 category: "Street Corner Starters", price: 3.99,  description: "Crispy samosas filled with spiced potatoes and peas.",              tags: ["veg", "popular"] },
      { name: "Samosa Chat",                category: "Street Corner Starters", price: 7.99,  description: "Samosas topped with chutneys, veggies, and spices.",                tags: ["veg", "popular"] },
      { name: "Pav Samosa",                 category: "Street Corner Starters", price: 5.99,  description: "Samosa stuffed in a soft bun.",                                     tags: ["veg"] },
      { name: "Chana Samosa",               category: "Street Corner Starters", price: 9.99,  description: "Samosa served with spiced chickpea curry.",                         tags: ["veg"] },
      { name: "Dabeli",                     category: "Street Corner Starters", price: 3.99,  description: "Spiced mashed potatoes with chutneys in a bun.",                    tags: ["veg"] },
      { name: "Cheese Dabeli",              category: "Street Corner Starters", price: 4.99,  description: "Dabeli with a gooey cheese twist.",                                 tags: ["veg"] },
      { name: "Vadapav (2)",                category: "Street Corner Starters", price: 5.99,  description: "Spiced potato patty in a bun with chutneys.",                       tags: ["veg", "popular"] },
      { name: "Cheese Vadapav (2)",         category: "Street Corner Starters", price: 6.99,  description: "Vada pav with melty cheese.",                                       tags: ["veg"] },
      { name: "Schezwan Vadapav (2)",       category: "Street Corner Starters", price: 6.49,  description: "Vada pav with spicy Schezwan sauce.",                               tags: ["veg", "spicy"] },
      { name: "Cheese Schezwan Vadapav (2)",category: "Street Corner Starters", price: 6.99,  description: "Schezwan vada pav with cheese.",                                    tags: ["veg", "spicy"] },
      { name: "Pav Bhaji",                  category: "Street Corner Starters", price: 12.99, description: "Spiced mashed veggies with buttery pav.",                           tags: ["veg", "popular"] },
      { name: "Chat Basket (8 Pcs)",        category: "Street Corner Starters", price: 9.99,  description: "Crispy puris, tangy chutneys, spicy masala, and crunchy sev.",      tags: ["veg"] },

      // ---------- Chinese Veg Corner ----------
      { name: "Tandoori Soya Chaap",        category: "Chinese Veg Corner", price: 14.99, description: "Grilled soya chaap with bold tandoori spices.",            tags: ["veg"] },
      { name: "Aachari Soya Chaap",         category: "Chinese Veg Corner", price: 14.99, description: "Soya chaap marinated in fiery achari spices.",            tags: ["veg", "spicy"] },
      { name: "Creamy Soya Chaap",          category: "Chinese Veg Corner", price: 14.99, description: "Smooth, creamy soya chaap grilled to perfection.",        tags: ["veg"] },
      { name: "Kadai Soya Chaap",           category: "Chinese Veg Corner", price: 16.99, description: "Soya chaap simmered in rich, flavorful kadai gravy.",     tags: ["veg", "spicy"] },
      { name: "Paneer Tikka Dry",           category: "Chinese Veg Corner", price: 15.99, description: "Marinated paneer, grilled to perfection.",                tags: ["veg", "popular"] },
      { name: "Chilli Paneer",              category: "Chinese Veg Corner", price: 16.99, description: "Soft paneer cubes with vibrant veggies in zesty sauce.", tags: ["veg", "spicy"] },
      { name: "Chow Mein",                  category: "Chinese Veg Corner", price: 15.99, description: "Noodles and mixed veg wok-fried with garlic, ginger, soy.", tags: ["veg"] },
      { name: "Manchurian Dry",             category: "Chinese Veg Corner", price: 13.99, description: "Minced vegetable dumplings wok-fried with chilies.",      tags: ["veg", "spicy"] },
      { name: "Manchurian Gravy",           category: "Chinese Veg Corner", price: 15.49, description: "Crispy vegetable balls in rich, tangy sauce.",            tags: ["veg"] },
      { name: "Chinese Bhel",               category: "Chinese Veg Corner", price: 16.99, description: "Crunchy fried noodles and fresh vegetables with sauces.",tags: ["veg"] },
      { name: "Fried Rice",                 category: "Chinese Veg Corner", price: 15.99, description: "Wok-fried rice with vegetables and Indo-Chinese spices.", tags: ["veg"] },

      // ---------- Chicken ----------
      { name: "Chicken Tikka Dry",          category: "Chicken", price: 15.99, description: "Smoky, succulent chicken tikka, grilled to juicy perfection.",      tags: ["popular"] },
      { name: "Chilli Chicken",             category: "Chicken", price: 17.99, description: "Crispy chicken tossed in a fiery blend of soy and garlic.",         tags: ["spicy"] },
      { name: "Chicken Chow Mein",          category: "Chicken", price: 17.99, description: "Tender chicken and crisp veggies with stir-fried noodles.",         tags: [] },
      { name: "Chicken Butter Masala",      category: "Chicken", price: 19.99, description: "Chicken in creamy tomato-based gravy with mild spices.",            tags: [] },
      { name: "Butter Chicken",             category: "Chicken", price: 21.99, description: "Chicken in rich, creamy, mildly spiced tomato gravy.",              tags: ["popular"] },
      { name: "Chicken Vindaloo",           category: "Chicken", price: 19.99, description: "Spicy and tangy chicken curry with bold spices.",                   tags: ["spicy"] },
      { name: "Chicken Tikka Masala",       category: "Chicken", price: 19.99, description: "Grilled chicken in creamy, spiced tomato sauce.",                   tags: ["popular"] },
      { name: "Dhaba Chicken",              category: "Chicken", price: 19.99, description: "Chicken curry with bold spices, onions, smoky flavor.",             tags: ["spicy"] },
      { name: "Palak Chicken",              category: "Chicken", price: 19.99, description: "Chicken in spinach-based spiced gravy.",                            tags: [] },

      // ---------- Vegetarian Curries ----------
      { name: "Chana Masala",               category: "Vegetarian Curries", price: 13.99, description: "Chickpeas simmered in zesty gravy, perfectly seasoned.", tags: ["veg"] },
      { name: "Chana Palak",                category: "Vegetarian Curries", price: 15.99, description: "Chickpeas and fresh spinach simmered in rich spices.",   tags: ["veg"] },
      { name: "Kadai Paneer",               category: "Vegetarian Curries", price: 17.99, description: "Paneer cubes cooked with fresh ground spices.",          tags: ["veg", "spicy"] },
      { name: "Cheese Butter Masala",       category: "Vegetarian Curries", price: 17.99, description: "Cheese chunks simmered in rich, buttery sauce.",         tags: ["veg"] },
      { name: "Paneer Butter Masala",       category: "Vegetarian Curries", price: 17.99, description: "Paneer cubes in velvety, spiced butter sauce.",          tags: ["veg", "popular"] },
      { name: "Paneer Bhurji",              category: "Vegetarian Curries", price: 16.99, description: "Crumbled paneer sautéed with onions and tomatoes.",      tags: ["veg"] },
      { name: "Paneer Makhani",             category: "Vegetarian Curries", price: 17.99, description: "Paneer in a silky cashew-tomato makhani sauce.",         tags: ["veg"] },
      { name: "Paneer Mutter Masala",       category: "Vegetarian Curries", price: 16.99, description: "Paneer and green peas in rich, aromatic gravy.",         tags: ["veg"] },
      { name: "Dal Fry",                    category: "Vegetarian Curries", price: 14.99, description: "Creamy, mildly spiced lentils fried with aromatic herbs.",tags: ["veg"] },
      { name: "Dal Tadka",                  category: "Vegetarian Curries", price: 15.99, description: "Flavorful lentils topped with sizzling ghee and tempering.", tags: ["veg", "popular"] },
      { name: "Paneer Tikka Masala",        category: "Vegetarian Curries", price: 17.99, description: "Indian cheese cubes in creamy, spiced tomato sauce.",    tags: ["veg"] },

      // ---------- Rice Station ----------
      { name: "Steam Rice",                 category: "Rice Station", price: 4.99,  description: "Plain steamed rice.",                                        tags: ["veg"] },
      { name: "Jeera Rice",                 category: "Rice Station", price: 6.49,  description: "Rice cooked with cumin seeds.",                              tags: ["veg"] },
      { name: "Veg Pulav",                  category: "Rice Station", price: 10.99, description: "Rice with mixed vegetables and mild spices.",                tags: ["veg"] },
      { name: "Egg Biryani",                category: "Rice Station", price: 16.99, description: "Spiced rice with boiled eggs.",                              tags: [] },
      { name: "Veg Biryani",                category: "Rice Station", price: 14.99, description: "Rice with vegetables and aromatic spices.",                  tags: ["veg"] },
      { name: "Chicken Biryani",            category: "Rice Station", price: 18.99, description: "Tender chicken, aromatic saffron rice, crispy onions.",      tags: ["popular", "spicy"] },

      // ---------- Bread Station ----------
      { name: "Butter Naan",                category: "Bread Station", price: 3.49, description: "Soft flatbread with butter.",                                tags: ["veg", "popular"] },
      { name: "Garlic Naan",                category: "Bread Station", price: 4.49, description: "Buttery naan with garlic butter.",                           tags: ["veg", "popular"] },
      { name: "Tandoori Roti",              category: "Bread Station", price: 1.99, description: "Clay oven-cooked flatbread.",                                tags: ["veg"] },
      { name: "Paneer Naan",                category: "Bread Station", price: 5.99, description: "Naan with spiced paneer filling.",                           tags: ["veg"] },
      { name: "Cheese Naan",                category: "Bread Station", price: 5.49, description: "Naan with gooey cheese.",                                    tags: ["veg"] },
      { name: "Chilli Cheese Naan",         category: "Bread Station", price: 5.99, description: "Naan stuffed with cheese and chilies.",                      tags: ["veg", "spicy"] },
      { name: "Bullet Naan",                category: "Bread Station", price: 4.49, description: "Naan loaded with fiery green chilies.",                      tags: ["veg", "spicy"] },
      { name: "Peshawari Naan (Sweet)",     category: "Bread Station", price: 5.49, description: "Sweet naan with nuts and coconut.",                          tags: ["veg"] },

      // ---------- Refreshment ----------
      { name: "Butter Milk",                category: "Refreshment", price: 4.99, description: "Chilled, tangy drink.",                                       tags: ["veg"] },
      { name: "Mango Lassi",                category: "Refreshment", price: 5.99, description: "Sweet mango yogurt drink.",                                   tags: ["veg", "popular"] },
      { name: "Sweet Lassi",                category: "Refreshment", price: 4.99, description: "Creamy yogurt and sugar drink.",                              tags: ["veg"] },
      { name: "Tea",                        category: "Refreshment", price: 3.49, description: "Spiced black tea with milk.",                                 tags: ["veg"] },
      { name: "Pop Can",                    category: "Refreshment", price: 2.49, description: "Refreshingly fizzy drink.",                                   tags: ["veg"] },
      { name: "Pop Bottle",                 category: "Refreshment", price: 2.99, description: "Refreshingly fizzy drink.",                                   tags: ["veg"] },
      { name: "Thumbs Up",                  category: "Refreshment", price: 2.99, description: "Bold, fizzy cola.",                                           tags: ["veg"] },

      // ---------- Beer ----------
      { name: "Budweiser",                  category: "Beer", price: 5.99, description: "Crisp American lager.",       tags: [] },
      { name: "Corona",                     category: "Beer", price: 5.99, description: "Mexican pale lager.",         tags: [] },
      { name: "Heineken",                   category: "Beer", price: 5.99, description: "Dutch pale lager.",           tags: [] },
      { name: "Stella",                     category: "Beer", price: 5.99, description: "Belgian pilsner.",            tags: [] },

      // ---------- Idly & Vada ----------
      { name: "Idly (2)",                   category: "Idly & Vada", price: 5.99, description: "Steamed rice cake with sambhar and 2 types of chutney.",      tags: ["veg"] },
      { name: "Masala Idly (2)",            category: "Idly & Vada", price: 6.49, description: "Idly tossed in tempered spices and onions.",                  tags: ["veg"] },
      { name: "Spicy Idly (2)",             category: "Idly & Vada", price: 6.49, description: "Idly tossed in a spicy podi tempering.",                      tags: ["veg", "spicy"] },
      { name: "Medhu Vadai (2)",            category: "Idly & Vada", price: 7.99, description: "Deep-fried lentil doughnut with sambhar and chutneys.",       tags: ["veg"] },
      { name: "Masala Vadai (2)",           category: "Idly & Vada", price: 8.99, description: "Vadai tossed in tempered onions and spices.",                 tags: ["veg"] },
      { name: "Spicy Masala Vadai (2)",     category: "Idly & Vada", price: 9.49, description: "Vadai in fiery masala tempering.",                            tags: ["veg", "spicy"] },
      { name: "Dahi Bhalla (2)",            category: "Idly & Vada", price: 8.99, description: "Lentil dumplings in chilled yogurt with sweet & tangy chutneys.", tags: ["veg"] },
      { name: "1 Idly + 1 Vadai",           category: "Idly & Vada", price: 8.49, description: "Steamed rice cake and fried doughnut with sambhar.",          tags: ["veg"] },
      { name: "2 Idly + 1 Vadai",           category: "Idly & Vada", price: 9.49, description: "Steamed rice cake and fried doughnut with sambhar.",          tags: ["veg"] },
      { name: "2 Vadai + 1 Idly",           category: "Idly & Vada", price: 9.49, description: "Steamed rice cake and fried doughnut with sambhar.",          tags: ["veg"] },

      // ---------- Dosa ----------
      { name: "Plain Dosa",                 category: "Dosa", price: 12.49, description: "Thin, crispy crepe with sambhar and 4 types of chutney.",    tags: ["veg", "popular"] },
      { name: "Buttery Dosa",               category: "Dosa", price: 14.49, description: "Crispy dosa cooked in butter.",                              tags: ["veg"] },
      { name: "Ghee Roast Dosa",            category: "Dosa", price: 14.49, description: "Crispy dosa cooked in ghee.",                                tags: ["veg"] },
      { name: "Cheese Dosa",                category: "Dosa", price: 10.49, description: "Dosa filled with melty mozzarella.",                         tags: ["veg"] },
      { name: "Masala Dosa",                category: "Dosa", price: 13.49, description: "Dosa with onions and potato stuffing.",                      tags: ["veg", "popular"] },
      { name: "Mysore Dosa",                category: "Dosa", price: 14.49, description: "Dosa spread with Mysore paste.",                             tags: ["veg", "spicy"] },
      { name: "Spicy Mysore Dosa",          category: "Dosa", price: 15.49, description: "Dosa with Mysore and extra spicy paste.",                    tags: ["veg", "spicy"] },
      { name: "Roasted Garlic Dosa",        category: "Dosa", price: 14.49, description: "Dosa with butter and garlic paste.",                         tags: ["veg"] },
      { name: "Palak Dosa",                 category: "Dosa", price: 14.49, description: "Dosa spread with spinach paste.",                            tags: ["veg"] },
      { name: "Palak Paneer Dosa",          category: "Dosa", price: 17.49, description: "Dosa with spinach paste and cottage cheese pieces.",         tags: ["veg"] },
      { name: "Kurmura Chilli Dosa",        category: "Dosa", price: 15.49, description: "Dosa with green chilli, coriander, mint paste.",             tags: ["veg", "spicy"] },
      { name: "Chettinad Dosa",             category: "Dosa", price: 15.49, description: "Dosa with red chillies, spices, herbs paste.",               tags: ["veg", "spicy"] },
      { name: "Pav Bhaji Dosa",             category: "Dosa", price: 15.49, description: "Dosa spread with pav bhaji.",                                tags: ["veg"] },
      { name: "Rava Dosa",                  category: "Dosa", price: 14.49, description: "Thin, crispy crepe with ginger, carrot, coriander.",         tags: ["veg"] },
      { name: "Onion Rava Dosa",            category: "Dosa", price: 15.49, description: "Rava dosa topped with caramelized onions.",                  tags: ["veg"] },
      { name: "Ghee Rava Dosa",             category: "Dosa", price: 15.99, description: "Rava dosa cooked in pure ghee.",                             tags: ["veg"] },
      { name: "Mysore Rava Dosa",           category: "Dosa", price: 15.99, description: "Crepe with Mysore paste, ginger, carrot, coriander.",        tags: ["veg", "spicy"] },
      { name: "Dabbang Dosa",               category: "Dosa", price: 17.49, description: "Chef's special fusion dosa with veggies and cheese.",        tags: ["veg", "popular"] },
      { name: "Paneer Dosa",                category: "Dosa", price: 18.49, description: "Dosa with cottage cheese cubes and raw onions.",             tags: ["veg"] },

      // ---------- Kids Dosa ----------
      { name: "Kids Plain Dosa",            category: "Kids Dosa", price: 9.49,  description: "Kids-sized plain dosa.",                                tags: ["veg"] },
      { name: "Kids Cheese Dosa",           category: "Kids Dosa", price: 10.49, description: "Kids-size dosa with mozzarella cheese, coconut chutney.", tags: ["veg"] },
      { name: "Kids Pizza Dosa",            category: "Kids Dosa", price: 12.49, description: "Kids dosa with pizza sauce, onions, peppers, cheese.",  tags: ["veg"] },
      { name: "Kids Chocolate Dosa",        category: "Kids Dosa", price: 11.49, description: "Melted chocolate and Nutella with powdered sugar.",     tags: ["veg"] },

      // ---------- Uttapam ----------
      { name: "Mix Veg Uttapam",            category: "Uttapam", price: 15.49, description: "Onions, tomatoes, peppers, coriander on uttapam.",        tags: ["veg"] },
      { name: "Tomato Onion Uttapam",       category: "Uttapam", price: 15.49, description: "Classic tomato-onion topped uttapam.",                    tags: ["veg"] },
      { name: "Paneer Uttapam",             category: "Uttapam", price: 16.49, description: "Spicy paneer tikka on uttapam with onions.",              tags: ["veg"] },

      // ---------- Desserts ----------
      { name: "Gulab Jamun",                category: "Desserts", price: 4.99, description: "Sweet, syrup-soaked dough balls with cardamom flavor.",   tags: ["veg", "popular"] },
      { name: "Badam Halva",                category: "Desserts", price: 5.99, description: "Rich almond dessert with ghee, sugar, cardamom.",         tags: ["veg"] },
      { name: "Dry Fruit Kesari",           category: "Desserts", price: 5.99, description: "Sweet semolina pudding with ghee, nuts, and saffron.",    tags: ["veg"] }
    ]
  },

  waterloo: {
    label: "Waterloo",
    address: "Waterloo, ON",
    items: [
      // ---------- Street Corner ----------
      { name: "Samosa (2)",                 category: "Street Corner", price: 4.99,  description: "Pastry with savoury filling of spiced potatoes, onions, peas.",   tags: ["veg", "popular"] },
      { name: "Samosa Chat (2)",            category: "Street Corner", price: 8.49,  description: "Crunchy samosas with yogurt, chutneys, and chaat toppings.",     tags: ["veg", "popular"] },
      { name: "Chaat Basket",               category: "Street Corner", price: 7.99,  description: "Flower-shaped baskets with potatoes, yogurt, and chaat toppings.", tags: ["veg"] },
      { name: "Chole Puri",                 category: "Street Corner", price: 14.99, description: "Chickpea curry with aromatic spices, served with fried bread.",  tags: ["veg"] },
      { name: "Dahipuri (6 Pcs)",           category: "Street Corner", price: 7.99,  description: "Puris with potatoes, chickpeas, yogurt, and chaat toppings.",    tags: ["veg"] },
      { name: "Sev Puri (6 Pcs)",           category: "Street Corner", price: 7.99,  description: "Puris with potatoes, chickpeas, chutneys, and sev.",             tags: ["veg"] },
      { name: "Panipuri (6 Pcs)",           category: "Street Corner", price: 8.29,  description: "Puris with potatoes and chickpeas, two flavored waters.",        tags: ["veg", "spicy"] },
      { name: "Pav Bhaji",                  category: "Street Corner", price: 13.49, description: "Spicy mixed vegetables, served with soft buttered dinner rolls.",tags: ["veg", "popular"] },

      // ---------- Idly Vadai ----------
      { name: "Spicy Sambhar Vada Dipped (2)",   category: "Idly Vadai", price: 7.99, description: "Fried lentil doughnut in spicy sambhar with toppings.",         tags: ["veg", "spicy"] },
      { name: "Spicy Sambhar Idly Dipped (2)",   category: "Idly Vadai", price: 8.99, description: "Idly in spicy sambhar with ghee, onions, coriander.",          tags: ["veg", "spicy"] },
      { name: "Spicy Dollar Idly Dipped (14)",   category: "Idly Vadai", price: 8.99, description: "Small idlies with lentil and ghee in spicy sambhar.",          tags: ["veg", "spicy"] },
      { name: "Medhu Vada Separate (2)",         category: "Idly Vadai", price: 7.49, description: "Fried lentil doughnut with sambhar and two chutneys.",         tags: ["veg"] },
      { name: "Sambhar Vada Dipped (2)",         category: "Idly Vadai", price: 6.49, description: "Fried lentil doughnut dipped in sambhar.",                     tags: ["veg"] },
      { name: "Sweet Dahi Vada (2)",             category: "Idly Vadai", price: 7.99, description: "Lentil doughnuts in sweet yogurt with toppings.",              tags: ["veg"] },
      { name: "Idly Separate (2)",               category: "Idly Vadai", price: 7.49, description: "Steamed rice cake with sambhar and 2 chutneys.",               tags: ["veg", "popular"] },
      { name: "Sambhar Idly Dipped (2)",         category: "Idly Vadai", price: 8.49, description: "Idly dipped in sambhar with toppings.",                        tags: ["veg"] },
      { name: "Dollar Idly Separate (14)",       category: "Idly Vadai", price: 7.49, description: "Small idlies with sambhar and two chutneys.",                  tags: ["veg"] },
      { name: "Dollar Idly Dipped (14)",         category: "Idly Vadai", price: 8.49, description: "Small idlies dipped in sambhar with toppings.",                tags: ["veg"] },
      { name: "1 Idly + 1 Vada Separate",        category: "Idly Vadai", price: 7.99, description: "Combo with sambhar and two chutneys.",                         tags: ["veg"] },
      { name: "1 Idly + 1 Vada Dipped",          category: "Idly Vadai", price: 8.49, description: "Combo served with sambhar and two chutneys.",                  tags: ["veg"] },
      { name: "2 Idly + 1 Vada",                 category: "Idly Vadai", price: 9.49, description: "Combo with sambhar and two chutneys.",                         tags: ["veg"] },
      { name: "2 Vada + 1 Idly",                 category: "Idly Vadai", price: 9.49, description: "Combo with sambhar and two chutneys.",                         tags: ["veg"] },

      // ---------- Kids Dosa ----------
      { name: "Kids Plain Dosa",            category: "Kids Dosa", price: 6.99, description: "Kids-sized plain dosa with coconut chutney.",            tags: ["veg"] },
      { name: "Kids Ghee Dosa",             category: "Kids Dosa", price: 6.99, description: "Kids-sized ghee dosa with coconut chutney.",             tags: ["veg"] },
      { name: "Kids Butter Dosa",           category: "Kids Dosa", price: 6.99, description: "Kids-sized butter dosa with coconut chutney.",           tags: ["veg"] },
      { name: "Kids Chocolate Dosa",        category: "Kids Dosa", price: 7.99, description: "Melted chocolate and Nutella spread with powdered sugar.", tags: ["veg"] },
      { name: "Kids Cheese Dosa",           category: "Kids Dosa", price: 7.99, description: "Kids dosa with mozzarella cheese and coconut chutney.",  tags: ["veg"] },
      { name: "Kids Pizza Dosa",            category: "Kids Dosa", price: 7.99, description: "Kids dosa with pizza sauce, onion, peppers, tomato, cheese.", tags: ["veg"] },

      // ---------- Rava Dosa ----------
      { name: "Rava Masala Dosa",           category: "Rava Dosa", price: 13.99, description: "Thin, crispy crepe topped with ginger, carrot, coriander.", tags: ["veg"] },
      { name: "Ghee Rava Masala Dosa",      category: "Rava Dosa", price: 14.99, description: "Thin, crispy crepe in ghee with ginger, carrot, coriander.", tags: ["veg"] },
      { name: "Mysore Rava Masala Dosa",    category: "Rava Dosa", price: 14.99, description: "Crepe with Mysore paste, ginger, carrot, coriander.",     tags: ["veg", "spicy"] },
      { name: "Onion Rava Masala Dosa",     category: "Rava Dosa", price: 14.99, description: "Crepe with caramelized onions, ginger, carrot, coriander.", tags: ["veg"] },
      { name: "Chaat Rava Dosa",            category: "Rava Dosa", price: 14.99, description: "Crepe with chaat masala, ginger, carrot, coriander.",     tags: ["veg"] },

      // ---------- Traditional Dosa ----------
      { name: "Plain Masala Dosa",          category: "Traditional Dosa", price: 12.99, description: "Thin, crispy crepe with sambhar and 4 chutneys.",  tags: ["veg", "popular"] },
      { name: "Cheese Masala Dosa",         category: "Traditional Dosa", price: 12.99, description: "Dosa with mozzarella cheese and coconut chutney.", tags: ["veg"] },
      { name: "Butter Masala Dosa",         category: "Traditional Dosa", price: 12.99, description: "Crispy dosa cooked in butter.",                    tags: ["veg"] },
      { name: "Ghee Masala Dosa",           category: "Traditional Dosa", price: 12.99, description: "Crispy dosa cooked in ghee.",                      tags: ["veg"] },
      { name: "Onion Masala Dosa",          category: "Traditional Dosa", price: 12.99, description: "Dosa with roasted onions and coriander.",          tags: ["veg"] },
      { name: "Paper Masala Dosa",          category: "Traditional Dosa", price: 13.99, description: "Plain dosa, crispier and larger.",                 tags: ["veg"] },
      { name: "Ghee Paper Masala Dosa",     category: "Traditional Dosa", price: 14.99, description: "Ghee dosa, crispier and larger.",                  tags: ["veg"] },
      { name: "Butter Paper Masala Dosa",   category: "Traditional Dosa", price: 14.99, description: "Butter dosa, crispier and larger.",                tags: ["veg"] },
      { name: "Mysore Masala Dosa",         category: "Traditional Dosa", price: 13.99, description: "Dosa spread with Mysore paste.",                   tags: ["veg", "spicy"] },
      { name: "Mysore Paper Masala Dosa",   category: "Traditional Dosa", price: 14.99, description: "Mysore dosa, crispier and larger.",                tags: ["veg", "spicy"] },
      { name: "Spicy Mysore Masala Dosa",   category: "Traditional Dosa", price: 14.99, description: "Dosa with extra spicy Mysore paste.",              tags: ["veg", "spicy"] },
      { name: "Spicy Mysore Paper Masala Dosa", category: "Traditional Dosa", price: 14.99, description: "Oversized spicy Mysore dosa.",                 tags: ["veg", "spicy"] },
      { name: "Roasted Garlic Masala Dosa", category: "Traditional Dosa", price: 13.99, description: "Dosa spread with butter and garlic paste.",        tags: ["veg"] },
      { name: "Pav Bhaji Dosa",             category: "Traditional Dosa", price: 14.49, description: "Dosa with pav bhaji spread.",                      tags: ["veg"] },
      { name: "Paneer Masala Dosa",         category: "Traditional Dosa", price: 16.49, description: "Dosa with cottage cheese cubes and raw onions.",   tags: ["veg"] },
      { name: "Palak Paneer Masala Dosa",   category: "Traditional Dosa", price: 16.99, description: "Dosa with spinach paste and cottage cheese.",      tags: ["veg"] },
      { name: "Palak Masala Dosa",          category: "Traditional Dosa", price: 13.99, description: "Dosa spread with spinach paste.",                  tags: ["veg"] },
      { name: "Coriander Masala Dosa",      category: "Traditional Dosa", price: 13.99, description: "Dosa spread with coriander paste.",                tags: ["veg"] },
      { name: "Podi Masala Dosa",           category: "Traditional Dosa", price: 14.99, description: "Dosa with gunpowder and ghee.",                    tags: ["veg", "spicy"] },
      { name: "Chettinad Masala Dosa",      category: "Traditional Dosa", price: 13.99, description: "Dosa spread with red chillies, spices, herbs paste.", tags: ["veg", "spicy"] },
      { name: "Kurmura Chilli Masala Dosa", category: "Traditional Dosa", price: 13.99, description: "Dosa with green chilli, coriander, mint paste.",   tags: ["veg", "spicy"] },
      { name: "Pizza Dosa",                 category: "Traditional Dosa", price: 15.49, description: "Dosa with pizza sauce, onion, peppers, tomato, cheese.", tags: ["veg"] },
      { name: "Spicy Chana Dal Masala Dosa",category: "Traditional Dosa", price: 14.99, description: "Dosa with spiced chana dal powder and toppings.",  tags: ["veg", "spicy"] },
      { name: "Dabbang Dosa",               category: "Traditional Dosa", price: 16.49, description: "Chef's special fusion dosa with veggies, cheese, spices.", tags: ["veg", "popular"] },
      { name: "Gotalo Dosa",                category: "Traditional Dosa", price: 18.99, description: "Indian fusion dosa with gravy on side.",           tags: ["veg"] },
      { name: "Podi Dosa",                  category: "Traditional Dosa", price: 14.99, description: "Dosa with gunpowder and ghee.",                    tags: ["veg", "spicy"] },
      { name: "Veg Spring Dosa",            category: "Traditional Dosa", price: 15.49, description: "Dosa with roasted veggies and chosen flavor.",     tags: ["veg"] },
      { name: "Mushroom Dosa",              category: "Traditional Dosa", price: 16.99, description: "Crispy rice crepe stuffed with seasoned mushrooms.", tags: ["veg"] },
      { name: "Chennai Special Dosa",       category: "Traditional Dosa", price: 15.49, description: "Dosa with onions, tomatoes, coriander, chaat powder.", tags: ["veg"] },

      // ---------- Flavored Dosa / Biryani ----------
      { name: "Veg Biryani",                category: "Flavored Dosa", price: 12.49, description: "Spiced vegetables and basmati rice with herbs and saffron.", tags: ["veg"] },
      { name: "Paneer Biryani",             category: "Flavored Dosa", price: 14.49, description: "Basmati rice with spiced paneer, saffron, herbs.",     tags: ["veg"] },
      { name: "Mushroom Biryani",           category: "Flavored Dosa", price: 14.49, description: "Basmati rice with mushrooms, spices, herbs.",          tags: ["veg"] },

      // ---------- Uttapam ----------
      { name: "Plain Uttapam",              category: "Uttapam", price: 10.99, description: "Plain uttapam with coriander sprinkled on top.",            tags: ["veg"] },
      { name: "Masala Uttapam",             category: "Uttapam", price: 11.99, description: "Traditional potato and onion stuffing on uttapam.",         tags: ["veg"] },
      { name: "Tomato Onion Uttapam",       category: "Uttapam", price: 11.99, description: "Classic tomato-onion topped uttapam.",                      tags: ["veg"] },
      { name: "Mix Veg Uttapam",            category: "Uttapam", price: 12.99, description: "Onions, tomatoes, peppers, coriander on uttapam.",          tags: ["veg"] },
      { name: "Paneer Uttapam",             category: "Uttapam", price: 13.99, description: "Paneer with onions, tomatoes, peppers, coriander.",         tags: ["veg"] },
      { name: "Podi Uttapam",               category: "Uttapam", price: 13.99, description: "Spiced dal powder with onions, tomatoes, coriander.",       tags: ["veg", "spicy"] },

      // ---------- Desserts ----------
      { name: "Chocolate Dosa",             category: "Desserts", price: 7.99, description: "Melted chocolate and Nutella with nuts and powdered sugar.", tags: ["veg", "popular"] },
      { name: "Rava Kesari",                category: "Desserts", price: 5.99, description: "Sweet semolina pudding with ghee, nuts, and saffron.",      tags: ["veg"] },
      { name: "Badam Halwa",                category: "Desserts", price: 5.99, description: "Rich almond dessert with ghee, sugar, and cardamom.",       tags: ["veg"] },
      { name: "Gulab Jamun",                category: "Desserts", price: 5.49, description: "Sweet, syrup-soaked dough balls with cardamom flavor.",     tags: ["veg", "popular"] },
      { name: "Ras Malai",                  category: "Desserts", price: 5.49, description: "Soft cottage cheese dumplings in saffron-infused milk.",    tags: ["veg"] },
      { name: "Ice Brownie",                category: "Desserts", price: 7.99, description: "Rich, fudgy brownie topped with creamy, cold ice cream.",   tags: ["veg"] },

      // ---------- Drinks ----------
      { name: "Mango Lassi",                category: "Drinks", price: 5.49, description: "Sweet, creamy mango yogurt drink.",                          tags: ["veg", "popular"] },
      { name: "Masala Tea",                 category: "Drinks", price: 3.99, description: "Spiced black tea with milk.",                                tags: ["veg"] },
      { name: "Thumbs Up",                  category: "Drinks", price: 3.99, description: "Bold, fizzy cola.",                                          tags: ["veg"] },
      { name: "Coke",                       category: "Drinks", price: 2.99, description: "Classic Coca-Cola.",                                         tags: ["veg"] },
      { name: "Diet Coke",                  category: "Drinks", price: 2.99, description: "Diet Coca-Cola.",                                            tags: ["veg"] },
      { name: "Ginger Ale",                 category: "Drinks", price: 2.99, description: "Refreshing ginger soda.",                                    tags: ["veg"] },
      { name: "Jeera Soda",                 category: "Drinks", price: 3.99, description: "Cumin-spiced fizzy refresher.",                              tags: ["veg"] },
      { name: "Sprite",                     category: "Drinks", price: 2.99, description: "Lemon-lime soda.",                                           tags: ["veg"] },
      { name: "Pepsi",                      category: "Drinks", price: 2.99, description: "Classic Pepsi cola.",                                        tags: ["veg"] },
      { name: "Butter Milk",                category: "Drinks", price: 5.49, description: "Cool yogurt-based drink with spices.",                       tags: ["veg"] },
      { name: "Filter Coffee",              category: "Drinks", price: 4.49, description: "Rich, aromatic South Indian coffee, brewed to perfection.",  tags: ["veg"] },
      { name: "Sweet Limbu Soda",           category: "Drinks", price: 4.49, description: "Refreshing lemon soda with a sweet twist.",                  tags: ["veg"] },

      // ---------- Extras ----------
      { name: "Chutney",                    category: "Extra", price: 0.50,  description: "Extra portion of chutney.",        tags: ["veg"] },
      { name: "Sambhar",                    category: "Extra", price: 3.50,  description: "Extra portion of sambhar.",        tags: ["veg"] },
      { name: "Paneer",                     category: "Extra", price: 5.00,  description: "Extra paneer add-on.",             tags: ["veg"] },
      { name: "Gotalo",                     category: "Extra", price: 11.00, description: "Side of gotalo gravy.",            tags: ["veg"] },
      { name: "Ghee",                       category: "Extra", price: 1.50,  description: "Extra ghee.",                      tags: ["veg"] },
      { name: "Butter",                     category: "Extra", price: 1.50,  description: "Extra butter.",                    tags: ["veg"] },
      { name: "Raytu",                      category: "Extra", price: 2.00,  description: "Cool yogurt raita.",               tags: ["veg"] },
      { name: "Bun (1)",                    category: "Extra", price: 2.00,  description: "Extra dinner roll.",               tags: ["veg"] },
      { name: "Podi",                       category: "Extra", price: 3.00,  description: "Spiced gunpowder seasoning.",      tags: ["veg", "spicy"] },
      { name: "Bhaji",                      category: "Extra", price: 5.00,  description: "Side of bhaji.",                   tags: ["veg"] },
      { name: "Poori",                      category: "Extra", price: 3.00,  description: "Side of fried poori bread.",       tags: ["veg"] }
    ]
  }
};

// Auto-assign a stable id to each item for the renderer
Object.values(MENUS).forEach(loc => {
  loc.items.forEach((item, i) => { item.id = `${loc.label}-${i}`; });
});
