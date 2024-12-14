import Images from '../assets/images/Images'
const dataItem = [
    { 
        name: 'black dress', 
        price: 50.5, 
        img: Images.camera ,
        size: 'M',
         category:'dress'

    },
    { name: 'white dress', price: 30.99, img: Images.mayada , size :'s', category:'dress'},
    // { name: 'wear', price: 67.89, img: Images.mayada },
    { name: 'panets', price: 30.50, img: Images.pantes,size :'s', category:'panets' },
    // { name: 'childern clothes', price: 30.50, img: Images.search ,size :'s' , category:'panets'},
    { name: 'jaket', price: 30.50, img: Images.shooping,size :'s', category:'jakets' },
    { name: 'blue dress', price: 30.50, img: Images.bluedress ,size :'s', category:'dress'},
    { name: 'red dress', price:13.32, img: Images.hi,size:'s', category:'dress' },
    { name: 'orange dress', price:9.98, img: Images.orange,size:'s', category:'dress'},
    { name: 'florid dress', price:57.77, img: Images.florid,size:'s', category:'dress'},
    { name: 'black dress', price:78.90, img: Images.aswad ,size:'s', category:'dress'},
    { name: 'white shirt', price: 30.50, img: Images.tshirt,size :'s', category:'shirt'},
    { name: 'black satin', price: 30.50, img: Images.satin,size :'s', category:'dress' },  
    { name: 'brown satin', price: 30.50, img: Images.brown,size :'s', category:'dress' },  
    { name: 'gray shirt', price: 30.50, img: Images.shirt ,size :'s', category:'shirt'},
    { name: 'white shoes', price: 30.50, img: Images.shoes , size:'40', category:'shoose'},
    { name: 'gray& white shoes', price: 30.50, img: Images.nike,size:'40', category:'shoose' },
    { name: 'black shoes', price: 30.50, img: Images.adidas,size:'40'  , category:'shoose'},
    {name: 'green shose' , price: 30.49, ime: Images.mat ,size:'40', category:'shoose'},
    { name: 'colored shoes', price: 30.50, img: Images.colored,size:'40' , category:'shoose' },
    { name: 'black boots', price: 30.50, img: Images.boots,size:'40' , category:'shoose' },
    { name: 'white bag', price: 347.98, img: Images.images, category:'bags' },
    { name: 'black bag', price: 30.50, img: Images.bag,size :'s', category:'bags' },
    { name: 'green bag', price: 156.56, img: Images.green, category:'bags' },
    { name: 'pink bag', price: 276.55, img: Images.pink, category:'bags' },
    { name: 'red bag', price:213.32, img: Images.red, category:'bags' },
    { name: 'purple school bag', price:90.92, img: Images.school, category:'bags' },
    { name: 'pink gloss', price:10.65, img: Images.gloos , category:'makeup'},
    //  { name: 'pink bloom', price:.10, img: Images.jas },
     { name: 'pink e.l.f gloss', price:13.32, img: Images.mariam, category:'makeup'},
    { name: 'brown gloss', price:14.67, img: Images.sead , category:'makeup'},
   
    { name: 'shirt', price:34.55, img: Images.raw, category:'shirt' },
    { name: 'variety shirts', price:33.55, img: Images.imege, category:'shirt' },
    { name: 'Winter collection', price:33.55, img: Images.var, category:'shirt' },
    { name: 'black shirt', price:15.45, img: Images.basket, category:'shirt' },

    { name: 'green pantes', price:16.63, img: Images.hi, category:'panets' },
    { name: 'black panets ', price:16.63, img: Images.you, category:'panets' },
    { name: 'red panets', price:16.63, img: Images.key, category:'panets' },
    { name: 'blue panets', price:16.63, img: Images.me,  category:'panets' },
    { name: 'blue shirt', price:16.63, img: Images.sala, category:'shirt' },
    { name: 'blue shirt', price:16.63, img: Images.sala, category:'shirt' },

]

export const category = [
    {
        catName:'dress',
        catImage:Images.mayada
    },
    {
        catName:'panets',
        catImage:Images.pantes
    },
    {
        catName:'shirt',
        catImage:Images.tshirt
    }, 
    {
        catName:'bags',
        catImage:Images.images
    },
    {
        catName:'shoose',
        catImage:Images.colored
    },
    {
        catName:'makeup',
        catImage:Images.jas
    },
    

]


export default dataItem