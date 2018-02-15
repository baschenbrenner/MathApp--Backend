Rails.application.routes.draw do
  resources :items
  scope '/api' do
    resources :users, only: [:index, :show, :create] do
      resources :games, only: [:index, :show, :create, :destroy]
    end
  end

  post 'authenticate', to: 'authentication#authenticate'
end
