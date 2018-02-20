Rails.application.routes.draw do
  scope '/api' do
    resources :users, only: [:index, :show, :create] do
      resources :games, only: [:index, :show, :create, :destroy]
    end
  end

  post 'api/users/:user_id/games/:game_id/vote_up', to: 'games#vote_up'

  post 'authenticate', to: 'authentication#authenticate'
end
