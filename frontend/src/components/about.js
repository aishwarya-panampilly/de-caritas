import React from 'react';
import Card from 'react-bootstrap/Card';


const About = () => {
  return (
    <div className="h-screen bg-cover bg-center relative flex flex-col justify-center items-center" style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <div className="text-center font-semibold pb-8" style={{ color: 'black', fontSize : '40px' }}>About Us</div>

      <div className="bg-white  p-5 text-center"  >
        <Card>
          <Card.Body>
            <p className="mb-5">
              de-caritas
            </p>
            <p>
            A Blockchain based donation traceability framework
            </p>
          </Card.Body>
        </Card>

        <h3 className="text-2xl font-semibold text-green-600 mt-8">Donate to make a difference</h3>
      </div>
    </div>
  );
};

export default About;
