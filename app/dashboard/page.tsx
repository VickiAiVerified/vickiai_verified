"use client";
import React, { useState, useEffect } from 'react';

export default function TradingDashboard() {
  const [timer, setTimer] = useState(120); // 120 seconds = 2 minutes
  const [level, setLevel] = useState("ENTRY WINDOW");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 120));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: '#0a0a0a', color: '#00ff00', height: '100vh', padding: '40px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', borderBottom: '2px solid #333' }}>VickiAiVerified Dashboard</h1>
      
      <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #00ff00', borderRadius: '10px', width: '300px' }}>
        <h3>SIGNAL STATUS: <span style={{ color: '#fff' }}>{level}</span></h3>
        <p style={{ fontSize: '3rem', fontWeight: 'bold' }}>
          {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
        </p>
        <div style={{ backgroundColor: '#ff0000', color: '#fff', padding: '10px', textAlign: 'center', fontWeight: 'bold' }}>
          SELL - EUR/USD (OTC)
        </div>
        <p>AI Confidence: 94%</p>
      </div>
    </div>
  );
}