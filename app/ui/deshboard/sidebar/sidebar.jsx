import React from "react";
import styles from "./sidebar.module.css";
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,

} from "react-icons/md"
import MenuLink from "./menuLink/menuLink";

const menuItem = [
    {
        title: "pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />,

            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle />,
            },
            {
                title: "Products",
                path: "/dashboard/product",
                icon: < MdShoppingBag />
            },
            {
                title: "Transactions",
                path: "/dashboard/Transactions",
                icon: <MdAttachMoney />
            },
        ]
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Revenue",
                path: "/dashboard/revenue",
                icon: <MdWork />

            },
            {
                title: "Reports",
                path: "/dashboard/report",
                icon: <MdAnalytics />,
            },
            {
                title: "Team",
                path: "/dashboard/team",
                icon: <MdPeople />,
            },
        ]
    },
    {
        title: "User",
        list: [
            {
                title: "Settings",
                path: "/dashboard/setting",
                icon: <MdOutlineSettings />
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <MdHelpCenter />
            },
        ],
    },
];

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <img className={styles.userImage} src="/noavatar.png" alt="" width={50} height={50} />
                <div className={styles.userDetail}>
                    <span className={styles.username}>Phoem sombo</span>
                    <span className={styles.userTitle}>Adminstrator</span>
                </div>
            </div>
            <ul className={styles.list} >
                {menuItem.map(cat => (
                    <li key={cat.title}>
                        <span className={styles.cat}>{cat.title}</span>
                        {cat.list.map((item) =>
                            <MenuLink item={item} key={item.title} />
                        )}
                    </li>
                ))}
            </ul>
            <button className={styles.logout}>
                    <MdLogout />
                LogOut
            </button>
        </div>
    )
}
export default Sidebar