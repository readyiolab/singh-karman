import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import ReactPaginate from "react-paginate";

const fetchApplications = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch("https://singhkarman.com/api/applications", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw new Error("Failed to fetch applications");
  return response.json();
};

const AdminApplications = () => {
  const [currentPage, setCurrentPage] = useState(0); // react-paginate uses 0-based indexing
  const itemsPerPage = 10;

  const { data, error, isLoading } = useQuery({
    queryKey: ["applications"],
    queryFn: fetchApplications,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Pagination logic
  const totalItems = data?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data?.slice(startIndex, endIndex);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Form Applications</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
            
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData?.map((app) => (
              <TableRow key={app.id}>
                <TableCell>{app.name}</TableCell>
                <TableCell>{app.email}</TableCell>
                <TableCell>{app.phone}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {totalPages > 1 && (
          <div className="mt-4 flex justify-center">
            <ReactPaginate
              previousLabel="Previous"
              nextLabel="Next"
              breakLabel="..."
              pageCount={totalPages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName="flex items-center space-x-2"
              pageClassName="inline-flex"
              pageLinkClassName="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100 text-sm font-medium"
              previousLinkClassName="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100 text-sm font-medium"
              nextLinkClassName="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100 text-sm font-medium"
              breakClassName="px-3 py-1"
              activeLinkClassName="bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
              disabledClassName="opacity-50 cursor-not-allowed"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AdminApplications;