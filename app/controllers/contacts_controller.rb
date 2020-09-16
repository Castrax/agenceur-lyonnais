class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    @contact.request = request
    if @contact.deliver
      flash.now[:error] = nil
      redirect_to root_path, notice: "Merci pour votre prise de contact"
    else
      flash.now[:notice] = "Impossible d'envoyer le message"
      render :new
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:status, :demand, :civility, :name_society, :first_name, :last_name, :address, :zip_code, :city, :telephone, :telephone_pro, :email, :message, :tax_number, :siren_number, :pack, :options, :number_properties, :adresses_properties, :project_description, :nickname, :captcha, :checkbox_info, :checkbox_devis)
  end
end
