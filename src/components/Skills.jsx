import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
export const Skills =() =>{
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return (
        <section className="skill" id="skills">
            <container>
                <Row> <Col>
                <div className="skill-bx">
                <h2>Skills</h2>
                <p>I am a skilled web developer with expertise in HTML, CSS, and JavaScript for creating responsive interfaces. Proficient in React and Angular for dynamic applications, and experienced with Node.js, Express, and databases like MongoDB and SQL for robust back-end development. I excel in integrating APIs and using Git for version control, ensuring efficient and collaborative project workflows.</p>
                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item" >
                <img src={meter1} alt="Image" />
                <h5>Web Development</h5>
                </div>
                <div className="item" >
                <img src={meter2} alt="Image" />
                <h5>Coding</h5>
                </div>
                <div className="item" >
                <img src={meter3} alt="Image" />
                <h5>Logo Design</h5>
                </div>
                <div className="item" >
                <img src={meter1} alt="Image" />
                <h5>Web Development</h5>
                </div>
                </Carousel>
                </div>
                </Col>
                </Row>
            </container>
            <img className="background-image-left" src={colorSharp} />
        </section>
      )
}