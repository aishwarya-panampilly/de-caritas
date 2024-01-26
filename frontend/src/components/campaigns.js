import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { donate } from "./SupportTokenWrapper";



const CampaignCard = ({
  imageSrc,
  name,
  description,
  organisation,
  address,
  onDonate,
}) => {
  const [donationAmount, setDonationAmount] = useState("");
  


  const handleDonationSubmit = (event) => {
    event.preventDefault();
    const recipient = address; 
    onDonate(recipient,donationAmount);
    setDonationAmount("");
  };

  return (
    
    <div className="campaign-card bg-black hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"   >
      <Card className="bg-black  text-white" >
        <Card.Img variant="top" src={imageSrc} />
        <Card.Body>
          <Card.Title className="text-500 text-2xl font-semibold">{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{organisation}</Card.Text>
          <Card.Text className="text-500">Wallet Address: 
          </Card.Text>
          <Card.Text className="text-300"> 
          {address}</Card.Text>
          <form onSubmit={handleDonationSubmit}>
            <div className="form-group mt-4">
              <label htmlFor="donationAmount" className="text-white-500">
                Enter donation amount:
              </label>
              <input
                type="text"
                className="form-control"
                id="donationAmount"
                value={donationAmount}
                onChange={(event) => setDonationAmount(event.target.value)}
              />
            </div>
            <Button
              variant="primary"
              onClick={handleDonationSubmit}
              style={{ backgroundColor: 'white', color: 'black' }}
              className="mt-3 hover:bg-green-600"
            >
              Donate
            </Button>
          </form>
        </Card.Body>
      </Card>
    </div>
   
  );
};


const campaigns = [
  {
    name: "campaign 1",
    description: "  ",
    organisation: "id : 147",
    address: "0x2Cb96CDb27e6604c8daDB0F22fA3f3b8f39e1182",
    imageSrc: "",
  },
  {
    name: "campaign 1",
    description: " ",
    organisation: "id : 147",
    address: "0xee6E56276328b33C6250db0252125A8BaD0E38DE",
    imageSrc: "",
  }
];

const Campaigns = () => {
  const [donated, setDonated] = useState(false);
  const [connected, setConnected] = useState(false);
  const connectToMetaMask = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        console.log('Connected to MetaMask!', accounts);
        setConnected(true);
      } else {
        console.error('MetaMask not found. Please install MetaMask to use this application.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDonate = async (recipient, amount) => {
    try {
      
      const donationResult = await donate(recipient,amount);
      if (donationResult) {
        alert("Donation successful!");
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="min-h-screen bg-cover bg-center relative flex flex-col justify-center items-center" style={{ backgroundColor: 'white' }}>
      <div className="container mx-auto py-10">
        <button
          className=" m-3 btn btn-primary transition duration-300 ease-in-out transform hover:scale-105" style={{ backgroundColor: 'black', color: 'white' }}
          onClick={connectToMetaMask}
        >
          Connect to MetaMask
        </button>
        <div className="campaign-card container mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 text-center" style={{position: "relative", left: '25%'}}>
        {campaigns.map((campaign, index) => (
          <div key={index} className="w-full px-4 mb-8" >
            <CampaignCard {...campaign} onDonate={handleDonate} />
          </div>
          
        ))}
      </div>
      </div>
    </div>
  );
};

export default Campaigns;
