defmodule ChimeIn.Repo do
  use Ecto.Repo,
    otp_app: :chime_in,
    adapter: Ecto.Adapters.SQLite3
end
