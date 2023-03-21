import { Link, NavLink } from "react-router-dom"

export const SideNav = ({ menuItems }) => {
    console.log(menuItems, "sideNav")
    return (
        <div className="flex flex-col px-1 py-2">

            {menuItems.map((item) => (
                <NavLink to={item.path} className="group flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-neutral-800">
                    {
                        ({ isActive }) =>
                            isActive ? <>
                                {item.icon("text-blue-500")}
                                <span className=" group-hover:text-white flex-1 ml-2 text-left whitespace-nowrap text-sm text-blue-500 font-normal ">{item.label}</span>
                            </> : <>
                                {item.icon("text-neutral-400")}
                                <span className=" group-hover:text-white flex-1 ml-2 text-left whitespace-nowrap text-sm text-neutral-400 font-normal ">{item.label}</span>
                            </>
                    }
                </NavLink>))}
        </div>
    )
}