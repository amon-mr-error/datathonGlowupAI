
// import React, { useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './Card';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
// import { BarChart, Bar } from 'recharts';
 
// const Analytics = () => {
//     const [selectedPeriod, setSelectedPeriod] = useState('month');
  
//     const contentPerformance = [
//       { month: 'Jan', blogViews: 12500, videoViews: 8500, linkedinEngagement: 4500 },
//       { month: 'Feb', blogViews: 15000, videoViews: 10000, linkedinEngagement: 5200 },
//       { month: 'Mar', blogViews: 18500, videoViews: 12500, linkedinEngagement: 6800 },
//       { month: 'Apr', blogViews: 22000, videoViews: 15000, linkedinEngagement: 8500 },
//     ];
  
//     const ugcMetrics = {
//       totalReviews: '2.8K',
//       averageRating: '4.8',
//       testimonials: '450',
//       unboxingVideos: '180'
//     };
  
//     const engagementData = [
//       { category: 'Product Reviews', count: 850 },
//       { category: 'Testimonials', count: 450 },
//       { category: 'Unboxing Videos', count: 180 },
//       { category: 'Sustainability Stories', count: 320 }
//     ];
  
//     const COLORS = ['#0a66c2', '#57a3e8', '#84b9ea', '#b1d0ed'];
  
//   return (
    
    
//     <div className="p-6">
//       <h2 className="text-2xl font-bold">Analytics</h2>

//      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* UGC Metrics */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-gray-600">Total Reviews</p>
//                   <h3 className="text-2xl font-bold text-gray-900 mt-1">{ugcMetrics.totalReviews}</h3>
//                 </div>
//                 <Star className="h-8 w-8 text-blue-600" />
//               </div>
              // <div className="mt-4">
              //   <div className="text-sm text-gray-600">
              //     <span className="text-green-600">↑ 12%</span> vs last period
              //   </div>
              // </div>
//             </CardContent>
//           </Card>

//           <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-gray-600">Average Rating</p>
//                   <h3 className="text-2xl font-bold text-gray-900 mt-1">{ugcMetrics.averageRating}</h3>
//                 </div>
//                 <ThumbsUp className="h-8 w-8 text-blue-600" />
//               </div>
//               <div className="mt-4">
//                 <div className="text-sm text-gray-600">
//                   <span className="text-green-600">↑ 0.2</span> vs last period
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
            // <CardContent className="p-6">
            //   <div className="flex items-center justify-between">
            //     <div>
            //       <p className="text-sm font-medium text-gray-600">Testimonials</p>
            //       <h3 className="text-2xl font-bold text-gray-900 mt-1">{ugcMetrics.testimonials}</h3>
            //     </div>
            //     <MessageSquare className="h-8 w-8 text-blue-600" />
            //   </div>
            //   <div className="mt-4">
            //     <div className="text-sm text-gray-600">
            //       <span className="text-green-600">↑ 8%</span> vs last period
            //     </div>
            //   </div>
            // </CardContent>
//           </Card>

//           <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
            // <CardContent className="p-6">
            //   <div className="flex items-center justify-between">
            //     <div>
            //       <p className="text-sm font-medium text-gray-600">Unboxing Videos</p>
            //       <h3 className="text-2xl font-bold text-gray-900 mt-1">{ugcMetrics.unboxingVideos}</h3>
            //     </div>
            //     <Video className="h-8 w-8 text-blue-600" />
            //   </div>
            //   <div className="mt-4">
            //     <div className="text-sm text-gray-600">
            //       <span className="text-green-600">↑ 15%</span> vs last period
            //     </div>
            //   </div>
            // </CardContent>
//           </Card>
//         </div>

