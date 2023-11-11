for %%F in ("%~dp0\features\*.feature") do (
	call npx kraken-node run
	move "%%F" "%~dp0\features\temp"
)
for %%F in ("%~dp0\features\temp\*.feature") do (
	move "%%F" "%~dp0\features"
)