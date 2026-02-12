import { useState } from "react";

export default function DeleteHub({ apartments, setApartments, apartment }) {
  const [confirming, setConfirming] = useState(false);
  return (
    <>
      {confirming ? (
        <>
          <button
            className="cancel"
            onClick={(e) => {
              e.stopPropagation();
              setConfirming(false);
            }}
          >
            Cancel
          </button>
          <button
            className="delete"
            onClick={(e) => {
              e.stopPropagation();
              setApartments(apartments.filter((a) => a.id !== apartment.id));
              setConfirming(false);
            }}
          >
            Confirm
          </button>
        </>
      ) : (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setConfirming(true);
          }}
          className="delete"
        >
          Delete
        </button>
      )}
    </>
  );
}
