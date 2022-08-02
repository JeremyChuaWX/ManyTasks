import AddTaskButton from "./add-task-button";
import FilterArrayComponent from "./filter-array-component";

function HeaderComponent() {
  return (
    <div className="flex justify-around">
      <FilterArrayComponent />
      <AddTaskButton />
    </div>
  );
}

export default HeaderComponent;
