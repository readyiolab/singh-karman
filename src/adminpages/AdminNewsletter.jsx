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
              <TableHead>ID</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Subscribed At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((sub) => (
              <TableRow key={sub.id}>
                <TableCell>{sub.id}</TableCell>
                <TableCell>{sub.email}</TableCell>
                <TableCell>{new Date(sub.createdAt).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AdminNewsletter;