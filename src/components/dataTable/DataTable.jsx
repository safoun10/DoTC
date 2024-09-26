/* eslint-disable react/prop-types */
import React from "react";

const DataTable = ({ data }) => {
	return (
		<tr>
			<th scope="row">{data?.id}</th>
			<td>{data?.time}</td>
			<td>{data?.initialTemp.toFixed(2)}</td>
			<td>{data?.finalTemp.toFixed(2)}</td>
			{/* <td>{data?.heatFlow.toFixed(2)}</td> */}
		</tr>
	);
};

export default DataTable;
