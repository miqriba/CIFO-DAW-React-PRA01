import CreateNewApartment from "./CreateNewApartment";
import DeleteHub from "./DeleteHub";
import EditApartment from "./EditApartment";

export default function ApartmentListView({
  apartments,
  setApartments,
  setSelectedApartment,
  editorMode,
  setEditorMode,
  editingApartment,
  setEditingApartment,
  currentId,
  setCurrentId,
}) {
  return (
    <>
      <h1>Apartment Predictor</h1>
      <button
        className="editor-button"
        onClick={() => setEditorMode(!editorMode)}
      >
        Editor mode: {editorMode ? "ON" : "OFF"}
      </button>
      <ul className="apartment-list">
        {editorMode && (
          <CreateNewApartment
            apartments={apartments}
            setApartments={setApartments}
            currentId={currentId}
            setCurrentId={setCurrentId}
          />
        )}
        {apartments.map((apartment) => (
          <li
            onClick={() => {
              if (editingApartment !== apartment.id) {
                setSelectedApartment(apartment.id);
              }
            }}
            key={apartment.id}
            className={`apartment-element card ${editingApartment === apartment.id ? "non-clickable" : ""}`}
            style={{ padding: 0 }}
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
              {/* Editor Form */}
              {editingApartment === apartment.id ? (
                <EditApartment
                  apartment={apartment}
                  apartments={apartments}
                  setApartments={setApartments}
                  setEditingApartment={setEditingApartment}
                />
              ) : null}
              {/* Editor mode buttons */}
              <div>
                {editorMode && editingApartment !== apartment.id ? (
                  <button
                    className="edit"
                    onClick={(e) => {
                      e.stopPropagation();
                      setEditingApartment(apartment.id);
                    }}
                  >
                    Edit
                  </button>
                ) : null}
                {editorMode && editingApartment !== apartment.id ? (
                  <DeleteHub
                    apartments={apartments}
                    setApartments={setApartments}
                    apartment={apartment}
                  />
                ) : null}
              </div>
            </div>
            <div className="image-frame">
              <img
                className="image-preview"
                style={{ alignSelf: "start" }}
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
