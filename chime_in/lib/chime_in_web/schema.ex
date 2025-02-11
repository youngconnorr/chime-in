defmodule ChimeInWeb.Schema do
  use Absinthe.Schema

  alias ChimeInWeb.Resolvers

  import_types Absinthe.Type.Custom

  # Query root
  query do
    field :songs, list_of(:song) do
      resolve(&ChimeInWeb.Resolvers.SongResolver.list_songs/3)
    end
  end


    # Mutation root
  mutation do
    field :create_song, :song do
      arg :title, non_null(:string)
      arg :artist, non_null(:string)
      arg :genre, non_null(:string)
      arg :url, non_null(:string)
      arg :user_id, non_null(:id)

      resolve(&ChimeInWeb.Resolvers.SongResolver.create_song/3)
    end
  end

  object :song do
    field :id, :id
    field :title, :string
    field :artist, :string
    field :genre, :string
    field :url, :string
    field :votes, :integer
    field :user, :user
  end

  object :user do
    field :id, :id
    field :username, :string
    field :email, :string
    field :songs, list_of(:song)
  end


end
