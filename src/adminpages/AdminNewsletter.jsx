import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fetchSubscriptions = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch("http://localhost:3000/api/newsletter", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw new Error("Failed to fetch subscriptions");
  return response.json();
};

const AdminNewsletter = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["subscriptions"],
    queryFn: fetchSubscriptions,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Newsletter Subscriptions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
             
              <TableHead>Email</TableHead>
              <TableHead>Subscribed At</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.subscriptions?.map((sub) => (
              <TableRow key={sub.id}>
                
                <TableCell>{sub.email}</TableCell>
                <TableCell>{new Date(sub.created_at).toLocaleString()}</TableCell>
                <TableCell>{sub.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AdminNewsletter;



// import React from 'react';
// import { useQuery } from '@tanstack/react-query';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Users, UserCheck, UserPlus, UserX, TrendingUp } from 'lucide-react';

// const API_URL = 'http://localhost:3000/api';

// const fetchSubscriptions = async () => {
//   const token = sessionStorage.getItem('token');
//   const response = await fetch(`${API_URL}/newsletter`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       'Content-Type': 'application/json',
//     },
//   });
//   if (!response.ok) throw new Error('Failed to fetch subscriptions');
//   return response.json();
// };

// const fetchStats = async () => {
//   const token = sessionStorage.getItem('token');
//   const response = await fetch(`${API_URL}/newsletter/stats`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       'Content-Type': 'application/json',
//     },
//   });
//   if (!response.ok) throw new Error('Failed to fetch stats');
//   return response.json();
// };

// const AdminNewsletter = () => {
//   const { data, error, isLoading } = useQuery({
//     queryKey: ['subscriptions'],
//     queryFn: fetchSubscriptions,
//   });

//   const { data: stats } = useQuery({
//     queryKey: ['subscriber-stats'],
//     queryFn: fetchStats,
//   });

//   const getStatusBadge = (status) => {
//     const colors = {
//       active: 'bg-green-100 text-green-800',
//       pending: 'bg-yellow-100 text-yellow-800',
//       unsubscribed: 'bg-gray-100 text-gray-800',
//     };
//     return (
//       <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[status] || 'bg-gray-100 text-gray-800'}`}>
//         {status.toUpperCase()}
//       </span>
//     );
//   };

//   if (isLoading) return <div className="p-6">Loading...</div>;
//   if (error) return <div className="p-6 text-red-600">Error: {error.message}</div>;

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h1 className="text-3xl font-bold text-gray-900 mb-6">Newsletter Management</h1>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
//         <Card>
//           <CardContent className="p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Total Subscribers</p>
//                 <p className="text-2xl font-bold text-gray-900">{stats?.total || 0}</p>
//               </div>
//               <Users className="w-8 h-8 text-blue-600" />
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardContent className="p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Active</p>
//                 <p className="text-2xl font-bold text-green-600">{stats?.active || 0}</p>
//               </div>
//               <UserCheck className="w-8 h-8 text-green-600" />
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardContent className="p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Pending</p>
//                 <p className="text-2xl font-bold text-yellow-600">{stats?.pending || 0}</p>
//               </div>
//               <UserPlus className="w-8 h-8 text-yellow-600" />
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardContent className="p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Unsubscribed</p>
//                 <p className="text-2xl font-bold text-gray-600">{stats?.unsubscribed || 0}</p>
//               </div>
//               <UserX className="w-8 h-8 text-gray-600" />
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardContent className="p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Last 30 Days</p>
//                 <p className="text-2xl font-bold text-purple-600">{stats?.recent_30_days || 0}</p>
//               </div>
//               <TrendingUp className="w-8 h-8 text-purple-600" />
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Subscriptions Table */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Newsletter Subscriptions</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Email</TableHead>
//                 <TableHead>Subscribed At</TableHead>
//                 <TableHead>Confirmed At</TableHead>
//                 <TableHead>Status</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {data?.subscriptions?.length === 0 ? (
//                 <TableRow>
//                   <TableCell colSpan={4} className="text-center py-8 text-gray-500">
//                     No subscriptions yet
//                   </TableCell>
//                 </TableRow>
//               ) : (
//                 data?.subscriptions?.map((sub) => (
//                   <TableRow key={sub.id}>
//                     <TableCell className="font-medium">{sub.email}</TableCell>
//                     <TableCell>{new Date(sub.created_at).toLocaleString()}</TableCell>
//                     <TableCell>
//                       {sub.confirmed_at ? new Date(sub.confirmed_at).toLocaleString() : 'Not confirmed'}
//                     </TableCell>
//                     <TableCell>{getStatusBadge(sub.status)}</TableCell>
//                   </TableRow>
//                 ))
//               )}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default AdminNewsletter;