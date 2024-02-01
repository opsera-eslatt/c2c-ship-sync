import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            padding: 8px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: #f2f2f2;
        }
      </style>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Fulfillment - Ship Sync</h1>
        <h2>Ship Sync Manifest</h2>
        <table>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Destination</th>
          </tr>
          <tr>
            <td>Virtual Reality Headset</td>
            <td>10</td>
            <td>Virtual Tech Inc., San Francisco</td>
          </tr>
          <tr>
            <td>Blockchain Ledger</td>
            <td>5</td>
            <td>Crypto Finance Ltd., New York</td>
          </tr>
          <tr>
            <td>AI-Powered Chatbot</td>
            <td>20</td>
            <td>Customer Solutions LLC, London</td>
          </tr>
          <tr>
            <td>Crypto Mining Rig</td>
            <td>15</td>
            <td>Blockchain Mining Corp., Hong Kong</td>
          </tr>
          <tr>
            <td>Smart Office Printer</td>
            <td>8</td>
            <td>Global Enterprises Ltd., Dubai</td>
          </tr>
        </table>

      </header>
    </div>
  );
}

export default App;
