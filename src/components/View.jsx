import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideoAPI } from '../services/allAPI'

  const View =({addResponseFromHome,deleteResponseFromCategory})=>{
    const [deleteVideoResponseFromVideoCard,setDeleteVideoResponseFromVideoCard]=useState("")
    const [allVideos,setAllVideos]= useState([])
    useEffect(()=>{
      getAllVideos()
    },[addResponseFromHome,deleteVideoResponseFromVideoCard,deleteResponseFromCategory])
    console.log(allVideos);

    const getAllVideos = async()=>{
      try{
        const result = await getAllVideoAPI()
        console.log(result);
        if(result.status>=200 && result.status<300){
          setAllVideos(result.data)
        }
      }catch(err){
        console.log(err);
        
      }
    }
    
  
  return (
    <>
      <Row>
       {
         allVideos?.length>0?
         allVideos?.map(video=>(
          <Col className='mb-5' sm={12} md={6} lg={4}>
          <VideoCard setDeleteVideoResponseFromVideoCard={setDeleteVideoResponseFromVideoCard} displayData={video}/>
          </Col>
         ))
       : 
       <div className='fw-bolder text-dander fs-5'>No Videos are uploaded yet!!!</div> 
       }
      </Row>
    </>
  )
}

export default View