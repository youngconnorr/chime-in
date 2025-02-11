defmodule ChimeIn.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :username, :string
    field :email, :string
    has_many :songs, ChimeIn.Song # one-to-many relationship w songs

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:username, :email])
    |> validate_required([:username, :email])
    |> unique_constraint(:username)
    |> unique_constraint(:email)
  end
end
