import img0 from '../Assets/img/Cards/Image0.jpg';
import img1 from '../Assets/img/Cards/Image1.jpg';
import img2 from '../Assets/img/Cards/Image2.jpg';
import img3 from '../Assets/img/Cards/Image3.jpg';
import img4 from '../Assets/img/Cards/Image4.jpg';
import img5 from '../Assets/img/Cards/Image5.jpg';
import img6 from '../Assets/img/Cards/Image6.jpg';
import img7 from '../Assets/img/Cards/Image7.jpg';
import img8 from '../Assets/img/Cards/Image8.jpg';

export const cardslist = [
    {
        index: 0,
        name: 'Basic t-shirt',
        img: img0,
        url: "https://ae04.alicdn.com/kf/HTB1CLLYXcnrK1RkHFrdq6xCoFXak/-.jpg_640x640.jpg", 
        id: '#7142',
        sex: 'string',
        category: 't-shirt',
        brand:'Levi`s',
        collection: 'string',
        color:'white',
        size:'S',
        style:'A-Line',
        season:'string',
        rating:'Rating',
        description:'string',
        details:'string',
        price: 35,
        discount: 25
    },
    {
        index: 1,
        name: 'Basic Tops',
        img: img1,
        url: "https://ae04.alicdn.com/kf/HTB1CLLYXcnrK1RkHFrdq6xCoFXak/-.jpg_640x640.jpg",
        id: '#7141',
        sex: 'string',
        category: 'Tops',
        brand:'Jungmaven',
        collection:'string',
        color:'white',
        size:'M',
        style:'Graphic',
        season:'string',
        rating:'Rating',
        description:'string',
        details:'string',
        price: 200,
        discount: 35
    },
    {
        index: 2,
        name: 'Trousers',
        img: img2,
        url: "https://ae04.alicdn.com/kf/HTB1CLLYXcnrK1RkHFrdq6xCoFXak/-.jpg_640x640.jpg",
        id: '#7143',
        sex: 'string',
        category: 'Trousers',
        brand:'Sunspel',
        collection:'string',
        color:'black',
        size:'L',
        style:'Graphic',
        season:'string',
        rating:'Rating',
        description:'string',
        details:'string',
        price: 100,
        discount: 25
    },
    {
        index: 3,
        name: 'Tops',
        img: img3,
        url: "https://ae04.alicdn.com/kf/HTB1CLLYXcnrK1RkHFrdq6xCoFXak/-.jpg_640x640.jpg",
        id: '#7142',
        sex: 'string',
        category: 'Tops',
        brand:'Sunspel',
        collection:'string',
        color:'black',
        size:'L',
        style:'Graphic',
        season:'string',
        rating:'Rating',
        description:'string',
        details:'string',
        price: 400,
        discount: 40
    },
    {
        index: 4,
        name: 'Basic t-shirt',
        img: img4,
        url: "https://ae04.alicdn.com/kf/HTB1CLLYXcnrK1RkHFrdq6xCoFXak/-.jpg_640x640.jpg",
        id: '#7142',
        sex: 'string',
        category: 't-shirt',
        brand:'Levi`s',
        collection:'string',
        color:'black',
        size:'XS',
        style:'Graphic',
        season:'string',
        rating:'Rating',
        description:'string',
        details:'string',
        price: 50,
        discount: 25
    },
    {
        index: 5,
        name: 'Trousers',
        img: img5,
        url: "https://ae04.alicdn.com/kf/HTB1CLLYXcnrK1RkHFrdq6xCoFXak/-.jpg_640x640.jpg",
        id: '#7142',
        sex: 'string',
        category: 'Trousers',
        brand:'Sunspel',
        collection:'string',
        color:'black',
        size:'L',
        style:'Graphic',
        season:'string',
        rating:'Rating',
        description:'string',
        details:'string',
        price: 400,
        discount: 40
    },
    {
        index: 6,
        name: 'Basic Tops',
        img: img6,
        url: "https://ae04.alicdn.com/kf/HTB1CLLYXcnrK1RkHFrdq6xCoFXak/-.jpg_640x640.jpg",
        id: '#7142',
        sex: 'string',
        category: 'Tops',
        brand:'Jungmaven',
        collection:'string',
        color:'black',
        size:'L',
        style:'Graphic',
        season:'string',
        rating:'Rating',
        description:'string',
        details:'string',
        price: 400,
        discount: 40
    },
    {
        index: 7,
        name: 'Basic t-shirt',
        img: img7,
        url: "https://ae04.alicdn.com/kf/HTB1CLLYXcnrK1RkHFrdq6xCoFXak/-.jpg_640x640.jpg",
        id: '#7142',
        sex: 'string',
        category: 'T-shirts',
        brand:'Sunspel',
        collection:'string',
        color:'black',
        size:'L',
        style:'Graphic',
        season:'string',
        rating:'Rating',
        description:'string',
        details:'string',
        price: 400,
        discount: 40
    },
    {
        index: 8,
        name: 'Trousers',
        img: img8,
        url: "https://ae04.alicdn.com/kf/HTB1CLLYXcnrK1RkHFrdq6xCoFXak/-.jpg_640x640.jpg",
        id: '#7142',
        sex: 'string',
        category: 'Trousers',
        brand:'Jungmaven',
        collection:'string',
        color:'black',
        size:'S',
        style:'Graphic',
        season:'string',
        rating:'Rating',
        description:'string',
        details:'string',
        price: 150,
        discount: 35
    }
];

export const images = Object.keys(cardslist);

export const data = {
    'Products': ['Men', 'Women', 'Kids', 'Sale', 'Collections'],
    'Get help': ['Order status', 'Shipping and delovery', 'Returns', 'Payment options'],
    'Legals': ['Terms of services', 'Privacy policy'],
    'Contact': {
        'Email': 'ecommerce@gmail.com',
        'Phone': '972 756 555-0123',
        'Address': '2464 Royal Ln. Mesa, New Jersey 4563'
    }
}

export const menu = {
    'women': ['All','Collections','Coats & Jackets','Dresses','Pants','Jumpsuits & Rompers','Shorts','Skirts','Sweaters','Swimwear','Tops','Shoes'],
    'collections': ['Our Favorites','New Arrivals','New Collections','Brands','Trends','New Names at Neiman`s','Luxe Essentials','Exclusives'],
    'Brands': ['Akris','Alice + Olivia','Brunello Cucinelli','CHANEL','Dolce & Gabbana','Eileen Fisher','Giorgio Armani','Gucci','Johnny Was','Lafayette 148 New York','Theory'],
}

export const menuProducts = {
    'Category' : ['All','Coats & Jackets','T-shirts','Tops','Trousers','Jumpsuits & Rompers','Pants','Shorts','Sweaters','Shoes'],
    'Price' : [35,200,'200 - 400$','400 - 600$','Over 600$'],
    'Size' : ['XS','L','S','XL','M','XXL'],
    'Collection' : [],
    'Brand' : ['Levi`s','Jungmaven','Sunspel','Uniqlo','Aime Leon Dore'],
    'Style' : ['All styles','A-Line','Graphic T-Shirts'],
    'Season' : []
}

// Under 100$