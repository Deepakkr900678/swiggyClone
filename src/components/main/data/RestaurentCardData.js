const restaurants = [
    {
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/g5txnz35wlrgbskk3r8y",
        name: "Gurukripa Restaurant Sarwate",
        offer: "₹125 OFF ABOVE ₹199",
        rating: "4",
        description: "North Indian, Thalis, Indian, Fast Food, Chinese, Beverages, Desserts, Jain, Punjabi",
        address: "South Tukoganj"
    },
    {
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x7zvrb5mbg92skzncwnu",
        name: "Nafees Restaurant",
        offer: "₹125 OFF ABOVE ₹199",
        rating: "4.1",
        description: "Mughlai, Biryani, North Indian, Chinese, Snacks, Desserts, Beverages",
        address: "Old Palasia"
    },
    {
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/85ccae4e3576f9330af102c46ca85395",
        name: "Baskin Robbins - Ice Cream Desserts",
        offer: "30% OFF UPTO ₹75",
        rating: "4.3",
        description: "Desserts, Ice Cream",
        address: "Khatiwala"
    },
    {
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/upajaowdlvgbeoepabt1",
        name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
        offer: "",
        rating: "4.4",
        description: "Desserts, Ice Cream",
        address: "Raj Mohalla"
    },
    {
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mjvpnvts8c2v4hatzzus",
        name: "Natural Ice Cream",
        offer: "20% OFF UPTO ₹50",
        rating: "4.6",
        description: "Ice Cream, Desserts",
        address: "Rnt Marg"
    },
    {
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yvsx0eg2orug7sfpdazr",
        name: "The Belgian Waffle Co.",
        offer: "",
        rating: "4.3",
        description: "Waffle, Desserts, Ice Cream, Beverages",
        address: "Old Palasia"
    },
    {
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ab979bffbd658e74de650a15ca0092a3",
        name: "Oven Story Pizza",
        offer: "₹125 OFF ABOVE ₹249",
        rating: "4.2",
        description: "Pizzas, Pastas, Italian, Desserts, Beverages",
        address: "Sudama Nagar"
    },
    {
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/af33b81798b11deba338e94b7585d348",
        name: "Faasos - Wraps & Rolls",
        offer: "₹125 OFF ABOVE ₹249",
        rating: "4",
        description: "Kebabs, Fast Food, Snacks, North Indian, American, Healthy Food, Desserts, Beverages",
        address: "Sudama Nagar"
    },
    {
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qa9nfrq8aomor6glzcpo",
        name: "LunchBox - Meals and Thalis",
        offer: "",
        rating: "4.2",
        description: "Biryani, North Indian, Punjabi, Healthy Food, Desserts, Beverages",
        address: "Sudama Nagar"
    },
    {
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0b3356a88b6fc5966c452c4c9b1b5e4a",
        name: "The Good Bowl",
        offer: "",
        rating: "4",
        description: "Biryani, North Indian, Pastas, Punjabi, Desserts, Beverages",
        address: "Sudama Nagar"
    },
    {
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/irki7zudjxrbbmtcvpgy",
        name: "Sagar Gaire",
        offer: "50% OFF UPTO ₹100",
        rating: "4.1",
        description: "Punjabi, Chinese, Italian, Thalis",
        address: "New Palasia"
    },
    {
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1ace5fa65eff3e1223feb696c956b38b",
        name: "Subway",
        offer: "",
        rating: "4",
        description: "Healthy Food, Salads, Snacks, Desserts, Beverages",
        address: "Sapna Sangeeta"
    },
    {
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",
        name: "KFC",
        offer: "20% OFF UPTO ₹50",
        rating: "3.9",
        description: "Burgers, Biryani, American, Snacks, Fast Food",
        address: "South Tukoganj"
    },
    {
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/49c27c020e946f8f4fc13fdc9038525c",
        name: "Behrouz Biryani",
        offer: "60% OFF UPTO ₹120",
        rating: "4.3",
        description: "Biryani, Mughlai, Lucknowi, Hyderabadi, Kebabs, North Indian, Desserts, Beverages",
        address: "Sudama Nagar"
    },
    {
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f34fdb77155c25f7b97e3110869053c3",
        name: "Get Desserted",
        offer: "",
        rating: "3.8",
        description: "Desserts, Beverages, Ice Cream",
        address: "New Palasiya"
    },
    {
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/r3hc8fyoajjgkmjszx2k",
        name: "Oye24",
        offer: "₹125 OFF ABOVE ₹199",
        rating: "4",
        description: "North Indian, Pizzas, South Indian, Desserts, Chinese, Thalis, Indian",
        address: "Pardesipura"
    },
    {
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wrwrngygzztx6lh1wpfn",
        name: "Sam's Momos",
        offer: "₹125 OFF ABOVE ₹199",
        rating: "3.9",
        description: "Chinese, Snacks, Pastas",
        address: "New Palasia"
    },
    {
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b1h0agx8ysx7w6ybrygc",
        name: "Maa Ki Rasoi",
        offer: "₹125 OFF ABOVE ₹199",
        rating: "4",
        description: "North Indian, Thalis, South Indian, Chinese",
        address: "Sudama Nagar"
    },
    {
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b4ca94ca747927e9a728689dae0c8b30",
        name: "Asia Seven - Sizzling Chinese",
        offer: "40% OFF UPTO ₹80",
        rating: "3.9",
        description: "Chinese, Asian, Pan-Asian, Thai",
        address: "South Tukoganj"
    },
    {
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ousldxwz6z3cypd2pygf",
        name: "UBQ BY Barbeque Nation",
        offer: "60% OFF UPTO ₹120",
        rating: "3.8",
        description: "North Indian, Barbecue, Biryani, Kebabs, Mughlai, Desserts",
        address: "Tukoganj"
    }
];
export default restaurants;