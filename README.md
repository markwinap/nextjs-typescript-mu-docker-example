# nextjs-typescript-mu-docker-example
Next.js Typescript Material UI Docker Example

## NextJs

### Run locally
```sh
npm run dev
# or
yarn dev
```

## Docker

### Build Container
```sh
docker build -t nextjs-docker .
```

### Run Container
```sh
docker run -p 3000:3000 nextjs-docker
```

### Navigate to localhost
```sh
http://localhost:3000/
```