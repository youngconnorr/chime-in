defmodule ChimeInWeb.Resolvers.UserResolver do
  alias ChimeIn.{Repo, User}

  def list_users(_parent, _args, _resolution) do
    users = Repo.all(User) |> Repo.preload(:songs)
    {:ok, users}
  end
end
