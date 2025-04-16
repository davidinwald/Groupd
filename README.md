# Groupd

A modern web application built with FastAPI, React, and PostgreSQL.

## Project Structure

```
.
├── backend/           # FastAPI backend
├── frontend/         # React frontend with Chakra UI and Vite
└── docker/           # Docker configuration files
```

## Prerequisites

- Docker and Docker Compose
- Node.js (for local frontend development)
- Python 3.8+ (for local backend development)

## Getting Started

1. Clone the repository
2. Copy `.env.example` to `.env` and configure your environment variables
3. Run the application using Docker Compose:

```bash
docker-compose up --build
```

The application will be available at:

- Frontend: http://localhost:5173
- Backend API: http://localhost:8000
- API Documentation: http://localhost:8000/docs

## Development

### Backend Development

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend Development

```bash
cd frontend
npm install
npm run dev
```

## Deployment

The application is configured for deployment on DigitalOcean, but can be adapted for other cloud providers.

## License

MIT
