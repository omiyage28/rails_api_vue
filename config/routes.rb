Rails.application.routes.draw do
  root 'home#index'
  get '/index', to: 'home#index'
  
  namespace :api do
    resources :users, only: [:index, :create, :show]
    resource :session, only: [:create, :destroy]
    resources :microposts, only: [:index, :create, :update, :destroy, :show]
    resources :tags, only: [:index]
  end

  namespace :me do
    resource :account, only: [:update]
  end
end
