import React from "react";
import PropTpyes from 'prop-types';

import TitleBar from './TitleBar';
import Addplayer from './Addplayer';
import PlayerList from './Playerlist';

export default class App extends React.Component{
    render(){
        return(
            <div className='app'>
                <TitleBar title= {this.props.title} subtitle="Created by Gauri Bokare"/>
                <div className= "wrapper">
                <PlayerList players={this.props.players}/>
                <Addplayer/> 
                </div>
            </div>
        );
    }
};

App.propTypes={
    title: PropTpyes.string.isRequired,
    players:PropTpyes.array.isRequired
};













