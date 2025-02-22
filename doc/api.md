# Api

## Restituisce la lista di film in programma oggi (utilizzata nel hero)

GET /api/movies/today

Ritorna una lista di oggetti `Movie`

## Restituisce la lista di film in programma in un determinato range

GET /api/movies/{from}/{to}

Ritorna una lista di oggetti `Movie`

## Restituisce la lista di tutti i film

GET /api/movies

Ritorna una lista di oggetti `Movie`

## Aggiunge un nuovo film

POST /api/movies

Richiede un oggetto `Movie` nel corpo della richiesta

Ritorna l'oggetto `Movie` appena creato

## Restituisce la lista di tutti i tag

GET /api/tags

Ritorna una lista di oggetti `Tag`

## Aggiunge un nuovo tag

POST /api/tags

Richiede un oggetto `Tag` nel corpo della richiesta

Ritorna l'oggetto `Tag` appena creato

## Restituisce la lista di tutti gli orari

GET /api/schedule

Ritorna una lista di oggetti `Schedule`

## Aggiunge un nuovo orario

POST /api/schedule

Richiede un oggetto `Schedule` nel corpo della richiesta

Ritorna l'oggetto `Schedule` appena creato