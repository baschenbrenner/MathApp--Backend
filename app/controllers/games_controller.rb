class GamesController < ApplicationController
  def index
    @games = Game.all
    render json: @games
  end

  def create
    @game = @user.games.build(operation: "multiplication")
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
