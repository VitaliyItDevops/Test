import React from 'react';
import sendImg from './img/send.png'
import getImg from './img/get.png'
import ExchangeImg from './img/Exchange.png'
import P2pImg from './img/P2P.png'


class HomePage extends React.Component {
    render() {
      return <header className='HomePage'>
        <h1>Balance</h1>
        <p id='balance'>0,00$</p>

        <div className='buttomTrans'>
            <div id='send' className='buttomHome'>
                <img src={sendImg} alt='' className='buttomHomeImg'/>
                <p className='TextButtomHome'>Send</p>
            </div>
            <div id='get' className='buttomHome'>
                <img src={getImg} alt='' className='buttomHomeImg'/>
                <p className='TextButtomHome'>Get</p>

            </div>
            <div id='Exchange' className='buttomHome'>
                <img src={ExchangeImg} alt='' className='buttomHomeImg'/>
                <p className='TextButtomHome'>Exchange</p>

            </div>
            <div id='P2P' className='buttomHome'>
                <img src={P2pImg} alt='' className='buttomHomeImg'/>
                <p className='TextButtomHome'>P2P</p>

            </div>
        </div>

        </header>;
    }
}

export default HomePage