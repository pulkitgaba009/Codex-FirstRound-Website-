import Layout from "../Layout";
import Navbar from "./NavBar";

export default function AdminPannel() {
  return (
    <Layout>
      <div className="w-[100%] bg-[rgba(0,0,0,0.2)] h-[100%]">
        <Navbar></Navbar>
      </div>
    </Layout>
  );
}
