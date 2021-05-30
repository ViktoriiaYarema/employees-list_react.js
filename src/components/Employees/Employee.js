import React from "react";

const Employee = props => {
	const changeActive = state => {
		const info = {
			firstName: props.firstName,
			lastName: props.lastName,
			day: props.day,
			month: props.month,
			year: props.year,
			status: props.status,
		};

		if (state === true) {
			info.status = true;
			props.addBirthday(info);
		}
		if (state === false) {
			info.status = false;
			props.removeBirthday(info);
		}
	};

	return (
		<div className="Employee">
			<div
				className="Employee__name"
				style={props.status ? { color: "blue" } : { color: "black" }}
			>
				{props.lastName} {props.firstName}
			</div>
			<div className="Employee__radio-btns">
				<label className="radio">
					not-active
					<input
						name={props.id}
						type="radio"
						id="no-active"
						defaultChecked={!props.status}
						onChange={() => changeActive(false)}
					/>
				</label>
				<label className="radio">
					active
					<input
						name={props.id}
						type="radio"
						id="active"
						defaultChecked={props.status}
						onChange={() => changeActive(true)}
					/>
				</label>
			</div>
		</div>
	);
};

export default Employee;
