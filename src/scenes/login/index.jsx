import { Box, Button, FormControl, TextField, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { Formik } from 'formik';
import { tokens } from '../../theme';

export default function LoginPage() {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const handleFormSubmit = (values) => {
		console.log(values);
	};
	return (
		<Box
			m="20rem auto"
			width="50rem"
			borderRadius="8px"
			padding="16px"
			bgcolor="#fff"
			style={{
				display: 'flex',
				flexDirection: 'column',
			}}>
			<Box display="flex" justifyContent="center" alignItems="center">
				<Header title="Login Here" color={colors.grey[900]} />
			</Box>

			<Formik onSubmit={handleFormSubmit} initialValues={initialValues}>
				{({ values, handleSubmit, handleBlur, handleChange }) => (
					<form
						name="form"
						onSubmit={handleSubmit}
						style={{ width: '100ch', alignSelf: 'center' }}>
						<Box
							display="flex"
							flexDirection="column"
							gap="16px"
							style={{
								display: 'flex',
							}}>
							<FormControl>
								<TextField
									margin="0 auto"
									color="info"
									focused
									fullWidth
									variant="filled"
									type="text"
									label="Username"
									value={values.username}
									onBlur={handleBlur}
									onChange={handleChange}
									name="username"
									inputProps={{ style: { color: colors.grey[900] } }}
								/>
							</FormControl>
							<FormControl>
								<TextField
									color="info"
									focused
									fullWidth
									variant="filled"
									type="password"
									label="Password"
									value={values.password}
									onBlur={handleBlur}
									onChange={handleChange}
									name="password"
									inputProps={{ style: { color: colors.grey[900] } }}
								/>
							</FormControl>
						</Box>
						<Box display="flex" justifyContent="flex-end" mt="4rem">
							<Button
								component={Link}
								to="/"
								type="submit"
								color="secondary"
								variant="contained">
								Submit
							</Button>
						</Box>
					</form>
				)}
			</Formik>
		</Box>
	);
}

const initialValues = {
	username: '',
	password: '',
};
