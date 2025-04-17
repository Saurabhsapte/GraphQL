# GraphQL Test Server

## To Run Application
```sh
node index.js
```

## To View
Open your browser and navigate to:
```
http://localhost:8000/graphql
```

## Test Data
```graphql
query getAllTodos($getUserId: ID!) {
    getTodos {
        title
        completed
        user {
            name
            email
            username
            phone
        }
    }
}
```

## Tools Used
- graphql
- apollo/server
- express
- axios
- cors
- body-parser

## Commands
```sh
npm init --yes && npm pkg set type="module"
npm i express
npm install @apollo/server graphql
npm i body-parser cors
npm i axios @types/axios
```

## References
- https://www.apollographql.com/docs/apollo-server/getting-started#step-1-create-a-new-project