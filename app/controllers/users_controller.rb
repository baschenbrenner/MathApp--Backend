class UsersController < ApplicationController
  skip_before_action :authenticate_request, only: [:create]

  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    @games = @user.games
    render json: { user: @user, games: @games }
  end

  def create
    @user = User.create(user_params)
    render json: @user
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation, :first_name, :last_name)
  end


end
