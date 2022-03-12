local Branding = require(script.Parent.Branding)
local constants = require(script.Parent.Parent.constants)
local createStoryNodes = require(script.Parent.Parent.Modules.createStoryNodes)
local Explorer = require(script.Parent.Explorer)
local hook = require(script.Parent.Parent.hook)
local Llama = require(script.Parent.Parent.Packages.Llama)
local Roact = require(script.Parent.Parent.Packages.Roact)
local Searchbar = require(script.Parent.Searchbar)
local styles = require(script.Parent.Parent.styles)
local themes = require(script.Parent.Parent.themes)
local types = require(script.Parent.Parent.types)

local e = Roact.createElement

type Props = {
	selectStory: (types.Story) -> (),
	selectStorybook: (types.Storybook) -> (),
	storybooks: { types.Storybook },
}

local function Sidebar(props: Props, hooks: any)
	local activeNode, setActiveNode = hooks.useState(nil)

	local onNodeActivated = hooks.useCallback(function(node: Explorer.Node)
		if node.instance and node.name:match(constants.STORY_NAME_PATTERN) then
			props.selectStorybook(node.storybook)
			props.selectStory(node.instance)
			setActiveNode(node)
		end
	end, {})

	local storybookNodes = hooks.useMemo(function()
		return createStoryNodes(props.storybooks)
	end, { props.storybooks })

	return e("Frame", {
		BackgroundTransparency = 1,
		Size = UDim2.new(0, 230, 1, 0),
	}, {
		UIPadding = e("UIPadding", {
			PaddingBottom = styles.LARGE_PADDING,
			PaddingLeft = UDim.new(0, 0),
			PaddingRight = UDim.new(0, 0),
			PaddingTop = styles.LARGE_PADDING,
		}),

		Branding = e(Branding, {
			position = UDim2.fromOffset(20, 0),
			size = 22,
			tag = "DEV",
			tagColor = themes.Brand,
			tagSize = 8,
		}),

		Searchbar = e(Searchbar),

		Entries = e(
			"ScrollingFrame",
			Llama.Dictionary.merge(styles.ScrollingFrame, {
				BorderSizePixel = 0,
				Position = UDim2.fromOffset(0, 102),
				Size = UDim2.new(1, 0, 1, -102),
			}),
			{
				Explorer = e(Explorer, {
					activeNode = activeNode,
					nodes = storybookNodes,
					onNodeActivated = onNodeActivated,
				}),
			}
		),
	})
end

return hook(Sidebar)
