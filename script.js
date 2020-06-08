$(document).ready(() => {
  $('h1').css({display: 'none', color: 'blue'})
})

function otherFunction() {
  return new Promise(banana => {
    setTimeout(() => {
      banana(10 * 10)
    }, 5000)
  });
}

$(window).on('load', () => {
  $('h1').css({display: 'inline', color: 'pink'})

  async function functionName () {
    let something = await otherFunction()
    let x = something * 10

    console.log(something, x)
  }

  functionName()
})