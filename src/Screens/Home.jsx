import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import BusinessOrders from "../Components/BusinessOrders";
import { FoodFindContext } from "../context";
import Layout from "../Components/Layout";
import OrderDetails from "../Components/OrderDetails";

export const Home = () => {
  const { user } = useContext(FoodFindContext);

  return (
    <Layout>
      <Navbar />
      <div className="ml-44 h-full flex flex-col">
        <div className="flex w-full justify-end items-center p-5 ">
            <OrderDetails />
          <div className="flex justify-center items-center">
            <BusinessOrders />
          </div>
        </div>
        <div className="bg-yellow-700 pt-3">
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            error quos ratione debitis. Minima eius porro voluptatem sit eum
            earum aliquam. Facere fugit quae voluptatibus aperiam delectus a ut
            laboriosam? Ab explicabo aperiam odio dignissimos corporis commodi
            voluptas adipisci necessitatibus provident, asperiores voluptatibus
            repellat quos rerum. Officiis alias asperiores voluptatibus repellat
            voluptatum, libero, enim error non expedita excepturi, vero
            doloremque. Provident maiores modi a. Pariatur iste nesciunt sunt
            illo velit. Dolores veritatis, ea officia impedit esse placeat
            molestiae consectetur corporis nobis tempora perferendis mollitia
            atque reprehenderit dicta, dolorem quod sed. Ipsum, expedita quas.
            Eum modi corrupti in cumque pariatur. Officiis quam fugiat
            temporibus aliquam non. Obcaecati nobis quis velit laudantium ullam
            quisquam ipsum quas totam aut, nam est sit doloribus. Ratione aut
            nulla possimus ullam. Alias, fuga! Ea sapiente recusandae quidem
            deserunt eos architecto unde magnam inventore excepturi maxime ab
            explicabo delectus sint quasi perspiciatis quos, soluta aut amet ex?
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
