local ReplicatedStorage = game:GetService("ReplicatedStorage")

local Jest = require(ReplicatedStorage.Packages.Jest)

local root = ReplicatedStorage.flipbook

_G.__DEV__ = true
_G.__ROACT_17_MOCK_SCHEDULER__ = true

local status, result = Jest.runCLI(root, {
	verbose = false,
	ci = false,
}, { root }):awaitStatus()

if status == "Rejected" then
	print(result)
end

if status ~= "Resolved" or result.results.numFailedTestSuites > 0 or result.results.numFailedTests > 0 then
	error(1)
end

return nil
