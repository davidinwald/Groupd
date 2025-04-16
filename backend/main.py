from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from routers import users, auth
from database import engine, Base

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Groupd API",
    description="Backend API for Groupd application",
    version="1.0.0"
)

# Get allowed origins from environment variable, default to frontend URL
allowed_origins = os.getenv("ALLOWED_ORIGINS", "https://groupd-frontend-yyov4.ondigitalocean.app").split(",")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router)
app.include_router(users.router)

@app.get("/")
async def root():
    return {"message": "Welcome to Groupd API"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"} 