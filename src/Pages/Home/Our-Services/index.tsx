import { Grid, Typography, Button } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
import "./style.css";

const OurServices = () => {
  return (
    <div className="" id="serviceId">
      <Grid container spacing={2} className="mb-100">
        <Grid item xs={12} md={1}></Grid>
        <Grid item xs={12} md={10}>
          <Grid container spacing={5}>
            {/* First column with image */}
            <Grid item xs={12} sm={6}>
              <ScrollAnimation animateIn="fadeInLeft">
                <img
                  src="/images/BetBlaze-Media-Moodboard.jpg"
                  alt="Lorem Ipsum"
                  style={{ width: "100%", height: "auto" }}
                />
              </ScrollAnimation>
            </Grid>
            {/* Second column with title, paragraph, and button */}
            <Grid item xs={12} sm={6}>
              <ScrollAnimation animateIn="fadeInRight">
                <Typography
                  variant="h4"
                  gutterBottom
                  className="serviveTitle mb-10"
                >
                  Identifying Communities
                </Typography>
                <Typography variant="body1" className="servivePara  mb-30">
                  We identify and target hyper-engaged audiences on smaller
                  digital platforms that traditional affiliates often overlook.
                  By focusing on these underserved communities, we delivers
                  highly targeted tailored strategies, driving superior results
                  and tapping into underserved digital communities.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  className="serviveButton"
                >
                  Read More
                </Button>
              </ScrollAnimation>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={1}></Grid>
      </Grid>
      <Grid container spacing={2} className="mb-100">
        <Grid item xs={12} md={1}></Grid>
        <Grid item xs={12} md={10}>
          <Grid container spacing={5} className="reverseMob">
            {/* First column with image */}
            <Grid item xs={12} sm={6}>
              <ScrollAnimation animateIn="fadeInLeft">
                <Typography
                  variant="h4"
                  gutterBottom
                  className="serviveTitle mb-10"
                >
                  Power Through Partnership
                </Typography>
                <Typography variant="body1" className="servivePara  mb-30">
                  This approach is a creates stronger marketing campaigns
                  because it involves partnering with the community leaders and
                  platform founders to develop messaging that aligns with their
                  audience's core values. This deeper connection and trust
                  result in much higher conversion rates than traditional CPC
                  and SEO marketing, ensuring the offers resonate authentically
                  and effectively.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  className="serviveButton"
                >
                  Read More
                </Button>
              </ScrollAnimation>
            </Grid>

            {/* Second column with title, paragraph, and button */}

            <Grid item xs={12} sm={6}>
              <ScrollAnimation animateIn="fadeInRight">
                <img
                  src="/images/BetBlaze-Media-Moodboard.jpg"
                  alt="Lorem Ipsum"
                  style={{ width: "100%", height: "auto" }}
                />
              </ScrollAnimation>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={1}></Grid>
      </Grid>
      <Grid container spacing={2} className="mb-100">
        <Grid item xs={12} md={1}></Grid>
        <Grid item xs={12} md={10}>
          <Grid container spacing={5}>
            {/* First column with image */}
            <Grid item xs={12} sm={6}>
              <ScrollAnimation animateIn="fadeInLeft">
                <img
                  src="/images/BetBlaze-Media-Moodboard.jpg"
                  alt="Lorem Ipsum"
                  style={{ width: "100%", height: "auto" }}
                />
              </ScrollAnimation>
            </Grid>
            {/* Second column with title, paragraph, and button */}
            <Grid item xs={12} sm={6}>
              <ScrollAnimation animateIn="fadeInRight">
                <Typography
                  variant="h4"
                  gutterBottom
                  className="serviveTitle mb-10"
                >
                  Focused Approach
                </Typography>
                <Typography variant="body1" className="servivePara  mb-30">
                  Our focused approach allows us to align brands with the right
                  audiences, creating impactful campaigns. Connecting brands
                  with communities that truly align with their values creates
                  much higher retention and stronger player value. This
                  strategic alignment fosters long-term loyalty, making the
                  marketing efforts more sustainable and effective.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  className="serviveButton"
                >
                  Read More
                </Button>
              </ScrollAnimation>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={1}></Grid>
      </Grid>
      <Grid container spacing={2} className="mb-50">
        <Grid item xs={12} md={1}></Grid>
        <Grid item xs={12} md={10}>
          <Grid container spacing={5} className="reverseMob">
            {/* First column with image */}
            <Grid item xs={12} sm={6}>
              <ScrollAnimation animateIn="fadeInLeft">
                <Typography
                  variant="h4"
                  gutterBottom
                  className="serviveTitle mb-10"
                >
                  A Better Way
                </Typography>
                <Typography variant="body1" className="servivePara  mb-30">
                  C3D's partner-focused marketing focuses on building brands
                  with hyper-engaged audiences, in collaborating with community
                  leaders. These campaigns are authentic, value-aligned, and
                  generate great results. Operators can expect to see higher
                  conversion and retention rates compared to traditional
                  methods.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  className="serviveButton"
                >
                  Read More
                </Button>
              </ScrollAnimation>
            </Grid>
            {/* Second column with title, paragraph, and button */}

            <Grid item xs={12} sm={6}>
              <ScrollAnimation animateIn="fadeInRight">
                <img
                  src="/images/BetBlaze-Media-Moodboard.jpg"
                  alt="Lorem Ipsum"
                  style={{ width: "100%", height: "auto" }}
                />
              </ScrollAnimation>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={1}></Grid>
      </Grid>
    </div>
  );
};

export default OurServices;
