export default function Flower({flower}) {
 return (_
    <div className="flower-card">
        <h2>{flower.name}</h2>
        <p>cost: {flower.cost}</p>
        
    </div>
    )
}