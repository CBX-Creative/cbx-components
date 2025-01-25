/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/lib/**/*.tsx'],
	theme: {
		extend: {
			keyframes: {
				'infinite-scroll': {
					from: { transform: 'translateX(0%)' },
					to: { transform: 'translateX(-50%)' },
				},
				'infinite-scroll-vertical': {
					from: { transform: 'translateY(0%)' },
					to: { transform: 'translateY(-50%)' },
				},
			},
			animation: {
				'infinite-scroll-horizontal':
                    'infinite-scroll linear infinite',
                'infinite-scroll-vertical':
                    'infinite-scroll-vertical linear infinite',
			}
		},
	},
	plugins: [],
};

