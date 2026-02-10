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
  const [editingApartment, setEditingApartment] = useState(""); // string apartment id
  // currentId is the id that will be assigned to the next created apartment, it starts in 10 because our initial data has apartments with ids from 1 to 9
  const [currentId, setCurrentId] = useState(10);

  return (
    <div className="App">
      {!selectedApartment ? (
        <ApartmentListView
          apartments={apartments}
          setApartments={setApartments}
          setSelectedApartment={setSelectedApartment}
          editorMode={editorMode}
          setEditorMode={setEditorMode}
          editingApartment={editingApartment}
          setEditingApartment={setEditingApartment}
          currentId={currentId}
          setCurrentId={setCurrentId}
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
