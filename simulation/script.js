
// Global variables to store bus, line data, and Ybus matrix
let buses = [], lines = [], Y = [];

function generateBusTable() {
  var numBuses = parseInt(document.getElementById('numBuses').value);
  if (isNaN(numBuses) || numBuses <= 0) {
    alert("Please enter a valid number of Buses.");
    return;
  }

  var tableHtml = `
      <table>
          <tr>
              <th>Bus No.</th>
              <th>Bus Type</th>
              <th>Voltage (pu)</th>
              <th>Angle (degree)</th>
              <th>P<sub>gen</sub> (pu)</th>
              <th>Q<sub>gen</sub> (pu)</th>
              <th>P<sub>load</sub> (pu)</th>
              <th>Q<sub>load</sub> (pu)</th>
              <th>Q<sub>min</sub> (pu)</th>
              <th>Q<sub>max</sub> (pu)</th>
          </tr>
  `;

  for (var i = 1; i <= numBuses; i++) {
      tableHtml += `
          <tr>
              <td>${i}</td>
              <td><input type="text" id="busType${i}" required></td>
              <td><input type="number" id="busV${i}" required></td>
              <td><input type="number" id="busAng${i}" required></td>
              <td><input type="text" id="busPg${i}" required></td>
              <td><input type="text" id="busQg${i}" required></td>
              <td><input type="text" id="busPL${i}" required></td>
              <td><input type="text" id="busQL${i}" required></td>
              <td><input type="text" id="busQmin${i}" required></td>
              <td><input type="text" id="busQmax${i}" required></td>
          </tr>
      `;
  }
  
  tableHtml += '</table>';
  document.getElementById('busTableContainer').innerHTML = tableHtml;
}

// Function to autofill bus data for a five-bus network
 function autofillFiveBusNetwork() {
  var numBuses = 5;
  document.getElementById('numBuses').value = numBuses; // Update input field
  generateBusTable(); // Regenerate table with updated number of buses

  // Autofill data into the table
  var defaultbusType = [1, 2, 2, 3, 3];
  var defaultbusV = [1, 1, 1, 1, 1];
  var defaultbusAng = [0, 0, 0, 0, 0];
  var defaultbusPg = [0, 0.5, 1.0, 0, 0];
  var defaultbusQg = [0, 0, 0, 0, 0];
  var defaultbusPL = [0, 0, 0, 1.15, 0.85];
  var defaultbusQL = [0, 0, 0, 0.6, 0.4];
  var defaultbusQmin = [0, -5, -0.5, 0, 0];
  var defaultbusQmax = [0, 5, 0.5, 0, 0];

  for (var i = 0; i < numBuses; i++) {
    document.getElementById(`busType${i+1}`).value = defaultbusType[i]; // Bus type
    document.getElementById(`busV${i+1}`).value = defaultbusV[i]; // Voltage (pu)
    document.getElementById(`busAng${i+1}`).value = defaultbusAng[i]; // Angle (degree)
    document.getElementById(`busPg${i+1}`).value = defaultbusPg[i]; // Pgen (pu)
    document.getElementById(`busQg${i+1}`).value = defaultbusQg[i]; // Qgen (pu)
    document.getElementById(`busPL${i+1}`).value = defaultbusPL[i]; // Pload (pu)
    document.getElementById(`busQL${i+1}`).value = defaultbusQL[i]; // Qload (pu)
    document.getElementById(`busQmin${i+1}`).value = defaultbusQmin[i]; // Qload (pu)
    document.getElementById(`busQmax${i+1}`).value = defaultbusQmax[i]; // Qload (pu)
  }
}

