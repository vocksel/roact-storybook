import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
	docs: [
		'intro',
		'install',
		{
			type: 'category',
			label: 'Stories',
			collapsed: false,
			link: {
				type: 'generated-index',
			},
			items: [
				"creating-stories/writing-stories",
				"creating-stories/controls",
				"creating-stories/typechecking",
				"creating-stories/story-format",
			]
		},
		{
			type: 'category',
			label: 'Frameworks',
			collapsed: false,
			link: {
				type: 'generated-index',
			},
			items: [
				{
					type: 'autogenerated',
					dirName: 'frameworks',
				}
			]
		},
		{
			type: 'category',
			label: 'Contributing',
			link: {
				type: 'generated-index',
			},
			items: [
				{
					type: 'autogenerated',
					dirName: 'contributing',
				}
			]
		},
	],
};

export default sidebars;
