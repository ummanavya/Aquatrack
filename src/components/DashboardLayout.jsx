import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import "../styles/dashboardLayout.css";


export default function DashboardLayout({children}){


return(

<div className="dashboard-layout">


<Sidebar/>


<div className="dashboard-content">


<Navbar/>


<main className="page-wrapper">

{children}

</main>


</div>


</div>

)

}