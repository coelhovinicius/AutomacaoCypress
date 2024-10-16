@echo off
REM Iniciar o servidor WireMock
start "" java -jar "C:\Users\coelh\Pessoal\TI\CURSOS\AutomacaoDeTestes\TestesDeCarga\wiremock-master\wiremock-standalone-3.9.1.jar"

REM Aguarde alguns segundos para garantir que o servidor WireMock esteja totalmente inicializado
timeout /t 5 /nobreak > nul

REM Rodar os testes com k6
k6 run --vus 10 --duration 10s "C:\Users\coelh\Pessoal\TI\CURSOS\AutomacaoDeTestes\TestesDeCarga\wiremock-master\live-performance\test-consulta.js"
k6 run --vus 10 --duration 10s "C:\Users\coelh\Pessoal\TI\CURSOS\AutomacaoDeTestes\TestesDeCarga\wiremock-master\live-performance\test-post-201.js"
k6 run --vus 10 --duration 10s "C:\Users\coelh\Pessoal\TI\CURSOS\AutomacaoDeTestes\TestesDeCarga\wiremock-master\live-performance\test-post-500.js"

REM Finalizar o servidor WireMock
taskkill /f /im java.exe

echo Testes finalizados!
pause
