import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Главная страница</h1>
            <p>Добро пожаловать в React Store</p>

            <Button onClick={() => navigate("/products")}>
                Перейти в каталог
            </Button>
        </div>
    );
}