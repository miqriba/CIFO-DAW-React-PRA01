import Form from "./Form";

export default function ApartmentListView({
  apartments,
  setApartments,
  setSelectedApartment,
  editorMode,
  setEditorMode,
}) {
  return (
    <>
      <h1>Apartments</h1>
      <button
        className="editor-button"
        onClick={() => setEditorMode(!editorMode)}
      >
        Editor mode: {editorMode ? "ON" : "OFF"}
      </button>
      <ul className="apartment-list">
        {editorMode && <li className="card"> + Create new apartment</li>}
        {editorMode && <Form type="create" apartment={apartments[0]} />}

        {apartments.map((apartment) => (
          <li
            onClick={() => setSelectedApartment(apartment.id)}
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "0",
              margin: "0",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
            key={apartment.id}
            className="card"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "1rem",
              }}
            >
              <div className="apartment-header">{apartment.title}</div>
              <p>
                <strong>${apartment.price}</strong> €/mes{" "}
                {apartment.garage ? "With garage" : null}
              </p>
              <p style={{ margin: "0" }}>
                {apartment.bedrooms} hab. {apartment.surface} m² Floor{" "}
                {apartment.floor} {apartment.elevator ? "with elevator" : null}
              </p>
              {/* Editor mode buttons */}
              <div>
                {editorMode ? <button className="edit">Edit</button> : null}
                {editorMode ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setApartments(
                        apartments.filter((a) => a.id !== apartment.id),
                      );
                    }}
                    className="delete"
                  >
                    Delete
                  </button>
                ) : null}
              </div>

              {/* <div className="apartment-meta"></div> */}
            </div>
            <div className="image-frame">
              <img
                className="image-preview"
                src={apartment.imageUrl}
                alt="image"
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

// Albert's REST API version

// const ApartmentListView = ({ apartments, isLoading, isAxiosError }) => {
//   if (isLoading) {
//     return (
//       <>
//         <h1>Apartments</h1>
//         <p>This is an exercise to test react render</p>
//         <p>Loading...</p>
//       </>
//     );
//   }

//   if (isAxiosError) {
//     return (
//       <>
//         <h1>Apartments</h1>
//         <p>This is an exercise to test react render</p>
//         <p>Error loading apartments. Please try again later.</p>
//       </>
//     );
//   }

//   return (
//     <>
//       <h1>Apartments</h1>
//       <p>This is an exercise to test react render</p>
//       <ul className="apartment-list">
//         {apartments.map((apartment) => (
//           <li key={apartment.id} className="apartment-item">
//             <div className="apartment-header">
//               ID: {apartment.id} | ${apartment.price}
//             </div>

//             <div className="apartment-grid">
//               <div>
//                 <strong>Area:</strong> {apartment.area} sq ft
//               </div>
//               <div>
//                 <strong>Bedrooms:</strong> {apartment.bedrooms}
//               </div>
//               <div>
//                 <strong>Bathrooms:</strong> {apartment.bathrooms}
//               </div>
//               <div>
//                 <strong>Stories:</strong> {apartment.stories}
//               </div>
//             </div>

//             <div className="apartment-features">
//               <span>Main Road: {apartment.mainroad}</span>
//               <span>Parking: {apartment.parking}</span>
//               <span>Guestroom: {apartment.guestroom}</span>
//               <span>Basement: {apartment.basement}</span>
//             </div>

//             <div className="apartment-meta">
//               Hot Water: {apartment.hotwaterheating} | AC:{" "}
//               {apartment.airconditioning} | Pref Area: {apartment.prefarea} |
//               Furnishing: {apartment.furnishingstatus}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };
