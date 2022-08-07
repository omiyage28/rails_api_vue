Rails.application.routes.draw do
  root 'home#index'
  get '/index', to: 'home#index'
  
  namespace :api do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :erps, only: [:create]
  end
end
