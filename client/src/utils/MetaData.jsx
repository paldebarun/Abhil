import React from "react";
import DocumentMeta from "react-document-meta";

const MetaData = ({ title, description = "" }) => {
  return (
    <DocumentMeta
      title={`${title}`}
      description={description}
    ></DocumentMeta>
  );
};

export default MetaData;
