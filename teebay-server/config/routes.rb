require 'sidekiq/web'
require 'sidekiq/cron/web'

Rails.application.routes.draw do
  use_doorkeeper
  resources :users
  resources :products
  get '/myproducts', to: 'products#my_products'
  get '/currentuser', to: 'users#current_user'
  mount Sidekiq::Web => '/sidekiq'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
