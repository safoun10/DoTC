function calculateHeatFlow(k, A, deltaT, deltaX) {
    return -k * A * (deltaT / deltaX);
}

const runExperiment = (previousData) => {
    const numExperiments = 30;
    const experimentsData = previousData || []; // Initialize or use provided previous data

    for (let i = 0; i < numExperiments; i++) {
        const temp_difference = Math.random() * (13.464 - 6.536) + 6.536; // Randomize temperature difference

        // Retrieve previous experiment's data if available
        const previousTemp = experimentsData.length > 0 ? experimentsData[experimentsData.length - 1].finalTemp : 50;
        const temp_difference_combined = previousTemp - temp_difference;

        // Calculate the rate of heat flow
        const heatFlow = calculateHeatFlow(k_copper, area, temp_difference_combined, thickness);

        // Store experiment data
        const experimentData = {
            id: experimentsData.length + 1, // Unique ID
            time: i + 1, // Time starting from 1
            initialTemp: previousTemp,
            finalTemp: temp_difference_combined,
            heatFlow: heatFlow
        };
        experimentsData.push(experimentData);
    }

    return experimentsData;
}

// Sample data
const k_copper = 0.3; // Thermal conductivity of copper in W/(m*K)
const area = 0.01; // Cross-sectional area in square meters
const thickness = 0.001; // Thickness of the copper rod in meters

// Run the experiment
const experimentResults = runExperiment();

// Display the results
console.log("Experiment Results:");
console.log(experimentResults);
