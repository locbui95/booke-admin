import Popup from "components/popup";

export default function Dashboard() {
  return (
    <div>
      <div>Dashboard</div>
      <div>
        <Popup
          name="Open"
          title="Are you sure to delete this record?"
          className="p-2"
        />
      </div>
    </div>
  );
}
