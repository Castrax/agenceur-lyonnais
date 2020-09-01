class Contact < MailForm::Base
  attribute :status, :validate => true
  attribute :demand, :validate => true
  attribute :name_society
  attribute :civility
  attribute :last_name, :validate => true
  attribute :first_name, :validate => true
  attribute :address, :validate => true
  attribute :zip_code, :validate => true
  attribute :city, :validate => true
  attribute :telephone
  attribute :email,     :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :tax_number
  attribute :siren_number
  attribute :pack
  attribute :options
  attribute :number_properties
  attribute :adresses_properties
  attribute :project_description
  attribute :message
  attribute :nickname,  :captcha  => true

  def headers
    {
      :subject => "#{demand} : #{status}",
      :to => "m.robert@skema.edu",
      :from => %("#{first_name} - #{last_name}" <#{email}>)
    }
  end
end
