class AddVotesToGames < ActiveRecord::Migration[5.1]
  def change
    add_column :games, :votes, :integer
  end
end
