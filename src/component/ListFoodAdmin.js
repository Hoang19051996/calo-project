import * as React from "react";
import { padding, styled } from "@mui/system";
import {
  TablePagination,
  tablePaginationClasses as classes,
} from "@mui/base/TablePagination";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useDispatch, useSelector } from "react-redux";

import { fetchFoods, selectProtein, uploadImage } from "../store/Food";
import { useEffect } from "react";

import { Upload } from "./Upload";
import axios from "axios";
import { useState } from "react";
import { Button } from "reactstrap";
import { useTranslation } from "react-i18next";

export function ListFoodAdmin({
  setFoodEdit,
  setModal,
  onDelete,
  onUpload,
  onCreate,
}) {
  const parent = useAutoAnimate();
  const [searchText, setSearchText] = useState("");
  const [isFilter, setFilter] = useState(true);
  const foods = useSelector((state) => state.foods.foods);

  const proteinOver5 = useSelector(selectProtein);
  console.log("proteinOver5", proteinOver5)
  const foodFilter = foods.filter((food) =>
    food.foodName.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log("foodFilter", foodFilter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFoods());
  }, []);

  const proteinOverFive = () => {

   setFilter(!isFilter);



  }
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - foods.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSortAtoZ = () => {
    foodFilter.sort((a, b) =>
    a.foodName > b.foodName ? 1 : -1,
  );
  console.log("foodFilter", foodFilter);
  }

  const { t } = useTranslation("translation");
  return (
    <div ref={parent}>
      <br></br>
      <br></br>
      <Root sx={{ width: "80%", maxWidth: "100%", paddingLeft: "10%" }}>
       
       <div class="d-flex justify-content-between">

       <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder={t("search")}
          style={{ width: "30%" , padding: "2px" , borderRadius: "10px" }}
        />

       <Button color="primary" onClick={() => onCreate()}>
          {" "}
          {t("add_new")}
        </Button>


        <button onClick={() =>proteinOverFive()}>
          Filter 
        </button>

     
        
        </div> 
    <br></br>
        <table aria-label="custom pagination table">
          <thead>
            <tr>
              <th>{t("dessert")}</th>
              <th>Calories</th>
              <th>{t("protein")}</th>
              <th>{t("carbs")}</th>
              <th>{t("fat")}</th>
              <th>{t("edit")}</th>
              <th>{t("delete")}</th>
              <th>{t("image")}</th>
            </tr>
          </thead>
          <tbody>
            {
            (isFilter ? foodFilter : proteinOver5).map((food) => (
              <tr key={food.id} ref={parent}>
                <td style={{ width: 250 }}>{food.foodName}</td>
                <td style={{ width: 120 }} align="right">
                  {food.calo}
                </td>
                <td style={{ width: 120 }} align="right">
                  {food.proteins}
                </td>
                <td style={{ width: 120 }} align="right">
                  {food.carbs}
                </td>
                <td style={{ width: 120 }} align="right">
                  {food.fat}
                </td>
                <td
                  style={{ width: 20, textAlign: "center" }}
                  onClick={() => {
                    setModal(true);
                    setFoodEdit(food);
                  }}
                >
                  <i class="fas fa-edit"></i>
                </td>
                <td
                  style={{ width: 20, textAlign: "center" }}
                  onClick={() => onDelete(food.id)}
                >
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </td>
                <td onClick={() => setFoodEdit(food)}>
                  <img src={food.images} width={50} height={50} />
                  <div>
                    <Upload
                      onUploadComplete={(imgUrl) => onUpload(food.id, imgUrl)}
                    />
                  </div>
                </td>
              </tr>
            ))
                }
          </tbody>
          <tfoot>
            <tr>
              <CustomTablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={8}
                count={foods.length}
                rowsPerPage={rowsPerPage}
                page={page}
                slotProps={{
                  select: {
                    "aria-label": "Row per page"
                  },
                  actions: {
                    showFirstButton: true,
                    showLastButton: true,
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </tr>
          </tfoot>
        </table>
      </Root>
    </div>
  );
}

const blue = {
  50: "#F0F7FF",
  200: "#A5D8FF",
  400: "#3399FF",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const Root = styled("div")(
  ({ theme }) => `
  table {
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    text-align: left;
    padding: 6px;
  }

  th {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[50]};
  }
  `
);

const CustomTablePagination = styled(TablePagination)(
  ({ theme }) => `
  & .${classes.spacer} {
    display: none;
  }

  & .${classes.toolbar}  {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    margin: 0;
  }

  & .${classes.select}{
    padding: 2px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    border-radius: 50px;
    background-color: transparent;

    &:hover {
      background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    }

    &:focus {
      outline: 1px solid ${
        theme.palette.mode === "dark" ? blue[400] : blue[200]
      };
    }
  }

  & .${classes.displayedRows} {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.actions} {
    padding: 2px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    border-radius: 50px;
    text-align: center;
  }

  & .${classes.actions} > button {
    margin: 0 8px;
    border: transparent;
    border-radius: 2px;
    background-color: transparent;

    &:hover {
      background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    }

    &:focus {
      outline: 1px solid ${
        theme.palette.mode === "dark" ? blue[400] : blue[200]
      };
    }
  }
  `
);
