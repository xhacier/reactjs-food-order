import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart'

function App() {
  const [cartIsshown, setCartIsshown] = useState(false);

  function showCartHandler(){
    setCartIsshown(true);
  }

  function hideCartHandler(){
    setCartIsshown(false);
  }

  return (
    <CartProvider>
      {cartIsshown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
