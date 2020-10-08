$(document).ready(function() {
  $('input[type="radio"][name="contact[status]"]').change(function() {
      if (this.value == 'Particulier') {
          $('.form-group.contact_name_society').parent().addClass('form-group--inactive');
          $('.form-group.contact_tax_number').parent().addClass('form-group--inactive');
          $('.form-group.contact_siren_number').parent().addClass('form-group--inactive');
          $('.form-group.contact_civility').parent().removeClass('form-group--inactive');
      }
      else if (this.value == 'Professionnel') {
          $('.form-group.contact_name_society').parent().removeClass('form-group--inactive');
          $('.form-group.contact_tax_number').parent().removeClass('form-group--inactive');
          $('.form-group.contact_siren_number').parent().removeClass('form-group--inactive');
          $('.form-group.contact_civility').parent().addClass('form-group--inactive');
      }
  });
});

$(document).ready(function() {
  $('input[type="radio"][name="contact[demand]"]').change(function() {
      if (this.value == "Une demande d'information") {
          $('.devis-informations').addClass('form-group--inactive');
          $('.form-group.contact_message').removeClass('form-group--inactive');
      }
      else if (this.value == 'Une demande de devis') {
          $('.devis-informations').removeClass('form-group--inactive');
          $('.form-group.contact_message').addClass('form-group--inactive');
      }
  });
});
