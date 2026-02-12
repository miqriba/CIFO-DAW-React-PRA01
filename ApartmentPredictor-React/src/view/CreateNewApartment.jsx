import { useState } from "react";
// import Form from "./Form";

export default function CreateNewApartment({
  apartments,
  setApartments,
  currentId,
  setCurrentId,
}) {
  const [creatingApartment, setCreatingApartment] = useState(false);
  const [apartmentDraft, setApartmentDraft] = useState({
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  });

  function createApartment() {
    // TODO: verification
    // Do all fields have values? Are all values valid?
    // Does TypeScript help me verify only the mandatory values are there?
    setApartments([...apartments, { ...apartmentDraft, id: currentId }]);
    // we set currentId to +1 for next apartment
    setCurrentId(currentId + 1);
    // We reset the apartmentDraft to the default values
    setApartmentDraft({
      imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    });
    setCreatingApartment(false);
  }
  return (
    <>
      {creatingApartment ? (
        <div className="card non-clickable">
          <div>
            <div className="apartment-header">Create new apartment</div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                createApartment();
                setCurrentId(currentId + 1);
              }}
            >
              <label>
                Title
                <input
                  type="text"
                  name="title"
                  onChange={(e) =>
                    setApartmentDraft({
                      ...apartmentDraft,
                      title: e.target.value,
                    })
                  }
                />
              </label>

              <label>
                Price
                <input
                  type="number"
                  name="price"
                  onChange={(e) =>
                    setApartmentDraft({
                      ...apartmentDraft,
                      price: e.target.value,
                    })
                  }
                />
              </label>

              <label>
                Rooms
                <input
                  type="number"
                  name="rooms"
                  onChange={(e) =>
                    setApartmentDraft({
                      ...apartmentDraft,
                      rooms: e.target.value,
                    })
                  }
                />
              </label>

              <label>
                Surface
                <input
                  type="number"
                  name="surface"
                  onChange={(e) =>
                    setApartmentDraft({
                      ...apartmentDraft,
                      surface: e.target.value,
                    })
                  }
                />
              </label>

              <label style={{ marginBottom: "1rem" }}>
                Floor
                <input
                  type="number"
                  name="floor"
                  onChange={(e) =>
                    setApartmentDraft({
                      ...apartmentDraft,
                      floor: e.target.value,
                    })
                  }
                />
              </label>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setApartmentDraft({});
                    setCreatingApartment(false);
                  }}
                >
                  Cancel
                </button>
                <button type="submit" value="Create">
                  Create
                </button>
              </div>
            </form>
          </div>
          {/* <Form type="create" setCreatingApartment={setCreatingApartment} /> */}
        </div>
      ) : (
        <li className="card" onClick={() => setCreatingApartment(true)}>
          {" "}
          + Create new apartment
        </li>
      )}
    </>
  );
}
