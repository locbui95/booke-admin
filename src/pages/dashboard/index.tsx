import Button from "components/button";
import { useState } from "react";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const submit = () => {
    setIsLoading(true);
  };
  return (
    <div>
      <Button loading={isLoading} onClick={submit}>
        OnClick
      </Button>
    </div>
  );
}

export default Dashboard;
