// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// require("custom/scrollbar")
// require("custom/appear")
// require("custom/swiper.min")
// require("custom/wow")
// require("custom/TweenMax.min")
// require("custom/jquery.fancybox.min")
// require("custom/jquery.bootstrap-touchspin")
// require("custom/jquery-ui")
// require("custom/jquery.circleType")
// require("custom/jquery.lettering.min")
// require("custom/bootstrap-select.min")
// require("custom/bootstrap.min")
// require("custom/isotope")
// require("custom/knob")
// require("custom/language")
// require("custom/lazyload")
// require("custom/map-script")
// require("custom/mixitup")
// require("custom/pagenav")
// require("custom/validate")
// require("custom/gmaps")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import 'bootstrap';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'
import { iconRadiobuttons } from '../custom/icon-radiobuttons';
window.Swal = Swal;
require("custom/script")
require("custom/form-fields")

iconRadiobuttons();
// require("custom/owl.carousel.min")
// require("custom/respond")
