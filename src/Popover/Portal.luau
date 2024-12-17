local React = require("@pkg/React")

local PopoverContext = require("./PopoverContext")

local useRef = React.useRef
local useEffect = React.useEffect

local function Portal()
	local ref = useRef(nil :: Folder?)
	local popoverContext = PopoverContext.use()

	useEffect(function()
		popoverContext.setPortal(ref.current)
	end, { popoverContext.setPortal })

	return React.createElement("Folder", {
		ref = ref,
	})
end

return Portal
