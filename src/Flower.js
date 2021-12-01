export default function Flower({ flower }) {
return (
    <div className="flower-card">
        <h2>{flower.name}</h2>
        <p>cost: {flower.cost}</p> 
        <img src={flower.image} alt={flower.image}/>
    </div>
    )
}