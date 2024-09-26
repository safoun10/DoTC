import React, { useEffect, useState } from "react";
import "./Body.css";
import DataTable from "../dataTable/DataTable";
import DataChart from "../dataChart/DataChart";

const Body = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("dataTwo.js")
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
					<div className="number-card">Mass = 100 g</div>
					<div className="number-card">s = 0.90</div>
					<div className="number-card">
						Thermal Conductivity = 0.4
					</div>
					<div className="number-card">Thickness = 0.00165</div>
					<div className="number-card">
						Number of Experiment = 50 times
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
								{/* <th scope="col">Heat Flow (Q)</th> */}
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
				<div className="my-5 bg-white">
					<hr className="py-3" />
				</div>
				{/* ************************************************************************* */}
				<div className="explanation py-5 px-3">
					<div>
						<div className="display-6 pb-4">
							Mathematical Explanation
						</div>
						<hr />
						<div className="fs-5 text-justify">
							<p>
								The code conducts a series of experiments to
								analyze how the temperature of a material
								changes over time. It utilizes a mathematical
								model to compute the final temperature (θ2) of
								the material. Each experiment involves selecting
								a random temperature difference (dθ) between 4
								and 6, representing variations in temperature
								within the material. Constants m, s, d, and k
								characterize properties of the material and its
								environment, including mass, specific heat,
								thickness, and thermal conductivity,
								respectively.
							</p>
							<p>
								Across 30 experiments, the code iteratively
								increments time (t) by 0.5 units. For each
								experiment, the final temperature (θ2) is
								calculated using the provided equation. The
								initial temperature for subsequent experiments
								is derived from the final temperature of the
								previous experiment. These simulations
								facilitate an understanding of how the material
								responds to different conditions and the
								influence of diverse factors on its thermal
								behavior.
							</p>
						</div>
					</div>
					<div>
						<div className="display-6 pb-4">
							Functional Explanation
						</div>
						<hr />
						<div className="fs-5 text-justify">
							<ul>
								<li>
									<div className="pb-3">
										<strong>calculating θ2</strong>
									</div>
									<div className="pb-3">
										<ul>
											<li>
												This function calculates the
												final temperature (θ2) of the
												material based on the provided
												equation.
											</li>
											<li>
												It takes parameters such as
												temperature difference (dθ),
												mass (m), specific heat (s),
												thickness (d), thermal
												conductivity (k), and time (t).
											</li>
											<li>
												Using these parameters, it
												calculates the final temperature
												(θ2) of the material and returns
												the result.
											</li>
										</ul>
									</div>
								</li>
								<li>
									<div className="pb-3">
										<strong>runExperiment():</strong>
									</div>
									<ul>
										<li>
											This function conducts a series of
											experiments to simulate the behavior
											of the material over time.
										</li>
										<li>
											It initializes an array to store the
											experiment results.
										</li>
										<li>
											It iterates through 50 experiments,
											incrementing the time by 0.5 in each
											iteration.
										</li>
										<li>
											For each experiment, it calculates
											the final temperature of the
											material using the previously
											mentioned function.
										</li>
										<li>
											It stores the experiment data,
											including the experiment ID, time,
											initial temperature, and final
											temperature, in the array.
										</li>
										<li>
											After completing all experiments, it
											returns the array containing the
											experiment results.
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* ************************************************************************* */}
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
