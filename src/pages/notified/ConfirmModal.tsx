import { FC } from "react";

interface ConfirmModalProps {
  isOpen: boolean;
  title?: string;
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal: FC<ConfirmModalProps> = ({
  isOpen,
  title = "Confirm Action",
  message = "Are you sure?",
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-80 rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-lg font-semibold">{title}</h2>
        <p className="mb-6 text-sm">{message}</p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="rounded border border-gray-300 px-4 py-2 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;