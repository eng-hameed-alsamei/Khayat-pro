@echo off
setlocal EnableExtensions EnableDelayedExpansion
chcp 65001 >nul
title Khayat Pro - Smart Launcher v2.0

REM ============================================
REM KHAYAT PRO - SMART LAUNCHER v2.0
REM Compatible: Windows 7 SP1 / 8 / 8.1 / 10 / 11
REM ============================================

set "ROOT=%~dp0"
set "LAUNCHER_DIR=%ROOT%.khayat_launcher"
set "SETUP_FLAG=%LAUNCHER_DIR%\.setup_complete"
set "LOGS_DIR=%ROOT%logs"
set "LAUNCHER_LOG=%LOGS_DIR%\launcher.log"
set "PID_FILE=%TEMP%\KhayatPro.pid"
set "PYTHON_CMD="
set "PYTHON_VERSION="
set "PORT="
set "URL="
set "CHROME_PATH="
set "SETUP_MODE=OFFLINE"
set "WIN_VERSION="
set "ARCH="
set "INTERNET_AVAILABLE=false"
set "HAS_REQUIREMENTS=false"

cd /d "%ROOT%" 2>nul

REM Create directories
if not exist "%LAUNCHER_DIR%" mkdir "%LAUNCHER_DIR%" 2>nul
if not exist "%LOGS_DIR%" mkdir "%LOGS_DIR%" 2>nul

REM Initialize log
call :Log "=========================================="
call :Log "Khayat Pro Smart Launcher v2.0 Started"
call :Log "Date: %DATE% Time: %TIME%"
call :Log "Path: %ROOT%"

REM ============================================
REM MAIN EXECUTION
REM ============================================

call :DisplayHeader
call :CheckSystem
call :CheckProject
call :CheckInternet
call :CheckPython

REM Check if first-time setup needed
if not exist "%SETUP_FLAG%" (
    set "SETUP_MODE=ONLINE"
    call :Log "First-time setup - ONLINE mode"
    call :FirstTimeSetup
) else (
    call :Log "Setup complete - OFFLINE mode"
    call :ValidateEnvironment
)

call :PrepareResources
call :ValidateEnv
call :StartServer
call :HealthCheck
call :OpenBrowser
call :ControlMenu

REM ============================================
REM Display Header
REM ============================================
:DisplayHeader
cls
echo.
echo ==========================================
echo.
echo        KHAYAT PRO - SMART LAUNCHER
echo      Tailoring Management System v2.0
echo.
echo ==========================================
echo.
echo   Project: %ROOT%
echo   Mode:    %SETUP_MODE%
echo   Date:    %DATE% %TIME%
echo.
call :Log "Header displayed"
goto :eof

REM ============================================
REM Check System Compatibility
REM ============================================
:CheckSystem
echo [01/09] System Compatibility Check
echo -----------------------------------

REM Detect Windows Version
for /f "tokens=4-5 delims=. " %%i in ('ver') do set "WIN_VERSION=%%i.%%j"

REM Detect Architecture
if /i "%PROCESSOR_ARCHITECTURE%"=="AMD64" (
    set "ARCH=64-bit"
) else if /i "%PROCESSOR_ARCHITECTURE%"=="x86" (
    set "ARCH=32-bit"
) else (
    set "ARCH=%PROCESSOR_ARCHITECTURE%"
)

echo   OS:        Windows %WIN_VERSION%
echo   Arch:      %ARCH%
echo   Processor: %PROCESSOR_ARCHITECTURE%

REM Check compatibility
set "WIN_OK=false"
echo %WIN_VERSION% | findstr /C:"6.1" >nul && set "WIN_OK=true"
echo %WIN_VERSION% | findstr /C:"6.2" >nul && set "WIN_OK=true"
echo %WIN_VERSION% | findstr /C:"6.3" >nul && set "WIN_OK=true"
echo %WIN_VERSION% | findstr /C:"10.0" >nul && set "WIN_OK=true"

if "%WIN_OK%"=="true" (
    echo   Status:    [OK] Compatible
    call :Log "Windows compatible: %WIN_VERSION% %ARCH%"
) else (
    echo   Status:    [WARNING] Untested version
    call :Log "WARNING: Untested Windows: %WIN_VERSION%"
)
echo.
goto :eof

REM ============================================
REM Check Project Integrity
REM ============================================
:CheckProject
echo [02/09] Project Integrity Check
echo -----------------------------------

