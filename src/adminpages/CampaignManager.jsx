import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Mail, Send, Trash2, Eye, BarChart3, Plus } from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment-timezone";

const API_URL = "https://singhkarman.com/api";

const fetchCampaigns = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/campaigns`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw new Error("Failed to fetch campaigns");
  return response.json();
};

const createCampaign = async (data) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/campaigns`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to create campaign");
  }
  return response.json();
};

const sendCampaign = async (id) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/campaigns/${id}/send`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw new Error("Failed to send campaign");
  return response.json();
};

const deleteCampaign = async (id) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/campaigns/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw new Error("Failed to delete campaign");
  return response.json();
};

const fetchCampaignStats = async (id) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/campaigns/${id}/stats`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw new Error("Failed to fetch campaign stats");
  return response.json();
};

const CampaignManager = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    content: "",
    template: "",
    status: "draft",
    scheduledAt: null,
  });
  const [notification, setNotification] = useState(null);
  const [previewContent, setPreviewContent] = useState("");
  const [selectedCampaignId, setSelectedCampaignId] = useState(null);

  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["campaigns"],
    queryFn: fetchCampaigns,
  });

  const statsQuery = useQuery({
    queryKey: ["campaignStats", selectedCampaignId],
    queryFn: () => fetchCampaignStats(selectedCampaignId),
    enabled: !!selectedCampaignId,
  });

  const createMutation = useMutation({
    mutationFn: createCampaign,
    onSuccess: () => {
      queryClient.invalidateQueries(["campaigns"]);
      setShowCreateForm(false);
      setFormData({ title: "", subject: "", content: "", template: "", status: "draft", scheduledAt: null });
      setNotification({ type: "success", message: "Campaign created successfully!" });
      setTimeout(() => setNotification(null), 3000);
    },
    onError: (error) => {
      setNotification({ type: "error", message: error.message });
      setTimeout(() => setNotification(null), 3000);
    },
  });

  const sendMutation = useMutation({
    mutationFn: sendCampaign,
    onSuccess: () => {
      queryClient.invalidateQueries(["campaigns"]);
      setNotification({ type: "success", message: "Campaign sending started!" });
      setTimeout(() => setNotification(null), 3000);
    },
    onError: (error) => {
      setNotification({ type: "error", message: error.message });
      setTimeout(() => setNotification(null), 3000);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteCampaign,
    onSuccess: () => {
      queryClient.invalidateQueries(["campaigns"]);
      setNotification({ type: "success", message: "Campaign deleted successfully!" });
      setTimeout(() => setNotification(null), 3000);
    },
    onError: (error) => {
      setNotification({ type: "error", message: error.message });
      setTimeout(() => setNotification(null), 3000);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      scheduledAt: formData.scheduledAt
        ? moment(formData.scheduledAt).tz("Asia/Kolkata").utc().toISOString()
        : null,
    };
    createMutation.mutate(data);
  };

  const handleSendCampaign = (id) => {
    if (
      window.confirm(
        "Are you sure you want to send this campaign to all active subscribers?"
      )
    ) {
      sendMutation.mutate(id);
    }
  };

  const handleDeleteCampaign = (id) => {
    if (window.confirm("Are you sure you want to delete this campaign?")) {
      deleteMutation.mutate(id);
    }
  };

  const handleTemplateChange = (value) => {
    const templates = {
      weekly_update: `<h2 style="color: #2c3e50; margin-top: 0;">This Week's Financial Insights</h2>
<p style="color: #34495e; line-height: 1.6;">Hi there,</p>
<p style="color: #34495e; line-height: 1.6;">
  Welcome to this week's newsletter! Here are the key financial insights you need to know:
</p>
<div style="background-color: #e8f4f8; border-left: 4px solid #3498db; padding: 15px; margin: 20px 0;">
  <h3 style="color: #2c3e50; margin-top: 0;">📈 Market Update</h3>
  <p style="color: #34495e; line-height: 1.6; margin-bottom: 0;">
    [Add your market analysis here]
  </p>
</div>
<div style="background-color: #fef9e7; border-left: 4px solid #f39c12; padding: 15px; margin: 20px 0;">
  <h3 style="color: #2c3e50; margin-top: 0;">💡 Investment Tip of the Week</h3>
  <p style="color: #34495e; line-height: 1.6; margin-bottom: 0;">
    [Add your investment tip here]
  </p>
</div>
<div style="background-color: #e8f8f5; border-left: 4px solid #27ae60; padding: 15px; margin: 20px 0;">
  <h3 style="color: #2c3e50; margin-top: 0;">🎯 Action Items</h3>
  <ul style="color: #34495e; line-height: 1.8;">
    <li>Review your portfolio allocation</li>
    <li>Check your emergency fund</li>
    <li>Consider tax-loss harvesting opportunities</li>
  </ul>
</div>
<p style="color: #34495e; line-height: 1.6;">
  Have questions? Reply to this email and I'll get back to you.
</p>
<p style="color: #34495e; line-height: 1.6;">
  Best regards,<br>
  <strong>Karman Singh</strong>
</p>`,
      announcement: `<h2 style="color: #2c3e50; margin-top: 0;">Important Announcement</h2>
<p style="color: #34495e; line-height: 1.6;">Hi there,</p>
<p style="color: #34495e; line-height: 1.6;">
  I wanted to share some exciting news with you:
</p>
<div style="background-color: #fff3cd; border: 2px solid #ffc107; border-radius: 5px; padding: 20px; margin: 20px 0;">
  <p style="color: #856404; font-size: 16px; line-height: 1.6; margin: 0;">
    [Add your announcement here]
  </p>
</div>
<p style="color: #34495e; line-height: 1.6;">
  Thank you for being part of this journey!
</p>
<p style="color: #34495e; line-height: 1.6;">
  Best regards,<br>
  <strong>Karman Singh</strong>
</p>`,
      educational: `<h2 style="color: #2c3e50; margin-top: 0;">Financial Education Series</h2>
<p style="color: #34495e; line-height: 1.6;">Hi there,</p>
<p style="color: #34495e; line-height: 1.6;">
  Today, let's dive into an important financial concept:
</p>
<h3 style="color: #2c3e50;">Understanding Compound Interest</h3>
<p style="color: #34495e; line-height: 1.6;">
  Compound interest is the process of earning interest on both the initial principal and the interest that has been added to your investment over time. This powerful concept can significantly grow your wealth if leveraged correctly.
</p>
<div style="background-color: #f8f9fa; border-radius: 5px; padding: 20px; margin: 20px 0;">
  <h4 style="color: #2c3e50; margin-top: 0;">Key Takeaways:</h4>
  <ul style="color: #34495e; line-height: 1.8;">
    <li>Start investing early to maximize the benefits of compounding.</li>
    <li>Regularly contribute to your investments to boost growth.</li>
    <li>Choose investments with higher interest rates or returns for greater impact.</li>
  </ul>
</div>
<p style="color: #34495e; line-height: 1.6;">
  Want to learn more? Reply to this email with your questions, or schedule a consultation to discuss how compound interest can work for your financial goals.
</p>
<p style="color: #34495e; line-height: 1.6;">
  Best regards,<br>
  <strong>Karman Singh</strong>
</p>`,
    };
    setFormData({
      ...formData,
      template: value,
      content: value ? templates[value] : "",
    });
  };

  const handlePreview = () => {
    const wrappedContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Newsletter</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <tr>
            <td style="padding: 40px 30px;">
              ${formData.content || "<p>No content provided.</p>"}
            </td>
          </tr>
          <tr>
            <td style="padding: 30px; background-color: #f8f9fa; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0 0 10px 0; font-size: 12px; color: #6c757d; line-height: 1.5;">
                You're receiving this email because you subscribed to Karman Singh's newsletter.
              </p>
              <p style="margin: 0; font-size: 12px; color: #6c757d;">
                <a href="#" style="color: #6c757d; text-decoration: underline;">Unsubscribe</a> from this list
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px 30px; text-align: center; background-color: #ffffff;">
              <p style="margin: 0; font-size: 12px; color: #6c757d; line-height: 1.8;">
                <strong>Karman Singh</strong><br>
                Building generational wealth through purpose-driven financial strategies<br>
                <a href="mailto:admin@singhkarman.com" style="color: #6c757d; text-decoration: none;">admin@singhkarman.com</a> | (206) 801-0330
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
    setPreviewContent(wrappedContent);
  };

  const getStatusBadge = (status) => {
    const colors = {
      draft: "bg-gray-100 text-gray-800",
      scheduled: "bg-yellow-100 text-yellow-800",
      sending: "bg-blue-100 text-blue-800",
      sent: "bg-green-100 text-green-800",
      failed: "bg-red-100 text-red-800",
    };
    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${
          colors[status] || "bg-gray-100 text-gray-800"
        }`}
      >
        {status.toUpperCase()}
      </span>
    );
  };

  if (isLoading) return <div className="p-4 sm:p-6">Loading campaigns...</div>;
  if (error)
    return (
      <div className="p-4 sm:p-6 text-red-600">
        Error: {error.message}
        <div className="mt-4">
          <Button onClick={() => queryClient.invalidateQueries(["campaigns"])} className="bg-blue-600">
            Retry
          </Button>
        </div>
      </div>
    );

  return (
    <div className="p-4 sm:p-6 max-w-full sm:max-w-7xl mx-auto">
      {/* Toast-like Notification */}
      {notification && (
        <div
          className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-md shadow-lg transition-all duration-300 ease-in-out sm:w-80 w-64 ${
            notification.type === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {notification.message}
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Newsletter Campaigns
        </h1>
        {!showCreateForm && (
          <Button
            onClick={() => setShowCreateForm(true)}
            className="bg-black w-full sm:w-auto"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Campaign
          </Button>
        )}
      </div>

      {showCreateForm ? (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Create New Campaign</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Campaign Title
                </label>
                <Input
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  placeholder="e.g., Weekly Market Update"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Subject
                </label>
                <Input
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="e.g., This Week's Financial Insights"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Template
                </label>
                <Select
                  value={formData.template}
                  onValueChange={handleTemplateChange}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a template" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="custom">Custom Content</SelectItem>
                    <SelectItem value="weekly_update">Weekly Update</SelectItem>
                    <SelectItem value="announcement">Announcement</SelectItem>
                    <SelectItem value="educational">
                      Educational Series
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Content
                </label>
                <ReactQuill
                  value={formData.content}
                  onChange={(content) => setFormData({ ...formData, content })}
                  theme="snow"
                  className="h-64 sm:h-80 mb-6"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Use the editor to customize your email content
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Campaign Status
                </label>
                <Select
                  value={formData.status}
                  onValueChange={(value) => setFormData({ ...formData, status: value })}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {formData.status === "scheduled" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Schedule Date and Time (IST)
                  </label>
                  <DatePicker
                    selected={formData.scheduledAt}
                    onChange={(date) => setFormData({ ...formData, scheduledAt: date })}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    placeholderText="Select date and time"
                    className="w-full p-2 border rounded-md"
                    minDate={new Date()}
                    required
                  />
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  className="bg-black w-full sm:w-auto"
                  type="submit"
                  disabled={createMutation.isPending}
                >
                  {createMutation.isPending ? "Creating..." : "Create Campaign"}
                </Button>
                <Button
                  type="button"
                  onClick={handlePreview}
                  className="bg-black w-full sm:w-auto"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </Button>
                <Button
                  type="button"
                  onClick={() => setShowCreateForm(false)}
                  variant="outline"
                  className="border-gray-300 bg-red-500 text-gray-700 hover:bg-gray-100 w-full sm:w-auto"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      ) : (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              All Campaigns
            </CardTitle>
          </CardHeader>
          <CardContent>
            {data?.campaigns?.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <Mail className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>
                  No campaigns yet. Create your first campaign to get started!
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table className="min-w-[800px]">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-xs sm:text-sm">Title</TableHead>
                      <TableHead className="text-xs sm:text-sm">Subject</TableHead>
                      <TableHead className="text-xs sm:text-sm">Template</TableHead>
                      <TableHead className="text-xs sm:text-sm">Status</TableHead>
                      <TableHead className="text-xs sm:text-sm">Scheduled At</TableHead>
                      <TableHead className="text-xs sm:text-sm">Recipients</TableHead>
                      <TableHead className="text-xs sm:text-sm">Success Rate</TableHead>
                      <TableHead className="text-xs sm:text-sm">Created</TableHead>
                      <TableHead className="text-xs sm:text-sm">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data?.campaigns?.map((campaign) => (
                      <TableRow key={campaign.id}>
                        <TableCell className="font-medium text-xs sm:text-sm">
                          {campaign.title}
                        </TableCell>
                        <TableCell className="max-w-[150px] truncate text-xs sm:text-sm">
                          {campaign.subject}
                        </TableCell>
                        <TableCell className="text-xs sm:text-sm">{campaign.template || "Custom"}</TableCell>
                        <TableCell className="text-xs sm:text-sm">{getStatusBadge(campaign.status)}</TableCell>
                        <TableCell className="text-xs sm:text-sm">
                          {campaign.scheduled_at
                            ? new Date(campaign.scheduled_at).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
                            : "N/A"}
                        </TableCell>
                        <TableCell className="text-xs sm:text-sm">{campaign.total_recipients || 0}</TableCell>
                        <TableCell className="text-xs sm:text-sm">
                          {campaign.total_recipients > 0
                            ? `${Math.round(
                                (campaign.successful_sends /
                                  campaign.total_recipients) *
                                  100
                              )}%`
                            : "N/A"}
                        </TableCell>
                        <TableCell className="text-xs sm:text-sm">
                          {new Date(campaign.created_at).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            {campaign.status === "draft" && (
                              <Button
                                size="sm"
                                onClick={() => handleSendCampaign(campaign.id)}
                                disabled={sendMutation.isPending}
                                className="bg-accent"
                              >
                                <Send className="w-3 h-3" />
                              </Button>
                            )}
                            <Button
                              size="sm"
                              onClick={() => setSelectedCampaignId(campaign.id)}
                              className="bg-black"
                            >
                              <BarChart3 className="w-3 h-3" />
                            </Button>
                            {campaign.status !== "sending" && (
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => handleDeleteCampaign(campaign.id)}
                                disabled={deleteMutation.isPending}
                              >
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {previewContent && (
        <Dialog
          open={!!previewContent}
          onOpenChange={() => setPreviewContent("")}
        >
          <DialogContent className="w-[95vw] sm:w-[90vw] max-w-[600px] max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Email Preview</DialogTitle>
            </DialogHeader>
            <div className="border rounded-lg p-4 bg-white">
              <iframe
                srcDoc={previewContent}
                title="Email Preview"
                className="w-full h-[60vh] sm:h-[70vh] border-none"
              />
            </div>
          </DialogContent>
        </Dialog>
      )}

      {selectedCampaignId && statsQuery.data && (
        <Dialog
          open={!!selectedCampaignId}
          onOpenChange={() => setSelectedCampaignId(null)}
        >
          <DialogContent className="w-[95vw] sm:w-[90vw] max-w-[800px] max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                Campaign Statistics: {statsQuery.data.campaign.title}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 p-4">
              <div>
                <h3 className="text-lg font-semibold">Campaign Details</h3>
                <p className="text-sm sm:text-base">
                  <strong>Subject:</strong> {statsQuery.data.campaign.subject}
                </p>
                <p className="text-sm sm:text-base">
                  <strong>Status:</strong> {statsQuery.data.campaign.status}
                </p>
                <p className="text-sm sm:text-base">
                  <strong>Scheduled At:</strong>{" "}
                  {statsQuery.data.campaign.scheduled_at
                    ? new Date(statsQuery.data.campaign.scheduled_at).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
                    : "Not scheduled"}
                </p>
                <p className="text-sm sm:text-base">
                  <strong>Sent At:</strong>{" "}
                  {statsQuery.data.campaign.sent_at
                    ? new Date(statsQuery.data.campaign.sent_at).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
                    : "Not sent"}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default CampaignManager;