// // import React from "react";
// // import { useLocation } from "react-router-dom";

// // const HomePage = () => {
// //   const location = useLocation(); // Access state from router
// //   const { userData } = location.state || {}; // Destructure userData from state

// //   return (
// //     <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-4">
// //       <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8 text-center">
// //         <h1 className="text-3xl font-bold text-blue-800 mb-4">Welcome to UIDAI Portal</h1>
// //         {userData ? (
// //           <>
// //             <p className="text-lg text-blue-700">User Info:</p>
// //             <p className="text-lg font-medium text-blue-900">{userData.username}</p>
// //             {/* Render other user-specific information here */}
// //           </>
// //         ) : (
// //           <p className="text-blue-600">No user data available.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default HomePage;

// import React from "react";
// import { useLocation } from "react-router-dom";

// const HomePage = () => {
//   const location = useLocation(); // Access state from router
//   const { userData } = location.state || {}; // Destructure userData from state

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 flex flex-col items-center justify-center p-6">
//       <div className="bg-white shadow-xl rounded-2xl w-full max-w-lg p-10 text-center">
//         <h1 className="text-4xl font-semibold text-blue-900 mb-6">Welcome to UIDAI Portal</h1>
//         <p className="text-xl font-medium text-blue-800 mb-4">
//           Your Unique Identity is Our Priority
//         </p>

//         {userData ? (
//           <>
//             <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-6">
//               <p className="text-lg text-blue-700">User Info:</p>
//               <p className="text-xl font-semibold text-blue-900">{userData.username}</p>
//             </div>
//             <p className="text-lg text-blue-600">Additional details will be provided soon.</p>
//           </>
//         ) : (
//           <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg mt-6">
//             <p>No user data available. Please log in to access your details.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const HomePage = () => {
//   const location = useLocation();
//   const { userData } = location.state || {};

//   // Initialize user data state
//   const [loggedInUser, setLoggedInUser] = useState(userData);

//   // Simulate fetching user data from a database (replace with actual API call)
//   useEffect(() => {
//     // If userData is available, store it in local storage
//     if (userData) {
//       localStorage.setItem('userData', JSON.stringify(userData));
//     } else {
//       // Retrieve user data from local storage if available
//       const storedUserData = localStorage.getItem('userData');
//       if (storedUserData) {
//         setLoggedInUser(JSON.parse(storedUserData));
//       }
//     }
//   }, [userData]);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 flex flex-col items-center justify-center p-6">
//       <div className="bg-white shadow-xl rounded-2xl w-full max-w-lg p-10 text-center">
//         <h1 className="text-4xl font-semibold text-blue-900 mb-6">Welcome to UIDAI Portal</h1>
//         <p className="text-xl font-medium text-blue-800 mb-4">
//           Your Unique Identity is Our Priority
//         </p>

//         {loggedInUser ? (
//           <>
//             <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-6">
//               <p className="text-lg text-blue-700">User Info:</p>
//               <p className="text-xl font-semibold text-blue-900">{loggedInUser.username}</p>
//               <img src={loggedInUser.photoUrl} alt="User Photo" className="w-24 h-24 rounded-full mx-auto" />
//             </div>
//             <p className="text-lg text-blue-600">Additional details will be provided soon.</p>
//           </>
//         ) : (
//           <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg mt-6">
//             <p>No user data available. Please log in to access your details.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// // Import the default Aadhaar photo from the local directory
// import adharPhoto from '../components/photo/adhar.jpg';  // Adjust this if the file path differs

// const HomePage = () => {
//   const location = useLocation();
//   const { userData } = location.state || {};  // Destructure userData from state

//   // Initialize user data state
//   const [loggedInUser, setLoggedInUser] = useState(userData);

//   // Simulate fetching user data from a database (replace with actual API call)
//   useEffect(() => {
//     // If userData is available, store it in local storage
//     if (userData) {
//       localStorage.setItem('userData', JSON.stringify(userData));
//     } else {
//       // Retrieve user data from local storage if available
//       const storedUserData = localStorage.getItem('userData');
//       if (storedUserData) {
//         setLoggedInUser(JSON.parse(storedUserData));
//       }
//     }
//   }, [userData]);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 flex flex-col items-center justify-center p-6">
//       <div className="bg-white shadow-xl rounded-2xl w-full max-w-lg p-10 text-center">
//         <h1 className="text-4xl font-semibold text-blue-900 mb-6">Welcome to UIDAI Portal</h1>
//         <p className="text-xl font-medium text-blue-800 mb-4">
//           Your Unique Identity is Our Priority
//         </p>

//         {loggedInUser ? (
//           <>
//             <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-6">
//               <p className="text-lg text-blue-700">User Info:</p>
//               <p className="text-xl font-semibold text-blue-900">{loggedInUser.username}</p>
//               {/* If userData has a photoUrl, use it; otherwise, use default 'adhar.jpg' */}
//               <img
//                 src={loggedInUser.photoUrl || adharPhoto}  // If photoUrl exists, use it; else fallback to adhar.jpg
//                 alt="User Photo"
//                 className="w-40 h-40 object-cover mx-auto" // Customize the image display (square shape)
//               />
//             </div>
//             <p className="text-lg text-blue-600">Additional details will be provided soon.</p>
//           </>
//         ) : (
//           <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg mt-6">
//             <p>No user data available. Please log in to access your details.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Import the default Aadhaar photo from the local directory
import adharPhoto from '../components/photo/adhar.jpg';  // Adjust this if the file path differs

const HomePage = () => {
  const location = useLocation();
  const { userData } = location.state || {};  // Destructure userData from state

  // Initialize user data state
  const [loggedInUser, setLoggedInUser] = useState(userData);

  // Simulate fetching user data from a database (replace with actual API call)
  useEffect(() => {
    // If userData is available, store it in local storage
    if (userData) {
      localStorage.setItem('userData', JSON.stringify(userData));
    } else {
      // Retrieve user data from local storage if available
      const storedUserData = localStorage.getItem('userData');
      if (storedUserData) {
        setLoggedInUser(JSON.parse(storedUserData));
      }
    }
  }, [userData]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-lg p-10 text-center">
        <h1 className="text-4xl font-semibold text-blue-900 mb-6">Welcome to UIDAI Portal</h1>
        <p className="text-xl font-medium text-blue-800 mb-4">
          Your Unique Identity is Our Priority
        </p>

        {loggedInUser ? (
          <>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-6">
              <p className="text-lg text-blue-700">User Info:</p>
              <p className="text-xl font-semibold text-blue-900">{loggedInUser.username}</p>
              {/* Display the Aadhaar photo with actual size */}
              <div className="mt-4">
                <img
                  src={loggedInUser.photoUrl || adharPhoto} // If photoUrl exists, use it; else fallback to adhar.jpg
                  alt="Aadhaar Photo"
                  className="max-w-full max-h-full object-contain mx-auto" // Ensures the image shows at its original size
                />
              </div>
            </div>
            <p className="text-lg text-blue-600">Additional details will be provided soon.</p>
          </>
        ) : (
          <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg mt-6">
            <p>No user data available. Please log in to access your details.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
