defmodule ChimeInWeb.Resolvers.SongResolver do
  alias ChimeIn.{Repo, Song}

  def list_songs(_parent, _args, _resolution) do
    songs = Repo.all(Song) |> Repo.preload(:user)
    {:ok, songs}
  end

  # This is the mutation resolver for creating a song
  def create_song(_parent, args, _resolution) do
    # Create the changeset using the Song schema
    changeset = Song.changeset(%Song{}, args)

    # Insert the song into the database
    case Repo.insert(changeset) do
      {:ok, song} ->
        # On success, return the song as an OK result
        {:ok, song}
      {:error, _changeset} ->
        # On error, return a list of error messages
        {:error, "Failed to create song"}
    end
  end
end
