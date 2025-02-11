import React from "react";
import { useCreateItem } from "../hooks/useItems";

interface CreateItemFormProps {
  onSuccess?: () => void;
}

export const CreateItemForm: React.FC<CreateItemFormProps> = ({
  onSuccess,
}) => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const createItem = useCreateItem();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createItem.mutateAsync({ name, description });
      setName("");
      setDescription("");
      onSuccess?.();
    } catch (error) {
      console.error("Error creating item:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded border-gray-300 shadow-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full rounded border-gray-300 shadow-sm"
        />
      </div>
      <button
        type="submit"
        disabled={createItem.isPending}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-blue-300"
      >
        {createItem.isPending ? "Creating..." : "Create Item"}
      </button>
    </form>
  );
};
