local React = require("@pkg/React")

local useContext = React.useContext
local useState = React.useState

export type PopoverContext = {
	portal: Instance?,
	setPortal: (portal: Instance) -> (),
}

local PopoverContext = React.createContext(nil :: PopoverContext?)

local function PopoverProvider(props: {
	children: React.Node,
})
	local portal: Instance?, setPortal = useState(nil :: Instance?)

	local context: PopoverContext = {
		portal = portal,
		setPortal = setPortal,
	}

	return React.createElement(PopoverContext.Provider, {
		value = context,
	}, props.children)
end

local function use(): PopoverContext
	local context = useContext(PopoverContext)
	if context then
		return context
	else
		error("failed to use PopoverContext, is `PopoverContext.Provider` defined in the React hierarchy?")
	end
end

return {
	Provider = PopoverProvider,
	use = use,
}
