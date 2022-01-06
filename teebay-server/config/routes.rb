require 'sidekiq/web'
require 'sidekiq/cron/web'

Rails.application.routes.draw do
  use_doorkeeper
  resources :users
  resources :products
  resources :conversations
  resources :messages
  get '/myproducts', to: 'products#my_products'
  get '/productconversations/:id', to: 'conversations#product_conversations'
  get '/currentuser', to: 'users#get_current_user'
  mount Sidekiq::Web => '/sidekiq'
  mount ActionCable.server => '/cable'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
