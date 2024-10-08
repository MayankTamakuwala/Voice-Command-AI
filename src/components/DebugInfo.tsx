// File: components/DebugInfo.tsx

import React from 'react';

interface DebugInfoProps {
    audioDebugInfo: string;
    connectionStatus: string;
    userId: string;
    conversationId: string;
}

const DebugInfo: React.FC<DebugInfoProps> = ({ audioDebugInfo, connectionStatus, userId, conversationId }) => {
    return (
        <div className="mt-4 p-4 bg-yellow-100 rounded-lg">
            <h3 className="font-bold mb-2">Debug Info:</h3>
            <p>Connection Status: {connectionStatus}</p>
            <p>User ID: {userId}</p>
            <p>Conversation ID: {conversationId}</p>
            <pre className="whitespace-pre-wrap text-xs">{audioDebugInfo}</pre>
        </div>
    );
};

export default DebugInfo;