import { useState } from "react";
import Form from "./Form";

const ApartmentListView = ({
  apartments,
  setSelectedApartment,
  editorMode,
  setEditorMode,
}) => {
  return (
    <>
      <h1>Apartments</h1>
      <button onClick={() => setEditorMode(!editorMode)}>
        Editor mode: {editorMode ? "ON" : "OFF"}
      </button>
      <ul className="apartment-list">
        {editorMode && <li className="apartment-item"> + Add new apartment</li>}
        {editorMode && <Form type="create" apartment={apartments[0]} />}

        {apartments.map((apartment) => (
          <li
            onClick={() => setSelectedApartment(apartment.id)}
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "0",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
            key={apartment.id}
            className="apartment-item"
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="apartment-header">{apartment.title}</div>
              <p>
                <strong>${apartment.price}</strong> €/mes{" "}
                {apartment.garage ? "With garage" : null}
              </p>
              <p>
                {apartment.bedrooms} hab. {apartment.surface} m² Floor{" "}
                {apartment.floor} {apartment.elevator ? "with elevator" : null}
              </p>
              <div>
                {editorMode ? <button className="edit">Edit</button> : null}
                {editorMode ? <button className="delete">Delete</button> : null}
              </div>

              {/* <div className="apartment-meta"></div> */}
            </div>

            <img
              className="image-preview"
              style={{ width: "150px", height: "100%", objectFit: "cover" }}
              src={apartment.imageUrl}
              alt="image"
            />
          </li>
        ))}
      </ul>
    </>
  );
};

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

export default ApartmentListView;
