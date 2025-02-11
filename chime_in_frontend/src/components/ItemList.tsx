import React from "react";
import { Item } from "../types/item";

interface ItemListProps {
  items: Item[];
  onItemClick?: (item: Item) => void;
}

export const ItemList: React.FC<ItemListProps> = ({ items, onItemClick }) => {
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => onItemClick?.(item)}
          className="p-4 border rounded hover:bg-gray-50 cursor-pointer"
        >
          <h3 className="font-medium">{item.name}</h3>
          {item.description && (
            <p className="text-gray-600">{item.description}</p>
          )}
        </div>
      ))}
    </div>
  );
};
