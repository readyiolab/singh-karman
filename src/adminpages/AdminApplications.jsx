import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const fetchApplications = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch("http://localhost:3000/api/applications", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw new Error("Failed to fetch applications");
  return response.json();
};

const AdminApplications = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["applications"],
    queryFn: fetchApplications,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Form Applications</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {/* <TableHead>ID</TableHead> */}
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>PDF</TableHead>
              
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((app) => (
              <TableRow key={app.id}>
                {/* <TableCell>{app.id}</TableCell> */}
                <TableCell>{app.name}</TableCell>
                <TableCell>{app.email}</TableCell>
                <TableCell>{app.phone}</TableCell>
                <TableCell>{app.pdf}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AdminApplications;