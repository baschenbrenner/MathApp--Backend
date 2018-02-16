class GamesController < ApplicationController
  def index
    @games = Game.all
    render json: @games
  end

  def create
    @user = User.find(params[:user_id])
    @game = @user.games.build(operation: params[:operation],
      time_per_question: params[:timePerQuestion],
      number_of_questions: params[:numberOfQuestions],
      number_correct: params[:numberCorrect],
      number_incorrect: params[:numberIncorrect],
      status: "saved")
    @game.save
    render json: @game
  end

 private


  def user
     @user ||= User.find(decoded_auth_token[:user_id]) if decoded_auth_token
     @user || errors.add(:token, 'Invalid token') && nil
  end

  def decoded_auth_token
     @decoded_auth_token ||= JsonWebToken::decode(headers['Authorization'].split(' ').last)
  end



end
