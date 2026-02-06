import ApartmentList from "./apartment/ApartmentList";
import ApartmentListView from "./view/ApartmentListView";
import ApartmentDetail from "./view/AparmentDetail";
import { apartments } from "./data/apartments";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [selectedApartment, setSelectedApartment] = useState(""); // string apartment id

  return (
    <div className="App">
      {!selectedApartment ? (
        <ApartmentListView
          apartments={apartments}
          setSelectedApartment={setSelectedApartment}
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
