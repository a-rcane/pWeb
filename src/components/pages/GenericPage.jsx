import React from "react";
import "../styles/Page.css";

const GenericPage = ({project}) => {
  return (
    <div className="page">
      {project === "ui" ? (
        <>
          <h2 className="page-title">🎨 UI Projects</h2>
          <p className="page-content">Explore creative UI components and animations!</p>
        </>
      ) : (
        <>
          <h2 className="page-title">🚀 Frontend Projects</h2>
          <p className="page-content">Explore amazing UI/UX and React.js projects here!</p>
        </>
      )}
    </div>
  );
};

export default GenericPage;