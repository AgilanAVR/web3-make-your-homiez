// import React from "react";
// import style from './Error.module.css';


// const Error = ({error}) => {
//   console.log(error);
//   return (
//     <div className={style.error}>
//       <div className={style.error_box}>
//         <h1>Please Fix This Error & Reload Browser</h1>
//         {error}
//       </div>
//     </div>
//   )
// };

// export default Error;


import React from "react";

const Error = ({ error }) => {
  const styles = {
    error: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      height: '100px', // Full viewport height
      width: '100vw', // Full viewport width
      backgroundColor: 'transparent',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999, // Ensure it stays on top of other elements
    },
    errorBox: {
      textAlign: 'center',
      backgroundColor: '#fff', // White background for the error box
      padding: '20px',
      borderRadius: '8px', // Rounded corners
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow for better visibility
      maxWidth: '600px', // Max width for responsiveness
      width: '100%', // Full width within the max width
    },
    errorMessage: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333', // Text color
      marginBottom: '10px', // Margin below the main message
    },
    errorDetails: {
      fontSize: '16px',
      color: '#666', // Lighter text color for error details
    },
  };

  return (
    <div style={styles.error}>
      <div style={styles.errorBox}>
        <h1 style={styles.errorMessage}>Create an Account</h1>
        <div style={styles.errorDetails}>{error}</div>
      </div>
    </div>
  );
};

export default Error;
