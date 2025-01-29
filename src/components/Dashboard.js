// import React from "react";


// import { Link } from "react-router-dom";    
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './Card'; // Update this import to your actual UI library
// import { BookOpen, Video, Share2 } from 'react-feather'; // Make sure these icons are imported if you are using react-feather or any other icon library

// const Dashboard = () => {
//     return (
//       <div className="p-6">
  
//         {/* Latest Content Performance Card */}
//         <div className="mt-6">
//           <Card className="bg-white shadow-sm">
//             <CardHeader>
//               <CardTitle>Active Campaigns</CardTitle>
//               <CardDescription>Recent blog posts, videos, and LinkedIn updates</CardDescription>
//             </CardHeader>
            // <CardContent>
            //   <div className="space-y-4">
            //     {[
            //       {
            //         title: "Sustainable Skincare: Behind the Scenes",
            //         type: "Blog Post",
            //         views: "3.2K",
            //         engagement: "428",
            //         trend: "+15%"
            //       },
            //       {
            //         title: "Our Eco-Friendly Production Process",
            //         type: "Video",
            //         views: "2.8K",
            //         engagement: "356",
            //         trend: "+12%"
            //       },
            //       {
            //         title: "Customer Success Story: Sarah's Glow Journey",
            //         type: "LinkedIn",
            //         views: "1.5K",
            //         engagement: "245",
            //         trend: "+8%"
            //       }
            //     ].map((content, index) => (
            //       <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
            //         <div className="flex items-center space-x-4">
            //           {content.type === "Blog Post" && <BookOpen className="h-6 w-6 text-blue-600" />}
            //           {content.type === "Video" && <Video className="h-6 w-6 text-blue-600" />}
            //           {content.type === "LinkedIn" && <Share2 className="h-6 w-6 text-blue-600" />}
            //           <div>
            //             <p className="font-medium text-gray-900">{content.title}</p>
            //             <p className="text-sm text-gray-600">{content.type}</p>
            //           </div>
            //         </div>
            //         <div className="flex items-center space-x-4">
            //           <div className="text-right">
            //             <p className="text-sm font-medium text-gray-900">{content.views} views</p>
            //             <p className="text-sm text-gray-600">{content.engagement} engagements</p>
            //           </div>
            //           <span className="text-green-600 text-sm font-medium">{content.trend}</span>
            //         </div>
            //       </div>
            //     ))}
            //   </div>
            // </CardContent>
//           </Card>
//         </div>
  
        // {/* Upcoming Campaigns Card */}
        // <div className="mt-6">
        //   <Card className="bg-white shadow-sm">
        //     <CardHeader>
        //       <CardTitle>Upcoming Campaigns</CardTitle>
        //       <CardDescription>Campaigns planned for the upcoming week</CardDescription>
        //     </CardHeader>
        //     <CardContent>
        //       <ul className="list-disc list-inside">
        //         <li>Email Campaign - New Product Launch, Thursday, 10:00 AM</li>
        //       </ul>
        //     </CardContent>
        //   </Card>
        // </div>
  
//         {/* Create Campaign Button */}
//         <Link to="/create-campaign" className="mr-4 text-blue-500 hover:underline">
//         <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
//           Create Campaign
//         </button>
//         </Link>

  
//       </div>
//     );
//   };


// export default Dashboard;

//components/Dashboard.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './Card';
import { BookOpen, Video, Share2 } from 'react-feather'; // Make sure these icons are imported if you are using react-feather or any other icon library



const Dashboard = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/campaigns');
        const data = await response.json();
        setCampaigns(data);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <div className="p-6">
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle>Active Campaigns</CardTitle>
          <CardDescription>Live campaigns running across platforms</CardDescription>
        </CardHeader>

        <CardContent>
          <ul className="list-disc list-inside">
            {campaigns.map((campaign) => (
              <li key={campaign._id}>
                {campaign.campaignName} - {campaign.platform} - {campaign.dateTime}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Sustainable Skincare: Behind the Scenes",
                    type: "Blog Post",
                    views: "3.2K",
                    engagement: "428",
                    trend: "+15%"
                  },
                  {
                    title: "Our Eco-Friendly Production Process",
                    type: "Video",
                    views: "2.8K",
                    engagement: "356",
                    trend: "+12%"
                  },
                  {
                    title: "Customer Success Story: Sarah's Glow Journey",
                    type: "LinkedIn",
                    views: "1.5K",
                    engagement: "245",
                    trend: "+8%"
                  }
                ].map((content, index) => (
                  <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      {content.type === "Blog Post" && <BookOpen className="h-6 w-6 text-blue-600" />}
                      {content.type === "Video" && <Video className="h-6 w-6 text-blue-600" />}
                      {content.type === "LinkedIn" && <Share2 className="h-6 w-6 text-blue-600" />}
                      <div>
                        <p className="font-medium text-gray-900">{content.title}</p>
                        <p className="text-sm text-gray-600">{content.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">{content.views} views</p>
                        <p className="text-sm text-gray-600">{content.engagement} engagements</p>
                      </div>
                      <span className="text-green-600 text-sm font-medium">{content.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
      </Card>

              {/* Upcoming Campaigns Card */}
              <div className="mt-6">
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle>Upcoming Campaigns</CardTitle>
              <CardDescription>Campaigns planned for the upcoming week</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Email Campaign - New Product Launch, Thursday, 10:00 AM</li>
              </ul>
            </CardContent>
          </Card>
        </div>

      <Link to="/create-campaign">
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Create Campaign
        </button>
      </Link>
    </div>
  );
};

export default Dashboard;