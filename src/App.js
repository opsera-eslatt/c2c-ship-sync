import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Ship Sync (Fulfillment)</h2>
        <h1>Ship Sync Manifest</h1>
        <table>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Destination</th>
            <th>Date</th>
          </tr>
          <tr>
            <td>Virtual Reality Headset</td>
            <td>10</td>
            <td>Virtual Tech Inc., San Francisco</td>
            <td>2024-01-15</td>
          </tr>
          <tr>
            <td>Blockchain Ledger</td>
            <td>5</td>
            <td>Crypto Finance Ltd., New York</td>
            <td>2024-01-18</td>
          </tr>
          <tr>
            <td>AI-Powered Chatbot</td>
            <td>20</td>
            <td>Customer Solutions LLC, London</td>
            <td>2024-01-20</td>
          </tr>
          <tr>
            <td>Crypto Mining Rig</td>
            <td>15</td>
            <td>Blockchain Mining Corp., Hong Kong</td>
            <td>2024-01-22</td>
          </tr>
          <tr>
            <td>Smart Office Printer</td>
            <td>8</td>
            <td>Global Enterprises Ltd., Dubai</td>
            <td>2024-01-25</td>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default App;
