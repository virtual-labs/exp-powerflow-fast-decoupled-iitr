
<div style="font-family: 'Nunito Sans', sans-serif; font-size: 20px;text-align: justify;">
<h2>Introduction</h2>

The power flow analysis, also known as load flow analysis, is essential for determining the steady-state operating conditions of a power system. It involves calculating the steady-state active (P) and reactive (Q) powers, voltage magnitude (V), and and the angle ($\delta$) each bus of the system. In general, only two of them are known and other two remain unknown at a bus. Based on these steady-state known and unknown quantities, each bus in the power system are classified as load bus (or PQ bus), generator bus (or PV bus), and slack bus (or reference bus). The known and unknown quantities of these buses are listed below -<br> 

###  1.	Bus Type – 

| Bus Type                | Explanation                                                                                                      | Known        | Unknown       |
|-------------------------|---------------------------------------------------------------------------------------------------------------------|------------------|-------------------|
| Load bus or PQ bus      | A bus connected only to loads, i.e., P and Q, are known as a load bus. Generally, P and Q are specified for such type of buses. | P and Q      | V and $\delta$ |
| Generator bus or PV bus | A bus connected to a generator is known as a generator bus. In general, P and V of such buses are known. A generator can maintain the voltage on a bus till its reactive power capability which is important for this bus to continue to operate as a PV bus. | P and V      | Q and $\delta$  |
| Slack or reference bus  | One bus in a system is specified as a slack bus whose V and $\delta$ are specified and P and Q are calculated. Here, please note that P is unknown for this bus which takes care of the mismatch in the generation and losses. Generally, the largest generator in the system is considered as the slack bus. | V and $\delta$ | P and Q        |


###  2. Power Flow Equations – 

<br>

$$
\begin{equation}
    

\begin{bmatrix}
I_{1}
\\ I_{2}
\\ \vdots 
\\ I_{i}
\\ \vdots 
\\ I_{n}
\end{bmatrix}\\

=\begin{bmatrix}
 Y_{11}&   Y_{12}&   \cdots &   Y_{1i}&   \cdots &  Y_{1n}\\ 
 Y_{21}&   Y_{22}&   \cdots &   Y_{2i}&   \cdots &  Y_{2n}\\ 
\vdots&   \vdots&   \vdots &   \vdots&   \vdots &  \vdots \\ 
 Y_{i1}&   Y_{i2}&   \cdots &   Y_{ii}&   \cdots &  Y_{in}\\ 
\vdots&   \vdots&   \vdots &   \vdots&   \vdots &  \vdots \\ 
 Y_{n1}&   Y_{n2}&   \cdots &   Y_{ni}&   \cdots &  Y_{nn} 
\end{bmatrix} 

\begin{bmatrix}
V_{1}
\\ V_{2}
\\ \vdots 
\\ V_{i}
\\ \vdots 
\\ V_{n}
\end{bmatrix}
\end{equation}
$$

<br>

$$
\begin{aligned}
    I_{bus} = Y_{bus}V_{bus}
\end{aligned}
$$

Where, $I_{bus}$  is the vector of the injected bus currents and $V_{bus}$ is the vector of bus voltages measured from the reference node. $Y_{bus}$ is known as the bus admittance matrix.

For each bus $i$ :

$$
\begin{equation}
    I_{i} = \sum_{j=1}^{n} Y_{ij} V_{j} = Y_{ii} V_{i} + \sum_{j=1, j \neq i}^{n} Y_{ij} V_{j}
\end{equation}
$$

Complex power injection at bus $i$ is given by, $S_{i}=P_{i}+jQ_{i}=V_{i}I_{i}^{*}$ . Inserting (2) and separating real and imaginary terms, the power flow equations for active power and reactive power are obtained and given in (3) and (4). 

$$
\begin{equation}
    P_{i}=\sum_{j=1}^{n}|V_{i}||V_{j}||Y_{ij}|cos(\theta_{ij}+\delta_{j}-\delta_{i})
