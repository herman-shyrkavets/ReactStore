import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="navbar">
            <nav style={{display: "flex", gap: "20px"}}>
                <Link to="/">Главная</Link>
                <Link to="/products">Каталог</Link>
                <Link to="/about">О нас</Link>
            </nav>
            
            <div className="cart-widget">
                Корзина <strong>0</strong>
            </div>
        </header>
    );
}