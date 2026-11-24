$json = @'
[
{"nome":"Abbey Road","artista":"The Beatles","descritivo":"Álbum lançado em 1969. Gênero: Rock. Formato: LP de vinil.","valor":179.9,"valorPromo":0,"quantidade":12,"destaque":1},
{"nome":"Nevermind","artista":"Nirvana","descritivo":"Álbum lançado em 1991. Gênero: Grunge. Formato: LP de vinil.","valor":169.9,"valorPromo":139.9,"quantidade":20,"destaque":1},
{"nome":"Thriller","artista":"Michael Jackson","descritivo":"Álbum lançado em 1982. Gênero: Pop. Formato: LP de vinil.","valor":159.9,"valorPromo":0,"quantidade":18,"destaque":1},
{"nome":"Back in Black","artista":"AC/DC","descritivo":"Álbum lançado em 1980. Gênero: Hard rock. Formato: LP de vinil.","valor":149.9,"valorPromo":129.9,"quantidade":14,"destaque":0},
{"nome":"Rumours","artista":"Fleetwood Mac","descritivo":"Álbum lançado em 1977. Gênero: Rock. Formato: LP de vinil.","valor":159.9,"valorPromo":0,"quantidade":10,"destaque":0},
{"nome":"Led Zeppelin IV","artista":"Led Zeppelin","descritivo":"Álbum lançado em 1971. Gênero: Hard rock. Formato: LP de vinil.","valor":179.9,"valorPromo":149.9,"quantidade":9,"destaque":1},
{"nome":"Kind of Blue","artista":"Miles Davis","descritivo":"Álbum lançado em 1959. Gênero: Jazz. Formato: LP de vinil.","valor":199.9,"valorPromo":0,"quantidade":8,"destaque":0},
{"nome":"Hotel California","artista":"Eagles","descritivo":"Álbum lançado em 1976. Gênero: Rock. Formato: LP de vinil.","valor":149.9,"valorPromo":0,"quantidade":16,"destaque":0},
{"nome":"Purple Rain","artista":"Prince and the Revolution","descritivo":"Álbum lançado em 1984. Gênero: Pop rock. Formato: LP de vinil.","valor":169.9,"valorPromo":139.9,"quantidade":11,"destaque":0},
{"nome":"The Wall","artista":"Pink Floyd","descritivo":"Álbum lançado em 1979. Gênero: Rock progressivo. Formato: LP de vinil.","valor":219.9,"valorPromo":189.9,"quantidade":6,"destaque":1},
{"nome":"Born to Run","artista":"Bruce Springsteen","descritivo":"Álbum lançado em 1975. Gênero: Rock. Formato: LP de vinil.","valor":139.9,"valorPromo":0,"quantidade":13,"destaque":0},
{"nome":"Exodus","artista":"Bob Marley & The Wailers","descritivo":"Álbum lançado em 1977. Gênero: Reggae. Formato: LP de vinil.","valor":149.9,"valorPromo":124.9,"quantidade":17,"destaque":0},
{"nome":"The Rise and Fall of Ziggy Stardust and the Spiders from Mars","artista":"David Bowie","descritivo":"Álbum lançado em 1972. Gênero: Glam rock. Formato: LP de vinil.","valor":169.9,"valorPromo":0,"quantidade":7,"destaque":0},
{"nome":"Sgt. Pepper's Lonely Hearts Club Band","artista":"The Beatles","descritivo":"Álbum lançado em 1967. Gênero: Rock psicodélico. Formato: LP de vinil.","valor":189.9,"valorPromo":159.9,"quantidade":10,"destaque":1},
{"nome":"Clube da Esquina","artista":"Milton Nascimento e Lô Borges","descritivo":"Álbum lançado em 1972. Gênero: MPB. Formato: LP de vinil.","valor":179.9,"valorPromo":0,"quantidade":9,"destaque":1},
{"nome":"Elis & Tom","artista":"Elis Regina e Tom Jobim","descritivo":"Álbum lançado em 1974. Gênero: MPB / Bossa nova. Formato: LP de vinil.","valor":169.9,"valorPromo":139.9,"quantidade":8,"destaque":0},
{"nome":"Construção","artista":"Chico Buarque","descritivo":"Álbum lançado em 1971. Gênero: MPB. Formato: LP de vinil.","valor":139.9,"valorPromo":0,"quantidade":14,"destaque":0},
{"nome":"Acabou Chorare","artista":"Novos Baianos","descritivo":"Álbum lançado em 1972. Gênero: MPB / Rock. Formato: LP de vinil.","valor":149.9,"valorPromo":124.9,"quantidade":12,"destaque":0},
{"nome":"Tropicália ou Panis et Circencis","artista":"Vários artistas","descritivo":"Álbum lançado em 1968. Gênero: Tropicália. Formato: LP de vinil.","valor":159.9,"valorPromo":0,"quantidade":5,"destaque":0}
]
'@
foreach ($p in ($json | ConvertFrom-Json)) {
  $body = [System.Text.Encoding]::UTF8.GetBytes(($p | ConvertTo-Json))
  Invoke-RestMethod -Uri "http://localhost:8081/api/produto" -Method Post -ContentType "application/json; charset=utf-8" -Body $body
}