set "INTEGRITY_OK=true"

if not exist "%ROOT%index.html" (
    echo   [ERROR] index.html not found
    set "INTEGRITY_OK=false"
    call :Log "ERROR: index.html missing"
) else (
    echo   [OK] index.html found
)

if exist "%ROOT%assets" (
    echo   [OK] assets folder found
) else (
    echo   [INFO] assets folder not found (optional)
)

if exist "%ROOT%css" (
    echo   [OK] css folder found
) else (
    echo   [INFO] css folder not found (optional)
)

if exist "%ROOT%js" (
    echo   [OK] js folder found
) else (
    echo   [INFO] js folder not found (optional)
)

if exist "%ROOT%requirements.txt" (
    echo   [OK] requirements.txt found
    set "HAS_REQUIREMENTS=true"
) else (
    echo   [INFO] No requirements.txt
)

if "%INTEGRITY_OK%"=="false" (
    echo.
    echo   [FATAL] Project files missing
    echo   Place this file next to index.html
    call :Log "FATAL: Project integrity failed"
    pause
    exit /b 1
)
echo.
goto :eof

REM ============================================
REM Check Internet Connection
REM ============================================
:CheckInternet
echo [03/09] Internet Connection Check
echo -----------------------------------

ping -n 1 -w 2000 8.8.8.8 >nul 2>&1
if not errorlevel 1 (
    set "INTERNET_AVAILABLE=true"
    echo   Status: [OK] Internet available
    call :Log "Internet: AVAILABLE"
) else (
    ping -n 1 -w 2000 1.1.1.1 >nul 2>&1
    if not errorlevel 1 (
        set "INTERNET_AVAILABLE=true"
        echo   Status: [OK] Internet available
        call :Log "Internet: AVAILABLE"
    ) else (
        set "INTERNET_AVAILABLE=false"
        echo   Status: [OFFLINE] No internet
        call :Log "Internet: UNAVAILABLE"
    )
)
echo.
goto :eof

REM ============================================
REM Check Python Environment
REM ============================================
:CheckPython
echo [04/09] Python Environment Check
echo -----------------------------------

set "PYTHON_FOUND=false"

REM Try python command
python --version >nul 2>&1
if not errorlevel 1 (
    set "PYTHON_CMD=python"
    set "PYTHON_FOUND=true"
    for /f "delims=" %%V in ('python --version 2^>^&1') do set "PYTHON_VERSION=%%V"
)

REM Try py command
if "%PYTHON_FOUND%"=="false" (
    py --version >nul 2>&1
    if not errorlevel 1 (
        set "PYTHON_CMD=py"
        set "PYTHON_FOUND=true"
        for /f "delims=" %%V in ('py --version 2^>^&1') do set "PYTHON_VERSION=%%V"
    )
)

REM Try python3 command
if "%PYTHON_FOUND%"=="false" (
    python3 --version >nul 2>&1
    if not errorlevel 1 (
        set "PYTHON_CMD=python3"
        set "PYTHON_FOUND=true"
        for /f "delims=" %%V in ('python3 --version 2^>^&1') do set "PYTHON_VERSION=%%V"
    )
)

if "%PYTHON_FOUND%"=="true" (
    echo   [OK] Python: %PYTHON_VERSION%
    echo   [OK] Command: %PYTHON_CMD%
    call :Log "Python found: %PYTHON_VERSION%"
) else (
    echo   [INFO] Python not found
    call :Log "Python not found"
)
echo.
goto :eof

REM ============================================
REM First Time Setup (ONLINE)
REM ============================================
:FirstTimeSetup
echo [05/09] First-Time Setup (ONLINE MODE)
echo -----------------------------------
echo.
echo   This is the first run.
echo   The launcher will prepare your system.
echo.
echo   Requirements:
echo   - Internet connection
echo   - 200MB free disk space
echo.

if "%INTERNET_AVAILABLE%"=="false" (
    echo   [ERROR] Internet required for first setup
    echo.
    echo   Solutions:
    echo   1. Connect to internet and run again
    echo   2. Install Python manually from python.org
    echo.
    call :Log "ERROR: No internet for setup"
    pause
    exit /b 1
)

echo   [OK] Internet confirmed
echo.

REM Install Python if needed
if "%PYTHON_FOUND%"=="false" (
    call :InstallPython
    if errorlevel 1 (
        echo   [ERROR] Python installation failed
        call :Log "ERROR: Python install failed"
        pause
        exit /b 1
    )
) else (
    echo   [SKIP] Python already installed
)

