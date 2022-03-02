import React from "react";

const ItemsSelection = ({ items, onSelect }) => (
  <section className="flex flex-row flex-wrap text-sm gap-2">
    {items.map((item, index) => (
      <Item
        key={item.id}
        name={`item.${index}`}
        value={item.name}
        label={item.name}
        defaultChecked={item.isSelected}
        onChange={() => onSelect(item.id)}
      />
    ))}
  </section>
);

export default ItemsSelection;

const Item = ({ id, name, value, label, defaultChecked, onChange }) => (
  <label htmlFor={id}>
    <input
      type="checkbox"
      id={id}
      name={name}
      value={value}
      defaultChecked={defaultChecked}
      className="invisible absolute"
      onChange={onChange}
    />
    <div
      className={`flex py-1 px-3 rounded-full
        cursor-pointer transition duration-100
        ${
          defaultChecked
            ? "bg-blue-400 text-white hover:bg-blue-300"
            : "bg-slate-200 text-slate-500 hover:bg-slate-300"
        }`}
    >
      {label}
    </div>
  </label>
);
