class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    @contact.request = request
    respond_to do |format|
      if @contact.deliver
        format.html { redirect_to root_path, notice: "Merci pour votre prise de contact" }
        format.js
      else
        format.html { render :new, notice: "Impossible d'envoyer le message" }
        format.json { render json: @contact.errors, status: unprocessable_entity }
      end
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:status, :demand, :civility, :name_society, :first_name, :last_name, :address, :zip_code, :city, :telephone, :telephone_pro, :email, :message, :tax_number, :siren_number, :number_properties, :adresses_properties, :project_description, :nickname, :captcha, :checkbox_info, :checkbox_devis, :pack => [], :options => [], :typology => [])
  end
end
