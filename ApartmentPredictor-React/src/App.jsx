import ApartmentList from "./apartment/ApartmentList";
import ApartmentListView from "./view/ApartmentListView";
import ApartmentDetail from "./view/AparmentDetail";
import { apartmentsData } from "./data/apartmentsData";
import "./App.css";
import { useState } from "react";

export default function App() {
  // apartments will update with the user edits deletes and creates
  // apartmentData is our initial data that will not change
  const [apartments, setApartments] = useState(apartmentsData);
  const [selectedApartment, setSelectedApartment] = useState(""); // string apartment id
  const [editorMode, setEditorMode] = useState(false);

  return (
    <div className="App">
      {!selectedApartment ? (
        <ApartmentListView
          apartments={apartments}
          setApartments={setApartments}
          setSelectedApartment={setSelectedApartment}
          editorMode={editorMode}
          setEditorMode={setEditorMode}
        />
      ) : null}
      {selectedApartment ? (
        <ApartmentDetail
          apartment={apartments.find((a) => a.id === selectedApartment)}
          setSelectedApartment={setSelectedApartment}
        />
      ) : null}
      {/* <ApartmentList /> */}
    </div>
  );
}
