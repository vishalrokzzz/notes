import React from 'react';
import { AlertCircle } from 'lucide-react';

const RateLimitedUI = () => {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-slide-down">
      <div className="bg-base-200 border border-primary text-primary-content px-6 py-4 rounded-xl shadow-xl flex items-center gap-4 backdrop-blur-md backdrop-saturate-150 transition-all duration-300 w-[95vw] max-w-md">
        <div className="text-primary">
          <AlertCircle className="w-6 h-6 animate-pulse" />
        </div>
        <div>
          <h3 className="font-bold text-lg">Rate Limit Reached</h3>
          <p className="text-sm opacity-80">You reached the request limit. Try again after some time.</p>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;
