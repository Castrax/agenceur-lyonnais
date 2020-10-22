// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import 'bootstrap';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
window.Swal = Swal;
import { iconRadiobuttons } from '../custom/icon-radiobuttons';
require("custom/script");
require("custom/form-fields");
require("custom/popover");
iconRadiobuttons();
import Cookies from 'js.cookie';
window.Cookies = Cookies;
import './gems.js.erb';

import "controllers"
