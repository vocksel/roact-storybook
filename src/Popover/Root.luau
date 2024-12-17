local React = require("@pkg/React")

local useRef = React.useRef

export type Props = {
	isOpen: boolean,
	ref: React.Ref<GuiObject>?,
	children: React.Node,
}

local function Root(props: Props)
	local ref = useRef(nil)

	return React.createElement("Folder", {
		ref = ref,
	}, props.children)
end

return Root
