import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react';
import Layout from './components/Layout/Layout';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const MainPage = lazy(() => import("../src/pages/MainPage/MainPage"));
const CatalogPage = lazy(() => import("../src/pages/CatalogPage/CatalogPage"));
const CampPage = lazy(() => import("../src/pages/CampPage/CampPage"));

function App() {
  return (
    <>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CampPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  )
}

export default App
