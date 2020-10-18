Rails.application.routes.draw do
  get '/contactez-nous', to: redirect('/contacts/new')
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get ":page" => "pages#show"
  root to: "pages#index"
  resources :contacts, only: [:new, :create]
end
