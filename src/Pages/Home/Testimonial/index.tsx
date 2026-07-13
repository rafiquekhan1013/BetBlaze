import { Grid, Typography, Avatar, Rating } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './style.css'
const TestimonialSlider = () => {
  const testimonials = [
    {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      name: 'John Doe',
      position: 'CEO',
      avatarUrl: '/avatars/avatar1.jpg',
      rating: 5  // Add a "rating" property to each testimonial object
    },
    {
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Jane Smith',
      position: 'Marketing Manager',
      avatarUrl: '/avatars/avatar2.jpg',
      rating: 4
    },
    // Add more testimonial objects as needed
  ];

  return (
    <Carousel>
     {testimonials.map((testimonial, index) => (
       <div key={index}>
         <Grid container spacing={2} alignItems="center">
           <Grid item xs={12} className='textCenter avtarSection'>
             <Avatar alt={testimonial.name} src={testimonial.avatarUrl} />
           </Grid>
           <Grid item xs={12}>
             <Typography variant="body1">
               "{testimonial.content}"
             </Typography>
             {/* Display the Rating component */}
             <Rating name={`rating-${index}`} value={testimonial.rating} readOnly />
             {/* Display the person's name and position */}
             <Typography variant="subtitle1" component="p">
               - {testimonial.name}, {testimonial.position}
             </Typography>             
           </Grid>
         </Grid>
       </div>
     ))}
   </Carousel>
 );
};

export default TestimonialSlider;