Rails.application.routes.draw do
  scope '/api' do
    resources :users, only: [:index, :show, :create] do
      resources :games, only: [:index, :show, :create, :destroy]
    end
    resources :sessions, only: [:new, :create, :destroy]
  end
end
