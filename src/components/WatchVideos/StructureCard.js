import React from "react"
import ContentLoader from "react-content-loader"

export const StructureCard = () => (
  <ContentLoader 
    height={160}
    width={300}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="0" rx="5" ry="5" width="300" height="160" />
  </ContentLoader>
);