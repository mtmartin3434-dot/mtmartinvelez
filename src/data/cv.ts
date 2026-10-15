import type { Locale } from '../i18n';

export interface CvEntry {
	title: string;
	meta?: string;
	intro?: string;
	bullets?: string[];
}

export interface CvSection {
	title: string;
	// A section is either a plain list of items or a list of entries.
	items?: string[];
	entries?: CvEntry[];
}

export interface Cv {
	name: string;
	tagline: string;
	languagesLine: string;
	contact: { phone: string; phoneHref: string; email: string; emailHref: string; linkedin: string; linkedinHref: string };
	location: string;
	sections: CvSection[];
}

const contact = {
	phone: '07735 680301',
	phoneHref: 'tel:+447735680301',
	email: 'mtmartinvelez@gmail.com',
	emailHref: 'mailto:mtmartinvelez@gmail.com',
	linkedin: 'LinkedIn',
	linkedinHref: 'https://www.linkedin.com/in/maria-t-martin-velez',
};

export const CV: Record<Locale, Cv> = {
	en: {
		name: 'Maria Teresa Martin Velez',
		tagline: 'Customer Care & Ecommerce Operations — Beauty / Skincare',
		languagesLine: 'Native Spanish · Fluent English · Available immediately',
		location: 'London, UK',
		contact,
		sections: [
			{
				title: 'Profile',
				items: [
					'Fourteen years in skincare, spanning nine years as co-founder and director of a UK skincare brand and five recent years of hands-on customer care, email marketing and online retail operations. Deep experience of sensitive and reactive skin — the customers who arrive worried and need calm, knowledgeable answers, not a script. Built and ran the ecommerce, marketing, supplier and customer sides of a trading business personally. Since 2026 I have been studying AI, social media and digital marketing on my own terms, applying it to the customer care and ecommerce work I know well. Now seeking a permanent customer care, customer experience or ecommerce operations role in beauty, skincare or wellness.',
				],
			},
			{
				title: 'Key strengths',
				items: [
					'Customer care & complaint resolution',
					'Sensitive-skin product knowledge',
					'Email marketing',
					'Shopify ecommerce',
					'Copywriting',
					'Supplier & import coordination',
					'Brand and packaging direction',
					'Order and fulfilment operations',
					'Native Spanish / fluent English',
				],
			},
			{
				title: 'Experience',
				entries: [
					{
						title: 'Independent study — AI for social media and digital marketing (self-directed)',
						meta: '2026 – present',
						bullets: [
							'Self-directed study of AI tooling and workflows applied to social media, customer care and ecommerce — building directly on the customer care, email marketing and online retail work I have done professionally',
							'Studying through Google and Coursera; currently working towards a formal qualification to sit alongside my existing experience',
							'Seeking a customer care, customer experience or ecommerce operations role',
						],
					},
					{
						title: 'Ecommerce, Customer Care & Email Marketing — The Serious Skin Care Company Ltd',
						meta: 'Remote · November 2020 – March 2026 · part-time',
						bullets: [
							'Handled customer enquiries end to end — product advice for sensitive and reactive skin, order issues, delivery problems and aftercare',
							'Wrote and sent email marketing to the customer base',
							'Managed administrative operations and order processes for a small ecommerce business',
							'Supported customers in a category where enquiries are emotional and trust is everything',
							'Contributed to product compliance documentation — product information files and EU product notifications (2023)',
						],
					},
					{
						title: 'Co-Founder, Director & Company Secretary — The Serious Skin Care Company Ltd',
						meta: 'Glasgow · September 1997 – December 2006',
						intro: 'Co-founded and helped run a specialist sensitive-skin skincare company for nine years.',
						bullets: [
							'Grew the business to approximately £500,000 in first-year revenue, sustained across several years, after a two-page national newspaper feature drove early demand',
							'Developed a five-product regime — a hero repair-intensive cream supported by body lotion and body wash ranges — built around a repair-then-maintain routine that drove repeat purchase',
							'Briefed a senior formulator on product specification; designed packaging; directed product photography',
							'Built and ran the Shopify storefront, product pages and website copy',
							'Ran Google Ads acquisition; most growth came through word of mouth',
							'Managed 15+ suppliers and partners across the EU, including import documentation, logistics and fulfilment',
							'Handled all customer service personally, plus invoicing, bookkeeping and budget oversight',
							'Prepared regulatory and product documentation for UK/EU trading',
						],
					},
					{
						title: 'Career break — family responsibilities and self-employment',
						meta: 'Spain · December 2006 – November 2020',
						bullets: [
							'Primary focus on raising two daughters; financially self-funded',
							'Ran a small eBay reselling operation: sourcing, photography, listing, pricing, shipping and buyer communication',
							'Relocated to the UK in November 2020',
						],
					},
					{
						title: 'Earlier career — Madrid, Spain',
						meta: '1989 – 1995',
						bullets: [
							'Executive Assistant & Office Manager, Ernst & Young — the division was later acquired by KnowledgeWare S.A. (1993–1995): carried the administrative and accounting function for the office, including a six-person sales team led by the Managing Director; contracts, banking relationships, invoicing, expense and supplier payments, and client liaison; completed accounting training in Paris',
							'Translator / Interpreter, Solutions Language and Communication (1992–1993): legal, commercial and technical translation EN/ES; interpreting at business meetings with banks',
							'Personal Assistant to the General Manager & President / Translator, VISA España (1989–1992): executive scheduling, travel, correspondence, bilingual liaison',
						],
					},
				],
			},
			{
				title: 'Education',
				entries: [
					{
						title: 'BA English Language & Literature',
						meta: 'Universidad de Burgos, Spain',
					},
					{
						title: 'English as a Foreign Language',
						meta: 'University of Reading, UK',
					},
				],
			},
			{
				title: 'Tools & skills',
				items: [
					'Shopify · WordPress · Google Ads · Email marketing · Canva · Adobe Photoshop · Affinity · Excel, Word, Outlook, PowerPoint · Google Workspace · AI tools for workflow and admin efficiency',
				],
			},
		],
	},

	es: {
		name: 'María Teresa Martín Velez',
		tagline: 'Atención al cliente y operaciones de comercio electrónico — Belleza / Cuidado de la piel',
		languagesLine: 'Espana nativa · Inglés fluido · Disponible de inmediato',
		location: 'Londres, Reino Unido',
		contact,
		sections: [
			{
				title: 'Perfil',
				items: [
					'Catorce años en cuidado de la piel: nueve como cofundadora y directora de una marca británica, y cinco años recientes en atención al cliente, marketing por email y operaciones de venta online. Experiencia profunda en piel sensible y reactiva — clientes que llegan preocupados y necesitan respuestas tranquilas y con conocimiento, no un guion. Construí y gestioné personalmente el comercio electrónico, el marketing, los proveedores y la atención al cliente de una empresa en funcionamiento. Desde 2026 estudio IA, redes sociales y marketing digital por mi cuenta, aplicándolo a la atención al cliente y el comercio electrónico que conozco bien. Ahora busco un puesto estable de atención al cliente, experiencia del cliente u operaciones de comercio electrónico en belleza, cuidado de la piel o bienestar.',
				],
			},
			{
				title: 'Puntos fuertes',
				items: [
					'Atención al cliente y resolución de reclamaciones',
					'Conocimiento de productos para piel sensible',
					'Marketing por email',
					'Comercio electrónico con Shopify',
					'Redacción de contenidos',
					'Coordinación de proveedores e importaciones',
					'Dirección de marca y envase',
					'Gestión de pedidos y preparación de envíos',
					'Espana nativa / inglés fluido',
				],
			},
			{
				title: 'Experiencia',
				entries: [
					{
						title: 'Estudio autónomo — IA para redes sociales y marketing digital',
						meta: '2026 – actualidad',
						bullets: [
							'Estudio por mi cuenta de herramientas y flujos de trabajo de IA aplicados a redes sociales, atención al cliente y comercio electrónico, construyéndome sobre la experiencia profesional en atención al cliente, marketing por email y venta online',
							'Estudio a través de Google y Coursera; actualmente preparo una titulación oficial que acompañe mi experiencia',
							'Busco un puesto en atención al cliente, experiencia del cliente u operaciones de comercio electrónico',
						],
					},
					{
						title: 'Comercio electrónico, atención al cliente y marketing por email — The Serious Skin Care Company Ltd',
						meta: 'Remoto · noviembre de 2020 – marzo de 2026 ·/media jornada',
						bullets: [
							'Gestión de consultas de clientes de principio a fin: asesoramiento de producto para piel sensible y reactiva, problemas de pedidos, incidencias de entrega y postventa',
							'Redacción y envío de campañas de email marketing a la base de clientes',
							'Gestión de operaciones administrativas y de pedidos de un pequeño negocio de comercio electrónico',
							'Atención a clientes en una categoría donde las consultas son emocionales y la confianza lo es todo',
							'Contribución a la documentación de cumplimiento: fichas de producto y notificaciones de producto en la UE (2023)',
						],
					},
					{
						title: 'Cofundadora, directora y secretaria — The Serious Skin Care Company Ltd',
						meta: 'Glasgow · septiembre de 1997 – diciembre de 2006',
						intro: 'Cofundé y dirigí durante nueve años una empresa especializada en cuidado de la piel sensible.',
						bullets: [
							'Llevé el negocio a unos 500.000 libras en ingresos el primer año, sostenidos durante varios años, tras un artículo de dos páginas en un periódico nacional que impulsó la demanda inicial',
							'Desarrollé un régimen de cinco productos: una crema reparadora estrella apoyada por gamas de loción y gel de ducha, sobre una rutina reparar-luego-mantener que impulsó la recompra',
							'Briefing a un formulador senior sobre la especificación del producto; diseño del envase; dirección de la fotografía de producto',
							'Construí y gestioné la tienda de Shopify, las páginas de producto y los textos web',
							'Gestión de campañas de Google Ads; la mayor parte del crecimiento vino del boca a boca',
							'Gestión de más de 15 proveedores y socios en la UE, incluida documentación de importación, logística y preparación de envíos',
							'Atención al cliente completa, además de facturación, contabilidad y control de presupuesto',
							'Preparación de documentación regulatoria y de producto para operar en Reino Unido y UE',
						],
					},
					{
						title: 'Pausa profesional — responsabilidades familiares y trabajo por cuenta propia',
						meta: 'España · diciembre de 2006 – noviembre de 2020',
						bullets: [
							'Dedicación principal a criar a mis dos hijas, con autofinanciación',
							'Gestión de una pequeña operación de reventa en eBay: búsqueda de producto, fotografía, publicación, precios, envío y comunicación con compradores',
							'Traslado a Reino Unido en noviembre de 2020',
						],
					},
					{
						title: 'Trayectoria anterior — Madrid, España',
						meta: '1989 – 1995',
						bullets: [
							'Asistente de dirección y responsable de administración, Ernst & Young — la división fue posteriormente adquirida por KnowledgeWare S.A. (1993–1995): llevaba la función administrativa y contable de la oficina, incluido un equipo comercial de seis personas dirigido por el Director General; contratos, relaciones bancarias, facturación, pagos a proveedores y gastos, y relación con clientes; formación contable en París',
							'Traductora e intérprete, Solutions Language and Communication (1992–1993): traducción jurídica, comercial y técnica EN/ES; interpretación en reuniones de negocio con bancos',
							'Asistente personal del Director General y Presidente / Traductora, VISA España (1989–1992): agenda ejecutiva, viajes, correspondencia, liaison bilingüe',
						],
					},
				],
			},
			{
				title: 'Formación',
				entries: [
					{
						title: 'Licenciatura en Lengua y Literatura Inglesa',
						meta: 'Universidad de Burgos, España',
					},
					{
						title: 'Inglés como lengua extranjera',
						meta: 'Universidad de Reading, Reino Unido',
					},
				],
			},
			{
				title: 'Herramientas y competences',
				items: [
					'Shopify · WordPress · Google Ads · marketing por email · Canva · Adobe Photoshop · Affinity · Excel, Word, Outlook, PowerPoint · Google Workspace · herramientas de IA para eficiencia en tareas y administración',
				],
			},
		],
	},
};