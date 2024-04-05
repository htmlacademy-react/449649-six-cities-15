import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_CITY, NameSpace, SORTING_OPTIONS } from '../../const';
import { City, Offer, OffersData } from '../../types/types';
import { getCitiesFromOffers, getCitiesNames, getOffersByCity, offersSorting } from '../../utils';
import { fetchOffersAction } from '../api-actions';

const initialState: OffersData = {
  allOffers: [],
  offersByCity: [],
  citiesNames: [],
  allCities: [],
  cityName: DEFAULT_CITY.name,
  city: DEFAULT_CITY,
  sortType: SORTING_OPTIONS.POPULAR,
  isOffersLoading: false,
  isOffersNotFound: false
};

export const offers = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setOffersByCity(state) {
      if (state.allOffers.length) {
        state.offersByCity = getOffersByCity(state.allOffers, state.city);
        state.offersByCity = offersSorting(state.sortType, state.offersByCity);
      }
    },
    setCitiesNames(state) {
      state.citiesNames = Array.from(getCitiesNames(state.allOffers));
    },
    setAllCities(state) {
      state.allCities = getCitiesFromOffers(state.allOffers);
    },
    setCityName(state, action: PayloadAction<string>) {
      state.cityName = action.payload;
    },
    setCity(state, action: PayloadAction<City>) {
      state.city = action.payload;
    },
    setFavoriteOffers(state, action: PayloadAction<Offer>) {
      const offerFavorite = action.payload;
      state.offersByCity = state.offersByCity.map((item: Offer) =>
        item.id === offerFavorite.id ? offerFavorite : item
      );
    },
    setSortType(state, action: PayloadAction<string>) {
      state.sortType = action.payload;
      state.offersByCity = offersSorting(state.sortType, state.offersByCity);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoading = true;
      })
      .addCase(
        fetchOffersAction.fulfilled,
        (state, action) => {
          state.allOffers = action.payload;
          state.isOffersLoading = false;
          offers.caseReducers.setOffersByCity(state);
        }
      )
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersLoading = false;
        state.isOffersNotFound = true;
      });
  },
});

export const { setOffersByCity, setCity, setCityName, setCitiesNames, setAllCities, setFavoriteOffers, setSortType } = offers.actions;
