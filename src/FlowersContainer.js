import Flower from './Flower'

export default function flowersContainer({flowers}) {
    const renderFlowers = () => {
        return flowers.map(flower => {
            return (
                <Flower key={flower.id}/>
            )
        })
    }
    return(
        <section className="flowers-container">
            {renderFlowers()}
        </section>
    )
}