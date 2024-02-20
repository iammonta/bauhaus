// import React from 'react';

// const CardComponent = ({ image, text, date, description }) => {
//   const cardContainerStyle = {
//     border: 'none',  // Remove the border
//     borderRadius: '0',  // Set borderRadius to 0 for sharp corners
//     overflow: 'hidden',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//     transition: 'transform 0.3s ease-in-out',
//   };

 

//   const cardImageStyle = {
//     width: '100%',
//     height: 'auto',
//     borderBottom: '1px solid #ddd',
//     borderRadius: '0',  // Set borderRadius to 0 for sharp corners
//     maxWidth: '200px', // Set a maximum width for the image
//     maxHeight: '150px', // Set a maximum height for the image
//     objectFit: 'cover', // Maintain image aspect ratio and cover the container
//   };

//   const cardContentStyle = {
//     padding: '15px',
//     fontFamily: 'Titillium Web, sans-serif', // Apply Titillium Web font
//   };

//   const cardTitleStyle = {
//     fontSize: '18px',
//     fontWeight: 'bold',
//     marginBottom: '8px',
//   };

//   const cardDateStyle = {
//     fontSize: '14px',
//     color: '#666',
//     marginBottom: '8px',
//   };

//   const cardDescriptionStyle = {
//     fontSize: '14px',
//     color: '#333',
//   };

//   return (
//     <div style={{ ...cardContainerStyle }} className="card-container">
//       <img src={image} alt="News Image" style={cardImageStyle} className="card-image" />
//       <div style={cardContentStyle} className="card-content">
//         <h2 style={cardTitleStyle} className="card-title">{text}</h2>
//         <p style={cardDateStyle} className="card-date">{date}</p>
//         <p style={cardDescriptionStyle} className="card-description">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default CardComponent;