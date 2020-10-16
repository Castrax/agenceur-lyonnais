if(/Android|iPhone|iPod|BlackBerry|Opera Mini/i.test(navigator.userAgent)) {
 $(function () {
   $('[data-toggle="popover"]').popover({trigger: 'focus'});
 })

 $('.popover-dismiss').popover({
   trigger: 'focus'
 })
} else {
  $(function () {
    $('[data-toggle="popover"]').popover({trigger: 'hover'});
  })

  $('.popover-dismiss').popover({
    trigger: 'focus'
  })
}

