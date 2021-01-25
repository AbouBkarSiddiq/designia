// import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import AboutUs from "../Pages/AboutUs";
// import HomePage from "../Pages/Home";
// import Services from "../Pages/Services";
// import ContactUs from "../Pages/ContactUs";

// const Navigation = () => {
//   return (
//     <div className="header p-6 m-8 text-center text-3xl bg-gray-400 text-white">
//       <div className="bg-blue-300">
//         <Router>
//           <Link to="/" className="animate-pulse hover:bg-blue-400 rounded">
//             Home
//           </Link>
//           &nbsp;&nbsp;
//           <Link
//             to="/Services"
//             className="animate-pulse hover:bg-blue-400 rounded"
//           >
//             Services
//           </Link>
//           &nbsp;&nbsp;
//           <Link
//             to="/ContactUs"
//             className="animate-pulse hover:bg-blue-400 rounded"
//           >
//             ContactUs
//           </Link>
//           &nbsp;&nbsp;
//           <Link
//             to="/AboutUs"
//             className="animate-pulse hover:bg-blue-400 rounded"
//           >
//             AboutUs
//           </Link>
//           &nbsp;&nbsp;
//           <Switch>
//             <Route exact path="/">
//               <HomePage />
//             </Route>
//             <Route path="/services">
//               <Services />
//             </Route>
//             <Route path="/aboutUs">
//               <AboutUs />
//             </Route>
//             <Route path="/contactus">
//               <ContactUs />
//             </Route>
//           </Switch>
//         </Router>
//       </div>
//     </div>
//   );
// };
// export default Navigation;
