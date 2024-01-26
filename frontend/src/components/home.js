import React from 'react';


const Homepage = () => {
  const handleSignup = () => {
   
  };

  return (
    <div className="bg-cover bg-center relative h-screen" style={{  backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundColor: '#fffff' , minHeight: '100vh' }}>
      <h1 className="text-black text-center">de-caritas</h1>
      <button onClick={handleSignup} className="btn btn-primary mt-1" style={{ backgroundColor: 'darkgreen', color: 'white' }}>
        Join Waitlist
      </button>
    </div>
  );
};

export default Homepage;

