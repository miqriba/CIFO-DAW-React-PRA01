export default function ApartmentDetail({ apartment, setSelectedApartment }) {
  return (
    <div>
      <button
        style={{
          marginBottom: "5px",
          padding: "5px 10px",
          cursor: "pointer",
        }}
        onClick={() => setSelectedApartment("")}
      >
        Back to list
      </button>
      <img
        style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
        className="image-detail"
        src={apartment.imageUrl}
        alt={apartment.title}
      />
      <div className="apartment-detail">
        <h2 style={{ marginBottom: 0 }}>{apartment.title}</h2>
        <p style={{ marginTop: 0, fontSize: "15px" }}>{apartment.location}</p>
        <p>
          <strong>{apartment.price}</strong> €/mes
        </p>
        <p>
          {apartment.surface} m²{" "}
          {apartment.elevator ? "| Elevator" : "| No elevator"}
        </p>
        <p>{apartment.description}</p>
        <h3>Basic features</h3>
        <ul>
          <li>Bedrooms: {apartment.bedrooms}</li>
          <li>Bathrooms: {apartment.bathrooms}</li>
          <li>Floor: {apartment.floor}</li>
          {apartment.elevator ? <li>Elevator</li> : <li>No elevator</li>}
          {apartment.AC ? <li>Air Conditioning</li> : null}
          {apartment.furnished ? <li>Furnished</li> : null}
          {apartment.balcony ? <li>With balcony</li> : null}
          {apartment.terrace ? <li>With terrace</li> : null}
          {apartment.garage ? <li>With garage</li> : null}
        </ul>
      </div>
    </div>
  );
}
