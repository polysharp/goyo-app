import React from 'react';

const Dashboard = () => (
  <main className="min-w-full min-h-screen bg-teal-900">
    <div className="fixed inset-y-0 left-0 w-16" />
    <div
      className="relative min-h-screen bg-white rounded-tl-lg rounded-bl-lg shadow-lg"
      style={{ width: 'calc(100% - 70px)', marginLeft: '70px' }}
    />
  </main>
);

export default Dashboard;
