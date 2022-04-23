// import ThemeReducer from './ThemeReducer';
// import { combineReducers } from 'redux';
// import SideBarReducer from './SideBarReducer';
// const rootReducer = combineReducers({ ThemeReducer, SideBarReducer });

// export default rootReducer;

import ThemeReducer from './ThemeSlice';
import SideBarReducer from './SideBarSlice';
import QaQcReportReducer from './QaQcReportSlice';

const rootReducer = {
	theme: ThemeReducer,
	sidebar: SideBarReducer,
	qaQcReportData: QaQcReportReducer,
};

export default rootReducer;
