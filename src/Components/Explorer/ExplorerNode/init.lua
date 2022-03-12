local hook = require(script.Parent.Parent.Parent.hook)
local NodeDetails = require(script.NodeDetails)
local Roact = require(script.Parent.Parent.Parent.Packages.Roact)
local StorybookDetails = require(script.StorybookDetails)
local types = require(script.Parent.types)

local e = Roact.createElement

export type Props = {
	node: types.Node,
	activeNode: types.Node?,
	onNodeActivated: (types.Node) -> (),
	indentLevel: number,
}

local function ExplorerNode(props: Props, hooks: any)
	local indentLevel = props.indentLevel or 0
	local hasChildren = props.node.children and #props.node.children > 0
	local children = {}

	local expanded, setExpanded = hooks.useState(false)
	local onActivated = hooks.useCallback(function()
		props.onNodeActivated(props.node)

		if hasChildren then
			setExpanded(not expanded)
		end
	end, { expanded, setExpanded })

	if hasChildren then
		children.Layout = Roact.createElement("UIListLayout", {
			SortOrder = Enum.SortOrder.Name,
		})

		if props.node.children then
			for index, child in ipairs(props.node.children) do
				children[child.name .. index] = Roact.createElement(ExplorerNode, {
					activeNode = props.activeNode,
					indentLevel = indentLevel + 1,
					node = child,
					onNodeActivated = props.onNodeActivated,
				})
			end
		end
	end

	return e("Frame", {
		AutomaticSize = Enum.AutomaticSize.Y,
		BackgroundTransparency = 1,
		ClipsDescendants = true,
		Size = UDim2.fromScale(1, 0),
	}, {
		UIListLayout = e("UIListLayout", {
			SortOrder = Enum.SortOrder.LayoutOrder,
		}),

		Node = props.node.icon == "storybook" and e(StorybookDetails, {
			expanded = expanded,
			hasChildren = hasChildren,
			node = props.node,
			onActivated = onActivated,
		}) or e(NodeDetails, {
			active = props.activeNode == props.node,
			expanded = expanded,
			hasChildren = hasChildren,
			indentLevel = indentLevel,
			node = props.node,
			onActivated = onActivated,
		}),

		ChildrenWrapper = (expanded and hasChildren) and e("Frame", {
			AutomaticSize = if expanded then Enum.AutomaticSize.Y else Enum.AutomaticSize.None,
			BackgroundTransparency = 1,
			LayoutOrder = 2,
			Size = UDim2.fromScale(1, 0),
		}, children),
	})
end

ExplorerNode = hook(ExplorerNode)

return ExplorerNode