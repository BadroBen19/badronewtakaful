import React from "react";
import CardGridHeader from "../components/CardGridHeader.js";
import CategoriesBody from "../components/CategoriesBody";

const Categories = ({ category }) => {
  return (
    <div>
      <CardGridHeader
        headerTitle={category.title}
        iconlink={category.icon}
      />
      <CategoriesBody
        bimageUrl={category.imageUrl}
        CanotParagraphe={category.description}
      />
    </div>
  );
};

export default Categories;
