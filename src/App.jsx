import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import Products from './scenes/products';
import Form from './scenes/form';
import LoginPage from './scenes/login';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import Image from './assets/umkm.jpg';

function App() {
	const [theme, colorMode] = useMode();
	const [isSidebar, setIsSidebar] = useState(true);
	const location = useLocation();

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className="app">
					{location.pathname !== '/login' && <Sidebar isSidebar={isSidebar} />}
					<main
						className="content"
						{...(location.pathname === '/login' && {
							style: {
								backgroundImage: 'url(' + Image + ')',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
							},
						})}>
						{location.pathname !== '/login' && (
							<Topbar setIsSidebar={setIsSidebar} />
						)}
						<Routes>
							<Route path="/" element={<Dashboard />} />
							<Route path="/products" element={<Products />} />
							<Route path="/form" element={<Form />} />
							<Route path="/login" element={<LoginPage />} />
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
