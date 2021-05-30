import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import axios from "axios";

let useFetch = () => {
	const [data, setData] = useState(null);
	const requestUrl =
		"https://yalantis-react-school-api.yalantis.com/api/task0/users";

	useEffect(() => {
		const fetchData = async () => {
			await axios.get(requestUrl).then(data => setData(data.data));
		};
		fetchData();
	}, []);
	return data;
};

const Employees = props => {
	const result = useFetch();

	const genCharArray = (charA, charZ) => {
		let arr = [],
			i = charA.charCodeAt(0),
			j = charZ.charCodeAt(0);
		for (; i <= j; ++i) {
			arr.push(String.fromCharCode(i));
		}
		return arr;
	};

	const monthNames = [
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

	const optomizationDate = apiDate => {
		const date = new Date(apiDate);
		const checkZero = value => {
			return value < 10 ? "0" + value : value;
		};
		return checkZero(date);
	};

	return (
		<div className="Employees">
			<h1>Employees</h1>
			<div className="wrapper">
				{genCharArray("A", "Z").map((letter, index) => {
					const employeeInfo =
						result &&
						result.map(employee => {
							// Checking items for localStorage, and if was active so then display active status
							let checkStatus;
							props.birthArray.map(item => {
								if (item.status && item.lastName === employee.lastName) {
									checkStatus = item.status;
									localStorage.setItem(
										"dataEmployees",
										JSON.stringify(props.birthArray)
									);
								} else {
									return false;
								}
							});
							if (employee.lastName[0] === letter) {
								return (
									<Employee
										key={employee.id}
										firstName={employee.firstName}
										lastName={employee.lastName}
										day={optomizationDate(employee.dob).getDate()}
										month={
											monthNames[optomizationDate(employee.dob).getMonth()]
										}
										year={optomizationDate(employee.dob).getFullYear()}
										addBirthday={props.addBirthday}
										removeBirthday={props.removeBirthday}
										birthArray={props.birthArray}
										id={employee.id}
										status={checkStatus}
									/>
								);
							}
						});

					return (
						<div className="block" key={index}>
							<p>{letter}</p>
							<div className="employee-info">{employeeInfo}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Employees;
