import React from 'react'
import {carousel} from 'antd'
import imganen1 from '../../media/img/pixeles1.jpeg'
import imganen2 from '../../media/img/pixeles2.jpeg'
import imganen3 from '../../media/img/pixeles3.jpeg'

const Home = () => (
    <carousel autoplay style={{width:'100'}}>
    <img style={{theight:'80vh'}} src={imganen1} alt='logo1' />
    <img style={{theight:'100%'}} src={imganen2} alt='logo2' />
    <img style={{theight:'100%'}} src={imganen3} alt='logo3' />

    </carousel>
    
)

export default Home