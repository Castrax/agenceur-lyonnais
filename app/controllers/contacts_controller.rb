class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      ContactMailer.with(contact: @contact).contact_email.deliver_now
      render @contact
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:status, :demand, :civility, :name_society, :first_name, :last_name, :address, :zip_code, :city, :tel, :email, :message, :tax_number, :siren_number, :checkbox_info)
  end
end