// Function to autofill bus data for a five-bus network
function autofillFourteenBusNetwork() {
  var numBuses = 14;
  document.getElementById('numBuses').value = numBuses; // Update input field
  generateBusTable(); // Regenerate table with updated number of buses

  // Autofill data into the table
  var defaultbusType = [1, 2, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3];
  var defaultbusV = [1.06, 1.045, 1, 1, 1, 1.07, 1, 1, 1, 1, 1, 1, 1, 1]; 
  var defaultbusAng = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var defaultbusPg = [0, 0.183, 0, 0, 0, 0.112, 0, 0, 0, 0, 0, 0, 0, 0];
  var defaultbusQg = [0, 0.05857, 0, 0, 0, 0.442, 0, 0, 0, 0, 0, 0, 0, 0];
  var defaultbusPL = [0, 0, 1.19, 0.4779, 0.07599, 0, 0, 0, 0.29499, 0.09, 0.03501, 0.06099, 0.135, 0.14901];
  var defaultbusQL = [0, 0, 0.08762, 0.039, 0.01599, 0, 0, 0.129, 0.16599, 0.05799, 0.018, 0.01599, 0.05799, 0.05001];
  var defaultbusQmin = [0, -5, 0, 0, 0, -5, 0, 0, 0, 0, 0, 0, 0, 0];
  var defaultbusQmax = [0, 5, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0];
  

  for (var i = 0; i < numBuses; i++) {
    document.getElementById(`busType${i+1}`).value = defaultbusType[i]; // Bus type
    document.getElementById(`busV${i+1}`).value = defaultbusV[i]; // Voltage (pu)
    document.getElementById(`busAng${i+1}`).value = defaultbusAng[i]; // Angle (degree)
    document.getElementById(`busPg${i+1}`).value = defaultbusPg[i]; // Pgen (pu)
    document.getElementById(`busQg${i+1}`).value = defaultbusQg[i]; // Qgen (pu)
    document.getElementById(`busPL${i+1}`).value = defaultbusPL[i]; // Pload (pu)
    document.getElementById(`busQL${i+1}`).value = defaultbusQL[i]; // Qload (pu)
    document.getElementById(`busQmin${i+1}`).value = defaultbusQmin[i]; // Qload (pu)
    document.getElementById(`busQmax${i+1}`).value = defaultbusQmax[i]; // Qload (pu)
    
  }
}

// Function to save bus data
function saveBusData() {
  buses = [];
  var numBuses = parseInt(document.getElementById('numBuses').value);
  for (var i = 0; i < numBuses; i++) {
    buses.push({
      V: parseFloat(document.getElementById(`busV${i+1}`).value),
      angle: parseFloat(document.getElementById(`busAng${i+1}`).value),
      Pg: parseFloat(document.getElementById(`busPg${i+1}`).value),
      Qg: parseFloat(document.getElementById(`busQg${i+1}`).value),
      PL: parseFloat(document.getElementById(`busPL${i+1}`).value),
      QL: parseFloat(document.getElementById(`busQL${i+1}`).value),
      type: parseFloat(document.getElementById(`busType${i+1}`).value),
      Qmax: parseFloat(document.getElementById(`busQmax${i+1}`).value),
      Qmin: parseFloat(document.getElementById(`busQmin${i+1}`).value),
    });
  }
}

// Function to generate line data input table
function generateLineTable() {
  var numLines = parseInt(document.getElementById('numLines').value);
  if (isNaN(numLines) || numLines <= 0) {
    alert("Please enter a valid number of lines.");
    return;
  }

  var tableHtml = `
      <table>
          <tr>
              <th>Line No.</th>
              <th>From Bus</th>
              <th>To Bus</th>
              <th>R (pu)</th>
              <th>X (pu)</th>
              <th>B (pu)</th>
              <th>Tx. Tap</th>
          </tr>
  `;

  for (var i = 1; i <= numLines; i++) {
      tableHtml += `
          <tr>
              <td>${i}</td>
              <td><input type="number" id="fromBus${i}" required></td>
              <td><input type="number" id="toBus${i}" required></td>
              <td><input type="text" id="R${i}" required></td>
              <td><input type="text" id="X${i}" required></td>
              <td><input type="text" id="Charging${i}" required></td>
              <td><input type="text" id="Tap${i}" required></td>
          </tr>
      `;
  }
  
  tableHtml += '</table>';
  document.getElementById('lineTableContainer').innerHTML = tableHtml;
}

