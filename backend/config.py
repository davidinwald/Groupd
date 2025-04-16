from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    # JWT Settings
    SECRET_KEY: str = "your-secret-key-here"  # Change this in production!
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7

    # Database
    DATABASE_URL: str = "postgresql://postgres:postgres@db:5432/groupd"

    class Config:
        env_file = ".env"

settings = Settings() 