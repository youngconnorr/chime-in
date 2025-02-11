import { useQuery, useMutation, UseQueryResult } from "@tanstack/react-query";
import { Item } from "../types/item";
import { ApiResponse } from "../types/api";
import { apiClient } from "../api/client";

export const useItems = (): UseQueryResult<Item[], Error> => {
  return useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const { data } = await apiClient.get<ApiResponse<Item[]>>("/items");
      return data.data;
    },
  });
};

export const useCreateItem = () => {
  return useMutation({
    mutationFn: async (
      newItem: Omit<Item, "id" | "inserted_at" | "updated_at">
    ) => {
      const { data } = await apiClient.post<ApiResponse<Item>>(
        "/items",
        newItem
      );
      return data.data;
    },
  });
};
