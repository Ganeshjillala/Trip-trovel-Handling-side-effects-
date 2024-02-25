import { useEffect, useState } from "react";
import Progresstimer from "./Progresstimer";
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  //timer to select yes/no for selected place
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, 3000);

    return () => {
      console.log("clear");
      clearTimeout(timer);
    };
  }, []);
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <Progresstimer />
    </div>
  );
}
