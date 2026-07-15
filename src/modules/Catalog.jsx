import ProductCard from '../components/ProductCard';

const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: "Кроссовки Nike Air",
    price: 12000,
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80"
  },
  {
    id: 2,
    title: "Умные часы",
    price: 25000,
    imageUrl: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80"
  },
  {
    id: 3,
    title: "Наушники Sony",
    price: 9500,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
  },
  {
    id: 4,
    title: "Рюкзак городской",
    price: 4200,
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80"
  }
];

export default function Catalog() {
  return (
    <div className="products-grid">
      {DUMMY_PRODUCTS.map((product) => (
        <ProductCard 
          key={product.id}
          title={product.title}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
}