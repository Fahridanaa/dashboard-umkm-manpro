import { Box, Button } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { tokens } from '../../theme';
import { mockDataProducts } from '../../data/mockData';
import Header from '../../components/Header';
import { useTheme } from '@mui/material';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { Link } from 'react-router-dom';

const Products = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const columns = [
		{ field: 'id', headerName: 'ID', flex: 0.5 },
		{ field: 'umkm', headerName: 'UMKM', flex: 1 },
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			cellClassName: 'name-column--cell',
		},
		{
			field: 'category',
			headerName: 'Category',
			headerAlign: 'left',
			align: 'left',
		},
		{
			field: 'location',
			headerName: 'Location',
			flex: 1,
		},
		{
			field: 'phone',
			headerName: 'No HP',
			flex: 1,
		},
		{
			field: 'store',
			headerName: 'Link Toko',
			flex: 1,
		},
		{
			field: 'img',
			headerName: 'Product Image',
			flex: 1,
			renderCell: (params) => <Button variant="contained">Tampilkan</Button>,
		},
		{
			headerName: 'Action',
			flex: 1,
			renderCell: (params) => (
				<Box display="flex" gap="2rem">
					<Button
						variant="contained"
						sx={{ backgroundColor: colors.greenAccent[400] }}>
						<EditIcon />
					</Button>

					<Button
						variant="contained"
						sx={{ backgroundColor: colors.redAccent[400] }}>
						<DeleteIcon />
					</Button>
				</Box>
			),
		},
	];

	return (
		<Box m="20px">
			<Box display="flex" justifyContent="space-between" alignItems="center">
				<Header title="Product" />

				<Box>
					<Button
						component={Link}
						to="/form"
						sx={{
							backgroundColor: colors.blueAccent[700],
							color: colors.grey[100],
							fontSize: '14px',
							fontWeight: 'bold',
							padding: '10px 20px',
						}}>
						Add Product
						<NoteAddIcon sx={{ ml: '10px' }} />
					</Button>
				</Box>
			</Box>

			<Box
				height="75vh"
				sx={{
					'& .MuiDataGrid-root': {
						border: 'none',
					},
					'& .MuiDataGrid-cell': {
						borderBottom: 'none',
					},
					'& .name-column--cell': {
						color: colors.greenAccent[300],
					},
					'& .MuiDataGrid-columnHeaders': {
						backgroundColor: colors.blueAccent[700],
						borderBottom: 'none',
					},
					'& .MuiDataGrid-virtualScroller': {
						backgroundColor: colors.primary[400],
					},
					'& .MuiDataGrid-footerContainer': {
						borderTop: 'none',
						backgroundColor: colors.blueAccent[700],
					},
					'& .MuiCheckbox-root': {
						color: `${colors.greenAccent[200]} !important`,
					},
					'& .MuiDataGrid-toolbarContainer .MuiButton-text': {
						color: `${colors.grey[100]} !important`,
					},
				}}>
				<DataGrid
					rows={mockDataProducts}
					columns={columns}
					components={{ Toolbar: GridToolbar }}
				/>
			</Box>
		</Box>
	);
};

export default Products;
