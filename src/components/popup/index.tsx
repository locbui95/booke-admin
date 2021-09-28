/* eslint-disable react/require-default-props */
import React, { useState } from "react";
import Button from "components/button";

interface PopupProps {
  onClick?: any;
  name: string;
  title: string;
  className?: any;
}

export default function Popup({ name, onClick, title, className }: PopupProps) {
  const [popupOpen, setPopupOpen] = useState<boolean>(false);
  return (
    <div>
      <div>
        <Button
          loading={false}
          onClick={() => {
            setPopupOpen(true);
          }}
          className={className}
        >
          {name}
        </Button>
      </div>
      {popupOpen ? (
        <div className="flex justify-center items-center fixed bg-gray-800 bg-opacity-50 inset-0">
          <div className="flex flex-col p-5 w-80 h-52 rounded-md bg-white shadow-lg">
            <div className="flex justify-end">
              <Button
                className="border-none text-xl"
                loading={false}
                onClick={() => {
                  setPopupOpen(false);
                }}
              >
                X
              </Button>
            </div>
            <div className="inline-block text-center my-8 font-semibold">
              <h1>{title}</h1>
            </div>
            <div className="flex justify-center items-center text-white">
              <Button
                className="w-20 m-1 bg-red-600 rounded-lg p-2"
                loading={false}
                onClick={() => {
                  setPopupOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button
                loading={false}
                className="w-20 m-1 bg-blue-400 rounded-lg p-2"
                onClick={onClick}
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