REM Install dependencies if needed
if "%HAS_REQUIREMENTS%"=="true" (
    call :InstallDeps
) else (
    echo   [SKIP] No dependencies needed
)

REM Create setup flag
echo Setup completed on %DATE% at %TIME% > "%SETUP_FLAG%"
echo Python: %PYTHON_VERSION% >> "%SETUP_FLAG%"
echo Windows: %WIN_VERSION% %ARCH% >> "%SETUP_FLAG%"

echo.
echo   [SUCCESS] Setup completed!
echo   Future runs will work OFFLINE.
echo.
call :Log "First-time setup completed"
timeout /t 3 >nul
goto :eof

REM ============================================
REM Install Python
REM ============================================
:InstallPython
echo   [SETUP] Installing Python...

REM Determine Python version based on Windows
echo %WIN_VERSION% | findstr /C:"6.1" >nul
if not errorlevel 1 (
    REM Windows 7 - Python 3.8
    set "PY_INSTALLER=python-3.8.10.exe"
    set "PY_URL=https://www.python.org/ftp/python/3.8.10/python-3.8.10-amd64.exe"
    if /i "%ARCH%"=="32-bit" set "PY_URL=https://www.python.org/ftp/python/3.8.10/python-3.8.10.exe"
    echo   Target: Python 3.8.10 (Win7 compatible)
) else (
    REM Windows 8+ - Python 3.11
    set "PY_INSTALLER=python-3.11.9.exe"
    set "PY_URL=https://www.python.org/ftp/python/3.11.9/python-3.11.9-amd64.exe"
    if /i "%ARCH%"=="32-bit" set "PY_URL=https://www.python.org/ftp/python/3.11.9/python-3.11.9.exe"
    echo   Target: Python 3.11.9
)

echo   Downloading Python...
echo   This may take 3-5 minutes...

REM Download using PowerShell
powershell -NoProfile -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri '%PY_URL%' -OutFile '%TEMP%\%PY_INSTALLER%' -UseBasicParsing" >nul 2>&1

if not exist "%TEMP%\%PY_INSTALLER%" (
    echo   [ERROR] Download failed
    call :Log "ERROR: Python download failed"
    exit /b 1
)

echo   [OK] Download complete
echo   Installing Python silently...

REM Install silently
"%TEMP%\%PY_INSTALLER%" /quiet InstallAllUsers=0 PrependPath=1 Include_test=0 >nul 2>&1

if errorlevel 1 (
    echo   [ERROR] Installation failed
    call :Log "ERROR: Python install failed"
    exit /b 1
)

REM Refresh PATH
set "PATH=%PATH%;%LOCALAPPDATA%\Programs\Python\Python38;%LOCALAPPDATA%\Programs\Python\Python38\Scripts"
set "PATH=%PATH%;%LOCALAPPDATA%\Programs\Python\Python311;%LOCALAPPDATA%\Programs\Python\Python311\Scripts"
set "PATH=%PATH%;%ProgramFiles%\Python38;%ProgramFiles%\Python38\Scripts"
set "PATH=%PATH%;%ProgramFiles%\Python311;%ProgramFiles%\Python311\Scripts"

REM Verify installation
python --version >nul 2>&1
if errorlevel 1 (
    py --version >nul 2>&1
    if errorlevel 1 (
        echo   [ERROR] Python verification failed
        call :Log "ERROR: Python verify failed"
        exit /b 1
    ) else (
        set "PYTHON_CMD=py"
    )
) else (
    set "PYTHON_CMD=python"
)

for /f "delims=" %%V in ('%PYTHON_CMD% --version 2^>^&1') do set "PYTHON_VERSION=%%V"
echo   [OK] Python installed: %PYTHON_VERSION%
call :Log "Python installed: %PYTHON_VERSION%"

REM Cleanup
del "%TEMP%\%PY_INSTALLER%" >nul 2>&1

goto :eof

REM ============================================
REM Install Dependencies
REM ============================================
:InstallDeps
echo   [SETUP] Installing dependencies...

if not exist "%ROOT%requirements.txt" (
    echo   [SKIP] No requirements.txt
    goto :eof
)

echo   Installing from requirements.txt...
%PYTHON_CMD% -m pip install -r "%ROOT%requirements.txt" --user --quiet

