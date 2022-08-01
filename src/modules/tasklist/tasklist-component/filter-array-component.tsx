function FilterComponent({ title }: { title: string }) {
  return (
    <button className="bg-slate-400 text-white w-max px-4 py-1 rounded-full">
      {title}
    </button>
  );
}

function FilterArrayComponent() {
  return (
    <div className="flex gap-4">
      <FilterComponent title="Done" />
      <FilterComponent title="Today" />
      <FilterComponent title="Other" />
    </div>
  );
}

export default FilterArrayComponent;
