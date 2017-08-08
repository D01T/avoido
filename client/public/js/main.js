var socket = io()

var guide

window.addEventListener('load', function () {
  guide = document.getElementById('guide')
})

socket.on('run', function (data) {
  var width = data.width
  var height = data.height

  console.log('socket.io - run: ' + width, + ', ' + height)
})

function start () {
  socket.emit('connection', {id: (new Date()).getTime()})
  guide.style.display = 'none';
}
