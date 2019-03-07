import React from 'react';
import lifecycle from 'react-pure-lifecycle';
import { Link } from 'react-router-dom';
import { constants } from '../common';
import '../style/salesrecord.css';

const methods = {
  componentWillMount({
    fetchStoreData,
    userData,
    saleRecord
  }) {
    if (!saleRecord.data) {
      fetchStoreData()
    }
  }
};

const SaleRecordComponent = ({
  saleRecord,
  saleRecordState,
}) => {
  const listSales = () => {
    const { data } = saleRecord;
    return (
      data.map(sale => (
        <tr>
          <td>{sale.created_at}</td>
          <td>{sale.productname}</td>
          <td>{sale.quantity}</td>
          <td>{sale.price}</td>
          <td><Link to={`/user/${sale.attendant_id}`}>{sale.attendant_id}</Link></td>
        </tr>
      ))
    )
  }

  return (
    <>
      <table id="sales-record">
        <tr>
          <th>Date</th>
          <th>Name of Product</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Attendant Id</th>
        </tr>
        {saleRecord.data &&
          saleRecord.data.map(sale => (
            <tr>
              <td>{sale.created_at}</td>
              <td>{sale.productname}</td>
              <td>{sale.quantity}</td>
              <td>{sale.price}</td>
              <td>
                <Link to={`/user/${sale.attendant_id}`}>{sale.attendant_id}</Link>
              </td>
            </tr>
          ))
        }
      </table>
    </>
  )
}

export default lifecycle(methods)(SaleRecordComponent);
