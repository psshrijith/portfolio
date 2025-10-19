import { type ReactElement } from 'react';

const Loading = ({ done = false }: { done?: boolean }): ReactElement => {
    return (
        <div
            className={`fixed inset-0 bg-gray-900 bg-opacity-90 transition-opacity duration-700 flex flex-col items-center justify-center z-50 ${
                done ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
        >
            <div className="text-6xl mb-4 animate-bounce" aria-hidden="true">
                👨‍💻
            </div>
            <p className="text-white text-xl font-medium">Loading Portfolio...</p>

            <div className="relative w-48 h-1 bg-gray-700 rounded-full mt-4 mx-auto overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400" />
            </div>
        </div>
    );
};

export default Loading;
