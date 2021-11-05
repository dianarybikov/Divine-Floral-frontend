export default function flowersContainer({flowers}) {
    const renderFlowers = () => {
        return flowers.map(flower => {
            return (
                <div key={flower.id} className="flower-card">
                    <h2>{flower.name}</h2>
                    <p>cost: {flower.cost}</p>
                    {/* <img>img: {flower.img}</img> */}
                </div>
            )
        })
    }
    return(
        <section className="flowers-container">
            {renderFlowers()}
        </section>
    )
}