import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	Paper,
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	TextField,
} from "@material-ui/core";
import { Create as CreateIcon, Save as SaveIcon } from "@material-ui/icons";

const myUsernameFetch = (myToken) => {
	try {
		return axios
			.get(`${process.env.REACT_APP_FITNESS_TRACKR_API_URL}users/me`, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${myToken}`,
				},
			})
			.then(({ data: { username } }) => {
				return username;
			});
	} catch (err) {
		console.error(err);
	}
};

const myRoutinesFetch = (username, myToken) => {
	try {
		return axios
			.get(
				`${process.env.REACT_APP_FITNESS_TRACKR_API_URL}users/${username}/routines`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${myToken}`,
					},
				}
			)
			.then(({ data }) => {
				return data;
			});
	} catch (err) {
		console.error(err);
	}
};

const MyRoutines = () => {
	let myUsername;
	const [myRoutines, setMyRoutines] = useState([]);
	const [editMode, setEditMode] = useState(false);

	useEffect(async () => {
		const myToken = JSON.parse(localStorage.getItem("token"));
		if (myToken) {
			myUsername = await myUsernameFetch(myToken);
			const routines = await myRoutinesFetch("ilea70501", myToken);
			setMyRoutines(routines);
		}
	}, []);

	const onEdit = () => {
		setEditMode(true);
	};

	const onSave = (id) => {
		setEditMode(false);
		console.log(id);
	};

	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell align="right">ID</TableCell>
						<TableCell align="right">Name</TableCell>
						<TableCell align="right">Goal</TableCell>
						<TableCell align="right">Creator Name</TableCell>
						<TableCell align="right">Is Public</TableCell>
						<TableCell align="right"></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{myRoutines.map((routine) => {
						return (
							<TableRow key={routine.id}>
								<TableCell component="th" scope="row">
									{routine.id}
								</TableCell>
								<TableCell align="right">
									{editMode ? (
										<TextField value={routine.name}></TextField>
									) : (
										routine.name
									)}
								</TableCell>
								<TableCell align="right">
									{editMode ? (
										<TextField value={routine.goal}></TextField>
									) : (
										routine.goal
									)}
								</TableCell>
								<TableCell align="right">{routine.creatorName}</TableCell>
								<TableCell align="right">{routine.isPublic}</TableCell>
								<TableCell align="right">
									{editMode ? (
										<SaveIcon
											style={{ cursor: "pointer" }}
											onClick={() => {
												onSave(routine.id);
											}}
										/>
									) : (
										<CreateIcon
											style={{ cursor: "pointer" }}
											onClick={onEdit}
										/>
									)}
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default MyRoutines;
