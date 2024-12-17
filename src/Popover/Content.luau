local React = require("@pkg/React")
local ReactRoblox = require("@pkg/ReactRoblox")

local PopoverContext = require("./PopoverContext")

export type Props = {
	children: React.Node,
	ref: React.Ref<GuiObject>,
}

local function Content(props: Props)
	local popoverContext = PopoverContext.use()

	if popoverContext.portal then
		return ReactRoblox.createPortal(props.children, popoverContext.portal)
	else
		return nil
	end
end

return Content
