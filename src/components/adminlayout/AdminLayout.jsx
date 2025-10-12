import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X, Users, Mail, BarChart3, MessageCircle } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import { useQuery } from "@tanstack/react-query";

// Fetch total applications
const fetchApplications = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch("https://singhkarman.com/api/applications", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw new Error("Failed to fetch applications");
  const data = await response.json();
  return data.length; // Return the count
};

// Fetch total contacts
const fetchContacts = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch("https://singhkarman.com/api/contact", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw new Error("Failed to fetch contacts");
  const data = await response.json();
  return data.length; // Return the count
};

// Fetch total newsletter subscriptions
const fetchSubscriptions = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch("https://singhkarman.com/api/newsletter", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw new Error("Failed to fetch subscriptions");
  const data = await response.json();
  return data.length; // Return the count
};

const AdminLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Use react-query to fetch counts
  const { data: totalApplications = 0, isLoading: isLoadingApplications } = useQuery({
    queryKey: ["applicationsCount"],
    queryFn: fetchApplications,
  });

  const { data: totalContacts = 0, isLoading: isLoadingContacts } = useQuery({
    queryKey: ["contactsCount"],
    queryFn: fetchContacts,
  });

  const { data: totalSubscriptions = 0, isLoading: isLoadingSubscriptions } = useQuery({
    queryKey: ["subscriptionsCount"],
    queryFn: fetchSubscriptions,
  });

  const navigationItems = [
    {
      path: "/admin/applications",
      label: "Applications",
      icon: Users,
    },
    {
      path: "/admin/newsletter",
      label: "Newsletter Subscriptions",
      icon: Mail,
    },
    {
      path: "/admin/campaigns",
      label: "Campaign Manager",
      icon: BarChart3,
    },
    {
      path: "/admin/contacts",
      label: "Contact Submissions",
      icon: MessageCircle,
    },
  ];

  const SidebarContent = ({ isMobile = false }) => (
    <nav className="space-y-2 mt-6">
      {navigationItems.map((item) => {
        const IconComponent = item.icon;
        return (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={isMobile ? () => setIsMobileMenuOpen(false) : undefined}
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-white text-black shadow-md"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            <IconComponent className="h-5 w-5" />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <div className="flex flex-1">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex lg:w-64 bg-black text-white flex-col">
          <div className="p-6">
            <SidebarContent />
          </div>
        </aside>

        {/* Mobile Sidebar */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden fixed top-20 left-4 z-50 bg-white shadow-lg hover:shadow-xl"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 bg-black text-white p-0 border-r border-gray-800">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Dashboard</h2>
                    <p className="text-gray-400 text-sm">Admin Panel</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <SidebarContent isMobile={true} />
            </div>
          </SheetContent>
        </Sheet>

        {/* Main Content */}
        <main className="flex-1 lg:ml-0 flex flex-col">
          <div className="p-4 lg:p-8 pt-20 lg:pt-8 flex flex-col gap-6">
            {/* Stats Cards - Dashboard Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Applications</p>
                    <p className="text-3xl font-bold text-black mt-1">
                      {isLoadingApplications ? "Loading..." : totalApplications}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-sm text-gray-500">+12% from last month</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Newsletter Subscribers</p>
                    <p className="text-3xl font-bold text-black mt-1">
                      {isLoadingSubscriptions ? "Loading..." : totalSubscriptions}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-sm text-gray-500">+5% from last month</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Contact Submissions</p>
                    <p className="text-3xl font-bold text-black mt-1">
                      {isLoadingContacts ? "Loading..." : totalContacts}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-sm text-gray-500">+8% from last month</span>
                </div>
              </div>
            </div>

            {/* Scrollable Outlet Content */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 flex-1 overflow-y-auto">
              <Outlet />
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default AdminLayout;