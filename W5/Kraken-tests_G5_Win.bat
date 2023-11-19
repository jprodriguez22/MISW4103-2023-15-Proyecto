for %%F in ("%~dp0\features\Ghost 5\*.feature") do (	
	move "%%F" "%~dp0\features"
)
for %%F in ("%~dp0\features\*.feature") do (
	call npx kraken-node run
	move "%%F" "%~dp0\features\Ghost 5"
)