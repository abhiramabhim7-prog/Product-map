import React from 'react'


export const Product = () => {
    const products = [
        {id:1,
            img :<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNtnQnoVe06xtobYz-pbYbCCe7l3bSLEP3VmyAMeA1SA&s=10'/>,
            name:"Laptop",
            price:9999,
        },
    
        {id:2,
            img :<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTETLg9nuM9DwoPIFKCtfTSaKN7H5f2zOftYcXzhEQfCQ&s'/>,
            name:"Phone",
            price:3999,
        },
    
        {id:3,
            img :<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMNEHsJIzicK3EM3GcFI_OklXTIlJDK6re-HcwPCBwhFUQRlr7zo16itMn&s=10'/>,
            name:"Tab",
            price:2999,
        },
        {id:3,
            img :<img src='https://icon.in/cdn/shop/files/1_ab4503f4-5a6a-4895-92d7-336366744cea.jpg?v=1735285817'/>,
            name:"Bag",
            price:599,
        },
        {id:3,
            img : <img src='https://i0.wp.com/durgashop.in/wp-content/uploads/2024/04/Flair-Yolo-Gel-Pen.png?fit=1000%2C1000&ssl=1'/>,
            name:"Pen",
            price:10,
        },
        {id:3,
            img :<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX1BhBzceBrGBNYP0F9CxRFjZK6MTa-0ALcJzErG0acbAZdn4fN_X8tMs&s=10'/>,
            name:"Headphone",
            price:4999,
        },
        {id:3,
            img : <img src='https://www.boat-lifestyle.com/cdn/shop/files/01_f058b433-47a2-4434-a6a7-90f8e1f0f22f_1800x.png?v=1784285347'/>,
            name:"Speaker",
            price:999,
        },
        {id:3,
            img : <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMNspSm79-Ov4jc89JFDga2xKNr8Z8lh8_asOPDVUiUXYYZrQr0MAMF9I&s=10'/>,
            name:"Watch",
            price:2500,
        },
        
    ]
  return (
    <div className='hero'>
      <h2>OUR PRODUCTS</h2>
        <div id='list'>
           {products.map((Product) => {
      return(
        <div id='items'>
            
            {Product.img}
            <h3>{Product.name}</h3>
            <p>Price :{Product.price}</p>
            <button>Buy Now</button>
          
        </div>
        )
    })}
    </div>
    </div>
  )
}


