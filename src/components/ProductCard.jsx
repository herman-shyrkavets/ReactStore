import Button from "../ui/Button";

export default function ProductCard({title, price, imageUrl }) {
    return (
        <div className="product-card">
            <img src={imageUrl} alt={title} className="product-image" />
            <h3 className="product-title">{title}</h3>
            <p className="product-price">{price}</p>

            <Button onClick={() => console.log("Добавлено в корзину: ${title}")}>
                В корзину
            </Button>
        </div>
    )
}