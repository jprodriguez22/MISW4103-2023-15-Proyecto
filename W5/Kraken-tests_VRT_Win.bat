for %%F in ("%~dp0\features\VRT\Ghost 3\*.feature") do (	
	move "%%F" "%~dp0\features"
)
for %%F in ("%~dp0\features\*.feature") do (
	call npx kraken-node run
	move "%%F" "%~dp0\features\VRT\Ghost 3"
)
for %%F in ("%~dp0\features\VRT\Ghost 5\*.feature") do (	
	move "%%F" "%~dp0\features"
)
for %%F in ("%~dp0\features\*.feature") do (
	call npx kraken-node run
	move "%%F" "%~dp0\features\VRT\Ghost 5"