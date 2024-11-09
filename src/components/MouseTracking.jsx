
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MouseTracking() {
    const [mouseData, setMouseData] = useState([]);
    const [statusMessage, setStatusMessage] = useState("Our ML model is checking environmental parameters. Please move your mouse to verify.");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const captureMouseMovement = (event) => {
            const currentTime = Date.now();
            const timeDiff = mouseData.length ? currentTime - mouseData[mouseData.length - 1].timestamp : 0;

            setMouseData((prevData) => [
                ...prevData,
                { x: event.clientX, y: event.clientY, timestamp: currentTime, timeDiff }
            ]);
        };

        window.addEventListener("mousemove", captureMouseMovement);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener("mousemove", captureMouseMovement);
        };
    }, [mouseData]);

    useEffect(() => {
        const verifyHuman = async () => {
            if (mouseData.length >= 10) {
                setLoading(true);
                try {
                    const response = await axios.post("http://localhost:5000/verify-human", { mouseData });
                    setStatusMessage(response.data.message);
                } catch (error) {
                    setStatusMessage("Error verifying. Please try again.");
                } finally {
                    setLoading(false);
                }
            }
        };
        // Call verification every 2 seconds if enough data has been collected
        const interval = setInterval(verifyHuman, 2000);

        return () => clearInterval(interval);
    }, [mouseData]);

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center p-6">
            <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Human Verification</h1>
                <p className="text-gray-700 text-center mb-6">
                    {statusMessage}
                </p>
                {loading ? (
                    <div className="flex justify-center items-center space-x-2">
                        <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                        <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
                        <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                    </div>
                ) : (
                    <div className="text-center mt-4">
                        <span className="px-4 py-2 bg-green-200 text-green-800 font-semibold rounded-full">
                            Verification Complete
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MouseTracking;