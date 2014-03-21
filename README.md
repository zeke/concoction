# Concoction

Concoction is a public, auth-free, CORS-friendly JSON webservice providing
metadata about Heroku addons. It's a thin HTTP wrapper around the
[heroku-addons](https://github.com/zeke/node-heroku-addons) node module.

## Sample Requests

- One addon without plan: [bonsai](https://concoction.herokuapp.com/?slugs=bonsai)
- One addon with plan: [bonsai:staging](https://concoction.herokuapp.com/?slugs=bonsai:staging)
- Multiple addons with or without plans: [mongohq:sandbox,redistogo,bonsai:staging](https://concoction.herokuapp.com/?slugs=mongohq:sandbox,redistogo,bonsai:staging)

## Sample Response

```json
{
  "totalCents": 1000,
  "total": "$10/mo",
  "plans": [{
    "created_at": "2013-08-05T20:50:21Z",
    "default": true,
    "description": "Redis To Go Nano",
    "id": "0e4db8d1-973a-40a6-8af2-06954105565c",
    "name": "redistogo:nano",
    "price": {
      "cents": 0,
      "unit": "month"
    },
    "state": "public",
    "updated_at": "2013-12-16T22:19:39Z"
  }, {
    "created_at": "2013-08-05T20:50:35Z",
    "default": false,
    "description": "Bonsai Elasticsearch Staging",
    "id": "0ee349b5-6088-4694-9777-b81088f6072e",
    "name": "bonsai:staging",
    "price": {
      "cents": 1000,
      "unit": "month"
    },
    "state": "public",
    "updated_at": "2013-12-16T22:19:49Z"
  }]
}
```

## Running Locally

The underlying [heroku-addons node
module](https://www.npmjs.org/package/heroku-addons) requires a
`HEROKU_API_TOKEN` environment variable to authenticate with the Heroku Platform
API, so you'll need to create a `.env` file with your token for foreman to use:

```sh
npm install
echo "HEROKU_API_TOKEN=$(heroku auth:token)" >> .env
foreman start
```

## License

MIT
