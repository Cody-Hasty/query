Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users do
      # posts to be added later
    end

    resource :session, only: [:create, :destroy]

    # post '/search', to: 'users#search'
    # resources :likes, only: [:create]
    # delete '/likes', to: 'likes#destroy'
  end
  root to: 'root#root'
end
