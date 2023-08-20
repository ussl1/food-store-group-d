import "./CategoryComponent.css";
const categories = [
  {
    id: 1,
    title: "Vegetables and Fruits",
  },
  {
    id: 2,
    title: "Fruits",
  },
  {
    id: 3,
    title: "Oil & Vinegar",
  },
  {
    id: 4,
    title: "Apple Juice",
  },
  {
    id: 5,
    title: "Ocean Food",
  },
  {
    id: 6,
    title: "Butter & Eggs",
  },
  {
    id: 7,
    title: "Fresh Meat ",
  },
  {
    id: 8,
    title: "Dry Nuts",
  },
  {
    id: 8,
    title: "Vegetables",
  },
  {
    id: 8,
    title: "Milk & Cream",
  },
];

export default function CategoryComponent() {
  return (
    <div className="category-container p-1 bg-[#FFFFFF]">
      <h2 className="text-md font-semibold text-center rounded py-1 m-0 text-white bg-[#7CAF02]">
        ALL CATEGORIES
      </h2>
      <div className="grid grid-cols-1 gap-4 my-4 ">
        {categories.map((category) => (
          <div key={category.id} className=" shadow-xs px-1 ">
            <button className="flex text-sm  hover:text-teal-600 hover:font-semibold">
              <span className="block">{category.title}</span>
            </button>
            <hr className="mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
}
