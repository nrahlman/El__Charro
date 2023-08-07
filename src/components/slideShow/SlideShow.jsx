import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import './slide.css';
import { Fade } from 'react-slideshow-image';
import IMG1 from '../../assets/El Charro/IMG1.jpg';
import IMG2 from '../../assets/El Charro/IMG2.jpg';
import IMG3 from '../../assets/El Charro/IMG3.jpg';
import IMG4 from '../../assets/El Charro/IMG4.jpg';
import IMG5 from '../../assets/El Charro/IMG5.jpg';
import IMG6 from '../../assets/El Charro/IMG6.jpg';
import IMG7 from '../../assets/El Charro/IMG7.jpg';
import IMG8 from '../../assets/El Charro/IMG8.jpg';
import IMG9 from '../../assets/El Charro/IMG9.jpg';
import IMG10 from '../../assets/El Charro/IMG10.jpg';
import IMG11 from '../../assets/El Charro/IMG11.jpg';
import IMG12 from '../../assets/El Charro/IMG12.jpg';
import IMG13 from '../../assets/El Charro/IMG13.jpg';
import IMG14 from '../../assets/El Charro/IMG14.jpg';

const slideImages = [
  {
    pic: IMG1,
    caption: '1 Slide'
  },
  {
    pic: IMG2,
    caption: '2 Slide'
  },
  {
    pic: IMG3,
    caption: '3 Slide'
  },
  {
    pic: IMG4,
    caption: '4 Slide'
  },
  {
    pic: IMG5,
    caption: '5 Slide'
  },
  {
    pic: IMG6,
    caption: '6 Slide'
  },
  {
    pic: IMG7,
    caption: '7 Slide'
  },
  {
    pic: IMG8,
    caption: '8 Slide'
  },
  {
    pic: IMG9,
    caption: '9 Slide'
  },
  {
    pic: IMG10,
    caption: '10 Slide'
  },
  {
    pic: IMG11,
    caption: '11 Slide'
  },
  {
    pic: IMG12,
    caption: '12 Slide'
  },
  {
    pic: IMG13,
    caption: '13 Slide'
  },
  {
    pic: IMG14,
    caption: '14 Slide'
  }
];

const divStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '800px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    maxHeight: '100%',
  };
  
  const slideContainerStyle = {
    position: 'relative',
  };
  
  const captionContainerStyle = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: '10px',
  };
  
  const captionStyle = {
    fontSize: '20px',
  };
  
  const imageStyle = {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  };
  
  const SlideShow = () => {
    return (
      <div className='slide-container'>
        <Fade>
          {slideImages.map((image, index) => (
            <div key={index} style={divStyle}>
              <div style={slideContainerStyle}>
                <img src={image.pic} alt='' style={imageStyle} />
              </div>
            </div>
          ))}
        </Fade>
      </div>
    );
  };
  
  

export default SlideShow;
