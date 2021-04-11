echo off
title RPC Starter
cls
:start
echo -------------------------------
echo Starting RPC
echo -------------------------------
node index.js
echo -------------------------------
echo Crashed... Looping for Restart
echo -------------------------------
timeout 1 > null
goto start
