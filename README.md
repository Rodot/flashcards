

# Flashcards

## Initial setup

- Install nx globally for easy access

```bash
npm install -g nx
```

- Install dependencies

```
npm install
```

## Local development

- Run a [PostgreSQL](https://www.postgresql.org/download/) server locally, see credentials in [data-source.ts](https://github.com/Rodot/flashcards/blob/main/apps/api/src/data-source.ts)

- Serve the backend

```bash
nx serve api
```

- Serve the front end

```bash
nx serve flashcards
```

- Open the app at [localhost:4200](http://localhost:4200/)