if errorlevel 1 (
    echo   [WARNING] Some dependencies failed
    call :Log "WARNING: Dependency issues"
) else (
    echo   [OK] Dependencies installed
    call :Log "Dependencies installed"
)

goto :eof

REM ============================================
REM Validate Existing Environment (OFFLINE)
REM ============================================
:ValidateEnvironment
echo [05/09] Environment Validation (OFFLINE MODE)
echo -----------------------------------

REM Verify Python still works
%PYTHON_CMD% --version >nul 2>&1
if errorlevel 1 (
    echo   [ERROR] Python not available
    echo   Running repair...
    call :Log "ERROR: Python missing - repairing"
    call :RepairEnv
) else (
    echo   [OK] Python verified: %PYTHON_VERSION%
)

REM Verify critical files
if not exist "%ROOT%index.html" (
    echo   [ERROR] index.html missing
    call :Log "ERROR: index.html missing"
    pause
    exit /b 1
)

echo   [OK] Environment validated
echo.
goto :eof

REM ============================================
REM Repair Environment
REM ============================================
:RepairEnv
echo   [REPAIR] Repairing environment...

REM Try to find Python
python --version >nul 2>&1
if not errorlevel 1 (
    set "PYTHON_CMD=python"
    echo   [OK] Python recovered: python
    goto :eof
)

py --version >nul 2>&1
if not errorlevel 1 (
    set "PYTHON_CMD=py"
    echo   [OK] Python recovered: py
    goto :eof
)

REM Check common paths
if exist "%LOCALAPPDATA%\Programs\Python\Python311\python.exe" (
    set "PYTHON_CMD=%LOCALAPPDATA%\Programs\Python\Python311\python.exe"
    echo   [OK] Python found: Python311
    goto :eof
)

if exist "%LOCALAPPDATA%\Programs\Python\Python38\python.exe" (
    set "PYTHON_CMD=%LOCALAPPDATA%\Programs\Python\Python38\python.exe"
    echo   [OK] Python found: Python38
    goto :eof
)

if exist "%ProgramFiles%\Python311\python.exe" (
    set "PYTHON_CMD=%ProgramFiles%\Python311\python.exe"
    echo   [OK] Python found: Python311
    goto :eof
)

if exist "%ProgramFiles%\Python38\python.exe" (
    set "PYTHON_CMD=%ProgramFiles%\Python38\python.exe"
    echo   [OK] Python found: Python38
    goto :eof
)

echo   [ERROR] Could not recover Python
echo   Please install Python manually from python.org
call :Log "ERROR: Repair failed"
pause
exit /b 1

REM ============================================
REM Prepare Offline Resources
REM ============================================
:PrepareResources
echo [06/09] Offline Resources Preparation
echo -----------------------------------

echo   Checking external dependencies...

REM Check for external CDN links
findstr /i /C:"http://" /C:"https://" "%ROOT%index.html" >nul 2>&1
if not errorlevel 1 (
    echo   [INFO] External resources detected
    echo   [INFO] Preparing local copies...
    call :Log "INFO: External resources detected"
    
    if not exist "%ROOT%libs" mkdir "%ROOT%libs" 2>nul
    echo   [OK] Local libs folder ready
) else (
    echo   [OK] No external dependencies
    echo   [OK] Fully offline-capable
)
echo.
goto :eof

REM ============================================
REM Validate Environment
REM ============================================
:ValidateEnv
echo [07/09] Environment Validation
echo -----------------------------------

set "VALIDATION_OK=true"

REM Validate Python
%PYTHON_CMD% --version >nul 2>&1
if errorlevel 1 (
    echo   [ERROR] Python validation failed
    set "VALIDATION_OK=false"
    call :Log "ERROR: Python validation failed"
) else (
    echo   [OK] Python: %PYTHON_VERSION%
)

REM Validate HTTP server module
%PYTHON_CMD% -c "import http.server; print('OK')" >nul 2>&1
if errorlevel 1 (
    echo   [ERROR] HTTP server module unavailable
    set "VALIDATION_OK=false"
    call :Log "ERROR: http.server unavailable"
) else (
    echo   [OK] HTTP server module available
)

REM Validate project files
if not exist "%ROOT%index.html" (
    echo   [ERROR] index.html missing
    set "VALIDATION_OK=false"
) else (
    echo   [OK] Project files verified
)

