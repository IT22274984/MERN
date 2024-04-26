import React from 'react';

const Chat = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold mb-4">Chat Box</h2>
                <p className="text-gray-700">
                    Have questions or need assistance? Chat with our experts for personalized advice and support.
                </p>
                <button className="mt-4 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Chat Now
                </button>
            </div>
        </div>
    );
}

export default Chat;
