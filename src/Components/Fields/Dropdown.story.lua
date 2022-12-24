local flipbook = script:FindFirstAncestor("flipbook")

local Roact = require(flipbook.Packages.Roact)
local Dropdown = require(flipbook.Components.Fields.Dropdown)

local controls = {
	useDefault = true,
	numOptions = 3,
}

type Props = {
	controls: typeof(controls),
}

return {
	controls = controls,
	story = function(props: Props)
		local options = {}
		for i = 1, props.controls.numOptions do
			table.insert(options, "Option " .. i)
		end

		return Roact.createElement(Dropdown, {
			placeholder = "Select an option",
			default = if props.controls.useDefault then options[1] else nil,
			options = options,
			onOptionChange = function(option)
				print("Selected", option)
			end,
		})
	end,
}
