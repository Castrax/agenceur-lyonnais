class ContactMailer < ApplicationMailer
  default from: 'contact@lagenceur-lyonnais.fr'

  def contact_email
    @contact = params[:contact]
    mail(to: 'contact@lagenceur-lyonnais.fr, m.robert@skema.edu', subject: "#{@contact.status} : #{@contact.first_name} #{@contact.last_name}")
  end
end
