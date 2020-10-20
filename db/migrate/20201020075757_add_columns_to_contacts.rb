class AddColumnsToContacts < ActiveRecord::Migration[6.0]
  def change
    add_column :contacts, :status, :string
    add_column :contacts, :demand, :string
    add_column :contacts, :civility, :string
    add_column :contacts, :name_society, :string
    add_column :contacts, :last_name, :string
    add_column :contacts, :first_name, :string
    add_column :contacts, :address, :string
    add_column :contacts, :zip_code, :string
    add_column :contacts, :tel, :string
    add_column :contacts, :email, :string
    add_column :contacts, :tax_number, :string
    add_column :contacts, :siren_number, :string
    add_column :contacts, :message, :text
  end
end
