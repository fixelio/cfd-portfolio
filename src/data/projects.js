const data = [
	{
		id: 1,
		title: {
			en: 'TYPE A SPRAY NOZZLE',
			es: 'BOQUILLA DE ASPERSIÓN TIPO A',
		},
		category: 'CAD',
		img: '"/images/project-1/Vista-1.png"',
		details: {
			date: '20 Oct 2022',
			tags: ['3D CAD Modeling', 'ANSYS SpaceClaim', '3D Rendering', 'Detail Drawing', 'Keyshot']
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
				id: 1,
				src: '"/images/project-1/Vista-1.png"',
				alt: 'render image'
			},
			{
				id: 2,
				src: '"/images/project-1/Vista-2.png"',
				alt: 'render image'
			},
			{
				id: 3,
				src: '"/images/project-1/Vista-3.png"',
				alt: 'render image'
			},
			{
				id: 4,
				src: '"/images/project-1/Vista-4.png"',
				alt: 'render image'
			},
			{
				id: 5,
				src: '"/images/project-1/Vista-5.png"',
				alt: 'render image'
			},
			{
				id: 6,
				src: '"/images/project-1/Vista-6.png"',
				alt: 'render image'
			},
			{
				id: 7,
				src: '"/images/project-1/Vista-7.png"',
				alt: 'render image'
			},
		],
		hasModel: true,
		model: {
			type: 'stl',
			src: '/models/project-1/spray nozzle.fbx',
		}
	},
	{
		id: 2,
		title: {
      en: '1\'\' INCH SPANNER WRENCH',
			es: 'LLAVE DE TUERCAS DE 1 PULGADA',
		},
		category: 'CAD',
		img: '"/images/project-2/Vista-3.png"',
		details: {
			date: '29 Oct 2022',
			tags: ['3D CAD Modeling', 'SolidWorks']
		},
		blocks: [
			{
				blockId: 1,
				content: {
          en: 'This project consisted in designing a 3D model of a 1 inch (25 mm) wrench from the technical drawing.',
          es: 'Este proyecto consistió en diseñar un modelo 3D de una llave de tuercas de 1 pulgada (25 mm) partiendo del dibujo técnico.',
				},
			},
		],
		images: [
			{
				id: 1,
				src: '"/images/project-2/Vista-1.png"',
				alt: 'view 1'
			},
			{
				id: 2,
        src: '"/images/project-2/Vista-2.png"',
				alt: 'view'
			},
      {
        id: 3,
        src: '"/images/project-2/Vista-3.png"',
        alt: 'view'
      },
      {
        id: 4,
        src: '"/images/project-2/Vista-4.png"',
        alt: 'view'
      },
		],
		hasModel: true,
		model: {
			type: 'stl',
			src: '/models/project-2/wrench.fbx',
		}
	},
	{
		id: 3,
		title: {
			en: 'THUMBTACK',
			es: 'CHINCHETA',
		},
		category: 'CAD',
		img: '"/images/project-3/Vista-1.png"',
		details: {
			date: '01 Nov 2022',
			tags: ['3D CAD Modeling', 'SolidWorks']
		},
		blocks: [
			{
				blockId: 1,
				content: {
					en: 'This project consisted of modeling a simple thumbtack for papers. The model consists of 2 solid parts, one for the body (in red) and one for the tip (in gray).',
					es: 'Este proyecto consistió en modelar una sencilla chincheta para papeles. El modelo consta de 2 partes sólidas, una para el cuerpo (en rojo) y otra para la punta (en gris).',
				},
			},
		],
		images: [
			{
				id: 1,
				src: '"/images/project-3/Vista-1.png"',
				alt: 'view 1'
			},
			{
				id: 2,
				src: '"/images/project-3/Vista-2.png"',
				alt: 'view'
			},
			{
				id: 3,
				src: '"/images/project-3/Vista-3.png"',
				alt: 'view'
			},
			{
				id: 4,
				src: '"/images/project-3/Vista-4.png"',
				alt: 'view'
			},
		],
		hasModel: true,
		model: {
			type: 'stl',
			src: '/models/project-3/thumbtack.fbx',
		}
	},
];

export default data;