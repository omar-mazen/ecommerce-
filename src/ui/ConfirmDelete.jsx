import React from "react";
import Button from "./Button";

export default function ConfirmDelete({
  resourceName,
  onCloseModal,
  onConfirm,
}) {
  return (
    <div className="space-y-10 mt-5">
      <p className="min-w-[200px] text-small">
        Are you sure you want to delete {resourceName} permanently? This action
        cannot be undone.
      </p>
      <div className="flex justify-end gap-4">
        <Button
          type={"button"}
          onClick={() => {
            onConfirm();
            onCloseModal();
          }}
        >
          Delete
        </Button>
        <Button style="outline" onClick={onCloseModal}>
          cancel
        </Button>
      </div>
    </div>
  );
}
