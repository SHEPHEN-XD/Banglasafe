from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Welcome to BANGSAFE – Bangladesh Cyber Threat Intelligence Platform 🇧🇩"}
