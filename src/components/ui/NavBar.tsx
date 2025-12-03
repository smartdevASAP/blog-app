import { logo_svg } from "../../assets/assets_config";

function NavBar() {
  //menu function
  const handleClick = (id: number | null): string | any => {
    console.log("object clicked has id " + id);
  };
  //menu items
  const menu_options = [
    { _id: 1, option: "Home", onclick: (id: number) => handleClick(id) },
    { _id: 2, option: "discover", onclick: (id: number) => handleClick(id) },
    { _id: 3, option: "categories", onclick: (id: number) => handleClick(id) },
    { _id: 4, option: "authors", onclick: (id: number) => handleClick(id) },
    { _id: 5, option: "topics", onclick: (id: number) => handleClick(id) },
    { _id: 6, option: "subscribe", onclick: (id: number) => handleClick(id) },
  ];
  return (
    <nav className="flex justify-between border-b-2 border-gray-100 p-2">
      <img src={logo_svg} alt="" />
      <div>
        <ul className="flex gap-8 text-gray-600 text-sm">
          {menu_options.map((item) => {
            return (
              <li
                onClick={() => item.onclick(item._id)}
                className="cursor-pointer"
                key={item._id}
              >
                {item.option}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <div className="flex items-center gap-4">
          <button className="px-5 py-2 shadow-sm bg-blue-500 text-white font-medium hover:bg-blue-600 transition">
            Login
          </button>

          <button className="px-5 py-2 shadow-sm bg-gray-100 text-gray-800 font-medium border-2 border-blue-100 hover:bg-gray-200 transition">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
