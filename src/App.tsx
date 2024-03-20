import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home.tsx";
import Navbar from "./ui/Navbar.tsx";
import "./App.css";
import UsersPage from "./pages/Users.tsx";
import PostsPage from "./pages/Posts.tsx";
import PostPage from "./pages/Post.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RepositoryProvider } from "./contexts/RepositoryContext.tsx";

function App() {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <RepositoryProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/posts/:postId" element={<PostPage />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RepositoryProvider>
  );
}

export default App;
