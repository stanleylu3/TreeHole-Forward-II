// App.tsx

import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PostFeed from "./components/PostFeed";
import CreatePostPanel from "./components/CreatePostPanel";

function App() {
  const [showCreatePanel, setShowCreatePanel] = useState(false);

  return (
    <div className={showCreatePanel ? "blurred" : ""}>
      <Header onAddPost={() => setShowCreatePanel(true)} />
      <Sidebar />
      <main>
        <PostFeed />
      </main>
      <CreatePostPanel
        show={showCreatePanel}
        onClose={() => setShowCreatePanel(false)}
      />
    </div>
  );
}

export default App;
