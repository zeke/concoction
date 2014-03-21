# Concoction

> A public, auth-free, CORS-friendly JSON webservice providing metadata about Heroku addons

## Sample Requests

- [/?slugs=memcachier](https://concoction.herokuapp.com/?slugs=memecachier)
- [/?slugs=memcachier,redistogo](https://concoction.herokuapp.com/?slugs=memecachier,redistogo)
- [/?slugs=runscope:starter](https://concoction.herokuapp.com/?slugs=runscope:starter)
- [/?slugs=mongohq:sandbox,redistogo,runscope:starter,goinstant,rollbar,usersnap,bonsai:staging,newrelic:west](https://concoction.herokuapp.com/?slugs=mongohq:sandbox,redistogo,runscope:starter,goinstant,rollbar,usersnap,bonsai:staging,newrelic:west)

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
