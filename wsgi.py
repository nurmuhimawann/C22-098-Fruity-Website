import os
from app.app import app

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=os.getenv("PORT", default=5000))