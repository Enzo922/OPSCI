from fastapi import FastAPI, Query
import json
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# CORS (voir étape 2)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/movies")
def get_movies(limit: int = Query(default=5, ge=1)):
    with open("movies.json") as f:
        movies = json.load(f)
    return movies[:limit]


from fastapi.staticfiles import StaticFiles
