import Link from "next/link"
import { motion } from 'framer-motion'
export default function CatalogCard({ item }) {
    const CardAnim = {
        hidden: {
            x: -100,
            opacity: 0
        },
        show: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8 }
        }
    }
    return (<motion.div variants={CardAnim} viewport={{ once: true }} initial='hidden' whileInView="show" className="product_card">
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
    </motion.div>)
}