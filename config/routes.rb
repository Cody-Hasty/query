Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :questions, only: [:index, :create, :show, :update, :destroy]    
    resources :users, only: [:create, :show, :update, :destroy]  


    # post '/search', to: 'users#search'
    # resources :likes, only: [:create]
    # delete '/likes', to: 'likes#destroy'
  end
  root to: 'root#root'
end