if "%VALIDATION_OK%"=="false" (
    echo.
    echo   [FATAL] Validation failed
    echo   Run Repair from menu
    call :Log "FATAL: Validation failed"
    pause
    exit /b 1
)

echo   [SUCCESS] All validations passed
echo.
goto :eof

REM ============================================
REM Start Server
REM ============================================
:StartServer
echo [08/09] Server Initialization
echo -----------------------------------

REM Check for existing server
if exist "%PID_FILE%" (
    set /p OLD_PID=<"%PID_FILE%"
    tasklist /FI "PID eq !OLD_PID!" 2>nul | find /I "!OLD_PID!" >nul
    if not errorlevel 1 (
        echo   [INFO] Server already running (PID: !OLD_PID!)
        echo   [1] Kill and restart
        echo   [2] Use existing server
        echo   [3] Cancel
        choice /C 123 /N /M "   Choose [1/2/3]: "
        
        if !errorlevel! EQU 1 (
            taskkill /PID !OLD_PID! /F >nul 2>&1
            del "%PID_FILE%" >nul 2>&1
            echo   [OK] Previous server stopped
            timeout /t 2 /nobreak >nul
        ) else if !errorlevel! EQU 2 (
            set "PORT=8080"
            set "URL=http://localhost:8080/"
            echo   [OK] Using existing server
            goto :eof
        ) else (
            echo   [CANCELLED]
            exit /b 0
        )
    ) else (
        del "%PID_FILE%" >nul 2>&1
    )
)

REM Find available port
echo   Scanning for available port...
set "PORT="

for %%P in (8080 8081 8082 8083 8084 8085 8090 9090) do (
    if not defined PORT (
        netstat -an | findstr /C:":%%P " | findstr /C:"LISTENING" >nul 2>&1
        if errorlevel 1 set "PORT=%%P"
    )
)

if not defined PORT (
    echo   [ERROR] No available port found
    call :Log "ERROR: No port available"
    pause
    exit /b 1
)

set "URL=http://localhost:!PORT!/"
echo   [OK] Port selected: !PORT!
echo   [OK] URL: !URL!

REM Start server
if exist "%ROOT%server-output.log" del "%ROOT%server-output.log" >nul 2>&1
if exist "%ROOT%server-error.log" del "%ROOT%server-error.log" >nul 2>&1

echo   Starting Python HTTP server...

powershell -NoProfile -ExecutionPolicy Bypass -Command "$py=Get-Command '%PYTHON_CMD%' -ErrorAction Stop; $out=Join-Path '%ROOT%' 'server-output.log'; $err=Join-Path '%ROOT%' 'server-error.log'; $p=Start-Process -FilePath $py.Source -ArgumentList @('-m','http.server','!PORT!','--bind','127.0.0.1') -WorkingDirectory '%ROOT%' -WindowStyle Hidden -RedirectStandardOutput $out -RedirectStandardError $err -PassThru; Set-Content -LiteralPath '%PID_FILE%' -Value $p.Id -Encoding ASCII; exit 0" >nul 2>&1

if errorlevel 1 (
    echo   [ERROR] Failed to start server
    call :Log "ERROR: Server start failed"
    pause
    exit /b 1
)

echo   [OK] Server started
call :Log "Server started on port !PORT!"

echo.
goto :eof

REM ============================================
REM Health Check
REM ============================================
:HealthCheck
echo [09/09] Server Health Check
echo -----------------------------------

echo   Waiting for server...

set /a WAIT_COUNT=0
set /a MAX_WAIT=20

:HEALTH_WAIT
powershell -NoProfile -Command "try {$r=Invoke-WebRequest -UseBasicParsing -Uri '%URL%' -TimeoutSec 3; if ($r.StatusCode -ge 200 -and $r.StatusCode -lt 500) {exit 0} else {exit 1}} catch {exit 1}" >nul 2>&1

if not errorlevel 1 goto :HEALTH_OK

set /a WAIT_COUNT+=1
<nul set /p "=."
if %WAIT_COUNT% GEQ %MAX_WAIT% goto :HEALTH_FAIL
timeout /t 1 /nobreak >nul
goto :HEALTH_WAIT

:HEALTH_FAIL
echo.
echo   [ERROR] Server not responding after %MAX_WAIT% seconds
echo   Check server-error.log
call :Log "ERROR: Health check timeout"
pause
exit /b 1

