defmodule ChimeIn.Song do
  use Ecto.Schema
  import Ecto.Changeset

  schema "songs" do
    field :title, :string
    field :url, :string
    field :artist, :string
    field :genre, :string
    field :votes, :integer
    belongs_to :user, ChimeIn.User, foreign_key: :user_id


    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(song, attrs) do
    song
    |> cast(attrs, [:title, :artist, :genre, :url, :votes, :user_id])
    |> validate_required([:title, :artist, :genre, :url, :votes, :user_id])
  end
end
