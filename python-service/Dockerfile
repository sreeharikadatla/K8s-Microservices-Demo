# 1. Use official Python image
FROM python:3.10

# 2. Set working directory
WORKDIR /app

# 3. Install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# 4. Copy app code
COPY . .

# 5. Expose app port
EXPOSE 5000

# 6. Start Flask app
CMD ["python", "app.py"]
