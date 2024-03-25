import React, { useEffect, useState } from "react";
import "./Body.css";
import DataTable from "../dataTable/DataTable";
import DataChart from "../dataChart/DataChart";

const Body = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("data.js")
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	return (
		<div>
			<div className="banner">
				<div className="display-5 fw-bold text-center text-white py-4 px-2 bg-dark ">
					Project DoTC - Determination of Thermal Conductivity
				</div>
				<div className="row justify-content-center align-items-center text-justify exp">
					<div className="fs-5 col-11 col-md-6 mx-auto ">
						Thermal conduction is the transfer of heat from one part
						of a body to another with which it is in contact.
						Thermal conductivity <span className="fw-bold">λ</span>{" "}
						is defined as ability of material to transmit heat and
						it is measured in watts per square metre of surface area
						for a temperature gradient of 1 K per unit thickness of
						1 m. The thermal conductivity is{" "}
						<span className="fw-bold">not always constant</span>.
						The main factors affected the thermal conductivity are
						the density of material, moisture of material and
						ambient temperature. With increasing density, moisture
						and temperature the thermal conductivity increases too.
						<span className="fw-bold">
							{" "}
							Important thing is the inner structure of materials.
						</span>{" "}
						Metals and other dense solid materials tend to have high
						levels of conductivity, whereas materials with very
						small amount of solid matter and large proportion of
						voids (gas or air bubbles, not large enough to carry
						heat by convection) have the lowest thermal
						conductivities .{" "}
						<div className="read-more">
							<a
								className="text-decoration-none fw-bold"
								href="http://tpm.fsv.cvut.cz/student/documents/files/BUM1/Chapter16.pdf"
								target="_blank"
								rel="noopener noreferrer"
							>
								Read more
							</a>
						</div>
					</div>
					<div className="col-11 col-md-6 mx-auto pt-3">
						<img
							className="img-fluid"
							src="https://i.ibb.co/FhdhPz7/Thermal-Conductivity-Featured.webp"
							alt="Photo example of thermal conductivity"
						/>
					</div>
				</div>
			</div>
			<div className="experiment">
				<div className="text-center py-5 display-6">
					Determining the Thermal Conductivity of Plastic
				</div>
				<div className="d-flex justify-content-center align-items-center pb-5 px-3 gap-2 flex-wrap ">
					<div className="number-card">Material = Plastic</div>
					<div className="number-card">Area = 0.01</div>
					<div className="number-card">
						Thermal Conductivity = 0.3
					</div>
					<div className="number-card">Thickness = 0.0001</div>
					<div className="number-card">
						Number of Experiment = 30 times
					</div>
				</div>

				{/* ************************************************************************* */}
				<div className="custom-table text-center">
					<table className="table table-dark table-striped table-hover table-borderless">
						<thead>
							<tr>
								<th scope="col">Count of Experiments</th>
								<th scope="col">Time</th>
								<th scope="col">Initial Temperature</th>
								<th scope="col">Final Temperature</th>
								<th scope="col">Heat Flow (Q)</th>
							</tr>
						</thead>
						{/* <tbody>
							<tr>
								<th scope="row">1</th>
								<td>Mark</td>
								<td>Otto</td>
								<td>@mdo</td>
								<td>@mdo</td>
							</tr>
						</tbody> */}
						<tbody>
							<>
								{data.map((data) => (
									<DataTable
										key={data.id}
										data={data}
									></DataTable>
								))}
							</>
						</tbody>
					</table>
				</div>
				{/* ************************************************************************* */}
				<div>
					<DataChart></DataChart>
				</div>
				{/* ************************************************************************* */}
			</div>
		</div>
	);
};

export default Body;
