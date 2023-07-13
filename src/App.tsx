// React
import {Routes, Route} from "react-router";
// Pages
import StartPage from "./pages/StartPage.tsx";
import ListPage from "./pages/ListPage.tsx";
import MainLayout from "./layout/MainLayout.tsx";
import DetailPage from "./pages/DetailPage/DetailPage.tsx";
import NotFound from "./NotFound.tsx";
// My theme config
import {theme} from "./layout/appTheme.ts";
// MUI
import {Container} from "@mui/material"
import {ScopedCssBaseline} from "@mui/material"
import { ThemeProvider } from '@mui/material/styles';

export default function App() {
    return (
        <ScopedCssBaseline sx={{ backgroundColor: '#020a23' }}>
            <ThemeProvider theme={theme}>
                <Container fixed className="sw-container">
                    <Routes>
                        <Route path="/" element={<StartPage />}/>
                        <Route path="/:category/" element={<MainLayout />}>
                            <Route index element={<ListPage />} />
                            <Route path=":id" element={<DetailPage />} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Container>
            </ThemeProvider>
        </ScopedCssBaseline>
    )
}
