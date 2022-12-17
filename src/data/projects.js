const data = [
	{
		id: 1,
		title: {
			en: 'TYPE A SPRAY NOZZLE',
			es: 'BOQUILLA DE ASPERSIÓN TIPO A',
		},
		category: 'CAD',
		img: '/images/project-1/Spray Nozzle Render.jpg',
		details: {
			date: '20 Oct 2022',
			tags: ['3D Modeling', 'ANSYS SpaceClaim', '3D Rendering', 'Detail Drawing', 'Keyshot']
		},
		blocks: [
			{
				blockId: 1,
				content: {
					en: '3D modeling of a spray nozzle type A used in washing processes, cooling systems, cleaning and water curtain.',
					es: 'Modelado 3D de una boquilla de aspersion tipo A utilizada en procesos de lavado, sistemas de refrigeración, limpieza y cortina de agua.',
				},
			},
			{
				blockId: 2,
				content: {
					en: 'The 3D CAD model was made with ANSYS SpaceClaim 19.',
					es: 'El modelo CAD 3D se hizo con ANSYS SpaceClaim 19.',
				}
			},
			{
				blockId: 3,
				content: {
					en: 'The metallic appearance rendering was done with Keyshot 10.',
					es: 'El renderizado de apariencia metálica se hizo con Keyshot 10.',
				}
			},
		],
		images: [
			{
				imgId: 1,
				src: '/images/project-1/Spray Nozzle Render.jpg',
				alt: 'render image'
			},
			{
				imgId: 2,
				src: '/images/project-1/TYPE A SPRAY NOZZLE.jpg',
				alt: 'drawing'
			}
		],
		hasModel: true,
		model: {
			type: 'stl',
			src: '/models/project-1/model.fbx',
		}
	},
];

export default data;