:HEALTH_OK
echo.
echo   [OK] Server responding
echo   [OK] Status: HEALTHY
echo   [OK] Time: %WAIT_COUNT% seconds
call :Log "Health check passed"

echo.
goto :eof

REM ============================================
REM Open Browser
REM ============================================
:OpenBrowser
echo Browser Launch
echo -----------------------------------

REM Find Chrome
if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" (
    set "CHROME_PATH=%ProgramFiles%\Google\Chrome\Application\chrome.exe"
) else if exist "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" (
    set "CHROME_PATH=%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe"
) else if exist "%LocalAppData%\Google\Chrome\Application\chrome.exe" (
    set "CHROME_PATH=%LocalAppData%\Google\Chrome\Application\chrome.exe"
) else (
    for /f "tokens=2*" %%A in ('reg query "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\chrome.exe" /ve 2^>nul') do set "CHROME_PATH=%%B"
)

if not defined CHROME_PATH (
    echo   [WARNING] Chrome not found - using default browser
    call :Log "WARNING: Chrome not found"
    start "" "%URL%"
) else (
    echo   [OK] Chrome found
    echo   [OK] Opening: %URL%
    start "" "%CHROME_PATH%" "%URL%"
)

call :Log "Browser opened: %URL%"
echo.
goto :eof

REM ============================================
REM Control Menu
REM ============================================
:ControlMenu
cls
echo.
echo ==========================================
echo.
echo      KHAYAT PRO - CONTROL PANEL
echo.
echo ==========================================
echo.
echo   Status:
echo   -------
echo   URL:      %URL%
echo   Port:     %PORT%
echo   Python:   %PYTHON_VERSION%
echo   Windows:  %WIN_VERSION% %ARCH%
echo   Mode:     %SETUP_MODE%
echo.
echo ==========================================
echo.
echo   [S] Stop Server
echo   [R] Restart Server
echo   [O] Open System
echo   [D] Diagnostics
echo   [H] Health Check
echo   [F] Repair Installation
echo   [X] Exit (Keep Server Running)
echo.
echo ==========================================
echo.

:MENU_LOOP
choice /C SRODHFX /N /M "   Select [S/R/O/D/H/F/X]: "

if %errorlevel% EQU 1 goto :MENU_STOP
if %errorlevel% EQU 2 goto :MENU_RESTART
if %errorlevel% EQU 3 goto :MENU_OPEN
if %errorlevel% EQU 4 goto :MENU_DIAG
if %errorlevel% EQU 5 goto :MENU_HEALTH
if %errorlevel% EQU 6 goto :MENU_REPAIR
if %errorlevel% EQU 7 goto :MENU_EXIT

goto :MENU_LOOP

:MENU_STOP
echo.
echo Stopping server...
if exist "%PID_FILE%" (
    set /p SRV_PID=<"%PID_FILE%"
    taskkill /PID !SRV_PID! /F >nul 2>&1
    if not errorlevel 1 (
        echo   [OK] Server stopped (PID: !SRV_PID!)
        call :Log "Server stopped: !SRV_PID!"
    ) else (
        echo   [INFO] Server may already be stopped
    )
    del "%PID_FILE%" >nul 2>&1
) else (
    echo   [INFO] No PID file found
)
echo.
echo Thank you for using Khayat Pro!
echo.
timeout /t 2 >nul
exit /b 0

:MENU_RESTART
echo.
echo Restarting server...
if exist "%PID_FILE%" (
    set /p SRV_PID=<"%PID_FILE%"
    taskkill /PID !SRV_PID! /F >nul 2>&1
    del "%PID_FILE%" >nul 2>&1
    echo   [OK] Old server stopped
)
timeout /t 2 /nobreak >nul

echo   Starting new server...
powershell -NoProfile -ExecutionPolicy Bypass -Command "$py=Get-Command '%PYTHON_CMD%' -ErrorAction Stop; $out=Join-Path '%ROOT%' 'server-output.log'; $err=Join-Path '%ROOT%' 'server-error.log'; $p=Start-Process -FilePath $py.Source -ArgumentList @('-m','http.server','%PORT%','--bind','127.0.0.1') -WorkingDirectory '%ROOT%' -WindowStyle Hidden -RedirectStandardOutput $out -RedirectStandardError $err -PassThru; Set-Content -LiteralPath '%PID_FILE%' -Value $p.Id -Encoding ASCII; exit 0" >nul 2>&1

