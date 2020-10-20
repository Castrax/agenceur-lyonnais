Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/contactez-nous', to: redirect('/contacts/new')
  get ":page" => "pages#show"
  root to: "pages#index"
  resources :contacts, only: [:new, :create]
end
