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

const fetchContacts = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch("https://singhkarman.com/api/contact", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw new Error("Failed to fetch contacts");
  return response.json();
};

const AdminContacts = () => {
  const [currentPage, setCurrentPage] = useState(0); // react-paginate uses 0-based indexing
  const itemsPerPage = 10;

  const { data, error, isLoading } = useQuery({
    queryKey: ["contacts"],
    queryFn: fetchContacts,
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
        <CardTitle>Contact Form Submissions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Inquiry Type</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData?.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell>{contact.id}</TableCell>
                <TableCell>{contact.name}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>
                  {contact.inquiry_type.charAt(0).toUpperCase() + contact.inquiry_type.slice(1)}
                </TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell className="max-w-xs truncate" title={contact.message}>
                  {contact.message}
                </TableCell>
                <TableCell>{new Date(contact.created_at).toLocaleString()}</TableCell>
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

export default AdminContacts;