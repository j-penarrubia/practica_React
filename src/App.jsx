import { useState } from 'react'
import './App.css'
import TopNav from './components/TopNav';
import Banner from './components/Banner';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';


function App() {
  const productsSection1 = [
    { image: 'src/assets/imagen1.jpg', name: 'Cupcake con viruticas', price: '$4.99' },
    { image: 'src/assets/imagen2.jpg', name: 'Cupcake de nata y cereza', price: '$6.99' },
    { image: 'src/assets/imagen3.jpg', name: 'Cupcake de fresa', price: '$9.99' },
  ];

  const productsSection2 = [
    { image: 'src/assets/imagen4.jpg', name: 'Cupcake red velvet', price: '$7.99' },
    { image: 'src/assets/imagen5.jpg', name: 'Cupcake de limón', price: '$8.99' },
    { image: 'src/assets/imagen6.jpg', name: 'Cupcake de turrón', price: '$12.99' },
  ];

  return (
    <>
      <div>
        <TopNav />
        <Banner />
        <h2 className="title">Nuestros productos estrella</h2>
        {/* La primera sección usa un fondo azul, sobrescribiendo el valor por defecto */}
        <ProductSection products={productsSection1} />
        <ProductSection products={productsSection2} />
        <Footer />
      </div>
    </>
  )
}

export default App