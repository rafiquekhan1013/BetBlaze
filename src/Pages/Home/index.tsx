//import "react-slideshow-image/dist/styles.css";

import "./style.css";
import { Gallery } from "react-grid-gallery";
import { useState } from "react";
import { images, CustomImage } from "./Gallery/images";
import { Grid, Typography } from "@mui/material";
import CarouselSection from "./Projects/projects";
import TestimonialSlider from "./Testimonial";
import OurServices from "./Our-Services";
import ScrollAnimation from "react-animate-on-scroll";

const Home = () => {
  const [_index ,setIndex] = useState<number>(-1);

  // const currentImage = images[index];
  // const nextIndex = (index + 1) % images.length;
  // const nextImage = images[nextIndex] || currentImage;
  // const prevIndex = (index + images.length - 1) % images.length;
  // const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index: number, _item: CustomImage) => setIndex(index);
  // const handleClose = () => setIndex(-1);
  // const handleMovePrev = () => setIndex(prevIndex);
  // const handleMoveNext = () => setIndex(nextIndex);
  // const [open, setOpen] = useState(false);

  return (
    <div className="wrapper-full">
      <div className="slide-container">
        <div className="sliderArea">
          <img
            style={{ width: "100%" }}
            src="/images/sliderBg.jpg"
            className="minVh"
          />
          <div className="sliderContent">
            <div className="container">
              <h2>Reaching Untapped Digital Communities</h2>
              <p>
                C3Digital is a niche marketing agency dedicated to serving
                licensed gambling operators by identifying and targeting
                underserved digital communities. Through strategic partnerships
                and targeted promotions, we help operators acquire online sports
                bettors and casino players at competitive prices.
              </p>
              <a href="/">Learn More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="ourService">
        <div className="container">
          <ScrollAnimation animateIn="fadeInDown">
            <h1 className="sectionTitle afterTitle blueTitle">Our Services</h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp">
            <p className="sectionSubtitle mb-100 textCenter" >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </ScrollAnimation>
          <OurServices />
        </div>
      </div>
      <div className="case-studies">
        <div className="container mb-50 textCenter" >
          <ScrollAnimation animateIn="fadeInDown">
            <h1 className="sectionTitle afterTitle whiteTitle">
              Prospective Partner
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="flipInX">
            <p className="sectionSubtitle whiteFont">
              See below for a case study of a partnership we’ve matched with
              iGaming brands to drive new customer engagement and retention
            </p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp">
            <a href="/" className="button orangeButton">
              Case Studies
            </a>
          </ScrollAnimation>
        </div>
      </div>
      <div className="our-gallery">
        <ScrollAnimation animateIn="slideInUp">
          <Gallery
            images={images}
            onClick={handleClick}
            enableImageSelection={false}
          />
        </ScrollAnimation>
      </div>
      <div className="our-work">
        <div className="container mb-50 textCenter" >
          <ScrollAnimation animateIn="slideInUp">
            <h2 className="sectionTitle afterTitle blueTitle">Our Work</h2>
          </ScrollAnimation>
          <ScrollAnimation animateIn="flipInY">
            <p className="sectionSubtitle">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn="zoomIn">
          <CarouselSection />
        </ScrollAnimation>
        <div className="container mt-50 textCenter" >
          <ScrollAnimation animateIn="slideInDown">
            <a href="/" className="button orangeButton">
              Read More{" "}
            </a>
          </ScrollAnimation>
        </div>
      </div>
      <div className="readMore-section">
        <div className="container">
          <ScrollAnimation animateIn="slideIn">
            <h2 className="whiteTitle afterTitle sectionTitle">Talk to us</h2>
          </ScrollAnimation>
          <Grid container spacing={2} alignItems={"center"}>
            <Grid item xs={12} md={9}>
              <ScrollAnimation animateIn="slideInLeft">
                <Typography className="whiteFont font-24 fw-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </Typography>
              </ScrollAnimation>
            </Grid>
            <Grid item xs={12} md={3} textAlign={"center"}>
              <ScrollAnimation animateIn="slideInRight">
                <a href="/" className="button orangeButton">
                  Get In Touch
                </a>
              </ScrollAnimation>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="testimonialSection">
        <ScrollAnimation animateIn="slideInUp">
          <h2 className="sectionTitle afterTitle blueTitle mb-100">
            Testimonial
          </h2>
        </ScrollAnimation>
        <div className="container">
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};

export default Home;
