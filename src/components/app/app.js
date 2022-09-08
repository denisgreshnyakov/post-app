import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form/post-add-form";

import "./app.css";
import "./app-header.css";
import "./index.css";
import "./post-add-form.css";
import "./post-list-item.css";
import "./post-list.css";
import "./post-status-filter.css";
import "./search-panel.css";

const App = () => {
  return (
    <div className="app">
      <AppHeader></AppHeader>
      <div className="search-panel d-flex">
        <SearchPanel></SearchPanel>
        <PostStatusFilter></PostStatusFilter>
      </div>
      <PostList></PostList>
      <PostAddForm></PostAddForm>
    </div>
  );
};

export default App;