// Function to autofill line data for six lines
function autofillSixLines() {
  var numLines = 6;
  document.getElementById('numLines').value = numLines; // Update input field
  generateLineTable(); // Regenerate table with updated number of lines

  // Autofill line data into the table
  var defaultFromBus = [1, 1, 2, 3, 3, 4];
  var defaultToBus = [2, 5, 3, 4, 5, 5];
  var defaultR = [0.042, 0.031, 0.031, 0.024, 0.053, 0.063];
  var defaultX = [0.168, 0.126, 0.126, 0.136, 0.210, 0.252];
  var defaultCharging = [0.082, 0.062, 0.062, 0.164, 0.102, 0.122];
  var defaultTap = [0, 0, 0, 0, 0, 0];

  for (var i = 0; i < numLines; i++) {
    document.getElementById(`fromBus${i+1}`).value = defaultFromBus[i];
    document.getElementById(`toBus${i+1}`).value = defaultToBus[i];
    document.getElementById(`R${i+1}`).value = defaultR[i];
    document.getElementById(`X${i+1}`).value = defaultX[i];
    document.getElementById(`Charging${i+1}`).value = defaultCharging[i];
    document.getElementById(`Tap${i+1}`).value = defaultTap[i];
  }
}

// Function to autofill line data for six lines
function autofillTwentyLines() {
  var numLines = 20;
  document.getElementById('numLines').value = numLines; // Update input field
  generateLineTable(); // Regenerate table with updated number of lines

  // Autofill data into the table
  var defaultFromBus = [1, 1, 2, 2, 2, 3, 4, 4, 4, 5, 6, 6, 6, 7, 7, 9, 9, 10, 12, 13];
  var defaultToBus = [2, 5, 3, 4, 5, 4, 5, 7, 9, 6, 11, 12, 13, 8, 9, 10, 14, 11, 13, 14];
  var defaultR = [0.0194, 0.054, 0.047, 0.0581, 0.0569, 0.067, 0.0134, 0, 0, 0, 0.095, 0.1229, 0.0661, 0, 0, 0.0318, 0.127, 0.082, 0.2209, 0.1709];
  var defaultX = [0.0592, 0.223, 0.1979, 0.1763, 0.1738, 0.171, 0.0421, 0.209, 0.5562, 0.2522, 0.1989, 0.2557, 0.1302, 0.1762, 0.011, 0.0845, 0.2703, 0.192, 0.1999, 0.3479];
  var defaultCharging = [0.1056, 0.984, 0.0876, 0.0748, 0.0678, 0.0692, 0.0256, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var defaultTap = [0, 0, 0, 0, 0, 0, 0, 0.978, 0.969, 0.932, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (var i = 0; i < numLines; i++) {
    document.getElementById(`fromBus${i+1}`).value = defaultFromBus[i];
    document.getElementById(`toBus${i+1}`).value = defaultToBus[i];
    document.getElementById(`R${i+1}`).value = defaultR[i];
    document.getElementById(`X${i+1}`).value = defaultX[i];
    document.getElementById(`Charging${i+1}`).value = defaultCharging[i];
    document.getElementById(`Tap${i+1}`).value = defaultTap[i];
  }
}

// Function to save line data
function saveLineData() {
  lines = [];
  var numLines = parseInt(document.getElementById('numLines').value);
  for (var i = 0; i < numLines; i++) {
    lines.push({
      from: parseInt(document.getElementById(`fromBus${i + 1}`).value),
      to: parseInt(document.getElementById(`toBus${i + 1}`).value),
      R: parseFloat(document.getElementById(`R${i + 1}`).value),
      X: parseFloat(document.getElementById(`X${i + 1}`).value),
      charging: parseFloat(document.getElementById(`Charging${i + 1}`).value),
      Tap: parseFloat(document.getElementById(`Tap${i + 1}`).value),
    });
  }
}

// Function to format complex numbers for display
function formatComplexNumber(complexNumber, decimals) {
  let real = parseFloat(complexNumber.re).toFixed(decimals);
  let imag = parseFloat(complexNumber.im).toFixed(decimals);
  return parseFloat(imag) >= 0 ? `${real} + ${imag}i` : `${real} - ${Math.abs(imag)}i`;
}

// Function to calculate the Ybus matrix
function calculateYbus() {
    saveBusData();
    saveLineData();

    var numBuses = buses.length;
    var numLines = lines.length;

    // Initialize Y matrix
    Ybus = Array.from({ length: numBuses }, () => Array.from({ length: numBuses }, () => math.complex(0, 0)));
    Ybus1 = Array.from({ length: numBuses }, () => Array.from({ length: numBuses }, () => math.complex(0, 0)));

    // Calculate line admittances and update Ybus
    for (var i = 0; i < numLines; i++) {
        var from = lines[i].from - 1; // Convert to zero-based index
        var to = lines[i].to - 1; // Convert to zero-based index
        var R = lines[i].R;
        var X = lines[i].X;
        var B = lines[i].charging / 2; // Half charging admittance at each end
        var tap = lines[i].Tap; // Tap changing transformer value, 1 if no transformer
        var admittance = math.divide(1, math.complex(R, X));
        var admittance1 = math.divide(1, math.complex(0, X));
        var shuntAdmittance = math.complex(0, B);
        if (tap > 0) {
            // Update Ybus matrix for tap-changing transformers
            var tapComplex = math.complex(tap, 0);
            var tapSquare = math.multiply(tapComplex, tapComplex);
            
            Ybus[from][to] = math.subtract(Ybus[from][to], math.multiply(admittance, tapComplex));
            Ybus[to][from] = Ybus[from][to]; // Symmetric matrix

            Ybus1[from][to] = math.subtract(Ybus1[from][to], math.multiply(admittance1, tapComplex));
            Ybus1[to][from] = Ybus1[from][to]; // Symmetric matrix


            var fromAdmittance = math.add(
                math.multiply(admittance, tap),
                math.multiply(tap, math.subtract(tap, 1), admittance),
                shuntAdmittance
            );

            //For from admittance without resistance-
            var fromAdmittance1 = math.add(
                math.multiply(admittance, tap),
                math.multiply(tap, math.subtract(tap, 1), admittance),
                shuntAdmittance
            );

            var toAdmittance = math.add(
                math.multiply(admittance, tap),
                math.multiply(math.subtract(1, tap), admittance),
                shuntAdmittance
            );

            //For to admittance without resistance-
            var toAdmittance1 = math.add(
                math.multiply(admittance, tap),
                math.multiply(math.subtract(1, tap), admittance),
                shuntAdmittance
            );

            // For Ybus1 (With resistance)
            Ybus[from][from] = math.add(Ybus[from][from], fromAdmittance);
            Ybus[to][to] = math.add(Ybus[to][to], toAdmittance);

            // For Ybus1 (Without resistance)
            Ybus1[from][from] = math.add(Ybus1[from][from], fromAdmittance1);
            Ybus1[to][to] = math.add(Ybus1[to][to], toAdmittance1);

        } else {
            // Regular update without tap-changing transformers
            // For Ybus (With resistance)
            Ybus[from][to] = math.subtract(Ybus[from][to], admittance);
            Ybus[to][from] = Ybus[from][to]; // Symmetric matrix

            Ybus[from][from] = math.add(Ybus[from][from], admittance, shuntAdmittance);
            Ybus[to][to] = math.add(Ybus[to][to], admittance, shuntAdmittance);


            
            // For Ybus1 (Without resistance)
            Ybus1[from][to] = math.subtract(Ybus1[from][to], admittance1);
            Ybus1[to][from] = Ybus1[from][to]; // Symmetric matrix

            Ybus1[from][from] = math.add(Ybus1[from][from], admittance1, shuntAdmittance);
            Ybus1[to][to] = math.add(Ybus1[to][to], admittance1, shuntAdmittance);

        }
    }
    console.log("Ybus1:", Ybus1);
    displayYbusMatrix();
}


// Function to display the Ybus matrix
function displayYbusMatrix() {
  var tableHtml = '<table><tr><th></th>';
  for (var i = 0; i < Ybus.length; i++) {
      tableHtml += `<th>${i+1}</th>`;
  }
  tableHtml += '</tr>';
  for (var i = 0; i < Ybus.length; i++) {
      tableHtml += `<tr><th>${i+1}</th>`;
      for (var j = 0; j < Ybus[i].length; j++) {
          tableHtml += `<td>${formatComplexNumber(Ybus[i][j], 4)}</td>`;
      }
      tableHtml += '</tr>';
  }
  tableHtml += '</table>';
  document.getElementById('ybusContainer').innerHTML = tableHtml;
}


// Function to run the power flow analysis Fast - Decoupled Method
function runLoadFlow() {
  saveBusData();
  saveLineData();

  if (!buses.length || !lines.length) {
      alert('Please generate and fill in the bus and line tables first.');
      return;
  }

//   let V = buses.map(bus => math.complex({ r: bus.V, phi: bus.angle * Math.PI / 180 }));
  let I = Array(buses.length).fill(math.complex(0, 0));
  
  let convergence = false;
  let iterations = 0;
  var Tolerance = parseFloat(document.getElementById('Tolerance').value);
  var MaIteration = parseInt(document.getElementById('MaIteration').value);

 var maxIterations = MaIteration;
 var toleranceLimit = Tolerance;

  //   const maxIterations = 100;  // Increased iteration limit
  //  const toleranceLimit = 10e-12;  // Adjusted tolerance limit
  // const Slack = 1;  //
  // const PV = 2;  // 
  // const PQ = 3;  // 

  var numBuses = buses.length;
  var numLines = lines.length;

            let type = buses.map(bus => bus.type);
            let Pg = buses.map(bus => bus.Pg);
            let Qg = buses.map(bus => bus.Qg);
            let Pd = buses.map(bus => bus.PL);
            let Qd = buses.map(bus => bus.QL);
            let Qmin = buses.map(bus => bus.Qmin);
            let Qmax = buses.map(bus => bus.Qmax);
            let Vmag = buses.map(bus => bus.V);
            let Vmag1 = buses.map(bus => bus.V);     //#
            let Vini = buses.map(bus => bus.V);     //#
            let delta = buses.map(bus => bus.angle);
            // let V = Vmag.map((vmag, i) => math.complex({ r: vmag, phi: delta[i] * Math.PI / 180 }));

            let P_sch = Pg.map((pg, i) => pg - Pd[i]);
            let Q_sch = Qg.map((qg, i) => qg - Qd[i]);
            
            console.log("Vmag1:", Vmag1);
            console.log("Vini:", Vini);


            let accuracy = 1;
            let iter = 0;


            while (accuracy >=  toleranceLimit && iter < maxIterations) {
              iter++;  
              console.log("iter:", iter);
              
              let type = buses.map(bus => bus.type);
              let pvIndices1 = buses.map((bus, i) => bus.type === 2 ? i : -1).filter(i => i !== -1);

              pvIndices1.forEach((i) => {Vmag1[i] = Vini[i]});



              let P_cal = Array(numBuses).fill(0);
                let Q_cal = Array(numBuses).fill(0);
                let Q_c = Array(numBuses).fill(0);



                for (let i = 0; i < numBuses; i++) {
                    for (let n = 0; n < numBuses; n++) {
                        P_cal[i] += Vmag[i] * Vmag[n] * math.abs(Ybus[i][n])* math.cos(math.arg(Ybus[i][n]) + delta[n] - delta[i]);

                        Q_cal[i] -= Vmag[i] * Vmag[n] * math.abs(Ybus[i][n]) * math.sin(math.arg(Ybus[i][n])+ delta[n] - delta[i]);
                        
                        Q_c[i] -= Vmag1[i] * Vmag1[n] * math.abs(Ybus[i][n]) * math.sin(math.arg(Ybus[i][n])+ delta[n] - delta[i]);    
                    }

                    let Q_check = Qd.map((qd, i) => qd + Q_c[i]);

                    console.log("P_cal:", P_cal);
                    console.log("Q_cal:", Q_cal);
                    console.log("Q_c:", Q_c);
                    console.log("Q_check:", Q_check);

                    if (buses[i].type ==2){
                        if (Qmax[i] !== 0) {
                            if (Q_check[i] > Qmax[i]) {
                                Qg[i] = Qmax[i];
                                buses[i].type = 3; // PV becomes PQ temporarily
                            } else if (Q_check[i] < Qmin[i]) {
                                Qg[i] = Qmin[i];
                                buses[i].type = 3; // PV becomes PQ temporarily
                            } else {
                                buses[i].type = 2; // PV restored
                                Vmag1[i] = Vini[i];
                            }
                        }
                    }

                    console.log("Qmax:", Qmax);
                    console.log("Qmin:", Qmin);
                }

                // For the FDLF the DP/V and DQ/V need to be evaluated 

                
                let pvIndices = buses.map((bus, i) => bus.type === 2 ? i : -1).filter(i => i !== -1);
                let pvpqIndices = buses.map((bus, i) => bus.type !== 1 ? i : -1).filter(i => i !== -1);
                let pqIndices = buses.map((bus, i) => bus.type === 3 ? i : -1).filter(i => i !== -1);

                console.log("pvIndices:", pvIndices);
                console.log("pvpqIndices:", pvpqIndices);
                console.log("pqIndices:", pqIndices);
              
                let DP1 = math.subtract(
                    P_sch.slice(1, numBuses), // Slice from 2 to numBuses (0-based index, so slice(1, numBuses) in JS)
                    P_cal.slice(1, numBuses)  // Slice from 2 to numBuses
                );

                // // Get the indices of PV and PQ buses (non-slack buses)

                // Extract the last 4 elements of Vmag (since Vmag has 5 elements, we want indices 1 through 4)
                let VmagSubset = Vmag.slice(1, numBuses); // Get elements from index 1 to the end

                // Perform element-wise division for DP1 by the corresponding last 4 elements of Vmag
                let DP = DP1.map((dp, i) => dp / VmagSubset[i]); // Element-wise division


                // console.log("pvpqIndixces:", pvpqIndixces);
                console.log("DP1:", DP1);
                console.log("Vmag:", Vmag);

                // Calculate DQ
                let DQ1 = pqIndices.map(i => Qg[i] - Q_cal[i] - Qd[i]);
                
                let VmagSubset1 = pqIndices.map(i => Vmag[i]);
                let DQ = DQ1.map((dq, q) => dq / VmagSubset1[q]);


                console.log("DP:", DP);
                    console.log("DQ:", DQ);
              
                let DF = DP.concat(DQ);
                // DF = DF.map(num => parseFloat(num.toFixed(4)));
                
                console.log("DF:", DF);

                let  {J, J11, J22, J33, J44} = calculateJacobian(numBuses, Vmag, delta, Ybus, buses);

                console.log("J11 :", J11);
                console.log("J22 :", J22);
                console.log("J33 :", J33);
                console.log("J44 :", J44);

                let J_inv = math.inv(J);
                let B_inv = math.inv(J11);
                let BB_inv = math.inv(J44);

                console.log("J_inv:", J_inv);
                console.log("B_inv:", B_inv);
                console.log("BB_inv:", BB_inv);


                let DX = math.multiply(J_inv, DF);

                let DX1 = math.multiply(B_inv, DP);
                let DX2 = math.multiply(BB_inv, DQ);
                console.log("DX1:", DX1);
                console.log("DX2:", DX2);

                // let DX = math.lusolve(J, DF);
                console.log("DX:", DX);

                // Convert the Math.js matrix DX into a simple JavaScript array (vector)
                      let DX_vector = DX.toArray();

                // Check and update delta values for PV and PQ buses
                pvpqIndices.forEach((i, idx) => {
                    let dxValue = DX_vector[idx]; // Access the value from the converted vector
                    if (delta[i] !== undefined && dxValue !== undefined && !isNaN(dxValue)) {
                        delta[i] = math.add(delta[i], dxValue); // Safely update delta

                    } else {
                        console.error(`Error updating delta: Index ${i} or ${idx} out of bounds or invalid in delta or DX_vector`);
                    }
                });

                    console.log("Updated delta:", delta);

                    // Check and update Vmag values for PQ buses
                    pqIndices.forEach((i, idx) => {
                        let DX_index = pvpqIndices.length + idx;         // Calculate the correct index for Vmag update
                        let dxValue = DX_vector[DX_index];              // Access the value from the converted vector
                        if (Vmag[i] !== undefined && dxValue !== undefined && !isNaN(dxValue)) {
                            Vmag[i] = math.add(Vmag[i], dxValue);       // Safely update Vmag
                            Vmag1[i] = Vmag[i]; 
                        } else {
                            console.error(`Error updating Vmag: Index ${i} or ${DX_index} out of bounds or invalid in Vmag or DX_vector`);
                        }
                    });

                    console.log("Updated Vmag:", Vmag);

                // accuracy = math.norm(DF);
                accuracy = Math.max(...DF.map(Math.abs));

                console.log("accuracy:", accuracy);

               let Va = buses.map((bus, i) => math.complex({ r: Vmag[i], phi: delta[i] }));
              console.log("V:", Va);

buses.forEach((bus, i) => {
    if (bus.type === 1) {  // Slack bus
        bus.Pg = P_cal[i];
        bus.Qg = Q_cal[i];
    } else if (bus.type === 2) {  // PV bus
        bus.Pg = P_cal[i];
        bus.Qg = Q_cal[i];
    } else if (bus.type === 3) {  // PQ bus
        bus.Pg = P_cal[i]+bus.PL;
        bus.Qg = Q_cal[i]+bus.QL;
    }
});

 // Calculate line flows and losses
    // Initialize variables for line parameters


let suceptancia = [];
let y = [];
let z = [];
let tap = [];
let FromNode = [];
let ToNode = [];



// Initialize defaultTap with the appropriate length
let defaultTap = Array(lines.length).fill(0);

lines.forEach((line, k) => {
    if (line.Tap === 0) {
        // If tap value is 0, assign defaultTap[k] to 1
        defaultTap[k] = 1;
    } else {
        // Otherwise, assign the reciprocal of line.Tap
        defaultTap[k] = math.divide(1, line.Tap);
    }
});

console.log("defaultTap:", defaultTap);



// Populate line parameters for each line
lines.forEach((line, k) => {
    let b = math.complex(0, line.charging / 2);
    suceptancia.push(b);
    y.push(math.divide(1, math.complex(line.R, line.X)));
    z.push(math.complex(line.R, line.X));
    tap.push(line.Tap);
    FromNode.push(line.from - 1); // Assuming zero-based indexing
    ToNode.push(line.to - 1);
});

console.log("tap:", tap);
console.log("y:", y);
console.log("z:", z);
console.log("suceptancia:", suceptancia);
console.log("FromNode:", FromNode);
console.log("ToNode:", ToNode);

// Calculate complex power flows Ss and Sr for each line
let Ss = lines.map((line, k) => {
    // Calculate Ss[k] for power flow from i to j
    let term1 = math.divide(
        math.subtract(Va[FromNode[k]], math.multiply(defaultTap[k], Va[ToNode[k]])),
        math.multiply(math.pow(math.abs(defaultTap[k]), 2), z[k])
    );
    console.log("term1:", term1);

    let term2 = math.multiply(Va[FromNode[k]], suceptancia[k]);
    console.log("term2:", term2);

    return math.multiply(Va[FromNode[k]], math.conj(math.add(term1, term2)));
});
console.log("Ss:", Ss);

let Sr = lines.map((line, k) => {
    // Calculate Sr[k] for power flow from j to i
    let term3 = math.divide(
        math.subtract(Va[ToNode[k]], Va[FromNode[k]]),
        math.multiply(defaultTap[k], z[k])
    );
    console.log("term3:", term3);

    let term4 = math.multiply(Va[ToNode[k]],     
        math.add(math.divide(math.subtract(defaultTap[k], 1), math.multiply(defaultTap[k], z[k])), suceptancia[k])          
    );
    console.log("term4:", term4);

    return math.multiply(Va[ToNode[k]], math.conj(math.add(term3, term4)));
});
console.log("Sr:", Sr);

// Calculate real and reactive power flows
let Pij = Ss.map(S => math.re(S));
let Qij = Ss.map(S => math.im(S));
let Pji = Sr.map(S => math.re(S));
let Qji = Sr.map(S => math.im(S));

// Calculate power losses
let P_loss = Pij.map((P, k) => P + Pji[k]);
let Q_loss = Qij.map((Q, k) => Q + Qji[k]);

// Calculate total power losses
let TotalP_loss = math.sum(P_loss.map(P => math.abs(P)));
let TotalQ_loss = math.sum(Q_loss.map(Q => math.abs(Q)));

// Display the results
displayResults(Vmag, delta, iter, Pij, Qij, Pji, Qji, P_loss, Q_loss, lines, TotalP_loss, TotalQ_loss);
}

}   // Load Flow function closed 


// Function to display the results
function displayResults(Vmag, delta, iter, Pij, Qij, Pji, Qji, P_loss, Q_loss, lines, TotalP_loss, TotalQ_loss) {
  let resultsHtml = `<p>Number of iterations: ${iter}</p>`;

  // Display bus data
  resultsHtml += `<table><tr><th>Bus No.</th><th>Voltage (pu)</th><th>Angle (degree)</th><th>P<sub>gen</sub> (pu)</th><th>Q<sub>gen</sub> (pu)</th><th>P<sub>load</sub> (pu)</th><th>Q<sub>load</sub> (pu)</th></tr>`;

  Vmag.forEach((v, index) => {
      const bus = buses[index];
      const mag = math.abs(v).toFixed(5);
      const angle = ((delta[index]) * 180 / Math.PI).toFixed(5);
      resultsHtml += `<tr><td>${index + 1}</td><td>${mag}</td><td>${angle}</td><td>${bus.Pg.toFixed(4)}</td><td>${bus.Qg.toFixed(4)}</td><td>${bus.PL.toFixed(4)}</td><td>${bus.QL.toFixed(4)}</td></tr>`;
  });
  
  resultsHtml += "</table>";

// Display line flows
  resultsHtml += `<h2>Line Flows</h2><table><tr><th>Line No.</th><th>From Bus</th><th>To Bus</th><th>P<sub>line(From-To)</sub> (pu)</th><th>Q<sub>line(From-To)</sub> (pu)</th><th>P<sub>line(To-From)</sub> (pu)</th><th>Q<sub>line(To-From)</sub> (pu)</th></th><th>P<sub>loss</sub> (pu)</th><th>Q<sub>loss</sub> (pu)</th></tr>`;
lines.forEach((line, index) => {
    resultsHtml += `<tr><td>${index + 1}</td><td>${line.from}</td><td>${line.to}</td><td>${Pij[index].toFixed(4)}</td><td>${Qij[index].toFixed(4)}</td><td>${Pji[index].toFixed(4)}</td><td>${Qji[index].toFixed(4)}</td><td>${P_loss[index].toFixed(4)}</td><td>${Q_loss[index].toFixed(4)}</td></tr>`;
});
resultsHtml += "</table>";
resultsHtml += `<p>Total real power losses (pu): ${TotalP_loss.toFixed(6)}.</p>`;
resultsHtml += `<p>Total reactive power losses (pu): ${TotalQ_loss.toFixed(6)}.</p>`;
document.getElementById('loadFlowResults').innerHTML = resultsHtml;
}

 function calculateJacobian(numBuses, Vmag, delta, Ybus, buses) {
    // Initialize J1, J2, J3, J4 as zero matrices
    let J1 = math.zeros(numBuses, numBuses);
    let J2 = math.zeros(numBuses, numBuses);
    let J3 = math.zeros(numBuses, numBuses);
    let J4 = math.zeros(numBuses, numBuses);

    // Calculate J1
    for (let i = 0; i < numBuses; i++) {
        for (let j = 0; j < numBuses; j++) {
           
                J1.set([i, j], J1.get([i, j]) - math.im(Ybus1[i][j]));
          
        }
    }

    // Calculate J2
    for (let i = 0; i < numBuses; i++) {
        for (let j = 0; j< numBuses; j++) {
                J2.set([i, j], J2.get([i, i]));
            
        }
    }

    // Calculate J3
    for (let i = 0; i < numBuses; i++) {
        for (let j = 0; j < numBuses; j++) {
            
                J3.set([i, j], 0); // Ensure symmetry
            
        }
    }

    // Calculate J4
    for (let i = 0; i < numBuses; i++) {
        for (let j = 0; j < numBuses; j++) {
              J4.set([i, j], J4.get([i, j]) - math.im(Ybus[i][j]));  
            }        
    }
    
    // Extract submatrix J11
    let pv_pq_indices = buses.map((bus, i) => bus.type !== 1 ? i : -1).filter(i => i !== -1);
    let J11 = J1.subset(math.index(pv_pq_indices, pv_pq_indices));
    // console.log("J11 :", J11);


    // Extract submatrix J22
    let pq_indices = buses.map((bus, idx) => (bus.type === 3 ? idx : -1)).filter(idx => idx !== -1);
    let J22 = J2.subset(math.index(pv_pq_indices, pq_indices));
    // console.log("J22 :", J22);


    // Extract submatrix J33
    let J33 = J3.subset(math.index(pq_indices, pv_pq_indices));
    // console.log("J33 :", J33);


    // Extract submatrix J44
    let J44 = J4.subset(math.index(pq_indices, pq_indices));

    // console.log("J44 :", J44);

    try {
    // Horizontal concatenation (along columns)
    let topRow = math.concat(J11, J22, 1);
    let bottomRow = math.concat(J33, J44, 1);

    // Vertical concatenation (along rows)
    let J = math.concat(topRow, bottomRow, 0);
    // console.log("Jacobian matrix J:", J);

    let J_inv = math.inv(J);

    return  {J, J11, J22, J33, J44};

    
} catch (error) {
    console.error("Error in concatenating matrices:", error);
}
}
