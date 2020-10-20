class ContactMailer < ApplicationMailer
  default from: 'm.robert@skema.edu'

  def contact_email
    @contact = params[:contact]
    mail(to: 'm.robert@skema.edu', subject: "#{@contact.status} : #{@contact.first_name} #{@contact.last_name}")
  end
end