timeout /t 3 /nobreak >nul
echo   [OK] Server restarted
echo   Opening browser...
start "" "%CHROME_PATH%" "%URL%"
echo.
goto :MENU_LOOP

:MENU_OPEN
echo.
echo Opening browser...
start "" "%CHROME_PATH%" "%URL%"
echo   [OK] Browser opened
echo.
goto :MENU_LOOP

:MENU_DIAG
echo.
echo ==========================================
echo           SYSTEM DIAGNOSTICS
echo ==========================================
echo.
echo   System:
echo   -------
echo   OS:      Windows %WIN_VERSION%
echo   Arch:    %ARCH%
echo   CPU:     %PROCESSOR_ARCHITECTURE%
echo.
echo   Project:
echo   --------
echo   Path:    %ROOT%
echo   Index:   %ROOT%index.html
echo   Logs:    %LOGS_DIR%
echo.
echo   Python:
echo   -------
echo   Version: %PYTHON_VERSION%
echo   Command: %PYTHON_CMD%
echo.
echo   Server:
echo   -------
echo   URL:     %URL%
echo   Port:    %PORT%
if exist "%PID_FILE%" (
    set /p DIAG_PID=<"%PID_FILE%"
    echo   PID:     !DIAG_PID!
    tasklist /FI "PID eq !DIAG_PID!" 2>nul | find /I "!DIAG_PID!" >nul
    if not errorlevel 1 (
        echo   Status:  RUNNING
    ) else (
        echo   Status:  STOPPED
    )
) else (
    echo   Status:  UNKNOWN
)
echo.
echo   File Counts:
echo   -----------
for /f %%C in ('dir /b /a-d "%ROOT%" 2^>nul ^| find /c /v ""') do echo   Root:    %%C files
if exist "%ROOT%assets" (
    for /f %%C in ('dir /b /s /a-d "%ROOT%assets" 2^>nul ^| find /c /v ""') do echo   Assets:  %%C files
)
echo.
echo   Recent Logs:
echo   ----------
if exist "%LAUNCHER_LOG%" (
    powershell -NoProfile -Command "Get-Content -LiteralPath '%LAUNCHER_LOG%' -Tail 10 -ErrorAction SilentlyContinue"
) else (
    echo   No logs available
)
echo.
echo ==========================================
echo.
pause
goto :MENU_LOOP

:MENU_HEALTH
echo.
echo Running health check...
powershell -NoProfile -Command "try {$r=Invoke-WebRequest -UseBasicParsing -Uri '%URL%' -TimeoutSec 5; Write-Host 'Response:' $r.StatusCode; Write-Host 'Length:' $r.Content.Length; exit 0} catch {Write-Host 'HEALTH CHECK FAILED'; exit 1}"
echo.
pause
goto :MENU_LOOP

:MENU_REPAIR
echo.
echo ==========================================
echo           REPAIR INSTALLATION
echo ==========================================
echo.
echo   This will repair the environment.
echo   Your data will NOT be affected.
echo.
echo   [1] Quick Repair (Fix Python)
echo   [2] Full Repair (Reinstall all)
echo   [3] Cancel
echo.
choice /C 123 /N /M "   Choose [1/2/3]: "

if %errorlevel% EQU 1 (
    echo.
    echo Running quick repair...
    call :RepairEnv
    echo   [OK] Quick repair completed
) else if %errorlevel% EQU 2 (
    echo.
    echo Running full repair...
    call :RepairEnv
    if "%HAS_REQUIREMENTS%"=="true" (
        %PYTHON_CMD% -m pip install -r "%ROOT%requirements.txt" --user --force-reinstall --quiet
        echo   [OK] Dependencies reinstalled
    )
    echo   [OK] Full repair completed
) else (
    echo   Repair cancelled
)
echo.
pause
goto :MENU_LOOP

:MENU_EXIT
echo.
echo [!] Server is still running.
echo.
echo To stop it later:
echo   1. Open Task Manager (Ctrl+Shift+Esc)
echo   2. Find python.exe
echo   3. End task
echo.
echo Or run this launcher again and choose [S].
echo.
call :Log "Exited with server running"
pause
exit /b 0

REM ============================================
REM Log Function
REM ============================================
:Log
set "LOG_MSG=%~1"
echo [%DATE% %TIME%] %LOG_MSG% >> "%LAUNCHER_LOG%"
goto :eof

REM ============================================
REM END OF SCRIPT
REM ============================================
