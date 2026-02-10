export default function Form({
  type,
  apartment,
  setCreatingApartment,
  setEditingApartment,
}) {
  // const [temporalApartment, setTemporalApartment] = useState(apartment || {});

  return (
    <div>
      <div className="apartment-header">
        {type === "create" ? "Create new apartment" : "Edit apartment"}
      </div>
      <form>
        <label>
          Title
          <input
            type="text"
            name="title"
            defaultValue={apartment ? apartment.title : ""}
          />
        </label>
        <br />
        <label>
          Price
          <input
            type="number"
            name="price"
            defaultValue={apartment ? apartment.price : ""}
          />
        </label>
        <br />
        <label>
          Rooms
          <input
            type="number"
            name="rooms"
            defaultValue={apartment ? apartment.rooms : ""}
          />
        </label>
        <br />
        <label>
          Surface
          <input
            type="number"
            name="surface"
            defaultValue={apartment ? apartment.surface : ""}
          />
        </label>
        <br />
        <label>
          Floor
          <input
            type="number"
            name="floor"
            defaultValue={apartment ? apartment.floor : ""}
          />
        </label>
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            setCreatingApartment(false);
            setEditingApartment(false);
          }}
        >
          Cancel
        </button>
        <input type="submit" value={type === "create" ? "Create" : "Update"} />
      </form>
    </div>
  );
}
