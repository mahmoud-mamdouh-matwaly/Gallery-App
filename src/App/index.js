import React, { Suspense, lazy, useCallback, useEffect, useRef } from "react";

import Tabs from "../components/Tabs";
import Header from "../components/Header";
import Spinner from "../components/Spinner";

import useGallery from "../reducer";
import usePage from "../reducer/pageReducer";
import { Container } from "../components/StyledContainer";

const Gallery = lazy(() => import("../components/Gallery"));

function App() {
  const { handleFetchGallery, data, error, setList, list } = useGallery();

  const { handlePage, page, handleRestPage } = usePage();

  const loadMoreRef = useRef(null);

  useEffect(() => {
    if (data.length !== 0 && page <= data.length - 1) {
      setList(page);
    }
  }, [data, page]);

  const fetchGallery = useCallback(type => {
    handleRestPage();
    handleFetchGallery(type);
  }, []);

  useEffect(
    type => {
      fetchGallery(type);
    },
    [fetchGallery]
  );

  return (
    <>
      <Header />

      <Tabs handleFetchGallery={fetchGallery} />
      <main className="container">
        {data.length === 0 && !error && <Spinner aria-label="loading" />}

        {error && <p aria-label="alert">Oops, failed to fetch!</p>}

        {data.length !== 0 && (
          <>
            <Container>
              <Suspense fallback={<Spinner aria-label="loading" />}>
                <Gallery
                  list={list}
                  handlePage={handlePage}
                  loadMoreRef={loadMoreRef}
                />
              </Suspense>
            </Container>

            {page < data.length - 1 && (
              <div ref={loadMoreRef} className="load-more">
                <p>load more</p>
              </div>
            )}
          </>
        )}
      </main>
    </>
  );
}

export default App;
