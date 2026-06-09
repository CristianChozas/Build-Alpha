# Build Alpha

Build Alpha is a real estate analytics application focused on helping users identify whether a property looks cheap, normal, expensive, or has insufficient data compared with similar listings in its area.

The project is also used as a learning vehicle for a professional Java/Angular stack.

## Stack

- Backend: Java 21, Spring Boot 3, Flyway
- Frontend: Angular 21, TypeScript
- Database: PostgreSQL + PostGIS
- Local infrastructure: Docker Compose
- Architecture direction: Modular Monolith + Clean/Hexagonal Architecture

## Repository structure

```text
backend/     Spring Boot backend service
frontend/    Angular frontend application
documents/   Product, architecture and workflow documentation
```

## Local requirements

Recommended local tools:

- Java 21
- Maven 3.9+
- Node.js compatible with Angular 21
- npm
- Docker Desktop

Current Docker-based setup can run PostgreSQL/PostGIS even if Java or Maven are not installed locally.

## Run infrastructure

```bash
docker compose up -d postgres
```

PostgreSQL is exposed on `localhost:5432`.

Default local credentials:

```text
Database: buildalpha
User: buildalpha
Password: buildalpha
```

## Run backend locally

From `backend/`:

```bash
mvn spring-boot:run -Dspring-boot.run.profiles=local
```

Health endpoints:

```text
GET http://localhost:8080/api/health
GET http://localhost:8080/actuator/health
```

When running the backend through Docker Compose, the service is exposed on `localhost:8081` to avoid common local port conflicts:

```text
GET http://localhost:8081/api/health
```

## Run frontend locally

From `frontend/`:

```bash
npm install
npm start
```

The frontend runs on:

```text
http://localhost:4200
```

## Documentation

The main project documentation lives in `documents/`. Update it when stack, architecture, data ingestion, deployment or module boundaries change.

## Deployment

The repository includes a `render.yaml` Blueprint for Render:

- `buildalpha-backend`: Spring Boot Docker web service.
- `buildalpha-frontend`: Angular static site.
- Supabase: managed PostgreSQL/PostGIS database.

Render is configured to deploy after GitHub checks pass.

Expected public URLs are assigned by Render after the Blueprint is created.

The backend requires these Render environment variables, using the Supabase database connection details:

```text
SPRING_DATASOURCE_URL=jdbc:postgresql://<supabase-host>:5432/<database>?sslmode=require
SPRING_DATASOURCE_USERNAME=<supabase-db-user>
SPRING_DATASOURCE_PASSWORD=<supabase-db-password>
```

Do not commit real database credentials.

The backend uses Flyway on startup, so database schema changes must be added as versioned migrations under:

```text
backend/src/main/resources/db/migration
```
