import React from "react";

const EmployeesBirth = props => {
	let monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	// Modifying the array to start display employees from the current month
	let arrMonth = [];
	monthNames.map((item, index) => {
		if (monthNames[new Date().getMonth()] === item) {
			let arr = monthNames.splice(0, index);
			monthNames.push(arr);
		}
	});
	const flatten = array => {
		return array.reduce((sum, item) => {
			return Array.isArray(item)
				? sum.concat(flatten(item))
				: sum.concat([item]);
		}, []);
	};
	monthNames = flatten(monthNames);

	return (
		<div className="EmployeesBirthList">
			<h1>Employees Birthday</h1>
			<div className="container">
				{monthNames.map(month => {
					props.birthArray.map(item => {
						if (item.month === month) {
							arrMonth.push(month);
							arrMonth = arrMonth.filter((arrMonth, index, arr) => {
								return arr.indexOf(arrMonth) === index;
							});
						}
					});
				})}
				{props.birthArray.length === 0
					? "Employees List is empty"
					: arrMonth.map((month, index) => {
							return (
								<ul className="EmployeeList" key={index}>
									<p className="EmployeeList__month">{month}</p>
									{props.birthArray.map((item, index) => {
										if (item.month === month) {
											return (
												<li key={index}>
													{item.lastName} {item.firstName} - {item.day}{" "}
													{item.month}, {item.year} year
												</li>
											);
										}
									})}
								</ul>
							);
					  })}
			</div>
		</div>
	);
};

export default EmployeesBirth;
