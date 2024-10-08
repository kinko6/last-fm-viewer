var user = 'cefas1931';
var key = 'e97ca135be347c4a86d57a2fe313f59e';

const apiUrl = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=' + user + '&api_key=' + key + '&format=json';

// requisicao
fetch(apiUrl)
  .then(response => {
    // if da requisicao
    if (!response.ok) {
      throw new Error('Erro ao acessar a API: ' + response.status);
    }
    // retornar em json
    return response.json();
  })
  .then(data => {
    if(data.recenttracks.track[0]['@attr'].nowplaying = true){
    // mexer nos dado da api
    console.log('Dados da API:', data.recenttracks.track[0].artist['#text']);
    const objj = Object.assign(document.createElement("div"), {
      className: "listening",
      innerHTML: `
  <a class="cover" href=""><img  src="${data.recenttracks.track[0].image[3]['#text']}"></a>
  <a style="padding-top: 62px;" href=${data.recenttracks.track[0].url}><h3 id="div0">Track: ${data.recenttracks.track[0].name}</h3></a>
  <a style="padding-top: 62px;" href=${data.recenttracks.track[0].url}><h3 id="div0">Artist: ${data.recenttracks.track[0].artist['#text']}</h3></a>
  <a style="padding-top: 62px;" href=#><h3 id="div0">Album: ${data.recenttracks.track[0].album['#text']}</h3></a>
  
    `
    });
    var place = document.getElementById("here");
    place.appendChild(objj)
  }
  })
  .catch(error => {
    // erro
    console.error('Erro ao acessar a API:', error);
  });