import React from 'react'
import { News } from '../../index'
import { data } from '../../../constants'

import { MdDoubleArrow } from 'react-icons/md'

import './Newsfeed.css'

const Newsfeed = () => {
  return (
    <div className='app__news'>
        <div className='app__news-community section__padding'>
            <div className='app__news-community_title'>
                <div className='community__title'>
                    <p className='text__category'>COMMUNITY</p>
                    <h1 className='text__title'>WHAT'S NEW</h1>
                </div>
                <div className='community__explore'>
                    <p>Read more</p>
                    <MdDoubleArrow />
                </div>
            </div>
            <div className='community__news'>
    
                {data.news.map((n, index) => (
                    <News key={n.title + index} image={n.image} category={n.category} title={n.title} date={n.date}/>
                ))}
                
            </div>
            
        </div>
        <div className='app__news-survey item__padding'>
            <div className='survey__info'>
                <p className='text__category'>COMPLETE THE SURVEY</p>
                <h1 className='text__title'>EARN AN ALX COIN</h1>
                <p className='news__text survey__info-text'>
                    Help us improving The Sandbox by sending your feedback. Complete the survey now and get extra Raffle Tickets for Alpha Season 3!
                </p>
                <div className='survey__btn'>
                    <button>Take the survey</button>
                </div>
            </div>
            <div className='survey__img'>
                <div className='survey__img-overlay'>
                    <img src="https://www.sandbox.game/img/14_Home/gradient-overlay.svg" alt="" />
                </div>
                <div className='survey__img-image'>
                    <img src="https://www.sandbox.game/img/14_Home/survey-2.png" alt="" />
                </div>
            </div>
        </div>
        <div className='app__news-season item__padding'>
            <div className='season__img'>
                <img src="https://www.sandbox.game/img/14_Home/memorabilia-glow.png" alt="" />
                <img src="https://www.sandbox.game/img/14_Home/memorabilia-home.png" alt="" />
            </div>
            <div className='season__info'>
                <p className='text__category'>ALPHA SEASON 2</p>
                <h1 className='text__title'>Deptraicogisai</h1>
                <p className='news__text season__info-text'>
                    All players who reached level 5 won the Alpha S2 Memorabilia. It will grant rewards for all future seasons.
                </p>
                <p className='news__text season__info-text'>
                    The deptraicogisai is not an NFT.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Newsfeed