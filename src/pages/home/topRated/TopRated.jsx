import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../switchTabs/switchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'

const TopRated = () => {
    
    const [endPoint,setEndPoint]=useState("movie")

    const {data,loading}=useFetch(`/${endPoint}/top_rated`)

    const onTabChange=(tab)=>{  
        setEndPoint(tab==="Movies"?"movie":"tv");
    }
  return (
    <div className='carouselSection'>
        <ContentWrapper >
            <span className='carouselTitle'>TopRated</span>
            <SwitchTabs data={["Movies","TV Shows"]} onTabChange={onTabChange} />
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} />
    </div>
  )
}

export default TopRated