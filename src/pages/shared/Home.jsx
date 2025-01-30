import Section from "../../ui/Section";

const staticData = {
  categories: [
    {
      title: "Men's Clothing",
      clothes: [
        {
          title: "Casual T-Shirt",
          price: 19.99,
          rating: {
            count: 120,
            percentage: 0.55,
          },
          brand: "FashionHub",
          sale: 15.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Denim Jeans",
          price: 49.99,
          rating: {
            count: 80,
            percentage: 0.62,
          },
          brand: "StyleMasters",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Classic Suit",
          price: 149.99,
          rating: { count: 45, percentage: 0.78 },
          brand: "EleganceWear",
          sale: 30.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Casual T-Shirt",
          price: 19.99,
          rating: {
            count: 120,
            percentage: 0.45,
          },
          brand: "FashionHub",
          sale: 15.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Denim Jeans",
          price: 49.99,
          rating: {
            count: 80,
            percentage: 0.92,
          },
          brand: "StyleMasters",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Classic Suit",
          price: 149.99,
          rating: { count: 45, percentage: 0.78 },
          brand: "EleganceWear",
          sale: 30.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Casual T-Shirt",
          price: 19.99,
          rating: {
            count: 120,
            percentage: 0.85,
          },
          brand: "FashionHub",
          sale: 15.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Denim Jeans",
          price: 49.99,
          rating: {
            count: 80,
            percentage: 0.92,
          },
          brand: "StyleMasters",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Classic Suit",
          price: 149.99,
          rating: { count: 45, percentage: 0.78 },
          brand: "EleganceWear",
          sale: 30.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Casual T-Shirt",
          price: 19.99,
          rating: {
            count: 120,
            percentage: 0.85,
          },
          brand: "FashionHub",
          sale: 15.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Denim Jeans",
          price: 49.99,
          rating: {
            count: 80,
            percentage: 0.92,
          },
          brand: "StyleMasters",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Classic Suit",
          price: 149.99,
          rating: { count: 45, percentage: 0.78 },
          brand: "EleganceWear",
          sale: 30.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Casual T-Shirt",
          price: 19.99,
          rating: {
            count: 120,
            percentage: 0.85,
          },
          brand: "FashionHub",
          sale: 15.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Denim Jeans",
          price: 49.99,
          rating: {
            count: 80,
            percentage: 0.92,
          },
          brand: "StyleMasters",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Classic Suit",
          price: 149.99,
          rating: { count: 45, percentage: 0.78 },
          brand: "EleganceWear",
          sale: 30.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Casual T-Shirt",
          price: 19.99,
          rating: {
            count: 120,
            percentage: 0.85,
          },
          brand: "FashionHub",
          sale: 15.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Denim Jeans",
          price: 49.99,
          rating: {
            count: 80,
            percentage: 0.92,
          },
          brand: "StyleMasters",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Classic Suit",
          price: 149.99,
          rating: { count: 45, percentage: 0.78 },
          brand: "EleganceWear",
          sale: 30.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
      ],
    },
    {
      title: "Women's Clothing",
      clothes: [
        {
          title: "Summer Dress",
          price: 39.99,
          rating: { count: 150, percentage: 0.88 },
          brand: "ChicStyles",
          sale: 20.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Athletic Leggings",
          price: 29.99,
          rating: { count: 100, percentage: 0.95 },
          brand: "FitFashion",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Formal Blouse",
          price: 59.99,
          rating: {
            count: 60,
            percentage: 0.82,
          },
          brand: "EleganceWear",
          sale: 25.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Summer Dress",
          price: 39.99,
          rating: { count: 150, percentage: 0.88 },
          brand: "ChicStyles",
          sale: 20.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Athletic Leggings",
          price: 29.99,
          rating: { count: 100, percentage: 0.95 },
          brand: "FitFashion",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Formal Blouse",
          price: 59.99,
          rating: {
            count: 60,
            percentage: 0.82,
          },
          brand: "EleganceWear",
          sale: 25.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Summer Dress",
          price: 39.99,
          rating: { count: 150, percentage: 0.88 },
          brand: "ChicStyles",
          sale: 20.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Athletic Leggings",
          price: 29.99,
          rating: { count: 100, percentage: 0.95 },
          brand: "FitFashion",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Formal Blouse",
          price: 59.99,
          rating: {
            count: 60,
            percentage: 0.82,
          },
          brand: "EleganceWear",
          sale: 25.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Summer Dress",
          price: 39.99,
          rating: { count: 150, percentage: 0.88 },
          brand: "ChicStyles",
          sale: 20.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Athletic Leggings",
          price: 29.99,
          rating: { count: 100, percentage: 0.95 },
          brand: "FitFashion",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Formal Blouse",
          price: 59.99,
          rating: {
            count: 60,
            percentage: 0.82,
          },
          brand: "EleganceWear",
          sale: 25.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Summer Dress",
          price: 39.99,
          rating: { count: 150, percentage: 0.88 },
          brand: "ChicStyles",
          sale: 20.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Athletic Leggings",
          price: 29.99,
          rating: { count: 100, percentage: 0.95 },
          brand: "FitFashion",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Formal Blouse",
          price: 59.99,
          rating: {
            count: 60,
            percentage: 0.82,
          },
          brand: "EleganceWear",
          sale: 25.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
      ],
    },
    {
      title: "Kids' Clothing",
      clothes: [
        {
          title: "Cute Onesie",
          price: 24.99,
          rating: {
            count: 80,
            percentage: 0.9,
          },
          brand: "TinyTrend",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Colorful Kid's Tee",
          price: 14.99,
          rating: {
            count: 120,
            percentage: 0.88,
          },
          brand: "KidStyle",
          sale: 10.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Cute Onesie",
          price: 24.99,
          rating: {
            count: 80,
            percentage: 0.9,
          },
          brand: "TinyTrend",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Colorful Kid's Tee",
          price: 14.99,
          rating: {
            count: 120,
            percentage: 0.88,
          },
          brand: "KidStyle",
          sale: 10.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Cute Onesie",
          price: 24.99,
          rating: {
            count: 80,
            percentage: 0.9,
          },
          brand: "TinyTrend",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Colorful Kid's Tee",
          price: 14.99,
          rating: {
            count: 120,
            percentage: 0.88,
          },
          brand: "KidStyle",
          sale: 10.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Cute Onesie",
          price: 24.99,
          rating: {
            count: 80,
            percentage: 0.9,
          },
          brand: "TinyTrend",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Colorful Kid's Tee",
          price: 14.99,
          rating: {
            count: 120,
            percentage: 0.88,
          },
          brand: "KidStyle",
          sale: 10.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Cute Onesie",
          price: 24.99,
          rating: {
            count: 80,
            percentage: 0.9,
          },
          brand: "TinyTrend",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Colorful Kid's Tee",
          price: 14.99,
          rating: {
            count: 120,
            percentage: 0.88,
          },
          brand: "KidStyle",
          sale: 10.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Cute Onesie",
          price: 24.99,
          rating: {
            count: 80,
            percentage: 0.9,
          },
          brand: "TinyTrend",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Colorful Kid's Tee",
          price: 14.99,
          rating: {
            count: 120,
            percentage: 0.88,
          },
          brand: "KidStyle",
          sale: 10.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Cute Onesie",
          price: 24.99,
          rating: {
            count: 80,
            percentage: 0.9,
          },
          brand: "TinyTrend",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Colorful Kid's Tee",
          price: 14.99,
          rating: {
            count: 120,
            percentage: 0.88,
          },
          brand: "KidStyle",
          sale: 10.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Cute Onesie",
          price: 24.99,
          rating: {
            count: 80,
            percentage: 0.9,
          },
          brand: "TinyTrend",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Colorful Kid's Tee",
          price: 14.99,
          rating: {
            count: 120,
            percentage: 0.88,
          },
          brand: "KidStyle",
          sale: 10.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Cute Onesie",
          price: 24.99,
          rating: {
            count: 80,
            percentage: 0.9,
          },
          brand: "TinyTrend",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Colorful Kid's Tee",
          price: 14.99,
          rating: {
            count: 120,
            percentage: 0.88,
          },
          brand: "KidStyle",
          sale: 10.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Cute Onesie",
          price: 24.99,
          rating: {
            count: 80,
            percentage: 0.9,
          },
          brand: "TinyTrend",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Colorful Kid's Tee",
          price: 14.99,
          rating: {
            count: 120,
            percentage: 0.88,
          },
          brand: "KidStyle",
          sale: 10.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
      ],
    },
    {
      title: "Men's Clothing",
      clothes: [
        {
          title: "Casual T-Shirt",
          price: 19.99,
          rating: {
            count: 120,
            percentage: 0.85,
          },
          brand: "FashionHub",
          sale: 15.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Denim Jeans",
          price: 49.99,
          rating: {
            count: 80,
            percentage: 0.92,
          },
          brand: "StyleMasters",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Classic Suit",
          price: 149.99,
          rating: { count: 45, percentage: 0.78 },
          brand: "EleganceWear",
          sale: 30.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Casual T-Shirt",
          price: 19.99,
          rating: {
            count: 120,
            percentage: 0.85,
          },
          brand: "FashionHub",
          sale: 15.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Denim Jeans",
          price: 49.99,
          rating: {
            count: 80,
            percentage: 0.92,
          },
          brand: "StyleMasters",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Classic Suit",
          price: 149.99,
          rating: { count: 45, percentage: 0.78 },
          brand: "EleganceWear",
          sale: 30.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Casual T-Shirt",
          price: 19.99,
          rating: {
            count: 120,
            percentage: 0.85,
          },
          brand: "FashionHub",
          sale: 15.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Denim Jeans",
          price: 49.99,
          rating: {
            count: 80,
            percentage: 0.92,
          },
          brand: "StyleMasters",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Classic Suit",
          price: 149.99,
          rating: { count: 45, percentage: 0.78 },
          brand: "EleganceWear",
          sale: 30.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Casual T-Shirt",
          price: 19.99,
          rating: {
            count: 120,
            percentage: 0.85,
          },
          brand: "FashionHub",
          sale: 15.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Denim Jeans",
          price: 49.99,
          rating: {
            count: 80,
            percentage: 0.92,
          },
          brand: "StyleMasters",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Classic Suit",
          price: 149.99,
          rating: { count: 45, percentage: 0.78 },
          brand: "EleganceWear",
          sale: 30.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Casual T-Shirt",
          price: 19.99,
          rating: {
            count: 120,
            percentage: 0.85,
          },
          brand: "FashionHub",
          sale: 15.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Denim Jeans",
          price: 49.99,
          rating: {
            count: 80,
            percentage: 0.92,
          },
          brand: "StyleMasters",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Classic Suit",
          price: 149.99,
          rating: { count: 45, percentage: 0.78 },
          brand: "EleganceWear",
          sale: 30.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Casual T-Shirt",
          price: 19.99,
          rating: {
            count: 120,
            percentage: 0.85,
          },
          brand: "FashionHub",
          sale: 15.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Denim Jeans",
          price: 49.99,
          rating: {
            count: 80,
            percentage: 0.92,
          },
          brand: "StyleMasters",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Classic Suit",
          price: 149.99,
          rating: { count: 45, percentage: 0.78 },
          brand: "EleganceWear",
          sale: 30.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
      ],
    },
    {
      title: "Women's Clothing",
      clothes: [
        {
          title: "Summer Dress",
          price: 39.99,
          rating: { count: 150, percentage: 0.88 },
          brand: "ChicStyles",
          sale: 20.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Athletic Leggings",
          price: 29.99,
          rating: { count: 100, percentage: 0.95 },
          brand: "FitFashion",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Formal Blouse",
          price: 59.99,
          rating: {
            count: 60,
            percentage: 0.82,
          },
          brand: "EleganceWear",
          sale: 25.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Summer Dress",
          price: 39.99,
          rating: { count: 150, percentage: 0.88 },
          brand: "ChicStyles",
          sale: 20.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Athletic Leggings",
          price: 29.99,
          rating: { count: 100, percentage: 0.95 },
          brand: "FitFashion",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Formal Blouse",
          price: 59.99,
          rating: {
            count: 60,
            percentage: 0.82,
          },
          brand: "EleganceWear",
          sale: 25.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Summer Dress",
          price: 39.99,
          rating: { count: 150, percentage: 0.88 },
          brand: "ChicStyles",
          sale: 20.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Athletic Leggings",
          price: 29.99,
          rating: { count: 100, percentage: 0.95 },
          brand: "FitFashion",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Formal Blouse",
          price: 59.99,
          rating: {
            count: 60,
            percentage: 0.82,
          },
          brand: "EleganceWear",
          sale: 25.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Summer Dress",
          price: 39.99,
          rating: { count: 150, percentage: 0.88 },
          brand: "ChicStyles",
          sale: 20.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Athletic Leggings",
          price: 29.99,
          rating: { count: 100, percentage: 0.95 },
          brand: "FitFashion",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Formal Blouse",
          price: 59.99,
          rating: {
            count: 60,
            percentage: 0.82,
          },
          brand: "EleganceWear",
          sale: 25.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Summer Dress",
          price: 39.99,
          rating: { count: 150, percentage: 0.88 },
          brand: "ChicStyles",
          sale: 20.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Athletic Leggings",
          price: 29.99,
          rating: { count: 100, percentage: 0.95 },
          brand: "FitFashion",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Formal Blouse",
          price: 59.99,
          rating: {
            count: 60,
            percentage: 0.82,
          },
          brand: "EleganceWear",
          sale: 25.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
      ],
    },
    {
      title: "Kids' Clothing",
      clothes: [
        {
          title: "Cute Onesie",
          price: 24.99,
          rating: {
            count: 80,
            percentage: 0.9,
          },
          brand: "TinyTrend",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Colorful Kid's Tee",
          price: 14.99,
          rating: {
            count: 120,
            percentage: 0.88,
          },
          brand: "KidStyle",
          sale: 10.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Cute Onesie",
          price: 24.99,
          rating: {
            count: 80,
            percentage: 0.9,
          },
          brand: "TinyTrend",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Colorful Kid's Tee",
          price: 14.99,
          rating: {
            count: 120,
            percentage: 0.88,
          },
          brand: "KidStyle",
          sale: 10.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Cute Onesie",
          price: 24.99,
          rating: {
            count: 80,
            percentage: 0.9,
          },
          brand: "TinyTrend",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Colorful Kid's Tee",
          price: 14.99,
          rating: {
            count: 120,
            percentage: 0.88,
          },
          brand: "KidStyle",
          sale: 10.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Cute Onesie",
          price: 24.99,
          rating: {
            count: 80,
            percentage: 0.9,
          },
          brand: "TinyTrend",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Colorful Kid's Tee",
          price: 14.99,
          rating: {
            count: 120,
            percentage: 0.88,
          },
          brand: "KidStyle",
          sale: 10.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Cute Onesie",
          price: 24.99,
          rating: {
            count: 80,
            percentage: 0.9,
          },
          brand: "TinyTrend",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Colorful Kid's Tee",
          price: 14.99,
          rating: {
            count: 120,
            percentage: 0.88,
          },
          brand: "KidStyle",
          sale: 10.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Cute Onesie",
          price: 24.99,
          rating: {
            count: 80,
            percentage: 0.9,
          },
          brand: "TinyTrend",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Colorful Kid's Tee",
          price: 14.99,
          rating: {
            count: 120,
            percentage: 0.88,
          },
          brand: "KidStyle",
          sale: 10.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Cute Onesie",
          price: 24.99,
          rating: {
            count: 80,
            percentage: 0.9,
          },
          brand: "TinyTrend",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Colorful Kid's Tee",
          price: 14.99,
          rating: {
            count: 120,
            percentage: 0.88,
          },
          brand: "KidStyle",
          sale: 10.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Cute Onesie",
          price: 24.99,
          rating: {
            count: 80,
            percentage: 0.9,
          },
          brand: "TinyTrend",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Colorful Kid's Tee",
          price: 14.99,
          rating: {
            count: 120,
            percentage: 0.88,
          },
          brand: "KidStyle",
          sale: 10.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Cute Onesie",
          price: 24.99,
          rating: {
            count: 80,
            percentage: 0.9,
          },
          brand: "TinyTrend",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Colorful Kid's Tee",
          price: 14.99,
          rating: {
            count: 120,
            percentage: 0.88,
          },
          brand: "KidStyle",
          sale: 10.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
        {
          title: "Cute Onesie",
          price: 24.99,
          rating: {
            count: 80,
            percentage: 0.9,
          },
          brand: "TinyTrend",
          sale: null, // No sale for this item
          image: "src/images.jpeg",
        },
        {
          title: "Colorful Kid's Tee",
          price: 14.99,
          rating: {
            count: 120,
            percentage: 0.88,
          },
          brand: "KidStyle",
          sale: 10.0, // Sale value (if any)
          image: "src/images.jpeg",
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <div className=" space-y-10">
        {/* banner image 1 */}
        <div className=" h-72 w-full relative">
          <img
            src="../../src/banner1.png"
            className="h-72 w-full object-cover object-center "
            loading="lazy"
          ></img>
          <span className=" absolute bottom-8 left-5 font-bold text-5xl">
            Street Clothes
          </span>
        </div>
        {/* sections */}
        <div className="mx-4 space-y-16">
          {staticData.categories.map((category) => (
            <Section key={Math.random()} data={category} />
          ))}
        </div>
        {/* banner image 2 */}
        <div className="grid grid-cols-[50%,50%] grid-rows-[50%,25%,25%]">
          <div className=" col-start-1 col-end-3">
            <img
              src="/../src/banner 2.png"
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className=" row-start-3 relative">
            <img
              src="/../src/banner 3.png"
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <span className=" absolute bottom-10 left-5 font-semibold text-5xl">
              Black
            </span>
          </div>
          <div className=" row-start-2 row-end-4 relative">
            <img
              src="/../src/banner 4.png"
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <span className=" absolute top-[25%] right-1/2 translate-x-[50%] translate-y-[-50%] text-6xl font-semibold">
              Men&apos;s hats
            </span>
          </div>
          <div className="row-start-2 col-start-1 text-6xl self-center justify-self-center w-fit mx-2 justify-center text-primary-light dark:text-primary-dark font-bold ">
            Summer Sale
          </div>
        </div>
        {/* sections */}
        <div className="mx-4 space-y-16">
          {staticData.categories.map((category) => (
            <Section key={Math.random()} data={category} />
          ))}
        </div>
      </div>
    </>
  );
}
