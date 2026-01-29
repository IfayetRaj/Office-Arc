import React from 'react'
import Banner from './components/Banner'
import Products from './components/Products'
import ProductsWrapper from './components/ProductsWrapper';

const page = () => {
  // initial data
  const products = [
    {
      id: 1,
      name: "ErgoFlex Office Chair",
      category: "Chairs",
      price: 249,
      image: "/ergonomicDesign.jpg",
    },
    {
      id: 2,
      name: "Aero Work Desk",
      category: "Desks",
      price: 499,
      image: "/ergonomicDesign.jpg",
    },
    {
      id: 3,
      name: "Modular Storage Cabinet",
      category: "Storage",
      price: 389,
      image: "/ergonomicDesign.jpg",
    },
    {
      id: 4,
      name: "Conference Table Pro",
      category: "Conference",
      price: 899,
      image: "/ergonomicDesign.jpg",
    },
    {
      id: 5,
      name: "Executive Chair Plus",
      category: "Chairs",
      price: 699,
      image: "/ergonomicDesign.jpg",
    },
    {
      id: 6,
      name: "Minimal Workstation",
      category: "Workstations",
      price: 999,
      image: "/ergonomicDesign.jpg",
    },
  ];

  return (
    <div>
      {/* banner section */}
      <Banner></Banner>
      {/* products */}
      <ProductsWrapper initialProducts={products}></ProductsWrapper>
    </div>
  )
}

export default page