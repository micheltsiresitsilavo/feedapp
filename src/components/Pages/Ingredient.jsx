import { useParams } from "react-router-dom";
import localforage from "localforage";
import { useEffect, useState } from "react";

const Ingredient = () => {
  const [ingre, setIngre] = useState([]);
  const id = useParams();
  const getInstr = async () => {
    try {
      const ingrediens = await localforage.getItem(`cocktas_${id.id}`);

      const ingredients = [
        { ingredient: ingrediens[0]?.strIngredient1 },
        { ingredient: ingrediens[0]?.strIngredient2 },
        { ingredient: ingrediens[0]?.strIngredient3 },
        { ingredient: ingrediens[0]?.strIngredient4 },
        { ingredient: ingrediens[0]?.strIngredient5 },
        { ingredient: ingrediens[0]?.strIngredient6 },
        { ingredient: ingrediens[0]?.strIngredient7 },
        { ingredient: ingrediens[0]?.strIngredient8 },
        { ingredient: ingrediens[0]?.strIngredient9 },
        { ingredient: ingrediens[0]?.strIngredient10 },
      ];
      setIngre(ingredients);
    } catch (err) {
      // This code runs if there were any errors.
      console.log(err);
    }
  };

  useEffect(() => {
    getInstr();
  }, []);

  return (
    <div className="p-2 flex justify-center h-72">
      <ul className="list-disc text-gray-700 dark:text-slate-100 font-semibold ">
        {ingre.map((item) =>
          item.ingredient ? (
            <li key={item.ingredient}>
              <p className="pr-5 text-base text-gray-700 dark:text-slate-100 font-semibold md:text-lg ">
                {" "}
                {item.ingredient}
              </p>
            </li>
          ) : (
            ""
          )
        )}
      </ul>
    </div>
  );
};

export default Ingredient;
