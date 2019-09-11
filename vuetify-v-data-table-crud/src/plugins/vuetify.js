import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import colors from 'vuetify/lib/util/colors'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify, {
	iconfont: 'md'
})

export default new Vuetify({
	theme: {
		themes: {
			light: {
				primary: colors.lime.darken2,
				secondary: colors.lime.darken2,
				accent: colors.lime.darken2,
			},
		},
	}
})
