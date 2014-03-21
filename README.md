# Addon Mixer

> A public, auth-free, CORS-friendly JSON webservice providing metadata about Heroku addons

## Sample Requests

[/?slugs=memcachier,redistogo,honeybadger](https://addon-mixer.herokuapp.com/?slugs=memecachier,redistogo,honeybadger)

## Running the app locally

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
