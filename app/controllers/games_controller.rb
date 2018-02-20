class GamesController < ApplicationController
  def index
    @games = User.find(params[:user_id]).games
    render json: @games
  end

  def create
    @user = User.find(params[:user_id])
    @game = @user.games.build(operation: params[:operation],
      time_per_question: params[:timePerQuestion],
      number_of_questions: params[:numberOfQuestions],
      number_correct: params[:numberCorrect],
      number_incorrect: params[:numberIncorrect],
      status: "saved",
      votes: 0 )
    @game.save
    render json: @game
  end

  def vote_up
    @user = User.find(params[:user_id])
    @game = Game.find(params[:game_id])
    @game.votes += 1
    @game.save
    render json: @game
  end



end
