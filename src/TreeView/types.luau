local types = {}

export type TreeNodeIcon = "none" | "story" | "storybook" | "folder"

types.TreeNodeIcon = {
	None = "none" :: "none",
	Story = "story" :: "story",
	Storybook = "storybook" :: "storybook",
	Folder = "folder" :: "folder",
}

export type PartialTreeNode = {
	id: string?,
	label: string,
	icon: TreeNodeIcon?,
	isExpanded: boolean?,
	children: { PartialTreeNode }?,
	instance: Instance?,
}

export type TreeNode = {
	id: string,
	label: string,
	icon: TreeNodeIcon,
	isExpanded: boolean,
	children: { TreeNode },
	parent: TreeNode?,
	instance: Instance?,
}

export type Tree = {
	root: { PartialTreeNode },
	leafNodes: { TreeNode },
	nodesById: { [string]: TreeNode },
}

return types
