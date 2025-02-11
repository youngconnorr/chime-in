defmodule ChimeIn.Repo.Migrations.CreateSongs do
  use Ecto.Migration

  def change do
    create table(:songs) do
      add :title, :string
      add :artist, :string
      add :genre, :string
      add :url, :string
      add :votes, :integer
      add :user_id, references(:users, on_delete: :nothing)

      timestamps(type: :utc_datetime)
    end

    create index(:songs, [:user_id])
  end
end
