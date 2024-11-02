build:
	- docker compose build

run:
	- docker compose up

run/test:
	- docker compose run --rm app yarn test --coverage

run/dev:
	- docker compose run --rm -p 3000:3000 app yarn dev

compose:
	- docker compose up --build