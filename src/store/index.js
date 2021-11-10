// save app state to persistent storage
function save(state) {
	return; 
	// TODO 
	console.log("app state saved: ", state);
};

// #ifndef VUE3
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
// #endif

// #ifdef VUE3
import { createStore } from 'vuex'
//import { createLogger } from 'vuex'

const store = createStore({
// #endif

///////////////////////////////////////////////////////////////////////////
//    plugins: [createLogger()],
	state: {
		Root: null,
		EOF: null
	},
	mutations: {
		///////////////////////////////////////
		// init app state
		init(state) {
			console.log('state.init', state);
			
			if (!state.Root) {
				state.Root = new {};
				save(state);
			}

			console.log('state = ', state);
		},

		///////////////////////////////////////
		// load app state from persistent storage
		load(state) {
			console.log("load: ", state);
			// TODO 
			console.log("app state loaded: ", state);
		},
		
		///////////////////////////////////////
		setCurrentUser(state, user) {
		},
	},
	getters: {
	},
	actions: {
	}
})

export default store
