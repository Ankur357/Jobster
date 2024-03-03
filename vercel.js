{
    "buildCommand": "npm i && cd client && npm i && npm run build",
    "outputDirectory": "client/dist",
    "framework": "vite",
    "rewrites": [
        {
            "source": "/(.*)",
            "destination": "index.js"
        }
    ]
}