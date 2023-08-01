import Link from "next/link"
export default function CarouselCard({ item }) {
    return (<div className="carousel_card">
        <img src={item.image} alt="" />
        <div className="cardDescription">
            <p className="cardTitle">{item.title}</p>
            <p>Цена: {item.price} руб</p>
            <Link className="checkA" href={`/catalog/${item.id}`}>
                <div className="checkButton">
                    Посмотреть товар
                </div>
            </Link>
        </div>
    </div>)
}