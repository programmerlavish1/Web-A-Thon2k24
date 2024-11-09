// backend-server/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Simple GET route to check if server is running
app.get('/', (req, res) => {
    res.send('Backend server is running!');
});

// Endpoint to verify if user is human or bot
app.post('/verify-human', (req, res) => {
    console.log("Received data:", req.body);

    const { mouseData } = req.body;
    if (!mouseData || !Array.isArray(mouseData) || mouseData.length === 0) {
        console.log("Invalid or empty data received.");
        return res.status(400).json({ status: "error", message: "No valid mouse data received" });
    }

    // Simple bot detection logic
    const movementPatterns = analyzeMovement(mouseData); // Example function (see below)
    const isHuman = movementPatterns.isHuman;

    const response = isHuman
        ? { status: "success", message: "Verification complete: You are human." }
        : { status: "bot-detected", message: "Verification failed: Bot behavior detected." };

    console.log("Sending response:", response);
    res.json(response);
});

// Mock function to analyze movement patterns (replace with ML model for production)
function analyzeMovement(mouseData) {
    // Placeholder logic - replace with ML-based detection
    const averageSpeed = mouseData.reduce((acc, movement, i, arr) => {
        if (i === 0) return acc;
        const dx = movement.x - arr[i - 1].x;
        const dy = movement.y - arr[i - 1].y;
        const dt = movement.timestamp - arr[i - 1].timestamp;
        const speed = Math.sqrt(dx * dx + dy * dy) / dt;
        return acc + speed;
    }, 0) / (mouseData.length - 1);

    // Simple check to mimic human-like behavior (adjust values based on data)
    return { isHuman: averageSpeed < 10 && mouseData.length > 100 };
}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
