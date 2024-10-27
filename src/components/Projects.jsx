import { Tab, TabContent } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { Navbar, Nav} from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
export const Projects =() => {
    const projects =[
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
          },
    ];

return (
    <section className="project" id="project" >
        <container>
            <Row >
                <Col >
               <h2>Projects</h2>
               <p>I have developed various web projects, including a responsive e-commerce site with React and Node.js, a real-time chat app using Socket.io, and a CMS with Angular and MongoDB. My work highlights my ability to create functional, user-friendly, and visually appealing applications.</p>
                  <Tab.Container id="projects-tab" defaultActiveKey="first" >
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content >
                  <Tab.Pane eventKey="first">
                    <Row >
                     {
                        projects.map((project,index)=>
                        {
                            return (<ProjectCard
                              key={index}
                              {...project}
                               />)
                        })
                     }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">Project 2</Tab.Pane>
                  <Tab.Pane eventKey="third">Project 3</Tab.Pane>
                  </Tab.Content>
                  </Tab.Container>
                </Col>
            </Row>
        </container>
      <img  className="background-image-right"  src={colorSharp2} /> 
    </section>
)
}