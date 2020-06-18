Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show]  
    resources :questions
  end
  
  # get '/askquestion', to: 'api/questions#new';
  root to: 'root#root'
  get '/questions/:id', to: 'api/questions#show';
end
