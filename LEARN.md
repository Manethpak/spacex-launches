# Objective

My objective for this project is to build a React app that will render a list of past launches by SpaceX and its respective details. Data was provided by [SpaceX GraphQL API](https://medium.com/open-graphql/launching-spacex-graphql-api-b3d7029086e0). I also use GraphQL Code Generator to generate schema and hooks which is used to provide data to each page.

# Start our Journey

## Setup React and TailwindCSS

First up, let's boostrap our react project with the command

    yarn create react-app my-app --template typescript

Then we can add our tailwind with the command

    yarn add -D tailwindcss postcss autoprefixer

and initialize our tailwind

    npx tailwindcss init -p

after running the above command a file named `tailwind.config.css` will be created in our root directory. Then specify the path for our source code.

    module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }

## Setup Apollo Client and GraphQL

Let install the package we needed:

    yarn add @apollo/client graphql

then we can create a new file like `src/apollo/apollo-client.ts` for our apollo client config.

    import { ApolloClient, InMemoryCache } from "@apollo/client";
    import { offsetLimitPagination } from "@apollo/client/utilities";

    const client = new ApolloClient({
      uri: "https://api.spacex.land/graphql/",
      cache: new InMemoryCache({
        typePolicies: {
          Query: {
            fields: {
              launchesPast: offsetLimitPagination(),
            },
          },
        },
      }),
    });

    export default client;

since we will be using SpaceX GraphQL API, we included the link as a string named uri. As for the cache, I have add a new policy for the field launchesPast that this field will be a paginated result so we would be able to request new data while keeping the old data as it is.

Then in our `src/index.ts` file, we will import the client we just created along with `ApolloProvider` from `@apollo/client` and wrap it around our app as this will be apollo client context that can be use throughout the app.

    import React from "react";
    import ReactDOM from "react-dom/client";
    import { ApolloProvider } from "@apollo/client";

    import client from "./apollo/apollo-client";

    root.render(
      <ApolloProvider client={client}>
        ...
      </ApolloProvider>
    );

## Setup GraphQL Code Generator

Run the following command to install the package we need

    yarn add -D @graphql-codegen/cli

then

    yarn graphql-codegen init

to generate a `codegen.yml` file. After that we will need to add more packages

    yarn add -D @graphql-codegen/typescript-react-apollo @graphql-codegen/typescript-operations @graphql-codegen/introspection

After finish installing we will need to setup our `./codegen.yml` as follows:

    overwrite: true
    schema: "https://api.spacex.land/graphql"
    documents: "src/**/*.{gql,graphql}"
    generates:
      src/apollo/generated/schema.ts:
        plugins:
          - "typescript"
          - "typescript-operations"
          - "typescript-react-apollo"
        config:
          avoidOptionals: true
      ./graphql.schema.json:
        plugins:
          - "introspection"

We would also need to add a new script to `./package.json`

    "scripts": {
      ...
      "codegen": "graphql-codegen --config codegen.yml"
    }

This is a lot of setup for quite a small project... but it will be a lot of work to do the code manually.

# Outcome

After completing this project I was able to get a glimpes of what GraphQL is and how capable it is when use correctly with the right tools. I get to learn on how to write GraphQL query using Variables, Arguments and Fragments as well as its type system. GraphQL Code Generator made everything about GraphQL so easy to use with its generator that generated custom API hooks using React Query.

Beside the GraphQL stuff, I was also get to know React Query which was built into Apollo Client and is mainly use for making API request. I had never tried React Query before and to my surpires it was super easy to use and maintain data state!

Overall building this project was a really fun experience, I get to learn and challenge myself with something new once in a while.🥰
