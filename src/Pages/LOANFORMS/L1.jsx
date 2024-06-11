// import React, { useState } from "react";
// import axios from "axios";

// function PersonalLoanForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     date: "",
//     amount: "",
//     duration: "",
//     documents: [],
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     setFormData({
//       ...formData,
//       documents: e.target.files,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = new FormData();
//       data.append("name", formData.name);
//       data.append("email", formData.email);
//       data.append("date", formData.date);
//       data.append("amount", formData.amount);
//       data.append("duration", formData.duration);
//       for (let i = 0; i < formData.documents.length; i++) {
//         data.append("documents", formData.documents[i]);
//       }
//       const response = await axios.post(
//         "https://crm-backend-jade.vercel.app/api/v2/user/loan/personalloan",
//         data,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log(response.data);
//       // Handle success (redirect or display confirmation)
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       // Handle error (display error message)
//     }
//   };

//   return (
//     <>
//       <title>Loan Application</title> {/* Add CSS for styling */}{" "}
//       <link rel="stylesheet" href="stylesheet.css" />{" "}
//       <h1>Loan Application Form</h1>{" "}
//       <form id="loanForm" encType="multipart/form-data">
//         {" "}
//         {/* Personal Information */} <label htmlFor="name">Full Name:</label>{" "}
//         <input type="text" id="name" name="name" required="" />
//         <br /> <label htmlFor="email">Email:</label>{" "}
//         <input type="email" id="email" name="email" required="" />
//         <br /> <label htmlFor="phone">Phone Number:</label>{" "}
//         <input type="tel" id="phone" name="phone" required="" />
//         <br /> <label htmlFor="dob">Date of Birth:</label>{" "}
//         <input type="date" id="dob" name="dob" required="" />
//         <br /> <label htmlFor="address">Address:</label>{" "}
//         <textarea
//           id="address"
//           name="address"
//           rows={4}
//           required=""
//           defaultValue={""}
//         />
//         <br /> {/* Employment Information */}{" "}
//         <label htmlFor="employer">Employer:</label>{" "}
//         <input type="text" id="employer" name="employer" required="" />
//         <br /> <label htmlFor="income">Monthly Income ($):</label>{" "}
//         <input type="number" id="income" name="income" required="" />
//         <br /> {/* Loan Details */} {/* Add this inside your form */}{" "}
//         {/* Loan amount dropdown in HTML */}{" "}
//         {/* Loan amount dropdown in HTML */}{" "}
//         <label htmlFor="loanAmount">Loan Amount ($):</label>{" "}
//         <select id="loanAmount" name="loanAmount" required="">
//           {" "}
//           <option value={5000}>₹5,000</option>{" "}
//           <option value={6000}>₹6,000</option>{" "}
//           <option value={7000}>₹7,000</option>{" "}
//           <option value={8000}>₹8,000</option>{" "}
//           <option value={9000}>₹9,000</option>{" "}
//           <option value={11000}>₹11,000</option>{" "}
//           <option value={12000}>₹12,000</option>{" "}
//           <option value={10000}>₹10,000</option>{" "}
//           <option value={13000}>₹13,000</option>{" "}
//           <option value={14000}>₹14,000</option>{" "}
//           <option value={15000}>₹15,000</option>{" "}
//           <option value={16000}>₹16,000</option>{" "}
//           <option value={17000}>₹17,000</option>{" "}
//           <option value={18000}>₹18,000</option>{" "}
//           <option value={19000}>₹19,000</option>{" "}
//           <option value={20000}>₹20,000</option>{" "}
//           <option value={21000}>₹21,000</option>{" "}
//           <option value={22000}>₹22,000</option>{" "}
//           <option value={23000}>₹23,000</option>{" "}
//           <option value={24000}>₹24,000</option>{" "}
//           <option value={25000}>₹25,000</option>{" "}
//           <option value={26000}>₹26,000</option>{" "}
//           <option value={27000}>₹27,000</option>{" "}
//           <option value={28000}>₹28,000</option>{" "}
//           <option value={29000}>₹29,000</option>{" "}
//           <option value={30000}>₹30,000</option>{" "}
//           <option value={31000}>₹31,000</option>{" "}
//           <option value={32000}>₹32,000</option>{" "}
//           <option value={33000}>₹33,000</option>{" "}
//           <option value={34000}>₹34,000</option>{" "}
//           <option value={35000}>₹35,000</option>{" "}
//           <option value={36000}>₹36,000</option>{" "}
//           <option value={37000}>₹37,000</option>{" "}
//           <option value={38000}>₹38,000</option>{" "}
//           <option value={39000}>₹39,000</option>{" "}
//           <option value={40000}>₹40,000</option>{" "}
//           <option value={41000}>₹41,000</option>{" "}
//           <option value={42000}>₹42,000</option>{" "}
//           <option value={43000}>₹43,000</option>{" "}
//           <option value={44000}>₹44,000</option>{" "}
//           <option value={45000}>₹45,000</option>{" "}
//           <option value={46000}>₹46,000</option>{" "}
//           <option value={47000}>₹47,000</option>{" "}
//           <option value={48000}>₹48,000</option>{" "}
//           <option value={49000}>₹49,000</option>{" "}
//           <option value={50000}>₹50,000</option>{" "}
//           <option value={51000}>₹51,000</option>{" "}
//           <option value={52000}>₹52,000</option>{" "}
//           <option value={53000}>₹53,000</option>{" "}
//           <option value={54000}>₹54,000</option>{" "}
//           <option value={55000}>₹55,000</option>{" "}
//           <option value={56000}>₹56,000</option>{" "}
//           <option value={57000}>₹57,000</option>{" "}
//           <option value={58000}>₹58,000</option>{" "}
//           <option value={59000}>₹59,000</option>{" "}
//           <option value={60000}>₹60,000</option>{" "}
//           <option value={61000}>₹61,000</option>{" "}
//           <option value={62000}>₹62,000</option>{" "}
//           <option value={63000}>₹63,000</option>{" "}
//           <option value={64000}>₹64,000</option>{" "}
//           <option value={65000}>₹65,000</option>{" "}
//           <option value={66000}>₹66,000</option>{" "}
//           <option value={67000}>₹67,000</option>{" "}
//           <option value={68000}>₹68,000</option>{" "}
//           <option value={69000}>₹69,000</option>{" "}
//           <option value={70000}>₹70,000</option>{" "}
//           <option value={71000}>₹71,000</option>{" "}
//           <option value={72000}>₹72,000</option>{" "}
//           <option value={73000}>₹73,000</option>{" "}
//           <option value={74000}>₹74,000</option>{" "}
//           <option value={75000}>₹75,000</option>{" "}
//           <option value={76000}>₹76,000</option>{" "}
//           <option value={77000}>₹77,000</option>{" "}
//           <option value={78000}>₹78,000</option>{" "}
//           <option value={79000}>₹79,000</option>{" "}
//           <option value={80000}>₹80,000</option>{" "}
//           <option value={81000}>₹81,000</option>{" "}
//           <option value={82000}>₹82,000</option>{" "}
//           <option value={83000}>₹83,000</option>{" "}
//           <option value={84000}>₹84,000</option>{" "}
//           <option value={85000}>₹85,000</option>{" "}
//           <option value={86000}>₹86,000</option>{" "}
//           <option value={87000}>₹87,000</option>{" "}
//           <option value={88000}>₹88,000</option>{" "}
//           <option value={89000}>₹89,000</option>{" "}
//           <option value={90000}>₹90,000</option>{" "}
//           <option value={91000}>₹91,000</option>{" "}
//           <option value={92000}>₹92,000</option>{" "}
//           <option value={93000}>₹93,000</option>{" "}
//           <option value={94000}>₹94,000</option>{" "}
//           <option value={95000}>₹95,000</option>{" "}
//           <option value={96000}>₹96,000</option>{" "}
//           <option value={97000}>₹97,000</option>{" "}
//           <option value={98000}>₹98,000</option>{" "}
//           <option value={99000}>₹99,000</option>{" "}
//           <option value={100000}>₹100,000</option>{" "}
//         </select>{" "}
//         {/* Add this instead of the input field */}{" "}
//         <label htmlFor="loanDuration">Loan Duration:</label>{" "}
//         <select id="loanDuration" name="loanDuration" required="">
//           {" "}
//           <option value={12}>12 months</option>{" "}
//           <option value={24}>24 months</option>{" "}
//           <option value={36}>36 months</option>{" "}
//           {/* Add more options as needed */}{" "}
//         </select>
//         <br /> {/* Calculated loan rate display */}{" "}
//         <label htmlFor="calculatedRate">
//           Calculated Loan Interest Rate (%):
//         </label>{" "}
//         <span id="calculatedRateValue">--</span>{" "}
//         <p>
//           Interest rates may vary based on the loan amount and other factors.
//           The calculated rate represents an estimate based on your inputs.
//         </p>{" "}
//         {/* Add this where you want to display the total amount */}{" "}
//         <label htmlFor="totalAmount">Total Amount:</label>{" "}
//         <span id="totalAmount">--</span>{" "}
//         <label htmlFor="loanPurpose">Loan Purpose:</label>{" "}
//         <select id="loanPurpose" name="loanPurpose" required="">
//           {" "}
//           <option value="education">Education</option>{" "}
//           <option value="home">Home Purchase</option>{" "}
//           <option value="car">Car Purchase</option>{" "}
//           <option value="Debtconsolidation">Debt consolidation</option>{" "}
//           <option value="Homeimprovements">Home improvements</option>{" "}
//           <option value="Movingcosts">Moving costs</option>{" "}
//           <option value="investing">Investing</option>{" "}
//           <option value="majorpurchases">Major purchases</option>{" "}
//           <option value="renovations">Renovations</option>{" "}
//           <option value="businessventures">business ventures</option>{" "}
//           {/* Add more options as needed */}{" "}
//         </select>
//         <br /> {/* Input field for ID photograph upload */}{" "}
//         <label htmlFor="idPhoto">Upload ID Photograph:</label>{" "}
//         <input
//           type="file"
//           id="idPhoto"
//           name="idPhoto"
//           accept="image/*"
//           required=""
//         />
//         <br /> {/* Submit button */}{" "}
//         <button type="submit">Submit Application</button>{" "}
//       </form>{" "}
//       {/* After the closing </form> tag */} {/* Footer */}{" "}
//       <footer>
//         {" "}
//         <p>© 2023 Your Company Name. All rights reserved.</p>{" "}
//       </footer>{" "}
//       {/* Display a message to the user */} <div id="message" />{" "}
//       {/* Add JavaScript for form submission and styling */}
//     </>
//   );
// }

// export default PersonalLoanForm;

import React, { useState } from "react";
import axios from "axios";

function PersonalLoanForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    amount: "",
    duration: "",
    documents: [],
  });
  const [alertMessage, setAlertMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      documents: e.target.files,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("date", formData.date);
      data.append("amount", formData.amount);
      data.append("duration", formData.duration);
      for (let i = 0; i < formData.documents.length; i++) {
        data.append("documents", formData.documents[i]);
      }
      const response = await axios.post(
        "https://crm-backend-jade.vercel.app/api/v2/user/loan/personalloan",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      setAlertMessage("Form submitted successfully!");
      // Handle success (redirect or display confirmation)
    } catch (error) {
      console.error("Error submitting form:", error);
      setAlertMessage("Error submitting form. Please try again later.");
      // Handle error (display error message)
    }
  };

  return (
    <>
      <title>Personal Loan Application</title>
      {/* Add CSS for styling */}
      <link rel="stylesheet" href="stylesheet.css" />
      <style
        dangerouslySetInnerHTML={{
          __html:
            'body { font-family: Arial, sans-serif; background-color: #f0f0f0; margin: 0; padding: 0; } h1 { text-align: center; margin-top: 20px; color: #333; } form { background-color: #fff; max-width: 500px; margin: 20px auto; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); } label { display: block; font-weight: bold; margin-top: 10px; } input[type="text"], input[type="email"], input[type="tel"], input[type="date"], input[type="number"], select, textarea { width: 100%; padding: 10px; margin-top: 5px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 3px; font-size: 16px; } input[type="file"] { margin-top: 5px; } button[type="submit"] { background-color: #007BFF; color: #fff; border: none; padding: 10px 20px; font-size: 18px; border-radius: 3px; cursor: pointer; } button[type="submit"]:hover { background-color: #0056b3; } #message { text-align: center; margin-top: 20px; color: #333; } /* Footer Styles */ footer { text-align: center; padding: 10px; background-color: #333; color: #fff; font-size: 14px; } ',
        }}
      />
      <h1>Personal Loan Application Form</h1>{" "}
      <form id="loanForm" encType="multipart/form-data">
        {/* Personal Information */}
        <label htmlFor="name">Full Name:</label>{" "}
        <input type="text" id="name" name="name" required="" />
        <br />
        <label htmlFor="email">Email:</label>{" "}
        <input type="email" id="email" name="email" required="" />
        <br />
        {/* User ID - We can fetch this from the session or context */}
        {/* Date - Automatically generated by the server */}
        <label htmlFor="amount">Loan Amount (₹):</label>{" "}
        <input type="number" id="amount" name="amount" required="" />
        <br />
        <label htmlFor="duration">Loan Duration (in months):</label>{" "}
        <input type="number" id="duration" name="duration" required="" />
        <br />
        {/* Document URL - This will be generated after file upload */}
        <label htmlFor="document">Upload ID Photograph:</label>{" "}
        <input
          type="file"
          id="document"
          name="document"
          accept="image/*"
          required=""
        />
        <br />
        {/* Submit button */}
        <button type="submit">Submit Application</button>{" "}
      </form>{" "}
      {/* After the closing </form> tag */}
      {/* Footer */}
      <footer>
        {" "}
        <p>© 2023 Your Company Name. All rights reserved.</p>{" "}
      </footer>{" "}
      {/* Display a message to the user */}
      <div id="message" />{" "}
      {/* Add JavaScript for form submission and styling */}
    </>
  );
}

export default PersonalLoanForm;
