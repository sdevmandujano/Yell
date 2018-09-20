import React, { Component } from "react";
import {
    Grid,
    Row,
    Col,
    Button,
  } from "react-bootstrap";
import {Modal} from "react-bootstrap";
import { UserCard } from "../../components/UserCard/UserCard.jsx";
import { RateCard } from "../../components/RateCard/RateCard";
import { CommentsPanel } from "../../components/CommentsPanel/CommentsPanel";
import { Card } from "../../components/Card/Card.jsx";
import imagen from "../../assets/img/sidebarback.jpg";
import 'react-widgets/dist/css/react-widgets.css';
import shotzzy from "../GamePage/shotzzy.jpg"
import bubu from "../GamePage/bubudubu.jpg";
import frosty from "../GamePage/frosty.png";
import snipedown from "../GamePage/snipedown.jpeg";
import "../../views/GamePage/Gamepage.css";

export class GamePage extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }    

    render() {
        return (
 
<div className="content">

<Grid fluid>
      <Row>
          <h1>Top Jugadores</h1>
      <Col md={3}>
      <UserCard
                bgImage={imagen}
                avatar={shotzzy}
                name="Shotzzy"
                userName="Shotzzy"
                description={
                  <span>
                    Twitch
                    <br />
                    Steam
                    <br />
                    Calificacion
                  </span>
                }
                socials={
                    <div>
                      <Button simple onClick={this.handleShow}>
                      Detalles
                      </Button>
                    </div>
                  }
        />
        </Col>

            <Col md={3}>
              <UserCard
                bgImage={imagen}
                avatar={bubu}
                name="Bubu dubu"
                userName="Bubu dubu"
                description={
                  <span>
                    Twitch
                    <br />
                    Steam
                    <br />
                    Calificacion
                  </span>
                }
              />
            </Col>

            <Col md={3}>
              <UserCard
                bgImage={imagen}
                avatar={snipedown}
                name="Snipedown"
                userName="Snipedown"
                description={
                  <span>
                    Twitch
                    <br />
                    Steam
                    <br />
                    Calificacion
                  </span>
                }
              />
            </Col>

            <Col md={3}>
              <UserCard
                bgImage={imagen}
                avatar={frosty}
                name="Frosty"
                userName="Frosty"
                description={
                  <span>
                    Twitch
                    <br />
                    Steam
                    <br />
                    Calificacion
                  </span>
                }
              />
            </Col>
      </Row>

      <Row>
          <h1>Jugadores</h1>
      <Col md={3}>
              <UserCard
                bgImage={imagen}
                avatar={shotzzy}
                name="Shotzzy"
                userName="Shotzzy"
                description={
                  <span>
                    Twitch
                    <br />
                    Steam
                    <br />
                    Calificacion
                  </span>
                }
              />
            </Col>

            <Col md={3}>
              <UserCard
                bgImage={imagen}
                avatar={bubu}
                name="Bubu dubu"
                userName="Bubu dubu"
                description={
                  <span>
                    Twitch
                    <br />
                    Steam
                    <br />
                    Calificacion
                  </span>
                }
              />
            </Col>

            <Col md={3}>
              <UserCard
                bgImage={imagen}
                avatar={snipedown}
                name="Snipedown"
                userName="Snipedown"
                description={
                  <span>
                    Twitch
                    <br />
                    Steam
                    <br />
                    Calificacion
                  </span>
                }
              />
            </Col>

            <Col md={3}>
              <UserCard
                bgImage={imagen}
                avatar={frosty}
                name="Frosty"
                userName="Frosty"
                description={
                  <span>
                    Twitch
                    <br />
                    Steam
                    <br />
                    Calificacion
                  </span>
                }
              />
            </Col>          
      </Row>
</Grid>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Jugador</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          
          <Card
    title="Calificación"
    content={
        <RateCard />
    }
           />

<Card
  title="Opiniones"
  content={
<CommentsPanel />
  }
/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
</div>
        );
    }
}