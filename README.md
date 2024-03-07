## Getting Started

Hi, this is a tech challenge created with next js, tailwind, redux and typescript.

The project is a dashboard with 3 modules:

- Weather: Find the weather for a location.
- News feed: Find the tophead news and filter by category.
- Task Manager: Create different task and complete it.

## How to run locally

1. Create a .env File in the root directory.
2. Add the next variables:
   - NEXT_PUBLIC_LOCATION_IQ_KEY="pk.486d86eec7cfec2cf1452be940c2b8eb"
   - NEXT_PUBLIC_OPEN_WEATHER="3a532ffbd7aec532a58490ef4d560bb8"
   - NEXT_PUBLIC_NEWS_APY_KEY="ff722bd73d254be882a3955ee6d8bcb7"

First, run the development server:

```bash
#install dependencies
npm install
#run the project
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
