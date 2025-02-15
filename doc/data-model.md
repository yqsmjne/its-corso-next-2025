# Data model

Movie:

- id
- title
- genre
- restriction
- language
- director
- cast
- description
- year
- image_url
- duration
- trailer_url
- rating
- tags_ids #many to many

Schedule:

- id
- id_movie
- id_room
- date
- time
- tags_ids #many to many

Room

- id
- name
- available_seats

Tag

- id
- name
