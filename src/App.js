import { Fragment } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import route from './route';
import Layout from './components/Layout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {route.map((item, index) => {
                    let LayoutBanner = item.layout ? item.layout : Fragment;
                    return (
                        <Route
                            key={index}
                            path={item.path}
                            element={
                                <Layout>
                                    <LayoutBanner>{item.component}</LayoutBanner>
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
