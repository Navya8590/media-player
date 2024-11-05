import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/music.png'
import feature1 from '../assets/first.jpg'
import feature2 from '../assets/categories.jpeg'
import feature3 from '../assets/managing.webp'
import { Card } from 'react-bootstrap'


const Landing = () => {
  return (
    <div style={{paddingTop:'100px'}} className='container'>
      {/* {landing part} */}
      <div className="row align-items-center">
        <div className="col-lg-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}}>Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!</p>
          <Link to={'/home'} className='btn btn-info'>Get Started</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img className='img-fluid ms-5' src={landingImg} alt="landing Image" />
        </div>
      </div>
      {/* {features part} */}
      <div className="my-5">
        <h3 className='text-center'>Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
          <Card style={{ width: '20rem' }}>
      <Card.Img height={'250px'}  variant="top" src={feature1} />
      <Card.Body>
        <Card.Title>Managing Videos
        </Card.Title>
        <Card.Text>
        Users can upload, view and remove the videos.

        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div className="col-lg-4">
          <Card style={{  width: '20rem' }}>
      <Card.Img height={'250px'}  variant="top" src={feature2} />
      <Card.Body>
        <Card.Title>Categorise Videos
        </Card.Title>
        <Card.Text>
        Users can categorise the videos by drag and drop feature.

        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div className="col-lg-4">
          <Card style={{  width: '20rem' }}>
      <Card.Img height={'250px'} variant="top" src={feature3} />
      <Card.Body>
        <Card.Title>Managing Videos
        </Card.Title>
        <Card.Text>
        Users can manage the watch history of all videos.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
        </div>
      </div>
    {/* last */}
    <div className="my-5 row align-center border rounded p-5">
      <div className="col-lg-5">
        <h3 className='text-warning'>Simple, Fast and Powerful</h3>
        <p style={{textAlign:'justify'}}> <span className='fs-5 fe-bolder'>Plat Everything :</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolore porro fuga amet exercitationem rerum, nam qui! Ex deserunt fugit, molestias enim maxime ad consectetur nemo. Minima velit doloremque sapiente!</p>
        <p style={{textAlign:'justify'}}>  <span className='fs-5 fe-bolder'>Catagories :</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolore porro fuga amet exercitationem rerum, nam qui! Ex deserunt fugit, molestias enim maxime ad consectetur nemo. Minima velit doloremque sapiente!</p>
        <p style={{textAlign:'justify'}}>  <span className='fs-5 fe-bolder'>Managing History :</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolore porro fuga amet exercitationem rerum, nam qui! Ex deserunt fugit, molestias enim maxime ad consectetur nemo. Minima velit doloremque sapiente!</p>
      </div>
      <div className="col"></div>
      <div className="col-lg-6">
      <iframe width="100%" height="378" src="https://www.youtube.com/embed/ajnCMSC4VPo" title="Kanguva - Tamil Trailer | Suriya | Bobby Deol | Devi Sri Prasad | Siva | Studio Green | UV Creations" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>

    </div>
    </div>
  )
}

export default Landing