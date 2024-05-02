// import React, { useState } from 'react';

// const Form = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     middleName: '',
//     homeAddress: '',
//     postalCode: '',
//     city: '',
//     settlement: '',
//     island: '',
//     emailAddress: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here, for example, sending data to a backend API
//     console.log(formData);
//   };

//   return (
// <>


// <section className="cont px-[2rem]">


// <h1 className='text-[2rem]'> My Account</h1>


//     <div className="bg-white  m ">
//       <h2 className="text-3xl font-semibold mb-4">User Profile</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
//             <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-blue-500 rounded-md px-3 py-2" />
//           </div>
//           <div>
//             <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
//             <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-blue-500 rounded-md px-3 py-2" />
//           </div>
//           <div>
//             <label htmlFor="middleName" className="block text-sm font-medium text-gray-700">Middle Name</label>
//             <input type="text" id="middleName" name="middleName" value={formData.middleName} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-blue-500 rounded-md px-3 py-2" />
//           </div>
//           <div>
//             <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">Email Address</label>
//             <input type="email" id="emailAddress" name="emailAddress" value={formData.emailAddress} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-blue-500 rounded-md px-3 py-2" />
//           </div>
//           <div>
//             <label htmlFor="homeAddress" className="block text-sm font-medium text-gray-700">Home Address</label>
//             <input type="text" id="homeAddress" name="homeAddress" value={formData.homeAddress} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-blue-500 rounded-md px-3 py-2" />
//           </div>
//           <div>
//             <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
//             <input type="text" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-blue-500 rounded-md px-3 py-2" />
//           </div>
//           <div>
//             <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
//             <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-blue-500 rounded-md px-3 py-2" />
//           </div>
//           <div>
//             <label htmlFor="settlement" className="block text-sm font-medium text-gray-700">Settlement</label>
//             <input type="text" id="settlement" name="settlement" value={formData.settlement} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-blue-500 rounded-md px-3 py-2" />
//           </div>
          
//         </div>
//         <div className="mt-6">
//           <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>

//     </section>
//     </>

//   );
// };

// export default Form;



import React, { useState } from 'react';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col">
      <div className="flex border-b">
        <button
          className={`py-2 px-4 ${
            activeTab === 'profile'
              ? 'border-b-2 border-b-red-400 font-semibold'
              : 'bg-transparent'
          }`}
          onClick={() => handleTabClick('profile')}
        >
          Profile
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === 'wallet'
              ? 'border-b-2 border-b-red-400 font-semibold'
              : 'bg-transparent'
          }`}
          onClick={() => handleTabClick('wallet')}
        >
          Wallet
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === 'settings'
              ? 'border-b-2 border-b-red-400 font-semibold'
              : 'bg-transparent'
          }`}
          onClick={() => handleTabClick('settings')}
        >
          Settings
        </button>
      </div>
      <div className="p-4">
        {activeTab === 'profile' && <ProfileTab />}
        {activeTab === 'wallet' && <WalletTab />}
        {activeTab === 'settings' && <SettingsTab />}
      </div>
    </div>
  );
};

const ProfileTab = () => {
  return <div>


<div className="bg-white  m ">
       <h2 className="text-3xl font-semibold mb-4">User Profile</h2>
      <form >
         <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <input type="text" id="firstName" name="firstName"   className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-blue-500 rounded-md px-3 py-2" />
         </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input type="text" id="lastName" name="lastName"  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-blue-500 rounded-md px-3 py-2" />           </div>
           <div>
             <label htmlFor="middleName" className="block text-sm font-medium text-gray-700">Middle Name</label>
             <input type="text" id="middleName" name="middleName"   className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-blue-500 rounded-md px-3 py-2" />
           </div>
           <div>
             <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">Email Address</label>
             <input type="email" id="emailAddress" name="emailAddress"   className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-blue-500 rounded-md px-3 py-2" />
           </div>
          <div>
             <label htmlFor="homeAddress" className="block text-sm font-medium text-gray-700">Home Address</label>
           <input type="text" id="homeAddress" name="homeAddress"   className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-blue-500 rounded-md px-3 py-2" />
           </div>
           <div>
             <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
             <input type="text" id="postalCode" name="postalCode"   className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-blue-500 rounded-md px-3 py-2" />
           </div>
           <div>
             <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
             <input type="text" id="city" name="city"   className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-blue-500 rounded-md px-3 py-2" />
         </div>
           <div>
             <label htmlFor="settlement" className="block text-sm font-medium text-gray-700">Settlement</label>
            <input type="text" id="settlement" name="settlement"   className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-blue-500 rounded-md px-3 py-2" />
           </div>
          
         </div>
         <div className="mt-6">
          <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
             Submit
           </button>
        </div>
     </form>
    </div>

    
  </div>;
};

const WalletTab = () => {
  return <div>This is the Wallet tab.</div>;
};

const SettingsTab = () => {
  return <div>This is the Settings tab.</div>;
};

export default TabComponent;