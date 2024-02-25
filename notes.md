# Controllers and Models

http://localhost:3333/locations in browser should display:

```json
{
"locations": [
{
"id": 1,
"street": "45 Davis Street",
"city": "Long Island City",
"state": "NY",
"zip": "11101"
},
{
"id": 2,
"street": "23 Broadway",
"city": "New York",
"state": "NY",
"zip": "11011"
}
]
}
```
# Routing

In Express.js, routers are middleware that allows you to group route handlers and other middleware into modular, reusable components. They provide a way to organize your application's routes into separate files or modules, improving code organization and maintainability.

When you create a new router instance using `express.Router()`, you're essentially creating a mini Express application that can have its own middleware and routes. This router instance can then be mounted on a specific path in your main application using `app.use()`.

Here's why creating a new router instance is necessary in your code:

1. **Modularity**: By creating a router instance, you can encapsulate related routes and middleware in a separate file (`locations.controller.js` in your case). This promotes modularity and makes your code easier to understand and maintain.

2. **Route Isolation**: Routers allow you to isolate routes and middleware to specific paths. In your example, the `locations` router is responsible for handling routes under the `/locations` path. This isolation helps avoid route conflicts and makes it clear which routes belong to which part of your application.

3. **Middleware Chain**: Routers have their own middleware chain, meaning you can attach middleware specific to those routes only. This allows you to apply middleware selectively to certain groups of routes without affecting other parts of your application.

4. **Reusability**: Routers can be reused across multiple applications or mounted at different paths within the same application. This promotes code reuse and reduces duplication.

Overall, using routers in Express.js provides a clean and organized way to structure your application's routes and middleware, leading to more maintainable and scalable code.