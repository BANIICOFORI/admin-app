import React from 'react'
import { Table } from "antd";
import {BiEdit} from "react-icons/bi";
import {AiFillDelete} from "react-icons/ai"

const columns = [
    {
      title: "S/No",
      dataIndex: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Product",
      dataIndex: "product",
    },
    {
      title: "Status",
      dataIndex: "staus",
    },
  ];
  const data1 = [];
  for (let i = 0; i < 46; i++) {
    data1.push(
    {
        key: i,
        name: `Nicholas Boadi Ofori ${i}`,
        product: 40,
        staus: `Accra, DVLA 37 no. ${i}`,
      },
    );
  }
const Productlist = () => {
  return (
    <div>
    <h3 className="mb-4 title">Products</h3>
    <div>
    <Table columns={columns} dataSource={data1} />
    </div>
</div>
  )
}
export default Productlist