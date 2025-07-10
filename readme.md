🧠 AI Feedback Rating App
A full-stack application that allows users to submit feedback and receive an AI-generated rating out of 5 using Gemini 2.0 Flash (Google AI).

<!-- Optional: replace with real screenshot -->

🚀 Features
🌐 React + Node.js full-stack app

🤖 Uses Gemini AI (Free via MakerSuite)

⭐ AI rating from 1 to 5 based on sentiment

😍 Emoji sentiment display

🎨 Clean UI with responsive design

🧰 Tech Stack
Frontend	Backend	AI	Optional
React	Node.js + Express	Gemini API (v1beta)	Axios, dotenv

📦 Folder Structure
bash
Copy
Edit
ai-feedback-app/
├── client/          # React frontend
│   ├── src/
│   │   ├── App.js
│   │   └── App.css
│   └── ...
├── server/          # Node.js backend
│   ├── routes/
│   │   └── feedback.js
│   └── index.js
├── .env             # Gemini API Key
└── README.md
⚙️ Setup Instructions
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/ai-feedback-app.git
cd ai-feedback-app
2. Setup Backend (Node.js)
bash
Copy
Edit
cd server
npm install
Create a .env file:

env
Copy
Edit
GEMINI_API_KEY=your_google_makersuite_api_key_here
Start the server:

bash
Copy
Edit
node index.js
# or
npx nodemon index.js
3. Setup Frontend (React)
bash
Copy
Edit
cd client
npm install
npm start
The frontend runs on http://localhost:3000

🧪 Example Prompt Sent to Gemini
“Rate the following user feedback from 1 (very bad) to 5 (excellent). Only return a number.

"This app is slow and confusing."”

🔐 Gemini API (Free Tier)
Get your free API key: https://makersuite.google.com/app/apikey

Uses models/gemini-2.0-flash at endpoint:

bash
Copy
Edit
https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent
🧠 Example Rating Output
Feedback	AI Rating	Emoji
"It’s so slow and unhelpful."	1.0	😡
"Decent but needs polish."	3.0	😐
"Absolutely loved it!"	5.0	😍

📌 Future Improvements
Store feedback in MongoDB or Firebase

Admin dashboard to analyze trends

Star rating animation

PDF/CSV feedback export

💡 License
MIT License. Free to use, fork, and contribute!