//         {/* Content Performance */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//           <Card className="bg-white shadow-sm">
//             <CardHeader>
//               <CardTitle>Content Performance Trends</CardTitle>
//               <CardDescription>Blog views, video views, and LinkedIn engagement</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="h-80">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart data={contentPerformance}>
//                     <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
//                     <XAxis dataKey="month" />
//                     <YAxis />
//                     <Tooltip />
//                     <Line type="monotone" dataKey="blogViews" stroke="#0a66c2" strokeWidth={2} name="Blog Views" />
//                     <Line type="monotone" dataKey="videoViews" stroke="#57a3e8" strokeWidth={2} name="Video Views" />
//                     <Line type="monotone" dataKey="linkedinEngagement" stroke="#84b9ea" strokeWidth={2} name="LinkedIn" />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>
//             </CardContent>
//           </Card>

          // <Card className="bg-white shadow-sm">
          //   <CardHeader>
          //     <CardTitle>UGC Distribution</CardTitle>
          //     <CardDescription>Breakdown of user-generated content types</CardDescription>
          //   </CardHeader>
            // <CardContent>
            //   <div className="h-80">
            //     <ResponsiveContainer width="100%" height="100%">
            //       <BarChart data={engagementData}>
            //         <CartesianGrid strokeDasharray="3 3" />
            //         <XAxis dataKey="category" />
            //         <YAxis />
            //         <Tooltip />
            //         <Bar dataKey="count" fill="#0a66c2">
            //           {engagementData.map((entry, index) => (
            //             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            //           ))}
            //         </Bar>
            //       </BarChart>
            //     </ResponsiveContainer>
            //   </div>
            // </CardContent>
          // </Card>
//         </div>

        
//       </div>
//     </div>
//   );
// };

// export default Analytics;


import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { Users, TrendingUp, MessageSquare, ThumbsUp, Share2, Eye, BookOpen, Video, Star } from 'lucide-react';


const Analytics = () => {
  const [contentPerformance, setContentPerformance] = useState([]);
  const [ugcMetrics, setUgcMetrics] = useState({});
  const [engagementData, setEngagementData] = useState([]);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/analytics/content-performance');
        const contentData = await response.json();

        const response2 = await fetch('http://localhost:5000/api/analytics/ugc-metrics');
        const ugcData = await response2.json();

        const response3 = await fetch('http://localhost:5000/api/analytics/engagement');
        const engagementData = await response3.json();

        setContentPerformance(contentData);
        setUgcMetrics(ugcData);
        setEngagementData(engagementData);
      } catch (error) {
        console.error("Error fetching analytics:", error);
      }
    };

    fetchAnalytics();
  }, []);

  const COLORS = ['#0a66c2', '#57a3e8', '#84b9ea', '#b1d0ed'];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Analytics</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* UGC Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <p className="text-sm font-medium text-gray-600">Total Reviews</p>
              <div className="mt-4">
                <div className="text-sm text-gray-600">
                  <span className="text-green-600">↑ 12%</span> vs last period
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">{ugcMetrics.totalReviews}</h3>
            </CardContent>
          </Card>
          <Card>
          <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Unboxing Videos</p>
                  <h3 className="text-2xl font-bold text-gray-900 mt-1">{ugcMetrics.unboxingVideos}</h3>
                </div>
                <Video className="h-8 w-8 text-blue-600" />
              </div>
              <div className="mt-4">
                <div className="text-sm text-gray-600">
                  <span className="text-green-600">↑ 15%</span> vs last period
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
          <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Testimonials</p>
                  <h3 className="text-2xl font-bold text-gray-900 mt-1">{ugcMetrics.testimonials}</h3>
                </div>
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
              <div className="mt-4">
                <div className="text-sm text-gray-600">
                  <span className="text-green-600">↑ 8%</span> vs last period
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <p className="text-sm font-medium text-gray-600">Average Rating</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">{ugcMetrics.averageRating}</h3>
            </CardContent>
          </Card>
        </div>

        {/* Content Performance Trends */}
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <CardTitle>Content Performance Trends</CardTitle>
            <CardDescription>Blog views, video views, and LinkedIn engagement</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={contentPerformance}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="blogViews" stroke="#0a66c2" />
                <Line type="monotone" dataKey="videoViews" stroke="#57a3e8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
          <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={engagementData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#0a66c2">
                      {engagementData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
        </Card>
        
      </div>
    </div>
  );
};

export default Analytics;
