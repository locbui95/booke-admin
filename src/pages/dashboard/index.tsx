import React, { useState } from "react";
import Button from "components/button";
import Popup from "components/popup";

export default function Dashboard() {
  const [isShown, setIsShown] = useState<boolean>(false);
  const toggle = () => setIsShown(!isShown);

  return (
    <div>
      <div>Dashboard</div>
      <Button loading={false} onClick={toggle}>
        Open
      </Button>
      <div>
        <Popup
          isShown={isShown}
          hide={toggle}
          message="Are you sure to delete this record?"
          onConfirm={() => console.log("hello")}
        />
      </div>
    </div>
  );
}
