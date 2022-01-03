local Packages = script.Parent.Parent.Packages

local ModuleLoader = require(Packages.ModuleLoader)
local Roact = require(Packages.Roact)

local function useStory(hooks: any, module: ModuleScript)
	local story, setStory = hooks.useState(nil)

	hooks.useEffect(function()
		if module then
			local loader = ModuleLoader.new()

			-- Roact needs to be cached so that the story is using the same
			-- table instance as the plugin
			loader:cache(Packages.Roact, Roact)

			local result = loader:require(module)
			setStory(result.story)

			loader:clear()
		end
	end, { module })

	return story
end

return useStory
