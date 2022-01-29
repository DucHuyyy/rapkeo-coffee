import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Cappucino from '../../assets/img/Capuchino-RapKeo.jpg'
import Latte from '../../assets/img/Latte-RapKeo.jpg'
import CafeSuaDa from '../../assets/img/cafe-sữa380x380.jpg'
import CafeDenDa from '../../assets/img/cà-phê-den380x380.jpg'
import BacSiu from '../../assets/img/bạc-sỉu380x380.jpg'
import TraGung from '../../assets/img/TraGung-RapKeo.jpg'
import TraATiSoMatOng from '../../assets/img/TraAtiso-RapKeo.png'
import TraDaoCamXa from '../../assets/img/DaoCamXa-RapKEo.jpg'
import TraHoaCuc from '../../assets/img/TraCuc-RapKeo.jpg'
import TraHoaLai from '../../assets/img/TraLai-RapKeo.jpg'
import TraHoaHong from '../../assets/img/TraHoaHong-RapKeo.jpg'
import TraLipTon from '../../assets/img/LipTongDaChanh-RapKeo.jpeg'
import EpCam from '../../assets/img/nuoc-cam.png'
import EpThom from '../../assets/img/thom-ep.jpg'
import EpOi from '../../assets/img/EpOi-RapKeo.jpg'
import EpTao from '../../assets/img/EpTao-RapKeo.jpg'
import EpDuaHau from '../../assets/img/EpDuaHau-RapKeo.jpg'
import EpCaRot from '../../assets/img/EpCaRot-RapKeo.png'
import EpCaChua from '../../assets/img/EpCaChua-RapKeo.png'
import NuocDua from '../../assets/img/DuaTrai-RapKeo.jpg'
import Yarout from '../../assets/img/Yaourt-RapKeo.jpg'
import DaXayCamVang from '../../assets/img/DaXayCamVang-RapKeo.jpg'
import DaXayDuaXoai from '../../assets/img/DaXayDuaXoai-RapKeo.jpg'
import DaXayTraXanh from '../../assets/img/DaXayTraXanh-RapKeo.jpg'
import SinhToBo from '../../assets/img/sinhtobo9926_380x380.jpg'
import SinhToDau from '../../assets/img/SinhToDau-RapKeo.jpeg'
import SinhToDua from '../../assets/img/SinhToDua-RapKeo.jpg'
import SinhToMangCau from '../../assets/img/SinhToMangCau-RapKeo.jpg'
import SinhToSapoche from '../../assets/img/SinhToSapoche-RapKeo.jpg'
import SinhToXoai from '../../assets/img/SinhToXoai-RapKeo.jpg'
import NuocSuoi from '../../assets/img/NuocSuoi-RapKeo.jpeg'
import Coca from '../../assets/img/Coca-RapKeo.jpg'
import up7 from '../../assets/img/7up-RapKeo.jpg'
import Sting from '../../assets/img/Sting-RapKeo.jpg'
import BoHuc from '../../assets/img/BoHuc-RapKeo.png'
import TraXanh from '../../assets/img/TraXanh-RapKeo.jfif'


const initialState = {
    products: [],
    imgs: [
        {
            id: 0,
            name: Cappucino
        },
        {
            id: 1,
            name: Latte
        },
        {
            id: 2,
            name: CafeSuaDa
        },
        {
            id: 3,
            name: CafeDenDa
        },
        {
            id: 4,
            name: BacSiu
        },
        {
            id: 5,
            name: TraGung
        },
        {
            id: 6,
            name: TraLipTon
        },
        {
            id: 7,
            name: TraATiSoMatOng
        },
        {
            id: 8,
            name: TraDaoCamXa
        },
        {
            id: 9,
            name: TraHoaCuc
        },
        {
            id: 10,
            name: TraHoaLai
        },
        {
            id: 11,
            name: TraHoaHong
        },
        {
            id: 12,
            name: EpCam
        },
        {
            id: 13,
            name: EpThom
        },
        {
            id: 14,
            name: EpOi
        },
        {
            id: 15,
            name: EpTao
        },
        {
            id: 16,
            name: EpDuaHau
        },
        {
            id: 17,
            name: EpCaRot
        },
        {
            id: 18,
            name: EpCaChua
        },
        {
            id: 19,
            name: NuocDua
        },
        {
            id: 20,
            name: Yarout
        },
        {
            id: 21,
            name: DaXayCamVang
        },
        {
            id: 22,
            name: DaXayDuaXoai
        },
        {
            id: 23,
            name: DaXayTraXanh
        },
        {
            id: 24,
            name: SinhToBo
        },
        {
            id: 25,
            name: SinhToDau
        },
        {
            id: 26,
            name: SinhToDua
        },
        {
            id: 27,
            name: SinhToMangCau
        },
        {
            id: 28,
            name: SinhToSapoche
        },
        {
            id: 29,
            name: SinhToXoai
        },
        {
            id: 30,
            name: NuocSuoi
        },
        {
            id: 31,
            name: Coca
        },
        {
            id: 32,
            name: up7
        },
        {
            id: 33,
            name: Sting
        },
        {
            id: 34,
            name: BoHuc
        },
        {
            id: 35,
            name: TraXanh
        }
    ],

    value_input: '',
    object_input: [],

}

// --- Create thunk ---
export const addProductAsync = createAsyncThunk(
    'product/addProduct',
    async () => {
        // --- Call API ---
        const response = await fetch('http://localhost:3000/product')
            .then(response => response.json())
        return response
    }
)


// --- Create Slice ---
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

        get_value_input: (state, action) => {
            state.value_input = action.payload
            console.log(state.value_input)
        },

        setObject_input: (state, action) => {
            state.object_input = action.payload
        },

        setSearching: (state) => {
            state.object_input = []
        },

    },
    extraReducers: {
        [addProductAsync.pending]: (state, action) => {
            state.status = 'loading'
            console.log('pending')
        },
        [addProductAsync.fulfilled]: (state, action) => {
            console.log("fulfilled")
            state.status ='success'
            state.products = action.payload
        },
        [addProductAsync.rejected]: (state, action) => {
            console.log('error')
            state.status = 'error'
        }
    }
    
})

export const {get_value_input, setObject_input, setSearching} = productSlice.actions

export default productSlice.reducer