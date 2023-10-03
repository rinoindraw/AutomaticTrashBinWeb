import React from "react";
import TrackVisibility from "react-on-screen";
import { Container, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import pkmLogo from "../../assets/pkm_logo.png";
import pkmkcLogo from "../../assets/pkmsmall.png";
import gundar from "../../assets/gundarsmall.png";
import kampusMerdeka from "../../assets/kammerdekasmall.png";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "with internet of things-based notification",
    "and using solar energy source",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(1);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <div className="container">
        <Container>
          <Row className="bannerFlex">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <span className="tagline">Road to Pimnas 2023</span>
                    <h1>
                      {`Automatic Trash Bin`}{" "}
                      <span
                        className="txt-rotate"
                        dataPeriod="1000"
                        data-rotate='[ "with internet of things-based notification", "and using solar energy source"]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                    <p>
                      The Automatic Trash Bin with Notification based on the
                      Internet of Things (IoT) and solar energy source is an
                      innovative device capable of detecting and managing three
                      main types of waste: metal, organic, and unorganic, with
                      advanced sensors. It sends real-time notifications via the
                      IoT network when the trash bin is full. Powered by solar
                      panels and with a large capacity, it reduces waste
                      management costs, is suitable for use in various
                      environments, and has solid safety features.
                    </p>
                    <a
                      href="https://www.instagram.com/automatictrashbin_pkmkc/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See More
                      <ArrowRightCircle size={25} />
                    </a>
                    <h2>Supported By</h2>
                    <div className="supportLogo">
                      <img src={pkmkcLogo} alt="" />
                      <img src={gundar} alt="" />
                      <img src={kampusMerdeka} alt="" />
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img className="imgLogoPkm" src={pkmLogo} alt="Logo" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Banner;
