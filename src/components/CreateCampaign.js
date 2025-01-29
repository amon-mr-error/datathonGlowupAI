  // import React, { useState } from "react";

  // const CreateCampaign = () => {
  //   const [platform, setPlatform] = useState("");
  //   const [campaignName, setCampaignName] = useState("");
  //   const [dateTime, setDateTime] = useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log({ platform, campaignName, dateTime });
  //     alert("Campaign created successfully!");
  //   };

  //   return (
  //     <div className="p-6">
  //       <h2 className="text-2xl font-bold">Create Campaign</h2>
  //       <form className="mt-4" onSubmit={handleSubmit}>
  //         <label className="block mb-2">
  //           Platform:
  //           <select
  //             value={platform}
  //             onChange={(e) => setPlatform(e.target.value)}
  //             className="block w-full mt-1 border rounded p-2"
  //           >
  //             <option value="">Select a platform</option>
  //             <option value="Facebook">Facebook</option>
  //             <option value="Instagram">Instagram</option>
  //             <option value="Twitter">Twitter</option>
  //           </select>
  //         </label>

  //         <label className="block mb-2">
  //           Campaign Name:
  //           <input
  //             type="text"
  //             value={campaignName}
  //             onChange={(e) => setCampaignName(e.target.value)}
  //             className="block w-full mt-1 border rounded p-2"
  //           />
  //         </label>

  //         <label className="block mb-2">
  //           Date & Time:
  //           <input
  //             type="datetime-local"
  //             value={dateTime}
  //             onChange={(e) => setDateTime(e.target.value)}
  //             className="block w-full mt-1 border rounded p-2"
  //           />
  //         </label>

  //         <button
  //           type="submit"
  //           className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
  //         >
  //           Submit
  //         </button>
  //       </form>
  //     </div>
  //   );
  // };

  // export default CreateCampaign;

  import React, { useState } from "react";

  const CreateCampaign = () => {
    const [platform, setPlatform] = useState("");
    const [campaignName, setCampaignName] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

      try {
        const response = await fetch('http://localhost:5000/api/campaigns', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ platform, campaignName, dateTime })
        });

        if (!response.ok) {
          throw new Error('Failed to create campaign');
        }

        const data = await response.json();
        alert("Campaign created successfully!");
        
        // Clear form
        setPlatform("");
        setCampaignName("");
        setDateTime("");
      } catch (error) {
        console.error('Error creating campaign:', error);
        alert("Failed to create campaign. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold">Create Campaign</h2>
        <form className="mt-4" onSubmit={handleSubmit}>
          <label className="block mb-2">
            Platform:
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="block w-full mt-1 border rounded p-2"
              required
            >
              <option value="">Select a platform</option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
              <option value="Twitter">Twitter</option>
            </select>
          </label>
          <label className="block mb-2">
            Campaign Name:
            <input
              type="text"
              value={campaignName}
              onChange={(e) => setCampaignName(e.target.value)}
              className="block w-full mt-1 border rounded p-2"
              required
            />
          </label>
          <label className="block mb-2">
            Date & Time:
            <input
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              className="block w-full mt-1 border rounded p-2"
              required
            />
          </label>
          <button
            type="submit"
            className={`mt-4 px-4 py-2 rounded text-white ${
              loading 
                ? 'bg-green-300 cursor-not-allowed' 
                : 'bg-green-500 hover:bg-green-600'
            }`}
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Submit'}
          </button>
        </form>
      </div>
    );
  };

  export default CreateCampaign;
