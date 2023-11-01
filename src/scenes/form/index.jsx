import {
	Box,
	Button,
	TextField,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
} from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

const Form = () => {
	const isNonMobile = useMediaQuery('(min-width:600px)');

	const handleFormSubmit = (values) => {
		console.log(values);
	};

	return (
		<Box m="20px">
			<Header title="ADD PRODUCT" />

			<Formik
				onSubmit={handleFormSubmit}
				initialValues={initialValues}
				validationSchema={checkoutSchema}>
				{({
					values,
					errors,
					touched,
					handleBlur,
					handleChange,
					handleSubmit,
				}) => (
					<form onSubmit={handleSubmit} style={{ margin: '20px' }}>
						<Box
							display="grid"
							gap="30px"
							gridTemplateColumns="repeat(4, minmax(0, 1fr))"
							sx={{
								'& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
							}}>
							<TextField
								fullWidth
								variant="filled"
								type="text"
								label="Product Name"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.productName}
								name="productName"
								error={!!touched.productName && !!errors.productName}
								helperText={touched.productName && errors.productName}
								sx={{ gridColumn: 'span 4' }}
							/>
							<FormControl sx={{ gridColumn: 'span 4' }} variant="filled">
								<InputLabel id="category-label">Category</InputLabel>
								<Select
									labelId="category-label"
									id="category"
									label="Category"
									onChange={handleChange}>
									<MenuItem value="Fashion">Fashion</MenuItem>
								</Select>
							</FormControl>
							<TextField
								fullWidth
								variant="filled"
								type="text"
								label="Price"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.email}
								name="email"
								error={!!touched.email && !!errors.email}
								helperText={touched.email && errors.email}
								sx={{ gridColumn: 'span 4' }}
							/>
							<TextField
								fullWidth
								variant="filled"
								type="text"
								label="UMKM"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.umkm}
								name="umkm"
								error={!!touched.umkm && !!errors.umkm}
								helperText={touched.umkm && errors.umkm}
								sx={{ gridColumn: 'span 4' }}
							/>
							<TextField
								fullWidth
								variant="filled"
								type="text"
								label="Phone Number"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.phone}
								name="phone"
								error={!!touched.phone && !!errors.phone}
								helperText={touched.phone && errors.phone}
								sx={{ gridColumn: 'span 4' }}
							/>
						</Box>

						<Box display="flex" gap="32px" justifyContent="center" mt="20px">
							<Button
								component={Link}
								to="/products"
								color="error"
								variant="contained">
								Cancel
							</Button>
							<Button type="submit" color="secondary" variant="contained">
								Submit
							</Button>
						</Box>
					</form>
				)}
			</Formik>
		</Box>
	);
};

const phoneRegExp =
	/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
	productName: yup.string().required('required'),
	umkm: yup.string().required('required'),
	email: yup.string().email('email tidak valid').required('required'),
	phone: yup
		.string()
		.matches(phoneRegExp, 'Nomor HP tidak valid')
		.required('required'),
});
const initialValues = {
	productName: '',
	umkm: '',
	email: '',
	phone: '',
};

export default Form;