\end{equation}
$$
$$
\begin{equation}
    Q_{i}=-\sum_{j=1}^{n}|V_{i}||V_{j}||Y_{ij}|sin(\theta_{ij}+\delta_{j}-\delta_{i})
\end{equation}
$$

Where,  $|V_{i}|$ and $\delta_{i}$ are the voltage magnitude and angle at bus $i$, and $|Y_{i}|$  and $\theta_{ij}$ are the magnitude and angle of the admittance matrix corresponding to the element at $i^{th}$ row and $j^{th}$ column. For a $‘n’$ bus system, there are total $‘2n’$ load flow equations and $‘2n’$ variables. 


<br>

## Fast Decoupled method for power flow analysis  – 
The Fast Decoupled method is a simplified version of the Newton-Raphson method. It is primarily used for solving power flow problems in large power systems with higher computational speed. Fast Decoupled is based on certain approximations that make the Jacobian matrix easier to compute and solve. These approximations are explained below – 

•   In normal steady state operating conditions, the voltage magnitudes are approximately equal to 1.0.

•	The transmission lines are mostly reactive in nature, the conductances are very small as compared to the susceptance  $G_{ij}≪ B_{ij}$.

•	For normal steady state operating conditions the angle difference between two buses is very small, i.e.,  $δ_{i}-δ_{i}≈0$. 

•	The injected reactive power at any bus is much less than the reactive power consumed by the elements connected to this bus when these elements are shorted to the ground, i.e.,  $Q_{i}≪B_{ii}. V_i^2$. 

With these approximations, the decoupling of the power flow equations leads to simplified method. Fast Decoupled linearizes the power flow problem by splitting the Jacobian matrix into two smaller and sparse matrices, i.e., $J_{1}$ and $J_{4}$. The Jacobian matrix elements $J_{2}$ and $J_{3}$ becomes zero due to the approximations $(∂P_i)/(∂V_i )≈0$ and $(∂Q_i)/(∂δ_i )≈0$, respectively. The simplified Fast Decoupled formulation is given below – 

$$
\begin{aligned}
\left[\begin{array}{ll}
J_1 & 0 \\
0 & J_4
\end{array}\right]\left[\begin{array}{l}
\Delta \delta \\
\Delta V
\end{array}\right]=\left[\begin{array}{l}
\Delta P \\
\Delta Q
\end{array}\right]
\end{aligned}
$$

After simplifying the sub-matrices $J_{1}$ and $J_{4}$, the above expression reduces to,

