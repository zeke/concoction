# Concoction

> A public, auth-free, CORS-friendly JSON webservice providing metadata about Heroku addons

## Sample Requests

- One addon without plan: [bonsai](https://concoction.herokuapp.com/?slugs=bonsai)
- One addon with plan: [bonsai:staging](https://concoction.herokuapp.com/?slugs=bonsai:staging)
- Multiple addons with or without plans: [mongohq:sandbox,redistogo,bonsai:staging](https://concoction.herokuapp.com/?slugs=mongohq:sandbox,redistogo,bonsai:staging)

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
