# Glowup AI - Datathon Project

This project is focused on using machine learning and data analysis techniques to forecast social media campaign performance. The repository contains three main sections:

- **Frontend**: Built with React, displaying live, expired, and upcoming campaigns.
- **ML Trial & Stats Analysis**: Jupyter Notebook files for data analysis, forecasting, and time series modeling of social media engagement metrics.
- **Backend**: A MERN stack implementation for managing campaigns and handling API requests.

---

## Frontend

The frontend of the application is a React-based dashboard that interacts with the backend to display real-time and historical campaign data. The dashboard provides an overview of:

- **Active Campaigns**: A list of live campaigns across platforms.
- **Upcoming Campaigns**: Upcoming campaigns scheduled for the next week.
- **Expired Campaigns**: Campaigns that have already concluded.

### Key Features:
- React Hooks for state and effect management.
- Fetching data from a RESTful API using `useEffect`.
- Displaying various metrics like views, engagements, and trends for different content types.
- Icons for different content types, such as Blog Post, Video, and LinkedIn.


---

## ML Trial & Stats Analysis

This folder contains a Jupyter Notebook for data analysis and forecasting based on the dataset provided. The key fields for analysis include:

- **Post Timestamp**: For time series modeling.
- **Platform**: To differentiate campaigns by platform (Instagram, TikTok, YouTube, etc.).
- **Engagement Metrics**: Metrics such as Likes, Comments, Shares, Impressions, Reach, and Engagement Rate.
- **Audience Demographics**: Data about Age, Gender, Location, and Interests.

### Key Insights from Analysis:

- **Stationarity Check (ADF Test)**: Key metrics show extremely low p-values (< 0.05), indicating stationarity suitable for ARIMA modeling.
- **Seasonal Decomposition**: The decomposition for Engagement Rate shows clear trends and seasonal components.
    - **Trend**: Long-term changes in engagement rates.
    - **Seasonality**: Patterns that repeat, possibly linked to posting schedules or audience behavior.
    - **Residuals**: Noise not explained by trend or seasonality.

The analysis can be found in the `ml_trial_SM_stats_analysis` folder.

---

## Backend

The backend is built using the MERN stack (MongoDB, Express, React, Node.js). It provides RESTful APIs to manage campaigns and retrieve data for the frontend.

### API Endpoints:
- **GET /api/campaigns**: Fetch all campaigns (active, expired, and upcoming).
- **GET /api/campaigns/expired**: Fetch expired campaigns.
- **POST /api/campaigns**: Create a new campaign.

---

You can view the live version of the frontend here: [Datathon Glowup AI Frontend](https://amon-mr-error.github.io/datathonGlowupAI/) (Backend Features Not Available including Analytics Features)


