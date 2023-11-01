import { Box, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { Formik } from 'formik';

export default function LoginPage() {
	return (
		<Box m="16rem" bgcolor="#141b2d" borderRadius="20px">
			<Box display="flex" justifyContent="center" alignItems="center">
				<Header title="DASHBOARD" />
			</Box>

			<Formik>
				{({ handleSubmit, handleBlur, handleChange }) => (
					<form
						name="form"
						onSubmit={handleSubmit}
						style={{ margin: '0 8rem' }}>
						<Box display="flex" flexDirection="column" gap="16px">
							<TextField
								fullWidth
								variant="filled"
								type="text"
								label="Username"
								onBlur={handleBlur}
								onChange={handleChange}
								name="username"
							/>
							<TextField
								fullWidth
								variant="filled"
								type="password"
								label="Password"
								onBlur={handleBlur}
								onChange={handleChange}
								name="password"
							/>
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
