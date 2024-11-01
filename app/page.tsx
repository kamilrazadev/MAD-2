"use client";

import { useAuth } from "@/hooks/use-auth";
import { StudentForm } from "@/components/student-form";
import { LoginDialog } from "@/components/login-dialog";
import { StudentTable } from "@/components/student-table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  const { isAuthenticated, logout } = useAuth();
  const [showReports, setShowReports] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-semibold text-gray-900">
              Student Registration System
            </h1>
            <div className="flex gap-4">
              {isAuthenticated ? (
                <>
                  <Button
                    variant="outline"
                    onClick={() => setShowReports(!showReports)}
                  >
                    {showReports ? "Registration Form" : "Reports"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      logout();
                      setShowReports(false);
                    }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <LoginDialog />
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          {isAuthenticated && showReports ? (
            <StudentTable />
          ) : (
            <StudentForm />
          )}
        </div>
      </div>
      <Toaster />
    </main>
  );
}