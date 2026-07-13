import { Box, Typography, Button } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useBreakpoints from '../../../Hooks/Breakepoins';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ArrowBackIosOutlined } from '@mui/icons-material';

const items = [
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'Item 1',
    description: 'This is a short description for Item 1.',
    link: '/item1',
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'Item 2',
    description: 'This is a short description for Item 2.',
    link: '/item2',
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'Item 1',
    description: 'This is a short description for Item 1.',
    link: '/item1',
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'Item 2',
    description: 'This is a short description for Item 2.',
    link: '/item2',
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'Item 1',
    description: 'This is a short description for Item 1.',
    link: '/item1',
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'Item 2',
    description: 'This is a short description for Item 2.',
    link: '/item2',
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'Item 1',
    description: 'This is a short description for Item 1.',
    link: '/item1',
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'Item 2',
    description: 'This is a short description for Item 2.',
    link: '/item2',
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'Item 1',
    description: 'This is a short description for Item 1.',
    link: '/item1',
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'Item 2',
    description: 'This is a short description for Item 2.',
    link: '/item2',
  },
  // Add more items as needed
];



const CarouselSection = () => {
  const { isMobile, isTablet } = useBreakpoints();

    
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : isTablet ? 3 : 5,
    slidesToScroll: 1,
    nextArrow: <ArrowForwardIosIcon />,
    prevArrow: <ArrowBackIosOutlined />,
  };
  
    return (
      <Box sx={{ width: '80%', margin: 'auto' }}>
        <Slider {...settings} >
          {items.map((item, index) => (
            <Box key={index} sx={{ position: 'relative', }}>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '100%', height: 'auto' }}
              />
              
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '&:hover': {
                    opacity: 1,
                  },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ color: '#fff', marginBottom: 2 }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: '#fff', marginBottom: 2, textAlign: 'center' }}
                >
                  {item.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={item.link}
                  sx={{ textTransform: 'none' }}
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    );
  };
  
  // const _NextArrow = ({ }) => {
  //   return (
  //     <Button
  //       sx={{
  //         position: 'absolute',
  //         top: '50%',
  //         right: '10px',
  //         zIndex: 1,
  //         color: '#fff',
  //         transform: 'translateY(-50%)',
  //       }}
  //     >
  //       Next
  //     </Button>
  //   );
  // };
  
  // const _PrevArrow = ({ }) => {
  //   return (
  //     <Button

  //       sx={{
  //         position: 'absolute',
  //         top: '50%',
  //         left: '10px',
  //         zIndex: 1,
  //         color: '#fff',
  //         transform: 'translateY(-50%)',
  //       }}
  //     >
  //       Prev
  //     </Button>
  //   );
  // };
  
  export default CarouselSection;
  