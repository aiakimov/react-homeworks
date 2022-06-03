import React, { FC, useEffect, useState } from "react";
import "./Pagination.css";
import axios from "axios";

const Pagination: FC = () => {
  const API: string = "https://jsonplaceholder.typicode.com/";
  const pages: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [photos, setPhotos] = useState<PhotoObj[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);

  interface PhotoObj {
    albumId: number;
    id: number;
    thumbnailUrl: string;
    title: string;
    url: string;
  }

  const getPhotos = async () => {
    const responce = await axios.get(
      API + `photos?_page=${pageNumber}&_limit=10`
    );
    setPhotos(responce?.data);
  };

  const onclick = (btnId: number) => {
    setPageNumber(btnId);
  };

  useEffect(() => {
    getPhotos();
  }, [pageNumber]);

  return (
    <>
      <div className="contant">
        {photos.map((item) => {
          return (
            <div key={item.url}>
              <img src={item.url} alt="" />
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>

      <div className="pagination-bar">
        {pages.map((item) => {
          return (
            <button
              onClick={() => {
                onclick(item);
              }}
              key={item}
              className="pagination-btn"
            >
              {item}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Pagination;
