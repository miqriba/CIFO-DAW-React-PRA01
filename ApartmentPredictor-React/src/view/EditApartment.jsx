import { useState } from "react";

export default function EditApartment({
  apartment,
  apartments,
  setApartments,
  setEditingApartment,
}) {
  const [apartmentDraft, setApartmentDraft] = useState(apartment);

  function editApartment() {
    setApartments(
      apartments.map((a) => (a.id === apartmentDraft.id ? apartmentDraft : a)),
    );
    setEditingApartment(false);
  }

  return (
    <div>
      <div className="apartment-header" style={{ marginTop: "1rem" }}>
        Edit apartment
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editApartment();
        }}
      >
        <label>
          Title
          <input
            type="text"
            name="title"
            value={apartmentDraft.title}
            onChange={(e) =>
              setApartmentDraft({ ...apartmentDraft, title: e.target.value })
            }
          />
        </label>

        <label>
          Price
          <input
            type="number"
            name="price"
            value={apartmentDraft.price}
            onChange={(e) =>
              setApartmentDraft({ ...apartmentDraft, price: e.target.value })
            }
          />
        </label>

        <label>
          Rooms
          <input
            type="number"
            name="rooms"
            value={apartmentDraft.rooms}
            onChange={(e) =>
              setApartmentDraft({ ...apartmentDraft, rooms: e.target.value })
            }
          />
        </label>

        <label>
          Surface
          <input
            type="number"
            name="surface"
            value={apartmentDraft.surface}
            onChange={(e) =>
              setApartmentDraft({ ...apartmentDraft, surface: e.target.value })
            }
          />
        </label>

        <label style={{ marginBottom: "1rem" }}>
          Floor
          <input
            type="number"
            name="floor"
            value={apartmentDraft.floor}
            onChange={(e) =>
              setApartmentDraft({ ...apartmentDraft, floor: e.target.value })
            }
          />
        </label>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setEditingApartment(false);
            }}
          >
            Cancel
          </button>
          <button className="edit" type="submit" value="Update">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
