class GameSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :operation, :time_per_question, :number_of_questions, :number_correct, :number_incorrect, :status, :votes
end
