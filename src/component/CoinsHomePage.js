import React from 'react';

class Coins extends React.Component {
  cryptoNames = [
    'Btc',
    'Eth',
    'Sol',
    'Ton',
    'Usdt',
    'Usdc',
    'Xrp',
    'Tron',
    'Avax',
    'Ada',
    'Uni',
    'Matic',
    'Dot',
    'Link'
  ];

  render() {
    return (
      <div>
        {this.cryptoNames.map((name, index) => (
          <div key={index} id={name} className="crypto-coin">
            <p>{name}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Coins;
