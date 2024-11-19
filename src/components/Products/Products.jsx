import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './Products.module.css'
function App() {
  const [products, setProducts] = useState([]); // Məhsulları saxlamaq üçün state
  const [loading, setLoading] = useState(true); // Yüklənmə vəziyyətini idarə etmək üçün state

  // API-dən məlumatları çəkmək üçün useEffect
  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((response) => {
        setProducts(response.data.products); // Məlumatları state-ə yazırıq
        setLoading(false); // Yüklənmə bitdi
      })
      .catch((error) => {
        console.error('Məlumat yüklənərkən səhv baş verdi:', error);
        setLoading(false); // Yüklənmə bitdi
      });
  }, []);

  // Əgər məlumatlar yüklənirsə, yüklənmə ekranını göstər
  if (loading) {
    return <h2>Məlumatlar yüklənir...</h2>;
  }

  return (
    <div className={style.container}>
      <h1>Products List</h1>
      <div className={style.grid}>
        {products.map((product) => (
          <div className={style.card} key={product.id}>
            <img src={product.thumbnail} alt={product.title} className={style.img} />
            <div className={style.content}>
              <h2>{product.title}</h2>
              <p>Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;