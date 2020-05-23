$(document).ready(() => {
  $('h1').css({display: 'none', color: 'blue'})
})

$(window).on('load', () => {
  $('h1').css({display: 'inline', color: 'pink'})
})