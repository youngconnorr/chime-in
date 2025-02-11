# defmodule ChimeInWeb.Schemas.Types do
#   use Absinthe.Schema.Notation
#   use Absinthe.Ecto, repo: ChimeIn.Repo

#   object :user do
#     field :id, :id
#     field :name, :string
#     field :email, :string
#     field :songs, list_of(:song), resolve: assoc(:posts)
#   end

# end
