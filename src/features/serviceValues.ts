import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

// const getBackBlazePrice = (storage: number, transfer: number) => {
//   let price = (storage * 0.005 + transfer * 0.01);

//   if (price < 7) {
//     price = 7;
//   }

//   return Math.floor(price * 100) / 100;
// };

// const getBunnyPrice = (storage: number, transfer: number, bunnyStorage: string) => {
//   const storagePrice = bunnyStorage === 'HDD' ? 0.01 : 0.02;

//   let price = (storage * storagePrice + transfer * 0.01);

//   if (price >= 10) {
//     price = 10;
//   }

//   return Math.floor(price * 100) / 100;
// };

// const getScaleWayPrice = (storage: number, transfer: number, scalewayStorage: string) => {
//   let storagePrice = 0;

//   if (scalewayStorage === 'Multi' && storage > 75) {
//     storagePrice = 0.06;
//   }

//   if (scalewayStorage === 'Single' && storage > 75) {
//     storagePrice = 0.03;
//   }

//   const transferPrice = transfer < 75 ? 0 : 0.02;

//   let price = ((storage - 75) * storagePrice + (transfer - 75) * transferPrice);

//   return Math.floor(price * 100) / 100;
// };

// const getVultrPrice = (storage: number, transfer: number) => {
//   let price = (storage * 0.01 + transfer * 0.01);

//   if (price < 5) {
//     price = 5;
//   }

//   return Math.floor(price * 100) / 100;
// };

type Storage = {
  storage: number,
  transfer: number,
}

export interface ServiceValuesState {
  storage: number,
  transfer: number,
  bunnyStorage: string,
  scalewayStorage: string,
  blazePrice: number,
  bunnyPrice: number,
  scaleWayPrice: number,
  vultrPrice: number,
  minPrice: number,
}

const initialState: ServiceValuesState = {
  storage: 100,
  transfer: 400,
  bunnyStorage: "HDD",
  scalewayStorage: "Multi",
  blazePrice: 0,
  bunnyPrice: 0,
  scaleWayPrice: 0,
  vultrPrice: 0,
  minPrice: 0,
}

export const serviceValuesSlice = createSlice({
  name: 'values',
  initialState,
  reducers: {
    setStorage: (state, action: PayloadAction<number>) => {
      state.storage = action.payload
    },
    setTransfer: (state, action: PayloadAction<number>) => {
      state.transfer = action.payload
    },
    setButtonsStorage: (state, action: PayloadAction<{
      name: string,
      value: string,
    }>) => {
      if (action.payload.name === 'bunnyStorage') {
        state.bunnyStorage = action.payload.value;
      } else {
        state.scalewayStorage = action.payload.value;
      }
    },
    getBlazePrice: (state, action: PayloadAction<Storage>) => {
      const { storage, transfer } = action.payload;
      let price = (storage * 0.005 + transfer * 0.01);

      if (storage === 0 && transfer === 0) {
        state.blazePrice = 0;

        return;
      }

      if (price < 7) {
        price = 7;
      }

      state.blazePrice = Math.floor(price * 100) / 100;
    },
    getBunnyPrice: (state, action: PayloadAction<Storage>) => {
      const { storage, transfer } = action.payload;
      const storagePrice = state.bunnyStorage === 'HDD' ? 0.01 : 0.02;

      let price = (storage * storagePrice + transfer * 0.01);

      if (price >= 10) {
        price = 10;
      }

      state.bunnyPrice = Math.floor(price * 100) / 100;
    },
    getScaleWayPrice: (state, action: PayloadAction<Storage>) => {
      const { storage, transfer } = action.payload;
      let storagePrice = 0;

      if (state.scalewayStorage === 'Multi' && storage > 75) {
        storagePrice = 0.06;
      }

      if (state.scalewayStorage === 'Single' && storage > 75) {
        storagePrice = 0.03;
      }

      const transferPrice = transfer < 75 ? 0 : 0.02;

      let price = ((storage - 75) * storagePrice + (transfer - 75) * transferPrice);

      state.scaleWayPrice = Math.floor(price * 100) / 100;
    },
    getVultrPrice: (state, action: PayloadAction<Storage>) => {
      const { storage, transfer } = action.payload;

      if (storage === 0 && transfer === 0) {
        state.vultrPrice = 0;

        return;
      }
      let price = (storage * 0.01 + transfer * 0.01);

      if (price < 5) {
        price = 5;
      }

      state.vultrPrice = Math.floor(price * 100) / 100;
    },
    getMinPrice: (state) => {
      const {blazePrice, bunnyPrice, scaleWayPrice, vultrPrice} = state;
    
      state.minPrice = Math.min(blazePrice, bunnyPrice, scaleWayPrice, vultrPrice)
    }
  },
})

export const { 
  setStorage, 
  setTransfer, 
  setButtonsStorage,
  getBlazePrice,
  getBunnyPrice,
  getScaleWayPrice,
  getVultrPrice,
  getMinPrice
} = serviceValuesSlice.actions;

export const selectvalues = (state: RootState) => state;

export default serviceValuesSlice.reducer;