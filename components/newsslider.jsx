import React from 'react';
import 'typeface-titillium-web';
import 'typeface-raleway';

const CardComponent = ({ image, text, date, description }) => {
  const cardContainerStyle = {
    border: 'none',
    borderRadius: '1',
    overflow: 'hidden',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
    width: '100%',
    marginBottom: '30px',
    marginRight: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'box-shadow 0.3s ease',
  };

  const cardContainerHoverStyle = {
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
    transform: 'scale(1.08)',
    position: 'relative',
    outline: '2px solid black', // Add outline style
  };

  const cardImageStyle = {
    width: '100%',
    height: 'auto',
    borderBottom: '1px solid #ddd',
    borderRadius: '0',
    objectFit: 'cover',
  };

  const cardContentStyle = {
    padding: '20px',
    fontFamily: 'Titillium Web, sans-serif',
  };

  const cardTitleStyle = {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '12px',
    position: 'relative',
    cursor: 'pointer', // Adding cursor pointer for hover effect
  };

  const cardTitleLineHoverStyle = {
    position: 'absolute',
    left: 0,
    bottom: '-4px', // Adjust according to your design
    width: '100%',
    height: '2px',
    backgroundColor: '#000',
    transformOrigin: 'left',
    transition: 'transform 0.3s ease',
    transform: 'scaleX(0)', // Initially no line
  };

  const cardDateStyle = {
    fontSize: '16px',
    color: '#666',
    marginBottom: '15px',
  };

  const cardDescriptionStyle = {
    fontSize: '16px',
    color: '#333',
  };

  const [isHovered, setIsHovered] = React.useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      style={{
        ...cardContainerStyle,
        ...(isHovered && cardContainerHoverStyle),
      }}
      className="card-container"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <img src={image} alt="News Image" style={cardImageStyle} className="card-image" />
      <div style={cardContentStyle} className="card-content">
        <h2 style={cardTitleStyle} className="card-title">
          {text}
          <div
            style={{ ...cardTitleLineHoverStyle, transform: isHovered ? 'scaleX(1)' : 'scaleX(0)' }}
            className="card-title-line"
          ></div>
        </h2>
        <p style={cardDateStyle} className="card-date">{date}</p>
        <p style={cardDescriptionStyle} className="card-description">{description}</p>
      </div>
    </div>
  );
};

const Newsslider = () => {
  const fakeData = [
    {
      image: "/news1.png",
      text: 'Top 10 Tips for Your Kitchen Interior Design',
      date: '2024-01-23',
      description: 'A faceting effect livens up and...',
    },
    {
      image: "/news2.png",
      text: 'The Golden Ratio Rules for Best 2D Sketch',
      date: '2024-01-24',
      description: 'A faceting effect livens up and...',
    },
    {
      image: "/news3.png",
      text: 'Use Pastel Colors & Natural Materials',
      date: '2024-01-25',
      description: 'A faceting effect livens up and...',
    },
  ];

  return (
    <section className="h-[700px] flex flex-col items-center gap-1 mt-20 " style={{ backgroundColor: '#fff', fontFamily: 'titillium-web' }}>
      <div className="container mx-auto p-4 ">
        <p className="lg:text-4xl md:text-xl sm:text-base pt-14" style={{ fontFamily: 'Titillium Web, sans-serif' }}>Read our latest news</p>
        <div className="flex items-center justify-between mt-4">
           <button className="bg-blue-500 text-white px-4 py-2" style={{ backgroundColor: '#1A1A1A', borderRadius: '0' }}>View All</button> 
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="flex justify-center">
          {fakeData.map((item, index) => (
            <CardComponent
              key={index}
              image={item.image}
              text={item.text}
              date={item.date}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Newsslider;
