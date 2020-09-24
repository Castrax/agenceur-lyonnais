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
  attribute :telephone_pro
  attribute :email,     :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :tax_number
  attribute :siren_number
  attribute :pack, validate: ['Pack standard', 'Pack confort', 'Pack étudiant', 'Pack sur-mesure'], allow_blank: true
  attribute :options, validate: ['Petit électroménager', 'Gros électroménager', 'Linge de maison', 'Mobilier extérieur', 'Ménage complet', 'Réalisation de photos', 'Livraison seule'], allow_blank: true
  attribute :number_properties
  attribute :adresses_properties
  attribute :project_description
  attribute :message
  attribute :nickname,  :captcha  => true
  validates :checkbox_info, presence: true, acceptance: true

  def headers
    {
      :subject => "#{demand} : #{status} - #{first_name} #{last_name}",
      :to => "contact@lagenceur-lyonnais.fr",
      :from => %("L'Agenceur Lyonnais" <m.robert@skema.edu>)
    }
  end
end
