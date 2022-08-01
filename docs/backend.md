# Backend

## NextAuth

- Google provider

## Supabase

## Prisma

## TRPC

### Moving parts

- router: defines the routes for the api
- schema: defines the shape of the object/entity

#### Utils

- createRouter
- createProtectedRouter

### File naming conventions

- routers: `[object_name].router.ts`
- schemas: `[object_name].schema.ts`

### task router

- `query("user-tasks")`
  - description: get all tasks for given user
  - input: userId
- `mutation("add-task")`
  - description: add task given the input
  - input:
    - title
    - description
    - due
    - done
