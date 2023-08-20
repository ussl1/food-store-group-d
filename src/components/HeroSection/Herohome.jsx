import CategoryComponent from "../CategoryComponent/CategoryComponent";

export default function Herohome() {
  return (
    <section className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4 max-w-[1100px] mx-auto">
      <section className=" md:block lg:block my-8">
        <CategoryComponent />
      </section>
      <section className="lg:col-start-2 lg:col-span-4 my-8"></section>
    </section>
  );
}
