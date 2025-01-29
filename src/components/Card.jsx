
import React from 'react';

export const Card = ({ children }) => (
  <div className="bg-white shadow-lg rounded-lg p-4">{children}</div>
);

export const CardContent = ({ children }) => (
    <div className="p-6">
      {children}
    </div>
);

export const CardHeader = ({ children }) => (
  <div className="text-xl font-semibold text-gray-800 mb-2">{children}</div>
);

export const CardTitle = ({ children }) => (
  <h2 className="text-lg font-medium text-gray-700">{children}</h2>
);

export const CardDescription = ({ children }) => (
  <p className="text-sm text-gray-600">{children}</p>
);
