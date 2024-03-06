# Node Nginx

Esse é um repositório para fins didaticos.

Com o Ngnix e Node, simulamos algumas API e conseguimos usar o balanceador de carga

## Como usar

```bash
git clone <repositorio>
cd <repositorio>
docker-compose up -d
```

## Rotas

- http://localhost/random

Retorna um fibonacci de um numero aleatorio e em qual server ele esta rodando

## Configuração

Dentro de cada container de API eu coloquei uma variável de ambiente com o nome de SERVER, assim é possivel ver em qual container esta caindo a requisição