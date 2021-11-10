export default function flowersContainer({flowers}) {
    const renderFlowers = () => {
        return flowers.map(flower => {
            return (
                
            )
        })
    }
    return(
        <section className="flowers-container">
            {renderFlowers()}
        </section>
    )
}