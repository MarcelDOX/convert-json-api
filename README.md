# desafio-json
Uma API simples para remover as propriedades com valores "" e "#" de um JSON;

## Configurar o ambiente
```bash
yarn
yarn build
yarn start
```

## Configurar o ambiente com Docker:
Para criar a imagem:
```bash
make build
```

Para rodar a API:
```bash
make run
```

Para rodar os testes:
```bash
make run/test
```

## Desenvolvimento
```bash
yarn dev
```
ou

```bash
make run/dev
```


## Testar a requisição
```bash
curl --request POST \
  --url http://localhost:3000/ \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "",
	"rooms": [
		"",
		"01",
		"#",
		"02"
	],
	"age": "#",
	"gender": "M",
	"companies": {
		"name": "#",
		"document": "0000000000"
	}
}'
```