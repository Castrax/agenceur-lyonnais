class AddCityToContacts < ActiveRecord::Migration[6.0]
  def change
    add_column :contacts, :city, :string
    add_column :contacts, :checkbox_info, :boolean
  end
end
