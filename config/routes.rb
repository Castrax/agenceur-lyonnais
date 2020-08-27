Rails.application.routes.draw do
  get 'contact/new'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get ":page" => "pages#show"
  root to: "pages#index"
  resources :contacts, only: [:new, :create]
end
