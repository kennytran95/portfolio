import { Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
export const FooterInfoBox = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  // const six = (number) => {
  //   if (number === 6) {
  //     number = 0;
  //   } else {
  //     number++;
  //   }
  //   return number;
  // };

  // setInterval(() => {
  //   let newNum = six(currentQuote);
  //   setCurrentQuote(newNum);
  // }, 5000);

  const quotes = [
    {
      message: "“Be the change that you wish to see in the world.”",
      author: "― Mahatma Gandhi",
    },
    {
      message:
        "“Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.”",
      author: "― Mark Zuckerberg",
    },
    {
      message:
        "“I have not failed. I've just found 10,000 ways that won't work.”",
      author: "― Thomas A. Edison",
    },
    {
      message:
        "“Success is not final, failure is not fatal: it is the courage to continue that counts.”",
      author: "― Winston S. Churchill",
    },
    {
      message:
        "“If you just work on stuff that you like and you’re passionate about, you don’t have to have a master plan with how things will play out.”",
      author: "― Mark Zuckerberg",
    },
    {
      message:
        "“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”",
      author: "― Albert Einstein",
    },
    {
      message:
        "“No matter how difficult the challenge is, always stay positive and believe in yourself.”",
      author: "― Kobe Bryant",
    },
  ];
  return (
    <Col lg={12}>
      <div className="newsletter-bx ">
        <Row>
          <h3 className="message-pop">{quotes[4].message}</h3>
          <span className="message-author">{quotes[4].author}</span>
        </Row>
      </div>
    </Col>
  );
};
