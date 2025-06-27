# VC Radio App

## Overview
The VC Radio App is a web application designed to facilitate communication and coordination for dispatch units using a Discord bot. It features a two-way radio integration, allowing users to respond to calls, log calls, and manage dispatch operations seamlessly.

## Features
- **Discord Authentication**: Users can log in using their Discord accounts to access the application.
- **Dispatch Unit Management**: Users can dispatch units and manage their status.
- **Call Logging**: The application maintains a log of all calls, providing an easy way to track and review past communications.
- **Two-Way Radio Integration**: Users can communicate in real-time through a radio panel that handles audio input and output.

## Project Structure
```
vc-radio-app
├── src
│   ├── components
│   │   ├── DispatchUnit.tsx
│   │   ├── CallLog.tsx
│   │   ├── RadioPanel.tsx
│   │   └── Login.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   └── Dashboard.tsx
│   ├── utils
│   │   ├── discordAuth.ts
│   │   └── api.ts
│   └── types
│       └── index.ts
├── public
│   └── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/vc-radio-app.git
   ```
2. Navigate to the project directory:
   ```
   cd vc-radio-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the development server:
   ```
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000` to access the application.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.