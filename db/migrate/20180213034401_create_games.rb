class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.integer :user_id
      t.string :operation
      t.integer :time_per_question
      t.integer :number_of_questions
      t.integer :number_correct
      t.integer :number_incorrect
      t.integer :number_unanswered
      t.string :status
    end
  end
end
