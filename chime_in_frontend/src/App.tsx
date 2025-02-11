import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useItems } from "./hooks/useItems";
import { ItemList } from "./components/ItemList";
import { CreateItemForm } from "./components/CreateItemForm";
import { Item } from "./types/item";

const queryClient = new QueryClient();

const ItemsPage: React.FC = () => {
  const { data: items, isLoading, isError, refetch } = useItems();

  const handleItemClick = (item: Item) => {
    console.log("Clicked item:", item);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading items</div>;

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold">Items</h1>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Create New Item</h2>
        <CreateItemForm onSuccess={() => refetch()} />
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Item List</h2>
        <ItemList items={items || []} onItemClick={handleItemClick} />
      </div>
    </div>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ItemsPage />
    </QueryClientProvider>
  );
}

export default App;
