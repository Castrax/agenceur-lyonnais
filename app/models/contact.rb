class Contact < ApplicationRecord
  validates :status, presence: true
  validates :demand, presence: true
  validates :last_name, presence: true
  validates :first_name, presence: true
  validates :address, presence: true
  validates :zip_code, presence: true
  validates :city, presence: true
  validates :tel, presence: true
  validates :email, presence: true, format: { with: /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i }
  validates :checkbox_info, acceptance: true
end
