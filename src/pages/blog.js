import React from "react";
import { MainLayout } from "@/components";
import { useAuth } from "@/hooks";

export default function BlogPage() {
  const { user } = useAuth();
  return (
    <MainLayout showSearchBar={false} user={user}>
      <h1>BLOG</h1>
    </MainLayout>
  );
}
