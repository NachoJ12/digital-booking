import React, { useEffect, useState } from 'react';
import style from './Categories.module.css';
import baseUrl from '../../utils/baseUrl.json';
import CategorieSkeleton from '../Skeletons/CategorieSkeleton/CategorieSkeleton';

const Categories = ({ handleFilterCategories }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //console.log(categories);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${baseUrl.url}/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={style.categoriesContainer}>
      <h2>Buscar por tipo de alojamiento</h2>
      <div className={style.categoriesList}>
        {isLoading ? (
          <>
            <CategorieSkeleton />
            <CategorieSkeleton />
            <CategorieSkeleton />
            <CategorieSkeleton />
          </>
        ) : (
          <>
            {categories.slice(0, 4).map((category) => (
              <div
                className={style.categoryCard}
                key={category.id}
                onClick={() => handleFilterCategories(category.id)}
              >
                <img
                  className={style.categoryImage}
                  src={category.url}
                  alt={category.name}
                />
                <div className={style.containerDescription}>
                  <p>{category.name}</p>
                  <p className={style.categoryDescription}>
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Categories;
