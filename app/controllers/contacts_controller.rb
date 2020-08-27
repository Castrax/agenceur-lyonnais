class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    @contact.request = request
    if @contact.deliver
      flash.now[:error] = nil
      redirect to root_path, notice: "Merci pour votre prise de contact"
    else
      flash.now[:notice] = "Impossible d'envoyer le message"
      render :new
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:status, :first_name, :last_name, :address, :zip_code, :city, :telephone, :email, :message, :nickname, :captcha)
  end
end
