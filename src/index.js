import React, {Fragment, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./Font.css"
import { ProductCard } from './Components/productCard';
import { ProductList } from './Components/productList';
const baniModeData = [
  {
    image: "https://www.banimode.com/996218-large_default/90806.jpg",
    offPercent:11,
    isOff:true,
    imageHover: "https://www.banimode.com/996222-large_default/90806.jpg",
    imageHover1: "https://www.banimode.com/996216-large_default/90806.jpg",
    imageHover2: "https://www.banimode.com/996220-large_default/90806.jpg",
    imageHover3: "https://www.banimode.com/996222-large_default/90806.jpg",
    imageHover4: "https://www.banimode.com/996224-large_default/90806.jpg",
    imageHover5: "https://www.banimode.com/996226-large_default/90806.jpg",
    isExtraOff:true,
    extraOff: "30% تخفیف بیشتر در سبد خرید",
    productBrand: "JootiJeans",
    offPrice:"1,599,000",
    productName:"شلوار جین زنانه جوتی جینز ...",
    mainPrice: "1,429,000",
    size1:"S",
    size2:"M",
    size3:"L",
  },
  {
    image: "https://www.banimode.com/915905-large_default/85713.jpg",
    offPercent:30,
    isOff:true,
    imageHover: "https://www.banimode.com/915911-large_default/85713.jpg",
    imageHover1: "https://www.banimode.com/915903-large_default/85713.jpg",
    imageHover2: "https://www.banimode.com/915907-large_default/85713.jpg",
    imageHover3: "https://www.banimode.com/915909-large_default/85713.jpg",
    imageHover4: "https://www.banimode.com/915911-large_default/85713.jpg",
    imageHover5: "https://www.banimode.com/915913-large_default/85713.jpg",
    isExtraOff:true,
    extraOff: "30% تخفیف بیشتر در سبد خرید",
    productBrand: "Koton",
    offPrice:"1,439,000",
    productName:"هودی کوتون koton کد 4564",
    mainPrice: "1,007,300",
    size1:"S",
    size2:"M",
    size3:"L",
  },
  {
    image: "https://www.banimode.com/912231-large_default/84281.jpg",
    offPercent:null,
    isOff:false,
    imageHover: "https://www.banimode.com/912237-large_default/84281.jpg",
    imageHover1: "https://www.banimode.com/912233-large_default/84281.jpg",
    imageHover2: "https://www.banimode.com/912235-large_default/84281.jpg",
    imageHover3: "https://www.banimode.com/912237-large_default/84281.jpg",
    imageHover4: "https://www.banimode.com/912239-large_default/84281.jpg",
    imageHover5: "https://www.banimode.com/912241-large_default/84281.jpg",
    isExtraOff:false,
    extraOff: null,
    productBrand: "JootiJeans",
    offPrice:null,
    productName:"پافر زنانه جوتی جینز ...",
    mainPrice: "2,999,000",
    size1:"S",
    size2:"M",
    size3:"L",
  },
  {
    image: "https://www.banimode.com/980814-large_default/84433.jpg",
    offPercent:50,
    isOff:true,
    imageHover: "https://www.banimode.com/980818-large_default/84433.jpg",
    imageHover1: "https://www.banimode.com/980816-large_default/84433.jpg",
    imageHover2: "https://www.banimode.com/980812-large_default/84433.jpg",
    imageHover3: "https://www.banimode.com/980818-large_default/84433.jpg",
    imageHover4: "https://www.banimode.com/980820-large_default/84433.jpg",
    imageHover5: "https://www.banimode.com/980822-large_default/84433.jpg",
    isExtraOff:false,
    extraOff: null,
    productBrand: "PierreCardin",
    offPrice:"7,700,000",
    productName:"پالتو زنانه پیر کاردین ...",
    mainPrice: "3,850,000",
    size1:"36",
    size2:"38",
    size3:"40",
  }
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <ProductList data={baniModeData}></ProductList>
  </Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