$$
\begin{equation}
\frac {\Delta P}{V} = [B'] \Delta \delta
\end{equation}
$$

$$
\begin{equation}
\frac {\Delta Q}{V} = [B''] \Delta V
\end{equation}
$$

Where, $B'$ is a constant matrix of dimension $(N-1)×(N-1)$ and $B''$ is a constant matrix of dimension $(N-M)×(N-M)$. The elements of the $B’$ matrix are the negative of the imaginary part of the $Y_{bus}$ matrix formed by ignoring the series resistances in the equivalent $ \pi$ circuits of the transmission lines. Moreover, the elements of the $B''$ matrix are the negative of the imaginary part of the $Y_{bus}$ matrix formed by considering the series resistances in the equivalent $ \pi$ circuits of the transmission lines. 

Let, $\Delta X=\left[\begin{array}{l}
\Delta \delta \\
\Delta V
\end{array}\right]$ is the correction vector and $\left[\begin{array}{l}
\Delta P \\
\Delta Q
\end{array}\right]$  is the real and reactive power mismatch vector.  $\Delta P$ and $\Delta Q$ for each bus are calculated (expect slack bus). The power mismatch vector for real and reactive power is given below, where $P^{spec}/Q^{spec}$ are the scheduled active and reactive power and $P^{cal}/Q^{cal}$ are the calculated active and reactive power at a bus $i$ substituting the initial guess.

$$
\begin{aligned}
[mis]=\left[\begin{array}{l}
\Delta P \\
\Delta Q
\end{array}\right]=\left[\begin{array}{l}
P^{\text {spec }}-P^{c a l} \\
Q^{s p e c}-Q^{c a l}
\end{array}\right]
\end{aligned}
$$

To perform the power flow analysis, an initial guess for the bus voltage magnitude is required. For the normal steady-state operating conditions, the bus voltage magnitudes maintain between $0.95-1.05$ p.u. Therefore, all the unknown bus voltages are initialized at $1 \angle 0^0$ p.u., also called as a flat start. Let us assume that the first bus is a slack bus and from bus $2$ to $M$ bus are the PV buses for a $N$ bus system. The remaining $N-M-1$ buses are the PQ buses. 

The complete procedure for Fast Decoupled power flow is as given below - 

<b>Step 1:</b> Initialize $V_{j}^{(0)}=V_j^{(spec)} \angle0^0$ for $j=2,3,\ldots,m$ and $V_j^{(0)}=1\angle0^{0}$ for $j=\left(m+1\right),\ \left(m+2\right),\ldots,n$. Let the initial vectors for voltage magnitudes and angles be denoted as $V^{(0)}$ and $\delta^{(0)}$, respectively.
Set iteration count $k=1$. 

<b>Step 2:</b> Perform the following operations for $i=2,3,\ldots,m$.

<br>&nbsp;&nbsp;&nbsp;&nbsp;(a) Calculate, $Q_i^{(k)}$ considering $V_i^{(spec)}$ for $i=2,3,\ldots,m$ and $|V_i^{(k-1)}|$ for $i=m+1,\ldots,N$.

$$
\begin{equation}
Q_i^{(k)}=-\sum_{j=1}^{n}\left|V_i^{(k-1)}\right|\left|V_j^{(k-1)}\right|\left|Y_{ij}\right|\sin{\left(\theta_{ij}\ {+\ \delta}_j^{(k-1)}-\delta_i^{(k-1)}\right)} 
\end{equation}
$$

<br>&nbsp;&nbsp;&nbsp; (b) If $Q_i^{min}<Q_i^{(k)}<Q_i^{max}$, then assign $|V_i^{(k)}|$ = $V_i^{(spec)}$ and the $i^{th}$ bus is retained as PV bus for $k^{th}$ iteration. 

<br>&nbsp;&nbsp;&nbsp; (c) If $Q_i^{(k)}>Q_i^{max}$, then set $Q_i^{spec}=Q_i^{max}$, and if $Q_i^{(k)}<Q_i^{min}$, then set $Q_i^{spec}=Q_i^{min}$. In both scenarios, the respective bus is converted to PQ bus. The voltage of the respective bus becomes an unknown for the current iteration. It introduces extra unknown quantities and to evaluate this, an extra equation is needed, which is obtained from (7). Therefore, when the $i^{th}$ bus is converted to the PQ bus, the dimensions of both $\Delta P$ and $\Delta Q$ are increased by one. 

<br><b>Step 3:<b>  Compute the vectors $P^{cal
}$ and $Q^{cal}$ with the vectors $\delta^{(k-1)}$ and $V^{(k-1)}$ to form the mismatch vector $\Delta M$.

<br><b>Step 4:<b> Compute $error=max (|\Delta M|)$.

<br><b>Step 5:<b> If $error  \leq \epsilon \hspace{0.25cm}   (pre- specified \hspace{0.15cm} tolerance)$, then the final vectors are $\delta^{(k-1)}$ and $V^{(k-1)}$ and print the results. Otherwise go to step 6. 

<br><b>Step 6:<b> Evaluate the correction vector $\Delta X$ i.e., $\Delta \delta = [B']^{-1} (\frac{\Delta P}{V})$ and $\Delta V = [B'']^{-1} (\frac{\Delta Q}{V})$.

<br><b>Step 7:<b> Update the solution vectors $\delta^{(k)}=\delta^{(k-1)}+\Delta \delta$ and $V^{(k)}=V^{(k-1)}+ \Delta V$. Update $k=k+1$ and go back to step 2. 