class Contact < MailForm::Base
  attribute :status, :validate => true
  attribute :last_name, :validate => true
  attribute :first_name, :validate => true
  attribute :address, :validate => true
  attribute :zip_code, :validate => true
  attribute :city, :validate => true
  attribute :telephone
  attribute :email,     :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message,   :validate => true
  attribute :nickname,  :captcha  => true

  def headers
    {
      :subject => "Contact Form",
      :to => "m.robert@skema.edu",
      :from => %("#{first_name}" <#{email}>)
    }
  end
end
