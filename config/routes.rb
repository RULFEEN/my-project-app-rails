Rails.application.routes.draw do
  resources :comments, only: [:update, :destroy]
  resources :projects
  resources :users

  post "/signin", to: "sessions#create"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
end
