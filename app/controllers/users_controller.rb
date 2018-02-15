class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    @games = @user.games
    render json: { user: @user, games: @games }
  end



end
