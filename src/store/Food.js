import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//loading,idle,succeeded, failed
const URL_API_FOOD = "https://64ccc3c12eafdcdc851a433f.mockapi.io/calories";
const URL_API_ORDER = "https://64ccc3c12eafdcdc851a433f.mockapi.io/order";
const foodsSlice = createSlice({
  name: "foods",
  initialState: {
    foods: [],
    status: "idle",
    totalCaloDaily: 0,
    cartItem : [],
    totalPrice : 0,
    province:"",
    district:"",
    commune:"",
    order:[],
  },
  reducers: {
    setTotalCaloDaily: (state, action) => {
      state.totalCaloDaily = action.payload;
      console.log("action.payload", action.payload);
      console.log(" state.totalCaloDaily", state.totalCaloDaily);
    },

    addCartItems: (state, action) => {
      state.cartItem.push(action.payload)
     },
     removeCartItems: (state, action) => {
      const indexDelete = state.cartItem.findIndex(
        (item) => item.id === action.payload
      );
      state.cartItem.splice(indexDelete, 1);
     },
    sumPrice : (state , action) =>  {
      state.totalPrice = state.totalPrice + action.payload;
    }, 
    setProvince : (state , action) => {
      state.province = action.payload;
    },
    setDistrict : (state , action) => {
      state.district = action.payload;
    },
    setCommune : (state , action) => {
      state.commune = action.payload;
    },
    setPrice : (state , action) => {
      state.totalPrice = state.totalPrice - action.payload
    }

  },
  extraReducers(builder) {
    //xu ly thanh cong se luu vao state.to.concat , them mot mang moi vao mang hien tai
    builder
      .addCase(fetchFoods.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.foods = action.payload;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.order = action.payload;
      })
      .addCase(fetchFoods.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addNewFoods.fulfilled, (state, action) => {
        state.foods.push(action.payload);
      })
      .addCase(addNewOrder.fulfilled, (state, action) => {
        state.order.push(action.payload);
      })
      .addCase(updateFood.fulfilled, (state, action) => {
        const foodUpate = state.foods.find(
          (food) => food.id === action.payload.id
        );
        console.log("fUpdate", foodUpate);
        foodUpate.foodName = action.payload.foodName;
        foodUpate.calo = action.payload.calo;
        foodUpate.proteins = action.payload.proteins;
        foodUpate.carbs = action.payload.carbs;
        foodUpate.fat = action.payload.fat;
        foodUpate.categories = action.payload.categories;
      })
      .addCase(removeFood.fulfilled, (state, action) => {
        const indexDelete = state.foods.findIndex(
          (food) => food.id === action.payload
        );
        state.foods.splice(indexDelete, 1);
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        const foodImageUpdate = state.foods.find(food => food.id === action.payload.id);
        console.log({foodImageUpdate})
        foodImageUpdate.images = action.payload.imgUrl
      })
  },
});

//middleware
export const fetchFoods = createAsyncThunk("foods/fetchFoods", async () => {
  const response = await axios.get(URL_API_FOOD);
  return response.data;
});

export const fetchOrders = createAsyncThunk("foods/fetchOrders", async () => {
  const response = await axios.get(URL_API_ORDER);
  return response.data;
});


export const addNewFoods = createAsyncThunk(
  "foods/addNewFoods",
  async (newfood) => {
    const response = await axios.post(URL_API_FOOD, newfood);
    return response.data;
  }
);
export const addNewOrder = createAsyncThunk(
  "foods/addNewOrder",
  async (newOrder) => {
    const response = await axios.post(URL_API_ORDER, newOrder);
    return response.data;
  }
);


export const updateFood = createAsyncThunk(
  "foods/updateFood",
  async (params) => {
    const response = await axios.put(
      `${URL_API_FOOD}/${params.id}`,
      params.values
    );
    return response.data;
  }
);

export const removeFood = createAsyncThunk(
  "todos/removeFood",
  async (idDelete) => {
    await axios.delete(`${URL_API_FOOD}/${idDelete}`);
    return idDelete;
  }
);

export const uploadImage = createAsyncThunk(
  "foods/uploadImage",
  async (params) =>{
    await axios.put(`${URL_API_FOOD}/${params.id}`, {
      images: params.imgUrl,
    })
    return {id :params.id ,imgUrl : params.imgUrl}
  });
// export const selectTodosDone = (state) => state.todos.todos.filter((todo) => todo.completed)
// export const selectTodosNotDone = (state) => state.todos.todos.filter((todo) => !todo.completed)

export const selectWeekdays = (state) => state.foods.foods.filter((food) => food.date === "Weekdays")
export const selectWeekend = (state) => state.foods.foods.filter((food) => food.date === "Weekend")

export const selectSeptember = (state) => state.foods.order.filter((order) => order.month === 8)
export const selectAugust = (state) => state.foods.order.filter((order) => order.month === 7)

export const selectFruit = (state) => state.foods.foods.filter((food) => food.categories === "FreshFruit")
export const selectCombo = (state) => state.foods.foods.filter((food) => food.categories === "Combo")
export const selectMeat = (state) => state.foods.foods.filter((food) => food.categories === "Thịt")
export const selectVegetable = (state) => state.foods.foods.filter((food) => food.categories === "Vegetable")
export const selectJuice = (state) => state.foods.foods.filter((food) => food.categories === "Juice")
export const selectFastFood = (state) => state.foods.foods.filter((food) => food.categories === "FastFood")
export const selectOthers = (state) => state.foods.foods.filter((food) => food.categories === "Others")



export const { setTotalCaloDaily , addCartItems , sumPrice , setProvince , setDistrict , setCommune , removeCartItems , setPrice} = foodsSlice.actions;
export default foodsSlice.reducer;
