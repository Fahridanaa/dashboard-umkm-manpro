import { Box, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import StoreIcon from '@mui/icons-material/Store';
import PersonIcon from '@mui/icons-material/Person';
import TrafficIcon from '@mui/icons-material/Traffic';
import Header from '../../components/Header';
import StatBox from '../../components/StatBox';
import BarChart from '../../components/BarChart';

const Dashboard = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box m="20px">
			{/* HEADER */}
			<Box display="flex" justifyContent="space-between" alignItems="center">
				<Header title="DASHBOARD" />
			</Box>

			{/* GRID & CHARTS */}
			<Box
				display="grid"
				gridTemplateColumns="repeat(9, 1fr)"
				gridAutoRows="140px"
				gap="20px">
				<Box
					gridColumn="span 3"
					backgroundColor={colors.primary[400]}
					display="flex"
					alignItems="center"
					justifyContent="center">
					<StatBox
						title="1361"
						subtitle="Total Visitor"
						progress="0.75"
						increase="+12%"
						icon={
							<PersonIcon
								sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn="span 3"
					backgroundColor={colors.primary[400]}
					display="flex"
					alignItems="center"
					justifyContent="center">
					<StatBox
						title="32"
						subtitle="Total UMKM"
						progress="0.50"
						increase="+21%"
						icon={
							<StoreIcon
								sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn="span 3"
					backgroundColor={colors.primary[400]}
					display="flex"
					alignItems="center"
					justifyContent="center">
					<StatBox
						title="132"
						subtitle="Traffic Received"
						progress="0.80"
						decrease="-2%"
						icon={
							<TrafficIcon
								sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
							/>
						}
					/>
				</Box>
				<Box m="20px" gridColumn="span 9">
					<Header title="Pengunjung" />
					<Box height="55vh">
						<BarChart />
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Dashboard;
