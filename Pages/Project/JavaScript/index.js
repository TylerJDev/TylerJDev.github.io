function getCount() {
  const sC = document.querySelector('#skewcontainer');
  const parent = sC.parentElement.id;

  return parent.match(/\d/g)

}

// amount of cards to create
var metaCounts = getCount();

var rowCount = metaCounts[0];
var count = 1;

function createRows() {
  const skewCon = document.querySelector('#skewcontainer');
  for (var x = 0; x < rowCount / 3; x++) {
    skewCon.insertAdjacentHTML('beforeend', '<div class="_row"></div>');
    // Add cards within that row
    for (var y = 0; y < 3; y++) {
      // Get the latest row
      var rows = skewCon.querySelectorAll('._row')
      var latest = rows[rows.length - 1]
      var card = `<input type="checkbox" id="c${count}"><label class="card" data-toggle="modal" data-target="#isometric_modal" for="c${count}" style="background-image: url('../../Images/project_${metaCounts[1]}_isometric/${count}.png')"></label>`
      // Append cards to latest
      latest.insertAdjacentHTML('beforeend', card);
      count++;
    }
  }

  $('.card').click(function() {
    var backgroundImage = $(this).css('background-image');
    $('#iso-content').css('background-image', backgroundImage);
  })
}

createRows()

// skew toggle - all actual skewing is done with css
document.getElementById('toggleskew').addEventListener('click', function() {
  var container = document.getElementById('skewcontainer');
  container.classList.toggle('skew');
})
