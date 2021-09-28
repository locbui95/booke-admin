import React from "react";
import Button from "components/button";

interface PopupProps {
  isShown: boolean;
  message: string;
  hide: () => void;
  onConfirm: () => void;
}

export default function Popup({
  isShown,
  message,
  hide,
  onConfirm
}: PopupProps) {
  return (
    <div>
      {isShown ? (
        <div className="flex justify-center items-center fixed bg-gray-800 bg-opacity-50 inset-0">
          <div className="flex flex-col p-5 w-80 h-52 rounded-md bg-white shadow-lg">
            <div className="flex justify-end">
              <Button
                className="border-none text-xl"
                loading={false}
                onClick={hide}
              >
                X
              </Button>
            </div>
            <div className="inline-block text-center my-8 font-semibold">
              <h1>{message}</h1>
            </div>
            <div className="flex justify-center items-center text-white">
              <Button
                className="w-20 m-1 bg-red-600 rounded-lg p-2"
                loading={false}
                onClick={hide}
              >
                Cancel
              </Button>
              <Button
                loading={false}
                className="w-20 m-1 bg-blue-400 rounded-lg p-2"
                onClick={onConfirm}
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
